<template>
    <nav>
        <v-toolbar flat app class="background">
            <v-toolbar-side-icon class="primary--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase primary--text">
                <span class="font-weight-light">Workout</span>
                <span>Planner</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <v-btn color="primary" slot="activator" flat>
                    <v-icon>expand_more</v-icon>
                    <span>Menu</span>
                </v-btn>
                <v-list class="background--text secondary">
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn flat color="primary">
                <span>logout</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app class="primary" v-model="drawer">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-placeholder.jpeg">
                    </v-avatar>
                    <p class="background--text text-xs-center subheading mt-1">User</p>
                </v-flex>
            </v-layout>

            <v-list>
                <v-list-tile :key="link.text" v-for="link in links" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="background--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="background--text">{{ link.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
                links: [
                    { icon: "dashboard", text: "Dashboard", route: "/" },
                    { icon: "person", text: "Connect", route: "/connect" },
                    { icon: "info", text: "About", route: "/about" }
                ]
            };
        }
    };
</script>

<style>
    .list__tile--active .list__tile__action,
    .list__tile--active .list__tile__action .icon {
        color: red;
    }
</style>
