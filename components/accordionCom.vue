<template>
    <div class="accordion">
        <div class="accordionSpoiler" @click="isOpen = !isOpen, openToggle()">{{ title }}</div>
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
</script>
<style lang="scss" scoped>
    .accordionContent{
        overflow: hidden;
    }
</style>