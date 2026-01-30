import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import smdcParkvilleImg from '../assets/parkville.PNG';
import aokiClubhouseImg from '../assets/AOKI.jpg';
import aquamundoImg from '../assets/aquamundo.jpg';
import aureoImg from '../assets/aureo.jpg';
import ayalaGreenfieldImg from '../assets/greenfield.jpg';
import edenRidgeImg from '../assets/eden-ridge.jpg';
import fairwaysImg from '../assets/fairways.jpg';
import filinvestImg from '../assets/filinvest.jpg';
import smJazzCondoImg from '../assets/jazz.jpg';
import theLindImg from '../assets/lind.jpg';
import marqueePlaceImg from '../assets/marquee.jpg';
import villaDeMercedesImg from '../assets/villademer.jpg';
import northcrestImg from '../assets/Northcrest.jpg';
import thePodiumImg from '../assets/podium.jpg';
import saddleClubImg from '../assets/saddle.jpg';
import sailResidencesImg from '../assets/Sail.png';
import smSeasideImg from '../assets/seaside.jpg';
import sheratonManilaImg from '../assets/sheraton.jpg';
import theSonomaImg from '../assets/Sonoma.JPG';
import tambuliImg from '../assets/tambuli.jpg';
import ventanaImg from '../assets/Ventana.jpg';
import vineResidencesImg from '../assets/vine.jpg';
import wackwackImg from '../assets/wack.jpg';
import zuelligBuildingImg from '../assets/Zuellig.jpg';
import greenbeltImg from '../assets/greenbelt.JPG';
import primeImg from '../assets/prime.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  owner?: string;
  dateCompleted?: string;
  builtEnvironmentType?: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Greenbelt 3 Park",
    category: "Parks",
    location: "Makati City",
    image: greenbeltImg,
    builtEnvironmentType: "Urban Park / Mixed-Use Development",
    description: "Greenbelt in Makati stands as a premier landmark and urban oasis, successfully integrating high-end retail and dining with expansive, uninterrupted gardens. Prioritizing an interplay between built and unbuilt spaces, the planning team strategically positioned buildings along the perimeter to preserve existing mature trees and create a central, seamless garden visible from varying levels. Beyond its aesthetic harmony of architecture and landscape, the development serves vital environmental functions—reducing the urban heat island effect, acting as a carbon sink, managing stormwater through extensive unpaved grounds, and providing a habitat for displaced wildlife, ultimately creating a balanced and healthy urban ecosystem."
  },
  {
    id: 2,
    title: "Henann Resort Alona Beach",
    category: "Hotels & Resorts",
    location: "Panglao, Bohol",
    image: "https://pix8.agoda.net/hotelImages/789/789537/789537_16020816140039719868.jpg?ca=6&ce=1&s=1024x",
    builtEnvironmentType: "Hospitality Development",
    description: "Henann Resort Alona Beach in Panglao, Bohol, distinguishes itself as a luxury destination that prioritizes responsible coastal development and environmental stewardship. By integrating tropical architecture with the preservation of existing coconut groves and natural landforms, the resort minimizes ecological disturbance while enhancing guest comfort through natural shading and biodiversity-rich green spaces. Sustainability is further reinforced through rainwater harvesting for irrigation, site-sensitive circulation paths that limit terrain alteration, and the extensive use of low-maintenance native flora. Ultimately, the resort harmonizes modern hospitality with ecological preservation, offering an immersive experience that respects and protects Panglao's natural heritage."
  },
  {
    id: 4,
    title: "Shore Residences",
    category: "Residential",
    location: "Pasay City",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425103504.jpg?k=eb70e491633f51681e5f4cd2e4e7fb1f655953a4fb137ff138ead49e03f51bbe&o=",
    builtEnvironmentType: "Residential Condominium",
    description: "Shore Residences is a resort-inspired residential complex within the SMDC Shore Mall of Asia complex that brings the ambiance of world-class beachfront getaways into the heart of the Pasay Business District. Strategically located near Manila Bay, the development features a tropical landscape design characterized by organic forms, 'beach-approach' swimming pools, and rock formations that house slides and showers. Beyond its aquatic amenities, the complex integrates a variety of outdoor recreational facilities—including a mini-football field, basketball court, and playgrounds—using a mix of palms and sand-finished hardscapes to maintain its vacation-like atmosphere."
  },
  {
    id: 5,
    title: "The Podium",
    category: "Commercial",
    location: "Ortigas Center, Mandaluyong City",
    image: thePodiumImg,
    builtEnvironmentType: "Commercial Building / Mixed-use Development",
    description: "Located in the Ortigas center, The Podium complex—comprising the BDO Tower and SM Keppel Tower—is a mixed-use development that balances commercial efficiency with advanced environmental sustainability. To combat the urban heat island effect and maintain its LEED Gold and BCA Green Mark Gold certifications, the complex features high-albedo roofing materials and the Philippines' largest green wall, which utilizes a typhoon-resistant netting system and automated drip irrigation. This integration of sustainable technology and lush garden spaces not only reduces reliance on air conditioning through natural ventilation but also provides a vital, humane 'breathing space' for employees and visitors within the dense urban environment."
  },
  {
    id: 6,
    title: "Discovery Shores Boracay",
    category: "Hotels & Resorts",
    location: "Boracay Island, Philippines",
    image: "https://pix8.agoda.net/hotelImages/8786955/0/fc121781b1ce7978ad10f3be85e30768.jpg?ca=9&ce=1&s=1024x"
  },
  {
    id: 7,
    title: "SMDC Parkville",
    category: "Residential",
    location: "Bacolod City",
    image: smdcParkvilleImg
  },
  {
    id: 8,
    title: "Northcrest Subdivision",
    category: "Residential",
    location: "Davao City",
    image: northcrestImg
  },
  {
    id: 9,
    title: "Ayala Greenfield Estates",
    category: "Residential",
    location: "Calamba, Laguna",
    image: ayalaGreenfieldImg
  },
  {
    id: 10,
    title: "Eden Ridge Subdivision And Resort",
    category: "Residential",
    location: "Davao City",
    image: edenRidgeImg
  },
  {
    id: 12,
    title: "Marquee Place",
    category: "Residential",
    location: "Angeles, Pampanga",
    image: marqueePlaceImg
  },
  {
    id: 13,
    title: "The Sonoma",
    category: "Residential",
    location: "Sta. Rosa, Laguna",
    image: theSonomaImg
  },
  {
    id: 14,
    title: "Villa de Mercedes",
    category: "Residential",
    location: "Toril, Davao City",
    image: villaDeMercedesImg,
    builtEnvironmentType: "High-End Residential Subdivision",
    description: "Perched at the foothills of Mount Apo at an elevation of 535 feet, Villa de Mercedes is a high-end, meticulously planned subdivision in Davao that prioritizes responsible land stewardship and a resort-like lifestyle. The development seamlessly integrates luxury amenities—such as a 700-square-meter infinity pool, beach volleyball area, and clubhouse—with aggressive conservation efforts, including the preservation of existing waterways and vegetation to protect local wildlife. By implementing environmentally sound features like detention ponds, rain gardens for natural stormwater management, and expansive meandering traffic islands, the project creates a 'garden-estate' atmosphere that offers residents panoramic views of the Davao Gulf while fostering a deep, sustainable connection to the surrounding natural landscape."
  },
  {
    id: 15,
    title: "Aoki Clubhouse Eagle Ridge Golf And Country Club",
    category: "Parks",
    location: "Gen. Trias, Cavite",
    image: aokiClubhouseImg
  },
  {
    id: 16,
    title: "Saddle And Club Leisure Park",
    category: "Parks",
    location: "Naic, Cavite",
    image: saddleClubImg
  },
  {
    id: 17,
    title: "Aquamundo",
    category: "Parks",
    location: "Kawit, Cavite",
    image: aquamundoImg
  },
  {
    id: 18,
    title: "Tambuli",
    category: "Hotels & Resorts",
    location: "Lapu-Lapu City, Cebu",
    image: tambuliImg
  },
  {
    id: 19,
    title: "Ventana Pool And Resto Bar",
    category: "Hotels & Resorts",
    location: "Boracay",
    image: ventanaImg
  },
  {
    id: 20,
    title: "The Lind",
    category: "Hotels & Resorts",
    location: "Boracay",
    image: theLindImg
  },
  {
    id: 21,
    title: "Sheraton Manila Hotel",
    category: "Hotels & Resorts",
    location: "Newport, Pasay City",
    image: sheratonManilaImg
  },
  {
    id: 22,
    title: "Aureo",
    category: "Hotels & Resorts",
    location: "La Union",
    image: aureoImg,
    builtEnvironmentType: "Resort",
    description: "Aureo Hotel & Resort reimagines the traditional luxury getaway by positioning its landscape as the central guest experience, where rooms open directly onto a harmonious blend of architecture and ecology. The design's standout feature is the integration of large planting areas directly within the pool system, creating lush green islands that provide natural shade, glare reduction, and microclimate cooling to enhance guest comfort. Developed through deep collaboration with local communities and hotel operators, the resort serves as a functional model for sustainable hospitality, proving that high-end leisure can coexist with ecological responsibility through thoughtful water and vegetation management."
  },
  {
    id: 23,
    title: "Filinvest Riverwalk",
    category: "Commercial",
    location: "Muntinlupa City, Metro Manila",
    image: filinvestImg
  },
  {
    id: 24,
    title: "Zuellig Building",
    category: "Commercial",
    location: "Makati City",
    image: zuelligBuildingImg,
    builtEnvironmentType: "Commercial Office Building",
    description: "The Zuellig Building, located at a prime intersection in the Makati Central Business District, serves as a premier model of harmony between architecture and landscape architecture, achieving the prestigious LEED Platinum certification. The design utilizes a bold, modern sculptural planting scheme and a formal color palette of grays and blacks to complement its state-of-the-art facade while fostering a 'prime-grade' workplace atmosphere. By integrating an outdoor garden, a third-level deck, and a 38th-level skydeck, the project employs green corridors and locally sourced, low-impact materials to mitigate urban pollutants and reduce heat. Ultimately, the development prioritizes user well-being by providing a tranquil, 'breathing' environment that balances the intensity of the metropolis with sustainable, world-class Filipino design."
  },
  {
    id: 25,
    title: "SM Seaside City",
    category: "Commercial",
    location: "Cebu",
    image: smSeasideImg
  },
  {
    id: 26,
    title: "Vine Residences",
    category: "Residential",
    location: "Quezon City",
    image: vineResidencesImg
  },
  {
    id: 27,
    title: "Sail Residences",
    category: "Residential",
    location: "Quezon City",
    image: sailResidencesImg
  },
  {
    id: 28,
    title: "SM Jazz Condominium",
    category: "Residential",
    location: "Makati City",
    image: smJazzCondoImg
  },
  {
    id: 29,
    title: "Wack-Wack Subdivision Residence",
    category: "Residential",
    location: "Quezon City",
    image: wackwackImg
  },
  {
    id: 30,
    title: "Fairways and Bluewater",
    category: "Hotels & Resorts",
    location: "Boracay",
    image: fairwaysImg
  },
  {
    id: 31,
    title: "Henann Prime",
    category: "Hotels & Resorts",
    location: "Boracay, Aklan",
    image: primeImg,
    builtEnvironmentType: "Hotel & Resort",
    description: "Henann Prime in Boracay’s Station 1 distinguishes itself as an intimate, beachfront sanctuary that prioritizes minimalist elegance and privacy over the grand scale of its sister resorts. Strategically utilizing its limited real estate, the landscape design centers on two distinct pool wings: the West Wing features secluded, room-accessible private pools adorned with bas-reliefs and water cascades, while the East Wing centers on a narrow pool integrated with sunken seating and wooden decks. By blending high-end beachfront amenities—like its signature blue-green beach beds—with aquatic features designed to complement rather than compete with the natural coastline, Henann Prime offers a luxurious, 'elegantly minimalist' experience that capitalizes on its prestigious and quiet location."
  }
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  
  const categories = ['All', 'Residential', 'Commercial', 'Hotels & Resorts', 'Parks'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Helper function to normalize project names for matching
  const normalizeProjectName = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\b\d+\b/g, '') // Remove standalone numbers (e.g., "1" in "Shore 1")
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
  };

  // Helper function to extract main project name (remove location details)
  const extractMainName = (fullName: string): string => {
    // Split by comma and take the first part (usually the project name)
    const parts = fullName.split(',');
    return parts[0].trim();
  };

  // Helper function to find project by award project name
  const findProjectByAwardName = (awardProjectName: string): Project | null => {
    const mainAwardName = extractMainName(awardProjectName);
    const normalizedAwardName = normalizeProjectName(mainAwardName);
    
    // Try exact match first
    let match = projects.find(project => 
      normalizeProjectName(project.title) === normalizedAwardName
    );
    
    if (match) return match;
    
    // Try partial match - check if award name contains project title or vice versa
    match = projects.find(project => {
      const normalizedProjectTitle = normalizeProjectName(project.title);
      return normalizedAwardName.includes(normalizedProjectTitle) || 
             normalizedProjectTitle.includes(normalizedAwardName);
    });
    
    if (match) return match;
    
    // Try matching key words (e.g., "Tambuli" matches "Tambuli Seaside Resort")
    const awardWords = normalizedAwardName.split(' ').filter(word => word.length > 2);
    match = projects.find(project => {
      const projectTitle = normalizeProjectName(project.title);
      const projectWords = projectTitle.split(' ').filter(word => word.length > 2);
      
      // Check if significant words match
      const matchingWords = awardWords.filter(word => 
        projectWords.some(pWord => pWord.includes(word) || word.includes(pWord))
      );
      
      // Require at least 2 matching words or one very long matching word
      return matchingWords.length >= 2 || 
             (matchingWords.length === 1 && matchingWords[0].length > 5);
    });
    
    return match || null;
  };

  // Listen for project open events from Awards component
  useEffect(() => {
    const handleOpenProject = (event: CustomEvent) => {
      const awardProjectName = event.detail.title;
      const matchingProject = findProjectByAwardName(awardProjectName);
      
      if (matchingProject) {
        setSelectedImage(matchingProject);
        // Scroll to projects section
        setTimeout(() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    window.addEventListener('openProject' as any, handleOpenProject as EventListener);
    
    return () => {
      window.removeEventListener('openProject' as any, handleOpenProject as EventListener);
    };
  }, []);

  return (
    <>
      <section id="projects" className="py-24 px-4 md:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl mb-4">Projects</h2>
            <div className="w-24 h-px bg-black"></div>
          </div>
          
          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 border transition-colors ${
                  filter === category 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.category} • {project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div className="min-h-full flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div 
              className="max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.description ? (
                // Project with description - Image first, then details
                <div className="bg-black">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3]">
                    <ImageWithFallback
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details Section */}
                  <div className="bg-white p-8 lg:p-12">
                    <h3 className="text-4xl mb-4">{selectedImage.title}</h3>
                    
                    <div className="space-y-2 mb-6 text-gray-700">
                      {selectedImage.owner && (
                        <p><span className="font-medium">Owner:</span> {selectedImage.owner}</p>
                      )}
                      <p><span className="font-medium">Location:</span> {selectedImage.location}</p>
                      {selectedImage.dateCompleted && (
                        <p><span className="font-medium">Date Completed:</span> {selectedImage.dateCompleted}</p>
                      )}
                      {selectedImage.builtEnvironmentType && (
                        <p><span className="font-medium">Built Environment Type:</span> {selectedImage.builtEnvironmentType}</p>
                      )}
                    </div>
                    
                    <div className="w-16 h-px bg-black mb-6"></div>
                    
                    <div className="text-gray-800 space-y-4 leading-relaxed">
                      {selectedImage.description.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Project without description - Simple lightbox
                <div className="flex flex-col items-center">
                  <ImageWithFallback
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                  <div className="mt-6 text-white text-center">
                    <h3 className="text-3xl mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.category} • {selectedImage.location}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}