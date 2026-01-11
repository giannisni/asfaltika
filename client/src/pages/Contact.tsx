import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertContactMessageSchema,
  type InsertContactMessage,
} from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-content";
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

export default function Contact() {
  const { mutate, isPending } = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
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
    <div className="min-h-screen bg-white">
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch for quotes, inquiries, or partnerships
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <SectionHeader title="Send a Message" className="mb-8" />
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
                      <FormLabel className="text-secondary font-bold uppercase text-xs tracking-wider">
                        Full Name
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
                      <FormLabel className="text-secondary font-bold uppercase text-xs tracking-wider">
                        Email Address
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
                      <FormLabel className="text-secondary font-bold uppercase text-xs tracking-wider">
                        Subject
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
                      <FormLabel className="text-secondary font-bold uppercase text-xs tracking-wider">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project..."
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
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase py-6 rounded-sm shadow-lg tracking-wide"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="bg-secondary text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl" />

            <h3 className="font-display text-2xl font-bold uppercase mb-8 border-b border-white/10 pb-4">
              Corporate Office
            </h3>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">
                    Address
                  </h4>
                  <p className="text-lg">
                    123 XARILAOU,
                    <br />
                    Industrial Zone, Thessaloniki, Greece
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">
                    Phone
                  </h4>
                  <p className="text-lg">+30 2310 0000000</p>
                  <p className="text-lg">+30 2310 0000000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">
                    Email
                  </h4>
                  <p className="text-lg">info@yannos.gr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-sm">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">
                    Hours
                  </h4>
                  <p className="text-lg">Mon-Fri: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
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
