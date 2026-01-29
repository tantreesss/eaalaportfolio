import { TreePine, Building2, Sprout, Pencil, Users, Leaf, FileText, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: Pencil,
    title: "Master Planning",
    description: "Comprehensive master planning services for large-scale developments, ensuring cohesive and sustainable growth across residential, commercial, and mixed-use projects."
  },
  {
    icon: Building2,
    title: "Hotels, Clubs and Resorts",
    description: "Award-winning landscape designs for hospitality projects, creating memorable outdoor experiences that enhance guest satisfaction and property value."
  },
  {
    icon: TreePine,
    title: "Private Residential Housing",
    description: "Custom landscape designs for private estates, residential towers, and subdivisions that reflect lifestyle aspirations and enhance living environments."
  },
  {
    icon: Users,
    title: "Public Parks and Recreation",
    description: "Innovative designs for public parks, plazas, and recreation facilities that foster community connection and improve urban environments."
  },
  {
    icon: Leaf,
    title: "Commercial Developments",
    description: "Comprehensive landscape solutions for office parks, retail centers, and mixed-use developments that create lasting impressions and improve property performance."
  },
  {
    icon: Building2,
    title: "Civic and Public Buildings",
    description: "Professional landscape design for institutional and government facilities, creating dignified and functional outdoor spaces."
  },
  {
    icon: FileText,
    title: "Pre-Feasibility Studies",
    description: "Thorough site analysis and feasibility assessments to ensure project viability and optimal design solutions from the earliest stages."
  },
  {
    icon: ClipboardCheck,
    title: "Contract Administration",
    description: "Complete project oversight and contract administration services to ensure design intent is maintained throughout construction and implementation."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Services</h2>
          <div className="w-24 h-px bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="mb-6">
                  <Icon className="w-12 h-12 stroke-1" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}