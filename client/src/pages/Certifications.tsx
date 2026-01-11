import { useCertifications } from "@/hooks/use-content";
import { SectionHeader } from "@/components/SectionHeader";
import { BadgeCheck, FileCheck } from "lucide-react";

export default function Certifications() {
  const { data: certifications, isLoading } = useCertifications();

  if (isLoading) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">Quality Assurance</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Certified excellence and compliance with international standards</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Our Certifications" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {certifications?.map((cert) => (
              <div key={cert.id} className="bg-white p-8 rounded-sm shadow-md border-l-4 border-primary flex items-start gap-6 hover:shadow-lg transition-shadow">
                <div className="bg-gray-50 p-3 rounded-full shrink-0">
                  <BadgeCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{cert.title}</h3>
                  <div className="text-sm text-gray-500 font-medium mb-3 uppercase tracking-wide">
                    {cert.issuingBody} • {cert.year}
                  </div>
                  {cert.imageUrl && (
                    <div className="mt-4 border border-gray-200 p-2 inline-block bg-gray-50 rounded-sm">
                       <img src={cert.imageUrl} alt="Certificate Scan" className="h-32 object-contain" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-sm shadow-sm text-center">
             <FileCheck className="h-12 w-12 text-gray-300 mx-auto mb-4" />
             <h3 className="text-lg font-bold text-secondary mb-2">Quality Policy</h3>
             <p className="text-muted-foreground max-w-2xl mx-auto">
               We are committed to maintaining the highest standards of quality management, environmental responsibility, 
               and occupational health and safety in all our operations.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
