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
                <a class="downBtn" href="#quickAboutMe"><font-awesome-icon icon="fa-solid fa-chevron-down" /></a>
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
    if(currentSlide.value >= props.slides.length - 1){
        currentSlide.value = 0 
        return
    }
    currentSlide.value++
}
function prevSlide(){
    if(currentSlide.value == 0){
        currentSlide.value = props.slides.length - 1
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
            opacity: 0;
            transition: 250ms;
            cursor: pointer;
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
        &:hover{
            .sliderBtn{
                opacity: 1;
            }
        }
        .downBtn{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 3rem;
            svg{
                color: white;
                font-size: 2rem;
                opacity: 1;
                animation: btnDown 1.25s ease-out infinite;
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
            transition: 500ms;
            opacity: 0;
            animation: imageFade 500ms ease-in forwards;
        }
        .slideContent{
            position: relative;
            z-index: 2;
            width: 80%;
            height: 100%;
            margin: 0 auto;
            display: grid;
            grid-template-rows: 1fr 120px;
            box-sizing: border-box;
            opacity: 0;
            transform: translateY(-2rem);
            animation: contentFade 1s 600ms ease-out forwards;
            h3{
                font-size: var(--fontXl);
            }
        }
        .textContent{
            align-self: center;
            margin-top: 120px;
            .techContainer{
                display: flex;
                gap: 0.5rem;
                p{
                    user-select: none;
                    padding: 0.25rem 1rem 0.33rem 1rem;
                    border-radius: var(--radiusMd);
                    background-color: var(--secondaryBg);
                }
            }
        }
        .links{
            display: flex;
            gap: 1rem;
            align-self: flex-start;
            justify-content: flex-end;
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
    @keyframes imageFade {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    @keyframes contentFade {
        from{
            opacity: 0;
            transform: translateY(-2rem);
        }
        to{
            opacity:1;
            transform: translateY(0);
        }
    }
    @keyframes btnDown {
        from{
            opacity: 1;
            transform: translateY(0);
        }
        to{
            opacity: 0;
            transform: translateY(1rem);
        }
    }
</style>