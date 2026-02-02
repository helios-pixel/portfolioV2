
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";



import kpsp from "../assets/academics/kpsp.jpg";
import mmm from "../assets/academics/mmm.jpg";
import pvpit from "../assets/academics/pvpit.jpg";


export const HERO_CONTENT = `Computer Science graduate working at the intersection of AI quality, prompt engineering, and development - focused on building reliable, production-ready systems that actually work in the real world.`;

export const ABOUT_TEXT = `I’m a Computer Science graduate currently working as a Junior Associate Executive – Prompt Engineering at ZENSAR Technologies while being vendored to NVIDIA. My work revolves around evaluating, refining, and improving AI systems at scale, where accuracy, reliability, and clear communication matter just as much as code.
I’ve handled 8,000+ multimodal AI tasks spanning image understanding, spatial reasoning, and VQA, while maintaining 98%+ quality accuracy under strict SLAs. Beyond validation, I actively investigate failure patterns, perform root-cause analysis, and provide actionable feedback to engineering teams to improve model behavior before production deployment.
Alongside AI quality and prompt engineering, I enjoy building real products.`;

export const EXPERIENCES = [
  {
    year: "October 2024 - Present",
    role: "Junior associate, AI prompt analyst and QA",
    company: "Zensar Technologies",
    
  },
  {
    year: "Feb 2023 - March 2024",
    role: "Software Developer and Designer",
    company: "Freelance",
    
  },
  {
    year: "Oct 2022 - Dec 2022",
    role: "Web Development Intern",
    company: "Business Web Solutions",
    
  },
  
];

export const ACADEMICS = [
  {
    year: "2020 - 2024",
    college: "Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon",
    course: "Bachelor of Technology in Computer Science and Engineering",
    logo: pvpit,
    grade: "8.23 CGPA"
  },
  {
    year: "2020",
    college: "Miraj Mahavidhyalaya, Miraj",
    course: "HSC, 12th",
    logo: mmm,
    grade: "78.46%"
  },
  {
    year: "2018",
    college: "Shri Kantilal Purshottamdas Shah Prashala, Vishrambaugh, Sangli",
    course: "SSC, 10th",
    logo: kpsp,
    grade: "85.80%"
  }

];

export const PROJECTS = [
  {
    title: "Let It Out",
    image: project1,
    description:
      "An AI powered chatbot that acted as a venting companion for people in need. This chatbot was made using the OpenAI API and gpt4 LLM. It brought in over 2100+ unique users and handled 80+ concurrent users at peak times in its lifetime of 3 months",
    technologies: ["React.js", "Tailwind CSS", "OpenAI API"],
  },
  {
    title: "College Management System",
    image: project2,
    description:
      "A platform with basic functionalities for a college staff and student management system, with 3 users i.e. admin, staff and student.",
    technologies: ["HTML", "CSS", "Django", "SQLite"],
  },
  {
    title: "BookEat- a Restaurant Pre-order to dine ",
    image: project3,
    description:
      "A fully-fledged application that allows users to sign up, verify their identity using two-factor authentication (2FA), and order food for dining in at a restaurant. The app aims to minimize wait times by facilitating efficient ordering and payment processes.",
    technologies: ["HTML", "CSS", "Bootstrap", "Django", "PostgreSQL", "Twillio 2FA API", "RazorPay API"],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Bootstrap", "Tailwind CSS"],
  },
  
];

export const CONTACT = {
  email: "pravintiwade@outlook.com",
  discord: "oreowithwings"
};
