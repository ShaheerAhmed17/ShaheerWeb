import type { NavItem, SocialLink, Project, Service, PricingPlan, FaqItemData } from './types';
import { Briefcase, Code, ShoppingCart, Zap, Settings, Wrench, Linkedin, Github, Send, Palette, Search, MessageSquare, Users, Tv, Film, Package, Clock, HelpCircle, Instagram } from 'lucide-react';

export const APP_NAME = 'Muhammad Shaheer';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-shaheer-a49382247/', icon: Linkedin },
  { name: 'GitHub', url: 'https://github.com/ShaheerAhmed17', icon: Github },
  { name: 'Fiverr', url: 'https://www.fiverr.com/shaheerahmed746', icon: Send }, // Using Send as a placeholder for Fiverr
  { name: 'Instagram', url: 'https://www.instagram.com/mshaheerahmed17', icon: Instagram },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Functional Business Websites',
    description: 'Pixel-perfect, scalable, and highly responsive websites tailored to your business needs.',
    icon: Briefcase,
    details: ['Custom UI/UX Design', 'Mobile-First Responsive Layouts', 'Content Management Systems (CMS)', 'SEO Foundations']
  },
  {
    id: 'animations',
    title: 'Interactive Animations',
    description: 'Engaging animations and surprise pop-ups to create memorable user experiences.',
    icon: Film, // Using Film for animations
    details: ['GSAP & Framer Motion Expertise', 'Micro-interactions', 'Interactive Storytelling Elements', 'Performance-Optimized Animations']
  },
  {
    id: 'responsive',
    title: 'Responsive Layouts',
    description: 'Ensuring your website looks and functions flawlessly on all devices, from desktops to smartphones.',
    icon: Tv, // Using Tv for responsive layouts
    details: ['Fluid Grids & Flexible Images', 'Cross-Browser Compatibility', 'Touch-Friendly Navigation', 'Optimal Viewing Experience']
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Full-fledged e-commerce platforms with secure payment integration and user-friendly interfaces.',
    icon: ShoppingCart,
    details: ['Shopping Cart & Checkout Systems', 'Payment Gateway Integration (Stripe, PayPal)', 'Product Management', 'Inventory Control']
  },
  {
    id: 'optimization',
    title: 'Speed Optimization',
    description: 'Boosting your website’s performance for faster loading times and improved user satisfaction.',
    icon: Zap,
    details: ['Code Minification & Optimization', 'Image Compression', 'Caching Strategies', 'Lazy Loading Implementation']
  },
  {
    id: 'hosting',
    title: 'Hosting Setup',
    description: 'Reliable and scalable hosting solutions, configured for optimal performance and security.',
    icon: Settings, // Using Settings icon for hosting setup
    details: ['Domain Configuration', 'SSL Certificate Installation', 'Server Setup & Management', 'Automated Backups']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Bug Fixes',
    description: 'Ongoing support to keep your website running smoothly, including updates and bug resolutions.',
    icon: Wrench,
    details: ['Regular Software Updates', 'Security Monitoring', 'Performance Checks', 'Prompt Bug Fixing']
  },
];

export const PORTFOLIO_PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'Business Analytics Dashboard',
    description: 'A comprehensive dashboard for real-time business analytics, featuring interactive charts and data visualization. Built with React and Chart.js.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard analytics',
    demoLink: '#',
    tags: ['React', 'Dashboard', 'Data Visualization', 'UI/UX'],
  },
  {
    id: 'project-2',
    title: 'Custom E-commerce Landing Page',
    description: 'Visually stunning landing page for a new product launch, optimized for conversions. Includes custom animations and responsive design.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce product',
    demoLink: '#',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Animation', 'E-commerce'],
  },
  {
    id: 'project-3',
    title: 'Interactive Portfolio Website',
    description: 'A dynamic and interactive portfolio showcasing creative work with smooth transitions and engaging visual effects. Developed using Next.js and Framer Motion.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
    demoLink: '#',
    tags: ['Next.js', 'Framer Motion', 'Interactive Design', 'Web Development'],
  },
  {
    id: 'project-4',
    title: 'Mobile App Landing Page',
    description: 'A sleek and modern landing page for a new mobile application, highlighting key features and user benefits with clear call-to-actions.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile app',
    demoLink: '#',
    tags: ['UI/UX', 'Responsive Design', 'Landing Page', 'Marketing'],
  },
];

export const PRICING_PLANS_DATA: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$285',
    priceDescription: 'Starting from',
    features: [
      'Up to 3 Pages',
      '2 Rounds of Revisions',
      'Basic Plugin Integration',
      'Content Upload Assistance',
      'Responsive Design',
    ],
    timeline: '2-3 Weeks',
    cta: 'Get Started',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '$350',
    priceDescription: 'Starting from',
    features: [
      'Up to 7 Pages',
      '4 Rounds of Revisions',
      'Advanced Plugin Integration',
      'Full Content Upload',
      'Basic E-commerce Functionality',
      'SEO Setup',
    ],
    timeline: '4-6 Weeks',
    cta: 'Choose Plan',
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$435',
    priceDescription: 'Starting from',
    features: [
      '10+ Pages / Custom Scope',
      'Unlimited Revisions',
      'Custom Plugin Development',
      'Full Content Strategy & Upload',
      'Full E-commerce Functionality',
      'Advanced SEO & Analytics',
      'Priority Support',
    ],
    timeline: '6-8+ Weeks',
    cta: 'Contact Us',
  },
];

export const FAQ_DATA: FaqItemData[] = [
  {
    id: 'faq-1',
    question: 'What is the typical timeline for a project?',
    answer: 'Project timelines vary based on complexity and scope. A basic website might take 2-3 weeks, while a more complex e-commerce site or interactive project could take 6-8+ weeks. Our Timeline Generator can provide a more specific estimate based on your needs.',
  },
  {
    id: 'faq-2',
    question: 'What information do I need to provide to start a project?',
    answer: 'To start, we\'ll need a clear understanding of your project goals, target audience, desired features, any existing branding materials (logo, color palettes), and content (text, images). The more details you provide, the smoother the process will be.',
  },
  {
    id: 'faq-3',
    question: 'How will I receive updates during the project?',
    answer: 'We believe in transparent communication. You\'ll receive regular updates at pre-agreed milestones. We typically use email, project management tools, or scheduled calls, depending on your preference.',
  },
  {
    id: 'faq-4',
    question: 'What kind of post-delivery support do you offer?',
    answer: 'After project completion, we offer a 30-day period of support for bug fixes and minor adjustments. Ongoing maintenance packages are also available for continued support, updates, and security monitoring.',
  },
  {
    id: 'faq-5',
    question: 'Can you help with website hosting and domain names?',
    answer: 'Yes, we offer hosting setup services and can guide you through the process of acquiring a domain name. We ensure your hosting is optimized for your website\'s performance and security needs.',
  },
];

