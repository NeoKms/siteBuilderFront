<template>
    <div class="textAreaImage__wrap"
        :class="data.direction">
        <div class="textAreaImage__imageBox"
             :style="{ width: data.direction === 'col' ? '100%' : 'auto'}">
            <imageBox :data="data"
                      :centerMode="data.direction === 'col'"></imageBox>
        </div>
        <div class="textAreaImage__content" v-if="data.include"
            :class="data.label ? 'textAreaImage__content--margin' : '' ">
            <v-row>
                <v-col :span="elem.col"
                        v-for="(elem, index) in data.include"
                        :key="index"
                        class="textAreaImage__field">
                    <component :is="blockComponent(elem.type)" :data="elem"/>
                </v-col>
            </v-row>
        </div>
    </div>
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
    .textAreaImage__wrap{
        display: flex;
        align-items: flex-start;
    }
    .textAreaImage__wrap.col{
        flex-direction: column;
    }
    .textAreaImage__wrap.row{
        flex-direction: row;
        width: 100%;
    }
    .textAreaImage__wrap.row .textAreaImage__imageBox{
        margin-right: 16px;
    }
    .textAreaImage__wrap.row .textAreaImage__content{
        flex-grow: 1;
    }
    .textAreaImage__wrap.row .textAreaImage__content--margin{
        margin-top: 20px;
        flex-grow: 1;
    }
    .textAreaImage__wrap .textAreaImage__field {
        margin-bottom: 8px;
    }
    .textAreaImage__wrap.col .textAreaImage__content{
        margin-top: 8px;
    }
    .textAreaImage__wrap.col .textAreaImage__content{
        width: 100%;
    }
</style>
