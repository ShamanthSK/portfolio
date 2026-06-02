import './globals.css';
import CursorRibbons from '@/components/layout/CursorRibbons';
import Navigation from '@/components/layout/Navigation';

export const metadata = {
  title: 'Shamanth S Kumbar — Software Engineer & CS+Design Graduate',
  description:
    'World-class 3D portfolio of Shamanth S Kumbar — Building Intelligent Digital Experiences Through Design, Development, and AI.',
  keywords: ['Software Engineer', 'Portfolio', 'React', 'Next.js', 'Full Stack', 'AI', 'Design'],
  authors: [{ name: 'Shamanth S Kumbar' }],
  openGraph: {
    title: 'Shamanth S Kumbar — Portfolio',
    description: 'Building Intelligent Digital Experiences Through Design, Development, and AI',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <CursorRibbons />
        {children}
      </body>
    </html>
  );
}
