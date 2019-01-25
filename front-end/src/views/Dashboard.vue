<template>
    <div class="dashbaord">
        <h1 class="my-2 subheading secondary--text text-uppercase">Dashboard</h1>

        <v-container class="my-5">
            <h1
                class="white--text text-xs-center text-uppercase mb-2 display-3 font-weight-medium"
            >Workout Plans</h1>
            <h6
                class="subtext2--text text-xs-center text-uppercase mb-5 title"
            >See current and previous plans</h6>
            <v-layout wrap row>
                <v-flex :key="i" v-for="(plan, i) in plans" xs12 sm6 md4 lg3>
                    <v-card class="primary text-xs-center ma-3" flat>
                        <v-card-text>
                            <div class="my-1 text-uppercase subtext1--text">{{ plan.name }}</div>
                            <v-divider></v-divider>
                            <div class="my-1 text-uppercase subtext1--text">{{ plan.difficulty }}</div>
                            <v-divider></v-divider>
                            <div class="my-1 text-uppercase subtext1--text">{{ plan.target }}</div>
                            <v-divider></v-divider>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn flat color="grey" router :to="'/plan/' + plan.id">
                                <v-icon class="subtext1--text">view_module</v-icon>
                                <span class="subtext1--text">see plan</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Api from "@/plugins/Api";

    export default {
        data() {
            return {
                plans: []
                //dummy data
                //     user: {
                //         name: "username"
                //     },
                //     plans: [
                //         {
                //             name: "push-pull",
                //             difficulty: "intermediate",
                //             target: "muscle gain",
                //             id: 1
                //         },
                //         {
                //             name: "shred",
                //             difficulty: "advanced",
                //             target: "weight loss",
                //             id: 2
                //         },
                //         {
                //             name: "all day every day",
                //             difficulty: "advanced",
                //             target: "muscle gain",
                //             id: 3
                //         },
                //         {
                //             name: "starter",
                //             difficulty: "beginner",
                //             target: "weight gain",
                //             id: 4
                //         }
                //     ]
            };
        },

        created() {
            if (this.$route.params.id != this.$store.state.user.username) {
                this.$router.push("/");
            } else {
                Api()
                    .get("/dashboard/" + this.$store.state.user.username)
                    .then(data => {
                        this.plans = data.data;
                        console.log(this.plans);
                    });
            }
        }
    };
</script>
