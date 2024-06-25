<template>
    <div>
        <header>
            <div class="menuBtn" @click="linksOpen = !linksOpen, openLinks()"><font-awesome-icon icon="fa-solid fa-bars" /></div>
            <nav :style="{width:`${linksWidth}px`}">
                <div ref="links" class="links">
                    <NuxtLink  to="/">Home</NuxtLink>
                    <NuxtLink  to="/aboutMe">About me</NuxtLink>
                    <NuxtLink  to="/whatIknow">What I know</NuxtLink>
                    <NuxtLink  to="/projects">Projects</NuxtLink>
                </div>
            </nav>
        </header>
        <div class="pageContent">
            <slot></slot>
        </div>
        <footer></footer>
    </div>
</template>
<script setup>
    const route = useRoute()
    const links = ref(null)
    const linksOpen = ref(true)
    const linksWidth = ref(0)
    function openLinks(){
        if(linksOpen.value == false){
            linksWidth.value = 0
            return
        }
        linksWidth.value = links.value.scrollWidth
    }
    onMounted(()=>{
        openLinks()
        window.addEventListener("resize", ()=>{
            openLinks()
        })
    })
</script>
<style lang="scss" scoped>
    header{
        display: flex;
        gap: 1rem;
        position: absolute;
        margin: var(--spacingSm);
        z-index: 20;
        .menuBtn{
            background-color: hsl(0,0%,30%,0.5);
            backdrop-filter: blur(3px);
            border-radius: var(--radiusSm);
            padding: 1.25rem;
            svg{
                font-size: var(--fontLg);
                color: white;
            }
        }
        nav{
            display: flex;
            width: 0;
            overflow: hidden;
            gap: 1rem;
            transition: 250ms ease;
            background-color: hsl(0,0%,30%,0.5);
            backdrop-filter: blur(3px);
            border-radius: var(--radiusSm);
            .links{
                display: flex;
                gap: 1rem;
                padding: 0.75rem;
                a{
                    white-space: nowrap;
                    font-size: var(--fontMd);
                    padding: 0.75rem;
                    background-color: hsl(0,0%,10%,0.5);
                    backdrop-filter: blur(3px);
                    border-radius: var(--radiusSm);
                    transition: 250ms;
                    &.router-link-active{
                        background-color: hsl(0,0%,10%,1);
                    }
                }
            }
        }
    }
    .pageContent{
        background-color: var(--primaryBg);
        height: 100vh;
        max-width: 100%;
    }
</style> 