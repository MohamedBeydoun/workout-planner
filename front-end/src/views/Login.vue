<template>
    <div id="login">
        <h1 class="my-2 subheading secondary--text text-uppercase">login</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3" ref="form">
                    <v-text-field
                        color="background"
                        class="mb-3"
                        label="Email"
                        v-model="email"
                        prepend-icon="person"
                        :rules="inputRules"
                        required
                    ></v-text-field>
                    <v-text-field
                        color="background"
                        class="mb-3"
                        label="Password"
                        v-model="password"
                        prepend-icon="vpn_key"
                        :rules="inputRules"
                        required
                    ></v-text-field>
                    <v-btn
                        class="background mx-0 mt-3 primary--text text-uppercase"
                        :loading="isLoading"
                    >login</v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                inputRules: [
                    v => v.length >= 3 || "Minimum length is 3 characters"
                ],
                isLoading: false
            };
        }
    };
</script>

<style>
</style>
