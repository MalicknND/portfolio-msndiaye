"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: t("contact.validation.nameMin") })
      .max(100, { message: t("contact.validation.nameMax") }),
    email: z
      .string()
      .trim()
      .email({ message: t("contact.validation.emailInvalid") })
      .max(255, { message: t("contact.validation.emailMax") }),
    subject: z
      .string()
      .trim()
      .min(3, { message: t("contact.validation.subjectMin") })
      .max(200, { message: t("contact.validation.subjectMax") }),
    message: z
      .string()
      .trim()
      .min(10, { message: t("contact.validation.messageMin") })
      .max(2000, { message: t("contact.validation.messageMax") }),
  });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();

  const contactSchema = useMemo(() => createContactSchema(t), [t]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://api.msndiaye.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          website: "", // honeypot field
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: t("contact.success"),
        description: t("contact.successDesc"),
      });

      setTimeout(() => {
        form.reset();
      }, 3000);
    } catch {
      toast({
        title: t("contact.error"),
        description: t("contact.errorDesc"),
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-32 lg:py-40 relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-primary font-medium mb-6 text-sm tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="w-12 h-[2px] bg-primary rounded-full" />
            {t("contact.label")}
            <span className="w-12 h-[2px] bg-primary rounded-full" />
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display">
            {t("contact.title1")} <span className="gradient-text">{t("contact.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 font-display">{t("nav.getInTouch")}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card-strong rounded-xl border-gradient">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("contact.email")}</p>
                  <a
                    href="mailto:ndiayemalicksiguy@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ndiayemalicksiguy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card-strong rounded-xl border-gradient">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("contact.phone")}</p>
                  <a
                    href="tel:+33766731263"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +33 7 66 73 12 63
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card-strong rounded-xl border-gradient">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t("contact.location")}</p>
                  <p className="text-muted-foreground">{t("contact.locationValue")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.namePlaceholder")}
                            className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl"
                            {...field}
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
                        <FormLabel>{t("contact.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("contact.emailPlaceholder")}
                            className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.subject")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("contact.subjectPlaceholder")}
                          className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl"
                          {...field}
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
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("contact.messagePlaceholder")}
                          rows={5}
                          className="bg-secondary/50 border-border focus:border-primary resize-none rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting || isSubmitSuccessful}
                  className="w-full gap-2"
                >
                  {isSubmitSuccessful ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      {t("contact.success")}
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("contact.send")}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
