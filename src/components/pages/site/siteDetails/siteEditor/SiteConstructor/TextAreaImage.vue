<template>
    <v-row :no-gutters="data.col===12">
        <v-col
                :lg="data.col" :sm="data.col" :md="data.col" :xl="data.col" :xs="data.col"
        >
            <imageBox :centerMode="data.direction === 'col'"
                      :data="data"></imageBox>
        </v-col>
        <v-col v-if="data.include"
               :lg="data.col===12?11:4" :sm="data.col===12?11:4" :md="data.col===12?11:4" :xl="data.col===12?11:4"
               :xs="data.col===12?11:4"
               :style="data.col===12?'margin-left: 12px':''"
        >
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
</template>

<script>
    import ImageBox from './ImageBox';
    import InputSimple from './InputSumple';
    import TextAreaSimple from './TextAreaSimple.vue';
    import TextAreaTitle from './TextAreaTitle.vue';
    import CheckboxSimple from './CheckboxSimple.vue';
    import DataPickerSimple from './DataPickerSimple.vue';
    import SwitchSimple from './SwitchSimple';

    export default {
        name: "TextAreaImage",
        components: {
            ImageBox,
            TextAreaSimple,
            TextAreaTitle,
            SwitchSimple,
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
                    {
                        name: 'SwitchSimple',
                        component: SwitchSimple
                    }
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
