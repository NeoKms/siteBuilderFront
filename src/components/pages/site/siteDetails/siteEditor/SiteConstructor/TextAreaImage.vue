<template>
    <v-container>
        <v-row>
            <v-col lg="8" sm="8" md="8" xl="8" xs="8">
                <imageBox :centerMode="data.direction === 'col'"
                          :data="data"></imageBox>
            </v-col>
            <v-col v-if="data.include" lg="4" sm="4" md="4" xl="4" xs="4">
                <v-row
                        :key="index"
                        :span="elem.col"
                        class="textAreaImage__field"
                        v-for="(elem, index) in (data.include || [])"
                >
                    <component :data="elem" :is="blockComponent(elem.type)" />
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import ImageBox from './ImageBox';
    import InputSimple from './InputSumple';
    import TextAreaSimple from './TextAreaSimple.vue';
    import TextAreaTitle from './TextAreaTitle.vue';
    import CheckboxSimple from './CheckboxSimple.vue';
    import DataPickerSimple from './DataPickerSimple.vue';

    export default {
        name: "TextAreaImage",
        components: {
            ImageBox,
            TextAreaSimple,
            TextAreaTitle,
        },
        props: {
            data: {
                type: Object,
            },
        },
        data() {
            return {
                blockElements: [
                    {
                        name: 'textAreaSimple',
                        component: TextAreaSimple,
                    },
                    {
                        name: 'textAreaTitle',
                        component: TextAreaTitle,
                    },
                    {
                        name: 'inputSimple',
                        component: InputSimple,
                    },
                    {
                        name: 'checkboxSimple',
                        component: CheckboxSimple,
                    },
                    {
                        name: 'dataPickerSimple',
                        component: DataPickerSimple,
                    },
                ],
            };
        },
        methods: {
            blockComponent(nameComponent) {
                const currentElement = this.blockElements.find(item => item.name === nameComponent);
                if (currentElement) return currentElement.component;
                return false;
            },
        },
    };

</script>
<style scoped>
    .textAreaImage__wrap {
        display: flex;
        align-items: flex-start;
    }

    .textAreaImage__wrap.col {
        flex-direction: column;
    }

    .textAreaImage__wrap.row {
        flex-direction: row;
        width: 100%;
    }

    .textAreaImage__wrap.row .textAreaImage__imageBox {
        margin-right: 16px;
    }

    .textAreaImage__wrap.row .textAreaImage__content {
        flex-grow: 1;
    }

    .textAreaImage__wrap.row .textAreaImage__content--margin {
        margin-top: 20px;
        flex-grow: 1;
    }

    .textAreaImage__wrap .textAreaImage__field {
        margin-bottom: 8px;
    }

    .textAreaImage__wrap.col .textAreaImage__content {
        margin-top: 8px;
    }

    .textAreaImage__wrap.col .textAreaImage__content {
        width: 100%;
    }
</style>
