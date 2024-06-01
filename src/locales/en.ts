import { title } from "process";

export default {
  login: {
    login: "Login",
    username: "Username",
    password: "Password",
    rememberMe: "Remember Me",
    forgotPassword: "Forgot Password?",
    createAccount: "Create a new Account",
    loginUsing: "Log In Using",
    submit: "Submit",
  },
  register: {
    register: "Register",
    username: "Username",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    submit: "Submit",
    alreadyHaveAnAccount: "Already have an account?",
  },

  searchBar: {
    placeholder: "Search for products...",
  },
  landing: {
    welcome: "Welcome To VUENNO",
    phrase:
      "World's finest farming machinery now available for you anywhere. We bring you the best quality products at the best prices.",
    goToStore: "Go To The Store",
    getStarted: "How To Get Started",
    stages: {
      first: {
        borderTitle: "Finest Machinery",
        title: "Restore, Enhance, Protect",
        first:
          "We are dedicated to providing top-quality agricultural machinery that ensures the well-being of the land, the farmers, our customers, and the environment.",
        second:
          "Our continuous innovation shows promising advancements as we develop machinery that supports sustainable farming practices, contributing to reduced environmental impact and enhanced productivity.",
      },
      second: {
        borderTitle: "Environment",
        title: "Sustainable Energy Initiatives",
        first:
          "At AgroCult, we are deeply committed to the principles of sustainability and environmental stewardship. Recognizing the critical importance of water and energy conservation in modern agriculture, we have developed a range of innovative machinery designed to address these vital issues.",
        second:
          "Our latest irrigation systems represent a significant leap forward in water management technology. Utilizing precision drip irrigation techniques, these systems ensure that water is delivered directly to the plant roots, minimizing evaporation and runoff.",
      },
      third: {
        borderTitle: "The Team",
        title: "Our Dedicated Agricultural Experts",
        first:
          "Our team members are more than just employees; they’re the backbone of our company. We invest in their growth and well-being, knowing that their expertise and dedication drive our success. Our shared commitment to excellence in agricultural technology makes us a strong and innovative partner for farmers everywhere.",
      },
    },
    aboutCompany: "About The Company",
    aboutUs:
      "AgroCult was founded in 1980 by visionary agricultural engineer Amiran Zhvania, who had a dream to revolutionize farming practices.",
    aboutUsSecond:
      " With a deep passion for the land and a relentless drive for innovation, Amiran set out to create a company that would provide farmers with the most advanced and reliable agricultural machinery available.",
  },

  about: {
    title: "About Us",
    openingParagraph:
      "AgroCult is a leading provider of agricultural machinery and equipment, dedicated to supporting farmers and agricultural businesses worldwide. Our mission is to help farmers achieve greater productivity, efficiency, and sustainability through the use of innovative technology and advanced machinery.",
    secondOpeningParagraph:
      "We offer a wide range of products and services designed to meet the diverse needs of modern agriculture, from precision irrigation systems to cutting-edge harvesting equipment. Our team of agricultural experts is committed to providing the highest level of service and support to our customers, ensuring that they have the tools and resources they need to succeed.",
    charities: {
      title: "AgroCult Charities",
      openingParagraph:
        "AgroCult’s commitment to the community extends beyond technological innovation. In 2005, the company established AgroCult Charities, a non-profit organization dedicated to supporting agricultural communities worldwide. Through this initiative, AgroCult has funded numerous projects, including the construction of wells in drought-stricken areas, the development of educational programs for young farmers, and the provision of emergency aid to regions affected by natural disasters.",
    },
    futureGoals: {
      title: "Future of AgroCult",
      openingParagraph:
        "As we look to the future, AgroCult remains committed to its core values of innovation, sustainability, and community. We are constantly exploring new technologies and techniques to improve the efficiency and productivity of modern agriculture, while also working to reduce the environmental impact of farming practices. Our goal is to be a leader in the development of sustainable agricultural solutions, helping farmers around the world to feed their communities and protect the planet for future generations.",
      secondOpeningParagraph:
        "We invite you to join us on this journey as we work together to build a brighter, more sustainable future for agriculture.",
    },
  },
  store: {
    topSelling: "Top Sellers",
    startPayingPhrase: "Start Paying monthly for",
    buy: "Buy",
  },

  navigation: {
    home: "Home",
    store: "Store",
    profile: "Profile",
    blogs: "Blogs",
    about: "About",
    contact: "Contact",
    logout: "Log Out",
  },
  blogs: {
    seeMore: "See More",
    goBack: "Go Back",
  },
  profile: {
    title: "Edit Your Profile",
    username: "username",
    email: "email",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    submit: "Submit",
  },
  contact: {
    firstPhrase: {
      main: "Is it urgent? Have a live chat with our assistant!",
      sub: "Click Here",
    },
    secondPhrase: {
      main: "Call us on our hotline and we will answer you ASAP!",
      sub: "+(XXX)-XXX-XXX",
    },
    thirdPhrase: {
      main: "Email us at our support email and we will answer you ASAP!",
    },
    form: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      description: "Description",
      topicLabel: "Topic",
      topics: {
        billing: "Billing Issue",
        transportation: "Transportation Issue",
        account: "Problem with an account",
      },
      submit: "Submit",
    },
  },
  footer: {
    rights: "© 2024 Agrocult. All Rights Reserved",
    links: {
      trackShipment: "Track Shipment",
      about: "About",
      contact: "Contact",
      profile: "Profile",
    },
  },
} as const;
