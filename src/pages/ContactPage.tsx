import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ContactForm from '../components/ContactForm';
import '../styles/animations.css';

const ContactPage = () => {
  return (
    <section id="contact-page" className="py-16 bg-gray-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">Get in touch with us for any queries about scholarships and admissions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <ContactForm />
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center animate-slide-in" style={{ animationDelay: '0.5s' }}>
                <MapPin className="h-6 w-6 text-[#1e3a8a] mr-4 animate-pulse-icon" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-gray-600">123 Education Street, Mumbai, India</p>
                </div>
              </div>

              <div className="flex items-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
                <Phone className="h-6 w-6 text-[#1e3a8a] mr-4 animate-pulse-icon" />
                <div>
                  <h4 className="font-medium">Phone Number</h4>
                  <p className="text-gray-600">+91 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center animate-slide-in" style={{ animationDelay: '0.7s' }}>
                <Mail className="h-6 w-6 text-[#1e3a8a] mr-4 animate-pulse-icon" />
                <div>
                  <h4 className="font-medium">Email Address</h4>
                  <p className="text-gray-600">info@markazconsultancy.com</p>
                </div>
              </div>

              <div className="mt-8 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                <h4 className="font-medium mb-4">Office Hours</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;