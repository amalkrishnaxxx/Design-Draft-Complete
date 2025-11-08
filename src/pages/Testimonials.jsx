import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D0D]/70 via-[#4C1D0D]/70 to-[#4C1D0D]/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
            alt="Happy Clients"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Read what our satisfied clients across Thrissur and Kerala have to say about working with Design Draft
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative -mt-20 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">250+</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 md:h-8 w-6 md:w-8 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">5-Star Reviews</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">100%</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Client Feedback</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We take pride in our work and our clients' satisfaction is our greatest achievement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-10 w-10 text-orange-500" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.comment}"</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.designation}</div>
                      <div className="text-sm text-orange-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients Choose Design Draft
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Assurance',
                description:
                  'Every project is executed with premium materials and superior craftsmanship, ensuring lasting quality.'
              },
              {
                title: 'On-Time Delivery',
                description:
                  'We respect your time and commitments. Our projects are consistently delivered on schedule.'
              },
              {
                title: 'Transparent Process',
                description:
                  'Clear communication, honest pricing, and regular updates throughout your construction journey.'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#4C1D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Family of Satisfied Clients
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Experience the same quality and service that has made us Thrissur's most trusted builders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6">
                Start Your Project
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

export default Testimonials;