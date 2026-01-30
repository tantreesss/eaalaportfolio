import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Contact</h2>
          <div className="w-24 h-px bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl mb-12 text-gray-700">
              Let's discuss how we can bring your landscape vision to life. 
              Reach out to schedule a consultation or learn more about our services.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <div className="mb-1">Address</div>
                  <p className="text-gray-600">
                  Unit 710, Future Point Plaza 1,<br />
                  112 Panay Avenue, Brgy. South Triangle,<br />
                   Quezon City 1103, Metro Manila, Philippines
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <div className="mb-1">Landline</div>
                  <p className="text-gray-600">(02) 8554-9453</p> 
                  <br />
                  <div className="mb-1 mt-4">Mobile Number</div>
                  <p className="text-gray-600">0920 969 9437</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <div className="mb-1">Email</div>
                  <p className="text-gray-600">eaureliodocumenti@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Facebook className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <div className="mb-1">Facebook</div>
                  <a 
                    href="https://www.facebook.com/eaalaPH" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Visit our Facebook page
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full md:w-auto px-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}