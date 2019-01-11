<template>
    <!-- <h1>plan id: {{ plan.id }}</h1> -->
    <div class="dashbaord">
        <h1 class="my-2 subheading secondary--text text-uppercase">{{ plan.name }}</h1>
        <v-container class="my-5">
            <!-- Schedule expansion pannel -->
            <h1 class="display-1 text-uppercase white--text">schedule</h1>
            <v-expansion-panel expand>
                <v-expansion-panel-content
                    :key="day.date"
                    v-for="day in plan.schedule"
                    class="primary background--text"
                >
                    <div slot="header" class="text-uppercase">{{ day.date }}</div>
                    <v-card>
                        <v-card-text class="px-4 grey--text subtext1">
                            <div class="font-weight-bold text-uppercase mb-3">{{ day.title }}</div>
                            <div
                                :key="workout.name"
                                v-for="workout in day.workouts"
                                class="my-1"
                            >{{ workout.name }}: {{ workout.sets }} sets of {{ workout.reps }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- Meal plan card -->
            <h1 class="display-1 text-uppercase white--text mt-5">meal plan</h1>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //dummy data
                plan: {
                    name: "push-pull",
                    difficulty: "intermediate",
                    target: "muscle gain",
                    id: this.$route.params.id,
                    schedule: [
                        {
                            date: "monday",
                            title: "push",
                            workouts: [
                                { name: "bench press", sets: 3, reps: 8 },
                                { name: "incline bench press", sets: 3, reps: 8 },
                                { name: "dumbell flyes", sets: 2, reps: 12 },
                                { name: "shoulder press", sets: 3, reps: 6 },
                                { name: "skull crushers", sets: 3, reps: 10 }
                            ]
                        },
                        {
                            date: "tuesday",
                            title: "pull",
                            workouts: [
                                { name: "deadlift", sets: 3, reps: 6 },
                                { name: "pullups", sets: 2, reps: 10 },
                                { name: "lat pulldown", sets: 3, reps: 8 },
                                { name: "bicep curls", sets: 3, reps: 10 },
                                { name: "skull crushers", sets: 3, reps: 10 },
                                { name: "wrist curls", sets: 3, reps: 12 }
                            ]
                        },
                        {
                            date: "wednesdy",
                            title: "legs",
                            workouts: [
                                { name: "squats", sets: 3, reps: 6 },
                                { name: "leg curl", sets: 2, reps: 10 },
                                { name: "leg press", sets: 3, reps: 8 },
                                { name: "hamstring curls", sets: 3, reps: 10 },
                                { name: "calf raises", sets: 3, reps: 10 }
                            ]
                        },
                        {
                            date: "thrusday",
                            title: "cardio",
                            workouts: [{ name: "running", sets: 1, reps: 2 }]
                        },
                        {
                            date: "others",
                            title: "repeat",
                            workouts: [{ name: "N/A" }]
                        }
                    ],
                    mealPlan: {
                        meal1: [
                            "egg whites",
                            "lean meat",
                            "oatmeal",
                            "blueberries"
                        ],
                        meal2: ["chicken", "white rice", "broccoli"],
                        meal3: ["lean turkey", "sweet potato", "asparagus"],
                        meal4: ["whey protein shake"],
                        meal5: ["bagel", "almond butter"],
                        meal6: [
                            "sirloin steak",
                            "sweet potato",
                            "green beans",
                            "almonds"
                        ],
                        meal7: ["egg whites", "almond butter"]
                    }
                }
            };
        },

        created() {
            //get single plan data when created
        }
    };
</script>

