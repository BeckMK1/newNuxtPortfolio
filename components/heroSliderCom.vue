<template>
    <div class="heroSlider">
        <div class="sliderContainer">
            <div class="slider">
                <div class="sliderBtn" @click="prevSlide"><font-awesome-icon icon="fa-solid fa-chevron-left" /></div>
                <div class="slide" v-show="currentSlide == index" v-for="(slide, index) in slides" >
                    <img :src="slide.image">
                </div>
                <div class="sliderBtn" @click="nextSlide"><font-awesome-icon icon="fa-solid fa-chevron-right" /></div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    slides:{
        default:[{}],
        type:Array
    }
})
const currentSlide = ref(0)
function nextSlide(){
    if(currentSlide.value <= props.slides.length){
        currentSlide.value = 0 
        return
    }
    currentSlide.value++
}
function prevSlide(){
    if(currentSlide.value == 0){
        currentSlide.value = props.slides.length
        return
    }
    currentSlide.value--
}
</script>
<style lang="scss" scoped>
    .heroSlider{
        max-height: 100vh;
        max-width: 100vw;
        height: 100vh;
    }
    .slider{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sliderBtn{
            position: relative;
            z-index: 2;
            svg{
                color: white;
            }
        }
    }
    .slide{
        height: 100vh;
        position: absolute;
        z-index: 0;
        img{
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            box-sizing: border-box;
        }
    }
</style>