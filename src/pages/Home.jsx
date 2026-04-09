import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { ArrowRight, Award, Building2, Users, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, stats, services, projects, testimonials } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D0D]/5 via-[#4C1D0D]/8 to-[#4C1D0D]/7 z-10" />

          <Image
            src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25"
            alt="Luxury Home in Thrissur"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-orange-500 backdrop-blur-sm rounded-full border border-orange-500/3">
              <p className="text-white text-sm md:text-base font-medium">
                Thrissur's Leading Home Builders & Developers
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              From Dream to Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Crafting modern & traditional buildings across Thrissur, Kerala with 25+ years of excellence
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative -mt-20 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full">
                <span className="text-orange-600 text-sm font-semibold">About Design Draft</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Thrissur's Most Trusted Builders Since 1998
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Design Draft is one of the top builders and architectural design companies in Thrissur, Kerala.
                With over 25 years of trusted experience and 250+ happy clients, we specialize in residential
                and commercial property development.
              </p>
              <div className="space-y-3">
                {[
                  'Expert architectural design and engineering',
                  'Quality construction with premium materials',
                  'On-time project delivery',
                  'Transparent pricing with no hidden costs',
                  'Comprehensive after-sales support'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white mt-4">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                  alt="Modern Kerala Home"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01"
                  alt="Interior Design"
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">250+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Building Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From architectural design to turnkey construction, we provide end-to-end solutions for your
              residential and commercial projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.shortDescription}</p>
                  <Link to={`/services#${service.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-600 p-0 h-auto font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Our Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects in Thrissur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our recent residential and commercial projects across Thrissur and Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 6).map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{project.name}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Watch Our Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Project Showcases & Client Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See our completed projects and hear from our satisfied clients in Thrissur and across Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'msE6OjmqbIM', title: 'Project Showcase 1' },
              { id: 'A1VbWfll72U', title: 'Project Showcase 2' },
              { id: 'ovmUVyMxTog', title: 'Project Showcase 3' },
              { id: 'fIOVQm6C8Ig', title: 'Project Showcase 4' },
              { id: 'Y-g7beAIqZg', title: 'Project Showcase 5' },
              { id: 'kn4x8x9ADrQ', title: 'Project Showcase 6' }
            ].map((video, index) => (
              <div key={video.id} className="group">
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative aspect-video bg-gray-900">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&modestbranding=1&rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#4C1D0D]  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-500 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white text-sm font-semibold">Client Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Read reviews from our satisfied clients across Thrissur and Kerala.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-200 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-300">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
                Read More Reviews
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Dream Home ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's discuss your project and bring your vision to life with Thrissur's most trusted builders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+917736885666">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-6 text-lg"
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

export default Home;