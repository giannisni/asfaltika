import { useQuery, useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Services
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
    },
  });
}

// Products
export function useProducts() {
  return useQuery({
    queryKey: [api.products.list.path],
    queryFn: async () => {
      const res = await fetch(api.products.list.path);
      if (!res.ok) throw new Error("Failed to fetch products");
      return api.products.list.responses[200].parse(await res.json());
    },
  });
}

// Projects
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      const res = await fetch(api.projects.list.path);
      if (!res.ok) throw new Error("Failed to fetch projects");
      return api.projects.list.responses[200].parse(await res.json());
    },
  });
}

// Equipment
export function useEquipment() {
  return useQuery({
    queryKey: [api.equipment.list.path],
    queryFn: async () => {
      const res = await fetch(api.equipment.list.path);
      if (!res.ok) throw new Error("Failed to fetch equipment");
      return api.equipment.list.responses[200].parse(await res.json());
    },
  });
}

// Certifications
export function useCertifications() {
  return useQuery({
    queryKey: [api.certifications.list.path],
    queryFn: async () => {
      const res = await fetch(api.certifications.list.path);
      if (!res.ok) throw new Error("Failed to fetch certifications");
      return api.certifications.list.responses[200].parse(await res.json());
    },
  });
}

// Contact Form Mutation
export function useSubmitContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.submit.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit message");
      }
      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
