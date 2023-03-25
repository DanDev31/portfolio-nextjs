import projectOne from "../public/project_1.png";
import projectTwo from "../public/project_2.png";
import projectThree from "../public/project_3.png";
import projectFour from "../public/project_4.png";




export const projectsData = [
    {
        title:"Dogs App",
        description:"This application consumes the API https://api.thedogapi.com/ and displays different dog breeds, which can be sorted and filtered by name, temperament, weight, and alphabetical order. Additionally, you can create your own custom dog breed, which is stored in the database and displayed on the initial screen.",
        stack:["React", "Redux", "Sass", "NodeJS", "PostgreSQL"],
        image: projectOne
    },
    {
        title:"Modern Bank Website",
        description:"A beautiful website focused on the banking or financial sector. It features the classic and well-known sections such as the hero, informative main content, a testimonials slider, and a footer.",
        stack:["React", "Tailwind CSS"],
        image: projectTwo
    },
    {
        title:"Movies App",
        description:"This is a movie application that has sections organized by genre, as well as a filter by name. The login and registration system is validated from the front-end and the user information is stored in the Firebase database.",
        stack:["React", "TypeScript", "Firebase"],
        image: projectThree
    },
    {
        title:"PC Gamers E-Commerce",
        description:"A simple but functional e-commerce site with a theme focused on selling gamer computer parts. It has various filters through search bars and checkboxes. It allows adding products to the cart, and finally making the purchase, but not before being logged in to your account.",
        stack:["React", "Redux", "NodeJS", "PostgreSQL"],
        image: projectFour
    }

]