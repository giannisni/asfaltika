import { db } from "./db";
import {
  services, products, projects, equipment, certifications, contactMessages,
  type Service, type InsertService,
  type Product, type InsertProduct,
  type Project, type InsertProject,
  type Equipment, type InsertEquipment,
  type Certification, type InsertCertification,
  type ContactMessage, type InsertContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Products
  getProducts(): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Projects
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Equipment
  getEquipment(): Promise<Equipment[]>;
  createEquipment(item: InsertEquipment): Promise<Equipment>;

  // Certifications
  getCertifications(): Promise<Certification[]>;
  createCertification(cert: InsertCertification): Promise<Certification>;

  // Contact
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class DatabaseStorage implements IStorage {
  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.slug, slug));
    return service;
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  // Equipment
  async getEquipment(): Promise<Equipment[]> {
    return await db.select().from(equipment);
  }

  async createEquipment(item: InsertEquipment): Promise<Equipment> {
    const [newItem] = await db.insert(equipment).values(item).returning();
    return newItem;
  }

  // Certifications
  async getCertifications(): Promise<Certification[]> {
    return await db.select().from(certifications);
  }

  async createCertification(cert: InsertCertification): Promise<Certification> {
    const [newCert] = await db.insert(certifications).values(cert).returning();
    return newCert;
  }

  // Contact
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
