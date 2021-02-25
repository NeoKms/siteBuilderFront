<template>
    <div :label="data.label">
        <v-select
                v-model="data.value"
                :items="data.options"
                item-text="label"
                item-value="value"
                multiple
                chips
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
    };

</script>

<style scoped>
    .el-select-dropdown.is-multiple .el-select-dropdown__item.selected::after {
        content: '';
    }
</style>
