<template>
    <div>{{ currentWord.toString().replace(/,/g, "") }}</div>
</template>
<script setup>
const words = ref([
    "vue",
    "SCSS",
    "MongoDB",
    "Node.js",
    "express.js"
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
        },250)
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

</style>