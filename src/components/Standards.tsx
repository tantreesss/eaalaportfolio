import { FileText, CheckCircle, Settings, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const workflowStages = [
  {
    title: "Initial Engagement",
    description: "EAALA will receive a request for proposal via email from a client. The Firm shall submit a quotation/fee based on standard computation from PALA. Once professional fee and deliverables are agreed upon, signing of contract or terms of reference will be in place."
  },
  {
    title: "Schematic / Conceptual Stage",
    items: [
      "Client schedules a brief meeting for orientation of the project",
      "Principal LA (Sir Efren) shall do a manual/freehand design for the concept",
      "Principal LA or client shall give a general concept for the project, and an assigned person shall elaborate it",
      "Freehand Drawings shall be polished in Manual Drawings (Pre-pandemic), or Photoshop",
      "3Ds & Perspectives are also prepared",
      "Consolidate the drawings, concept boards/mood boards (usually already in PowerPoint) in one presentation",
      "EAALA shall present in design meetings until approval or no additional comments from clients"
    ]
  },
  {
    title: "Design Development Stage",
    items: [
      "Once approved, Project in Charge will proceed to polish drawings in CAD form for blueprinting",
      "Plans, Section & Elevation, Details will be laid out usually in a 20x30in. size of paper",
      "Drawings are sent to Senior LA – Sir Joey Velasquez for double checking (misspelled labels, missing lamp post, wrong spacing, standard sizes, etc.)",
      "Regular coordination meetings with client's other consultants (MEPFs, ID, Structural Engineer & Marketing) to align plans",
      "Upon finalizing DD plans, Client requests for Bid Plans which will be given to contractors",
      "Bid Plans should generally be final, with corrections released via Bid Bulletin if needed",
      "Once client awards a bidding contractor, proceed with preparing For Construction Drawings"
    ]
  },
  {
    title: "Construction Drawings Stage",
    items: [
      "Plans stamped as For Construction Drawings – Bid Plans with corrections already applied",
      "Send revised Bid Plans to Sir Joey for final checking",
      "Once finalized, release FCD Blueprints signed & sealed to client, awarded contractor, and construction/project manager"
    ]
  },
  {
    title: "Construction Supervision",
    items: [
      "Pre-meeting before start of construction to verify or align any queries",
      "During construction: handle Request for Information (RFI) and Request for Approval (RFA)",
      "For major revisions/lapses/conflicts, release Construction Bulletins",
      "Regular site management meetings, or visits at 50% & 90% construction completion",
      "80-90% is ideal for punch listing or documentation before turn-over/opening"
    ]
  }
];

const cadLineweights = [
  { number: "0.5", color: "BLUE", use: "SLAB, CUTTING LINE, BLOW-UP BOX" },
  { number: "0.4", color: "CYAN", use: "FOCAL POINTS" },
  { number: "0.3", color: "GREEN", use: "SOFTSCAPES" },
  { number: "0.2", color: "YELLOW", use: "PLANTER BOX, HARDSCAPES, PAVED AREAS" },
  { number: "0.15", color: "WHITE", use: "" },
  { number: "0.15", color: "MAGENTA", use: "" },
  { number: "0.10", color: "RED", use: "" },
  { number: "0.08", color: "GRAY", use: "HATCH" },
  { number: "0.05", color: "ETC.", use: "" }
];

const soilDepth = [
  { plantType: "LAWN/GROUND COVER", onSlab: "300mm", onGrade: "100mm" },
  { plantType: "SHRUB", onSlab: "600mm", onGrade: "300mm" },
  { plantType: "TREE/PALM", onSlab: "1200mm", onGrade: "1200mm" }
];

const plantingNotes = [
  "PLANT QUANTITIES ARE NOT GUARANTEED AND ARE FOR THE CONVENIENCE OF THE CONTRACTOR ONLY. (ALL PLANTING AREAS ARE TO BE COMPLETELY PLANTED TO FULFILL THE INTENTS OF THE PLANS.)",
  "THE CONTRACTOR SHALL ADJUST TREE & SHRUB PLANTING TO AVOID INTERFERENCE WITH LIGHTING FIXTURES AND UNDERGROUND LINES. CONTRACTOR SHALL VERIFY THE SIZE OF THE ACTUAL QUANTITIES OF PLANTS TO FULFILL DESIGN INTENTS.",
  "SIZES CALLED OUT IN THE PLANS AND PLANT LIST SHALL BE CONSIDERED TO BE THE MINIMUM ACCEPTABLE SIZE.",
  "ALL PLANTS TO BE USED SHALL BE VIGOROUS OF NORMAL GROWTH, FREE OF DISEASE, INSECT EGGS & LARVAE, FULLY HEALTHY, AND WELL-DEVELOPED ROOT SYSTEM.",
  "ALL LEVELS SHALL BE VERIFIED ON ACTUAL LOCATION."
];

const lightingNotes = [
  "ALIGNED BOLLARD LIGHTS ARE SPACED AT APPROXIMATELY 5 METERS ON CENTER.",
  "ALL WIRING AND WATTAGE TO ELECTRICAL ENGR.'S DETAILS AND SPECIFICATIONS.",
  "LIGHTING LAYOUT AND FIXTURES TO ELECTRICAL ENGR.'S DETAIL AND SPECIFICATIONS.",
  "UNDERWATER LIGHTS SHOULD BE U.S. OR EUROPEAN BRANDS E.G. BEGA, HAYWARD, & PENTAR.",
  "FOR SPECIAL CONFIGURATION, PLEASE CHECK WITH THE MANUFACTURER.",
  "SUBMIT SAMPLES/SPECS. FOR ALL SPECIFIED LIGHTING FIXTURES TO LANDSCAPE ARCHITECT'S APPROVAL.",
  "SHOULD THERE BE A NEED TO SUBSTITUTE LIGHTING FIXTURES, EQUIVALENT OR ALTERNATIVE SAMPLES MUST BE APPROVED BY THE LANDSCAPE ARCHITECT."
];

const waterDrainage = [
  { code: "WP (WATERPOINT)", radius: "15M RADIUS" },
  { code: "PD (PLANTER DRAIN)", radius: "8-10M RADIUS" },
  { code: "FD (FLOOR DRAIN)", radius: "8-10M RADIUS" },
  { code: "AD (AREA DRAIN)", radius: "8-10M RADIUS" }
];

const poolSpecs = [
  "Water Turn-over rate is Six (6) hours",
  "Structural integrity should be a minimum of Twenty (20) years",
  "Water filtration shall be by a pressure DIATOMACEOUS EARTH (D.E.) filter",
  "The Swimming pool should be filled with comfortably warm, sparkling, clear water free from bacteria and other micro-organisms, and have the correct chemical balance",
  "Water clarity should be as per the swimming pool standard",
  "It must have a support system that filters and circulates the water to achieve the warmth and clarity expected",
  "The support system, as it circulates the water, evenly distributes the chemicals that will and controls the purity and chemical balance",
  "Water chlorination could be either LIQUID CHLORINE (Sodium Hypochlorite) or DRY CHLORINE (Calcium Hypochlorite and chlorinated Isocyanurates)",
  "Acidity, alkalinity, and the amount of mineral salts in the water must be kept in balance to prevent corrosion of metal parts, scale deposit's and etching of plaster surfaces",
  "Waterproofing warranty should be at least 10 to 15 years lifetime, use cement-based type",
  "All piping materials to be used should be corrosion-resistant, certain types of steel, bronze, plastic, or other non-ferrous materials as approved",
  "All accessories should be based on safety standards; no sharp metals or parts are to be exposed",
  "Manual system of lighting with an auto-light-off sensor gadget",
  "Provide ground fault circuit interrupter (GFCI)"
];

const referenceLinks = [
  {
    category: "Design Standards",
    links: [
      { name: "SMDC Standards", url: "https://drive.google.com/drive/folders/1jyK_zIe0cNmWKJD5CzaDELQ_VzIFwW1S?usp=sharing" },
      { name: "AYALA Standards", url: "https://drive.google.com/drive/folders/1wVHl7egZ4Ww3Lo2cbYVtRPfx69iXIvch?usp=sharing" },
      { name: "Planting Design Guide", url: "https://drive.google.com/file/d/1TUegT03UYc8iFf9B7sTcVzlXbKaTcgWi/view" },
      { name: "Landscape Standards", url: "https://drive.google.com/file/d/19ZzUG9LWwYQnht9_fzmp35MBeVWBqtYu/view?usp=sharing" }
    ]
  },
  {
    category: "Materials and Suppliers",
    links: [
      { name: "Materials Reference", url: "https://drive.google.com/drive/folders/1zlk8srZX9y9j5V0N5UbWR_dJ8Ijru__v?usp=sharing" },
      { name: "Materials Contacts/Database", url: "https://docs.google.com/spreadsheets/d/1kol1snvht_MpUicqyConA5d3n7tKo3W8fhhnSFqu3g4/edit?usp=sharing" },
      { name: "List of Contractors and Suppliers", url: "https://docs.google.com/spreadsheets/d/1o2q9JNQSh12H4hC2UnN9GT1XBmmKw0rk4wHex_sNmNc/edit?usp=sharing" }
    ]
  }
];

export function Standards() {
  const [activeTab, setActiveTab] = useState<'workflow' | 'standards' | 'references'>('workflow');

  return (
    <section id="standards" className="py-24 px-4 md:px-8 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">EAALA Standards</h2>
          <div className="w-24 h-px bg-black mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl">
            Our comprehensive standards and workflow ensure consistent quality and excellence across all projects.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-12 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`pb-4 px-4 transition-colors ${
              activeTab === 'workflow'
                ? 'border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              <span>General Workflow</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('standards')}
            className={`pb-4 px-4 transition-colors ${
              activeTab === 'standards'
                ? 'border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              <span>Technical Standards</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('references')}
            className={`pb-4 px-4 transition-colors ${
              activeTab === 'references'
                ? 'border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              <span>References</span>
            </div>
          </button>
        </div>

        {/* Workflow Tab */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            {workflowStages.map((stage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  {stage.title}
                </h3>
                {stage.description && (
                  <p className="text-gray-700 mb-4">{stage.description}</p>
                )}
                {stage.items && (
                  <ul className="space-y-2">
                    {stage.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <span className="text-black mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Standards Tab */}
        {activeTab === 'standards' && (
          <div className="space-y-12">
            {/* CAD Lineweights */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">CAD Lineweights</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">NUMBER</th>
                      <th className="text-left py-3 px-4">COLOR</th>
                      <th className="text-left py-3 px-4">USE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cadLineweights.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-3 px-4">{item.number}</td>
                        <td className="py-3 px-4">{item.color}</td>
                        <td className="py-3 px-4 text-gray-600">{item.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Soil Depth */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Soil Depth Requirements</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">PLANT TYPE</th>
                      <th className="text-left py-3 px-4">ON SLAB</th>
                      <th className="text-left py-3 px-4">ON GRADE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {soilDepth.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-3 px-4">{item.plantType}</td>
                        <td className="py-3 px-4">{item.onSlab}</td>
                        <td className="py-3 px-4">{item.onGrade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Planting Notes */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Planting Notes (Include in CPL)</h3>
              <ul className="space-y-3">
                {plantingNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-black mt-1">{idx + 1}.</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lighting */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Lighting Standards</h3>
              <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-gray-800">
                  <strong>Important:</strong> Lights around swimming pool MUST BE 12V ONLY
                </p>
              </div>
              <h4 className="mb-4">Lighting Notes (Include in Lighting Plans):</h4>
              <ul className="space-y-3">
                {lightingNotes.map((note, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-black mt-1">{idx + 1}.</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Water & Drainage */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Waterpoint & Drainage</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-3 px-4">CODE</th>
                      <th className="text-left py-3 px-4">COVERAGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waterDrainage.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-200">
                        <td className="py-3 px-4">{item.code}</td>
                        <td className="py-3 px-4">{item.radius}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Swimming Pool Specs */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-6">Swimming Pool Performance Specifications</h3>
              <ul className="space-y-3">
                {poolSpecs.map((spec, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-black mt-1">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> The swimming pool specialist or contractor shall submit their own structural, M & E sanitary design system. He shall specify the types/brands/models of equipment, fittings, and accessories for this project and other information needed to complete the swimming pool systems.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* References Tab */}
        {activeTab === 'references' && (
          <div className="space-y-8">
            {referenceLinks.map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-black hover:bg-gray-50 transition-all group"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                      <span className="text-gray-700 group-hover:text-black transition-colors">
                        {link.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}