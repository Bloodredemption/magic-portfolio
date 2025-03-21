import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "EJ Lester",
  lastName: "Pimentel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Web Developer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog", "Cebuano"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about web development, share insights on full-stack technologies, and explore the 
      synergy between design principles and software engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Bloodredemption",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ej-lester-pimentel-73b7b5274/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:pimentelejlester8@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Web Developer</>,
  subline: (
    <>
      I'm EJ Lester, a full-stack web developer dedicated to creating scalable, user-friendly digital solutions. 
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Philippines-based Full-Stack Web Developer passionate about transforming complex challenges into intuitive,
        elegant solutions. With a background in design and a passion for technology, I bring a unique blend of creativity
        and technical expertise to craft digital solutions that not only meet but exceed user expectation and deliver impactful results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2022 - 2024",
        role: "Graphic Designer",
        achievements: [
          <>
            Designed visually appealing logos, social media content, and marketing materials for various clients. 
            Collaborated closely with clients to understand their needs, delivering creative solutions that aligned with their vision.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2023 - 2024",
        role: "Software Developer",
        achievements: [
          <>
            Developed custom software solutions and applications for clients, mainly web development. 
            Collaborated with clients to understand their requirements and deliver efficient, user-friendly solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Lily's Home and Pizza Ventures Inc.",
        timeframe: "2025 - Present",
        role: "Mobile App Developer",
        achievements: [
          <>
            Designed and built a mobile application tailored for the crew, 
            providing a dedicated interface for adding sales reports and viewing analytics.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: <>Proficient in HTML, CSS, JavaScript, Python, PHP, and SQL for building functional and dynamic web applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Database Management",
        description: <>Experienced in MySQL for storing and managing data effectively.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Content Management",
        description: <>Experienced in WordPress for creating and managing websites, including customization and plugin integration.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Version Control",
        description: <>Knowledgeable in Git and GitHub for managing code versions, collaborating, and ensuring project stability.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Graphic Design",
        description: <>Experienced with Adobe Photoshop, Illustrator, Figma, and Canva for creating engaging graphics, branding, and layouts.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Debugging & Testing",
        description: <>Ability to debug issues and test code for reliable application performance.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
