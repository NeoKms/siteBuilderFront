<template>
    <div :label="data.label">
        <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="data.value"
                transition="scale-transition"
                offset-y
                min-width="auto"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-text-field
                        single-line
                        v-model="dateRangeText"
                        label="Дата..."
                        prepend-icon="mdi-calendar"
                        class="mrgdown"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker
                    v-model="data.value"
                    @input="menu2 = false"
                    :first-day-of-week="1"
                    no-title
                    locale="ru-RU"
                    class="mt-0 mb-0 datepickerstyle"
                    range
                    event-color="white"
                    scrollable>
                <v-btn v-show="data.value.length === 2" class="btnup" outlined rounded color="primary" @click="$refs.menu.save(data.value)">OK</v-btn>
            </v-date-picker>
        </v-menu>
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
                menu: false,
                modal: false,
            };
        },
        methods: {

        },
        computed: {
            dateRangeText () {
                return Array.isArray(this.data.value)?this.data.value.map(el=>new Date(el).toLocaleDateString('ru-RU')).join('~'):''
            },
        },
    };

</script>
<style scoped lang="scss">
    .mrgdown {
        padding-right: 10px !important;
    }
    .datepickerstyle {
        color: #f5f5f5 !important;
    }
    .btnup {
        margin-left: 100px !important;
        margin-top: -40px !important;
    }
    .printbtn {
        margin-right: 20px !important;
        margin-top: -34px !important;
    }
    .summary {
        font-weight: bold;
        font-size: 15px !important;
    }
    .row {
        display: table-row;
        transition: 0.5s linear;
    }
    .rowcolor {
        background-color: #4caf50 ;
    }
</style>
