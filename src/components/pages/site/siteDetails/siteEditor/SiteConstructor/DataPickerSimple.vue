<template>
    <div :label="data.label">
        datepicker
<!--        <v-menu-->
<!--                ref="menu1"-->
<!--                v-model="menu1"-->
<!--                :close-on-content-click="false"-->
<!--                transition="scale-transition"-->
<!--                offset-y-->
<!--                max-width="290px"-->
<!--                min-width="290px"-->
<!--        >-->
<!--            <template v-slot:activator="{ on, attrs }">-->
<!--                <v-text-field-->
<!--                        v-model="dateFormatted"-->
<!--                        label="Date"-->
<!--                        hint="MM/DD/YYYY format"-->
<!--                        persistent-hint-->
<!--                        prepend-icon="event"-->
<!--                        v-bind="attrs"-->
<!--                        @blur="date = parseDate(dateFormatted)"-->
<!--                        v-on="on"-->
<!--                ></v-text-field>-->
<!--            </template>-->
<!--            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>-->
<!--        </v-menu>-->
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
        // computed: {
        //     dateRangeText () {
        //         return this.data.value.join(' ~ ')
        //     },
        // },
    };

</script>

<style scoped>

</style>
