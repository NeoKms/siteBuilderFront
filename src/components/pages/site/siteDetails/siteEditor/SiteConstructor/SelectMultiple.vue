<template>
    <div :label="data.label">
        SELECT
        <v-select
                v-model="data.value"
                :items="data.options"
                label="Select"
                multiple
                chips
                hint="What are the target regions"
                persistent-hint
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: "data-picker-simple",
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
    .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after{
        content: '';
    }
</style>
