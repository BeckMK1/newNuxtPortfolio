<template>
    <div class="search">
        <input type="text" placeholder="Search..." v-model="searchQuery">
    </div>
</template>
<script setup>
 const searchQuery = ref("")
 import { useGlStore } from '../stores/glStore';
 const glStore = useGlStore()
    function searchProjects(){
    const filtered = glStore.projects.filter(project => project.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    glStore.setFilteredProjects(filtered)
    }
    searchProjects()
watch(searchQuery, async (newValue, oldValue)=>{
    if(newValue != oldValue){
        searchProjects()
    }
})
</script>
<style lang="scss" scoped>
    .search{
        display: flex;
        justify-content: center;
        input{
            padding: 0.5rem 1rem;
            background-color: var(--tertiaryBg);
            margin-bottom: 1rem;
            font-size: var(--fontLg);
            border-radius: var(--radiusSm);
        }
    }
</style>