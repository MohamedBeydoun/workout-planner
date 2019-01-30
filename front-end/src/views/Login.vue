<template>
    <div id="login">
        <h1 class="my-2 subheading secondary--text text-uppercase">login</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3" ref="form">
                    <v-text-field
                        type="email"
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
                        type="password"
                        name="password"
                        color="background"
                        class="mb-3"
                        label="Password"
                        v-model="password"
                        @keyup.enter="login"
                        prepend-icon="vpn_key"
                        required
                    ></v-text-field>

                    <div class="red--text" v-html="error"></div>

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
    import Api from "@/plugins/Api";

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
                    const response = await Api().post("/login", {
                        email: this.email,
                        password: this.password
                    });
                    this.$store.dispatch("setToken", response.data.token);
                    this.$store.dispatch("setUser", response.data.user);
                    this.$router.push(
                        "/" + this.$store.state.user.username + "/dashboard"
                    );
                } catch (err) {
                    this.error = err.response.data.error;
                }
            }
        }
    };
</script>
