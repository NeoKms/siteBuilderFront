<template>
    <div :label="data.label">
        <v-select style="width: 100%" @change="changeActive"
                v-model="data.value"
                :items="data.options"
                item-text="label"
                item-value="value"
                persistent-hint
                return-object
                single-line
        ></v-select>
    </div>
</template>

<script>
    export default {
        name: "SelectSimple",
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
            /**
             * Подставить активное значение в template
             */
            // eslint-disable-next-line no-unused-vars
            changeActive(value) {
                this.$emit('changeSelectSimpleData', this.data);
            },
        },
    };

</script>

<style scoped>

</style>
