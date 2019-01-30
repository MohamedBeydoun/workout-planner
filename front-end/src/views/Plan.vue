<template>
    <!-- <h1>plan id: {{ plan.id }}</h1> -->
    <div class="dashbaord">
        <h1 class="my-2 subheading secondary--text text-uppercase text-uppercase">{{ plan.name }}</h1>
        <v-container class="my-5">
            <!-- Schedule expansion pannel -->
            <h1 class="display-1 text-uppercase white--text mb-1">schedule</h1>
            <v-expansion-panel expand>
                <v-expansion-panel-content
                    :key="i"
                    v-for="(day, i) in plan.schedule"
                    class="primary background--text"
                >
                    <div slot="header" class="text-uppercase">{{ day.day }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text subtext1">
                            <div class="font-weight-bold text-uppercase mb-3">{{ day.bodyPart }}</div>
                            <div
                                :key="i"
                                v-for="(workout, i) in day.workouts"
                                class="my-1"
                            >{{ workout }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- Meal plan expansion panel -->
            <h1 class="display-1 text-uppercase white--text mt-5 mb-1">meal plan</h1>
            <v-expansion-panel expand>
                <v-expansion-panel-content
                    :key="i"
                    v-for="(meal, i) in plan.meals"
                    class="primary background--text"
                >
                    <div slot="header" class="text-uppercase">{{ meal.title }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text subtext1">
                            <div
                                :key="i"
                                v-for="(mealPart, i) in meal.parts"
                                class="my-1"
                            >{{ mealPart }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <div class="text-xs-center mt-5">
                <v-btn flat color="primary" @click="deletePlan()">
                    <v-icon class="primary--text">delete</v-icon>delete plan
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
    import Api from "@/plugins/Api";

    export default {
        data() {
            return {
                plan: ""
            };
        },

        methods: {
            deletePlan() {
                Api()
                    .delete(
                        "/plan/" +
                            this.$store.state.user.username +
                            "/" +
                            this.$route.params.id
                    )
                    .then(
                        this.$router.push(
                            "/" + this.$store.state.user.username + "/dashboard/"
                        )
                    );
            }
        },

        created() {
            Api()
                .get("/plan/" + this.$route.params.id)
                .then(data => {
                    this.plan = data.data;
                    // console.log(this.plan.meals);
                });
        }
    };
</script>

