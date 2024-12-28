import { motion } from 'framer-motion';

interface ExperienceProps {
    title: string;
    company: string;
    duration: string;
    description: string;
}

const Experience = ({ title, company, duration, description }: ExperienceProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-500">{company}</p>
    <span className="text-gray-400">{duration}</span>
    <p>{description}</p>
  </motion.div>
);


export default Experience;