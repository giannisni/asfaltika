import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2a2d3a] text-white pt-16 pb-8 border-t-4 border-[#f5dc0a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="/images/logo.jpg"
              alt="Paschalidis"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#f5dc0a] hover:text-[#1e3d8f] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#f5dc0a] hover:text-[#1e3d8f] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-[#f5dc0a] hover:text-[#1e3d8f] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 border-l-4 border-[#f5dc0a] pl-3">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-[#f5dc0a] transition-colors text-sm">{t("nav.services")}</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-[#f5dc0a] transition-colors text-sm">{t("nav.products")}</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-[#f5dc0a] transition-colors text-sm">{t("nav.projects")}</Link></li>
              <li><Link href="/equipment" className="text-gray-400 hover:text-[#f5dc0a] transition-colors text-sm">{t("nav.equipment")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 border-l-4 border-[#f5dc0a] pl-3">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-[#f5dc0a] shrink-0 mt-0.5" />
                <span>Περγάμου 5,<br />Αθήνα 171 21</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-[#f5dc0a] shrink-0" />
                <span>+30 210 932 7755</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-[#f5dc0a] shrink-0" />
                <span>info@paschalidis.gr</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6 border-l-4 border-[#f5dc0a] pl-3">
              {t("footer.workingHours")}
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>{t("footer.monFri")}</span>
                <span className="text-white font-medium">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("footer.saturday")}</span>
                <span className="text-[#f5dc0a] font-medium">{t("footer.closed")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("footer.sunday")}</span>
                <span className="text-[#f5dc0a] font-medium">{t("footer.closed")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} ΑΦΟΙ ΠΑΣΧΑΛΙΔΗ Ε.Ε. — ΤΕΧΝΙΚΗ ΕΤΑΙΡΕΙΑ. {t("footer.rights")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#f5dc0a]">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-[#f5dc0a]">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
