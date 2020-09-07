<template>
    <div :label="data.label">
        <ul class="checkboxVisible__group">
            <li class="checkboxVisible__item"
                v-for="(elem,key) in data.options"
                :key="key">
                <div style="margin: 0; line-height: 0;">
                    <v-checkbox class="checkboxVisible"
                                 v-model="elem.visible"
                    :label="elem.label">
                        <div v-if="elem.icon"
                                 :name="elem.icon"
                                 style="margin-right: 4px;">icon</div>
                    </v-checkbox>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CheckboxVisible",
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

<style>
</style>
