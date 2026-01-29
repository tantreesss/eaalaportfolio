import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../assets/hero.jpg';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroImage}
          alt="Landscape Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-6xl md:text-8xl tracking-wide mb-4">EAALA</h1>
        <p className="text-xl md:text-2xl tracking-widest uppercase">EA Aurelio Landscape Architects</p>
        <div className="mt-8 w-24 h-px bg-white"></div>
        {/* <p className="mt-8 text-lg tracking-wide"></p> */}
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}