
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Palette, Search, TrendingUp, Users, Award, Mail, Phone, MapPin, Menu, X, ExternalLink, Star, ChevronLeft, ChevronRight, Zap, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies"
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers"
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your site"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Digital Marketing",
      description: "Comprehensive strategies to grow your online presence and revenue"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Social Media",
      description: "Engage your audience and build communities across all platforms"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Branding",
      description: "Create a memorable brand identity that resonates with your audience"
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: "E-commerce Revolution",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      description: "A complete e-commerce transformation that increased sales by 300%"
    },
    {
      id: 2,
      title: "Tech Startup Platform",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      description: "Modern SaaS platform serving 10,000+ users worldwide"
    },
    {
      id: 3,
      title: "Brand Identity Redesign",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600",
      description: "Complete rebrand that elevated market positioning"
    },
    {
      id: 4,
      title: "Mobile App Innovation",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
      description: "Award-winning mobile app with 1M+ downloads"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Their team transformed our digital presence completely. We saw a 400% increase in leads within 3 months!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoShop",
      content: "Outstanding work! They delivered our e-commerce platform ahead of schedule and under budget.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content: "The SEO strategy they implemented doubled our organic traffic in just 6 months. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">DigitalCraft</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#home" className="hover:text-primary transition-colors text-lg">Home</a>
              <a href="#about" className="hover:text-primary transition-colors text-lg">About</a>
              <a href="#services" className="hover:text-primary transition-colors text-lg">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-colors text-lg">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors text-lg">Contact</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-8 pb-6">
              <div className="flex flex-col space-y-6">
                <a href="#home" className="hover:text-primary transition-colors text-lg">Home</a>
                <a href="#about" className="hover:text-primary transition-colors text-lg">About</a>
                <a href="#services" className="hover:text-primary transition-colors text-lg">Services</a>
                <a href="#portfolio" className="hover:text-primary transition-colors text-lg">Portfolio</a>
                <a href="#contact" className="hover:text-primary transition-colors text-lg">Contact</a>
                <Button className="bg-primary text-primary-foreground w-fit px-8 py-3">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            <h1 className="text-6xl md:text-8xl font-light leading-tight">
              <span className="block mb-4">We Build</span>
              <span className="block text-primary font-medium">Digital Experiences</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Transform your business with cutting-edge web development and digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-12 py-4 text-lg">
                Let's Work Together <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-12 py-4 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light">About DigitalCraft</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                We're a team of passionate creators, developers, and strategists dedicated to helping businesses thrive in the digital world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-20 items-center mt-24">
              <div className="space-y-8 text-left">
                <h3 className="text-3xl md:text-4xl font-light">Our Mission</h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
                </p>
                <div className="space-y-6 mt-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg">10+ Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-lg">500+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-lg">98% Client Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500" 
                  alt="Team collaboration" 
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light">Our Services</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Comprehensive digital solutions to elevate your business and drive measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
              {services.map((service, index) => (
                <div key={index} className="space-y-6 p-8 hover:bg-card/20 rounded-lg transition-colors">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-12 py-4 text-lg">
                Get a Free Quote <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light">Our Portfolio</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Discover some of our most impactful projects and success stories
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-24">
              {portfolio.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden cursor-pointer border-0 bg-card/20 hover:bg-card/40 transition-colors group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white space-y-2">
                      <span className="text-sm bg-primary px-3 py-1 rounded">{project.category}</span>
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                    </div>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light">What Clients Say</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>

            <div className="relative mt-24">
              <Card className="border-0 bg-card/20 p-16">
                <CardContent className="p-0 text-center space-y-8">
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-6 mt-12">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-medium text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/40 rounded-full flex items-center justify-center hover:bg-card/60 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card/40 rounded-full flex items-center justify-center hover:bg-card/60 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-light">Let's Work Together</h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
                Ready to transform your digital presence? Get in touch and let's discuss your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-20 mt-24">
              <div>
                <Card className="border-0 bg-card/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-medium mb-8">Send us a message</h3>
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Input placeholder="Your Name" className="bg-background/50 border-border h-14 text-lg" />
                        <Input placeholder="Your Email" type="email" className="bg-background/50 border-border h-14 text-lg" />
                      </div>
                      <Input placeholder="Subject" className="bg-background/50 border-border h-14 text-lg" />
                      <Textarea placeholder="Your Message" rows={6} className="bg-background/50 border-border text-lg" />
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-4 text-lg">
                        Send Message <ArrowRight className="ml-3 w-6 h-6" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-medium mb-8">Get in touch</h3>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-lg">Email</div>
                        <div className="text-muted-foreground">hello@digitalcraft.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-lg">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-lg">Office</div>
                        <div className="text-muted-foreground">123 Digital Street, Tech City</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-8 space-y-6">
                  <h4 className="text-xl font-medium">Ready to get started?</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Let's discuss your project and see how we can help you achieve your goals.
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border/20 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="text-2xl font-bold">DigitalCraft</div>
              <p className="text-gray-400 leading-relaxed">
                Crafting digital experiences that drive business growth and user engagement.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Web Design</li>
                <li className="hover:text-primary transition-colors cursor-pointer">SEO Optimization</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Digital Marketing</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Connect</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <span className="text-sm bg-primary text-white px-3 py-1 rounded">{selectedProject.category}</span>
                <h3 className="text-2xl font-medium">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3">
                  View Live Site <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;
