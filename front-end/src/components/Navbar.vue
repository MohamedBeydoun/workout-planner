<template>
    <nav>
        <v-toolbar flat app class="background">
            <v-toolbar-side-icon class="primary--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase primary--text">
                <span class="font-weight-light">Workout</span>
                <span>Planner</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                class="offset-y"
                color="primary"
                v-if="$store.state.isUserLoggedIn"
                router
                :to="'/' + $store.state.user.username +'/dashboard'"
                flat
            >dashboard</v-btn>

            <v-btn
                class="offset-y"
                color="primary"
                v-if="$store.state.isUserLoggedIn"
                router
                :to="'/' + $store.state.user.username + '/registerplan'"
                flat
            >register plan</v-btn>

            <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat color="primary">
                <span>logout</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn" flat color="primary" router :to="'/login'">
                <span>login</span>
            </v-btn>

            <v-btn v-if="!$store.state.isUserLoggedIn" flat color="primary" router :to="'/signup'">
                <span>sign up</span>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
            v-if="$store.state.isUserLoggedIn"
            app
            class="secondary"
            v-model="drawer"
        >
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-placeholder.jpeg">
                    </v-avatar>
                    <p
                        class="background--text text-xs-center subheading mt-1"
                    >{{ $store.state.user.username }}</p>
                </v-flex>
            </v-layout>

            <v-list>
                <v-list-tile router :to="'/' + $store.state.user.username +'/dashboard'">
                    <v-list-tile-action>
                        <v-icon class="background--text">dashboard</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="text-uppercase background--text">dashboard</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile router :to="'/' + $store.state.user.username + '/registerPlan'">
                    <v-list-tile-action>
                        <v-icon class="background--text">add</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="text-uppercase background--text">register plan</v-list-tile-title>
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
                drawer: false
            };
        },

        methods: {
            logout() {
                this.$store.dispatch("setToken", null);
                this.$store.dispatch("setUser", null);
                this.$router.push("/");
            }
        }
    };
</script>

