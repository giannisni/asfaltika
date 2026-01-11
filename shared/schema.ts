import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Content tables for dynamic site management
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  slug: text("slug").notNull().unique(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location"),
  completionDate: text("completion_date"), // String for flexibility (e.g. "2023", "Oct 2023")
  imageUrl: text("image_url").notNull(),
});

export const equipment = pgTable("equipment", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuingBody: text("issuing_body").notNull(),
  year: text("year").notNull(),
  imageUrl: text("image_url"), // Optional scan of cert
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Schemas
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertEquipmentSchema = createInsertSchema(equipment).omit({ id: true });
export const insertCertificationSchema = createInsertSchema(certifications).omit({ id: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// Types
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;

export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

export type Equipment = typeof equipment.$inferSelect;
export type InsertEquipment = z.infer<typeof insertEquipmentSchema>;

export type Certification = typeof certifications.$inferSelect;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
