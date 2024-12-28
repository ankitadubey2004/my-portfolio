'use client'

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

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
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // 
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <section id="contact" className="py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-primary">In the Need of a Develoeper/Designer/Engineer?</h2>
        <p className="mb-8 text-text text-lg">
         Feel free to reach out for collaborations, project discussions, or just to say hi! 😊
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent text-3xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent text-3xl transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent text-3xl transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Booking Link */}
        <div className="mb-12">
          <a
            href="https://cal.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-accent transition"
          >
            Book a Meeting with Me
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-secondary p-6 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <Input
              {...register('name')}
              placeholder="Your Name"
              className="w-full"
              error={errors.name?.message}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Input
              {...register('email')}
              placeholder="Your Email"
              type="email"
              className="w-full"
              error={errors.email?.message}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea
              {...register('message')}
              placeholder="Your Message"
              className="w-full"
              error={errors.message?.message}
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-accent">
            Send Message
          </Button>
        </form>

        {/* Additional Contact Info */}
        <div className="mt-12 space-y-4 text-text">
          <p className="flex items-center justify-center space-x-2">
            <FaEnvelope /> <span>youremail@example.com</span>
          </p>
          <p className="flex items-center justify-center space-x-2">
            <FaPhone /> <span>+1 (123) 456-7890</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
