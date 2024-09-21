
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";



import kpsp from "../assets/academics/kpsp.jpg";
import mmm from "../assets/academics/mmm.jpg";
import pvpit from "../assets/academics/pvpit.jpg";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With a year of hands-on experience in freelance development, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Django, MySQL, PostgreSQL, etc. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, Django. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies and bug hunting.`;

export const EXPERIENCES = [
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
    grade: "7.5+ CGPA"
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
