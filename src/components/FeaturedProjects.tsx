import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
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
    description: "Greenbelt is certainly one of today's considered landmarks in Makati and in the country with its mix of high-end shops and restaurants, accompanied by different gardens that serve as an oasis in the Metro. Being situated around a retail complex never stopped the planning team to successfully execute the project accordingly. The landscape design wasn't simply just to complement the complex but also to provide an effortless interaction with its users through a play in varying viewing areas such as terraces and al fresco areas. It was envisioned that this development must be designed in such a way and in order to allow an uninterrupted garden space. This handed the landscape architect an opportunity to provide an example of a landscape marrying the architecture of the buildings, creating a development that promotes an interplay between built and unbuilt areas. Today, it continues to create a healthy urban environment by reducing urban heat island effect that comes from large paved areas in the metro and to serve as a carbon sink within the polluted city.\n\nBuilt around a retail complex, the landscape in Greenbelt was designed not just to complement the complex but also to provide an effortless interaction with its users through a play in varying viewing areas such as terraces and al fresco areas. The Greenbelt is one of today's considered landmarks in Makati with its mix of high-end shops and restaurants, accompanied by different gardens that serve as an oasis in the Metro.\n\nAhead of its redevelopment, there were already existing gardens with tall aged trees already surrounding the chapel and the original layout plan of the structures was an \"L\" shaped mall buildings which overlaps the trees existing in the area. The planning team decided that the new development should be designed in such a way that the buildings were situated by the side of the perimeter roads in order to allow an uninterrupted garden space. With the preceding blockings of the buildings and its levels in the complex, which obviously encloses the garden, a play in visual effect and angles was employed to provide a garden that can be viewed in varying levels. This served as an opportunity to the landscape architect to provide the users playful views of the garden and marry the landscape with the architecture of the buildings, thus, creating a development that promotes an interplay between the landscape and built areas.\n\nGreenbelt Park is a development that creates a healthy urban environment by reducing urban heat island effect that comes from large paved areas in the metropolitan area. This also acts as a carbon sink within the polluted city. The park helps in the stormwater collection of the city through the extensive use of unpaved grounds, trees, and shrubs in the development; use of such materials is a far more efficient and less expensive way of managing storm water than using complex engineered drainage systems. The water feature creates a calming and invigorating environment because it functions as a noise backdrop. The park also protects the natural ecosystem by providing habitat for different animals displaced by the urban sprawl. This development creates a balance between built and natural systems through the playful and strategic use of softscape and hardscape elements."
  },
  {
    id: 2,
    title: "Henann Resort Alona Beach",
    category: "Hotels & Resorts",
    location: "Panglao, Bohol",
    image: "https://pix8.agoda.net/hotelImages/789/789537/789537_16020816140039719868.jpg?ca=6&ce=1&s=1024x",
    builtEnvironmentType: "Hospitality Development",
    description: "Henann Resort Alona Beach sits on a 6.5-hectare property along the pristine shores of Panglao, Bohol, envisioned not just as a luxury destination but as a model of responsible coastal development. The design emphasizes environmental stewardship by integrating tropical-inspired architecture, the use of native and endemic planting materials, and site-sensitive planning strategies that preserve natural landforms and minimize ecological disturbance.\n\nCentral to the resort's concept is the protection of existing coconut groves, which were carefully retained and integrated into the master plan. These trees create natural shade that reduces heat gain on paved areas, improves outdoor comfort, and lowers energy demand for cooling. By designing pools and open green islands around the preserved vegetation, the resort strengthens biodiversity habitats while providing refreshing recreational spaces for guests.\n\nWater management also plays a vital role in sustainability. Rainwater harvesting systems supply irrigation and landscape maintenance needs, significantly reducing dependence on potable water. Thoughtfully planned circulation routes such as ramps, steps, and elevated walkways follow the site's natural contours, limiting cut-and-fill interventions and ensuring accessibility while maintaining the character of the terrain.\n\nNative planting schemes enrich outdoor lounges with low-maintenance greenery adapted to the coastal climate, requiring less water and chemical input. Lighting strategies were designed to highlight the beachscape without excessive glare or energy waste, creating a safe and scenic ambiance that respects the natural rhythms of the coastal ecosystem.\n\nBy harmonizing modern hospitality with ecological responsibility, Henann Resort offers guests an immersive coastal experience that not only elevates comfort and leisure but also underscores the importance of preserving Panglao's natural heritage for future generations."
  },
  {
    id: 3,
    title: "Manila Ocean Park",
    category: "Parks",
    location: "Manila, Philippines",
    image: "https://www.shoreexcursions.asia/wp-content/uploads/2017/06/Manila-Ocean-Park-2.jpg"
  },
  {
    id: 4,
    title: "Shore Residences",
    category: "Residential",
    location: "Pasay City",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/425103504.jpg?k=eb70e491633f51681e5f4cd2e4e7fb1f655953a4fb137ff138ead49e03f51bbe&o=",
    builtEnvironmentType: "Residential Condominium",
    description: "Shore Residences, one of the three residential developments in the SMDC Shore Complex, serves as an introduction to the luxurious set of buildings where the podium-type landscape design lies and awaits. With its tropical design inspired by world-class beachfront hideaways in the world, Shore offers a resort-type lifestyle in the city to its users, making it live up to its name. Its landscape design takes you on a getaway without leaving your home through its atmosphere and ambiance that may be compared to those of someone's dream vacation spots. Through its organic form, the landscape creates an experience for the user while strolling along the different features of the amenity area - starting with its swimming pools, slides, decks, and play areas to its pavilions and sport facilities.\n\nShore Residences is strategically situated near the Pasay Business district, as well as main roads such as EDSA and Roxas Boulevard. It is also only a few blocks away from Manila Bay, which created the concept behind the name \"Shore\".\n\nLiving up to its name, it exhibits a resort-style landscape design inspired by world-class beachfront developments. Other than the swimming pools and lap pools that surround the inner perimeter of the buildings, there are two wide pools with \"beach-approach\" type of seamless access to the pool. Rock formations are used as centerpieces where the slides and shower are located; and pavilions are also well distributed in the landscape amenity.\n\nTo promote other outdoor activities, a mini-football field and a half basketball court are placed on one side of the development, and a multi-purpose open lawn on another side. Children also have access and enjoyable experience on the provided playgrounds.\n\nHardscape and softscape materials used in Shore Residences also imitate the beaches with a fair amount of palms, sand finishes and other tropical landscape elements."
  },
  {
    id: 5,
    title: "The Podium",
    category: "Commercial",
    location: "Ortigas Center, Mandaluyong City",
    image: thePodiumImg,
    builtEnvironmentType: "Commercial Building / Mixed-use Development",
    description: "The Podium complex is a mixed-use gem in the heart of Ortigas. Together with the BDO Tower, SM Keppel Tower was able to fuse both commercial efficiency and environmental soundness. The mixed-use development will be catering to new retail establishments and office space lessees.\n\nWith urban heat islands manifesting even more in recent years, different strategies are studied to help mitigate the effect. Sworn to create a more sustainable and more humane space for the people, SM Keppel have imposed a number of strategies to aid in the matter. Green walls, which help in creating cooler air, are installed in a number of walls. The green wall, after installation, will be the largest of its kind in the Philippines.\n\nTo maintain its certification of LEED Gold Mark and BCA Green Mark Gold Award, the green wall was mixed with usage of high-albedo materials. The materials chosen for the roof garden will be reflecting more sun rays, deflecting heat instead of trapping them in the building. This helps in the lessening of the need for air conditioning systems, allowing natural air to ventilate the building. The green wall built with a netting system allows for adaptation to typhoons and inclement weather. The green wall is integrated with a fully-automated drip irrigation system to keep the plants healthy and avoid wastage of water. Joined with the irrigation system is a fertigation system that manages even and convenient spreading of fertilizers throughout the green wall.\n\nThe design mostly provided seating areas for employees who needed a break from their computers. It provides breathing space from the bust of the city, as well as a complex that employs different strategies to make the Metro Manila environment more livable and alive."
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
    description: "Villa de Mercedes is a result of developing high-end subdivision with its mission and commitment to provide a meticulously planned community towards a lifestyle-changing neighborhood and a display of a responsible stewardship of the land. Conservation was mainly followed in the course of the development by preserving existing trees within and around the waterways to encourage wildlife to stay and allow different flora to flourish. Varying center islands in roads are also highlighted not just to add more green space but also to stimulate a feeling of being one with nature for the residents. Introduction of a pond and rain gardens is an expensive, low maintenance, and environmentally sound solution for managing stormwater runoff as it presents positive benefits like pollution control, flood prevention, habitat creation and water conservation. These green strategies applied are fundamental to keep its seamless connection to the environment. Neighborhood's welfare was also considered by providing resort-like facilities such as pools, beach volleyball area, hiking trails, and an infinity pool overviewing the majestic Davao Gulf and the city proper.\n\nThe project site is located at the foothills of Mount Apo with panoramic views of the mountain, the majestic Davao Gulf and the city proper. This is a result of developing a high-end planned subdivision with its mission and commitment to provide lifestyle-enhancing communities.\n\nDeveloped to establish a resort-like environment in the foothills which is about 535 feet above sea level, its main feature is a 700 sqm swimming pool surrounded by a beach volleyball space, a large grass lawn space, a clubhouse, gym and coffee shops. Existing trees within and around the waterways were remained untouched and preserved to encourage wildlife to stay and allow different flora species to flourish. This preservation of the existing vegetation provides a sanctuary particularly to the birds and insects in the area. This approach seamlessly connects the developed area to nature; hiking trails were also introduced for residents to explore, appreciate and interact with nature.\n\nA spacious entry statement announces the arrival to this beautiful garden-estate characterized with Date Palms in grid pattern, architectural icon landmarked on both sides of the entry and meandering 2 to 6 meters wide traffic islands instead of the usual 2 meters. Other design strategies adopted were detention ponds and rain gardens not just to drain water but also to accenture the water facility and open spaces. The area was enhanced through the introduction of a pond and rain garden that serve as a natural water retention facility. This facility is inexpensive, low maintenance, and environmentally sound evaporation and natural biological processes. In addition to this, rain gardens also offer benefits like pollution control, flooding prevention, habitat creation and water conservation. The water retention facility also serves as an added amenity to the adjacent pool and clubhouse area.\n\nBy understanding the primary concerns and requirements of the site and clients, the landscape architect was able to arrive to this kind of space design and exceeded the client's expectations towards a meticulously planned community and a display of a responsible stewardship of the land."
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
    description: "The landscape of Aureo Hotel & Resort is designed not just as a backdrop, but as the heart of the guest experience. Each room opens directly to the pool, inviting guests into an environment where water, greenery, and architecture exist in harmony. What could have been a typical resort amenity is instead transformed into a living landscape that merges leisure with ecological care.\n\nLarge planting areas are carefully integrated into the pool itself, creating lush green islands that soften hard edges and bring nature within arm's reach. These gardens provide shade, cool the air, and frame every view with vibrant life, turning a simple swim into a restorative encounter with the landscape. By integrating vegetation into the aquatic system, the design achieves both form and function: providing natural cooling, reducing glare, and creating a more comfortable microclimate for guests throughout the day.\n\nEvery detail was shaped through collaboration with hotel operators, maintenance staff, and the local community. Their insights ensured that the design would be practical to care for, culturally grounded, and aligned with the values of its setting. This process of engagement strengthened the project's integrity, making it not just a resort landscape but a shared achievement.\n\nThe result is a place of leisure that also serves as a model of ecological responsibility. It demonstrates how luxury and sustainability can co-exist, and how a hospitality project can inspire deeper appreciation for nature while enhancing guest comfort. Aureo Hotel & Resort's landscape shows that the most memorable destinations are those that are not only beautiful, but also meaningful, resilient, and deeply connected to their environment."
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
    description: "Harmony between architecture and landscape architecture is the primary goal exhibited in the design of Zuellig Building and its landscape. Outstanding selection of patterns and local materials is a commitment towards environmental responsibility and global competitiveness.\n\nSituated in a prime location in Makati's Central Business District along the intersection of Makati Avenue and Paseo de Roxas, Zuellig Building boasts a state-of-the-art infrastructure among other skyscrapers in the area. This bids the landscape both a challenge and an opportunity to showcase a successful marriage between architecture and landscape architecture. With its world-class facade, the landscape matches and creates a complementing design which is particularly shown on the material and plant selections. The design seeks to serve the end-users a prime-grade workplace atmosphere infused with the same spirit of that of the building. Being developed by both foreign teams and their local counterparts, the idea of using local materials (both hardscape and softscape) would be best represented through and only through a clear collaboration, analysis, and innovation.\n\nGiven a generous amount of space dedicated only for the landscape development (outdoor garden and spaces, 3rd level deck, 38th level skydeck), bold yet elegant pattern was delivered to achieve simplicity and efficiency. This movement aims to uplift contemporary design in the country in order to achieve a world-class product.\n\nIn line with the office establishment theme, a modern touch in landscape design was identified through a sculptural planting scheme and arrangement; this is to match the highly urban and corporate aura of the development. A well-selected color scheme of grays and blacks in the landscape also strengthens the formal theme of the project. Specifying locally sourced materials was considered as one of the major defining characteristics of this development to instill and promote a concrete Filipino identity in the design.\n\nThis particular development supports the idea of promoting a positive lifestyle and development in line with different sustainable design strategies. In consideration with the expected users of the landscape, one of its objectives is to create a healthy urban environment in contrast with its location - a busy metropolis. Green corridors reduce the amount of pollutants and cool the air temperature. The use of calm colors in the plant masses provides visual impact and creates a tranquil environment. This strategy strongly benefits the health of the users by helping reduce stress and stimulate a sense of well-being. The use of low-impact materials was also employed to minimize waste and environmental pollution. Having been certified a green infrastructure, it aims to establish a model that displays an environment-friendly development deliberated in the environmental conservation and promotion of good welfare for the users.\n\nThe result has been enthusiastically well-received by the end-users, visitors and worldwide organizations. One example is that in 2013, the whole development was granted a Platinum Certification under the LEED program of the US Green Building Council in its attempt to promote sustainable and environment friendly development. Such accomplishment makes this project an excellent model in showcasing successful harmony between buildings and landscapes while using materials locally available in the Philippine market."
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
    image: "https://images.unsplash.com/photo-1676089775615-cceedcdf96e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWFjaCUyMHJlc29ydCUyMHBvb2wlMjBib3JhY2F5fGVufDF8fHx8MTc2OTU2MDk1Mnww&ixlib=rb-4.1.0&q=80&w=1080",

    builtEnvironmentType: "Resort",
    description: "Henann Prime is one of the world class resorts in Boracay. As the third development of the Henann Group of Resorts, Henann Prime is the first beachfront resort in Station 1 with a total of 154 rooms from the expansion. Henann resorts are known for their signature style and relaxing coastal designs. Designed to be elegantly minimalist, it has attracted many locals and tourists. Compared to its sister resorts, Henann Regency Boracay and Henann Resort Alona Beach, Henann Prime is smaller which makes the place more private and intimate. Despite being smaller than the other Henann resorts, Henann Prime took the opportunity to be different. From the signature poolside rooms, the pools, and the breathtaking beachfront, Henann Prime offers simple but luxurious amenities that will surely give the visitors a one of a kind experience.\n\nHenann Prime is located at Station 1 where it is known to have one of the most well-kept beaches and the most secluded part of Boracay Island. As the Henann Group of Resorts' first beachfront resort, Henann Prime utilized the breathtaking beachfront with its crystal blue waters and soft white sands by providing an eye-catching and stylish blue-green beach bed with the white umbrellas. This allows not only the inner part of the resort but the beachfront look high-end as well.\n\nSimilar to other Henann resorts, the main highlight of the Henann Prime are the luxury pools that are designed to be simple yet elegant. The design process of these luxury pools are meant to be elegantly minimalist since the intentions of the clients together with the landscape designer was to create pools that are simple enough that it won't interfere with the beach. To take advantage of the opportunity to be different from the other Henann resorts, Henann Regency Boracay and Henann Resorts Alona Beach, it made use of its intimate size to design two swimming pools on the West Wing and the East Wing of the resort.\n\nSince the area of the real estate is limited, the landscape design is focused on the swimming pools. The swimming pools of the West Wing are creatively designed to serve as private pools for the rooms on the ground floor. In accordance with the client's request, since the West Wing is located closer to the beachfront, the West Wing pools were designed to be intimate that would give the visitors privacy. In addition to the design, the private pools show Bas Reliefs, other wall features and water cascades. These remarkable features shown in the private pools make Henann Resort different from Henann Regency Boracay and Henann Alona Beach. Compared to the West Wing, the area of the East Wing allows more space for a narrow pool that is located in the middle of the two buildings that have direct access to the swimming pool on the ground floor. This narrow pool is divided by an island where there are sunken seats, a wooden deck and sunbeds that serve as the main features of the East Wing Pool."
  }
];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  
  const categories = ['All', 'Residential', 'Commercial', 'Hotels & Resorts', 'Parks'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <>
      <section id="projects" className="py-24 px-4 md:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl mb-4">Featured Projects</h2>
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