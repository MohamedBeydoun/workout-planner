<template>
    <div id="login">
        <h1 class="my-2 subheading secondary--text text-uppercase">login</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3" ref="form">
                    <v-text-field
                        name="email"
                        color="background"
                        class="mb-3"
                        label="Email"
                        @keyup.enter="login"
                        v-model="email"
                        prepend-icon="person"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        color="background"
                        class="mb-3"
                        label="Password"
                        v-model="password"
                        @keyup.enter="login"
                        prepend-icon="vpn_key"
                        required
                    ></v-text-field>
                    <v-btn
                        class="background mx-0 mt-3 primary--text text-uppercase"
                        @click="login"
                    >login</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import AuthenticationService from "@/services/AuthenticationService.js";

    export default {
        data() {
            return {
                email: "",
                password: "",
                error: ""
            };
        },

        methods: {
            async login() {
                try {
                    await AuthenticationService.login({
                        email: this.email,
                        password: this.password
                    });
                } catch (err) {
                    this.error = err.response.data.error;
                }
            }
        }
    };
</script>

<style>
</style>
