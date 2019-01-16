<template>
    <div id="registerplan">
        <h1 class="my-2 subheading secondary--text text-uppercase">Register a plan</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3">
                    <h1>General Information</h1>
                    <v-text-field
                        name="name"
                        color="background"
                        class="mb-3"
                        label="Name"
                        v-model="name"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="difficulty"
                        color="background"
                        class="mb-3"
                        label="Difficulty"
                        v-model="difficulty"
                        required
                    ></v-text-field>
                    <v-text-field
                        name="target"
                        color="background"
                        class="mb-3"
                        label="Target"
                        v-model="target"
                        required
                    ></v-text-field>
                </v-form>
            </v-card>
            <!-- add separate forms for each day i.e. 7 different forms and handle no inputs -->
            <v-card class="background pa-4 text-xs-center" flat>
                <h1 class="primary--text">Schedule</h1>
                <v-layout wrap row>
                    <v-flex v-for="(day, i) in days" :key="i" xs12 sm6 md4 lg3>
                        <v-card class="primary text-xs-center ma-3 pa-3" flat>
                            <v-card-title
                                class="subtext1--text font-weight-medium text-uppercase"
                            >{{ day.day }}</v-card-title>
                            <v-text-field
                                color="background"
                                v-model="day.bodyPart"
                                label="Body Part"
                            ></v-text-field>

                            <v-text-field
                                color="background"
                                v-model="workoutPlaceholders[i]"
                                label="Workout"
                                @keyup.enter="addWorkout(day.workouts, workoutPlaceholders[i])"
                                hint="Press enter to continue"
                            ></v-text-field>

                            <v-card-text class="px-4 text-xs-left">
                                <ul :style="{listStyle: 'none'}">
                                    <li
                                        class="background--text text-uppercase"
                                    >training: {{ day.bodyPart }}</li>
                                    <li
                                        class="background--text text-uppercase"
                                        :key="j"
                                        v-for="(workout, j) in day.workouts"
                                    >{{ workout }}</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
                <v-btn
                    class="primary mx-0 mt-5 background--text text-uppercase"
                    @click="sendPlan"
                >Submit</v-btn>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import Api from "@/plugins/Api";

    export default {
        data() {
            return {
                name: "",
                difficulty: "",
                target: "",
                workoutPlaceholders: ["", "", "", "", "", "", ""],
                days: [
                    {
                        day: "monday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "tuesday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "wednesday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "thursday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "friday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "saturday",
                        bodyPart: "",
                        workouts: []
                    },
                    {
                        day: "sunday",
                        bodyPart: "",
                        workouts: []
                    }
                ]
            };
        },

        methods: {
            addWorkout(array, item) {
                array.push(item);
                // this.$refs.form.reset();
            },
            sendPlan() {
                //
            }
        }
    };
</script>

<style>
</style>

