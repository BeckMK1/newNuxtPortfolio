<template>
	<div>
    <a class="catagoriLink" :href="`#${title}`">{{ title }}</a>
	</div>
</template>
<script setup>
const props = defineProps({
    title:String,
})
</script>
<style lang="scss" scoped>
.catagoriLink{
    background-color: var(--secondaryBg);
    border-radius: var(--radiusMd);
    color: white;
    padding: 1rem;
}
</style>