<template>
    <v-row no-gutters>
        <v-col sm="4"
               v-for="(elem,key) in data.options"
               :key="key"
        >
            <v-checkbox class="checkboxSimple"
                        v-model="elem.active"
                        :label="elem.label"
            >
            </v-checkbox>
        </v-col>
    </v-row>
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
