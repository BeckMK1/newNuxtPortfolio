<template>
    <div>
        <header>
            <div class="navigation">
                <div class="menuBtn" @click="linksOpen = !linksOpen, openLinks()"><font-awesome-icon icon="fa-solid fa-bars" /></div>
                <nav :style="{width:`${linksWidth}px`}">
                    <div ref="links" class="links">
                        <NuxtLink  to="/">Home</NuxtLink>
                        <NuxtLink  to="/aboutMe">About me</NuxtLink>
                        <NuxtLink  to="/whatIknow">What I know</NuxtLink>
                        <NuxtLink  to="/projects">Projects</NuxtLink>
                    </div>
                </nav>
            </div>
        </header>
        <div class="pageContent">
            <slot></slot>
        </div>
        <footer>
            <img src="" alt="">
            <div class="contactInfo">
                <h4>Contact Info</h4>
                <p>Mikkel Beck Knudsen</p>
                <a href="mailto:mikkelbeckk@gmail.com"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
                <a href="#"><font-awesome-icon icon="fa-brands fa-github" /></a>
            </div>
        </footer>
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
        position: fixed;
        margin: var(--spacingSm);
        z-index: 20;
        flex-direction: column;
        .navigation{
            display: flex;
            gap:1rem;
            flex-direction: column;
            @media(min-width:567px){
                flex-direction: row;
            }
        }
        .menuBtn{
            background-color: hsl(0,0%,30%,0.5);
            backdrop-filter: blur(3px);
            border-radius: var(--radiusSm);
            padding: 1.25rem;
            width: fit-content;
            height: fit-content;
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
                flex-direction: column;
                @media(min-width:567px){
                    flex-direction: row;
                }
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
                    &:hover{
                        background-color: hsl(0,0%,10%,1);
                    }
                }
            }
        }
    }
    .pageContent{
        background-color: var(--primaryBg);
        min-height: 100vh;
        max-width: 100%;
        padding-bottom: 2rem;
    }
    footer{
        display: flex;
        justify-content: start;
        margin-top: 3rem;
        background-color: var(--tertiaryBg);
        padding: 1rem 0;
        .contactInfo{
            margin-left: 1rem;
            p{
                font-weight: bold;
            }
            a{
                &:nth-child(3){
                    margin-right: 0.5rem;
                }
                svg{
                    font-size: var(--fontLg);
                    transition: 250ms;
                }
                &:hover{
                    svg{
                        transform: scale(1.05);
                        color:white;
                    }
                }
            }
        }
    }
</style> 