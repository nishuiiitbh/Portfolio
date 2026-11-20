
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
  resume_link:
    "https://drive.google.com/file/d/1R8eN4pEOq7pRM3kQ_RTeo0za7z9tvxgw/view?usp=sharing",
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
    link: "mailto:kumarnuiiitbh@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconType: "fas",
    backgroundColor: "#EA4335",
  },
];

// Skills Page
const skills = {
  data: [
    {
      title: "Languages",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Working with C and C++ programming languages",
        "⚡ Writing JavaScript code using modern ES6+ features",
        "⚡ Understanding SQL queries and database operations",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
      ],
    },
    {
      title: "Frontend",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Building responsive user interfaces using React.js",
        "⚡ Developing web pages using HTML5 and CSS3",
        "⚡ Styling applications using Tailwind CSS",
        "⚡ Managing application state using Redux Toolkit",
        "⚡ Implementing responsive web design and REST API integration",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
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
        {
          skillName: "Redux Toolkit",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
      ],
    },
    {
      title: "Backend",
      fileName: "BackendImg",
      skills: [
        "⚡ Building backend applications using Node.js and Express.js",
        "⚡ Developing RESTful APIs",
        "⚡ Working with Mongoose for MongoDB operations",
        "⚡ Implementing JWT-based authentication and authorization",
        "⚡ Developing real-time applications using Socket.io",
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
      ],
    },
    {
      title: "Databases",
      fileName: "DatabaseImg",
      skills: [
        "⚡ Working with MongoDB for database management",
        "⚡ Designing and organizing database structures",
        "⚡ Performing Create, Read, Update and Delete (CRUD) operations",
      ],
      softwareSkills: [
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
      ],
    },
    {
      title: "Cloud and DevOps",
      fileName: "CloudImg",
      skills: [
        "⚡ Managing code repositories using Git",
        "⚡ Collaborating and maintaining projects on GitHub",
        "⚡ Deploying web applications using Render",
      ],
      softwareSkills: [
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
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: { color: "#46E3B7" },
        },
      ],
    },
    {
      title: "Tools and Integrations",
      fileName: "ToolsImg",
      skills: [
        "⚡ Writing and managing code using Visual Studio Code",
        "⚡ Testing APIs using Postman",
        "⚡ Managing media uploads using Cloudinary",
        "⚡ Integrating Firebase services into applications",
      ],
      softwareSkills: [
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "simple-icons:cloudinary",
          style: { color: "#3448C5" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
      ],
    },
   {
  title: "Coding Platforms",
  fileName: "ProgrammingImg",
  skills: [

    "⚡ slved more than 500 DSA problems",
    "⚡ Solved 225+ problems on LeetCode and achieved a maximum contest rating of 1682",
    "⚡ Practiced 175+ coding problems on GeeksforGeeks",
    "⚡ Achieved a 2-Star rating with a maximum rating of 1483 on CodeChef and solved 100+ problems",
  ],

      softwareSkills: [
        {
          skillName: "LeetCode",
          profileLink: "https://leetcode.com/u/nishuiiitbh/",
          style: { color: "#FFA116" },
        },
        {
          skillName: "GeeksforGeeks",
          profileLink: "https://www.geeksforgeeks.org/profile/kumarinisnu7y",
          style: { color: "#2F8D46" },
        },
        {
          skillName: "CodeChef",
          profileLink: "https://www.codechef.com/users/nishu2604",
          style: { color: "#B58A45" },
        },
      ],
    },
    {
      title: "CS Fundamentals",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Data Structures and Algorithms",
        "⚡ Object-Oriented Programming",
        "⚡ Database Management Systems (DBMS)",
        "⚡ Operating System fundamentals",
      ],
      softwareSkills: [],
    },
    {
      title: "Professional Skills",
      fileName: "ProgrammingImg",
      skills: [
        "⚡ Team Collaboration",
        "⚡ Problem Solving",
        "⚡ Leadership",
        "⚡ Mentoring",
        "⚡ Time Management",
      ],
      softwareSkills: [],
    },
  ],
};

// Competitive Programming Profiles (legacy data)
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      profileLink: "https://leetcode.com/u/nishuiiitbh/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      profileLink: "https://www.geeksforgeeks.org/profile/kumarinisnu7y",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      profileLink: "https://www.codechef.com/users/nishu2604",
    },
  ],
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
    postalCode: "813210",
    streetAddress: "Indian Institute of Information Technology Bhagalpur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/",
  },
  phoneSection: {
    title: "Email",
    subtitle: "kumarnuiiitbh@gmail.com",
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
