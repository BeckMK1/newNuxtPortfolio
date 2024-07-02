<template>
    <div>{{ currentWord.toString() }}</div>
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
    if(isWriting.value == false){
        let tepWord = [...words.value[currentIndex.value]]
        const write = setInterval(() => {
            currentWord.value.push(tepWord[wordIndex.value])
            wordIndex.value++
            if(tepWord.length + 1 == wordIndex.value){
                if(currentIndex.value == words.value.length + 1){
                    currentIndex.value = 0
                    return
                }
                clearInterval(write)
                if(currentIndex.value != words.value.length + 1){
                    currentIndex.value++
                    wordIndex.value = 0
                    currentWord.value = [""]
                    return
                }
            }
        }, 250);
    }
    return
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