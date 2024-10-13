export const useGlStore = defineStore('glStore', {
    state: () => ({
        currentProject: '',
        projects:[
            {
                title:'Pre Lobby',
                id:"PreLobby",
                content:` <p class="leadin">This is a project I made for my final examen.
                    It a website were people can create lobbies for games. The goal was to make an alternative to the build-in matchmaking systems that exist in many videogames.</p>
                   <p>It a website were people can create lobbies for games. The goal was to make an alternative to the build-in matchmaking systems that exist in many videogames.</p>
                   <p>For this project I needed a way for users to make an account and login, I also needed a way for the users to make a lobby and join one.</p>
                   <p>To accomplish this I wrote my backend in Node.js using express.js and mongoose.js.
                    For my database I used MongoDB since it was what I had the most experience with.</p>
                    <p>For my frontend I used Nuxt.js, I have used it a lot in the past and I think it is excellent for making these types om super dynamik websites in.</p>
                    <p>The main challenge for me in this project was the backend part, I have not worked too much with backend so I had a lot of stuff to learn.</p>`
            },
            {
                title:'Design Architects',
                id:"DesignArchitects",
                content:`<p>This is a project i made as a part of my examen. It is am website for a fictional architect company.</p> <p>This project was more about design and being able to make a website for filling a list of requirements.</p> <p>I had 3 days to make it. The frontend I made in Nuxt and for the backend I used Firebase</p>`
            }
        ],
        filteredProjects:[],
        cards:[
            {
                title:"Nuxt",
                image:"/logos/NuxtWhite.png",
                frontContent:"This is my framework of choice and I builds most of my projects in it",
                backContent: "I have properly made around 15 projects using Nuxt. 1 of the projects was making a profile page for Wedio when I had my internship there. Most of my own web projects are build using Nuxt thees days.",
                type:"framework"
            },
            {
                title:"HTML",
                image:"/logos/HTML5.png",
                frontContent:"Almost every project I make is a website so i have alot of expirance with HTML",
                backContent: "I have learned a lot over the years of using HTML from cool patterns to the ever expanding list of HTML tags. One of the biggest think I have leaned about HTML is not to think about it in isolation but to consider how it works togetter with CSS and JavaScript.",
                type:"language"
            },
            {
                title:"CSS",
                image:"/logos/CSS3.png",
                frontContent:"I have used CSS for many years now, from my own projects to other peoples codebases",
                backContent: "Of course  I have a lot of CSS experience since it is in every web project you could think of. So I have used in almost every project i have done since I started learning programming about 5 years ago.",
                type:"language"
            },
            {
                title:"Sass",
                image:"/logos/SASS.png",
                frontContent:"I prefer SCSS over vanilla CSS and I use it for my on projects as well as for work",
                backContent: "This is how I like to write CSS while alot of SASS features have been added to CSS over the years I still finde SASS's impamintaion to be better and more intuative.",
                type:"libary/plugins"
            },
            {
                title:"JavaScript",
                image:"/logos/JavaScript.png",
                frontContent:"I dont have as much expiriacne as I do with CSS and HTML but I feel like i lean something new every time I use it",
                backContent: "JavaScript is the first programming language I really learn, if you don't consider HTML and CSS programming language. I have used it most my my project my now, but not as much as HTML and CSS ",
                type:"language"
            },
            {
                title:"Tailwind",
                image:"/logos/Tailwind.png",
                frontContent:"I have used Tailwind in some projects and I finde it easy an intuative to use",
                backContent: "I have only used Tailwind in my projects, and i vastly prefer it over Bootstrap. But I dont use it in every project as I don't find it to be too use full in smaller projects" ,
                type:"libary/plugins"
            },
            {
                title:"Node.js",
                image:"/logos/NodeJs.png",
                frontContent:"Other then install NPM packages I have used it to make Rest APIs and AUTH systems",
                backContent: "I have used Node.js to build my api of my most resent exam project, so I dont have the most amount of experience with it, but in the 3 weeks I had to build it I was able to learn how to do it and implement it  ",
                type:"Other"
            },
            {
                title:"Umbraco",
                image:"/logos/umbraco.png",
                frontContent:"When I worked for Generaxion I worked and I have made many websites in it",
                backContent: "I have made around 10 websites in Umbraco, and I learned a lot, most importantly not just how to make the websites but also how to make a good user experience for the customer when they them selves have to change the content on their website    ",
                type:"CMS"
            },
            {
                title:"Drupal",
                image:"/logos/Drupal.png",
                frontContent:"I currently work at AUXO and we use Drupla, I have made a lot of websties using it",
                backContent: "I have worked on or made properly over 100 websites In Drupal while I work at AUXO. And I think I can do most things I need to do in Drupal. ",
                type:"CMS"
            },
            {
                title:"Bootstarp",
                image:"/logos/Bootstrap.png",
                frontContent:"I have used Bootstrap a lot for work so i have a good amout of experiance with it",
                backContent: "I have used Bootstrap on many projects and I feel like I have a good understanding of how to use it. I am not the biggest fan of it and I dont use it in my own projects, but I have used it a lot for work.",
                type:"libary/plugins"
            },
            {
                title:"Github",
                image:"/logos/github.png",
                frontContent:"I use GitHub to manage all of my personal projects",
                backContent: "I use GitHub to store and manage all of my project's and I also used it for work when i worked at Wedio.",
                type:"Other"
            },
            {
                title:"Vue",
                image:"/logos/Vue.png",
                frontContent:"This was the first JS framework I was interduced to and I have ueds it ever since",
                backContent: "While I mostly use Nuxt thees days, I still love vue and since Nuxt is build on Vue I always try to keep up with what is new in Vue. ",
                type:"framework"
            },  
            {
                title:"MongoDB",
                image:"/logos/MongoDB.png",
                frontContent:"I have used mongoDB of a data base for a cuple of projects now and I find it easy and intuative to use",
                backContent: "MongoDB was the first database i learned how to use, and it gave me a border interested for development outside of just websites  ",
                type:"Other"
            },
            {
                title:"Photoshop",
                image:"/logos/Photoshop.png",
                frontContent:"While I am no photoshop pro, I have used it a lot to edit images so they can better fit on a website",
                backContent: "Most of the work i do in Photoshop is stuff like removing backgrounds from logos and expanding images to better fit on websites",
                type:"Programs"
            },
            {
                title:"Xd",
                image:"/logos/XD.png",
                frontContent:"This was the first mockup program I was interduced to and I have made many mockups in it",
                backContent: "I manly used this when i was in school to design the layout of websites, but when i lost access to Adobe CC i switched to Figma",
                type:"Programs"
            },
            {
                title:"Figma",
                image:"/logos/Figma.png",
                frontContent:"This is my mockup program of choise, because it is free and it has all the features I need ",
                backContent: "",
                type:"Programs"
            },
            {
                title:"Pinia",
                image:"/logos/Pinia.png",
                frontContent:"I use Pinia in most of my Vue/Nuxt projects as local storage",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"libary/plugins"
            },
        ],
        aboutMe:[
            {
                title:"About Me",
                content:` 
                    <p>My name is Mikkel Beck Knudsen, I am 29 years old and I am educated in Multimedia design and Multimedia integration.</p>
                    <p>I have always loved playing with computers, Most of that passion comes from my love of Video games, but since I started learning about programming my interesses has deepen to understand how computers and program work on a more fundamental level.</p>
                    <p>I love complexity, and learning new things. This is most exemplified in the games and media I like.</p>
                    <p>I often go for the stuff where you can dive deep, things you you can spend a 1000 hours plus on and still feel like you are just schering the surface.</p>
                    <p>I am always looking for something new to learn, right now I am trying to learn GO-lang because I want to learn more languages and it looked like a good way to start.</p>`,
            }
        ]
    }),
    actions:{
        setCurrentProject(data){
            this.currentProject = data
        },
        setFilteredProjects(data){
            this.filteredProjects = data
        }
    }
})