<template>
    <div class="typeWriter">
        <h1>Mikkel Beck Knudsen</h1>
        <h2>{{ currentWord.toString().replace(/,/g, "") }}</h2>
    </div>
</template>
<script setup>
const words = ref([
    "HTML",
    "CSS",
    "JavaScript",
    "Vue",
    "Nuxt",
    "SCSS",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Mongoose.js",
    "Umbarco",
    "Drupal"
])
const currentIndex = ref(0)
const currentWord = ref([""])
const isWriting = ref(false)
const wordIndex = ref(0)
function writeAnimation(){
       const tempWord = [...words.value[currentIndex.value]]
       setTimeout(()=>{
        currentWord.value = [""]
        const write = setInterval(()=>{
            currentWord.value.push(tempWord[wordIndex.value])
            wordIndex.value++
            if(wordIndex.value == tempWord.length + 1){
                clearInterval(write)
                wordIndex.value = 0
                currentIndex.value++
                if(currentIndex.value == words.value.length){
                    currentIndex.value = 0
                }
            }
        },50)
    },2000)
}
onMounted(()=>{
    writeAnimation()
})
watch(currentIndex, async (newValue, oldValue) =>{
    if(newValue != oldValue){
        writeAnimation()
    }
})
</script>
<style lang="scss" scoped>
    .typeWriter{
        font-size: var(--fontLg);
        font-weight: bold;
        position: absolute;
        z-index: 2;
        padding-top: 5rem;
        padding-left: 0.5rem;
    }
</style>