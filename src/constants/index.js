const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems =[
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 2, suffix: "", label: "Internship" },
  { value: 8, suffix: "+", label: "Tech Stack Skills" },
  { value: 800, suffix: "+", label: "Hours Building & Learning" }
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
 {
  review: "Ritik is building an innovative solution to solve real-world problems in electronics retail by enabling dynamic price tracking and inventory management. His approach combines technical skills with strong market understanding.",
  imgPath: "/images/edgee.png",
  logoPath: "/images/edgee.png",
  title: "React Native Developer Project ",
  date: "2026 - Present",
  responsibilities: [
    "Building a React Native app for electronics shop owners to manage inventory and track real-time product prices.",
    "Designing a system to update daily price fluctuations based on quotations from major wholesalers.",
    "Implementing features for efficient inventory tracking and product management.",
    "Planning advanced features such as product scanning (barcode/QR) and GST API integration.",
    "Focusing on solving real-world retail problems by digitizing price tracking and stock management.",
  ],
},
  {
  review: "Ritik demonstrated strong analytical thinking and a security-first mindset during the Cyber Gyan Project. His ability to identify vulnerabilities and approach problems methodically added real value to the learning environment.",
  imgPath: "/images/cdaclogo.jpg",
  logoPath: "/images/cdaclogo.jpg",
  title: "Ethical Hacking & Penetration Testing Intern",
  date: "June 2025 - August 2025",
  responsibilities: [
    "Learned and applied core concepts of ethical hacking, penetration testing, and cybersecurity fundamentals.",
    "Performed vulnerability assessment and basic penetration testing on web applications using industry tools.",
    "Gained hands-on experience with tools like Nmap, Wireshark, and Metasploit.",
    "Collaborated with peers under the Cyber Gyan Project (MeitY, Govt. of India) to simulate security scenarios.",
  ],
},
 
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
{
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://instagram.com/yourprofile", // Add your link here
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
    url: "https://facebook.com/yourprofile",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/yourprofile",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/ritik-sharma3/",
  },
];
//Example structure for constants/index.js
 const projects = [
    {
    id: 2,
    title: "MyVimShell | C++, Qt 6, CMake",
    des: "Built a cross-platform desktop application in C++ and Qt that emulates a Unix terminal with modern GUI features",
    img: "/vim.png", // Located at public/advocacy-screenshot.png
    iconLists: [
      "/c++.svg",      // React icon (public/re.svg)
          // TypeScript icon (public/ts.svg)
     // "/fastapi.svg"  // FastAPI icon (public/fastapi.svg)
    ],
    link: "https://github.com/ritiksharma33/MyVimShell",
    status: "live",
  },
    {
    id: 3,
    title: "Numora",
    des: "Advanced Numerology Insight Platform.",
    img: "/godwin.png", // Located at public/advocacy-screenshot.png
    iconLists: [
      "/re.svg",      // React icon (public/re.svg)
      "/tail.svg",    // Tailwind icon (public/tail.svg)
      "/js.svg",
      "/py.svg",      // TypeScript icon (public/ts.svg)
     // "/fastapi.svg"  // FastAPI icon (public/fastapi.svg)
    ],
    link: "https://advocacy-os.com",
    status: "development",
  },
    {
    id: 4,
    title: "SecureSign",
    des: "Custom Desktop Productivity Suite (PDF/Word Signer)",
    img: "/sign.png", // Located at public/advocacy-screenshot.png
    iconLists: [
      
      "/py.svg", 
           // TypeScript icon (public/ts.svg)
     // "/fastapi.svg"  // FastAPI icon (public/fastapi.svg)
    ],
    link: "https://github.com/ritiksharma33/SecureSign",
    status: "live",
  },
  {
    id: 5,
    title: "SOAR HUB",
    des: "Automated Security Intelligence Hub for IP, Domain, and Malware Hash Enrichment.",
    img: "/soar.png", // Make sure to add a screenshot of your dashboard here!
    iconLists: [
      "/re.svg",      // React
      "/py.svg",      // Python
      "/tail.svg",    // Tailwind (if you used it, otherwise FastAPI icon)
      "/js.svg", // FastAPI
           // Git/GitHub
    ],
    link: "https://github.com/ritiksharma33/security-alert-enrichment-tool",
    status: "live",
  },

];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  
};