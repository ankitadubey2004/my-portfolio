'use client';

import React, { useState, useMemo } from 'react';
import { Calendar, Mail, Send, ArrowRight, PhoneCall, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Generate stable positions for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      left: `${(i * 37 + 7) % 100}%`,
      top: `${(i * 23 + 5) % 100}%`,
      delay: `${(i * 0.7) % 5}s`
    }));
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowSuccess(true);
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section
      className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      id="contact"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute inset-0">
        {floatingElements.map((pos, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 bg-blue-500 rounded-full animate-floating"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: pos.delay,
              opacity: 0.15,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            Let&apos;s Create Something
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Extraordinary
            </span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Ready to transform your ideas into reality? I&apos;m just one message away from helping
            you build your next amazing project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Enhanced Quick Contact Cards */}
          <div className="space-y-6">
            {[
              {
                icon: PhoneCall,
                title: 'Schedule a Call',
                description: 'Book a 15-minute discovery call',
                action: 'Book Now',
                href: 'https://cal.com/awesome_v0/15min',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:scale-[1.001] transition-all duration-300 bg-white/5 backdrop-blur-lg border-0 relative overflow-hidden hover:border-blue-400 hover:border-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
                <CardContent className="p-8">
                  <item.icon className="h-8 w-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 mb-4">{item.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group-hover:translate-x-2 transition-transform duration-300 text-blue-400 hover:text-blue-300 hover:bg-transparent p-0"
                  >
                    <Link href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.action} <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Contact Form */}
          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-xl border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your Name"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 h-12 transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={formState.email}
                      onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 h-12 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white h-12 text-lg transition-all duration-300 relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                    </div>
                  ) : (
                    <span className="flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </form>

              {showSuccess && (
                <Alert className="mt-6 bg-green-500/20 text-green-300 border-green-500/50">
                  <AlertDescription>
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
