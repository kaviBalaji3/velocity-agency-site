
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
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/30 transition-all duration-300">
        <div className="container mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                Heliotix
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-16">
              <a href="#home" className="hover:text-primary transition-all duration-300 text-lg font-light tracking-wide hover:scale-110">Home</a>
              <a href="#about" className="hover:text-primary transition-all duration-300 text-lg font-light tracking-wide hover:scale-110">About</a>
              <a href="#services" className="hover:text-primary transition-all duration-300 text-lg font-light tracking-wide hover:scale-110">Services</a>
              <a href="#portfolio" className="hover:text-primary transition-all duration-300 text-lg font-light tracking-wide hover:scale-110">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-all duration-300 text-lg font-light tracking-wide hover:scale-110">Contact</a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-10 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-12 pb-8 animate-fade-in">
              <div className="flex flex-col space-y-8">
                <a href="#home" className="hover:text-primary transition-all duration-300 text-lg font-light">Home</a>
                <a href="#about" className="hover:text-primary transition-all duration-300 text-lg font-light">About</a>
                <a href="#services" className="hover:text-primary transition-all duration-300 text-lg font-light">Services</a>
                <a href="#portfolio" className="hover:text-primary transition-all duration-300 text-lg font-light">Portfolio</a>
                <a href="#contact" className="hover:text-primary transition-all duration-300 text-lg font-light">Contact</a>
                <Button className="bg-primary text-primary-foreground w-fit px-10 py-4 text-lg font-light">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        
        {/* Floating orbs for subtle animation */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-extralight leading-tight tracking-tight">
              <span className="block mb-6 opacity-90">We Build</span>
              <span className="block text-primary font-light bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text-shimmer">
                Digital Experiences
              </span>
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-extralight tracking-wide animate-slide-up">
              Transform your business with cutting-edge web development and digital marketing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mt-20 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-16 py-6 text-xl font-light tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                Let's Work Together <ArrowRight className="ml-4 w-7 h-7" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary px-16 py-6 text-xl font-light tracking-wide transition-all duration-300 hover:scale-105">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-extralight tracking-tight">About Heliotix</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-extralight max-w-4xl mx-auto tracking-wide">
                We're a team of passionate creators, developers, and strategists dedicated to helping businesses thrive in the digital world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-24 items-center mt-32">
              <div className="space-y-12 text-left animate-slide-in-left">
                <h3 className="text-4xl md:text-5xl font-extralight tracking-tight">Our Mission</h3>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light tracking-wide">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital landscape.
                </p>
                <div className="space-y-8 mt-16">
                  <div className="flex items-center space-x-6 group transition-all duration-300 hover:translate-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    <span className="text-xl font-light tracking-wide">10+ Years of Experience</span>
                  </div>
                  <div className="flex items-center space-x-6 group transition-all duration-300 hover:translate-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    <span className="text-xl font-light tracking-wide">500+ Successful Projects</span>
                  </div>
                  <div className="flex items-center space-x-6 group transition-all duration-300 hover:translate-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full transition-all duration-300 group-hover:scale-125"></div>
                    <span className="text-xl font-light tracking-wide">98% Client Satisfaction</span>
                  </div>
                </div>
              </div>
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500" 
                  alt="Team collaboration" 
                  className="rounded-2xl w-full h-96 object-cover transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 bg-secondary/5">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-extralight tracking-tight">Our Services</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-extralight max-w-4xl mx-auto tracking-wide">
                Comprehensive digital solutions to elevate your business and drive measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-32">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="space-y-8 p-12 hover:bg-card/10 rounded-2xl transition-all duration-500 group hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-light tracking-wide">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light tracking-wide">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 px-16 py-6 text-xl font-light tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                Get a Free Quote <ArrowRight className="ml-4 w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-40">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-extralight tracking-tight">Our Portfolio</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-extralight max-w-4xl mx-auto tracking-wide">
                Discover some of our most impactful projects and success stories
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 mt-32">
              {portfolio.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden cursor-pointer border-0 bg-card/10 hover:bg-card/20 transition-all duration-500 group hover:scale-105 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-white space-y-3 transition-all duration-300 group-hover:translate-y-[-4px]">
                      <span className="text-sm bg-primary px-4 py-2 rounded-full font-light tracking-wide">{project.category}</span>
                      <h3 className="text-3xl font-light tracking-wide">{project.title}</h3>
                    </div>
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 bg-secondary/5">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-extralight tracking-tight">What Clients Say</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-extralight max-w-4xl mx-auto tracking-wide">
                Don't just take our word for it - hear from some of our satisfied clients
              </p>
            </div>

            <div className="relative mt-32 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="border-0 bg-card/10 p-20 transition-all duration-300 hover:bg-card/15">
                <CardContent className="p-0 text-center space-y-12">
                  <div className="flex justify-center space-x-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 fill-accent text-accent transition-all duration-300 hover:scale-125" />
                    ))}
                  </div>
                  <blockquote className="text-3xl md:text-4xl text-muted-foreground leading-relaxed font-extralight italic tracking-wide">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-8 mt-16">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full object-cover transition-all duration-300 hover:scale-110"
                    />
                    <div className="text-left">
                      <div className="font-light text-xl tracking-wide">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground font-light tracking-wide">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <button 
                onClick={prevTestimonial}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-card/20 rounded-full flex items-center justify-center hover:bg-card/40 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-card/20 rounded-full flex items-center justify-center hover:bg-card/40 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center space-y-20">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-extralight tracking-tight">Let's Work Together</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-extralight max-w-4xl mx-auto tracking-wide">
                Ready to transform your digital presence? Get in touch and let's discuss your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-24 mt-32">
              <div className="animate-slide-in-left">
                <Card className="border-0 bg-card/10 p-12 transition-all duration-300 hover:bg-card/15">
                  <CardContent className="p-0">
                    <h3 className="text-3xl font-light mb-12 tracking-wide">Send us a message</h3>
                    <form className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-8">
                        <Input placeholder="Your Name" className="bg-background/50 border-border h-16 text-lg font-light tracking-wide transition-all duration-300 focus:scale-105" />
                        <Input placeholder="Your Email" type="email" className="bg-background/50 border-border h-16 text-lg font-light tracking-wide transition-all duration-300 focus:scale-105" />
                      </div>
                      <Input placeholder="Subject" className="bg-background/50 border-border h-16 text-lg font-light tracking-wide transition-all duration-300 focus:scale-105" />
                      <Textarea placeholder="Your Message" rows={6} className="bg-background/50 border-border text-lg font-light tracking-wide transition-all duration-300 focus:scale-105" />
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/80 py-6 text-xl font-light tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30">
                        Send Message <ArrowRight className="ml-4 w-7 h-7" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h3 className="text-3xl font-light mb-12 tracking-wide">Get in touch</h3>
                  <div className="space-y-10">
                    <div className="flex items-center space-x-8 group transition-all duration-300 hover:translate-x-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-light text-xl tracking-wide">Email</div>
                        <div className="text-muted-foreground font-light tracking-wide">hello@heliotix.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8 group transition-all duration-300 hover:translate-x-2">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Phone className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <div className="font-light text-xl tracking-wide">Phone</div>
                        <div className="text-muted-foreground font-light tracking-wide">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-8 group transition-all duration-300 hover:translate-x-2">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <MapPin className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-light text-xl tracking-wide">Office</div>
                        <div className="text-muted-foreground font-light tracking-wide">123 Digital Street, Tech City</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-2xl p-12 space-y-8 transition-all duration-300 hover:bg-primary/15 hover:scale-105">
                  <h4 className="text-2xl font-light tracking-wide">Ready to get started?</h4>
                  <p className="text-muted-foreground leading-relaxed font-light tracking-wide">
                    Let's discuss your project and see how we can help you achieve your goals.
                  </p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-12 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border/20 text-white py-24">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="space-y-6">
              <div className="text-3xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Heliotix
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed font-light tracking-wide">
                Crafting digital experiences that drive business growth and user engagement.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="font-light text-xl tracking-wide">Services</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Web Development</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Web Design</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">SEO Optimization</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Digital Marketing</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-light text-xl tracking-wide">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">About Us</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Portfolio</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Careers</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Contact</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-light text-xl tracking-wide">Connect</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">LinkedIn</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Twitter</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Instagram</li>
                <li className="hover:text-primary transition-all duration-300 cursor-pointer font-light tracking-wide hover:translate-x-2">Dribbble</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-20 pt-12 text-center text-gray-400">
            <p className="font-light tracking-wide">&copy; 2024 Heliotix. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fade-in">
          <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl transition-all duration-300 animate-scale-in">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300 hover:scale-110"
                >
                  <X className="w-7 h-7 text-white" />
                </button>
              </div>
              <div className="p-12 space-y-8">
                <span className="text-sm bg-primary text-white px-4 py-2 rounded-full font-light tracking-wide">{selectedProject.category}</span>
                <h3 className="text-3xl font-light tracking-wide">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light tracking-wide">{selectedProject.description}</p>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/80 px-12 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105">
                  View Live Site <ExternalLink className="ml-3 w-5 h-5" />
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
