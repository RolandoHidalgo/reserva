<template>
    <div>
        <h1 class="text-2xl text-center">Home</h1>
        <h2 class="text-xl text-center">This is a Vue page rendered with Inertiajs</h2>
        <div>{{JSON.stringify(user)}}</div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed: {
            user() {
                return this.$page.props.user
            }
        }
    }
</script>

<style scoped>

</style>