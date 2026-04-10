import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  services,
  products,
  projects,
  equipment,
  certifications,
} from "@/data/content";
import type { ContactMessage } from "@/data/types";

// Web3Forms public access key - replace with your own from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

// Static data hooks - no network calls, instant return.
// Kept as hooks so page components don't need to change.
export function useServices() {
  return { data: services, isLoading: false };
}

export function useProducts() {
  return { data: products, isLoading: false };
}

export function useProjects() {
  return { data: projects, isLoading: false };
}

export function useEquipment() {
  return { data: equipment, isLoading: false };
}

export function useCertifications() {
  return { data: certifications, isLoading: false };
}

// Contact form — posts to Web3Forms (no backend needed)
export function useSubmitContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: ContactMessage) => {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          from_name: "Paschalidis Website",
        }),
      });

      const result = await res.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to submit message");
      }
      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We will get back to you shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
