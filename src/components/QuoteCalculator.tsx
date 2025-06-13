import React, { useState, useEffect } from 'react';
import { Calculator, ChevronLeft, ChevronRight, CheckCircle, Phone, Mail, Download, Shield, Award, Users, Home, Building2, DoorOpen, Building, Palette, Eye, Lock, Thermometer, Star, AlertCircle } from 'lucide-react';

// Types and Interfaces
interface QuoteStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postcode: string;
  preferredContact: 'phone' | 'email';
  preferredTime: string;
  projectTimeline: string;
}

interface QuoteData {
  serviceType: 'windows' | 'doors' | 'conservatories' | 'combo' | '';
  propertyType: 'house' | 'flat' | 'commercial' | '';
  windowCount: number;
  doorCount: number;
  conservatoryType: string;
  materials: string[];
  features: string[];
  installation: string;
  estimatedPrice: number;
  customerDetails: CustomerDetails;
}

const QuoteCalculator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    serviceType: '',
    propertyType: '',
    windowCount: 0,
    doorCount: 0,
    conservatoryType: '',
    materials: [],
    features: [],
    installation: '',
    estimatedPrice: 0,
    customerDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postcode: '',
      preferredContact: 'phone',
      preferredTime: 'morning',
      projectTimeline: '1-3months'
    }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const steps: QuoteStep[] = [
    { id: 'service', title: 'Service Type', description: 'What are you looking for?', completed: false },
    { id: 'property', title: 'Property Details', description: 'Tell us about your property', completed: false },
    { id: 'requirements', title: 'Requirements', description: 'Specific needs and quantities', completed: false },
    { id: 'materials', title: 'Materials & Style', description: 'Choose your preferences', completed: false },
    { id: 'features', title: 'Additional Features', description: 'Extra options and upgrades', completed: false },
    { id: 'installation', title: 'Installation', description: 'Installation requirements', completed: false },
    { id: 'details', title: 'Your Details', description: 'Contact information', completed: false },
    { id: 'quote', title: 'Your Quote', description: 'Estimated pricing', completed: false }
  ];

  // Pricing logic
  useEffect(() => {
    calculateEstimate();
  }, [quoteData.serviceType, quoteData.propertyType, quoteData.windowCount, quoteData.doorCount, quoteData.conservatoryType, quoteData.materials, quoteData.features, quoteData.installation]);

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Windows pricing
    if (quoteData.windowCount > 0) {
      const windowBasePrice = quoteData.materials.includes('aluminium') ? 800 : 500;
      basePrice += quoteData.windowCount * windowBasePrice;
    }
    
    // Doors pricing
    if (quoteData.doorCount > 0) {
      const doorBasePrice = quoteData.materials.includes('composite') ? 1200 : 
                           quoteData.materials.includes('bifold') ? 2000 : 800;
      basePrice += quoteData.doorCount * doorBasePrice;
    }
    
    // Conservatory pricing
    if (quoteData.conservatoryType) {
      const conservatoryPrices: {[key: string]: number} = {
        'lean-to': 12000,
        'victorian': 15000,
        'edwardian': 16000,
        'p-shaped': 20000,
        't-shaped': 22000,
        'orangery': 25000
      };
      basePrice += conservatoryPrices[quoteData.conservatoryType] || 15000;
    }
    
    // Features multiplier
    let multiplier = 1;
    if (quoteData.features.includes('triple-glazing')) multiplier += 0.3;
    if (quoteData.features.includes('security-upgrade')) multiplier += 0.15;
    if (quoteData.features.includes('smart-features')) multiplier += 0.2;
    
    // Property type multiplier
    if (quoteData.propertyType === 'commercial') multiplier += 0.4;
    if (quoteData.propertyType === 'flat') multiplier += 0.1;
    
    // Installation complexity
    if (quoteData.installation === 'complex') multiplier += 0.25;
    if (quoteData.installation === 'scaffolding') multiplier += 0.35;
    
    const finalPrice = Math.round(basePrice * multiplier);
    setQuoteData(prev => ({ ...prev, estimatedPrice: finalPrice }));
  };

  const validateStep = (stepIndex: number): boolean => {
    const newErrors: {[key: string]: string} = {};
    
    switch (stepIndex) {
      case 0:
        if (!quoteData.serviceType) newErrors.serviceType = 'Please select a service type';
        break;
      case 1:
        if (!quoteData.propertyType) newErrors.propertyType = 'Please select your property type';
        break;
      case 2:
        if (quoteData.serviceType.includes('windows') && quoteData.windowCount === 0) 
          newErrors.windowCount = 'Please specify number of windows';
        if (quoteData.serviceType.includes('doors') && quoteData.doorCount === 0) 
          newErrors.doorCount = 'Please specify number of doors';
        if (quoteData.serviceType === 'conservatories' && !quoteData.conservatoryType) 
          newErrors.conservatoryType = 'Please select conservatory type';
        break;
      case 3:
        if (quoteData.materials.length === 0) newErrors.materials = 'Please select at least one material';
        break;
      case 6:
        if (!quoteData.customerDetails.firstName) newErrors.firstName = 'First name is required';
        if (!quoteData.customerDetails.lastName) newErrors.lastName = 'Last name is required';
        if (!quoteData.customerDetails.email) newErrors.email = 'Email is required';
        if (!quoteData.customerDetails.phone) newErrors.phone = 'Phone number is required';
        if (!quoteData.customerDetails.postcode) newErrors.postcode = 'Postcode is required';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCustomerDetailsChange = (field: keyof CustomerDetails, value: string) => {
    setQuoteData(prev => ({
      ...prev,
      customerDetails: {
        ...prev.customerDetails,
        [field]: value
      }
    }));
  };

  const sendQuoteEmail = async (leadData: any) => {
    try {
      // Create email content
      const emailContent = `
        New Quote Request from Windows by Choice Website
        
        Customer Details:
        - Name: ${leadData.customerDetails.firstName} ${leadData.customerDetails.lastName}
        - Email: ${leadData.customerDetails.email}
        - Phone: ${leadData.customerDetails.phone}
        - Postcode: ${leadData.customerDetails.postcode}
        - Preferred Contact: ${leadData.customerDetails.preferredContact}
        - Preferred Time: ${leadData.customerDetails.preferredTime}
        - Project Timeline: ${leadData.customerDetails.projectTimeline}
        
        Quote Details:
        - Service Type: ${leadData.serviceType}
        - Property Type: ${leadData.propertyType}
        - Window Count: ${leadData.windowCount}
        - Door Count: ${leadData.doorCount}
        - Conservatory Type: ${leadData.conservatoryType}
        - Materials: ${leadData.materials.join(', ')}
        - Features: ${leadData.features.join(', ')}
        - Installation: ${leadData.installation}
        - Estimated Price: £${leadData.estimatedPrice.toLocaleString()}
        
        Timestamp: ${leadData.timestamp}
        Source: ${leadData.source}
        Lead Value: £${leadData.leadValue.toLocaleString()}
      `;

      // For testing - simple console log and simulated email
      console.log('Email would be sent to: peteg@web-smart.co');
      console.log('Email content:', emailContent);
      
      // TODO: Replace with actual email service
      // This is a placeholder for the test email functionality
      
    } catch (error) {
      console.error('Error sending quote email:', error);
    }
  };

  const submitQuote = async () => {
    try {
      // Format quote data for lead generation
      const leadData = {
        ...quoteData,
        timestamp: new Date().toISOString(),
        source: 'quote-calculator',
        leadValue: quoteData.estimatedPrice,
        status: 'new'
      };

      // Send quote email to test recipient
      await sendQuoteEmail(leadData);
      
      console.log('Quote Lead Generated:', leadData);
      
      // Show success message
      alert(`Thank you, ${quoteData.customerDetails.firstName}! 

Your estimated quote: £${quoteData.estimatedPrice.toLocaleString()}

We'll contact you via ${quoteData.customerDetails.preferredContact} within 24 hours to arrange your free site survey.

Quote Reference: WBC-${Date.now().toString().slice(-6)}`);
      
      setIsOpen(false);
      
      // Reset form for next use
      setCurrentStep(0);
      setQuoteData({
        serviceType: '',
        propertyType: '',
        windowCount: 0,
        doorCount: 0,
        conservatoryType: '',
        materials: [],
        features: [],
        installation: '',
        estimatedPrice: 0,
        customerDetails: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          postcode: '',
          preferredContact: 'phone',
          preferredTime: 'morning',
          projectTimeline: '1-3months'
        }
      });
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('There was an issue submitting your quote. Please call us directly on 07774 604 190.');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Service Type
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What service are you looking for?</h3>
              <p className="text-gray-600">Select the service that best describes your project</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'windows', icon: Home, title: 'Windows Only', desc: 'UPVC or aluminium windows', price: 'From £500 per window' },
                { id: 'doors', icon: DoorOpen, title: 'Doors Only', desc: 'Entrance, patio, or bi-fold doors', price: 'From £800 per door' },
                { id: 'conservatories', icon: Building, title: 'Conservatories', desc: 'Extensions and orangeries', price: 'From £12,000' },
                { id: 'combo', icon: Building2, title: 'Multiple Services', desc: 'Windows, doors, and more', price: 'Custom pricing' }
              ].map((service) => (
                <button
                  key={service.id}
                  onClick={() => setQuoteData(prev => ({ ...prev, serviceType: service.id as any }))}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 text-left hover:shadow-lg ${
                    quoteData.serviceType === service.id 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <service.icon className={`w-8 h-8 mt-1 ${
                      quoteData.serviceType === service.id ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{service.desc}</p>
                      <p className="text-sm font-medium text-green-600">{service.price}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {errors.serviceType && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.serviceType}
              </p>
            )}
          </div>
        );

      case 1: // Property Type
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your property</h3>
              <p className="text-gray-600">This helps us provide accurate pricing</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'house', icon: Home, title: 'House', desc: 'Detached, semi, or terraced' },
                { id: 'flat', icon: Building2, title: 'Flat/Apartment', desc: 'Ground floor or upper floor' },
                { id: 'commercial', icon: Building, title: 'Commercial', desc: 'Office, shop, or business' }
              ].map((property) => (
                <button
                  key={property.id}
                  onClick={() => setQuoteData(prev => ({ ...prev, propertyType: property.id as any }))}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-lg ${
                    quoteData.propertyType === property.id 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <property.icon className={`w-8 h-8 mx-auto mb-3 ${
                    quoteData.propertyType === property.id ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                  <h4 className="font-semibold text-gray-900 mb-1">{property.title}</h4>
                  <p className="text-sm text-gray-600">{property.desc}</p>
                </button>
              ))}
            </div>
            
            {errors.propertyType && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.propertyType}
              </p>
            )}
          </div>
        );

      case 2: // Requirements
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">What do you need?</h3>
              <p className="text-gray-600">Specify quantities and types</p>
            </div>
            
            <div className="space-y-6">
              {(quoteData.serviceType === 'windows' || quoteData.serviceType === 'combo') && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Home className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Windows</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, '20+'].map((count) => (
                      <button
                        key={count}
                        onClick={() => setQuoteData(prev => ({ ...prev, windowCount: typeof count === 'number' ? count : 21 }))}
                        className={`p-3 border-2 rounded-lg text-center transition-all ${
                          quoteData.windowCount === (typeof count === 'number' ? count : 21)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {count} {typeof count === 'number' && count === 1 ? 'window' : 'windows'}
                      </button>
                    ))}
                  </div>
                  {errors.windowCount && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.windowCount}
                    </p>
                  )}
                </div>
              )}

              {(quoteData.serviceType === 'doors' || quoteData.serviceType === 'combo') && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <DoorOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Doors</h4>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <button
                        key={count}
                        onClick={() => setQuoteData(prev => ({ ...prev, doorCount: count }))}
                        className={`p-3 border-2 rounded-lg text-center transition-all ${
                          quoteData.doorCount === count
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {count} {count === 1 ? 'door' : 'doors'}
                      </button>
                    ))}
                  </div>
                  {errors.doorCount && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.doorCount}
                    </p>
                  )}
                </div>
              )}

              {quoteData.serviceType === 'conservatories' && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Conservatory Type</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'lean-to', title: 'Lean-To', desc: 'Simple, cost-effective design', price: 'From £12,000' },
                      { id: 'victorian', title: 'Victorian', desc: 'Classic multi-faceted style', price: 'From £15,000' },
                      { id: 'edwardian', title: 'Edwardian', desc: 'Square, spacious design', price: 'From £16,000' },
                      { id: 'p-shaped', title: 'P-Shaped', desc: 'Combination design', price: 'From £20,000' },
                      { id: 't-shaped', title: 'T-Shaped', desc: 'Extended family space', price: 'From £22,000' },
                      { id: 'orangery', title: 'Orangery', desc: 'Luxury brick and glass', price: 'From £25,000' }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setQuoteData(prev => ({ ...prev, conservatoryType: type.id }))}
                        className={`p-4 border-2 rounded-lg text-left transition-all ${
                          quoteData.conservatoryType === type.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <h5 className="font-semibold text-gray-900 mb-1">{type.title}</h5>
                        <p className="text-sm text-gray-600 mb-2">{type.desc}</p>
                        <p className="text-sm font-medium text-green-600">{type.price}</p>
                      </button>
                    ))}
                  </div>
                  {errors.conservatoryType && (
                    <p className="text-red-500 text-sm mt-2 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.conservatoryType}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        );

      case 3: // Materials
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose your materials</h3>
              <p className="text-gray-600">Select all that apply to your project</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'upvc', title: 'UPVC', desc: 'Cost-effective, energy-efficient', icon: Palette },
                { id: 'aluminium', title: 'Aluminium', desc: 'Modern, slim profiles, durable', icon: Shield },
                { id: 'composite', title: 'Composite Doors', desc: 'Secure, insulated entrance doors', icon: Lock },
                { id: 'timber', title: 'Timber Effect', desc: 'Traditional wood appearance', icon: Eye },
                { id: 'bifold', title: 'Bi-fold Doors', desc: 'Space-saving folding doors', icon: DoorOpen },
                { id: 'french', title: 'French Doors', desc: 'Classic opening patio doors', icon: DoorOpen }
              ].map((material) => (
                <button
                  key={material.id}
                  onClick={() => {
                    const newMaterials = quoteData.materials.includes(material.id)
                      ? quoteData.materials.filter(m => m !== material.id)
                      : [...quoteData.materials, material.id];
                    setQuoteData(prev => ({ ...prev, materials: newMaterials }));
                  }}
                  className={`p-4 border-2 rounded-xl text-left transition-all hover:shadow-lg ${
                    quoteData.materials.includes(material.id)
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <material.icon className={`w-6 h-6 mt-1 ${
                      quoteData.materials.includes(material.id) ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{material.title}</h4>
                      <p className="text-sm text-gray-600">{material.desc}</p>
                    </div>
                    {quoteData.materials.includes(material.id) && (
                      <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {errors.materials && (
              <p className="text-red-500 text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.materials}
              </p>
            )}
          </div>
        );

      case 4: // Features
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Additional features</h3>
              <p className="text-gray-600">Optional upgrades and enhancements</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'triple-glazing', title: 'Triple Glazing', desc: 'Superior insulation and noise reduction', price: '+30%', icon: Thermometer },
                { id: 'security-upgrade', title: 'Security Upgrade', desc: 'Multi-point locking and security glass', price: '+15%', icon: Shield },
                { id: 'smart-features', title: 'Smart Features', desc: 'Automated blinds and smart locks', price: '+20%', icon: Eye },
                { id: 'self-cleaning', title: 'Self-Cleaning Glass', desc: 'Low-maintenance glass coating', price: '+10%', icon: Star },
                { id: 'decorative', title: 'Decorative Glass', desc: 'Patterns, frosting, or coloured glass', price: '+12%', icon: Palette },
                { id: 'warranty-extended', title: 'Extended Warranty', desc: '15-year comprehensive warranty', price: '+5%', icon: Award }
              ].map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    const newFeatures = quoteData.features.includes(feature.id)
                      ? quoteData.features.filter(f => f !== feature.id)
                      : [...quoteData.features, feature.id];
                    setQuoteData(prev => ({ ...prev, features: newFeatures }));
                  }}
                  className={`p-4 border-2 rounded-xl text-left transition-all hover:shadow-lg ${
                    quoteData.features.includes(feature.id)
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <feature.icon className={`w-6 h-6 mt-1 ${
                      quoteData.features.includes(feature.id) ? 'text-blue-600' : 'text-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <span className="text-sm font-medium text-green-600">{feature.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                    {quoteData.features.includes(feature.id) && (
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5: // Installation
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Installation requirements</h3>
              <p className="text-gray-600">Help us understand the complexity of your project</p>
            </div>
            
            <div className="space-y-4">
              {[
                { id: 'standard', title: 'Standard Installation', desc: 'Ground floor, easy access, straightforward replacement', price: 'No extra cost' },
                { id: 'complex', title: 'Complex Installation', desc: 'Upper floors, restricted access, or structural changes', price: '+25%' },
                { id: 'scaffolding', title: 'Scaffolding Required', desc: 'High-level work requiring scaffolding setup', price: '+35%' }
              ].map((installation) => (
                <button
                  key={installation.id}
                  onClick={() => setQuoteData(prev => ({ ...prev, installation: installation.id }))}
                  className={`w-full p-6 border-2 rounded-xl text-left transition-all hover:shadow-lg ${
                    quoteData.installation === installation.id
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{installation.title}</h4>
                      <p className="text-gray-600">{installation.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">{installation.price}</span>
                      {quoteData.installation === installation.id && (
                        <CheckCircle className="w-5 h-5 text-blue-600 mt-2" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 6: // Customer Details
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Almost there!</h3>
              <p className="text-gray-600">We need your details to provide your personalised quote</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  value={quoteData.customerDetails.firstName}
                  onChange={(e) => handleCustomerDetailsChange('firstName', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={quoteData.customerDetails.lastName}
                  onChange={(e) => handleCustomerDetailsChange('lastName', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={quoteData.customerDetails.email}
                  onChange={(e) => handleCustomerDetailsChange('email', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={quoteData.customerDetails.phone}
                  onChange={(e) => handleCustomerDetailsChange('phone', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                <input
                  type="text"
                  value={quoteData.customerDetails.postcode}
                  onChange={(e) => handleCustomerDetailsChange('postcode', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.postcode ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your postcode"
                />
                {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleCustomerDetailsChange('preferredContact', 'phone')}
                    className={`flex-1 p-3 border rounded-lg transition-all ${
                      quoteData.customerDetails.preferredContact === 'phone'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Phone className="w-4 h-4 mx-auto mb-1" />
                    Phone
                  </button>
                  <button
                    onClick={() => handleCustomerDetailsChange('preferredContact', 'email')}
                    className={`flex-1 p-3 border rounded-lg transition-all ${
                      quoteData.customerDetails.preferredContact === 'email'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Mail className="w-4 h-4 mx-auto mb-1" />
                    Email
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Best Time to Contact</label>
                <select
                  value={quoteData.customerDetails.preferredTime}
                  onChange={(e) => handleCustomerDetailsChange('preferredTime', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-5pm)</option>
                  <option value="evening">Evening (5pm-7pm)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                <select
                  value={quoteData.customerDetails.projectTimeline}
                  onChange={(e) => handleCustomerDetailsChange('projectTimeline', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="asap">As soon as possible</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="planning">Just planning ahead</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 7: // Quote Results
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your estimated quote</h3>
              <p className="text-gray-600">Based on the information you've provided</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <p className="text-lg text-gray-600 mb-2">Estimated Total Cost</p>
                <p className="text-4xl font-bold text-blue-600">
                  £{quoteData.estimatedPrice.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">*Final price subject to site survey</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Quote includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Professional installation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Full product warranty
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Site survey and measurement
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Waste removal and cleanup
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Building regulations compliance
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    After-sales support
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <button
                  onClick={submitQuote}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get My Detailed Quote
                </button>
                
                <div className="flex space-x-4">
                  <a
                    href="tel:07774604190"
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                  <button className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Save Quote PDF
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Next Steps</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• We'll contact you within 24 hours to arrange a free site survey</li>
                    <li>• Our surveyor will provide accurate measurements and final pricing</li>
                    <li>• We'll discuss installation dates and any specific requirements</li>
                    <li>• You'll receive a written quote valid for 30 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 hover:scale-110 group"
        >
          <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 min-w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-sm font-medium text-gray-900">Get Your Free Quote</p>
          <p className="text-xs text-gray-600">Professional estimates in minutes</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  index === currentStep
                    ? 'bg-white text-blue-600'
                    : index < currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-400 text-blue-100'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-1 mx-1 rounded transition-all ${
                    index < currentStep ? 'bg-blue-500' : 'bg-blue-400'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-blue-100">
              Step {currentStep + 1} of {steps.length}: {steps[currentStep]?.title}
            </p>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderStepContent()}
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              35+ years experience
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-1" />
              Which? Trusted Trader
            </div>
          </div>
          
          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              onClick={submitQuote}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get Quote
              <CheckCircle className="w-4 h-4 ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCalculator;