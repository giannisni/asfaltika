import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  // Products
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  // Projects
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  // Equipment
  app.get(api.equipment.list.path, async (req, res) => {
    const equipment = await storage.getEquipment();
    res.json(equipment);
  });

  // Certifications
  app.get(api.certifications.list.path, async (req, res) => {
    const certifications = await storage.getCertifications();
    res.json(certifications);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    // Services
    await storage.createService({
      title: "Asphalt Production",
      description: "High-quality asphalt mixtures produced in our state-of-the-art facilities.",
      imageUrl: "/images/construction-site.jpg",
      slug: "asphalt-production"
    });
    await storage.createService({
      title: "Road Construction",
      description: "Complete road construction services from earthworks to final paving.",
      imageUrl: "/images/highway-construction.jpg",
      slug: "road-construction"
    });
    await storage.createService({
      title: "Paving Works",
      description: "Professional paving for highways, parking lots, and private roads.",
      imageUrl: "/images/paving-works.jpg",
      slug: "paving-works"
    });

    // Products
    await storage.createProduct({
      title: "Asphalt Concrete Type A",
      description: "Suitable for heavy traffic roads and highways.",
      category: "Asphalt Mixtures",
      imageUrl: "/images/paving-works.jpg"
    });
    await storage.createProduct({
      title: "Cold Asphalt Mix",
      description: "Ideal for road repairs and small patches.",
      category: "Asphalt Mixtures",
      imageUrl: "/images/highway-construction.jpg"
    });

    // Projects
    await storage.createProject({
      title: "National Highway Expansion",
      description: "Widening and resurfacing of 50km of national highway.",
      location: "Attica, Greece",
      completionDate: "2023",
      imageUrl: "/images/highway-construction.jpg"
    });
    await storage.createProject({
      title: "Airport Runway Resurfacing",
      description: "Specialized high-durability asphalt for airport runway.",
      location: "Thessaloniki",
      completionDate: "2022",
      imageUrl: "/images/construction-site.jpg"
    });

    // Equipment
    await storage.createEquipment({
      name: "Asphalt Paver Finisher",
      description: "High-capacity paver for precise road surfacing.",
      imageUrl: "/images/construction-site.jpg"
    });
    await storage.createEquipment({
      name: "Road Roller Compactor",
      description: "Heavy-duty roller for asphalt compaction.",
      imageUrl: "/images/road-roller.jpg"
    });

    // Certifications
    await storage.createCertification({
      title: "ISO 9001:2015",
      issuingBody: "TUV Austria",
      year: "2023",
      imageUrl: "/images/certification.jpg"
    });
  }
}
