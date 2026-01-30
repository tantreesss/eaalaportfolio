import { Award, Trophy } from 'lucide-react';

const awards = [
  {
    year: "2025",
    title: "GantimPALA Excellence Award",
    category: "Retail Landscape Category",
    project: "Tambuli Seaside Resort, Maribago, Lapu-Lapu City, Cebu",
    organization: "Philippine Association of Landscape Architects",
    description: "The first fully residential resort in Maribago—an 11-hectare modern tropical paradise that integrates landscape and architecture while preserving nearly all existing trees on site."
  },
  {
    year: "2025",
    title: "GantimPALA Merit Award",
    category: "Resort Landscape Category",
    project: "Henann Resort Alona Beach, Panglao, Bohol",
    organization: "Philippine Association of Landscape Architects",
    description: "A world-class luxury retreat that blends tropical design and sustainability, featuring pool islands built around existing coconut trees to preserve the island's natural beauty."
  },
  {
    year: "2025",
    title: "GantimPALA Merit Award",
    category: "Resort Landscape Category",
    project: "Henann Crystal Sands Resort, Station 1, Boracay",
    organization: "Philippine Association of Landscape Architects",
    description: "Offers an intimate, immersive experience through a simple yet functional landscape design that enhances the island's natural beauty and elevates the overall guest experience."
  },
  {
    year: "2021",
    title: "Highly Commended Landscape Architectural Design",
    category: "PropertyGuru Philippines Property Awards",
    project: "Vine Residences, Quezon City",
    client: "SM Development Corporation",
    organization: "PropertyGuru Philippines"
  },
  {
    year: "2020",
    title: "Best Landscape Architectural Design",
    category: "Property Guru Philippines Property Awards",
    project: "Sail Residences, Pasay City",
    organization: "PropertyGuru Philippines"
  },
  {
    year: "2019",
    title: "Best Condo Landscape Architectural Design",
    category: "PropertyGuru Philippines Property Awards",
    project: "Shore 1 Residences, Pasay City",
    client: "SM Development Corporation",
    organization: "PropertyGuru Philippines"
  },
  {
    year: "2018",
    title: "Best Landscape Architectural Design",
    category: "Philippines Property Awards",
    project: "The Podium, Ortigas Center, Mandaluyong City",
    client: "SM Keppel Land",
    organization: "PropertyGuru Philippines"
  },
  {
    year: "2017",
    title: "GantimPALA Excellence Award",
    category: "Retail Landscape Category",
    project: "Greenbelt 3 Park, Ayala Center, Makati",
    organization: "Philippine Association of Landscape Architects",
    description: "EAALA won the most number of awards in the 2017 GantimPALA contest—the first award-giving body spearheaded by PALA to recognize works of Filipino Landscape Architects."
  },
  {
    year: "2017",
    title: "GantimPALA Merit Award",
    category: "Community Landscape Category",
    project: "Villa De Mercedes, Toril, Davao City",
    organization: "Philippine Association of Landscape Architects"
  },
  {
    year: "2017",
    title: "GantimPALA Merit Award",
    category: "Private Residential Category",
    project: "Wack-Wack Subdivision Residence, Mandaluyong City",
    organization: "Philippine Association of Landscape Architects"
  },
  {
    year: "2016",
    title: "Highly Recommended Best Landscape Architectural Design",
    category: "Philippine Property Awards",
    project: "SM Seaside City Cebu, Cebu City",
    client: "SM Prime Holdings Inc",
    organization: "PropertyGuru Philippines"
  },
  {
    year: "2016",
    title: "Highly Commended Residential Landscape",
    category: "Asia Pacific Development Awards",
    project: "SM Jazz Condominium, Makati City",
    organization: "Asia Pacific Property Awards"
  },
  {
    year: "2016",
    title: "Best Landscape Architectural Design",
    category: "Philippines Property Awards",
    project: "The Podium, Ortigas Center, Mandaluyong City",
    organization: "PropertyGuru Philippines"
  }
];

const hotelAwards = [
  {
    year: "2023",
    title: "Best Value Experience in Asia, Africa, Middle East & Oceania",
    project: "Fairways and Bluewater, Boracay",
    organization: "Condé Nast Johansens"
  },
  {
    year: "2022",
    title: "Best for Green Practices & Sustainability - Finalist",
    project: "Fairways and Bluewater, Boracay",
    organization: "Condé Nast Johansens"
  },
  {
    year: "2017",
    title: "Luxury Ocean View Resort - Country Winner",
    project: "Henann Prime Beach Resort",
    organization: "World Luxury Hotel Awards"
  },
  {
    year: "2017",
    title: "Luxury Coastal Resort - Regional Winner",
    project: "Henann Prime Beach Resort",
    organization: "World Luxury Hotel Awards"
  },
  {
    year: "2016",
    title: "Luxury Coastal Resort - Country Winner",
    project: "Henann Lagoon Resort",
    organization: "World Luxury Hotel Awards"
  },
  {
    year: "2016-2018",
    title: "Multiple Luxury Hotel Awards",
    project: "Henann Resort Alona Beach",
    organization: "World Luxury Hotel Awards"
  }
];

export function Awards() {
  return (
    <section id="awards" className="py-24 px-4 md:px-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Awards & Recognition</h2>
          <div className="w-24 h-px bg-black mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            EAALA's commitment to excellence has been recognized with numerous prestigious awards across landscape architecture and hospitality design.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8" />
            <h3 className="text-3xl">Landscape Architecture Awards</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm px-3 py-1 bg-black text-white">{award.year}</span>
                  <Award className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">Award</p>
                <h4 className="text-xl mb-3">{award.title}</h4>
                <p className="text-sm font-medium text-gray-500 mb-1">Project</p>
                <p className="text-gray-700 mb-3">{award.project}</p>
                <p className="text-sm font-medium text-gray-500 mb-1">Category</p>
                <p className="text-gray-600 mb-3">{award.category}</p>
                <p className="text-sm font-medium text-gray-500 mb-1">Awarding Body</p>
                <p className="text-sm text-gray-500 mb-2">{award.organization}</p>
                {award.description && <p className="text-sm text-gray-500 mt-2">{award.description}</p>}
                {award.client && <p className="text-sm text-gray-500 mt-2">Client: {award.client}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8" />
            <h3 className="text-3xl">Hospitality & Resort Awards</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelAwards.map((award, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm px-3 py-1 bg-black text-white">{award.year}</span>
                  <Award className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-sm font-medium text-gray-500 mb-1">Award</p>
                <h4 className="text-lg mb-3">{award.title}</h4>
                <p className="text-sm font-medium text-gray-500 mb-1">Project</p>
                <p className="text-gray-700 mb-3">{award.project}</p>
                <p className="text-sm font-medium text-gray-500 mb-1">Awarding Body</p>
                <p className="text-sm text-gray-500">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Award</div>
              <div className="text-gray-600 uppercase tracking-wide">Winning</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Consistent</div>
              <div className="text-gray-600 uppercase tracking-wide">Quality</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Reliable</div>
              <div className="text-gray-600 uppercase tracking-wide">Service</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Experienced</div>
              <div className="text-gray-600 uppercase tracking-wide">Team</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Innovative</div>
              <div className="text-gray-600 uppercase tracking-wide">Design</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-2">Creative</div>
              <div className="text-gray-600 uppercase tracking-wide">Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}