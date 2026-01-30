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
      <About />
      <Services />
      <Awards />
      <FeaturedProjects />
      <Team />
      <ProtectedStandards />
      <Contact />
      
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl tracking-wider mb-4">EAALA</div>
            <p className="text-gray-400 mb-4">
              E.A. Aurelio Landscape Architects
            </p>
            <p className="text-sm text-gray-500">
              Award Winning • Consistent • Reliable • Experienced • Innovative • Creative
            </p>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} E.A. Aurelio Landscape Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}