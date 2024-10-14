<template>
    <div>
        <HeroSliderCom :slides="slides"></HeroSliderCom>
        <section id="quickAboutMe" class="mainPageContent"> 
            <h3>Who am I?</h3>
            <p><strong>My name is Mikkel Beck Knudsen,</strong> I am a webdeveloper who graduated as a Multimedia designer from <a href="https://www.eaaa.dk/" target="_blank">Aarhus erhvervs akademi</a> and I also graduated as a Multimedia integrator from <a href="https://videndjurs.dk/" target="_blank">Viden Djurs</a> in Grenaa.
            I love making and learning new things and I have worked with a diverse set of tools such as: Nuxt, Umbraco, Drupal, WordPress, Node.js, MongoDB, Firebase and i am always looking to expand what I know. 
            </p>
            <NuxtLink class="linkBtn" to="/aboutMe">Read more</NuxtLink>
        </section>
    </div>
</template>
<script setup>
const slides = ref([
{
    image: "/images/slides/testImage1.jpg",
    githubLink:"",
    webLink:"",
    projectId:"PreLobby",
    title:"Pre Lobby",
    content:'This is a project I made for my final examen.It a website were people can create lobbies for games. The goal was to make an alternative to the build-in matchmaking systems that exist in many videogames.',
    tech:[
        "Nuxt",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Mongoose.js",
        "Pinia",
        "Fontawsome"
    ]

},
{
    image: "/images/slides/testImage2.jpg",
    githubLink:"",
    webLink:"",
    projectId:"DesignArchitects",
    title:"Design Architects",
    content:"This is a Project I made for my final examen. This project was mad over 3, 8 hour, days and the propose was to show what I can do under a short time limet.   ",
    tech:[
        "Nuxt",
        "Fontawsome",
        "Firebase",
        "Scss"
    ]

},
{
    image: "/images/slides/testImage2.jpg",
    githubLink:"",
    webLink:"",
    projectId:"Watchlist",
    title:"Watchlist",
    content:"This was a school project where I made a watchlist website, where people can make watchlist for themsleves or their friend group.",
    tech:[
        "Vue",
        "Fontawsome",
        "Firebase",
        "Scss",
        "Pinia",
        "Open movie database api",
    ]

},
])
</script>
<style lang="scss" scoped>
    .mainPageContent{
        margin-top: 3rem;
        p{
            width: 100%;
        }
    }
    p a{
        color: white;
        font-weight: bold;
    }
</style>