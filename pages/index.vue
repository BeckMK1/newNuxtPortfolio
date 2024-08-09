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
    githubLink:"#",
    webLink:"#",
    projectId:"placeholder1",
    title:"Placeholder",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qua tu etiam inprudens utebare non numquam. Equidem, sed audistine modo de Carneade?",
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
    githubLink:"#",
    webLink:"#",
    projectId:"placeholder2",
    title:"Placeholder 2",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qua tu etiam inprudens utebare non numquam. Equidem, sed audistine modo de Carneade?",
    tech:[
        "Nuxt",
        "Fontawsome",
        "Firebase",
        "Scss"
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