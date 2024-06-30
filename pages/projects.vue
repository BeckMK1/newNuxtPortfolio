<template>
    <div class="projectsPage">
        <div class="accordions">
            <AccordionCom v-for="project in projects" :openDefault="glStore.currentProject == project.id ? true : false" :title="project.title">
                <p>placehoderContent</p>
            </AccordionCom>
        </div>
    </div>
</template>
<script setup>
import { useGlStore } from '../stores/glStore';
const glStore = useGlStore()
const projects = ref([
    {
        title:'Placeholder',
        id:"placeholder1"
    },
    {
        title:'Placeholder',
        id:"placholder2"
    }
])
</script>
<style lang="scss" scoped>
.projectsPage{
    padding-top: 100px;
    margin: 0 2rem;
}
.accordions{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>