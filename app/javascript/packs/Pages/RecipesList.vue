<template>
    <div>
        <p>hola recipes</p>
        <ul>
            <li v-for="r in recipes">
                <Link :href="`/recipes/${r.id}`">{{r.name}}</Link>
            </li>
        </ul>

    </div>

</template>

<script>
    import AppLayout from "../Shared/AppLayout";
    import {Link} from '@inertiajs/inertia-vue'

    export default {
        name: "RecipesList",
        layout: AppLayout,
        components: {
            Link
        },
        props: {
            recipes: {
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>