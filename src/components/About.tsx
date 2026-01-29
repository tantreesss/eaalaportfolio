import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from '../assets/about.JPG';

export function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8">About EAALA</h2>
            <div className="w-24 h-px bg-black mb-8"></div>
            
            <div className="space-y-6 text-gray-700">
              <p>
                E.A. AURELIO LANDSCAPE ARCHITECTS (EAALA) is one of Asia's leading independent consultancy companies providing international services in master planning, environmental graphics, and landscape architecture.
              </p>
              
              <p>
                From our offices, EAALA is able to provide services to a broad range of clients in both private and public sectors. 
                Services are available to all organizations regardless of size. EAALA has the resources and ability to assist major Multi-national Organizations, 
                but is equally able to understand and service the needs of smaller organizations.
              </p>
              
              <p>
                EAALA is promoting a wide range of design services to meet the changing needs of industry, commerce, government and private sector. Impartial and independent advice of the highest quality is offered and a strong emphasis is placed on developing long-term client relationships. 
                EAALA aims to provide clients with the best and most integrated design services available and is well placed to face the new challenges of the 21st century.
              </p>
              
              <div className="mt-8 pt-8 border-t border-gray-300">
                <h3 className="text-2xl mb-4">L.Ar. Efren A. Aurelio</h3>
                <p className="mb-4">
                  President and Philippine Landscape Architecture Icon, L.Ar. Efren A. Aurelio graduated from the University of the Philippines with a degree in Bachelor of Landscape Architecture in 1979. He worked for almost 15 years in Hong Kong and Singapore with international design firms including Belt Collins & Associates, Urbis Travers Morgan, and Aspinwall Clouston Ltd., perfecting his signature style throughout the Asian Region.
                </p>
                <p>
                  He returned to the Philippines in 1996 and served as President of the Philippine Association of Landscape Architects (PALA) in 2000-2001. His expertise focuses on conceptual design, master planning, and the detailed design and implementation of landscapes for residential, commercial, institutional, and industrial projects.
                </p>
              </div>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-2">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl mb-2">15+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={aboutImage}
                alt="L.Ar. Efren A. Aurelio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}