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
      <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary uppercase tracking-tight mb-3 relative inline-block">
        {title}
        <span className={cn(
          "absolute -bottom-2 h-1 bg-primary w-1/3",
          centered ? "left-1/3" : "left-0"
        )} />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
