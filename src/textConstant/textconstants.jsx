import codelogo1 from "../assets/codelogo1.webp";
import codelogo2 from "../assets/codelogo2.webp";
import project15 from "../assets/project15.png"
import project14 from "../assets/project14.svg";
import reacttxt from "../assets/reacttxt.svg";
import reactgit from "../assets/reactgit.svg"
import project16 from "../assets/project16.png"
import resources1 from "../assets/resources1.webp"
import resources2 from "../assets/resources2.webp"
import resources3 from "../assets/resources3.webp"
import resources4 from "../assets/resources4.webp"
import { Card1, TypoCard2, TypoCard3,TypeCard4,TypeCard5,TypeCard6,TypeCard7,TypeCard8,Card3, } from "../assets/icons";

// code wit beto screen (/)

// heroSection
export const CODE_HERO_TOP_BUTTON= import.meta.env.VITE_CODE_HERO_TOP_BUTTON;
export const CODE_HERO_TITLE= import.meta.env.VITE_CODE_HERO_TITLE;
export const CODE_HERO_DESCRIPTION=import.meta.env.VITE_CODE_HERO_DESCRIPTION;
export const CODE_HERO_STARTED_BUTTON=import.meta.env.VITE_CODE_HERO_STARTED_BUTTON;
export const CODE_HERO_COURSES_BUTTON=import.meta.env.VITE_CODE_HERO_COURSES_BUTTON;

// sponsers cards
export const CODE_SPONSORS_HEAD=import.meta.env.VITE_CODE_SPONSORS_HEAD
export const CODE_SPONSORS_BOTTOM_HEAD=import.meta.env.VITE_CODE_SPONSORS_BOTTOM_HEAD
export const CODE_SPONSORS_BOTTOM_DESCRIPTION=import.meta.env.VITE_CODE_SPONSORS_BOTTOM_DESCRIPTION
export const CODE_SPONSORS_BOTTOM_LINK=import.meta.env.VITE_CODE_SPONSORS_BOTTOM_LINK

 export const sponsors = [
  {
    name: "CodeCrafters",
    description: "A platform for tackling advanced projects that actually challenge you.",
    logo: codelogo2,
    link: "https://codecrafters.io",
  },
  {
    name: "Vexo Analytics",
    description: "React Native Analytics & Insights. Optimize user experience and drive engagement.",
    logo: codelogo1,
    link: "https://vexo.io",
  },
];

// cardsSection
export const CODE_CARDS_HEAD=import.meta.env.VITE_CODE_CARDS_HEAD
export const CODE_CARDS_DESCRIPTION=import.meta.env.VITE_CODE_CARDS_DESCRIPTION
export const CODE_CARDS_TOP_HEAD=import.meta.env.VITE_CODE_CARDS_TOP_HEAD
export const courseDescriptions = [
  { title: "Introduction:",
     text: "Get started with React Native and Expo.Learn about the..."  },
  { title: "Components and APIs:", 
    text: "Master React Native components from basic to advanced.Learn..." },
  { title: "Style and Design:",
     text: "Learn how to create beautiful and responsive UIs using Figma..." },
  { title: "Expo Router", text: "Master file-based routing with Expo Router. Learn how to..."
   },
  { title: "Animation and Gestures", text: "Create fluid animation and implement complex gestures "
  },
  { title: "Testing", text: "Learn how to implement comprehensive testing strategies..."
   },
  { title: "Push Notifications", text: "Implement push notifications using both Expo Notifications and..."
   }
];
export const courses = [
  {
    title: "React Native Course",
    description: "An interactive course to learn React Native in a fun abd easy way.",
    logo: project14, 
    featured: false,
    new: true,
  },
  {
    title: "Master React with TypeScript",
    description: "Get proficient in building robust, type-safe applications with React and TypeScript.",
    logo: reacttxt, // Replace with actual image
    featured: false,
    new: false,
  },
  {
    title: "Master Git & GitHub",
    description: "Learn to expertly navigate Git and GitHub for collaboration at every level.",
    logo: reactgit, // Replace with actual image
    featured: false,
    new: false,
  },
];

// heroCardsSection
export const CODE_HERO_CARDS_HEAD=import.meta.env.VITE_CODE_HERO_CARDS_HEAD
export const CODE_HERO_CARDS_DESCRIPTION=import.meta.env.VITE_CODE_HERO_CARDS_DESCRIPTION
export const CODE_HERO_CARDS_BUTTON=import.meta.env.VITE_CODE_HERO_CARDS_BUTTON
 export const projects = [
  {

    price: "$24.99 USD",
    description: "A premium app designed for couples.Str...",
    image: resources1 // Replace with actual image URL
  },
  {

    price: "$14.99 USD",
    description: "Multi-user chat application. The applicat...",
    image: resources2,
  },
  {

    price: "$24.99 USD",
    description: "Incorporating GPT-3 to Deliver intelligent...",
    image: resources3,
  },
  {

    price: "$24.99 USD",
    description: "React Native Stripe Template with Next.js... ",
    image: resources4,
  },
];

// Footer
export const FOOTER_DATA = [
  {
    title: "Code with Beto",
    links: [
      { name: "React Native Course", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: "Resources", path: "/resources" },
      { name: "Blog", path: "/blog" },
      { name: "About", path: "/about" },
      { name: "Eco Studios" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Youtube-English" },
      { name: "Youtube-Spanish" },
      { name: "Github" },
      { name: "Discord" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { name: "Instagram" },
      { name: "Twitter" },
      { name: "Linkedin" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Become a sponsor" },
      { name: "Report an issue" },
    ],
  },
];


// Home screen(/learn)

// HeroSection
 
export const HOME_PAGE_HERO_TITLE = import.meta.env.VITE_HOME_PAGE_HERO_TITLE;

export const HOME_PAGE_HERO_DESCRIPTION =  import.meta.env.VITE_HOME_PAGE_HERO_DESCRIPTION; 
export const HOME_PAGE_HERO_START_BUTTON=import.meta.env.VITE_HOME_PAGE_HERO_START_BUTTON;
export const HOME_PAGE_HERO_COURSE_DETAILS=import.meta.env.VITE_HOME_PAGE_HERO_COURSE_DETAILS;

// Courses Section
export const HOME_PAGE_COURSES_TITLE = import.meta.env.VITE_HOME_PAGE_COURSES_TITLE;
export const HOME_PAGE_COURSES_DESCRIPTION=import.meta.env.VITE_HOME_PAGE_COURSES_DESCRIPTION;
// courses details 

export const COURSE_TEXTS = {
  INTRODUCTION: {
    title: "Introduction",
    description: "Get started with React Native and Expo. Learn about the development environment setup and understand the new React Native architecture.",
    listItems: [
      { text: " How to take this course", time: "2 min" },
      { text: " Why Expo", time: "4 min" },
      { text: "Android Environment Setup", time: "4 min" },
      { text: " iOS Environment Setup", time: "2 min" },
      { text: " RN New Architecture", time: "4 min" },
      { text: "Expo Go vs Development Builds", time: "9 min" }
    ]
  },
  ADVANCED: {
    title: "Components and APIs",
    description: "Master React Native components from basic to advanced. Learn how to create reusable custom components and implement complex UI patterns.",
    listItems: [
      { text: "  Basic Components", time: "13 min" },
      { text: "  Custom Components", time: "6 min" },
      { text: "Advanced Custom Components", time: "21 min" },
    ]
  },
  DESIGN: {
    title: "Style and Design",
    description: "Learn how to create beautiful and responsive UIs using Figma designs, implement proper styling patterns, and handle dark mode effectively.",
    listItems: [
      { text: "   Designing with Figma", time: "19 min" },
      { text: "  Style & StyleSheet", time: "24 min" },
      { text: "Design System Tips", time: "9 min" },
      { text: " Layout with Flexbox", time: "19 min" },
      { text: "Dark Mode", time: "9 min" },
    ]
  },
  EXPO:{
    title: "Expo Router",
    description: "Master file-based routing with Expo Router. Learn how to implement authentication flows, and deep linking.",
    listItems: [
      { text: " File Base Routing", time: "24 min" },
      { text: " Dynamic Routes", time: "7 min" },
      { text: "Stack & Tabs", time: "11 min" },
      { text: " Router Hooks", time: "19 min" },
      { text: "Authentication Flow", time: "24 min" },
      { text: " Role Based Access", time: "6 min" },
      { text: " Deep Linking", time: "14 min" },
    ]
  },
  ANIMATION:{
    title: "Animation and Gestures",
    description: "Create fluid animations and implement complex gesture interactions in your React Native applications.",
    listItems: [
      { text: " Animations and Gestures", time: "42 min" },
      { text: "Composition & Interactions", time: "6 min" },
      { text: "Swipeable Components", time: "14 min" },
    ]
  },
  TESTING:{
    title: "Testing",
    description: "Learn how to implement comprehensive testing strategies using Jest, React Native Testing Library and Maestro for end-to-end testing.",
    listItems: [
      { text: " Unit Test with Jest", time: "33 min" },
      { text: " E2E with Maestro", time: "37 min" },

    ]
  },
  NOTIFICATIONS:{
    title: "Push Notifications",
    description: "Implement push notifications using both Expo Notifications and OneSignal, understanding the advantages and trade-offs of each approach.",
    listItems: [
      { text: "Expo Notifications", time: "51 min" },
      { text: "OneSignal Integration", time: "42 min" },

    ]
  },
 BACKEND:{
    title: "Backend Basics",
    description: "Learn essential backend concepts and how to handle server-side operations in your React Native app.",
    listItems: [
      { text: "Environment Variables", time: "17 min" },
      { text: "Expo Router API Routes", time: "17 min" },
      { text: "Streaming Data with Expo Fetch", time: "11 min" },
      { text: "Deploying with EAS Hosting", time: "10 min" },
    ]
  },
  SUPABASE:{
    title: "Supabase",
    description: "Learn how to integrate Supabase as your backend service, including database operations.",
    listItems: [
      { text: "Supabase UI Tour", time: "8 min" },
      { text: " Creating Tables", time: "7 min" },
      { text: " Installation and CRUD Operations", time: "10 min" },
    ]
  },
 BUILD:{
    title: "EAS Build",
    description: "Learn how to use EAS Build",
    listItems: [
      { text: " Development Builds", time: "22 min" },
      { text: "Preview Builds", time: "2 min" },
      { text: "Production Builds", time: "9 min" },
      { text: " Automating App Version Code", time: "5 min" },
    ]
  },
  SUBMIT:{
    title: "EAS Submit",
    description: "Learn how to automate app submission to the App Store and Play Store.",
    listItems: [
      { text: "Submit to App Store", time: "8 min" },
      { text: "Submit to Google Play", time: "13 min" },
    ]
  },
  UPDATE:{
    title: "EAS Update",
    description: "Learn how to configure and deploy over-the-air updates using EAS Update.",
    listItems: [
      { text: "Configuring EAS Update", time: "8 min" },
      { text: "Deploying Updates", time: "20 min" },
      { text: "Reverting Updates", time: "7 min" },
    ]
  },
  WORKFLOWS:{
    title: "EAS Workflows",
    description: "Learn how to set up CI/CD pipelines using EAS Workflows.",
    listItems: [
      { text: "Getting Started with Workflows", time: "11 min" },
      { text: "E2E with Maestro Workflow", time: "20 min" },
      { text: "Build and Submit Workflow", time: "8 min" },
    ]
  },
PUBLISHING:{
    title: "Publishing",
    description: "Learn how to prepare and submit your app to the App Store and Play Store.",
    listItems: [
      { text: "App Store Submission", time: "40 min" },
      { text: " Play Store Submission", time: "35 min" },
    ]
  },
  PAYMENTS:{
    title: "Payments",
    description: "Learn how to implement different payment solutions including in-app purchases with RevenueCat and payment processing with Stripe.",
    listItems: [
      { text: "Payment Basics", time: "15 min" },
      { text: " In-app Purchases", time: "54 min" },
      { text: " Stripe Integration", time: "40 min" },
    ]
  },
  BOUNUS:{
    title: "Bonus",
    description: "Enhance your app with advanced features like home screen widgets and other platform-specific integrations to create a more engaging user experience.",
    listItems: [
      { text: "Apple Widgets", time: "40 min" }, 
    ]
  }
};
// video section
 export const HOME_PAGE_VIDEO_SECTION_HEADING=import.meta.env.VITE_HOME_PAGE_VIDEO_SECTION_HEADING;
 export const HOME_PAGE_VIDEO_SECTION_DESCRIPTION=import.meta.env.VITE_HOME_PAGE_VIDEO_SECTION_DESCRIPTION;
 export const HOME_PAGE_VIDEO_SECTION_TEXT = `
 Transform your React Native development skills with this 
 <span style="color: #38bdf8;">fully revamped course</span>, powered by the latest  <span style="color: #38bdf8;">Expo</span> SDK 52. 
 Dive into the new React Native architecture, master modern best practices, and unlock the full potential of  <span style="color: #38bdf8;">TypeScript </span>, <span style="color: #38bdf8;">EAS services</span>, and other state-of-the-art tools. 
 Whether you're a beginner or looking to level up, this course equips you to build cutting-edge React Native apps with confidence.
`;

// Behind the lessons section (main Section)
export const HOME_PAGE_BEHIND_SECTION_HEADING=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_HEADING;
export const HOME_PAGE_BEHIND_SECTION_DESCRIPTION=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_DESCRIPTION;
export const HOME_PAGE_BEHIND_SECTION_TEXT1=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT1;
export const HOME_PAGE_BEHIND_SECTION_TEXT2=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT2;
export const HOME_PAGE_BEHIND_SECTION_TEXT3=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT3;
export const HOME_PAGE_BEHIND_SECTION_TEXT4=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT4;
export const HOME_PAGE_BEHIND_SECTION_TEXT5=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT5;
export const HOME_PAGE_BEHIND_SECTION_TEXT6=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT6;
export const HOME_PAGE_BEHIND_SECTION_TEXT7=import.meta.env.VITE_HOME_PAGE_BEHIND_SECTION_TEXT7;

// Pricing Section 
export const HOME_PAGE_PRICING_SECTION_HEADING=import.meta.env.VITE_HOME_PAGE_PRICING_SECTION_HEADING;
export const HOME_PAGE_PRICING_SECTION_DESCRIPTION=import.meta.env.VITE_HOME_PAGE_PRICING_SECTION_DESCRIPTION;
export const HOME_PAGE_PRICING_SECTION_ANIMATED_BUTTON=import.meta.env.VITE_HOME_PAGE_PRICING_SECTION_ANIMATED_BUTTON;

// cards
export const PRICING_CARDS = {
 ALL_COURSES: {
    title: "ALL COURSES PASS",
    price:"$24.99",
    duration: "/month",
    subscription:"Monthly subscription",
    head:"Full access to all courses",
    description: "Get started with React Native and Expo. Learn about the development environment setup and understand the new React Native architecture.",
  features: [
      "Full access to React Native Course",
      "Full access to React with TypeScript Course",
      "Full access to Git & GitHub Course",
      "Access to future courses at no extra cost",
      "Access to all course updates",
      "Priority email support",
      "No commitment",
      "Cancel anytime"
    ],
    buttonText: "Subscribe",
  },

  ONE_YEAR: {
    title: "ONE-YEAR ACCESS",
    oldPrice: "$100",
    price: "$90",
    duration: "/year",
    head:"One-time payment for full year access - No recurring charges",
    subscription:"One-time payment",
       features: [
      "The best React Native Course",
      "Access to 53 high-quality lessons",
      "Crystal-clear video explanations",
      "Comprehensive and up-to-date lessons",
      "Take the course at your own pace",
      "Includes access to source code",
      "Includes access to future updates",
      "Access to our Discord community"
    ],
    buttonText: "Purchase",
  
  },

}
// FAQs Section 
export const HOME_PAGE_FAQS_HEADING=import.meta.env.VITE_HOME_PAGE_FAQS_HEADING;
export const HOME_PAGE_FAQS_DESCRIPTION=import.meta.env.VITE_HOME_PAGE_FAQS_DESCRIPTION;
export const FAQS_SECTION={
  first:{
    question:"Is any programming experience required to take this course?",
    answer:"While we strive to break down complex concepts into understandable bits, it's beneficial if you have some foundational knowledge of TypeScript, React and Git. Check out our courses in case you need to refresh your knowledge"
  },
  second:{
    question:"Is this course about React Native Community CLI or Expo",
    answer:"This course is about Expo which is the recommended way to develop React Native applications"
  },
  third:{
    question:"What programming language do we use in this course?",
    answer:"TypeScript"
  },
  forth:{
    question:"Is this course in English or Spanish",
    answer:"Only in English"
  },
  fifth:{
    question:"I'm a complete beginner,Is this course for me?",
    answer:"Yes, as long as you have some knowledge of TypeScript, React and Git"
  },
  sixth:{
    question:"I have multiple years of experience in development,is this course for me?",
    answer:"Certainly! Even if you bring years of experience to the table, this course offers value as it covers a broad spectrum of topics. We're confident that you will discover new insights and deepen your understanding of React Native, irrespective of your current expertise level"
  },
  seventh:{
    question:"If I purchase this course,how long do I have access to it?",
    answer:"If you subscribe to our monthly plan, you will have access to the course indefinitely as long as you keep your subscription active. If you purchase the one-year access, you will have access to the course for one year and you won't be charged again. If you want to continue your access, you will need to repurchase the course"
  },
  eighth:{
    question:"After my 1 year access expires,will you automatically renew it and charge me?",
    answer:"No, your access will not be automatically renewed nor will you be charged again after the 1-year period expires. If you wish to continue your access, you will need to manually repurchase the course"
  },
  ninth:{
    question:"Is it possible to buy course access in large quantities, for Instance,for a group of students?",
    answer:"Yes, we do offer bulk purchases, but we're currently working on automating this feature. In the meantime, please reach out to us directly if you wish to buy any product in bulk. We can assist you further and provide you with a special bulk purchase price"
  },
  tenth:{
    question:"Can i get a recipient for my purchase?",
    answer:"Yes, following your purchase, a receipt will be sent to your registered email. If you don't see it in your inbox, please check your spam folder. Additionally, you can access all your transaction details anytime from your account section on our website"
  },
 
}
export const FAQS_BOTTOM_QUESTION=import.meta.env.VITE_FAQS_BOTTOM_QUESTION;
export const FAQS_BOTTOM_CONTACT=import.meta.env.VITE_FAQS_BOTTOM_CONTACT;

// Footer Component


// Master React with TypeScript Screen (/learnReact)

// heroSection
export const TYPESCRIPT_HERO_HEADING=import.meta.env.VITE_TYPESCRIPT_HERO_HEADING;
export const TYPESCRIPT_HERO_DESCRIPTION=import.meta.env.VITE_TYPESCRIPT_HERO_DESCRIPTION;
export const TYPESCRIPT_HERO_START_BUTTON=import.meta.env.VITE_TYPESCRIPT_HERO_START_BUTTON;
export const TYPESCRIPT_HERO_COURSES_BUTTON=import.meta.env.VITE_TYPESCRIPT_HERO_COURSES_BUTTON;
// Courses Section
export const TYPESCRIPT_COURSES_HEADING=import.meta.env.VITE_TYPESCRIPT_COURSES_HEADING;
export const TYPESCRIPT_COURSES_DESCRIPTION=import.meta.env.VITE_TYPESCRIPT_COURSES_DESCRIPTION;
// courses Details.
 export const coursesTypescript = [
  { 
      id: 1, 
      title: "Introduction", 
      icon: <Card1 />, 
      description: (
        <>
Dive into the basics of React and TypeScript. This section provides a solid foundation by explaining what React and TypeScript are, the differences between a library and a framework, and why and when to choose NextJS as a framework.     
     <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
<li className='course_type_list'  style={{ marginBottom: "5px" }}>
  <span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px",}} >Introduction to React</span>
   <span style={{ float: "right" }}>10 min</span></li>
       
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ fontWeight:"400", float:"left",paddingLeft:"5px" }}>Library vs Framework</i> <span style={{ float: "right" }}>11 min</span></li>
            <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Introduction to TypeScript</i> <span style={{ float: "right" }}>9 min</span></li>

          </ul>
        </>
      )
    },  { id: 2, title: "Development Environment", icon: <TypoCard2/>, 
      description:(<>
Master the essential tools for React development. Learn how to set up Node.js, initialize a new React app, manage your project with GitHub, and deploy your first application.  
    <ul style={{ paddingLeft: "20px",marginTop:"20px" ,fontSize:"16px"}}>
          <li  className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Setting up NodeJS</span> <span style={{ float: "right" }}>12 min</span></li>
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Create a new React App</i> <span style={{ float: "right" }}>12 min</span></li>
            <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Setting up GitHub</i> <span style={{ float: "right" }}>11 min</span></li>
            <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Deploying our first App</i> <span style={{ float: "right" }}>5 min</span></li>

          </ul>
      </>) },
{ id: 3, title: "TypeScript Fundamentals", icon: <TypoCard3 />,
  description:(<>
Immerse yourself in the world of TypeScript. Starting from a broad overview, delve into basic and advanced types, learn about type inference and type annotations, understand functions, classes, interfaces, and generics in TypeScript, and finally, explore various compiler options.      
<ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
            <li  className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Getting Started with TypeScript</span> <span style={{ float: "right" }}>15 min</span></li>
             <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>  Advanced Types</i> <span style={{ float: "right" }}>18 min</span></li>
              <li className='course_type_list'   style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Functions in TypeScript</i> <span style={{ float: "right" }}>31 min</span></li>
              <li className='course_type_list'   style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Classes in TypeScript</i> <span style={{ float: "right" }}>15 min</span></li>
              <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Generics in TypeScript</i> <span style={{ float: "right" }}>26 min</span></li>
              <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Compiler Options</i> <span style={{ float: "right" }}>19 min</span></li>
            </ul>
        </>)
  },
{ id: 4, title: "React Basics", icon: <TypeCard4 />, 
  description:(<>
Lay a solid foundation with the basics of React. Understand JSX and React components, explore Props and State in TypeScript, master event handling, and dive into conditional and list rendering. Learn to work with forms and inputs, unravel the component lifecycle methods, and get a grasp on hooks, including useState, useEffect, and useRef.    
        <ul style={{ paddingLeft: "20px",marginTop:"20px" ,fontSize:"16px"}}>
                    <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > React Components and JSX/TSX</span> <span style={{ float: "right" }}>21 min</span></li>
                     <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>  Props and State in TypeScript</i> <span style={{ float: "right" }}>23 min</span></li>
                      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Event Handling</i> <span style={{ float: "right" }}>17 min </span></li>
                      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Conditional Rendering</i> <span style={{ float: "right" }}>25 min </span></li>
                      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> List Rendering</i> <span style={{ float: "right" }}>8 min</span></li>
                      <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Basic Hooks and Component Lifecycle</i> <span style={{ float: "right" }}>15 min</span></li>
                      <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>DOM Manipulation with Refs</i> <span style={{ float: "right" }}>11 min</span></li>
                      <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Custom Hooks</i> <span style={{ float: "right" }}>23 min</span></li>             
                    </ul>
                </>)
},
{ id: 5, title: "State Management", icon: <TypeCard5 />,
  description:(<>
Manage your application's state efficiently and effectively. Start with an introduction to state management, then dive deep into the useReducer and useContext hooks provided by React. Explore the Redux toolkit for larger applications and learn how to persist state across sessions using local storage.            
     <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
 <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Introduction to State Management</span> <span style={{ float: "right" }}>5 min</span></li>
  <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> React useReducer</i> <span style={{ float: "right" }}>28 min</span></li>
   <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Providers and React useContext</i> <span style={{ float: "right" }}>33 min </span></li>
   <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Redux Toolkit</span> <span style={{ float: "right" }}>24 min</span></li>
  <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Zustand</i> <span style={{ float: "right" }}>16 min</span></li>
   <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Local Storage</i> <span style={{ float: "right" }}>20 min </span></li>                    
                            </ul>
                        </>)
  },
{ id: 6, title: "Style and Design", icon: <Card3 />,
  description:(<>
Discover the art and science of creating appealing UIs. Start with the basics of Figma, follow a design system, and learn to work with images and typography. Understand inline styles, CSS Modules, and the utility-first CSS library - Tailwind CSS. Master responsive design to build mobile-friendly apps.
 <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
     <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >  Figma Basics</span> <span style={{ float: "right" }}>40 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>  Images</i> <span style={{ float: "right" }}>23 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Inline Styles</span> <span style={{ float: "right" }}>19 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> CSS Modules</i> <span style={{ float: "right" }}>11 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Tailwind CSS</span> <span style={{ float: "right" }}>17 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Responsive Design</i> <span style={{ float: "right" }}>11 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Animations</span> <span style={{ float: "right" }}>8 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> UI Libraries</i> <span style={{ float: "right" }}>12 min</span></li>
      <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Following a Design System</span> <span style={{ float: "right" }}>120 min</span></li>                
                                </ul>
                            </>)
  },
{ id: 7, title: "Advanced React", icon: <TypeCard6 />, 
  description:(<>
Dive deeper into React and explore advanced topics that will boost your skill set. Understand the importance of advanced React techniques, fetch data from servers effectively, create advanced custom hooks, and learn how to use React Suspense. Enhance the quality of your code with Strict Mode and linting, learn how to test your components with Jest, and gain the skills to debug your React applications effectively.  
           <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
             <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Introduction and Why</span> <span style={{ float: "right" }}>4 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Data Fetching</i> <span style={{ float: "right" }}>57 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Advanced Custom Hooks</span> <span style={{ float: "right" }}>50 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>React Suspense</i> <span style={{ float: "right" }}>25 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Strict Mode and Linting</span> <span style={{ float: "right" }}>12 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>  Unit testing</i> <span style={{ float: "right" }}>30 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Debugging React</span> <span style={{ float: "right" }}>21 min</span></li>        
                                        
                                        </ul>
                                    </>)
},
{ id: 8, title: "Optimizing Performance", icon: <TypeCard7 />, 
  description:(<>
Learn how to make your React applications run more efficiently and effectively. Master useMemo and useCallback for optimization, implement lazy loading and dynamic imports for efficient code execution. Understand the power of memoization and the benefits of virtualization. Familiarize yourself with the practice of code splitting and optimize your network requests to ensure your application is performing at its best.
<ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
 <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > useMemo</span> <span style={{ float: "right" }}>29 min</span></li>
   <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> useCallback</i> <span style={{ float: "right" }}>18 min</span></li>
   <li  className='course_type_list'style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Memoization</span> <span style={{ float: "right" }}>9 min</span></li>
   <li className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Virtualization</i> <span style={{ float: "right" }}>16 min</span></li>
    
     </ul>
     </>)
},
{ id: 9, title: "Building a Real World Project", icon: <TypeCard8 />,
  description:(<>
     Put all your learning to the test by building a full-fledged eCommerce platform. This hands-on section will guide you through setting up the layout, implementing features like Dark mode, connecting to the backend, managing products, and creating a shopping cart. Get real-world experience in handling payments with Stripe, working with post-payment business logic, and preparing your project for production. The final lessons will conclude the course and help consolidate all that you've learned.
       <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
         <li  className='course_type_list' style={{ marginBottom: "5px",fontWeight:"400",fontSize:"18px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Introduction to Final Project</span> <span style={{ float: "right" }}>8 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px",fontSize:"18px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Project Setup</i> <span style={{ float: "right" }}>7 min</span></li>
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Layout and Hero Section</span> <span style={{ float: "right" }}>10 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Connecting to Firebase</span> <span style={{ float: "right" }}>8 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Firebase Google Auth</i> <span style={{ float: "right" }}>7 min</span></li>
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Data Modeling with Firestore</span> <span style={{ float: "right" }}>10 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Saving Users Profiles in Firebase</span> <span style={{ float: "right" }}>8 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Fetching and Displaying Products</i> <span style={{ float: "right" }}>7 min</span></li>
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Dynamic Route for Checkout</span> <span style={{ float: "right" }}>10 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Intro to Stripe Payments</span> <span style={{ float: "right" }}>8 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Implementing Stripe Payments</i> <span style={{ float: "right" }}>7 min</span></li>
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >  Handling Stripe Webhooks</span> <span style={{ float: "right" }}>10 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Displaying Purchased Products</span> <span style={{ float: "right" }}>8 min</span></li>
           <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Production Readiness</i> <span style={{ float: "right" }}>7 min</span></li>
         
           <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Production Deployment</span> <span style={{ float: "right" }}>10 min</span></li>
            
             </ul>
             </>)
   },
];

// Video Section
export const TYPESCRIPT_VIDEO_HEADING=import.meta.env.VITE_TYPESCRIPT_VIDEO_HEADING;
export const TYPESCRIPT_VIDEO_DESCRIPTION=import.meta.env.VITE_TYPESCRIPT_VIDEO_DESCRIPTION;
export const TYPESCRIPT_VIDEO_TEXT = `
This comprehensive course is <span style="color: #38bdf8;"> available in both English and Spanish </span>, providing a truly bilingual learning experience.
 Enjoy the convenience of accessing lessons in both <span style="color: #38bdf8;">English and Spanish audio </span> simultaneously throughout the entire course!
`;
// main Section (Component)


// pricing Section 
export const TYPESCRIPT_PRICING_HEADING=import.meta.env.VITE_TYPESCRIPT_PRICING_HEADING;
export const TYPESCRIPT_PRICING_DESCRIPTION=import.meta.env.VITE_TYPESCRIPT_PRICING_DESCRIPTION;
export const TYPESCRIPT_PRICING_TEXT=import.meta.env.VITE_TYPESCRIPT_PRICING_TEXT;
// Pricing Cards
export const pricingData = [
  {
    title: "ALL COURSES PASS",
    price: "$24.99",
    duration: "/month",
    subscription:"Monthly subscription",
    head:"Full access to all courses",
    features: [
      "Full access to React Native Course",
      "Full access to React with TypeScript Course",
      "Full access to Git & GitHub Course",
      "Access to future courses at no extra cost",
      "Access to all course updates",
      "Priority email support",
      "No commitment",
      "Cancel anytime"
    ],
    buttonText: "Subscribe",
  },
  {
    title: "ONE-YEAR ACCESS",
    oldPrice: "$100",
    price: "$90",
    duration: "/year",
    head:"One-time payment for full year access - No recurring charges",
    subscription:"One-time payment",
    features: [
      "The Ultimate React with TypeScript Course",
      "Get instant access to lessons the moment they're launched",
      "Detailed video explanations and walkthroughs",
      "Comprehensive, up-to-date and industry-aligned lessons",
      "Learn at your own pace - anytime, anywhere",
      "Access to all future course updates",
      "Hands-on projects and real-world TypeScript applications",
      "Access to source code and detailed project documentation",
      "Develop a robust Full-stack application as your capstone project",
      "Includes access to source code",

    ],
    buttonText: "Purchase",
  },
];
// FAQS SECTION 
export const TYPESCRIPT_FAQS_HEADING=import.meta.env.VITE_TYPESCRIPT_FAQS_HEADING;
export const TYPESCRIPT_FAQS_DESCRIPTION=import.meta.env.VITE_TYPESCRIPT_FAQS_DESCRIPTION;
// FAQS
 export const faqs = [
  { question: "Is any programming experience required to take this course? ", 
    answer: "While we strive to break down complex concepts into understandable bits, it's beneficial if you have some foundational knowledge of TypeScript, React and Git. Check out our courses in case you need to refresh your knowledge" },
  { question: "What programming languages and frameworks do we use in this course?", 
    answer: "In this course, you'll primarily use TypeScript along with React and Next.js. You'll learn how to build and manage applications with these technologies." },
  { question: "What backend and third-party services are covered in this course?", 
    answer: "You'll work with Firebase for the backend and Stripe for handling payments, providing a comprehensive full-stack development experience." },
  { question: "Is this course in English or Spanish", 
    answer: "This course is available in both English and Spanish. You can conveniently switch between English and Spanish audio throughout the entire course, according to your preference." },
    { question: "Is this course up to date?", 
     answer: "Absolutely, this course is kept current with the latest standards and practices in React, TypeScript, and Next.js development. We actively update our lessons to ensure that all content is relevant and functional with the most recent versions." },  
    { question: "I'm a complete beginner,Is this course for me?",
     answer: "Absolutely, this course is designed with beginners in mind. We thoroughly explain all concepts, starting from the basics, and gradually move towards more advanced topics. No prior knowledge of React or TypeScript is required to get started." },
  { question: "I have multiple years of experience in development,is this course for me?",
     answer: "Certainly! Even if you bring years of experience to the table, this course offers value as it covers a broad spectrum of topics. We're confident that you will discover new insights and deepen your understanding of React and TypeScript, irrespective of your current expertise level." },
  { question: "If I purchase this course,how long do I have access to it?", 
    answer: "When you purchase this course, you will have full access for a period of one year. This is a one-time payment, so rest assured that there will be no automatic charges after your initial purchase. If you wish to extend your access after the year, you would need to repurchase the course." },
  { question: "After my 1 year access expires,will you automatically renew it and charge me?",
     answer: "No, your access will not be automatically renewed nor will you be charged again after the 1-year period expires. If you wish to continue your access, you will need to manually repurchase the course." },

  { question: "Is it possible to buy course access in large quantities, for Instance,for a group of students?",
     answer: "Yes, we do offer bulk purchases, but we're currently working on automating this feature. In the meantime, please reach out to us directly if you wish to buy any product in bulk. We can assist you further and provide you with a special bulk purchase price" },

  { question: "Can i get a recipient for my purchase?", 
    answer: "Yes, following your purchase, a receipt will be sent to your registered email. If you don't see it in your inbox, please check your spam folder. Additionally, you can access all your transaction details anytime from your account section on our website" },
    ];
    
// Footer component
