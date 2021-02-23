<template>
    <div :label="data.label" style="width: 100%;">
        <v-textarea
                filled
                counter
                rows="4"
                v-model="data.value"
                :placeholder="data.placeholder ? data.placeholder : ''"
                style="width: 100%"
        ></v-textarea>
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
    };
</script>

<style scoped>

</style>
