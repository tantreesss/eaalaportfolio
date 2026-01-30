import { FileText, Pencil, Ruler, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Pre-Feasibility Studies",
    },
  {
    icon: Pencil,
    title: "Master Planning",
    },
  {
    icon: Ruler,
    title: "Detail Design",
    },
  {
    icon: ClipboardCheck,
    title: "Contract Administration",
    }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Services</h2>
          <div className="w-24 h-px bg-black mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl">
            EAALA offers a full range of services from pre-feasibility studies through master planning, detail design, and contract administration services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="mb-6">
                  <Icon className="w-12 h-12 stroke-1" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}