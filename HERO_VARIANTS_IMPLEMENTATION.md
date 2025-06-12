# Windows by Choice - Hero Section Variants

## 🎯 Overview
Three professional hero section variants designed specifically for Windows by Choice, a UK window, door, and conservatory installation company. Each variant targets different aspects of the business while maintaining professional appeal to UK homeowners and property developers.

## 🚀 Hero Variants Created

### 1. **Corporate Professional** (`HeroVariant1Corporate`)
**Perfect for:** Building trust and professional credibility

**Key Features:**
- Clean, corporate design with professional typography
- Prominent trust indicators (FENSA, Which? Trusted Trader)
- Floating certification badges with hover effects
- Statistical credibility (35+ years, 1000+ customers, 10yr warranty)
- Premium CTA buttons with sophisticated styling
- Beautiful UK property background imagery
- Professional overlay gradients

**Best Used When:** Targeting high-value customers, commercial projects, or when credibility is paramount

### 2. **Before/After Showcase** (`HeroVariant2BeforeAfter`)
**Perfect for:** Demonstrating transformation impact

**Key Features:**
- Dynamic split-screen before/after displays
- Auto-rotating transformation examples
- Visual impact with grayscale vs color treatment
- Animated divider line with transformation icon
- Benefit highlights (energy efficiency, property value, quick install)
- Customer testimonial integration
- Interactive transformation indicators

**Best Used When:** Targeting homeowners considering renovations, showcasing dramatic improvements

### 3. **Product Focus** (`HeroVariant3ProductFocus`)
**Perfect for:** Highlighting specific products and technical features

**Key Features:**
- Interactive product navigation sidebar
- Dynamic color theming per product category
- Technical specifications display
- Feature highlight grids
- Product-specific imagery and descriptions
- Auto-rotating product showcase
- Expert consultation CTAs

**Best Used When:** Targeting customers researching specific products, technical decision-makers

## 📁 File Structure
```
src/components/heroes/
├── HeroVariant1Corporate.tsx     # Corporate professional variant
├── HeroVariant2BeforeAfter.tsx   # Before/after showcase variant  
├── HeroVariant3ProductFocus.tsx  # Product focus variant
├── HeroShowcase.tsx              # Demo component for testing variants
└── index.ts                      # Export file
```

## 🔧 Implementation Instructions

### Quick Implementation
Replace the existing hero section in `HomePage.tsx`:

```tsx
import { HeroVariant1Corporate } from '../components/heroes';

// Replace the existing hero section with:
<HeroVariant1Corporate />
```

### Testing All Variants
Use the showcase component to test all variants:

```tsx
import HeroShowcase from '../components/heroes/HeroShowcase';

// In your component:
<HeroShowcase />
```

### Customization Options

#### Color Schemes
Each variant uses the Windows by Choice brand colors:
- Primary: Blue (`slate-800`, `blue-800`)
- Accent: Emerald (`emerald-500`)  
- Trust: White with transparency
- Error/Before: Red tones
- Success/After: Green tones

#### Image Requirements
Ensure these images exist in `/public/images/`:
- `/images/about us/about-us-1.jpg` - Professional property shot
- `/images/windows/` - Window installation photos
- `/images/doors/` - Door installation photos  
- `/images/conservatories/` - Conservatory photos
- `/images/contact/which-trusted-wbc.png` - Trust badge

#### Responsive Design
All variants are fully responsive with:
- Mobile-first approach
- Tablet breakpoints at `md:`
- Desktop breakpoints at `lg:`
- Touch-friendly interactive elements

## 🎨 Design Specifications

### Typography
- Headlines: Bold, large scale (text-6xl/7xl)
- Subheads: Medium weight, readable scale
- Body: Clean, professional, high contrast
- CTAs: Bold, action-oriented language

### Color Psychology
- **Blue**: Trust, professionalism, reliability
- **Emerald**: Growth, quality, premium
- **White**: Cleanliness, modern, professional
- **Gradients**: Depth, modern appeal

### Animations
- Smooth transitions (duration-300/500)
- Hover effects on interactive elements
- Auto-rotating content (4-8 second intervals)
- Scale transforms for CTAs (hover:scale-105)

## 📱 Mobile Optimization

All variants include:
- Responsive image handling
- Touch-friendly button sizing (min 44px)
- Readable text scaling
- Simplified layouts on small screens
- Fast loading with optimized images

## 🧪 A/B Testing Recommendations

### Test Scenarios:
1. **Corporate vs Before/After** - Which builds more trust?
2. **Product Focus vs Corporate** - Which generates more quotes?
3. **Call to Action variations** - "Free Quote" vs "Free Survey"

### Success Metrics:
- Contact form completions
- Phone call conversions  
- Time spent on page
- Scroll depth engagement

## 🔄 Easy Switching Between Variants

To change variants, simply update the import in `HomePage.tsx`:

```tsx
// Current (Corporate)
import { HeroVariant1Corporate as Hero } from '../components/heroes';

// Change to Before/After
import { HeroVariant2BeforeAfter as Hero } from '../components/heroes';

// Change to Product Focus  
import { HeroVariant3ProductFocus as Hero } from '../components/heroes';

// Then use: <Hero />
```

## 🎯 Recommended Usage by Audience

### **Corporate Professional (Variant 1)**
- **Audience**: Property developers, commercial clients, high-value residential
- **Message**: Established, trustworthy, professional service
- **Conversion**: Builds confidence for large projects

### **Before/After Showcase (Variant 2)**  
- **Audience**: Homeowners considering renovations, visual decision-makers
- **Message**: Dramatic improvements, value addition, transformation
- **Conversion**: Inspires with visual impact

### **Product Focus (Variant 3)**
- **Audience**: Research-oriented customers, technical buyers, specific product needs
- **Message**: Expert knowledge, product quality, technical excellence  
- **Conversion**: Educates and builds product confidence

## 📈 Performance Considerations

- All images optimized for web delivery
- Efficient CSS with Tailwind utilities
- Minimal JavaScript for animations
- Lazy loading for non-critical images
- Progressive enhancement approach

---

**Built for Windows by Choice Ltd** - Premium window, door, and conservatory installations serving Bedfordshire, South East England, and London since 1989.