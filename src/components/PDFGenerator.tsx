import React, { useState } from 'react';
import { Download, FileText, Mail, Shield, Home, Lightbulb } from 'lucide-react';

interface PDFGuide {
  id: string;
  title: string;
  description: string;
  pages: string;
  icon: React.ElementType;
  color: string;
  topics: string[];
}

const PDFGenerator: React.FC = () => {
  const [email, setEmail] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const pdfGuides: PDFGuide[] = [
    {
      id: 'windows-doors-guide',
      title: 'The Complete Guide to Choosing Windows & Doors',
      description: 'Everything you need to know about selecting the perfect windows and doors for your home',
      pages: '12-15 pages',
      icon: Home,
      color: 'bg-blue-500',
      topics: [
        'Energy efficiency ratings explained',
        'Material comparison (UPVC vs Aluminium vs Composite)',
        'Security features and standards',
        'Planning permission and building regulations',
        'Maintenance tips and warranties',
        'Cost factors and budgeting'
      ]
    },
    {
      id: 'conservatory-orangery-guide',
      title: 'Planning Your Conservatory or Orangery',
      description: 'Complete planning guide for your perfect home extension',
      pages: '10-12 pages',
      icon: FileText,
      color: 'bg-emerald-500',
      topics: [
        'Style guide (Victorian, Edwardian, Lean-to, etc.)',
        'Planning permission requirements',
        'Building regulations compliance',
        'Base and foundation considerations',
        'Heating and insulation options',
        'Cost breakdown and timeline'
      ]
    },
    {
      id: 'security-checklist',
      title: 'Home Security Upgrade Checklist',
      description: 'Comprehensive security assessment and upgrade guide',
      pages: '6-8 pages',
      icon: Shield,
      color: 'bg-red-500',
      topics: [
        'Door and window security assessment',
        'Lock types and security standards',
        'CCTV and alarm integration points',
        'Insurance requirements and discounts',
        'Quick security improvements'
      ]
    },
    {
      id: 'energy-savings-guide',
      title: 'Energy Efficiency & Cost Savings Guide',
      description: 'Maximize your home\'s energy efficiency and reduce bills',
      pages: '8-10 pages',
      icon: Lightbulb,
      color: 'bg-yellow-500',
      topics: [
        'Understanding energy ratings',
        'Government grants and schemes',
        'Cost savings calculations',
        'ROI on window/door upgrades',
        'Environmental benefits'
      ]
    }
  ];

  const handleDownload = async (guideId: string) => {
    if (!email) {
      alert('Please enter your email address to download the guide');
      return;
    }

    setIsSubmitting(true);
    setSelectedGuide(guideId);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate and download PDF
      await generatePDF(guideId);
      
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsSubmitting(false);
      setSelectedGuide(null);
    }
  };

  const generatePDF = async (guideId: string) => {
    const guide = pdfGuides.find(g => g.id === guideId);
    if (!guide) return;

    // Create PDF content based on guide
    const pdfContent = await createPDFContent(guide);
    
    // Create and download PDF
    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Open in new window for printing/saving as PDF
    const printWindow = window.open(url);
    if (printWindow) {
      printWindow.onload = () => {
        setTimeout(() => {
          printWindow.print();
        }, 250);
      };
    }
  };

  const createPDFContent = async (guide: PDFGuide): Promise<string> => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${guide.title} - Windows by Choice</title>
    <style>
        @page {
            margin: 2cm;
            size: A4;
        }
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #1E3A8A;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #1E3A8A;
            margin-bottom: 10px;
        }
        .contact-info {
            font-size: 12px;
            color: #666;
        }
        h1 {
            color: #1E3A8A;
            font-size: 28px;
            margin-bottom: 10px;
        }
        h2 {
            color: #1E3A8A;
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 1px solid #E5E7EB;
            padding-bottom: 5px;
        }
        h3 {
            color: #374151;
            font-size: 16px;
            margin-top: 25px;
            margin-bottom: 10px;
        }
        .content {
            margin-bottom: 20px;
        }
        .checklist {
            margin: 20px 0;
        }
        .checklist-item {
            margin: 10px 0;
            padding-left: 20px;
            position: relative;
        }
        .checklist-item:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #10B981;
            font-weight: bold;
        }
        .tip-box {
            background: #F3F4F6;
            border-left: 4px solid #1E3A8A;
            padding: 15px;
            margin: 20px 0;
        }
        .cost-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .cost-table th,
        .cost-table td {
            border: 1px solid #D1D5DB;
            padding: 10px;
            text-align: left;
        }
        .cost-table th {
            background: #F9FAFB;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #E5E7EB;
            font-size: 12px;
            color: #666;
        }
        .cta-box {
            background: #1E3A8A;
            color: white;
            padding: 20px;
            text-align: center;
            margin: 30px 0;
        }
        .page-break {
            page-break-before: always;
        }
    </style>
</head>
<body>
    ${generateGuideContent(guide)}
</body>
</html>
    `;
  };

  const generateGuideContent = (guide: PDFGuide): string => {
    switch (guide.id) {
      case 'windows-doors-guide':
        return generateWindowsDoorsGuide();
      case 'conservatory-orangery-guide':
        return generateConservatoryGuide();
      case 'security-checklist':
        return generateSecurityGuide();
      case 'energy-savings-guide':
        return generateEnergyGuide();
      default:
        return '';
    }
  };

  const generateWindowsDoorsGuide = (): string => {
    return `
        <div class="header">
            <div class="logo">WINDOWS BY CHOICE</div>
            <div class="contact-info">
                Professional Window & Door Installation • 35+ Years Experience<br>
                Tel: 07774 604 190 • Email: info@windowsbychoice.co.uk<br>
                Serving Bedfordshire, Hertfordshire & London Areas
            </div>
        </div>

        <h1>The Complete Guide to Choosing Windows & Doors</h1>
        
        <div class="content">
            <p>Choosing the right windows and doors for your home is one of the most important investment decisions you'll make. This comprehensive guide will help you make informed choices that enhance your home's security, energy efficiency, and value.</p>
        </div>

        <h2>Understanding Energy Efficiency Ratings</h2>
        <div class="content">
            <h3>Window Energy Ratings Explained</h3>
            <p>All windows in the UK are rated from A++ (most efficient) to G (least efficient). Here's what you need to know:</p>
            
            <div class="checklist">
                <div class="checklist-item"><strong>A+ Rating:</strong> Save up to £165 per year on heating bills</div>
                <div class="checklist-item"><strong>A Rating:</strong> Standard for new builds, saves up to £140 annually</div>
                <div class="checklist-item"><strong>B Rating:</strong> Good performance, saves up to £115 annually</div>
                <div class="checklist-item"><strong>C Rating:</strong> Minimum acceptable for replacements</div>
            </div>

            <div class="tip-box">
                <strong>Pro Tip:</strong> Always ask for the WER (Window Energy Rating) certificate. At Windows by Choice, we provide A+ rated windows as standard.
            </div>
        </div>

        <h2>Material Comparison Guide</h2>
        <table class="cost-table">
            <tr>
                <th>Material</th>
                <th>Lifespan</th>
                <th>Maintenance</th>
                <th>Energy Efficiency</th>
                <th>Security</th>
                <th>Cost Range</th>
            </tr>
            <tr>
                <td>UPVC</td>
                <td>25-30 years</td>
                <td>Very Low</td>
                <td>Excellent</td>
                <td>High</td>
                <td>£300-600</td>
            </tr>
            <tr>
                <td>Aluminium</td>
                <td>30-40 years</td>
                <td>Low</td>
                <td>Very Good</td>
                <td>Very High</td>
                <td>£500-900</td>
            </tr>
            <tr>
                <td>Composite</td>
                <td>35+ years</td>
                <td>Very Low</td>
                <td>Excellent</td>
                <td>Excellent</td>
                <td>£800-1200</td>
            </tr>
        </table>

        <div class="page-break"></div>

        <h2>Security Features & Standards</h2>
        <div class="content">
            <h3>Essential Security Features</h3>
            <div class="checklist">
                <div class="checklist-item">Multi-point locking systems (minimum 3 points)</div>
                <div class="checklist-item">Anti-snap, anti-drill, anti-pick cylinders</div>
                <div class="checklist-item">Laminated or toughened glass options</div>
                <div class="checklist-item">Reinforced frames and hinges</div>
                <div class="checklist-item">Internal glazing beads (cannot be removed from outside)</div>
            </div>

            <h3>Insurance & Police Recommendations</h3>
            <p>Look for these certifications:</p>
            <div class="checklist">
                <div class="checklist-item"><strong>Secure by Design:</strong> Police-approved security standard</div>
                <div class="checklist-item"><strong>PAS 24:</strong> Enhanced security performance standard</div>
                <div class="checklist-item"><strong>Sold Secure:</strong> Independent attack testing certification</div>
            </div>
        </div>

        <h2>Planning Permission & Building Regulations</h2>
        <div class="content">
            <h3>When Planning Permission is Required</h3>
            <div class="checklist">
                <div class="checklist-item">Listed buildings (always required)</div>
                <div class="checklist-item">Conservation areas (often required)</div>
                <div class="checklist-item">Significant changes to front elevation</div>
                <div class="checklist-item">New openings or enlarging windows</div>
            </div>

            <div class="tip-box">
                <strong>Windows by Choice Service:</strong> We handle all planning applications and building regulations compliance for you, ensuring your installation meets all legal requirements.
            </div>
        </div>

        <h2>Maintenance & Warranty Guide</h2>
        <div class="content">
            <h3>UPVC Maintenance</h3>
            <div class="checklist">
                <div class="checklist-item">Clean frames with warm soapy water monthly</div>
                <div class="checklist-item">Lubricate hinges and locks annually</div>
                <div class="checklist-item">Check and adjust door alignment yearly</div>
                <div class="checklist-item">Replace weather seals every 5-7 years</div>
            </div>

            <h3>Understanding Your Warranty</h3>
            <p>At Windows by Choice, we provide:</p>
            <div class="checklist">
                <div class="checklist-item"><strong>10-Year Frame Warranty:</strong> Manufacturing defects covered</div>
                <div class="checklist-item"><strong>5-Year Hardware Warranty:</strong> Locks, hinges, handles</div>
                <div class="checklist-item"><strong>2-Year Installation Warranty:</strong> Workmanship guarantee</div>
                <div class="checklist-item"><strong>Lifetime Support:</strong> Ongoing maintenance advice</div>
            </div>
        </div>

        <div class="page-break"></div>

        <h2>Cost Factors & Budgeting</h2>
        <div class="content">
            <h3>What Affects Window Costs?</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Size:</strong> Larger windows cost proportionally more</div>
                <div class="checklist-item"><strong>Style:</strong> Bay windows cost 20-30% more than casement</div>
                <div class="checklist-item"><strong>Glass:</strong> Triple glazing adds 15-25% to cost</div>
                <div class="checklist-item"><strong>Hardware:</strong> Premium locks and handles add 10-15%</div>
                <div class="checklist-item"><strong>Installation:</strong> Complex installations may cost more</div>
            </div>

            <h3>Typical Project Costs (Including Installation)</h3>
            <table class="cost-table">
                <tr>
                    <th>Project Type</th>
                    <th>Budget Range</th>
                    <th>Mid-Range</th>
                    <th>Premium</th>
                </tr>
                <tr>
                    <td>Single Window</td>
                    <td>£300-500</td>
                    <td>£500-800</td>
                    <td>£800-1200</td>
                </tr>
                <tr>
                    <td>3-bed House (8 windows)</td>
                    <td>£3000-4500</td>
                    <td>£4500-7000</td>
                    <td>£7000-10000</td>
                </tr>
                <tr>
                    <td>Front & Back Doors</td>
                    <td>£1500-2500</td>
                    <td>£2500-4000</td>
                    <td>£4000-6000</td>
                </tr>
            </table>
        </div>

        <div class="cta-box">
            <h2>Ready for Your Free Quote?</h2>
            <p>Contact Windows by Choice today for a no-obligation consultation and quote.</p>
            <p><strong>Call: 07774 604 190</strong> or visit windowsbychoice.co.uk</p>
        </div>

        <div class="footer">
            <p>Windows by Choice Ltd • Family Business Est. 1989 • Which? Trusted Trader<br>
            Serving Bedfordshire, Hertfordshire & London Areas<br>
            This guide is provided free of charge. No part may be reproduced without permission.</p>
        </div>
    `;
  };

  const generateConservatoryGuide = (): string => {
    return `
        <div class="header">
            <div class="logo">WINDOWS BY CHOICE</div>
            <div class="contact-info">
                Professional Conservatory & Orangery Specialists • 35+ Years Experience<br>
                Tel: 07774 604 190 • Email: info@windowsbychoice.co.uk<br>
                Serving Bedfordshire, Hertfordshire & London Areas
            </div>
        </div>

        <h1>Planning Your Conservatory or Orangery</h1>
        
        <div class="content">
            <p>Adding a conservatory or orangery to your home is an exciting project that can add significant value and living space. This guide covers everything you need to know to plan your perfect extension.</p>
        </div>

        <h2>Conservatory Style Guide</h2>
        <div class="content">
            <h3>Victorian Conservatory</h3>
            <p><strong>Best for:</strong> Traditional properties, corner plots</p>
            <div class="checklist">
                <div class="checklist-item">Ornate ridge details and decorative elements</div>
                <div class="checklist-item">Multi-faceted shape maximizes floor space</div>
                <div class="checklist-item">Bay front with angled sides</div>
                <div class="checklist-item">Ideal size: 3m x 3m minimum</div>
            </div>

            <h3>Edwardian Conservatory</h3>
            <p><strong>Best for:</strong> Modern homes, maximizing usable space</p>
            <div class="checklist">
                <div class="checklist-item">Square or rectangular footprint</div>
                <div class="checklist-item">Clean, simple lines</div>
                <div class="checklist-item">Maximum floor space utilization</div>
                <div class="checklist-item">Easier to furnish than Victorian style</div>
            </div>

            <h3>Lean-To Conservatory</h3>
            <p><strong>Best for:</strong> Bungalows, budget-conscious projects</p>
            <div class="checklist">
                <div class="checklist-item">Simple, cost-effective design</div>
                <div class="checklist-item">Works well with low eaves</div>
                <div class="checklist-item">Can be very wide</div>
                <div class="checklist-item">Modern, minimalist appearance</div>
            </div>

            <div class="tip-box">
                <strong>Windows by Choice Recommendation:</strong> Visit our showroom to see full-size examples of each style and get hands-on experience of the space they create.
            </div>
        </div>

        <div class="page-break"></div>

        <h2>Planning Permission Requirements</h2>
        <div class="content">
            <h3>Permitted Development Rights</h3>
            <p>Most conservatories can be built under Permitted Development Rights if they meet these criteria:</p>
            <div class="checklist">
                <div class="checklist-item">Single storey only</div>
                <div class="checklist-item">Maximum height 4m (detached) or 3m (semi/terraced)</div>
                <div class="checklist-item">No closer than 2m to boundary if over 3m high</div>
                <div class="checklist-item">Maximum 50% of original garden area</div>
                <div class="checklist-item">No extensions beyond front wall</div>
            </div>

            <h3>When Planning Permission IS Required</h3>
            <div class="checklist">
                <div class="checklist-item">Listed buildings</div>
                <div class="checklist-item">Conservation areas</div>
                <div class="checklist-item">Article 4 directions in place</div>
                <div class="checklist-item">Flats or maisonettes</div>
                <div class="checklist-item">Exceeding permitted development limits</div>
            </div>

            <div class="tip-box">
                <strong>Free Service:</strong> Windows by Choice checks planning requirements and handles all applications for you. We have a 98% success rate with planning applications.
            </div>
        </div>

        <h2>Building Regulations Compliance</h2>
        <div class="content">
            <h3>What Building Regulations Cover</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Foundations:</strong> Adequate depth and strength</div>
                <div class="checklist-item"><strong>Thermal Efficiency:</strong> Insulation standards</div>
                <div class="checklist-item"><strong>Electrical Safety:</strong> Certified installation</div>
                <div class="checklist-item"><strong>Drainage:</strong> Rainwater disposal</div>
                <div class="checklist-item"><strong>Access:</strong> Door widths and thresholds</div>
            </div>

            <h3>The Building Control Process</h3>
            <p>There are two routes to Building Regulations approval:</p>
            
            <table class="cost-table">
                <tr>
                    <th>Route</th>
                    <th>Cost</th>
                    <th>Timeframe</th>
                    <th>Best For</th>
                </tr>
                <tr>
                    <td>Local Authority</td>
                    <td>£300-500</td>
                    <td>6-8 weeks</td>
                    <td>Complex projects</td>
                </tr>
                <tr>
                    <td>Approved Inspector</td>
                    <td>£350-600</td>
                    <td>3-4 weeks</td>
                    <td>Standard builds</td>
                </tr>
            </table>
        </div>

        <h2>Base & Foundation Considerations</h2>
        <div class="content">
            <h3>Foundation Options</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Concrete Slab:</strong> Most economical, suitable for most soils</div>
                <div class="checklist-item"><strong>Trench Foundations:</strong> Required for poor ground conditions</div>
                <div class="checklist-item"><strong>Pile Foundations:</strong> Necessary for very poor ground</div>
            </div>

            <h3>Ground Investigation</h3>
            <p>We assess your site for:</p>
            <div class="checklist">
                <div class="checklist-item">Soil type and bearing capacity</div>
                <div class="checklist-item">Drainage and water table levels</div>
                <div class="checklist-item">Tree proximity and root systems</div>
                <div class="checklist-item">Existing services (gas, electric, water)</div>
            </div>

            <div class="tip-box">
                <strong>Foundation Guarantee:</strong> All Windows by Choice foundations come with a 10-year structural warranty backed by professional indemnity insurance.
            </div>
        </div>

        <div class="page-break"></div>

        <h2>Heating & Insulation Options</h2>
        <div class="content">
            <h3>Heating Solutions</h3>
            <table class="cost-table">
                <tr>
                    <th>Heating Type</th>
                    <th>Installation Cost</th>
                    <th>Running Cost</th>
                    <th>Best For</th>
                </tr>
                <tr>
                    <td>Underfloor Heating</td>
                    <td>£1500-2500</td>
                    <td>Low</td>
                    <td>Year-round use</td>
                </tr>
                <tr>
                    <td>Radiator Extension</td>
                    <td>£400-800</td>
                    <td>Medium</td>
                    <td>Existing systems</td>
                </tr>
                <tr>
                    <td>Electric Heaters</td>
                    <td>£200-600</td>
                    <td>High</td>
                    <td>Occasional use</td>
                </tr>
            </table>

            <h3>Insulation Upgrades</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Roof Insulation:</strong> Multi-foil or PIR boards</div>
                <div class="checklist-item"><strong>Floor Insulation:</strong> Rigid foam under slab</div>
                <div class="checklist-item"><strong>Glazing:</strong> Argon-filled double or triple glazing</div>
                <div class="checklist-item"><strong>Thermal Blinds:</strong> Cellular or honeycomb designs</div>
            </div>
        </div>

        <h2>Cost Breakdown & Timeline</h2>
        <div class="content">
            <h3>Typical Project Costs</h3>
            <table class="cost-table">
                <tr>
                    <th>Size</th>
                    <th>Budget Range</th>
                    <th>Mid-Range</th>
                    <th>Premium</th>
                </tr>
                <tr>
                    <td>3m x 3m</td>
                    <td>£8,000-12,000</td>
                    <td>£12,000-18,000</td>
                    <td>£18,000-25,000</td>
                </tr>
                <tr>
                    <td>4m x 4m</td>
                    <td>£12,000-18,000</td>
                    <td>£18,000-25,000</td>
                    <td>£25,000-35,000</td>
                </tr>
                <tr>
                    <td>5m x 4m</td>
                    <td>£15,000-22,000</td>
                    <td>£22,000-30,000</td>
                    <td>£30,000-45,000</td>
                </tr>
            </table>

            <h3>Project Timeline</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Week 1-2:</strong> Site survey, design, and quotation</div>
                <div class="checklist-item"><strong>Week 3-4:</strong> Planning/Building Regs applications</div>
                <div class="checklist-item"><strong>Week 5-8:</strong> Approval process (if required)</div>
                <div class="checklist-item"><strong>Week 9-10:</strong> Foundation excavation and base construction</div>
                <div class="checklist-item"><strong>Week 11-12:</strong> Frame installation and glazing</div>
                <div class="checklist-item"><strong>Week 13:</strong> Final finishes and handover</div>
            </div>
        </div>

        <div class="cta-box">
            <h2>Start Planning Your Dream Conservatory</h2>
            <p>Book your free design consultation with Windows by Choice today.</p>
            <p><strong>Call: 07774 604 190</strong> or visit windowsbychoice.co.uk</p>
        </div>

        <div class="footer">
            <p>Windows by Choice Ltd • Conservatory Specialists Since 1989 • FENSA Registered<br>
            All designs comply with current Building Regulations and Planning Requirements<br>
            This guide is provided free of charge. © 2025 Windows by Choice Ltd.</p>
        </div>
    `;
  };

  const generateSecurityGuide = (): string => {
    return `
        <div class="header">
            <div class="logo">WINDOWS BY CHOICE</div>
            <div class="contact-info">
                Home Security Specialists • Secure by Design Approved • 35+ Years Experience<br>
                Tel: 07774 604 190 • Email: info@windowsbychoice.co.uk<br>
                Serving Bedfordshire, Hertfordshire & London Areas
            </div>
        </div>

        <h1>Home Security Upgrade Checklist</h1>
        
        <div class="content">
            <p>Your home's security starts with your windows and doors. This comprehensive checklist will help you assess your current security level and identify areas for improvement.</p>
        </div>

        <h2>Door & Window Security Assessment</h2>
        <div class="content">
            <h3>Front Door Security Checklist</h3>
            <div class="checklist">
                <div class="checklist-item">Multi-point locking system (minimum 3 points)</div>
                <div class="checklist-item">Anti-snap, anti-pick, anti-drill cylinder</div>
                <div class="checklist-item">Reinforced frame and hinges</div>
                <div class="checklist-item">Spy hole or door viewer</div>
                <div class="checklist-item">Door chain or restrictor</div>
                <div class="checklist-item">Solid core or composite door construction</div>
            </div>

            <h3>Back Door & Patio Door Security</h3>
            <div class="checklist">
                <div class="checklist-item">Multi-point locking on all doors</div>
                <div class="checklist-item">Anti-lift devices on sliding doors</div>
                <div class="checklist-item">Laminated or toughened glass</div>
                <div class="checklist-item">Internal glazing beads</div>
                <div class="checklist-item">Security bars or grilles (if required)</div>
            </div>

            <h3>Window Security Assessment</h3>
            <div class="checklist">
                <div class="checklist-item">Key-operated window locks</div>
                <div class="checklist-item">Laminated glass on ground floor</div>
                <div class="checklist-item">Window restrictors for upper floors</div>
                <div class="checklist-item">Internal glazing beads</div>
                <div class="checklist-item">Security film on large glass areas</div>
            </div>

            <div class="tip-box">
                <strong>Security Rating:</strong> Score 1 point for each item you have. 15+ = Excellent, 10-14 = Good, 5-9 = Fair, Under 5 = Poor
            </div>
        </div>

        <h2>Lock Types & Security Standards</h2>
        <div class="content">
            <h3>Door Lock Standards</h3>
            <table class="cost-table">
                <tr>
                    <th>Lock Type</th>
                    <th>Security Level</th>
                    <th>Cost Range</th>
                    <th>Best For</th>
                </tr>
                <tr>
                    <td>5-Lever Mortice</td>
                    <td>High</td>
                    <td>£150-300</td>
                    <td>Traditional doors</td>
                </tr>
                <tr>
                    <td>Multi-Point UPVC</td>
                    <td>Very High</td>
                    <td>£200-400</td>
                    <td>Modern doors</td>
                </tr>
                <tr>
                    <td>Smart Lock</td>
                    <td>High</td>
                    <td>£300-800</td>
                    <td>Tech-savvy homes</td>
                </tr>
            </table>

            <h3>Essential Security Certifications</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>PAS 24:</strong> Enhanced security doors standard</div>
                <div class="checklist-item"><strong>Secure by Design:</strong> Police-approved products</div>
                <div class="checklist-item"><strong>Sold Secure:</strong> Attack-tested certification</div>
                <div class="checklist-item"><strong>BS 3621:</strong> Insurance-approved lock standard</div>
            </div>

            <div class="tip-box">
                <strong>Insurance Requirement:</strong> Most home insurance policies require BS 3621 approved locks. Check your policy terms.
            </div>
        </div>

        <div class="page-break"></div>

        <h2>CCTV & Alarm Integration Points</h2>
        <div class="content">
            <h3>Strategic Camera Placement</h3>
            <div class="checklist">
                <div class="checklist-item">Front door and main entrance</div>
                <div class="checklist-item">Rear garden and back doors</div>
                <div class="checklist-item">Side access gates</div>
                <div class="checklist-item">Garage and outbuilding entrances</div>
                <div class="checklist-item">Ground floor windows (vulnerable areas)</div>
            </div>

            <h3>Door & Window Alarm Sensors</h3>
            <div class="checklist">
                <div class="checklist-item">Magnetic door contacts on all external doors</div>
                <div class="checklist-item">Glass break sensors on large windows</div>
                <div class="checklist-item">Vibration sensors on windows</div>
                <div class="checklist-item">PIR detectors covering access routes</div>
            </div>

            <h3>Smart Home Integration</h3>
            <div class="checklist">
                <div class="checklist-item">Smart door locks with app control</div>
                <div class="checklist-item">Video doorbells with two-way audio</div>
                <div class="checklist-item">Window sensors linked to smart hub</div>
                <div class="checklist-item">Automated lighting triggered by movement</div>
            </div>
        </div>

        <h2>Insurance Requirements & Discounts</h2>
        <div class="content">
            <h3>Standard Insurance Requirements</h3>
            <div class="checklist">
                <div class="checklist-item">5-lever mortice locks on wooden doors</div>
                <div class="checklist-item">Key-operated locks on windows</div>
                <div class="checklist-item">Multi-point locking on UPVC doors</div>
                <div class="checklist-item">Laminated glass on vulnerable windows</div>
            </div>

            <h3>Available Insurance Discounts</h3>
            <table class="cost-table">
                <tr>
                    <th>Security Feature</th>
                    <th>Typical Discount</th>
                    <th>Annual Saving*</th>
                </tr>
                <tr>
                    <td>Burglar Alarm</td>
                    <td>5-10%</td>
                    <td>£50-100</td>
                </tr>
                <tr>
                    <td>CCTV System</td>
                    <td>5-15%</td>
                    <td>£50-150</td>
                </tr>
                <tr>
                    <td>Secure by Design</td>
                    <td>5-10%</td>
                    <td>£50-100</td>
                </tr>
                <tr>
                    <td>Smart Security</td>
                    <td>10-20%</td>
                    <td>£100-200</td>
                </tr>
            </table>
            <p><em>*Based on average home insurance premium of £1000/year</em></p>
        </div>

        <h2>Quick Security Improvements</h2>
        <div class="content">
            <h3>Immediate Actions (Under £100)</h3>
            <div class="checklist">
                <div class="checklist-item">Install door chains and viewers (£20-40)</div>
                <div class="checklist-item">Add window locks to existing windows (£15-30 each)</div>
                <div class="checklist-item">Upgrade cylinder locks to anti-snap versions (£30-60)</div>
                <div class="checklist-item">Install timer switches for lights (£10-25 each)</div>
                <div class="checklist-item">Add security film to vulnerable glass (£5-15 per m²)</div>
            </div>

            <h3>Medium-term Upgrades (£100-500)</h3>
            <div class="checklist">
                <div class="checklist-item">Replace front door locks with multi-point systems</div>
                <div class="checklist-item">Install laminated glass in ground floor windows</div>
                <div class="checklist-item">Add security lighting with PIR sensors</div>
                <div class="checklist-item">Install video doorbell system</div>
            </div>

            <h3>Major Security Overhaul (£500+)</h3>
            <div class="checklist">
                <div class="checklist-item">Replace doors with Secure by Design certified versions</div>
                <div class="checklist-item">Install comprehensive CCTV system</div>
                <div class="checklist-item">Upgrade all windows to security standard</div>
                <div class="checklist-item">Install monitored alarm system</div>
            </div>
        </div>

        <div class="cta-box">
            <h2>Free Security Assessment</h2>
            <p>Book a free home security consultation with Windows by Choice.</p>
            <p>We'll assess your current security and recommend improvements.</p>
            <p><strong>Call: 07774 604 190</strong> or visit windowsbychoice.co.uk</p>
        </div>

        <div class="footer">
            <p>Windows by Choice Ltd • Secure by Design Partner • Police Approved Contractor<br>
            All security installations comply with British Standards and Insurance Requirements<br>
            This guide is provided free of charge. © 2025 Windows by Choice Ltd.</p>
        </div>
    `;
  };

  const generateEnergyGuide = (): string => {
    return `
        <div class="header">
            <div class="logo">WINDOWS BY CHOICE</div>
            <div class="contact-info">
                Energy Efficiency Specialists • A+ Rated Windows & Doors • 35+ Years Experience<br>
                Tel: 07774 604 190 • Email: info@windowsbychoice.co.uk<br>
                Serving Bedfordshire, Hertfordshire & London Areas
            </div>
        </div>

        <h1>Energy Efficiency & Cost Savings Guide</h1>
        
        <div class="content">
            <p>Upgrading your windows and doors is one of the most effective ways to improve your home's energy efficiency and reduce heating bills. This guide shows you exactly how much you can save.</p>
        </div>

        <h2>Understanding Energy Ratings</h2>
        <div class="content">
            <h3>Window Energy Rating Scale</h3>
            <table class="cost-table">
                <tr>
                    <th>Rating</th>
                    <th>Performance</th>
                    <th>Annual Saving*</th>
                    <th>Payback Period</th>
                </tr>
                <tr>
                    <td>A++</td>
                    <td>Exceptional</td>
                    <td>£180-220</td>
                    <td>8-12 years</td>
                </tr>
                <tr>
                    <td>A+</td>
                    <td>Excellent</td>
                    <td>£150-180</td>
                    <td>10-14 years</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>Very Good</td>
                    <td>£120-150</td>
                    <td>12-16 years</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>Good</td>
                    <td>£90-120</td>
                    <td>15-20 years</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>Average</td>
                    <td>£60-90</td>
                    <td>18-25 years</td>
                </tr>
            </table>
            <p><em>*Savings compared to single glazed windows in typical 3-bed semi</em></p>

            <h3>What Makes a Window Energy Efficient?</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>U-Value:</strong> Heat loss measurement (lower is better)</div>
                <div class="checklist-item"><strong>G-Value:</strong> Solar heat gain (optimal around 0.4-0.6)</div>
                <div class="checklist-item"><strong>Air Permeability:</strong> Draught resistance</div>
                <div class="checklist-item"><strong>Frame Material:</strong> Thermal bridge performance</div>
            </div>

            <div class="tip-box">
                <strong>Windows by Choice Standard:</strong> All our windows achieve minimum A+ rating, with A++ available for maximum efficiency.
            </div>
        </div>

        <h2>Government Grants & Schemes</h2>
        <div class="content">
            <h3>Available Funding Options</h3>
            <table class="cost-table">
                <tr>
                    <th>Scheme</th>
                    <th>Eligibility</th>
                    <th>Maximum Grant</th>
                    <th>Application Process</th>
                </tr>
                <tr>
                    <td>ECO4 Scheme</td>
                    <td>Low income households</td>
                    <td>100% funding</td>
                    <td>Through approved installer</td>
                </tr>
                <tr>
                    <td>Green Homes Grant</td>
                    <td>Homeowners/landlords</td>
                    <td>£5,000-10,000</td>
                    <td>Online application</td>
                </tr>
                <tr>
                    <td>Local Authority Grants</td>
                    <td>Varies by area</td>
                    <td>£1,000-5,000</td>
                    <td>Council application</td>
                </tr>
                <tr>
                    <td>Disabled Facilities Grant</td>
                    <td>Disabled residents</td>
                    <td>£30,000</td>
                    <td>Council assessment</td>
                </tr>
            </table>

            <h3>Eligibility Criteria</h3>
            <div class="checklist">
                <div class="checklist-item">Household income below £31,000 (ECO4)</div>
                <div class="checklist-item">Receiving certain benefits</div>
                <div class="checklist-item">Property EPC rating D or below</div>
                <div class="checklist-item">Owner-occupier or private tenant with permission</div>
            </div>

            <div class="tip-box">
                <strong>Grant Application Service:</strong> Windows by Choice can check your eligibility and handle grant applications for you at no extra cost.
            </div>
        </div>

        <div class="page-break"></div>

        <h2>Cost Savings Calculations</h2>
        <div class="content">
            <h3>Typical House Types - Annual Savings</h3>
            <table class="cost-table">
                <tr>
                    <th>Property Type</th>
                    <th>Current Bills</th>
                    <th>Post-Upgrade</th>
                    <th>Annual Saving</th>
                    <th>25-Year Saving</th>
                </tr>
                <tr>
                    <td>2-bed Terrace</td>
                    <td>£1,200</td>
                    <td>£980</td>
                    <td>£220</td>
                    <td>£5,500</td>
                </tr>
                <tr>
                    <td>3-bed Semi</td>
                    <td>£1,500</td>
                    <td>£1,200</td>
                    <td>£300</td>
                    <td>£7,500</td>
                </tr>
                <tr>
                    <td>4-bed Detached</td>
                    <td>£2,200</td>
                    <td>£1,750</td>
                    <td>£450</td>
                    <td>£11,250</td>
                </tr>
                <tr>
                    <td>Victorian Terrace</td>
                    <td>£1,800</td>
                    <td>£1,350</td>
                    <td>£450</td>
                    <td>£11,250</td>
                </tr>
            </table>

            <h3>Factors Affecting Your Savings</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Current windows:</strong> Single glazed saves most</div>
                <div class="checklist-item"><strong>House size:</strong> Larger properties save more</div>
                <div class="checklist-item"><strong>Heating system:</strong> Gas central heating vs electric</div>
                <div class="checklist-item"><strong>Usage patterns:</strong> Home all day vs working away</div>
                <div class="checklist-item"><strong>Insulation levels:</strong> Well-insulated homes optimize savings</div>
            </div>
        </div>

        <h2>ROI on Window/Door Upgrades</h2>
        <div class="content">
            <h3>Investment Analysis</h3>
            <table class="cost-table">
                <tr>
                    <th>Upgrade Type</th>
                    <th>Investment</th>
                    <th>Annual Saving</th>
                    <th>Payback Period</th>
                    <th>Property Value Increase</th>
                </tr>
                <tr>
                    <td>Full House Windows</td>
                    <td>£6,000</td>
                    <td>£300</td>
                    <td>12-15 years</td>
                    <td>£8,000-10,000</td>
                </tr>
                <tr>
                    <td>Front & Back Doors</td>
                    <td>£2,500</td>
                    <td>£150</td>
                    <td>12-18 years</td>
                    <td>£3,000-4,000</td>
                </tr>
                <tr>
                    <td>Conservatory</td>
                    <td>£15,000</td>
                    <td>£200*</td>
                    <td>Living space value</td>
                    <td>£12,000-18,000</td>
                </tr>
            </table>
            <p><em>*Conservatory heating costs offset by reduced main house heating</em></p>

            <h3>Additional Financial Benefits</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>Property Value:</strong> 5-8% increase typical</div>
                <div class="checklist-item"><strong>Faster Sale:</strong> Energy efficient homes sell 25% quicker</div>
                <div class="checklist-item"><strong>Rental Income:</strong> Higher rents for efficient properties</div>
                <div class="checklist-item"><strong>Insurance Discounts:</strong> Some insurers offer 5-10% reduction</div>
            </div>
        </div>

        <h2>Environmental Benefits</h2>
        <div class="content">
            <h3>Carbon Footprint Reduction</h3>
            <div class="checklist">
                <div class="checklist-item"><strong>CO2 Savings:</strong> 1.2-2.5 tonnes per year typical</div>
                <div class="checklist-item"><strong>Energy Consumption:</strong> 20-35% reduction</div>
                <div class="checklist-item"><strong>Renewable Integration:</strong> Better for solar panels/heat pumps</div>
                <div class="checklist-item"><strong>Waste Reduction:</strong> 25+ year product lifespan</div>
            </div>

            <h3>EPC Rating Improvements</h3>
            <table class="cost-table">
                <tr>
                    <th>Current EPC</th>
                    <th>Post-Upgrade</th>
                    <th>Point Increase</th>
                    <th>Market Impact</th>
                </tr>
                <tr>
                    <td>F (35)</td>
                    <td>D (60)</td>
                    <td>+25 points</td>
                    <td>Significant value increase</td>
                </tr>
                <tr>
                    <td>D (60)</td>
                    <td>B (80)</td>
                    <td>+20 points</td>
                    <td>Above average rating</td>
                </tr>
                <tr>
                    <td>C (70)</td>
                    <td>A (90+)</td>
                    <td>+20 points</td>
                    <td>Premium property status</td>
                </tr>
            </table>

            <div class="tip-box">
                <strong>Future-Proofing:</strong> New regulations from 2025 will require minimum EPC ratings for rental properties. Upgrading now ensures compliance.
            </div>
        </div>

        <div class="cta-box">
            <h2>Calculate Your Personal Savings</h2>
            <p>Get a free energy assessment and personalized savings calculation.</p>
            <p>Windows by Choice will show you exactly how much you can save.</p>
            <p><strong>Call: 07774 604 190</strong> or visit windowsbychoice.co.uk</p>
        </div>

        <div class="footer">
            <p>Windows by Choice Ltd • Energy Efficiency Specialists • FENSA Registered<br>
            All calculations based on current energy prices and government data<br>
            This guide is provided free of charge. © 2025 Windows by Choice Ltd.</p>
        </div>
    `;
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Free Professional Guides
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Download our comprehensive guides to help you make informed decisions about your home improvement projects
          </p>
        </div>

        {showSuccess && (
          <div className="bg-emerald-100 border border-emerald-400 text-emerald-700 px-4 py-3 rounded mb-8 text-center">
            <strong>Success!</strong> Your guide is being prepared for download. Check your email for the PDF.
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pdfGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`${guide.color} text-white p-3 rounded-lg`}>
                    <guide.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-slate-600 mb-2">{guide.description}</p>
                    <span className="text-sm text-slate-500">{guide.pages}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {guide.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    onClick={() => handleDownload(guide.id)}
                    disabled={isSubmitting && selectedGuide === guide.id}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting && selectedGuide === guide.id
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-800 hover:bg-emerald-500 text-white transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting && selectedGuide === guide.id ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Preparing Download...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Download Free Guide
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-500 mt-2 text-center">
                    No spam, just valuable home improvement advice
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-blue-800 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Why Download Our Guides?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Shield className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm text-slate-600">
                  <strong>Expert Knowledge</strong><br />
                  35+ years of industry experience
                </p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm text-slate-600">
                  <strong>Comprehensive</strong><br />
                  Everything you need to know
                </p>
              </div>
              <div className="text-center">
                <Download className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <p className="text-sm text-slate-600">
                  <strong>Completely Free</strong><br />
                  No hidden costs or obligations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;