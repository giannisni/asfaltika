import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Truck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { useServices, useProjects } from "@/hooks/use-content";

export default function Home() {
  const { data: services } = useServices();
  const { data: projects } = useProjects();

  const featuredServices = services?.slice(0, 3);
  const featuredProjects = projects?.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-secondary">
        {/* Abstract Dark Overlay */}
        <div className="absolute inset-0 bg-secondary/80 z-10" />
        
        {/* Background Image - Construction Theme */}
        {/* unsplash: asphalt road construction machine sunset */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` }}
        />

        <div className="container mx-auto px-4 z-20 relative text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-block bg-primary px-3 py-1 text-xs font-bold text-white mb-4 uppercase tracking-widest rounded-sm">
              Since 1995
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 uppercase">
              Building the Roads <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                To The Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl font-light">
              Premier asphalt production and infrastructure development across Greece. 
              Delivering quality, durability, and innovation for public and private sectors.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-sm uppercase tracking-wide shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all" asChild>
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-sm uppercase tracking-wide" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-white relative z-30 -mt-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-xl rounded-sm overflow-hidden">
          <div className="bg-white p-8 border-r border-gray-100 flex items-start gap-4 hover:bg-gray-50 transition-colors">
            <Factory className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-secondary mb-2 uppercase">Modern Production</h3>
              <p className="text-muted-foreground text-sm">State-of-the-art asphalt mixing plant capable of high-volume output.</p>
            </div>
          </div>
          <div className="bg-white p-8 border-r border-gray-100 flex items-start gap-4 hover:bg-gray-50 transition-colors">
            <HardHat className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-secondary mb-2 uppercase">Expert Team</h3>
              <p className="text-muted-foreground text-sm">Highly skilled engineers and technicians with decades of experience.</p>
            </div>
          </div>
          <div className="bg-white p-8 flex items-start gap-4 hover:bg-gray-50 transition-colors">
            <Truck className="h-10 w-10 text-primary shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-secondary mb-2 uppercase">Reliable Logistics</h3>
              <p className="text-muted-foreground text-sm">Large fleet of specialized vehicles ensuring timely delivery and execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader 
              title="Our Services" 
              subtitle="Comprehensive solutions for infrastructure and construction needs."
              className="mb-0"
            />
            <Link href="/services" className="hidden md:flex items-center text-primary font-bold hover:underline uppercase text-sm tracking-wider">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices?.map((service) => (
              <Card key={service.id} className="group border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 bg-primary/90 text-white px-4 py-2 z-20 font-display font-bold text-sm uppercase">
                    Service
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">
                    {service.description}
                  </p>
                  <Link href={`/services`} className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-xs font-bold mb-4 uppercase tracking-widest rounded-sm">
                About Alki Asfaltika
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase leading-tight text-white">
                Committed to <br/> Excellence
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ALKI ASFALTIKA LTD is a dynamic force in the asphalt and road construction industry. 
                With a focus on innovation and sustainability, we provide top-tier asphalt mixtures 
                and comprehensive paving solutions.
              </p>
              <ul className="space-y-4 mb-8">
                {['ISO Certified Processes', 'Eco-friendly Production', '25+ Years Experience', 'National Coverage'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="text-primary h-5 w-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-white text-secondary hover:bg-gray-100 font-bold px-8" asChild>
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-sm translate-x-4 translate-y-4" />
              {/* unsplash: construction team meeting site */}
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop" 
                alt="Construction Site Meeting" 
                className="rounded-sm shadow-2xl w-full relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title="Recent Projects" subtitle="Showcasing our capabilities across challenging environments." centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects?.map((project) => (
              <div key={project.id} className="group relative h-80 overflow-hidden rounded-sm cursor-pointer">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{project.location}</span>
                  <h3 className="text-white font-display font-bold text-xl uppercase leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white uppercase font-bold tracking-wide" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase">Ready to Start Your Project?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
            Contact us today for a consultation and quote. Let's build the foundation for your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90 border-none font-bold text-lg px-8 py-6 uppercase shadow-lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-6 uppercase" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
