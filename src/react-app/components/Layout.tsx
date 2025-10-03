import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="transition-all duration-300 pt-20 lg:pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
