import certificates from './certificates';

const portfolioData = {
  personal: {
    name: 'Shamanth S. Kumbar',
    title: 'UI/UX Designer, Python & AI Intern, and Computer Science and Design Student',
    intro:
      'I create intuitive digital experiences with a strong focus on UI design, UX principles, prototyping, and AI-driven problem solving. I enjoy blending clean interfaces with practical engineering to build products that are usable, thoughtful, and visually polished.',
    email: 'shamanthskumbar@gmail.com',
    phone: '+91 63638 68655',
    location: 'Shivamogga, Karnataka',
    socials: [
      { label: 'Email', url: 'mailto:shamanthskumbar@gmail.com' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shamanth-s-kumbar/' },
      { label: 'Phone', url: 'tel:+916363868655' },
    ],
  },
  about: {
    bio: 'I am a creative and detail-oriented Computer Science and Design student with a strong foundation in UI design, UX principles, prototyping in Figma, and applied AI concepts. I am passionate about designing user-centered digital experiences that improve usability and engagement while continuing to grow in collaborative, fast-paced environments.',
    highlights: [
      'Strong grounding in interface design, user experience thinking, and rapid prototyping.',
      'Hands-on exposure to Python, machine learning models, and deep learning workflows.',
      'Enjoys creating practical and visually clean solutions for real-world user problems.',
    ],
  },
  skills: [
    {
      category: 'Design',
      items: [
        'Figma',
        'UI Design',
        'UX Principles',
        'Prototyping',
        'Canva',
        'User-Centered Design',
      ],
    },
    {
      category: 'Development',
      items: [
        'Python',
        'HTML',
        'CSS',
        'React',
        'SQLite',
        'MongoDB',
        'MySQL',
      ],
    },
    {
      category: 'AI & Collaboration',
      items: [
        'Machine Learning',
        'Deep Learning',
        'Data Preprocessing',
        'Team Collaboration',
        'Leadership',
        'Time Management',
      ],
    },
  ],
  projects: [
    {
      title: 'Breast Cancer Detection System',
      year: '2025',
      description:
        'Developed a CNN-based deep learning system in Python to classify medical X-ray images as malignant, benign, or normal. Worked on preprocessing, feature extraction, model training, and improving detection accuracy.',
      tech: ['Python', 'CNN', 'Deep Learning', 'Medical Imaging'],
      link: '#',
    },
    {
      title: 'KalaKriti - A Collaborative Platform for Creatives',
      year: '2024',
      description:
        'Built a full-stack platform for artist collaboration with frontend development in React and backend development in Python with SQLite. Implemented authentication, profile management, and project posting features.',
      tech: ['React', 'Python', 'SQLite', 'Authentication'],
      link: '#',
    },
  ],
  education: [
    {
      title: 'B.E. in Computer Science and Design',
      institution: 'PES Institute of Technology and Management, Shivamogga',
      period: '2022 - 2026',
      details:
        'Pursuing an engineering degree with a blend of computing, design, and practical product development skills.',
    },
    {
      title: 'Class XII',
      institution: 'Gangothri PU College, Shivamogga',
      period: '2020 - 2022',
      details:
        'Completed higher secondary education before moving into Computer Science and Design engineering.',
    },
  ],
  experience: [
    {
      title: 'Python & AI Intern',
      institution: 'Contriver, Yelahanka, Bangalore',
      period: '4 Months (Ongoing)',
      details:
        'Worked on Python and Artificial Intelligence concepts for developing machine learning models, including data preprocessing, model evaluation, and applied deep learning to improve real-world solution performance.',
    },
  ],
  certificates: certificates,
  achievements: [
    'NPTEL Certification on Cloud Computing from IIT Kanpur',
    'Deloitte Job Simulation Certificate in Technology, Data Analytics, and Cybersecurity',
    'Built portfolio projects across UI/UX, AI, and full-stack web development',
  ],
  contact: {
    headline: "Let's design digital experiences that are useful, intuitive, and impactful.",
    subtext:
      "I'm open to internships, UI/UX opportunities, collaborative product work, and conversations around AI, design, and practical web experiences.",
  },
};

export default portfolioData;
