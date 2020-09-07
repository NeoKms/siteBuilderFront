<template>
    <div :label="data.label">
        <v-text-field  v-model="data.value" :placeholder="data.placeholder"></v-text-field>
    </div>
</template>

<script>
    export default {
        name: "InputSimple",
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
