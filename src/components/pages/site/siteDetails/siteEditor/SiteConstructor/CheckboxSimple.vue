<template>
    <div :label="data.label">
        <ul class="checkboxSimple__group"
            :class="data.row ? 'checkboxSimple__row' : ''">
            <li class="checkboxSimple__item"
                v-for="(elem,key) in data.options"
                :key="key">
                <div style="margin: 0; line-height: 0;">
                    <v-checkbox class="checkboxSimple"
                                 v-model="elem.active"
                    :label="elem.label">
                    </v-checkbox>
                </div>
            </li>
        </ul>
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
        data() {
            return {
            };
        },
        methods: {

        },
    };

</script>

<style scoped>
    .checkboxSimple__row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .checkboxSimple__row .checkboxSimple__item{
        margin-right: 16px;
    }
</style>
