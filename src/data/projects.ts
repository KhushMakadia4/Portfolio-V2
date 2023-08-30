import { Project } from "@/utils/types"

const projects: Project[] = [
  {
    name: "Parivartan",
    image: "/parivartanhome.png",
    shortDescription:
      "A data visualization tool for Indian pre-school performance.",
    longDescription:
      "Parivartan is a data visualization tool created for the Meraki Foundation nonprofit to be used by the Government of India to monitor how many resources and amenities Indian preschools have in certain regions and allocate funding properly. Parivartan replaces Meraki’s original, inefficient Google Sheets dataset solution with a Google Apps Script + Supabase solution which cleans and filters the Google Sheets datasets into usable and relevant data. The backend also incorporates tiered OTP authentication for each level of the Indian Government bureaucracy so that a district-level government official can only see data for their district and its subregions. The frontend incorporates mobile responsiveness, tier-based data and visuals, and most importantly, accessible and indicative data visuals that indicate relevant data for each school or region's resources based on numerous iterations of user testing and research.",
    tech: [
      "NextJS",
      "PostgreSQL",
      "T3 Stack",
      "Supabase",
      "Prisma",
      "Typescript",
      "Chakra UI",
      "Figma"
    ],
    links: {
      deployment: "https://parivartan.vercel.app/"
    }
  },
  {
    name: "Brink Web App",
    image: "/brink.png",
    shortDescription:
      "Accessible and handicap-friendly web app for the Brink Election Guide.",
    longDescription:
      "Brink Web App is a project designed for the Brink nonprofit that has the sole purpose of delivering election and polling data to users who have disabilities. Since the app is very focused on being highly accessible, the frontend has been tirelessly tested by numerous accessibility tools and real disabled voters. Each and every single element of the product is managed by Contentful CMS or is fetched and cleaned through the Google Civic API and every feature is made to be accessible, mobile responsive, and easy to read. The app also incorporates user tools that help you increase text sizes, screen color, contrast settings, and more.",
    tech: [
      "Google Civic API",
      "Typescript",
      "React",
      "Chakra UI",
      "Contentful",
      "Figma"
    ],
    links: {
      deployment: "https://web.brinkapp.co/landing",
      article: "https://uiuc.hack4impact.org/projects/brink"
    }
  },
  {
    name: "Epicenter",
    image: "/epicenter.png",
    shortDescription:
      "Web and mobile infrastructure for synced earthquake emergency response.",
    longDescription:
      "Originally made for the HackIllinois hackathon, Epicenter was inspired by the ongoing Turkey earthquakes at the time. The goal of the project is to synchronously find out where the most affected areas are after an earthquake through public help. Through the web application, you can view and create an area that might have been affected which in turn will send out alerts to the mobile apps of those who are in the specific region. Then the people with the mobile app would declare if they are safe or not. This data then gets populated to a map through green or red dots representing people and indicating their level of safety which would naturally create patterns and show dangerous areas.",
    tech: [
      "React",
      "Typescript",
      "Mapbox",
      "Figma",
      "Firebase",
      "Web + Mobile"
    ],
    links: {
      deployment: "https://epicenter.vercel.app/",
      article:
        "https://devpost.com/software/epicenter-k4u5wz?ref_content=my-projects-tab&ref_feature=my_projects"
    }
  },
  {
    name: "CCSTutoring",
    image: "/ccstutoring.png",
    shortDescription: "Dashboard for Conant High School’s CS tutoring system.",
    longDescription:
      "CCSTutoring is a dashboard designed for Conant High School’s Computer Science department with the aim of digitizing the whole tutoring process. Originally, student tutors would have to take shifts and be present in a tutoring room which lead to an issue when not many students came to tutoring. With CCSTutoring, this entire process gets digitized where students seeking help can make posts regarding their issues and tag relevant images at which point a tutor can use the dashboard to agree and pick up a student’s request and arrange calls or meetings outside of the dashboard.",
    tech: [
      "NextJS",
      "Firebase",
      "SSR",
      "Realtime Database",
      "Messaging",
      "User Research"
    ],
    links: {
      github: "https://github.com/KhushMakadia4/CCSTutoring"
    }
  },
  {
    name: "Trucycle",
    image: "/trucycle.png",
    shortDescription: "Safe and proper recycling assistant.",
    longDescription:
      "Awarded a finalist position in the Congressional App Challenge, Trucycle is an app that addresses improper recycling in communities by providing users with information on recycling and assisting them with their recyclables. The user can scan a product’s barcode on this app which will then find out information about this product through their UPC barcode and through rounds of API forwarding, Trucycle generates a list of places where you can safely recycle the said product. Additionally, Trucycle keeps a reward badge system to motivate users to recycle more and offers current news on recycling.",
    tech: ["Android Studio", "Java", "Firebase", "Jetpack"],
    links: {
      github: "https://github.com/Rishit-5/Trucycle",
      article: "https://www.youtube.com/watch?v=DJPDs6PJGjU&t=57s"
    }
  },
  {
    name: "CHS Hack Club Website",
    image: "/chshackclubweb.png",
    shortDescription: "Displaying Conant’s Hack Club resources and projects.",
    longDescription:
      "Since Hack Club’s Conant High School chapter was founded in 2019, it did not have a centralized place to showcase the projects the members of the club had made. Therefore the Hack Club Website was made to put all of the club's resources and projects in one place. Members of the club would submit projects to the leaders who would then display these projects on the website with detailed images, videos, articles, etc. Additionally, the site helps show current events happening in the club, what the club is learning, and the resources they use to make their projects.",
    tech: ["Firebase", "React", "MaterialUI", "Real-time Database"],
    links: {
      github: "https://github.com/Conant-Hack-Club/Conant-Hack-Club-Website",
      deployment: "https://conant.hackclub.com/"
    }
  }
]

export default projects
