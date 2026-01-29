import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { About } from './components/About';
import { Services } from './components/Services';
import { Awards } from './components/Awards';
import { Team } from './components/Team';
import { ProtectedStandards } from './components/ProtectedStandards';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <About />
      <Services />
      <Awards />
      <Team />
      <ProtectedStandards />
      <Contact />
      
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl tracking-wider mb-4">EAALA</div>
              <p className="text-gray-400">
                E.A. Aurelio Landscape Architects
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Award Winning • Consistent • Reliable<br />
                Experienced • Innovative • Creative
              </p>
            </div>
            
            <div>
              <div className="mb-4">Contact</div>
              <div className="space-y-2 text-gray-400">
                <p>(02) 8554-9453</p>
                <p>e.aurelio@yahoo.com</p>
                <p>eaureliodocumenti@gmail.com</p>
              </div>
            </div>
            
            <div>
              <div className="mb-4">Address</div>
              <p className="text-gray-400">
                Unit 710 Future Point Plaza I<br />
                112 Panay Avenue, Barangay South Triangle<br />
                Quezon City, Philippines 1113
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} E.A. Aurelio Landscape Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}