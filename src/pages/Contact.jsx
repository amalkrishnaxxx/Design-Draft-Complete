import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { companyInfo } from '../data/mock';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    services: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for contacting Design Draft. We will get back to you within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budgetRange: '',
        timeline: '',
        services: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D0D]/70 via-[#4C1D0D]/70 to-[#4C1D0D]/70 z-10" />
          <img
            src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Let's discuss your construction project and bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative -mt-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                  {companyInfo.phone}
                </a>
                <a href={`https://wa.me/${companyInfo.whatsapp}`} className="block text-sm text-gray-500 hover:text-orange-500 transition-colors">
                  WhatsApp Available
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <Mail className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Email</h3>
                <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                  {companyInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center space-y-3">
                <div className="mx-auto w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Location</h3>
                <p className="text-gray-600 text-sm">{companyInfo.location}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
                  <span className="text-orange-600 text-sm font-semibold">Send us a message</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your Construction Project
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours with a detailed consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                      Project Type *
                    </label>
                    <Select value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential-new">New Residential Construction</SelectItem>
                        <SelectItem value="residential-renovation">Home Renovation</SelectItem>
                        <SelectItem value="commercial">Commercial Project</SelectItem>
                        <SelectItem value="interior">Interior Design Only</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budgetRange" className="text-sm font-medium text-gray-700">
                      Budget Range *
                    </label>
                    <Select value={formData.budgetRange} onValueChange={(value) => handleSelectChange('budgetRange', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-30">Under ₹30 Lakhs</SelectItem>
                        <SelectItem value="30-50">₹30 - ₹50 Lakhs</SelectItem>
                        <SelectItem value="50-75">₹50 - ₹75 Lakhs</SelectItem>
                        <SelectItem value="75-100">₹75 Lakhs - ₹1 Crore</SelectItem>
                        <SelectItem value="above-100">Above ₹1 Crore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                      Expected Timeline *
                    </label>
                    <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                        <SelectItem value="1-3-months">1-3 Months</SelectItem>
                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                        <SelectItem value="6-12-months">6-12 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="services" className="text-sm font-medium text-gray-700">
                      Services Needed *
                    </label>
                    <Select value={formData.services} onValueChange={(value) => handleSelectChange('services', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select services" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="architecture">Architectural Design</SelectItem>
                        <SelectItem value="interior">Interior Design</SelectItem>
                        <SelectItem value="construction">Construction Only</SelectItem>
                        <SelectItem value="turnkey">Turnkey Solution (All Services)</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project requirements..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Google Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125452.29634392894!2d76.16139084335936!3d10.527640899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45647874ebea8!2sIrinjalakuda%2C%20Kerala!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Design Draft Location"
                ></iframe>
              </div>

              {/* Office Hours */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Office Hours</h3>
                      <p className="text-sm text-gray-600">Visit us during these hours</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday:</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-semibold text-gray-900">By Appointment</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-[#4C1D0D] text-white">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Need Immediate Assistance?</h3>
                  <p className="text-gray-300 text-sm">
                    Our team is available to answer your questions and provide guidance for your project.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold">Call Now</span>
                    </a>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}`}
                      className="flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-blue-900 py-3 px-4 rounded-lg transition-colors"
                    >
                      <span className="font-semibold">WhatsApp Chat</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
