<template>
	<div class="card">
        <div class="frontSide">
            <img :src="image" alt="">
            <h3>{{ title }}</h3>
            <p>{{ frontContent }}</p>
        </div>
        <div class="backSide">
            <p>{{ backContent }}</p>
        </div>
	</div>
</template>
<script setup>
const prosp = defineProps({
    title:String,
    image:String,
    frontContent:String,
    backContent:String
})
</script>
<style lang="scss" scoped>
    .card{
        background-color: var(--secondaryBg);
        border-radius: var(--radiusMd);
        padding: 1.5rem;
        img{
            height: 50px;
            justify-self: center;
        }
        .frontSide{
            display: grid;
            gap: 1rem;
            grid-template-rows: 1fr 50px 1fr;
            h3{
                text-align: center;
            }
        }
        .backSide{
            display: none;
        }
    }
</style>