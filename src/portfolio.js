const settings = {
  isSplash: false,
};
const seo = {
  title: "Nishu Kumari | Software Engineer",
  description:
    "Nishu Kumari - ECE student at IIIT Bhagalpur, Full Stack Developer, and problem solver.",
  og: {
    title: "Nishu Kumari | Software Engineer",
    type: "website",
    url: "https://github.com/nishuiiitbh",
  },
};

// Home Page
const greeting = {
  title: "Nishu Kumari",
  logo_name: "NishuKumari",
  subTitle:
    "Electronics and Communication Engineering student at IIIT Bhagalpur, passionate about building full-stack applications, scalable web solutions, and solving problems through technology.",
  resume_link: "https://drive.google.com/file/d/1R8eN4pEOq7pRM3kQ_RTeo0za7z9tvxgw/view?usp=sharing",
  portfolio_repository: "",
  githubProfile: "https://github.com/nishuiiitbh",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nishu-kumari-360144300",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/nishuiiitbh",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:kumarnishuiiitbh@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconType: "fas",
    backgroundColor: "#EA4335",
  },
];

// Skills Page
const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Building responsive and interactive web applications using React.js",
        "⚡ Developing user interfaces using HTML5, CSS3 and JavaScript",
        "⚡ Creating reusable components and managing application state",
        "⚡ Working with Tailwind CSS and Redux Toolkit",
        "⚡ Integrating REST APIs with frontend applications",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
      ],
    },

    {
      title: "Backend Development",
      fileName: "BackendImg",
      skills: [
        "⚡ Building RESTful APIs using Node.js and Express.js",
        "⚡ Implementing JWT-based authentication and authorization",
        "⚡ Working with MongoDB and Mongoose for database management",
        "⚡ Developing real-time applications using Socket.io",
        "⚡ Handling image uploads using Cloudinary and Multer",
        "⚡ Integrating Firebase authentication and third-party services",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#888888" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: { color: "#010101" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
      ],
    },

    {
      title: "Programming & Computer Science",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Solving Data Structures and Algorithms problems using C++",
        "⚡ Strong understanding of Object-Oriented Programming",
        "⚡ Working with C, C++, Python and JavaScript",
        "⚡ Understanding DBMS and Operating System fundamentals",
        "⚡ Practicing competitive programming and problem solving",
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: { color: "#A8B9CC" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
      ],
    },
  ],
};

// Competitive Programming Profiles
const competitiveSites = {
  competitiveSites: [],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology, Bhagalpur",
      subtitle: "B.Tech in Electronics and Communication Engineering",
      logo_path:
        "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
      alt_name: "IIIT Bhagalpur",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Pursuing B.Tech in Electronics and Communication Engineering",
        "⚡ CGPA: 7.77/10",
        "⚡ Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, DBMS and Operating Systems",
        "⚡ Solved 500+ problems across LeetCode, GeeksforGeeks and CodeChef",
        "⚡ Smart India Hackathon 2024: Ranked 11th in internal round among 50+ teams",
      ],
      website_link: "https://www.iiitbh.ac.in",
    },
  ],
};

// Certifications & Achievements
const certifications = {
  certifications: [
    {
      title: "Flipkart GRID 8.0",
      subtitle: "- Semifinalist",
      logo_path: "flipkart.webp",
      alt_name: "Flipkart",
      color_code: "#2874F0",
    },
    {
      title: "Certified System Administrator",
      subtitle: "- ServiceNow CSA",
      logo_path: "service.png",
      alt_name: "ServiceNow",
      color_code: "#05505E",
    },
    {
      title: "Certified Application Developer",
      subtitle: "- ServiceNow CAD",
      logo_path: "service.png",
      alt_name: "ServiceNow",
      color_code: "#05505E",
    },
  ],
};

// Experience / Leadership Page
const experience = {
  title: "Experience",
  subtitle: "Leadership & Responsibilities",
  description:
    "I enjoy collaborating with people, sharing technical knowledge, and helping students grow through mentorship and guidance.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Positions of Responsibility",
      work: true,
      experiences: [
        {
          title: "PYC Mentor",
          company: "IIIT Bhagalpur",
          company_url: "https://www.iiitbh.ac.in",
          logo_path:
            "Indian_Institute_of_Information_Technology,_Bhagalpur_logo.png",
          duration: "2024 - Present",
          location: "Bhagalpur, Bihar",
          description:
            "Mentored 15+ first-year students on programming fundamentals, academic planning, placement preparation and career development through regular progress discussions.",
          color: "#1F8ACB",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of full-stack applications built to solve practical problems using modern web technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Projects",
  description:
    "Explore my projects in full-stack development, real-time communication and e-commerce.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: 1,
      name: "Talkify",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "A full-stack real-time chat application built using the MERN stack and Socket.io. Features include one-to-one messaging, user search, conversation management, online presence and message deletion. Includes secure JWT authentication, protected routes, REST APIs, Redux Toolkit for state management and Cloudinary integration for media uploads.",
      url: "https://github.com/nishuiiitbh/Talkify",
      languages: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Redux Toolkit",
        "JWT",
        "Cloudinary",
      ],
    },
    {
      id: 2,
      name: "Zenvia",
      createdAt: "2026-01-01T00:00:00Z",
      description:
        "A voice-enabled full-stack e-commerce platform built using React.js, Node.js, Express.js and MongoDB. Includes customer and admin panels, product catalog, shopping cart, checkout, order management, inventory dashboard, JWT authentication, Firebase Google authentication and Razorpay payment integration.",
      url: "https://github.com/nishuiiitbh/Zenvia",
      languages: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Firebase",
        "Razorpay",
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect",
    profile_image_path: "Nishu.jpeg",
    description:
      "I'm always open to discussing software development, full-stack development, problem solving and interesting technical projects. Feel free to connect with me through LinkedIn or GitHub.",
  },

  addressSection: {
    title: "Location",
    subtitle: "IIIT Bhagalpur",
    locality: "Bhagalpur",
    country: "India",
    region: "Bihar",
    postalCode: "812007",
    streetAddress: "Indian Institute of Information Technology Bhagalpur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },

  phoneSection: {
    title: "Email",
    subtitle: "kumarnishuiiitbh@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
