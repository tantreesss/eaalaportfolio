import { ImageWithFallback } from './figma/ImageWithFallback';
import orgChart from '../assets/org-chart.jpg';

const teamMembers = [
  {
    name: "L.Ar. Efren Aurelio",
    position: "President / Chief Designer",
    description: "Philippine Landscape Architecture Icon with over 25 years of international experience across Asia.",
    isLeader: true
  },
  {
    name: "Joey P. Velasquez Jr.",
    position: "Consultant",
    department: "Senior Advisory"
  },
  {
    name: "Noemi Pye Divera",
    position: "Consultant/Designer",
    department: "Design Team"
  },
  {
    name: "Sherwin Layosa",
    position: "IT Support/IT Helpdesk",
    department: "Technical Support"
  },
  {
    name: "L. Arch. Donin Valdeña",
    position: "Senior Architect",
    department: "Architecture"
  },
  {
    name: "Bruce John Francisco",
    position: "Senior Technical Officer",
    department: "Technical"
  },
  {
    name: "Ramoncita Aurelio",
    position: "Senior Associate",
    department: "Management"
  },
  {
    name: "Roxanne Resurreccion",
    position: "Managing Partner",
    department: "Management"
  },
  {
    name: "Melvin Boongcayao",
    position: "Liaison Officer",
    department: "Operations"
  },
  {
    name: "Jomar Roxas",
    position: "Senior Landscape Designer",
    department: "Design"
  },
  {
    name: "Dann Dexter Corpuz",
    position: "Landscape Architect",
    department: "Design"
  },
  {
    name: "Danilo Rosaya Jr.",
    position: "Landscape Designer",
    department: "Design"
  },
  {
    name: "Ma. Cristina Balactas",
    position: "Landscape Architect",
    department: "Design"
  },
  {
    name: "Jeanne Clarisse Obaña",
    position: "Landscape Designer",
    department: "Design"
  },
  {
    name: "Martin Albarillo",
    position: "Landscape Designer",
    department: "Design"
  }
];

export function Team() {
  const leader = teamMembers.find(member => member.isLeader);
  const otherMembers = teamMembers.filter(member => !member.isLeader);

  return (
    <section id="team" className="py-24 px-4 md:px-8 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Meet Our Team</h2>
          <div className="w-24 h-px bg-black mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our diverse team of landscape architects, designers, and consultants brings together decades of combined experience 
            to create exceptional outdoor spaces across the Philippines and Asia.
          </p>
        </div>

        {/* Organizational Chart */}
        <div className="mb-16">
          <h3 className="text-3xl mb-8">Organizational Structure</h3>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ImageWithFallback 
              src={orgChart}
              alt="EAALA Organizational Chart" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Leadership */}
        {leader && (
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h3 className="text-3xl mb-8">Leadership</h3>
            <div className="bg-gray-50 p-8 md:p-12">
              <div className="max-w-3xl">
                <h4 className="text-4xl mb-2">{leader.name}</h4>
                <p className="text-xl text-gray-600 mb-4">{leader.position}</p>
                <p className="text-gray-700 leading-relaxed">
                  {leader.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Team Members */}
        <div>
          <h3 className="text-3xl mb-8">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMembers.map((member, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:border-black transition-colors">
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                  {member.department}
                </div>
                <h4 className="text-xl mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="bg-black text-white p-12 text-center">
            <h3 className="text-3xl mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented landscape architects and designers who are passionate about creating 
              exceptional outdoor spaces. If you're interested in joining our team, we'd love to hear from you.
            </p>
            <a 
              href="mailto:eaureliodocumenti@gmail.com?subject=Career Inquiry"
              className="inline-block px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}