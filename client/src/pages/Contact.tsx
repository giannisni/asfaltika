import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitContact } from "@/hooks/use-content";
import type { ContactMessage } from "@/data/types";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type InsertContactMessage = ContactMessage;
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();
  const { t } = useLanguage();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-[#f0eee9]">
      <div className="bg-[#2a2d3a] pt-32 pb-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title={t("contact.sendMessage")} className="mb-8" />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-bold text-xs tracking-wider">
                        {t("contact.fullName")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary rounded-sm py-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-bold text-xs tracking-wider">
                        {t("contact.email")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          {...field}
                          className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary rounded-sm py-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-bold text-xs tracking-wider">
                        {t("contact.subject")}
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Project Inquiry"
                          {...field}
                          className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary rounded-sm py-6"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-bold text-xs tracking-wider">
                        {t("contact.message")}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.messagePlaceholder")}
                          className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary rounded-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-sm shadow-lg tracking-wide"
                >
                  {isPending ? t("contact.sending") : t("contact.send")}
                </Button>
              </form>
            </Form>
          </div>

          <div className="bg-[#2a2d3a] text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl" />

            <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">
              {t("contact.office")}
            </h3>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider text-gray-400 mb-1">
                    {t("contact.address")}
                  </h4>
                  <p className="text-lg">
                    Περγάμου 5,
                    <br />
                    Αθήνα 171 21
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider text-gray-400 mb-1">
                    {t("contact.phone")}
                  </h4>
                  <p className="text-lg">+30 210 932 7755</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider text-gray-400 mb-1">
                    Email
                  </h4>
                  <p className="text-lg">info@paschalidis.gr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider text-gray-400 mb-1">
                    {t("contact.hours")}
                  </h4>
                  <p className="text-lg">{t("contact.workingHours")}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-48 bg-gray-700/50 rounded-sm w-full flex items-center justify-center border border-white/10">
              <span className="text-gray-400 text-sm font-mono">
                [ Interactive Map Component ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
