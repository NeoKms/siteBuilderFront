<template>
    <div style="margin: 0; line-height: 0;">
        <v-checkbox class="checkboxSimple"
                    v-for="(elem,key) in data.options"
                    :key="key"
                     v-model="elem.active"
        :label="elem.label">
        </v-checkbox>
    </div>
</template>

<script>
    export default {
        name: "checkbox-simple",
        props: {
            data: {
                type: Object,
            },
        },
    };

</script>

<style scoped>
    .checkboxSimple {
        margin: 0 !important;
    }
</style>
