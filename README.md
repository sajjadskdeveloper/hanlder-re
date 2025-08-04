# handler - Real Estate Website

A modern, professional real estate website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete landing page for "handler" with advanced UI components and responsive design.

##🏠 Features



### Core Features
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Professional design with smooth animations and transitions
- **Component-Based Architecture**: Modular, reusable components
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 15 for optimal performance

### Sections
1. **Header**: Fixed navigation with mobile menu
2. **Hero Section**: Eye-catching hero with property search functionality
3. **Properties Section**: Featured and recent property listings
4. **About Section**: Company story, values, and team information
5. **Services Section**: Comprehensive real estate services
6. **Contact Section**: Contact form and company information
7. **Footer**: Complete footer with links and newsletter signup

### Components
- `Header.tsx` - Navigation and branding
- `Hero.tsx` - Main hero section with search
- `PropertyCard.tsx` - Reusable property listing card
- `PropertiesSection.tsx` - Property listings display
- `AboutSection.tsx` - Company information and team
- `ServicesSection.tsx` - Services showcase
- `ContactSection.tsx` - Contact form and information
- `Footer.tsx` - Site footer with links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd handler
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Images**: Unsplash (placeholder images)

## 📁 Project Structure

```
handler/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── PropertyCard.tsx
│       ├── PropertiesSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradient
- **Secondary**: Gray scale for text and backgrounds
- **Accent**: White and light grays for cards and sections

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Weights**: 300-900 for comprehensive typography scale

### Animations
- Smooth hover effects on cards and buttons
- Gradient text animations
- Transform effects on interactive elements
- Custom scrollbar styling

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  blue: { /* your blue shades */ },
  purple: { /* your purple shades */ },
  gray: { /* your gray shades */ }
}
```

### Content
- Update company information in respective components
- Replace placeholder images with actual property photos
- Modify contact information and social media links

### Styling
- Custom CSS classes available in `globals.css`
- Component-specific styles in each component file
- Tailwind utility classes for rapid styling

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: info@handler.com
- Phone: +1 (555) 123-4567

## 🔮 Future Enhancements

- [ ] Property search functionality
- [ ] User authentication
- [ ] Property management dashboard
- [ ] Virtual tour integration
- [ ] Mortgage calculator
- [ ] Blog section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Property comparison tool

---

**Built with ❤️ for handler**
