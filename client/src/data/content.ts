import type { Service, Product, Project, Equipment, Certification } from "./types";

export const services: Service[] = [
  {
    id: 1,
    title: "Asphalt Production",
    description: "High-quality asphalt mixtures produced in our state-of-the-art facilities.",
    imageUrl: "/images/construction-site.jpg",
    slug: "asphalt-production",
  },
  {
    id: 2,
    title: "Road Construction",
    description: "Complete road construction services from earthworks to final paving.",
    imageUrl: "/images/highway-construction.jpg",
    slug: "road-construction",
  },
  {
    id: 3,
    title: "Paving Works",
    description: "Professional paving for highways, parking lots, and private roads.",
    imageUrl: "/images/paving-works.jpg",
    slug: "paving-works",
  },
];

export const products: Product[] = [
  {
    id: 1,
    title: "Asphalt Concrete Type A",
    description: "Suitable for heavy traffic roads and highways.",
    category: "Asphalt Mixtures",
    imageUrl: "/images/paving-works.jpg",
  },
  {
    id: 2,
    title: "Cold Asphalt Mix",
    description: "Ideal for road repairs and small patches.",
    category: "Asphalt Mixtures",
    imageUrl: "/images/highway-construction.jpg",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "National Highway Expansion",
    description: "Widening and resurfacing of 50km of national highway.",
    location: "Attica, Greece",
    completionDate: "2023",
    imageUrl: "/images/highway-construction.jpg",
  },
  {
    id: 2,
    title: "Airport Runway Resurfacing",
    description: "Specialized high-durability asphalt for airport runway.",
    location: "Thessaloniki",
    completionDate: "2022",
    imageUrl: "/images/construction-site.jpg",
  },
];

export const equipment: Equipment[] = [
  {
    id: 1,
    name: "Asphalt Paver Finisher",
    description: "High-capacity paver for precise road surfacing.",
    imageUrl: "/images/construction-site.jpg",
  },
  {
    id: 2,
    name: "Road Roller Compactor",
    description: "Heavy-duty roller for asphalt compaction.",
    imageUrl: "/images/road-roller.jpg",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "ISO 9001:2015",
    issuingBody: "TUV Austria",
    year: "2023",
    imageUrl: "/images/certification.jpg",
  },
];
