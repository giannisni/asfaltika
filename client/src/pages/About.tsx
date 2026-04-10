import { SectionHeader } from "@/components/SectionHeader";
import { Users, Target, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t("about.yearsExperience"), value: "25+" },
    { label: t("about.projectsCompleted"), value: "500+" },
    { label: t("about.teamMembers"), value: "45+" },
    { label: t("about.tonsAsphalt"), value: "1M+" },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/construction-site.jpg')` }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            {t("about.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader title={t("about.ourStory")} />
              <div className="prose prose-lg text-gray-500">
                <p className="mb-6">{t("about.story1")}</p>
                <p className="mb-6">{t("about.story2")}</p>
                <p>{t("about.story3")}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/architect.jpg"
                className="rounded-sm shadow-lg w-full h-64 object-cover"
                alt="Construction Worker"
              />
              <img
                src="/images/road-roller.jpg"
                className="rounded-sm shadow-lg w-full h-64 object-cover mt-12"
                alt="Road Roller"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-24 border-y border-gray-100 py-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#e8941a] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#495866] font-medium tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <SectionHeader title={t("about.ourValues")} centered />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-12 w-12 text-[#e8941a]" />,
                  title: t("about.quality"),
                  desc: t("about.qualityDesc"),
                },
                {
                  icon: <ShieldCheck className="h-12 w-12 text-[#e8941a]" />,
                  title: t("about.safety"),
                  desc: t("about.safetyDesc"),
                },
                {
                  icon: <Users className="h-12 w-12 text-[#e8941a]" />,
                  title: t("about.partnership"),
                  desc: t("about.partnershipDesc"),
                },
              ].map((value, i) => (
                <Card
                  key={i}
                  className="border-none shadow-lg bg-gray-50 hover:-translate-y-2 transition-transform duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-sm">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2a2d3a] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
