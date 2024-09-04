<template>
	<div class="card">
        <div class="card-inner">
            <div class="frontSide">
                <img :src="image" alt="">
                <h3>{{ title }}</h3>
                <p>{{ frontContent }}</p>
            </div>
            <div class="backSide">
                <p>{{ backContent }}</p>
            </div>
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
        height: 250px;
        width: 100%;
        padding: 1.5rem;
        &-inner{
            transition: transform 0.8s;
            transform-style: preserve-3d;
            position: relative;
            height: 100%;
            width: 100%;
        }
        &:hover{
           .card-inner{
                transform: rotateY(180deg);
            }
        }
        img{
            height: 50px;
            justify-self: center;
        }
        .frontSide{
            display: grid;
            gap: 1rem;
            grid-template-rows: 50px fit-content(100%) 1fr;
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 1.5rem;
            box-sizing: border-box;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;
            background-color: var(--secondaryBg);
            border-radius: var(--radiusMd);
            h3{
                text-align: center;
                margin: 0;
            }
        }
        .backSide{
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 1.5rem;
            box-sizing: border-box;
            -webkit-backface-visibility: hidden; /* Safari */
            backface-visibility: hidden;
            transform: rotateY(180deg);
            background-color: var(--secondaryBg);
            border-radius: var(--radiusMd);
        }
    }
</style>