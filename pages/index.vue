<template>
    <div>
        <HeroSliderCom :slides="slides"></HeroSliderCom>
    </div>
</template>
<script setup>
const slides = ref([
{
    image: "/images/slides/testImage1.jpg",
    githubLink:"",
    webLink:"",
    projectId:"",
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
])
</script>
<style lang="scss" scoped></style>