import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <div className={cn("w-10 h-1 bg-[#e8941a] mb-4", centered && "mx-auto")} />
      <h2 className="text-3xl md:text-4xl font-bold text-[#2a2d3a] tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-gray-500 mt-2 max-w-2xl text-lg", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
