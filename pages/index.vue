<template>
    <div>
        <HeroSliderCom :slides="slides"></HeroSliderCom>
    </div>
</template>
<script setup>
const slides = ref([
{
    image: "/images/slides/testImage1.jpg"
}
])
</script>
<style lang="scss" scoped></style>