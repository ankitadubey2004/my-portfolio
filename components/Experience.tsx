"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  position: string
  company: string
  period: string
  description: string[]
  skills: string[]
  images: string[]
  proofLink?: string
}

const experiences: ExperienceItem[] = [
  {
    position: "Software Engineer",
    company: "Caresept",
    period: "Jan 2023 - Present",
    description: [
      "Developed and maintained CRM solutions for healthcare providers",
      "Implemented real-time data synchronization between mobile and web platforms",
      "Optimized database queries, resulting in a 40% improvement in application performance"
    ],
    skills: ["Next.js", "React", "TypeScript", "PostgreSQL", "GraphQL"],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    proofLink: "https://example.com/caresept-proof"
  },
  {
    position: "Freelance Software Engineer",
    company: "AvenCRM",
    period: "Sep 2022 - Dec 2022",
    description: [
      "Designed and implemented custom CRM features for small businesses",
      "Created data visualization dashboards using D3.js",
      "Integrated third-party APIs for enhanced functionality"
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "D3.js"],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    proofLink: "https://example.com/avencrm-proof"
  },
  {
    position: "Open Source Contributor",
    company: "NextUI",
    period: "Jun 2022 - Present",
    description: [
      "Contributed to the development of reusable UI components",
      "Improved accessibility features across the component library",
      "Wrote comprehensive documentation and usage examples"
    ],
    skills: ["React", "TypeScript", "Storybook", "Jest"],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    proofLink: "https://github.com/nextui-org/nextui/pulls?q=is%3Apr+author%3AYourGitHubUsername"
  },
  {
    position: "Software Development Intern",
    company: "SkilledUp",
    period: "Jan 2022 - May 2022",
    description: [
      "Assisted in the development of a learning management system",
      "Implemented user authentication and authorization features",
      "Conducted code reviews and participated in agile development processes"
    ],
    skills: ["Python", "Django", "JavaScript", "PostgreSQL"],
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    proofLink: "https://example.com/skilledup-internship-certificate"
  }
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  )
}

const TimelineItem: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={ref} className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="order-1 bg-gray-400 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4"
      >
        <Card>
          <CardHeader>
            <CardTitle>{experience.position}</CardTitle>
            <CardDescription>{experience.company} | {experience.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              {experience.description.map((item, i) => (
                <li key={i} className="mb-2">{item}</li>
              ))}
            </ul>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <Carousel images={experience.images} />
            {experience.proofLink && (
              <Link href={experience.proofLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Proof of Work
              </Link>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image src={src} alt={`Work sample ${index + 1}`} layout="fill" objectFit="cover" />
        </motion.div>
      ))}
    </div>
  )
}

export default Experience

