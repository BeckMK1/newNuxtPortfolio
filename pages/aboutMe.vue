<template>
    <div class="aboutMePage">
        <div class="catagoriesContainer">
            <CatagoriesCom v-for="catagory in glStore.aboutMe" :title="catagory.title"></CatagoriesCom>
        </div>
        <div class="aboutMeContent" :id="content.title" v-for="content in glStore.aboutMe">
            <h3>{{ content.title }}</h3>
            <div class="content">
                {{ content.content }}
            </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.aboutMeContent{
    width: 80%;
    height: fit-content;
    background-color: var(--secondaryBg);
    padding: 2rem;
    border-radius: var(--radiusMd);
    h3{
        text-align: center;
    }
}
</style>