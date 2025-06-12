// Email templates for PDF delivery and lead nurturing

export interface EmailTemplate {
  subject: string;
  htmlContent: string;
  textContent: string;
}

export interface LeadData {
  firstName: string;
  lastName: string;
  email: string;
  downloadType: string;
  projectType?: string;
  timeframe?: string;
  budget?: string;
}

export const generateWelcomeEmail = (leadData: LeadData): EmailTemplate => {
  const firstName = leadData.firstName;
  const guideName = leadData.downloadType;

  return {
    subject: `Your ${guideName} is ready for download - Windows by Choice`,
    
    htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Guide is Ready</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%); color: white; text-align: center; padding: 30px 20px; border-radius: 10px 10px 0 0; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .content { background: white; padding: 30px; border: 1px solid #e5e7eb; }
        .guide-box { background: #f8fafc; border: 2px solid #3b82f6; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center; }
        .download-btn { display: inline-block; background: #1E3A8A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .tips-section { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 14px; color: #6b7280; border-radius: 0 0 10px 10px; }
        .social-links { margin: 15px 0; }
        .social-links a { color: #3b82f6; text-decoration: none; margin: 0 10px; }
        .contact-info { margin: 15px 0; }
        .next-steps { background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">WINDOWS BY CHOICE</div>
            <p>Professional Window & Door Installation • 35+ Years Experience</p>
        </div>
        
        <div class="content">
            <h1>Hi ${firstName},</h1>
            
            <p>Thank you for downloading our <strong>${guideName}</strong>! Your comprehensive guide is attached to this email and ready for you to explore.</p>
            
            <div class="guide-box">
                <h2>📚 ${guideName}</h2>
                <p>Professional insights from our 35+ years in the industry</p>
                <a href="#download" class="download-btn">📄 Download Your Guide (PDF)</a>
            </div>
            
            ${leadData.projectType ? `
            <div class="next-steps">
                <h3>🎯 Next Steps for Your ${leadData.projectType} Project</h3>
                <ul>
                    <li>Review your guide to understand all your options</li>
                    <li>Make note of any questions as you read</li>
                    <li>Consider your budget and timeline requirements</li>
                    <li>Book a free consultation when you're ready</li>
                </ul>
            </div>
            ` : ''}
            
            <div class="tips-section">
                <h3>💡 Quick Tips to Get Started:</h3>
                <ul>
                    <li><strong>Save this email</strong> - You can re-download your guide anytime</li>
                    <li><strong>Check building regulations</strong> - We handle all permissions and compliance</li>
                    <li><strong>Measure your spaces</strong> - Our free survey provides exact measurements</li>
                    <li><strong>Consider your timeline</strong> - Most projects take 2-4 weeks from order to completion</li>
                </ul>
            </div>
            
            <h3>🏆 Why Choose Windows by Choice?</h3>
            <ul>
                <li><strong>35+ Years Experience</strong> - Family business established 1989</li>
                <li><strong>Which? Trusted Trader</strong> - Verified by Which? for quality and service</li>
                <li><strong>FENSA Registered</strong> - All installations comply with building regulations</li>
                <li><strong>10-Year Guarantees</strong> - Comprehensive warranties on all work</li>
                <li><strong>Free Consultations</strong> - No-obligation quotes and advice</li>
            </ul>
            
            <div class="guide-box">
                <h3>Ready for Your Free Consultation?</h3>
                <p>Our experienced team is ready to help you plan your perfect project</p>
                <div class="contact-info">
                    <p><strong>📞 Call: 07774 604 190</strong></p>
                    <p><strong>🌐 Website: windowsbychoice.co.uk</strong></p>
                    <p><strong>📧 Email: info@windowsbychoice.co.uk</strong></p>
                </div>
                <a href="tel:07774604190" class="download-btn">📞 Book Free Consultation</a>
            </div>
            
            <p>We'll be in touch with more helpful tips and exclusive offers. You can unsubscribe at any time by replying to this email.</p>
            
            <p>Best regards,<br>
            <strong>The Windows by Choice Team</strong><br>
            <em>Your local window and door specialists</em></p>
        </div>
        
        <div class="footer">
            <p><strong>Windows by Choice Ltd</strong><br>
            Serving Bedfordshire, Hertfordshire & London Areas<br>
            Est. 1989 • Family Business • Which? Trusted Trader</p>
            
            <div class="social-links">
                <a href="#">Facebook</a> |
                <a href="#">Instagram</a> |
                <a href="#">Google Reviews</a>
            </div>
            
            <p>This email was sent because you downloaded a guide from windowsbychoice.co.uk<br>
            You can unsubscribe at any time by replying to this email.</p>
        </div>
    </div>
</body>
</html>
    `,
    
    textContent: `
Hi ${firstName},

Thank you for downloading our ${guideName}! Your comprehensive guide is attached to this email.

WHAT'S INCLUDED:
Professional insights from our 35+ years in the window and door industry, covering everything you need to know for your home improvement project.

${leadData.projectType ? `
NEXT STEPS FOR YOUR ${leadData.projectType.toUpperCase()} PROJECT:
- Review your guide to understand all your options
- Make note of any questions as you read  
- Consider your budget and timeline requirements
- Book a free consultation when you're ready
` : ''}

QUICK TIPS TO GET STARTED:
✓ Save this email - You can re-download your guide anytime
✓ Check building regulations - We handle all permissions and compliance
✓ Measure your spaces - Our free survey provides exact measurements  
✓ Consider your timeline - Most projects take 2-4 weeks from order to completion

WHY CHOOSE WINDOWS BY CHOICE?
• 35+ Years Experience - Family business established 1989
• Which? Trusted Trader - Verified for quality and service
• FENSA Registered - All installations comply with building regulations  
• 10-Year Guarantees - Comprehensive warranties on all work
• Free Consultations - No-obligation quotes and advice

READY FOR YOUR FREE CONSULTATION?
📞 Call: 07774 604 190
🌐 Website: windowsbychoice.co.uk
📧 Email: info@windowsbychoice.co.uk

We'll be in touch with more helpful tips and exclusive offers. You can unsubscribe at any time by replying to this email.

Best regards,
The Windows by Choice Team
Your local window and door specialists

---
Windows by Choice Ltd
Serving Bedfordshire, Hertfordshire & London Areas
Est. 1989 • Family Business • Which? Trusted Trader

This email was sent because you downloaded a guide from windowsbychoice.co.uk
You can unsubscribe at any time by replying to this email.
    `
  };
};

export const generateFollowUpEmail = (leadData: LeadData, daysAfterDownload: number): EmailTemplate => {
  const firstName = leadData.firstName;
  const guideName = leadData.downloadType;

  if (daysAfterDownload === 3) {
    return {
      subject: `How are you getting on with your ${guideName}? - Windows by Choice`,
      
      htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1E3A8A; color: white; text-align: center; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .tip-box { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; }
        .cta-button { display: inline-block; background: #10b981; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 15px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Windows by Choice</h1>
        <p>Following up on your ${guideName}</p>
    </div>
    
    <h2>Hi ${firstName},</h2>
    
    <p>I hope you've had a chance to look through your <strong>${guideName}</strong> that you downloaded a few days ago.</p>
    
    <p>Many of our customers find it helpful to discuss their specific situation after reading through the guide. Do you have any questions about:</p>
    
    <ul>
        <li>Planning permission or building regulations?</li>
        <li>Which products would work best for your home?</li>
        <li>Approximate costs and timelines?</li>
        <li>How our installation process works?</li>
    </ul>
    
    <div class="tip-box">
        <h3>💡 Pro Tip</h3>
        <p>The best time to plan home improvements is 2-3 months ahead. This gives you time to get quotes, check references, and plan around your schedule.</p>
    </div>
    
    <p>I'd be happy to answer any questions you might have. You can:</p>
    
    <p><a href="tel:07774604190" class="cta-button">📞 Call us: 07774 604 190</a></p>
    
    <p>Or simply reply to this email with your questions and I'll get back to you within a few hours.</p>
    
    <p>Best regards,<br>
    <strong>The Windows by Choice Team</strong></p>
</body>
</html>
      `,
      
      textContent: `
Hi ${firstName},

I hope you've had a chance to look through your ${guideName} that you downloaded a few days ago.

Many of our customers find it helpful to discuss their specific situation after reading through the guide. Do you have any questions about:

• Planning permission or building regulations?
• Which products would work best for your home?  
• Approximate costs and timelines?
• How our installation process works?

PRO TIP: The best time to plan home improvements is 2-3 months ahead. This gives you time to get quotes, check references, and plan around your schedule.

I'd be happy to answer any questions you might have:
📞 Call us: 07774 604 190

Or simply reply to this email with your questions and I'll get back to you within a few hours.

Best regards,
The Windows by Choice Team
      `
    };
  }

  // 7-day follow-up
  return {
    subject: `Special offer for ${firstName} - Professional consultation + exclusive discount`,
    
    htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1E3A8A 0%, #10b981 100%); color: white; text-align: center; padding: 30px; border-radius: 8px; margin-bottom: 20px; }
        .offer-box { background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center; }
        .cta-button { display: inline-block; background: #dc2626; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 15px 0; }
        .testimonial { background: #f9fafb; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; font-style: italic; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Exclusive Offer for ${firstName}</h1>
        <p>Professional consultation + special discount</p>
    </div>
    
    <h2>Hi ${firstName},</h2>
    
    <p>It's been a week since you downloaded your <strong>${guideName}</strong>. I wanted to reach out with a special offer that might help with your project planning.</p>
    
    <div class="offer-box">
        <h3>🎁 EXCLUSIVE OFFER - This Week Only</h3>
        <p><strong>FREE professional consultation</strong><br>
        PLUS <strong>5% discount</strong> on your project<br>
        <em>(Minimum order £2,000)</em></p>
        
        <p><a href="tel:07774604190" class="cta-button">📞 Claim Your Offer: 07774 604 190</a></p>
        
        <p><small>Quote reference: GUIDE${new Date().getFullYear()}-${firstName.toUpperCase()}</small></p>
    </div>
    
    <div class="testimonial">
        <p>"We were impressed by the professional survey and detailed quote. The installation was completed in just 2 days with minimal disruption. The new windows have made such a difference to our home!" - Sarah M., Bedford</p>
    </div>
    
    <p><strong>What happens next?</strong></p>
    <ol>
        <li>Call us or book online for your free consultation</li>
        <li>We visit your home at a time convenient for you</li>
        <li>Professional survey and detailed, itemized quote</li>
        <li>No pressure - take your time to decide</li>
    </ol>
    
    <p>This offer is valid until ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} and is exclusively for customers who downloaded our guides.</p>
    
    <p>Best regards,<br>
    <strong>The Windows by Choice Team</strong></p>
</body>
</html>
    `,
    
    textContent: `
Hi ${firstName},

It's been a week since you downloaded your ${guideName}. I wanted to reach out with a special offer that might help with your project planning.

🎁 EXCLUSIVE OFFER - This Week Only
FREE professional consultation
PLUS 5% discount on your project
(Minimum order £2,000)

📞 Claim Your Offer: 07774 604 190
Quote reference: GUIDE${new Date().getFullYear()}-${firstName.toUpperCase()}

CUSTOMER TESTIMONIAL:
"We were impressed by the professional survey and detailed quote. The installation was completed in just 2 days with minimal disruption. The new windows have made such a difference to our home!" - Sarah M., Bedford

WHAT HAPPENS NEXT?
1. Call us or book online for your free consultation
2. We visit your home at a time convenient for you  
3. Professional survey and detailed, itemized quote
4. No pressure - take your time to decide

This offer is valid until ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()} and is exclusively for customers who downloaded our guides.

Best regards,
The Windows by Choice Team
    `
  };
};

export const generateThankYouEmail = (leadData: LeadData): EmailTemplate => {
  return {
    subject: 'Thank you for choosing Windows by Choice',
    
    htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; text-align: center; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .next-steps { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .contact-box { background: #1f2937; color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to the Windows by Choice Family!</h1>
        <p>Thank you for choosing us for your home improvement project</p>
    </div>
    
    <h2>Hi ${leadData.firstName},</h2>
    
    <p>Thank you for booking your consultation with us! We're excited to help bring your vision to life.</p>
    
    <div class="next-steps">
        <h3>What happens next?</h3>
        <ol>
            <li><strong>Confirmation call</strong> - We'll call to confirm your appointment</li>
            <li><strong>Professional survey</strong> - Detailed measurements and assessment</li>
            <li><strong>Detailed quote</strong> - Itemized pricing with no hidden costs</li>
            <li><strong>Planning support</strong> - We handle permissions and regulations</li>
            <li><strong>Expert installation</strong> - Professional fitting by our trained team</li>
        </ol>
    </div>
    
    <div class="contact-box">
        <h3>Questions before your appointment?</h3>
        <p>📞 <strong>07774 604 190</strong></p>
        <p>📧 <strong>info@windowsbychoice.co.uk</strong></p>
    </div>
    
    <p>We look forward to meeting you and helping create the perfect solution for your home.</p>
    
    <p>Best regards,<br>
    <strong>The Windows by Choice Team</strong></p>
</body>
</html>
    `,
    
    textContent: `
Hi ${leadData.firstName},

Thank you for booking your consultation with us! We're excited to help bring your vision to life.

WHAT HAPPENS NEXT?
1. Confirmation call - We'll call to confirm your appointment
2. Professional survey - Detailed measurements and assessment  
3. Detailed quote - Itemized pricing with no hidden costs
4. Planning support - We handle permissions and regulations
5. Expert installation - Professional fitting by our trained team

Questions before your appointment?
📞 07774 604 190
📧 info@windowsbychoice.co.uk

We look forward to meeting you and helping create the perfect solution for your home.

Best regards,
The Windows by Choice Team
    `
  };
};