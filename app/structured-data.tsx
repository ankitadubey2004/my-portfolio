export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhinandan',
    url: 'https://abhinandan.pro',
    sameAs: [
      'https://github.com/awesome-pro',
      'https://linkedin.com/in/abhinandan-verma',
      'https://twitter.com/awesome_v0',
      'mailto:abhinadnanverma551@gmail.com',
    ],
    jobTitle: 'Senior Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'React',
      'TypeScript',
      'System Design',
      'Cloud Architecture',
      'Enterprise Solutions',
      'CRM Development',
      'Full Stack Development',
      'Kubernetes',
      'Docker',
      'AWS',
      'DevOps',
    ],
    description:
      'Senior Software Engineer specializing in Next.js, FastAPI, and Cloud Infrastructure. Expert in building scalable, high-performance web applications.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
