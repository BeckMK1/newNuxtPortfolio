<template>
    <div class="accordion">
        <div class="accordionSpoiler" @click="isOpen = !isOpen, openToggle()" :class="isOpen == true ? 'open':''"><h3>{{ title }}</h3><font-awesome-icon icon="fa-solid fa-chevron-right" /></div>
        <div class="accordionContent" :style="{height:currentHeight + 'px'}">
            <div class="accordionContent-inner" ref="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    openDefault:{
        default:false,
        type:Boolean
    },
    title:String
})
const isOpen = ref(props.openDefault)
const currentHeight = ref(0)
const content = ref(null) 
function openToggle(){
    if(isOpen.value == false){
        currentHeight.value = 0
        return
    }
    currentHeight.value = content.value.scrollHeight
}
onMounted(()=>{
    openToggle()
})
</script>
<style lang="scss" scoped>
    .accordionSpoiler{
        background-color: var(--secondaryBg);
        padding: 1rem 1.5rem;
        border-radius: var(--radiusLg);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 2;
        &.open{
            svg{
                transform: rotate(90deg);
            }
        }
        svg{
            transition: 250ms;
            font-size: var(--fontLg);
        }
    }
    .accordionContent{
        overflow: hidden;
        transition: height 250ms;
        margin-top: -1rem;
        background-color: var(--tertiaryBg);
        border-bottom-left-radius: var(--radiusLg);
        border-bottom-right-radius: var(--radiusLg);
        &-inner{
            box-sizing: border-box;
            padding: 1rem;
            padding-top: 2rem;
        }
    }
</style>