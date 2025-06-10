# Windows by Choice - Complete Project Plan

**Farm ID**: WINDOWS-BY-CHOICE-001  
**Original Site**: https://www.windowsbychoice.co.uk/  
**Project Goal**: Create modern, professional website with calm aesthetic

## 🎯 PROJECT OVERVIEW

### Business Requirements
- **Company**: Windows by Choice Ltd (35+ years, family-run)
- **Location**: Shefford, Bedfordshire  
- **Phone**: 07774 604 190
- **Services**: Windows, Doors, Conservatories, Orangeries
- **Target**: South East England, London homeowners

### Design Requirements (Based on Inspiration Screenshots)
- **Color Palette**: Calm beiges, warm grays (NOT harsh orange)
- **Typography**: Clean, professional fonts
- **Logo**: Bigger, prominent placement
- **Layout**: Generous white space, professional spacing
- **Messaging**: "We Produce Quality Windows for You" style

## 📋 DEVELOPMENT PHASES

### Phase 1: Foundation Setup ✅
- [x] Farmer identity and CLAUDE.md created
- [x] Site analysis and content documentation
- [x] Git configuration and deployment setup
- [x] Folder structure planning

### Phase 2: Asset Collection & Organization
**Status**: Ready for execution
- [ ] Extract all images from live site
- [ ] Organize into proper folder structure
- [ ] Optimize images for web performance
- [ ] Create image inventory and documentation

### Phase 3: React Project Setup
**Dependencies**: Phase 2 completion
- [ ] Initialize React/TypeScript project
- [ ] Install required dependencies (Tailwind, React Router, Framer Motion)
- [ ] Configure Tailwind with calm color palette
- [ ] Set up project structure and routing

### Phase 4: Core Pages Development
**Priority Order**:
1. **Homepage** - Hero section, services overview
2. **About** - Company story, 35+ years experience
3. **Windows** - Product showcase, UPVC/Aluminium
4. **Doors** - Bi-fold, patio, French, composite
5. **Conservatories** - All styles (Edwardian, Victorian, etc.)
6. **Contact** - Quote forms, business details

### Phase 5: Advanced Features
- [ ] Product galleries with filtering
- [ ] Quote request system
- [ ] Testimonials section
- [ ] Blog/news section
- [ ] Mobile optimization

### Phase 6: Testing & Deployment
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] GitHub deployment
- [ ] Netlify hosting setup

## 🛠️ TECHNICAL REQUIREMENTS

### Core Technology Stack
- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS (v3 for stability)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify via GitHub

### Required Dependencies
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^3.4.0",
    "typescript": "~5.8.3",
    "vite": "^6.0.3"
  }
}
```

### Color Palette (Calm & Professional)
```css
:root {
  /* Primary - Warm, calm tones */
  --primary-50: #faf9f7;
  --primary-100: #f2f0ed;
  --primary-500: #b8976c;
  --primary-600: #a67c52;
  
  /* Accent - Subtle warmth */
  --accent-400: #d4b896;
  --accent-500: #c4a882;
  
  /* Neutral - Professional grays */
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-500: #737373;
  --neutral-800: #262626;
}
```

## 📁 FOLDER STRUCTURE

### Image Organization Required
```
public/images/
├── homepage/
│   ├── logo.png (BIGGER version needed)
│   ├── hero-main.jpg
│   └── services-overview.jpg
├── windows/
│   ├── upvc-windows.jpg
│   ├── aluminium-windows.jpg
│   └── installation-examples/
├── doors/
│   ├── bifold-doors.jpg
│   ├── composite-doors.jpg
│   └── patio-doors.jpg
├── conservatories/
│   ├── edwardian-style.jpg
│   ├── victorian-style.jpg
│   └── modern-conservatories.jpg
├── certifications/
│   ├── which-trusted-trader.png
│   ├── kitemark.png
│   └── fensa.png
└── testimonials/
    └── customer-projects/
```

### Component Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx (with bigger logo)
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx (calm design)
│   │   ├── Services.tsx
│   │   └── Testimonials.tsx
│   └── ui/
│       ├── Button.tsx
│       └── ContactForm.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── WindowsPage.tsx
│   ├── DoorsPage.tsx
│   ├── ConservatoriesPage.tsx
│   └── ContactPage.tsx
└── types/
    └── index.ts
```

## 🎨 DESIGN SPECIFICATIONS

### Typography
- **Headings**: Clean, bold fonts
- **Body**: Professional, readable
- **Size Scale**: Larger headings for impact

### Layout Principles
- **White Space**: Generous spacing like inspiration
- **Grid**: Clean, organized sections
- **Mobile First**: Responsive design priority

### Key Messaging
- **Hero**: "Quality Windows for Your Home" 
- **Subtext**: "35+ Years of Family Excellence"
- **Values**: Trust, Quality, Experience, Local

## 📞 NEXT STEPS FOR HUMAN

### Immediate Actions Needed
1. **Image Collection**: Extract and organize images from live site
2. **Asset Review**: Approve image quality and organization
3. **Design Review**: Confirm calm color palette matches vision
4. **Content Review**: Verify business information accuracy

### Implementation Ready
- Project structure is documented
- Technical requirements defined
- Development phases planned
- Ready to begin coding once assets provided

**The farmer is prepared and waiting for image assets to begin implementation.**