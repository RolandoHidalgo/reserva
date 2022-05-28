<template>
    <v-app>


        <v-app-bar app elevation="1"
                   color="white">


            <v-toolbar-title>sss</v-toolbar-title>

            <v-spacer></v-spacer>

            <inertia-link v-if="!currentUser" href="/login">Login</inertia-link>
            <v-btn v-else
                   icon
                   @click="logOut">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>

            <!-- Provides the application the proper gutter -->
            <v-container fluid class="fill-height bg-indigo-800">
                <slot></slot>

            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'AppLayout',
        data: () => ({
            selectedItem: 1,
            itemsMenu: ['pepe', 'coco', 'otro'],
            items: [
                {text: 'Real-Time', icon: 'mdi-clock'},
                {text: 'Audience', icon: 'mdi-account'},
                {text: 'Conversions', icon: 'mdi-flag'},
            ],
        }),
        computed: {
            currentUser() {
                return this.$page.props.user
            },
        },
        methods: {
            logOut() {
              //  this.$inertia.delete(this.route('logout'))
            },
        },
    }
</script>

<style scoped>

</style>
