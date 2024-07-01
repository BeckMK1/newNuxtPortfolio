<template>
    <div class="projectsPage">
        <SearchCom></SearchCom>
        <div class="accordions">
            <TransitionGroup name="accordion">
                <AccordionCom v-for="project in glStore.filteredProjects" :openDefault="glStore.currentProject == project.id ? true : false" :title="project.title">
                    <p>placehoderContent</p>
                </AccordionCom>
            </TransitionGroup>
        </div>
    </div>
</template>
<script setup>
import { useGlStore } from '../stores/glStore';
const glStore = useGlStore()
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
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>