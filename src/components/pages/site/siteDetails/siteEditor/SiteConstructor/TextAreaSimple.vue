<template>
    <div :label="data.label" style="width: 100%;">
        <v-text-field v-model="data.value"  :placeholder="data.placeholder ? data.placeholder : ''" style="width: 100%"></v-text-field>
    </div>
</template>

<script>
    export default {
        name: "TextAreaSimple",
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
