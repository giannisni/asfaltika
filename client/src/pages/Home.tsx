import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Truck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { useServices, useProjects } from "@/hooks/use-content";
import { useLanguage } from "@/hooks/use-language";

export default function Home() {
  const { data: services } = useServices();
  const { data: projects } = useProjects();
  const { t } = useLanguage();

  const featuredServices = services?.slice(0, 3);
  const featuredProjects = projects?.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero - Kiewit style: full screen, left aligned, bottom weighted */}
      <section className="relative h-screen flex items-end overflow-hidden bg-[#2a2d3a]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/front.jpg')` }}
        />

        <div className="container mx-auto px-4 z-20 relative pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Category label with yellow bar */}
            <div className="mb-6">
              <span className="text-xs font-bold text-gray-300 tracking-[0.25em] uppercase">
                {t("home.since")}
              </span>
              <div className="w-8 h-0.5 bg-[#f5dc0a] mt-2" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tight">
              {t("home.hero1")}<br />
              {t("home.hero2")}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              {t("home.heroDesc")}
            </p>

            {/* Yellow text link with arrow - Kiewit style */}
            <Link
              href="/services"
              className="inline-flex items-center text-[#f5dc0a] font-bold text-lg hover:gap-3 gap-2 transition-all group"
            >
              {t("home.ourServices")}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-6 h-2 rounded-full bg-[#f5dc0a]" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-white relative z-30 -mt-0 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Factory className="h-8 w-8" />, title: t("home.modernProduction"), desc: t("home.modernProductionDesc") },
            { icon: <HardHat className="h-8 w-8" />, title: t("home.expertTeam"), desc: t("home.expertTeamDesc") },
            { icon: <Truck className="h-8 w-8" />, title: t("home.reliableLogistics"), desc: t("home.reliableLogisticsDesc") },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="text-[#f5dc0a] shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#2a2d3a] mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader
              title={t("home.servicesTitle")}
              subtitle={t("home.servicesSubtitle")}
              className="mb-0"
            />
            <Link href="/services" className="hidden md:flex items-center text-[#f5dc0a] font-bold hover:gap-3 gap-2 transition-all text-sm">
              {t("home.viewAllServices")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices?.map((service) => (
              <Card key={service.id} className="group border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 bg-white rounded-none">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#2a2d3a] mb-2 group-hover:text-[#f5dc0a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 line-clamp-3 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-sm font-bold text-[#f5dc0a] hover:gap-2 gap-1 transition-all">
                    {t("home.learnMore")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/services" className="inline-flex items-center text-[#f5dc0a] font-bold gap-2">
              {t("home.viewAllServices")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-[#2a2d3a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-gray-400 tracking-[0.25em] uppercase">
                {t("home.aboutTitle")}
              </span>
              <div className="w-8 h-0.5 bg-[#f5dc0a] mt-2 mb-6" />

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white tracking-tight">
                {t("home.committed")}
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                {t("home.aboutDesc")}
              </p>
              <ul className="space-y-3 mb-8">
                {[t("home.isoCertified"), t("home.ecoFriendly"), t("home.yearsExp"), t("home.nationalCoverage")].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="text-[#f5dc0a] h-4 w-4 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center text-[#f5dc0a] font-bold hover:gap-3 gap-2 transition-all"
              >
                {t("home.readStory")} <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/construction-worker.jpg"
                alt="Construction Site Meeting"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeader title={t("home.recentProjects")} subtitle={t("home.projectsSubtitle")} centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects?.map((project) => (
              <div key={project.id} className="group relative h-80 overflow-hidden cursor-pointer">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#f5dc0a] text-xs font-bold tracking-wider mb-1">{project.location}</span>
                  <h3 className="text-white font-bold text-lg leading-tight group-hover:text-[#f5dc0a] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center text-[#f5dc0a] font-bold hover:gap-3 gap-2 transition-all"
            >
              {t("home.viewAllProjects")} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f5dc0a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#1e3d8f] mb-4 tracking-tight">{t("home.ctaTitle")}</h2>
          <p className="text-[#1e3d8f]/80 text-lg max-w-2xl mx-auto mb-8">
            {t("home.ctaDesc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#1e3d8f] text-white hover:bg-[#162d6b] font-bold text-base px-8 py-4 transition-colors"
            >
              {t("home.getInTouch")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-[#1e3d8f] text-[#1e3d8f] hover:bg-[#1e3d8f] hover:text-[#f5dc0a] font-bold text-base px-8 py-4 transition-colors"
            >
              {t("home.browseProducts")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
