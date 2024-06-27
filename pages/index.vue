<template>
    <div>
        <HeroSliderCom :slides="slides"></HeroSliderCom>
        <section id="aboutMe" class="mainPageContent"> 
            <h3>Placeholder title</h3>
            <p>sum dolor sit amet, consectetur adipiscing elit. Non autem hoc: igitur ne illud quidem. De quibus cupio scire quid sentias. Ita nemo beato beatior. Rationis enim perfectio est virtus; </p>
        </section>
    </div>
</template>
<script setup>
const slides = ref([
{
    image: "/images/slides/testImage1.jpg",
    githubLink:"#",
    webLink:"#",
    projectId:"#",
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
    projectId:"#",
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
<style lang="scss" scoped></style>