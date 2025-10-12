import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services } from '../data/mock';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1759922378222-47ad736a174d"
            alt="Construction Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive building solutions from design to completion - all under one roof
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">What We Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Construction Solutions in Thrissur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From architectural design to landscaping, we provide comprehensive services for residential and commercial
              projects across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full">
                  <span className="text-orange-600 text-sm font-semibold">Service {index + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{service.fullDescription}</p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white mt-4">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures your project is completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, requirements, and budget to understand your needs.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our architects create detailed plans and 3D visualizations for your approval.'
              },
              {
                step: '03',
                title: 'Construction',
                description: 'Expert execution with quality materials and skilled craftsmen.'
              },
              {
                step: '04',
                title: 'Handover',
                description: 'Final inspection, documentation, and handover with warranty support.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="text-5xl font-bold text-orange-500">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free consultation and detailed quote for your residential or commercial project in Thrissur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+917736885666">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-6"
              >
                Call +91 7736885666
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;