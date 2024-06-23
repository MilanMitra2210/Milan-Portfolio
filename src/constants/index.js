import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  i75way,
  carrent,
  jobit,
  tripguide,
  bhramaand,
  freelancer,
  angular,
  bootstrap,
  java,
  mysql,
  postgresql,
  express,
  vscode
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "MEAN Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git & Github",
    icon: git,
  },
  {
    name: "VS Code",
    icon: vscode,
  }
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Freelance Developer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "As a freelancer, I have completed 25+ projects across various technologies.",
      "HTML5, CSS3, and JavaScript: Developed responsive and interactive web applications with modern UI/UX designs.",
      "React: Built dynamic and high-performance single-page applications (SPAs).",
      "Node.js and Express.js: Created robust back-end systems and RESTful APIs for scalable web applications.",
      "Laravel and Vue.js: Developed full-stack applications with seamless front-end and back-end integration.",
      "Python, Django, and Flask: Implemented secure and efficient web applications and services.",
      "Java Swing and JavaFX: Created desktop applications with intuitive user interfaces.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Bhramaand",
    icon: bhramaand,
    iconBg: "#383E56",
    date: "Jan 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "As a web development intern, I led the creation of the 'About' section and gained expertise in hosting. Additionally, I learned ReactJS, building dynamic user interfaces and improving the company’s web platform.",
      "Collaborated with the team on the design, development, and integration of APIs.",
      "Worked on API integration, designing, and creating new components using ReactJS and React Styled Components.",
      "Participating in code reviews, providing constructive feedback, and promoting best practices within the development team.",
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "75way Technologies",
    icon: i75way,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Developing and maintaining web applications using Angular, Ngrx, and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility across all projects",
      "Participating in code reviews, providing constructive feedback, and promoting best practices within the development team.",
      "Leading development efforts on two of the company's largest live projects, ensuring timely delivery and high performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Milan put in a lot of effort to meet my required project needs and was successful in delivery. He communicated with me all the time and was very professional with the project's requirements.",
    name: "Maria M.",
    designation: "Client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Milan does.",
    name: "Anonymous",
    designation: "Client",
    company: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  }
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "s a creative problem-solver, I love turning complex challenges into elegant solutions. Whether it's building captivating front-end interfaces or robust back-end systems, I'm driven to deliver excellence at every step. I embrace continuous learning, always exploring the latest technologies to create cutting-edge solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Blogging website",
    description:
      "s a creative problem-solver, I love turning complex challenges into elegant solutions. Whether it's building captivating front-end interfaces or robust back-end systems, I'm driven to deliver excellence at every step. I embrace continuous learning, always exploring the latest technologies to create cutting-edge solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Expense Tracker",
    description:
      "s a creative problem-solver, I love turning complex challenges into elegant solutions. Whether it's building captivating front-end interfaces or robust back-end systems, I'm driven to deliver excellence at every step. I embrace continuous learning, always exploring the latest technologies to create cutting-edge solutions..",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
