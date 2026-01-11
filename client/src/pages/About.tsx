import { SectionHeader } from "@/components/SectionHeader";
import { Users, Target, ShieldCheck, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "25+" },
    { label: "Projects Completed", value: "500+" },
    { label: "Team Members", value: "45+" },
    { label: "Tons of Asphalt", value: "1M+" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-secondary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building strong foundations since 1995</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader title="Our Story" />
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6">
                Founded in 1995, ALKI ASFALTIKA LTD began as a small family-owned operation with a single vision: 
                to provide the highest quality asphalt products and paving services in the region. 
                Over the past two decades, we have evolved into one of the industry's leaders.
              </p>
              <p className="mb-6">
                Our growth has been fueled by our unwavering commitment to quality, investment in modern machinery, 
                and continuous training of our personnel. Today, we operate a state-of-the-art asphalt mixing plant 
                and maintain a large fleet of specialized construction vehicles.
              </p>
              <p>
                We take pride in our ability to handle projects of any scale, from small private driveways to large 
                public infrastructure networks, always delivering on time and exceeding expectations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* unsplash: construction worker portrait */}
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" className="rounded-sm shadow-lg w-full h-64 object-cover" alt="Construction Worker" />
            {/* unsplash: road rollers */}
            <img src="https://images.unsplash.com/photo-1578330766324-733ad3b97b0a?q=80&w=2070&auto=format&fit=crop" className="rounded-sm shadow-lg w-full h-64 object-cover mt-12" alt="Road Roller" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-24 border-y border-gray-100 py-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-secondary font-medium uppercase tracking-wide text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <SectionHeader title="Our Values" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Target className="h-12 w-12 text-primary" />, 
                title: "Quality", 
                desc: "We never compromise on the quality of our materials or workmanship. Excellence is our standard." 
              },
              { 
                icon: <ShieldCheck className="h-12 w-12 text-primary" />, 
                title: "Safety", 
                desc: "The safety of our team and the public is paramount. We adhere to the strictest safety protocols." 
              },
              { 
                icon: <Users className="h-12 w-12 text-primary" />, 
                title: "Partnership", 
                desc: "We view our clients as partners, working collaboratively to achieve shared goals and success." 
              }
            ].map((value, i) => (
              <Card key={i} className="border-none shadow-lg bg-gray-50 hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 uppercase">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
