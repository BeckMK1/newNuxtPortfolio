<template>
    <div>
        <HeroSliderCom :slides="slides"></HeroSliderCom>
        <section id="quickAboutMe" class="mainPageContent"> 
            <h3>Placeholder title</h3>
            <p>sum dolor sit amet, consectetur adipiscing elit. Non autem hoc: igitur ne illud quidem. De quibus cupio scire quid sentias. Ita nemo beato beatior. Rationis enim perfectio est virtus; </p>
            <NuxtLink class="linkBtn" to="/aboutMe">Next</NuxtLink>
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
</style>