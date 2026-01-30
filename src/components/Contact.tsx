import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl mb-4">Contact</h2>
          <div className="w-24 h-px bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Let's discuss how we can bring your landscape vision to life. 
            Reach out to schedule a consultation or learn more about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-8 h-8 text-gray-700" />
            </div>
            <div className="mb-2 font-medium">Address</div>
            <p className="text-gray-600 text-sm">
              Unit 710, Future Point Plaza 1<br />
              112 Panay Avenue, Brgy. South Triangle<br />
              Quezon City 1103, Metro Manila, Philippines
            </p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-gray-700" />
            </div>
            <div className="mb-2 font-medium">Landline</div>
            <p className="text-gray-600 text-sm">(02) 8554-9453</p>
            <br />
            <div className="mb-2 font-medium mt-4">Mobile Number</div>
            <p className="text-gray-600 text-sm">0920 969 9437</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>
            <div className="mb-2 font-medium">Email</div>
            <a 
              href="mailto:eaureliodocumenti@gmail.com"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              eaureliodocumenti@gmail.com
            </a>
            <br />
            <a 
              href="mailto:e.aurelio@yahoo.com"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              e.aurelio@yahoo.com
            </a>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Facebook className="w-8 h-8 text-gray-700" />
            </div>
            <div className="mb-2 font-medium">Facebook</div>
            <a 
              href="https://www.facebook.com/eaalaPH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Visit our Facebook page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}