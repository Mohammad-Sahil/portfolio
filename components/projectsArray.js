import vriddhi from '../public/project/project_vriddhi.png'
import notes from '../public/project/project_a2nitr.jpg'
import uberEats from '../public/project/Uber-Eats.png'
import masterjiapp from '../public/project/masterjiapp.png'
import zoomapp from '../public/project/zoomapp.gif'
import tiktok from '../public/project/tiktok.jpeg'
import zoomweb from '../public/project/zoomweb.png'
import amazon from '../public/project/project_amazon.png'
import uber from '../public/project/project_uber.png'
import whatsapp from '../public/project/project_whatsapp.png'
import portfolio from '../public/project/project_portfolio.png'

import foc from '../public/project/foc.png'
import focadmin from '../public/project/focadmin.png'
import incofibs from '../public/project/incofibs.png'
import justspeak from '../public/project/justspeak.png'
import masterjiadmin from '../public/project/masterjiadmin.png'
import talentz from '../public/project/talentz.png'
import ebsb from '../public/project/ebsb.png'
import nss from '../public/project/nss.png'
import focapp from '../public/project/focapp.png'


const projectsArray = [
    {
        title: "Vriddhi eSports Fest Website",
        para: "Built and designed a fully functional highly responsive web app for the official eSports Fest of NIT Rourkela from scratch using Next.js,MUI, Emotion, Node.js, MongoDB and Vercel.",
        githubLink: "https://github.com/Vriddhi2021/frontend/",
        liveLink: "https://www.vriddhinitr.com/",
        tag1: "NextJS",
        tag2: "MUI",
        tag3: "Emotion",
        tag4: "NodeJS",
        tag5: "MongoDB",
        tag6: "Vercel",
        projectImg: vriddhi.src,
        cat: "web"
    },
    {
        title: "NITR Notes",
        para: "One stop platform for a students reading list on campus. Compiled books & notes of every single branch and year and a lot more with a great reading experience, built using HTML,CSS,JS,Google Script and firebase, Got 1k+ daily visitors on Exam's days",
        githubLink: "https://github.com/devdribblenitr/Notes/",
        liveLink: "https://notes.a2nitr.in/",
        tag1: "HTML5",
        tag2: "CSS3",
        tag3: "Google Script",
        tag4: "Firebase",
        tag5: "Adobe API",
        tag6: "Github",
        projectImg: notes.src,
        cat: "web"
    },
    {
        title: "MasterJi - Book Tailor Online",
        para: "MasterJi, built with Flutter, Dart, and Firebase, offers custom-stitched clothing with doorstep service, real-time tracking, voice-note instructions, Firebase Authentication, and a seamless UI powered by Provider.",
        githubLink: "https://github.com/Mohammad-Sahil/masterji-app/",
        liveLink: "https://play.google.com/store/apps/details?id=online.masterji.honchiSolution",
        tag1: "Flutter",
        tag2: "Dart",
        tag3: "Firebase",
        tag4: "Google Maps",
        tag5: "Firebase Auth",
        tag6: "Provider",
        projectImg: masterjiapp.src,
        cat: "mobile"
    },
    {
        title: "My Portfolio",
        para: "This website is fully functional highly responsive, built using Typescript, NextJS, MUI, firebase, Emotion and hosted on Vercel and designed on Figma",
        githubLink: "https://github.com/Mohammad-Sahil/portfolio/",
        liveLink: "https://tsharpsahil.tech/",
        tag1: "Typescript",
        tag2: "NextJS",
        tag3: "Firebase",
        tag4: "MUI",
        tag5: "Emotion",
        tag6: "Vercel",
        projectImg: portfolio.src,
        cat: "web"
    },
    {
        title: "Focus on Concepts Mobile App",
        para: "Developed a Flutter-based mobile learning app with BLoC state management, featuring localization support, secure authentication, and interactive educational content for Maths and Science students.",
        githubLink: "#",
        liveLink: "#",
        tag1: "Flutter",
        tag2: "Dart",
        tag3: "BLoC",
        tag4: "Go Router",
        tag5: "Localization",
        tag6: "API Integration",
        projectImg: focapp.src,
        cat: "mobile"
    },
    {
        title: "MasterJI Admin Panel",
        para: "Built a comprehensive admin panel for a tailoring web app using Node.js, Firebase, and Firestore with role-based access control and full CRUD functionality for seamless data management across web and mobile platforms.",
        githubLink: "https://github.com/Mohammad-Sahil/masterji-admin",
        liveLink: "https://masterji-admin.vercel.app/",
        tag1: "Node.js",
        tag2: "Firebase",
        tag3: "Firestore",
        tag4: "Authentication",
        tag5: "CRUD",
        tag6: "Role Management",
        projectImg: masterjiadmin.src,
        cat: "web"
    },
    {
        title: "Focus on Concepts ",
        para: "Created an interactive learning platform using ReactJS and Next.js that identifies student knowledge gaps and delivers targeted Maths and Science content, featuring Firebase integration and responsive UI components.",
        githubLink: "#",
        liveLink: "https://www.focusonconcepts.com/",
        tag1: "ReactJS",
        tag2: "Next.js",
        tag3: "Firebase",
        tag4: "Bootstrap 5",
        tag5: "MUI Material",
        tag6: "Axios",
        projectImg: foc.src,
        cat: "web"
    },
    {
        title: "Focus on Concepts Admin",
        para: "Developed a comprehensive educational content management system with Next.js and Firebase, enabling administrators to manage courses, student data, and website content with real-time updates and CI/CD integration.",
        githubLink: "#",
        liveLink: "https://admin.focusonconcepts.com/",
        tag1: "Next.js",
        tag2: "Tailwind CSS",
        tag3: "MUI",
        tag4: "Node.js",
        tag5: "Firebase",
        tag6: "CI/CD",
        projectImg: focadmin.src,
        cat: "web"
    },
    {
        title: "Just Speak",
        para: "Built a web platform using Next.js and TypeScript that provides a supportive space for self-expression and advocacy, featuring Firebase authentication, database integration, and interactive UI components.",
        githubLink: "#",
        liveLink: "https://www.just-speak.com/",
        tag1: "Next.js",
        tag2: "React",
        tag3: "TypeScript",
        tag4: "Firebase",
        tag5: "MUI",
        tag6: "Bootstrap",
        projectImg: justspeak.src,
        cat: "web"
    },
    {
        title: "EBSB Club Website",
        para: "Designed and developed the official website for the Ek Bharat Shreshtha Bharat Club of NIT Rourkela, showcasing cultural activities and collaborations with responsive design and engaging animations.",
        githubLink: "https://github.com/Ek-Bharat-Shreshtha-Bharat-NIT-Rourkela/EBSB-NITR-WEB/",
        liveLink: "https://ebsbnitr.vercel.app/",
        tag1: "HTML",
        tag2: "CSS",
        tag3: "JavaScript",
        tag4: "Bootstrap",
        tag5: "Swiper.js",
        tag6: "AOS",
        projectImg: ebsb.src,
        cat: "web"
    },
    {
        title: "InCoFIBS Conference",
        para: "Created a full-stack website for an international biological sciences conference using Next.js and MongoDB, featuring user authentication, responsive design, and dynamic content management for global researcher engagement.",
        githubLink: "https://github.com/devdribblenitr/project-incofibs",
        liveLink: "https://incofibs.vercel.app/",
        tag1: "Next.js",
        tag2: "React.js",
        tag3: "Node.js",
        tag4: "MongoDB",
        tag5: "Tailwind CSS",
        tag6: "Next-Auth",
        projectImg: incofibs.src,
        cat: "web"
    },
    {
        title: "NSS NIT Rourkela Website",
        para: "Developed a responsive informational portal for the National Service Scheme at NIT Rourkela to promote student engagement in community service and leadership development with modern design elements.",
        githubLink: "#",
        liveLink: "https://nss-nit-rourkela.netlify.app/",
        tag1: "HTML5",
        tag2: "CSS3",
        tag3: "JavaScript",
        tag4: "Bootstrap 4",
        tag5: "Swiper.js",
        tag6: "AOS",
        projectImg: nss.src,
        cat: "web"
    },
    {
        title: "TalentZ.AI Job Portal",
        para: "Developed a full-stack job portal connecting companies, students, and partners with role-based dashboards, real-time job listings, and authentication. Deployed on AWS with CI/CD pipelines, resulting in 60% increased engagement and faster release cycles.",
        githubLink: "#",
        liveLink: "https://talentz.vercel.app/",
        tag1: "Next.js",
        tag2: "Node.js",
        tag3: "Redux",
        tag4: "DynamoDB",
        tag5: "AWS",
        tag6: "CI/CD",
        projectImg: talentz.src,
        cat: "web"
    },
    {
        title: "Uber Eats Clone (Food Delivery)",
        para: "Developed a cross platform mobile application using React Native and Styled CSS. Developed with modern UI elements, authentication, Google Places API, Checkout etc",
        githubLink: "https://github.com/Mohammad-Sahil/uber-eats/",
        liveLink: "#",
        tag1: "React Native",
        tag2: "Redux",
        tag3: "Google-Places API",
        tag4: "NodeJS",
        tag5: "Firebase",
        tag6: "Expo",
        projectImg: uberEats.src,
        cat: "mobile"
    },
    {
        title: "Zoom App Clone (Android & iOS)",
        para: "Built and designed dynamic and fully functional cross platform mobile application for Android and iOS using React Native and Styled CSS. Developed with modern UI elements.",
        githubLink: "https://github.com/Mohammad-Sahil/zoom-app/",
        liveLink: "#",
        tag1: "React Native",
        tag2: "Expo",
        tag3: "Socket.IO",
        tag4: "NodeJS",
        tag5: "Express",
        tag6: "Heroku",
        projectImg: zoomapp.src,
        cat: "mobile"
    },
    {
        title: "TikTok Web App (Video-Sharing)",
        para: "Built a fully functional highly responsive TikTok Web App Clone from scratch using Next.js, MUI, Emotion, Node.js, Express and MongoDB, hosted on Vercel.",
        githubLink: "https://github.com/Mohammad-Sahil/TikTok/",
        liveLink: "https://tiktok-beta.vercel.app/",
        tag1: "NextJS",
        tag2: "MUI",
        tag3: "Emotion",
        tag4: "NodeJS",
        tag5: "MongoDB",
        tag6: "Vercel",
        projectImg: tiktok.src,
        cat: "web"
    },
    {
        title: "Video Conferencing App",
        para: "Developed a fully functional highly responsive peer to peer video conferencing Web App from scratch hosted on Heroku using EJS , Express, Node.js, MongoDB and WebRTC i.e. Socket.IO and PeerJS.",
        githubLink: "https://github.com/Mohammad-Sahil/video-conferencing-app/",
        liveLink: "https://video-conferencing-appp.herokuapp.com/",
        tag1: "WebRTC",
        tag2: "EJS",
        tag3: "Express",
        tag4: "NodeJS",
        tag5: "MongoDB",
        tag6: "Heroku",
        projectImg: zoomweb.src,
        cat: "web"
    },
    {
        title: "Amazon Book Store",
        para: "Fully dynamic & interactive Amazon Bookstore Clone hosted on Github and Google Clouds, Built using ReactJS, MUI, Bootstrap, NodeJS, Express & Stripe for payment",
        githubLink: "https://github.com/Mohammad-Sahil/amazon-clone/",
        liveLink: "https://mohammad-sahil.github.io/amazon-clone/",
        tag1: "ReactJS",
        tag2: "MUI",
        tag3: "Bootstrap",
        tag4: "NodeJS",
        tag5: "Express",
        tag6: "Stripe",
        projectImg: amazon.src,
        cat: "web"
    },
    {
        title: "Ride Sharing App (Uber)",
        para: "Fully dynamic, interactive and Mobile friendly Uber clone built using NextJS, Tailwind, GoogleAuth, Mapbox, Firebase for authentication and hosted on Vercel",
        githubLink: "https://github.com/Mohammad-Sahil/uber-clone/",
        liveLink: "http://uber-clone-sahil.vercel.app/",
        tag1: "NextJS",
        tag2: "Tailwind",
        tag3: "GoogleAuth",
        tag4: "Mapbox",
        tag5: "Firebase",
        tag6: "Vercel",
        projectImg: uber.src,
        cat: "web"
    },
    {
        title: "WhatsApp Group Web App",
        para: "Built a fully functional highly responsive WhatsApp Clone for group chat management using React, firebase, Bootstrap, NodeJS and hosted on Vercel",
        githubLink: "https://github.com/Mohammad-Sahil/whatsapp-clone/",
        liveLink: "https://whatsapp-group.vercel.app/",
        tag1: "ReactJS",
        tag2: "Firebase",
        tag3: "Context API",
        tag4: "MUI",
        tag5: "Google Auth",
        tag6: "Vercel",
        projectImg: whatsapp.src,
        cat: "web"
    },
]

export default projectsArray;