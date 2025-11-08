import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Eye, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, stats } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every project is executed with premium materials and superior craftsmanship.'
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: 'Your happiness is our success. We work closely with you to ensure your vision becomes reality.'
    },
    {
      icon: Target,
      title: 'Timely Delivery',
      description: 'We respect your time and commitments. Our projects are delivered on schedule without compromising quality.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and honest pricing. No hidden costs, just straightforward dealings.'
    }
  ];

  const whyChooseUs = [
    '25+ years of construction excellence in Thrissur',
    '250+ satisfied clients across Kerala',
    'Experienced team of architects and engineers',
    'In-house design and construction services',
    'Quality materials from trusted suppliers',
    'Comprehensive project management',
    'On-time delivery with warranty support',
    'Transparent pricing and communication'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4C1D0D]/70 via-[#4C1D0D]/70 to-[#4C1D0D]/70 to-[#4C1D0D]/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1759922378275-32d7ca8bbcca"
            alt="Design Draft Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Design Draft
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Thrissur's most trusted builders with 25+ years of excellence in creating dream homes
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full">
                <span className="text-orange-600 text-sm font-semibold">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Building Dreams Since 1998
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Design Draft was founded in 1998 with a simple vision: to create quality homes that exceed
                  expectations. Over the past 25 years, we have grown from a small design firm to become one of
                  Thrissur's most trusted builders and developers.
                </p>
                <p>
                  Based in Irinjalakuda, Thrissur, we have successfully completed over 250 residential and commercial
                  projects across Kerala. Our commitment to quality, transparency, and customer satisfaction has earned
                  us the trust of homeowners, businesses, and property developers throughout the region.
                </p>
                <p>
                  Today, Design Draft stands as a symbol of excellence in construction and architectural design. Our
                  experienced team of architects, engineers, and craftsmen work together to deliver projects that
                  combine traditional Kerala architecture with modern design sensibilities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
                alt="Completed Project"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1706937110129-fd222ac8deb7"
                alt="Kerala Architecture"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-900">
              <CardContent className="p-8 space-y-4">
                <Target className="h-12 w-12 text-blue-900" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional construction and architectural design services that transform dreams into
                  reality. We strive to deliver quality homes and commercial spaces that exceed client expectations
                  through innovation, craftsmanship, and dedication to excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-500">
              <CardContent className="p-8 space-y-4">
                <Eye className="h-12 w-12 text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be Kerala's most trusted and respected construction company, recognized for our unwavering
                  commitment to quality, innovation, and customer satisfaction. We aim to set new standards in
                  residential and commercial construction across the region.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full mb-4">
              <span className="text-orange-600 text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                alt="Modern Home"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4C1D0D] text-white p-6 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">#1</div>
                <div className="text-sm font-medium">Builder in Thrissur</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full">
                <span className="text-orange-600 text-sm font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Thrissur Trusts Design Draft
              </h2>
              <p className="text-lg text-gray-600">
                We have built our reputation on delivering exceptional quality and service. Here's what sets us apart:
              </p>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#4C1D0D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the Design Draft difference. Contact us today to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:+917736885666">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6"
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

export default About;