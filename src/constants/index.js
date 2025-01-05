import  winProd from "../assets/images/winProd.png"
import commersaDigital from '../assets/images/commersaDigital.png'
import yanogo from '../assets/images/yanogo.png'

import {
    car,
    contact,
    pricewise,
    threads,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nodejs,
    react,
    redux,
    tailwindcss,
    snapgram,
    summiz,
    estate,
    
} from "../assets/icons";
import wedding from '../assets/icons/wedding.svg'
import bootstrap from '../assets/icons/bootstrap.svg'
import movies from '../assets/icons/movies.png'
import quizApp from '../assets/icons/quizLogo.png'


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: bootstrap,
        name: "BootStrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
  
];

export const experiences = [
    {
        title: "Frontend Developer  (React.js / Node.js / Jira / GitLab)",
        company_name: "Yanogo",
        icon: yanogo,
        iconBg: "#accbe1",
        date: "06 / 04 / 2023 - 06/06/2024",
        points: [
            " Web Design & User Interface: Developed user-friendly and responsive interfaces using React.js. I implemented key components that enhanced the overall user experience, ensuring that the platform was intuitive and easy to navigate for job seekers optimizing their CVs. I applied CSS and Material-UI to create visually consistent and interactive pages",
          " Backend API Integration: Integrated backend APIs into the front end to enable the platform’s AI-driven CV optimization system. I managed API calls and data handling to display real-time suggestions based on user inputs. This involved ensuring smooth interaction between the front-end and backend systems, allowing for seamless data flow and user interactions.",
           " Collaboration & Task Management: Actively participated in team sprints and task management using Jira. I regularly updated tasks, tracked progress, and worked closely with other developers to ensure features were delivered on time. I contributed to the completion of assigned tasks within the sprint cycles, focusing on bug fixes and feature improvements"
        ],
    },

    {
        title: "Web Designer Freelancer",
        company_name: "Win Prod",
        icon: winProd,
        iconBg: "#accbe1",
        date: "17/07/2023 - Current",
        points: [
            " Creating posters/ Graphic Charts ",
            "Assisting in web development Projects and Bringing New Ideas",
            "Content creation and optimization / Keeping up with search engine algorithms",
            "Direct contact with clients when needed"
        ],
    },

    {
        title: "FrontEnd Developer",
        company_name: "Commersa Digital",
        icon: commersaDigital,
            iconBg: "rgba(211, 97, 243, 0.867)",
        date: "10/07/2022 - 31/05/2023",
        points: [ 
            ' Turning design mockups and prototypes into functional web pages and applications.',
            ' Writing clean, maintainable code that is easy to understand and modify.', 
            ' Implementing interactive elements using JavaScript to make the page dynamic and responsive to user actions.' ,
            ' Implementing third-party libraries and frameworks',           
        ],
    }, 
    {
        title: "Web Developer End-Of-Studies Project",
        company_name: "Commersa Digital",
        icon: commersaDigital,
            iconBg: "rgba(211, 97, 243, 0.867)",
        date: "15/02/2022 - 06/05/2022",
        points: [
            'Project: E-Commerce WebSite', 
            ' Responsive site with MERN technology: ',
            ' React JS: Frontend Library', 
            ' Express JS: Backend Server' ,
            ' Node JS: Software Platfor',
            ' MongoDb: Database', 
            ' Adobe PhotoSho',
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/IhebMth',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/iheb-meftah/',
    }
];

export const projects = [

    {
        iconUrl: movies,
        theme: 'btn-back-blue',
        name: 'ArabFlix',
        description: "i created an movies app where i did put all my learning skills into action.. i have used reactJs, hooks, tdmp Api, axios ,  scss, Implementing a video player that reads all kind of sources that i find it a solution after alot of research, ads  using admob , it will be live in february  ",
        githubLink: 'https://github.com/IhebMth/ArabFlix',
        liveLink : 'https://arabflix.netlify.app/'
    },
    {
        iconUrl: quizApp,
        theme: 'btn-back-black',
        name: 'QuizApp',
        description: "Built an interactive quiz app using React and Tailwind CSS, featuring drag-and-drop functionality, real-time stats, and timed quizzes. Focused on English and Mathematics, the app delivers engaging learning experiences with responsive design and final result summaries, making education fun and interactive for students of all levels",
        githubLink: 'https://github.com/IhebMth/Quiz-App',
        liveLink : 'https://quiz-appixl.vercel.app/'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Iheb-Blog',
        description: 'Created a blog where people interrested in it from accross the world can imporve or start their carear as developers, i got a HTML, CSS, JS, ReactJS, free Books, and available jobs section',
        githubLink: 'https://github.com/IhebMth/Blog',
        liveLink : 'https://iheb-blog.onrender.com/'
    },
  
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'ReactJs Personal Portfolio',
        description: 'Developed a personal portfolio using ReactJs to practice my skills and keep them sharp, and To showcase my skills and experience',
        githubLink: 'https://github.com/IhebMth/Iheb-Meftah',
        liveLink : 'https://ihebmeftah.netlify.app/'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Sharing Link App',
        description: 'build a fully-functional link-sharing app for developers! I have practiced working with image uploads, repeater fields, drag-and-drop, and more!',
        githubLink: 'https://github.com/IhebMth/SharingLinksApp/',
        liveLink : 'https://ihebmeftah-sharinglinks-app.netlify.app'
    },
    
    {
        iconUrl: wedding,
        theme: 'btn-back-blue',
        name: 'Wedding Events App MEAN Stack',
        description: 'This is a full functionalites Wedding events app, where user can reserve his wedding time and the things offered by the reservator, and admin dashboard to control both user and reservator and many other functionalities',
        githubLink: 'https://github.com/IhebMth/Iheb-events/',
        liveLink : 'https://iheb-events.onrender.com/'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MERN STACK E-Commerce WebSite',
        description: 'Developed an e-commerce web application as my graduation project, it is rich with functionalities and style. The main objetif behind this projet was to build an Ecommerce website that handles both sides client and admin.',
        githubLink: 'https://github.com/IhebMth/Mern-STACK-e-commerce/',
        liveLink : 'https://www.google.com'
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'E-Commerce Website Clone',
        description: 'A react js website clone with bootstrap to help me improve my skills in hooks, mapping and bootstrap specificly, i used libraries like ReactStars, Marquee, ReactImageZoom ',
        githubLink: 'https://github.com/IhebMth/E-commerce-Clone',
        liveLink : 'https://e-comerce-clone.onrender.com/'
    },
   
];
