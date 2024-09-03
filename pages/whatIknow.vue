<template>
    <div class="aboutMePage">
        <h2>Frameworks</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'framework'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
        <h2>Languages</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'language'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
        <h2>libraries/plugins</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'libary/plugins'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
        <h2>CMS</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'CMS'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
        <h2>Programs</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'Programs'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
        <h2>Other</h2>
        <div class="cardsContainer">
            <CardCom v-for="card in glStore.cards" v-show="card.type == 'Other'" :title="card.title" :image="card.image" :front-content="card.frontContent" :back-content="card.backContent"></CardCom>
        </div>
    </div>
</template>
<script setup>
import { useGlStore } from '../stores/glStore';
const glStore = useGlStore()
</script>
<style lang="scss" scoped>
.aboutMePage{
    padding-top: 100px;
    margin: 0 2rem;
}
h2{
    margin-top: 2rem;
}
    .cardsContainer{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 2rem;
        margin-top: 1rem;
    }
</style>
