<template>
    <div :label="data.label">
        SELECT
        <v-select style="width: 100%" @change="changeActive"
                v-model="data.value"
                :items="data.options"
                item-text="label"
                item-value="value"
                persistent-hint
                return-object
                single-line
        ></v-select>
<!--            <el-option-->
<!--                    v-for="(elem, index) in data.options"-->
<!--                    :key="index"-->
<!--                    :label="elem.label"-->
<!--                    :value="elem.value">-->
<!--                <div class="siteTemplateEdit__theme" v-if="elem.colors">-->
<!--                    <div class="siteTemplateEdit__theme-colorList">-->
<!--                        <div v-for="(elem2, index2) in elem.colors"-->
<!--                             class="siteTemplateEdit__theme-colorItem"-->
<!--                             :key="index2"-->
<!--                             :style="{backgroundColor: elem2}">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <span class="siteTemplateEdit__theme-text">{{elem.label}}</span>-->
<!--                </div>-->
<!--            </el-option>-->
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
