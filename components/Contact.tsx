'use client'

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, } from 'react-icons/fa';

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

  const onSubmit = async () => {
    // 
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <section id="contact" className="px-4 py-16 lg:px-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row items-center justify-center mx-auto"
      >
        <div className="w-full px-4 items-start flex flex-col">
        <h2 className="text-4xl font-bold mb-8 text-primary">In the Need of a Developer/Engineer?</h2>
        <p className="mb-8 text-text text-lg">
         Feel free to reach out for collaborations, project discussions, or just to say hi! 😊
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://linkedin.com/in/abhinandan-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/60 text-3xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/awesome_v0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/60 text-3xl transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/awesome-pro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/60 text-3xl transition"
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

        </div>
        {/* Contact Form */}
        <div className='w-full p-2 '>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-4 lg:p-6 bg-secondary rounded-lg shadow-lg space-y-6"
        >
          <div>
            <Input
              {...register('name')}
              placeholder="Your Name"
              className="w-full border-gray-400"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <Input
              {...register('email')}
              placeholder="Your Email"
              type="email"
              className="w-full border-gray-400"
              
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <Textarea
              {...register('message')}
              placeholder="Your Message"
              className="w-full border-gray-400"
              
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-accent">
            Send Message
          </Button>
        </form>
        </div>

        {/* Additional Contact Info */}
       
      </motion.div>
    </section>
  );
};

export default Contact;
