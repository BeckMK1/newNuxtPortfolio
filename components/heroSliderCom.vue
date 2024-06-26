<template>
    <div class="heroSlider">
        <div class="sliderContainer">
            <div class="slider">
                <div class="sliderBtn prevBtn" @click="prevSlide"><font-awesome-icon icon="fa-solid fa-chevron-left" /></div>
                <div class="slide" v-show="currentSlide == index" v-for="(slide, index) in slides" >
                    <img :src="slide.image">
                    <div class="slideContent">
                        <div class="textContent">
                            <h3>{{ slide.title }}</h3>
                            <p>{{ slide.content }}</p>
                            <div class="techContainer">
                                <p v-for="tech in slide.tech">{{ tech }}</p>
                            </div>
                        </div>
                        <div class="links">
                            <a class="projectLink" v-if="slide.githubLink != ''" :href="slide.githubLink"><font-awesome-icon icon="fa-brands fa-github" /></a>
                            <a class="projectLink" v-if="slide.githubLink != ''" :href="slide.webLink"><font-awesome-icon icon="fa-solid fa-globe" /></a>
                            <a class="projectLink" v-if="slide.githubLink != ''" :href="`projects#${slide.projectId}`"><font-awesome-icon icon="fa-solid fa-diagram-project" /></a>
                        </div>
                    </div>
                </div>
                <div class="sliderBtn nextBtn" @click="nextSlide"><font-awesome-icon icon="fa-solid fa-chevron-right" /></div>
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
        max-width: 100%;
        height: 100vh;
    }
    .sliderContainer{
        height: inherit;
    }
    .slider{
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .sliderBtn{
            position: relative;
            z-index: 2;
            &.prevBtn{
                margin-left: 3rem;
            }
            &.nextBtn{
                margin-right: 3rem;
            }
            svg{
                color: white;
                font-size: 2rem;
            }
        }
    }
    .slide{
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
        &::before{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
                background-color: hsla(0,0%,0%,0.6);
                top:0;
                left: 0;
            }
        img{
            position: absolute;
            z-index: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            box-sizing: border-box;
        }
        .slideContent{
            position: relative;
            z-index: 2;
            width: 80%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-sizing: border-box;
            h3{
                font-size: var(--fontXl);
            }
        }
        .textContent{
            .techContainer{
                display: flex;
                gap: 0.5rem;
                p{
                    padding: 0.25rem 1rem 0.33rem 1rem;
                    border-radius: var(--radiusMd);
                    background-color: var(--secondaryBg);
                }
            }
        }
        .links{
            display: flex;
            gap: 1rem;
            .projectLink{
                background-color: var(--secondaryBg);
                padding: 1rem;
                border-radius: var(--radiusFull);
                transition: 250ms;
                svg{
                    font-size: 2rem;
                    height: 36px;
                    width: 36px;
                }
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
    }
</style>