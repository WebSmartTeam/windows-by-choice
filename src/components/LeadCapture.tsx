import React, { useState } from 'react';
import { Mail, Download, CheckCircle, User, Phone, MapPin } from 'lucide-react';

interface LeadCaptureProps {
  downloadType: string;
  onSuccess?: (leadData: any) => void;
}

interface LeadData {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  postcode?: string;
  projectType?: string;
  timeframe?: string;
  budget?: string;
  emailConsent: boolean;
  downloadType: string;
  timestamp: string;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ downloadType, onSuccess }) => {
  const [leadData, setLeadData] = useState<Partial<LeadData>>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    postcode: '',
    projectType: '',
    timeframe: '',
    budget: '',
    emailConsent: false,
    downloadType
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const projectTypes = [
    'Windows replacement',
    'Door installation',
    'Conservatory',
    'Orangery/Living room',
    'Multiple projects',
    'Just researching'
  ];

  const timeframes = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'No specific timeframe'
  ];

  const budgets = [
    'Under £5,000',
    '£5,000 - £10,000',
    '£10,000 - £20,000',
    '£20,000 - £50,000',
    'Over £50,000',
    'Need guidance on budget'
  ];

  const handleInputChange = (field: keyof LeadData, value: string | boolean) => {
    setLeadData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!leadData.email || !leadData.firstName || !leadData.lastName) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save lead data (in a real app, this would go to your CRM/database)
      const completeLeadData = {
        ...leadData,
        timestamp: new Date().toISOString(),
        source: 'PDF Download',
        leadScore: calculateLeadScore(leadData)
      };

      // Store in localStorage for demo purposes
      const existingLeads = JSON.parse(localStorage.getItem('wbc_leads') || '[]');
      existingLeads.push(completeLeadData);
      localStorage.setItem('wbc_leads', JSON.stringify(existingLeads));

      // Track the download event
      trackDownloadEvent(completeLeadData);

      setShowSuccess(true);
      
      if (onSuccess) {
        onSuccess(completeLeadData);
      }

      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentStep(1);
        setLeadData({
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          postcode: '',
          projectType: '',
          timeframe: '',
          budget: '',
          emailConsent: false,
          downloadType
        });
      }, 3000);

    } catch (error) {
      console.error('Lead capture failed:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateLeadScore = (data: Partial<LeadData>): number => {
    let score = 0;
    
    // Base score for providing contact info
    score += 20;
    
    // Phone number provided
    if (data.phone) score += 15;
    
    // Project type specified
    if (data.projectType && data.projectType !== 'Just researching') score += 20;
    
    // Timeframe urgency
    switch (data.timeframe) {
      case 'Within 1 month': score += 30; break;
      case '1-3 months': score += 25; break;
      case '3-6 months': score += 15; break;
      case '6-12 months': score += 10; break;
    }
    
    // Budget indication
    if (data.budget && data.budget !== 'Need guidance on budget') score += 15;
    
    return Math.min(score, 100);
  };

  const trackDownloadEvent = (leadData: any) => {
    // Analytics tracking (Google Analytics, Facebook Pixel, etc.)
    if (typeof window !== 'undefined') {
      // Google Analytics 4 event
      if ((window as any).gtag) {
        (window as any).gtag('event', 'lead_generation', {
          'custom_parameters': {
            'download_type': leadData.downloadType,
            'lead_score': leadData.leadScore,
            'project_type': leadData.projectType,
            'timeframe': leadData.timeframe
          }
        });
      }

      // Facebook Pixel event
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead', {
          content_name: leadData.downloadType,
          content_category: 'PDF Guide',
          value: leadData.leadScore,
          currency: 'GBP'
        });
      }
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-emerald-800 mb-2">Download Ready!</h3>
        <p className="text-emerald-700 mb-4">
          Your guide is being prepared and will be emailed to you shortly.
        </p>
        <p className="text-sm text-emerald-600">
          We'll also send you our monthly newsletter with expert tips and special offers.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-6">
        <Download className="w-12 h-12 text-blue-800 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          Download Your Free Guide
        </h3>
        <p className="text-slate-600">
          Get instant access to professional home improvement advice
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-2">
          {[1, 2].map((step) => (
            <React.Fragment key={step}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step 
                  ? 'bg-blue-800 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < 2 && (
                <div className={`w-8 h-1 ${
                  currentStep > step ? 'bg-blue-800' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800 mb-4">Contact Information</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={leadData.firstName || ''}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={leadData.lastName || ''}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={leadData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number (optional)
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={leadData.phone || ''}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Postcode (optional)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={leadData.postcode || ''}
                  onChange={(e) => handleInputChange('postcode', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. SG17 5AB"
                />
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentStep(2)}
            disabled={!leadData.email || !leadData.firstName || !leadData.lastName}
            className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
              leadData.email && leadData.firstName && leadData.lastName
                ? 'bg-blue-800 text-white hover:bg-blue-900'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue to Project Details
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800 mb-4">Project Information (Optional)</h4>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What type of project are you considering?
            </label>
            <select
              value={leadData.projectType || ''}
              onChange={(e) => handleInputChange('projectType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What's your timeframe?
            </label>
            <select
              value={leadData.timeframe || ''}
              onChange={(e) => handleInputChange('timeframe', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select timeframe</option>
              {timeframes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              What's your approximate budget?
            </label>
            <select
              value={leadData.budget || ''}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select budget range</option>
              {budgets.map(budget => (
                <option key={budget} value={budget}>{budget}</option>
              ))}
            </select>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
            <input
              type="checkbox"
              id="emailConsent"
              checked={leadData.emailConsent || false}
              onChange={(e) => handleInputChange('emailConsent', e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="emailConsent" className="text-sm text-slate-600">
              I would like to receive helpful tips, special offers, and updates about Windows by Choice services. 
              You can unsubscribe at any time.
            </label>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentStep(1)}
              className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`flex-1 py-3 rounded-lg font-medium transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-800 hover:bg-blue-900 text-white'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Preparing Download...
                </div>
              ) : (
                'Download Guide'
              )}
            </button>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500 mt-4 text-center">
        By downloading this guide, you agree to our privacy policy. We respect your privacy and will never share your information.
      </p>
    </div>
  );
};

export default LeadCapture;