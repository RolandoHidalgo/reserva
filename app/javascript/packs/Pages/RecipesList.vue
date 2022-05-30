<template>
  <div>
    <p>hola recipes 2</p>
    <ul>
      <li v-for="r in recipes">
        <Link :href="`/recipes/${r.id}`">{{ r.name }}</Link>
      </li>
    </ul>
    <v-btn color="primary" @click="hola">asdasd</v-btn>
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
  },
  mounted() {
    this.hola();
  },
  methods: {
    hola() {
      console.log(this.$page, 'el page');
      console.log(this.$page.props?.flash?.success)
    }
  }
}
</script>

<style scoped>

</style>