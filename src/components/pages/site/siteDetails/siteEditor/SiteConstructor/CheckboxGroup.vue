<template>
    <div :label="data.label">
        <span></span>
        <v-checkbox
                v-for="(elem, index) in data.options" :key="index"
                class="publication__checkbox checkboxGroup__checkbox"
                :label="elem.label" border
        >
        </v-checkbox>
    </div>
</template>

<script>
    export default {
        name: "CheckboxGroup",
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
    .checkboxGroup{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .checkboxGroup__checkbox{
        margin-right: 0;
        margin-bottom: 16px;
    }
</style>
