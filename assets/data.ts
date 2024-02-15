import ProjectProps from "@/models/ProjectProps";

export const projects : ProjectProps[] = [
    {
        id : 1,
        name : "Shopiee",
        url : 'https://cloud.appwrite.io/v1/storage/buckets/65cdb557ba388c1c2572/files/65cddda0b1e5d5b822e5/view?project=65cdb53942bee5c0d1f3&mode=admin',
        shortDescription : "E-commerce Shopping Website offers wide variety of products, where user can buy with seamless and secure experience.",
        techStack : [
            'TS','NextJS','Styled Components', 'Resend'
        ],
        longDescription : "Shopiee is an e-commerce platform where users can register accounts to browse, select, and purchase products online. Upon registration, users can explore various categories like electronics, fashion, home goods, and more. Detailed product listings provide information such as images, descriptions, prices, and customer reviews. Users can easily add desired items to their virtual shopping carts for later purchase. At the checkout, they enter shipping details and select a preferred payment method, which can include credit/debit cards or PayPal. Shopiee ensures secure payment processing and sends users an order confirmation email once the transaction is complete.",
        liveWebsite : "https://shopiee-mocha.vercel.app/",
        githubWebsite : "https://github.com/Syeda-Zahra79/Shopiee",
    },
    {
        id : 2,
        name : "Estate Heavens",
        url : 'https://cloud.appwrite.io/v1/storage/buckets/65cdb557ba388c1c2572/files/65cdb5e92aacec79a89a/view?project=65cdb53942bee5c0d1f3&mode=admin',
        shortDescription : "Real Estate Listing Website that lists real-time available properties from Realtor API and incorporates Youtube Videos and Google Maps.",
        techStack : [
            'TS','NextJS','TailwindCSS', 'Google Maps', 
        ],
        longDescription : "A real estate website which integrates the Realtor API to fetch real-time property listings, enabling users to search for properties based on their preferences. It utilizes Google Maps for precise location visualization and incorporates YouTube video players for virtual tours where available, enhancing user engagement and decision-making. With comprehensive search functionality and seamless integration of external APIs, it is a user-friendly platform for navigating the housing market.",
        liveWebsite : "https://estate-heavens.vercel.app/",
        githubWebsite : "https://github.com/Syeda-Zahra79/Estate-Heavens",
    },
    {
        id : 3,
        name : "FoundCareer",
        url : 'https://cloud.appwrite.io/v1/storage/buckets/65cdb557ba388c1c2572/files/65cddd8937ab9c6f3a86/view?project=65cdb53942bee5c0d1f3&mode=admin',
        shortDescription : "Job Viewing Platform that allows to view the jobs from different industry and locations and provides details about those.",
        techStack : [
            'SCSS','AngularJS',"Rapid API", 
        ],
        longDescription : "A job search platform which empowers users to explore employment opportunities across various locations and industries, offering a user-friendly interface for browsing job listings and applying directly through provided links. With robust search functionalities, users can refine their job searches based on criteria such as location and job type, streamlining the process of finding relevant job opportunities.",
        liveWebsite : "https://found-career.vercel.app/",
        githubWebsite : "https://github.com/Syeda-Zahra79/FoundCareer",
    },
    {
        id : 4,
        name : "FeedVerse",
        url : 'https://cloud.appwrite.io/v1/storage/buckets/65cdb557ba388c1c2572/files/65cdb593e5392c4563a8/view?project=65cdb53942bee5c0d1f3&mode=admin',
        shortDescription : "News Website that allows the users to view international news by authenticating using Google or Github.",
        techStack : [
            'NextTJS',"Google OAuth", "Github OAuth"
        ],
        longDescription : "FeedVerse offers users a seamless experience by allowing authentication via Google or GitHub, ensuring secure access. Users are greeted with a curated feed of top news articles from various sources, prioritizing general category news. Additionally, users can personalize their experience by selecting from multiple categories, enabling them to explore worldwide news tailored to their interests. Each news article provides comprehensive details, and users can delve deeper into the topic by visiting the provided links for further information. This intuitive platform empowers users to stay informed while offering flexibility and convenience in accessing news content",
        liveWebsite : "https://feedverse-9c6d.vercel.app",
        githubWebsite : "https://github.com/Syeda-Zahra79/Authentication-News-App",
    },
] 