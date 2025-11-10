# My Family Recipe Keeper - Landing Page

**Product Landing Page** for My Family Recipe Keeper - Preserve your family's culinary heritage

---

## 🎯 Project Overview

This is the **marketing landing page** for My Family Recipe Keeper, designed to convert visitors into users through emotional storytelling and strategic conversion optimization.

**Live Site**: [myfamilyrecipekeeper.com](https://myfamilyrecipekeeper.com) (coming soon)

**Product App**: [app.myfamilyrecipekeeper.com](https://app.myfamilyrecipekeeper.com) (separate repo)

**GitHub**: https://github.com/klatt42/recipe-keeper-landing

---

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Analytics**: Google Analytics 4 (GA4)
- **Email**: Resend (lead capture)
- **CRM**: GoHighLevel (lead management)

---

## 📁 Project Structure

```
recipe-keeper-landing/
├── app/                  # Next.js App Router pages
│   ├── page.tsx         # Homepage (hero, features, pricing)
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Feature showcase
│   ├── Pricing.tsx     # Pricing comparison
│   ├── Testimonials.tsx # Social proof
│   └── LeadMagnet.tsx  # "Recipe Rescue Kit" download
├── public/             # Static assets
└── README.md           # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/klatt42/recipe-keeper-landing.git
cd recipe-keeper-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

---

## 📝 Content Strategy

This landing page uses **emotional storytelling** to convert visitors. Content is driven by the Recipe Keeper context library:

**Location**: `~/project-genesis/context/recipe-keeper/`

### Core Messaging

1. **Fear of Loss**: "Don't let Grandma's recipes die with her"
2. **Heritage**: "Preserve your family's culinary heritage"
3. **Nostalgia**: "Remember the smell of Grandma's kitchen?"
4. **Urgency**: "Recipe cards won't last another 10 years"
5. **Connection**: "Share recipes with family, no matter the distance"

### Target Personas

- **Primary**: "The Family Historian" (women 45-65, moderate tech)
- **Secondary**: "The Nostalgic Cook" (parents 30-45, tech-savvy)
- **Tertiary**: "The Recipe Collector" (retirees 60-75, low-moderate tech)

---

## 🎨 Landing Page Sections

### 1. Hero Section
- **Headline**: "Your Grandma's Recipes Deserve Better Than a Shoebox"
- **Subheadline**: Emotional clarification
- **CTA**: "Start Preserving (Free Forever)"
- **Visual**: Animated recipe card transformation

### 2. Pain Points
- Fading recipe cards
- Lost family memories
- Relatives aging
- Fire/flood risk

### 3. Solution (Features)
- Multi-Image OCR (hero feature)
- Family Sharing
- AI Recipe Variations
- Recipe Timeline
- Quick Cook Mode

### 4. Social Proof
- 3 emotional testimonials
- Real family stories
- User count

### 5. Pricing
- **Free**: 50 recipes, 2 cookbooks, 5 AI variations/month
- **Premium**: $4.99/month, unlimited everything
- Clear comparison table

### 6. Lead Magnet
- **"Recipe Card Rescue Kit"** - FREE PDF download
- Email capture form
- Follow-up email sequence

### 7. Final CTA
- "Don't Let Your Recipes Fade Away"
- Free signup (no credit card required)

---

## 📊 Conversion Optimization

### Lead Magnets

1. **Recipe Card Rescue Kit** (primary) - Photography tips, organization guide
2. **Lost Recipe Recovery Template** - Memory reconstruction
3. **Family Recipe Interview Guide** - 50 questions for relatives

### Conversion Funnels

1. **Freemium**: Free signup → 50 recipe limit → upgrade
2. **Lead Magnet**: PDF download → email sequence → trial
3. **Gift Purchase**: Adult child buys for parent → viral family growth

### A/B Testing Plan

**Headlines to test**:
1. "Your Grandma's Recipes Deserve Better Than a Shoebox" (fear)
2. "Preserve Your Family's Culinary Heritage" (aspiration)
3. "Don't Let Your Recipes Die With You" (urgency)

**CTAs to test**:
1. "Start Preserving (Free)"
2. "Save My Recipes"
3. "Begin My Legacy"

---

## 🔗 Integration Points

### Product App
- **Domain**: app.myfamilyrecipekeeper.com
- **Repo**: recipe-keeper-app
- **CTA Link**: Links to signup page in product app

### Email Service (Resend)
- Lead capture form → Resend API
- Sends "Recipe Rescue Kit" PDF
- 5-email welcome sequence

### GoHighLevel
- Lead data sync
- CRM tracking
- Marketing automation

### Analytics (GA4)
- Page views
- Scroll depth
- CTA clicks
- Form submissions
- Conversion rate

---

## 🌐 Deployment

### Netlify Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

**Netlify Configuration**:
- Build command: `npm run build`
- Publish directory: `.next`
- Framework: Next.js

**Environment Variables** (Netlify):
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxx
GHL_API_KEY=xxxxxxxxxxxxx
```

### Domain Configuration

**Primary Domain**: myfamilyrecipekeeper.com → Landing page
**App Domain**: app.myfamilyrecipekeeper.com → Product app

**Redirects** (301):
- sharemyfamilyrecipes.com → myfamilyrecipekeeper.com
- sharemyfamily.recipes → myfamilyrecipekeeper.com

---

## 📈 Success Metrics

### Traffic Goals
- Month 1: 1,000 visitors
- Month 3: 5,000 visitors
- Month 6: 10,000 visitors

### Conversion Goals
- **Email capture**: 5% (lead magnet)
- **Free signup**: 2%
- **Free → Premium**: 10% (over 30 days)

### Engagement Goals
- Time on page: 3+ minutes
- Scroll depth: 60%+
- CTA click rate: 15%+

---

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📚 Related Documentation

- **Product Context Library**: `~/project-genesis/context/recipe-keeper/`
- **Genesis Skills**: `~/project-genesis/skills/products/recipe-keeper/`
- **Product App Repo**: `~/projects/recipe-keeper-app/`

---

## 🎯 Next Steps

1. **Build full landing page** using Recipe Keeper context library
2. **Set up Resend** email service for lead capture
3. **Configure GoHighLevel** CRM integration
4. **Add GA4** tracking for conversion analytics
5. **Deploy to Netlify** at myfamilyrecipekeeper.com
6. **A/B test** headlines and CTAs
7. **Monitor metrics** and optimize conversion rate

---

## 📞 Contact

**Product**: My Family Recipe Keeper
**Landing Page**: myfamilyrecipekeeper.com
**Product App**: app.myfamilyrecipekeeper.com
**Support**: support@myfamilyrecipekeeper.com

---

**Built with ❤️ using the Genesis landing page system**
