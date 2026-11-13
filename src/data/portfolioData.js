export const personalInfo = {
  name: "Tamilarasan",
  role: "MERN Full-Stack Developer",
  statusBadge: "Fresher / Entry-Level",
  subTitle: "Entry-Level MERN Developer | React, Node.js, Express & MongoDB (Fresher)",
  bio: "Motivated entry-level MERN Full-Stack Developer holding a B.E. in Computer Science & Engineering. Passionate about developing modern, responsive web applications using React, building RESTful backend APIs with Node.js and Express, and integrating foundational MongoDB databases. Eager to launch my software development career and contribute to dynamic engineering teams.",
  email: "tamilea0117@gmail.com",
  phone: "+91 9360472039",
  altPhone: "+91 8220680013",
  address: "No.11/154, L.V. Nagar, Balakrishnapuram, Gummidipoondi, Thiruvallur (Dist) - 601201, Tamil Nadu, India",
  profileImage: "/images/personal.jpg",
  resumeUrl: "#",
  stats: [
    { label: "Developer Level", value: "Fresher" },
    { label: "MERN Projects", value: "2+" },
    { label: "Availability", value: "Immediate" },
    { label: "Work Ethic", value: "100%" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/919360472039",
    facebook: "https://facebook.com"
  }
};

export const skillsData = {
  frontend: [
    { name: "React.js", tag: "Core Library", desc: "Component architecture, hooks, state management & reusable UI elements" },
    { name: "JavaScript (ES6+)", tag: "Language", desc: "Arrow functions, promises, async/await, array methods & DOM interaction" },
    { name: "HTML5 & Semantic Markup", tag: "Fundamentals", desc: "Clean semantic markup, forms, accessibility & responsive layout tags" },
    { name: "CSS3 & Modern Styling", tag: "Styling", desc: "Flexbox, CSS Grid, media queries, animations & modern design" },
    { name: "Tailwind CSS", tag: "Utility Framework", desc: "Utility-first responsive UI styling, gradients & theme customization" },
    { name: "Bootstrap 5", tag: "CSS Framework", desc: "Responsive layout grids, navbar, cards & mobile-friendly utilities" },
    { name: "Redux / Context API", tag: "State Management", desc: "Global state sharing, predictable data updates & clean component props" },
    { name: "Responsive Web Design", tag: "UI/UX", desc: "Mobile-first development, touch-friendly layouts & cross-device compatibility" }
  ],
  backend: [
    { name: "Node.js", tag: "Runtime Environment", desc: "Server-side JavaScript runtime for asynchronous backend operations" },
    { name: "Express.js", tag: "Web Framework", desc: "REST API routes, HTTP request handling, middleware setup & JSON responses" },
    { name: "RESTful API Architecture", tag: "API Design", desc: "Standard GET, POST, PUT, DELETE endpoints with clear status codes" },
    { name: "JWT Authentication & Security", tag: "Auth & Security", desc: "JSON Web Tokens, user login flows, password hashing & protected routes" },
    { name: "Role-Based Access Control (RBAC)", tag: "Access Control", desc: "Basic user role validation and authorization on restricted endpoints" },
    { name: "Middleware & Error Handling", tag: "Backend Patterns", desc: "Custom request validators, logging middleware & centralized error handling" }
  ],
  database: [
    { 
      name: "MongoDB", 
      tag: "NoSQL Database", 
      desc: "Foundational knowledge: creating collections, document structures, basic queries, and CRUD operations." 
    }
  ],
  devopsAndTools: [
    { name: "Git & GitHub", tag: "Version Control", desc: "Git repository initialization, staging, commits, branches & push/pull" },
    { name: "VS Code", tag: "Code Editor", desc: "Code formatting, extensions, terminal integration & efficient debugging" },
    { name: "Postman", tag: "API Testing", desc: "Manual endpoint testing, checking JSON payloads, headers & HTTP codes" },
    { name: "Vite", tag: "Build Tool", desc: "Modern frontend tooling, local dev server & production bundling" }
  ]
};

export const experienceData = [
  {
    role: "Electrical Support Technician",
    company: "IFF Pvt Ltd (International Flavors & Fragrances)",
    organization: "Sri Venkateswara Enterprises (Sub-Contract)",
    period: "3.2 Years",
    location: "Tamil Nadu, India",
    type: "Previous Work Experience",
    description: "Worked well in a team setting, providing support and guidance. Demonstrated respect, friendliness and willingness to help wherever needed. Self motivated, with a strong sense of personal responsibility.",
    achievements: [
      "Supported industrial electrical maintenance, inspecting control equipment and plant installations to ensure smooth day-to-day operations.",
      "Conducted routine preventive maintenance and timely troubleshooting to resolve electrical faults and prevent operational delays.",
      "Strictly followed industrial safety procedures, Lockout/Tagout (LOTO) protocols, and regulatory compliance standards.",
      "Maintained positive collaboration and respectful communication with team members, supervisors, and plant staff.",
      "Demonstrated dedicated work ethic, high reliability, and strong personal responsibility throughout 3.2 years of service."
    ],
    skillsLearned: [
      "Team Collaboration",
      "Punctuality & Reliability",
      "Electrical Maintenance",
      "Preventive Maintenance",
      "Industrial Safety Standards",
      "Workplace Responsibility"
    ]
  }
];

export const projectsData = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Shopping Platform",
    codeName: "Tapo-Trend",
    category: "Frontend",
    status: "Completed",
    isFeatured: true,
    description: "A complete frontend e-commerce solution featuring rich product catalogs, real-time cart manipulation, category filtration, secure checkout workflow, and responsive mobile-first design.",
    images: ["/images/home1.png"],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "REST API", "Tailwind CSS"],
    highlights: [
      "Dynamic product catalog with multi-criteria category and price filtering.",
      "Persistent state cart system with dynamic subtotal, discount, and tax calculations.",
      "Comprehensive RESTful backend API handling product listings, inventory queries, and customer order management.",
      "Responsive, clean UI architecture designed for mobile and desktop viewports."
    ],
    github: "https://github.com",
    liveDemo: "#"
  },
  {
    id: "internal-approval-system",
    title: "Internal Approval Request Management System",
    codeName: "WorkflowHub",
    category: "MERN Fullstack",
    status: "In Progress",
    isFeatured: true,
    isInProgress: true,
    description: "An enterprise-grade internal governance platform to automate and monitor multi-stage employee requests, departmental approvals, role-based workflows, and audit logging.",
    images: ["/images/home1.png"],
    technologies: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "Tailwind CSS"],
    highlights: [
      "Multi-tiered approval pipeline: Initiator (Employee) -> Approver (Manager) -> Final Sign-off (Department Head).",
      "Dynamic request states: Draft, Submitted, Pending Review, Approved, Rejected, and Re-submitted with reason logs.",
      "Role-Based Access Control (RBAC) securing API routes, form submissions, and privilege escalation checks.",
      "Automated audit trail logging timestamps, reviewer remarks, and request status changes for accountability.",
      "Real-time status indicators and dashboard analytics summarizing approval velocity and pending tasks."
    ],
    github: "https://github.com",
    liveDemo: "#"
  },
  
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "RVS Padmavathy College of Engineering and Technology",
    period: "Passed Out: 2020",
    score: "Score: 69%",
    icon: "GraduationCap",
    details: "Specialized in computer engineering core subjects, including Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, and Software Engineering methodologies."
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Elite Matriculation Higher Secondary School",
    period: "2014 – 2016",
    score: "Score: 70%",
    icon: "BookOpen",
    details: "Completed higher secondary curriculum with coursework in Mathematics, Physics, Chemistry, and Computer Science."
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Maharishi Vidhya Mandhir Matriculation School",
    period: "2013 – 2014",
    score: "Score: 80%",
    icon: "Award",
    details: "Foundational secondary education with distinction in Mathematics and Science, participating actively in technology quizzes and science fairs."
  }
];

export const certificationsData = [
  {
    title: "MERN Full-Stack Developer Course",
    institution: "SLA Institute",
    period: "October 2026",
    status: "Course Completed",
    badge: "Professional Certification",
    details: "Intensive hands-on professional course covering end-to-end full-stack web development. Focused on component-driven development with React.js, server-side architecture with Node.js and Express.js, RESTful API design, and foundational MongoDB integration.",
    skillsCovered: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "RESTful APIs", "HTML5 & CSS3", "Git & GitHub"]
  }
];
