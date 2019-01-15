<template>
    <div id="registerplan">
        <h1 class="my-2 subheading secondary--text text-uppercase">Register a plan</h1>
        <v-container class="my-5">
            <v-card color="primary ma-5 px-3 py-5">
                <v-form class="px-3" ref="form">
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
            <h1 class="primary">Schedule</h1>
            <!-- </v-card> -->
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "",
                difficulty: "",
                target: ""
            };
        }
    };
</script>
