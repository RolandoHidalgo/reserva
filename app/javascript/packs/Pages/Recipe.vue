<template>
    <div>pepe-{{JSON.stringify(recipe)}}-molas</div>
</template>

<script>
    import AppLayout from "../Shared/AppLayout";

    export default {
        name: "Recipe",
        layout: AppLayout,
        props: ['recipe']
    }
</script>

<style scoped>

</style>