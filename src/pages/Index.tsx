
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
      icon: <Code className="w-12 h-12 text-primary animate-bounce-slow" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      delay: "delay-0"
    },
    {
      icon: <Palette className="w-12 h-12 text-accent animate-bounce-slow" />,
      title: "Web Design",
      description: "Beautiful, user-friendly designs that convert visitors into customers",
      delay: "delay-100"
    },
    {
      icon: <Search className="w-12 h-12 text-primary animate-bounce-slow" />,
      title: "SEO Optimization",
      description: "Boost your search rankings and drive organic traffic to your site",
      delay: "delay-200"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent animate-bounce-slow" />,
      title: "Digital Marketing",
      description: "Comprehensive strategies to grow your online presence and revenue",
      delay: "delay-300"
    },
    {
      icon: <Users className="w-12 h-12 text-primary animate-bounce-slow" />,
      title: "Social Media",
      description: "Engage your audience and build communities across all platforms",
      delay: "delay-400"
    },
    {
      icon: <Award className="w-12 h-12 text-accent animate-bounce-slow" />,
      title: "Branding",
      description: "Create a memorable brand identity that resonates with your audience",
      delay: "delay-500"
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
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold animate-text-shimmer">DigitalCraft</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-all duration-300 hover:scale-110">Home</a>
              <a href="#about" className="hover:text-primary transition-all duration-300 hover:scale-110">About</a>
              <a href="#services" className="hover:text-primary transition-all duration-300 hover:scale-110">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-all duration-300 hover:scale-110">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-all duration-300 hover:scale-110">Contact</a>
              <Button className="bg-gradient-to-r from-primary to-accent animate-pulse-glow hover:scale-105 transition-transform duration-300">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="animate-spin" /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slide-up">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-primary to-accent w-fit">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            background: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto animate-scale-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="animate-text-shimmer">We Build Digital</span>
              <span className="block text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                Experiences
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Transform your business with cutting-edge web development and digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-500">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 glow-effect">
                Let's Work Together <ArrowRight className="ml-2 w-5 h-5 animate-bounce-slow" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105">
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/30 rounded-full animate-bounce-slow"></div>
        <Zap className="absolute top-40 right-40 w-8 h-8 text-accent animate-pulse" />
        <Globe className="absolute bottom-40 left-20 w-6 h-6 text-primary animate-rotate-slow" />
        <Smartphone className="absolute top-60 left-40 w-5 h-5 text-accent animate-bounce-slow" />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">About DigitalCraft</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a team of passionate creators, developers, and strategists dedicated to helping businesses thrive in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 animate-fade-in delay-100">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>10+ Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in delay-200">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span>500+ Successful Projects</span>
                </div>
                <div className="flex items-center space-x-3 animate-fade-in delay-300">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>98% Client Satisfaction</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300" 
                alt="Team member" 
                className="rounded-lg card-hover animate-scale-in delay-200"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300" 
                alt="Team collaboration" 
                className="rounded-lg card-hover mt-8 animate-scale-in delay-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business and drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`card-hover border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-slide-up ${service.delay}`}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in delay-700">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 glow-effect">
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of our most impactful projects and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card 
                key={project.id} 
                className={`card-hover overflow-hidden cursor-pointer border-0 shadow-lg bg-card/50 backdrop-blur-sm animate-scale-in group`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-primary px-2 py-1 rounded animate-pulse">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl mb-8 text-muted-foreground italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover animate-bounce-slow"
                  />
                  <div className="text-left">
                    <div className="font-bold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-text-shimmer">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch and let's discuss your project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-slide-in-left">
              <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name" className="bg-background/50 border-border hover:border-primary transition-colors duration-300" />
                      <Input placeholder="Your Email" type="email" className="bg-background/50 border-border hover:border-primary transition-colors duration-300" />
                    </div>
                    <Input placeholder="Subject" className="bg-background/50 border-border hover:border-primary transition-colors duration-300" />
                    <Textarea placeholder="Your Message" rows={5} className="bg-background/50 border-border hover:border-primary transition-colors duration-300" />
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300">
                      Send Message <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 animate-slide-in-right">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">hello@digitalcraft.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-muted-foreground">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Office</div>
                      <div className="text-muted-foreground">123 Digital Street, Tech City, TC 12345</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white animate-pulse-glow">
                <h4 className="text-xl font-bold mb-4">Ready to get started?</h4>
                <p className="mb-6">Let's discuss your project and see how we can help you achieve your goals.</p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold animate-text-shimmer mb-4">DigitalCraft</div>
              <p className="text-gray-400 mb-4">
                Crafting digital experiences that drive business growth and user engagement.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Web Design</li>
                <li className="hover:text-primary transition-colors cursor-pointer">SEO Optimization</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Digital Marketing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Portfolio</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Twitter</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
                <li className="hover:text-primary transition-colors cursor-pointer">Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-md animate-scale-in">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-sm bg-primary text-white px-2 py-1 rounded animate-pulse">{selectedProject.category}</span>
                <h3 className="text-2xl font-bold mt-4 mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                <Button className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300">
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
