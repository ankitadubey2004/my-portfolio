'use client';

import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Calendar, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <section className="relative py-24 overflow-hidden" id="contact">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-600" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      {/* <div className="absolute h-full w-full bg-slate-900/[0.7]" /> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to bring your vision to life? I&apos;m here to help turn your ideas into reality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Meeting Booking */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-8">
                <div className="text-white mb-6">
                  <Calendar className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-semibold mb-2">Schedule a 1:1 Meeting</h3>
                  <p className="text-slate-300">
                    Let&apos;s discuss your project requirements and explore how I can add value to
                    your team.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-white text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <a href="https://cal.com/yourusername" target="_blank" rel="noopener noreferrer">
                    Book a 15-min Call
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-8">
                <div className="text-white mb-6">
                  <Mail className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                  <p className="text-slate-300">
                    Have a question or proposal? Drop me a message here.
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      {...register('name')}
                      placeholder="Your Name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      {...register('message')}
                      placeholder="Your Message"
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
