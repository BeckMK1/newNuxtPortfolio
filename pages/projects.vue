<template>
    <div class="projectsPage">
        <SearchCom></SearchCom>
        <div class="accordions">
            <TransitionGroup name="accordion">
                <AccordionCom v-for="project in glStore.filteredProjects" :openDefault="glStore.currentProject == project.id ? true : false" :title="project.title">
                    <p class="leadin">This is a project I made for my final examen.
                    It a website were people can create lobbies for games. The goal was to make an alternative to the build-in matchmaking systems that exist in many videogames.</p>
                   <p>It a website were people can create lobbies for games. The goal was to make an alternative to the build-in matchmaking systems that exist in many videogames.</p>
                   <p>For this project I needed a way for users to make an account and login, I also needed a way for the users to make a lobby and join one.</p>
                   <p>To accomplish this I wrote my backend in Node.js using express.js and mongoose.js.
                    For my database I used MongoDB since it was what I had the most experience with.</p>
                    <p>For my frontend I used Nuxt.js, I have used it a lot in the past and I think it is excellent for making these types om super dynamik websites in.</p>
                    <p>The main challenge for me in this project was the backend part, I have not worked too much with backend so I had a lot of stuff to learn.</p>
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
.leadin{
    margin-bottom: 2rem;
}
</style>