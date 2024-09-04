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
                backContent: "Using Nuxt was a natural transition coming from Vue. I am a big fan of Nuxt's expansive feature set and it's many QOL fatures. I still have a lot to lean about Nuxt and there are many features I have not even touched yet but I alway look forward to learning more.",
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
                backContent: "I see CSS as an ever expanding moutaint, there heigher you clime it the taller it grows. I feel like I have gotton pertty good at CSS over the years but I still have a lot to learn ",
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
                backContent: "Ah JavaScript. I like JS even whit it's wierd inconsistensies. I would not call my self an expert in JavaScript but I have yet to incounter an problem i could not slove.  ",
                type:"language"
            },
            {
                title:"Tailwind",
                image:"/logos/Tailwind.png",
                frontContent:"I have used Tailwind in some projects and I finde it easy an intuative to use",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"libary/plugins"
            },
            {
                title:"Node.js",
                image:"/logos/NodeJs.png",
                frontContent:"Other then install NPM packages I have used it to make Rest APIs and AUTH systems",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Other"
            },
            {
                title:"Umbraco",
                image:"/logos/umbraco.png",
                frontContent:"When I worked for Generaxion I worked and I have made many websites in it",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"CMS"
            },
            {
                title:"Drupal",
                image:"/logos/Drupal.png",
                frontContent:"I currently work at AUXO and we use Drupla, I have made a lot of websties using it",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"CMS"
            },
            {
                title:"Bootstarp",
                image:"/logos/Bootstrap.png",
                frontContent:"I have used Bootstrap a lot for work so i have a good amout of experiance with it",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"libary/plugins"
            },
            {
                title:"Github",
                image:"/logos/github.png",
                frontContent:"I use GitHub to manage all of my personal projects",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Other"
            },
            {
                title:"Vue",
                image:"/logos/Vue.png",
                frontContent:"This was the first JS framework I was interduced to and I have ueds it ever since",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"framework"
            },
            {
                title:"MongoDB",
                image:"/logos/MongoDB.png",
                frontContent:"I have used mongoDB of a data base for a cuple of projects now and I find it easy and intuative to use",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Other"
            },
            {
                title:"Photoshop",
                image:"/logos/Photoshop.png",
                frontContent:"While I am no photoshop pro, I have used it a lot to edit images so they can better fit on a website",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Programs"
            },
            {
                title:"Xd",
                image:"/logos/XD.png",
                frontContent:"This was the first mockup program I was interduced to and I have made many mockups in it",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Programs"
            },
            {
                title:"Figma",
                image:"/logos/Figma.png",
                frontContent:"This is my mockup program of choise, because it is free and it has all the features I need ",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"Programs"
            },
            {
                title:"Pinia",
                image:"/logos/Pinia.png",
                frontContent:"I use Pinia in most of my Vue/Nuxt projects as local storage",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"libary/plugins"
            },
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