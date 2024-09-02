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
                frontContent:"placeholder placeholder placeholder placeholder placeholder",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"framework"
            },
            {
                title:"Html",
                image:"/logos/HTML5.png",
                frontContent:"placeholder placeholder placeholder placeholder placeholder",
                backContent: "placeholder placeholder placeholder placeholder placeholder",
                type:"language"
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