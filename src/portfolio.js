/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "U S A M A H",
  title: "Hello, I'm Usamah",
  subTitle: emoji(
    // ""Diving into the realm of robotics, I engineer software solutions that bring machines to life."
    "I engineer code for cutting-edge robots, bridging imagination with functionality as a robotics software engineer 🤖 🦿"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/usamahz",
  linkedin: "https://www.linkedin.com/in/usamahzaheer/",
  gmail: "usamah_z@icloud.com",
  gitlab: "",
  facebook: "",
  medium: "https://medium.com/@usamah1",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "I bring these skills and values",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Development of path planning and motion planning algorithms ➗"
    ),
    emoji("⚡ Deploying computer vision into robots 🧠"),
    emoji(
      "⚡ Working with low-level stuff 🦖"
    ),
    emoji(
      "⚡ Highly adaptable to advancing technologies 🔮"
    ),
    emoji(
      "⚡ Team player and a leader 🧑‍🤝‍🧑"
    ),
    emoji(
      "⚡ Excellent communicator and emotionally intelligent🎙️"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code" 
    },
    {
      skillName: "ROS",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Agile",
      fontAwesomeClassname: "fas fa-code"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fas fa-code
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-code"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fas fa-codeon"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Leicester",
      logo: require("./assets/images/lei.png"),
      subHeader: "Master of Science in Embedded Systems and Control Engineering",
      duration: "January 2021 - July 2022",
      desc: "Final Project - Performance Evaluation of Deep Learning Techniques for Object Detection in Autonomous Vehicles"
    },
    {
      schoolName: "Jawaharlal Nehru Technological University",
      logo: require("./assets/images/uniLogo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "August 2016 - September 2020",
      desc: "Final Project - Face recognition based attendance using MATLAB"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C++", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "C Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Agile Methodologies",
      progressPercentage: "70%"
    },
    {
      Stack: "Research and Analytics",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Robotics Software Engineer",
      company: "Dyson",
      companylogo: require("./assets/images/dyson.png"),
      date: "September 2022 – Present",
      desc: "      ",
      descBullets: [
        "Robotics Software Engineer in the Intelligent Machines Robotics Behaviors team.",
        "Developing path planning and motion planning systems.",
        "Advancing global mapping and robotics algorithms.",
        "Using C++ and Agile Methodologies."
      ]
    },
    {
      role: "Research Assistant",
      company: "University of Leicester",
      companylogo: require("./assets/images/lei.png"),
      date: "December 2021 – August 2022",
      descBullets: [
      "Programming and development of an existing algorithm in Python that utilizes high-resolution spectral data on Linux-based High-Performance Computers (HPC).",
      "Liaising with an industry partner (CGI) to deploy the application on a system hosted by the University.",
      "Generating results for study areas depending on the end-user needs.",
      "Contributing to deliverables and reports alongside attending project progress meetings."]
    },
    {
      role: "Research Assistant",
      company: "University of Leicester",
      companylogo: require("./assets/images/lei.png"),
      date: "March 2021 – October 2021",
      descBullets: [
      "A key part of the science team of the research project Artificial Intelligence for Earth Observation (AI4EO) as part of the University of Leicester in collaboration with CGI and the European Space Agency (ESA).",
      "- Programming and application of Machine Learning algorithms.",
      "- Automation of processes and improving the efficiency of the system using Python.",
      "- Analysed PointNet and VoxelNet deep learning architectures for point cloud-based 3D object detection.",
      "- Executing computations in Linux-based High-Performance Computers (HPC).",
      "- Accomplishing in liaison with the science lead of the team."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Hobbies"),
  subtitle:
    emoji("Apart from my hobby turned profession, I also do these stuff on the side! 🏆"),

  achievementsCards: [
    {
      title: "Weightlifting",
      subtitle:
        "Deadlifts and bench presses keeps me going with discipline and a healthy lifestyle",
      image: require("./assets/images/deadlift.jpg"),
      imageAlt: "My Deadlift",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Fingerstyle Guitar",
      subtitle:
        "New one where I've been learning to play my favourite songs in acoustic fingerstyle. To know more about this look for Eddie van der Meer, you'll love it!",
      image: require("./assets/images/IMG_5675.jpeg"),
      imageAlt: "My Guitar",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Reading",
      subtitle: "My bookshelf is about to give up with the weight of non-fiction full of wisdom",
      image: require("./assets/images/IMG_3142.jpeg"),
      imageAlt: "My book",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Café Hopping",
      subtitle:
        "I'm a teetotaller where I crawl on cafés over pubs every weekend morning!",
      image: require("./assets/images/IMG_7874.jpeg"),
      imageAlt: "My Coffee and cinammon bun",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "Travelling",
      subtitle:
        "Soloing through far-away lands of new cultures on my own is where I find myself",
      image: require("./assets/images/C9B04ADF-B30F-4A0C-B2BB-CA70849A7603_1_105_c.jpeg"),
      imageAlt: "Me in Hiroshima",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "Creating",
      subtitle:
        "Creation over consumption is what I think, always excited to write code over watching Netflix!",
      image: require("./assets/images/IMG_3.jpg"),
      imageAlt: "My computer",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  // title: emoji("Contact Me ☎️"),
  // subtitle:
  //   "",
  // number: "",
  // email_address: "usamah_z@icloud.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  workExperiences,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
