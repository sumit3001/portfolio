import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sumit",
  lastName: "Vishwakarma",
  name: `Sumit Vishwakarma`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpeg",
  email: "sumit30003@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let’s Work Together</>,
  description: <>Have a project in mind or want to collaborate? Feel free to reach out.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sumit3001",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://in.linkedin.com/in/prosumit",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sumit____.30",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into scalable Web and Mobile Applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        {/* <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" /> */}
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.name}, A Full-Stack JavaScript Developer specializing in{" "}
      <Text as="span" size="xl" weight="strong">React, React Native, NextJs and NodeJs</Text>.
      I build scalable Web and Mobile Applications and enjoy creating performant, real-time products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
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
        Software engineer focused on React, React Native, NextJs and Node.js, experienced in building performant web/mobile apps and real-time systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Qualwebs",
        timeframe: "August 2023 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained scalable web and mobile applications using <strong>React, React Native, and Node.js</strong>.
          </>,
          <>
            Built and integrated <strong>RESTful APIs</strong> and backend services, improving data flow and application performance.
          </>,
          <>
            Implemented features such as real-time updates, form management, and optimized UI components to enhance <strong>user experience and responsiveness</strong>.
          </>,
          <>
            Collaborated with designers and product teams to deliver new features, <strong>optimize performance</strong>, and maintain <strong>clean, maintainable code</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "AveryBit Solutions",
        timeframe: "May 2022 - August 2023",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained web applications using <strong>React and Node.js</strong>, focusing on scalable architecture and reusable components.
          </>,
          <>
            Built responsive UI components and integrated APIs to deliver <strong>dynamic and user-friendly interfaces</strong>.
          </>,
          <>
            Worked closely with the development team to debug issues, improve performance, and ensure <strong>reliable application functionality</strong>.
          </>,
          <>
            Contributed to feature development, code reviews, and version control workflows using <strong>Git and modern development practices</strong>.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Chameli Devi Group of Institutions",
        description: <>Bachelor of Technology (B.Tech) in Information Technology.</>,
      },
      {
        name: "IATV Educational Academy",
        description: <>Higher Secondary Education.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>Building responsive and performant web applications using React and Next.js.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>Developing scalable server-side logic and robust APIs using Node.js.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [],
      },
      {
        title: "Mobile",
        description: (
          <>Creating cross-platform mobile applications for iOS and Android with React Native.</>
        ),
        tags: [
          {
            name: "React Native",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Desktop",
        description: (
          <>Building cross-platform desktop applications using Electron and web technologies.</>
        ),
        tags: [
          {
            name: "Electron",
            icon: "electron",
          },
        ],
        images: [],
      },
      {
        title: "Database",
        description: (
          <>Managing and optimizing relational databases for data integrity and performance.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
