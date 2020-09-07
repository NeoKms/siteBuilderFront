<template>
    <div :label="data.label">
        <v-radio-group v-model="data.value" class="radioImage__list">
            <v-radio
                    v-for="(elem, index) in data.options" class="radioImage__item"
                    :key="index"
                    :label="elem.value"
            >
                <div v-html="elem.html" class="radioImage__wrapper">
                </div>
            </v-radio>
        </v-radio-group>
    </div>
</template>

<script>
    export default {
        name: "RadioImage",
        props: {
            data: {
                type: Object,
            },
        },
        data() {
            return {
            };
        },
        methods: {

        },
    };
</script>

<style scoped>
</style>
