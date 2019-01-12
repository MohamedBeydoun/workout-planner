<template>
    <div id="login">
        <h1 class="my-2 subheading secondary--text text-uppercase">sign up</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3" ref="form">
                    <v-text-field
                        type="username"
                        name="username"
                        color="background"
                        class="mb-3"
                        label="Username"
                        v-model="username"
                        prepend-icon="create"
                        required
                    ></v-text-field>
                    <v-text-field
                        type="email"
                        name="email"
                        color="background"
                        class="mb-3"
                        label="Email"
                        v-model="email"
                        prepend-icon="person"
                        required
                    ></v-text-field>
                    <v-text-field
                        type="password"
                        name="password"
                        color="background"
                        class="mb-3"
                        label="Password"
                        v-model="password"
                        prepend-icon="vpn_key"
                        required
                    ></v-text-field>
                    <v-btn
                        class="background mx-0 mt-3 primary--text text-uppercase"
                        :loading="isLoading"
                        @click="signup"
                    >login</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import AuthenticationService from "@/services/AuthenticationService";

    export default {
        data() {
            return {
                username: "",
                email: "",
                password: "",
                isLoading: false
            };
        },

        methods: {
            async signup() {
                const response = await AuthenticationService.register({
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
                console.log(response.data);
            }
        }
    };
</script>

<style>
</style>
