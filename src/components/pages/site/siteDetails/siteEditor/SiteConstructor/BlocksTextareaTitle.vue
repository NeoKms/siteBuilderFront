<template>
    <div label="Заголовок блока">
        <v-input v-model="data.title" :placeholder="data.label"
                  style="width: 50%; margin-bottom: 34px;"></v-input>
        <div class="textAreaTitle__list">
            <div v-for="(elem, index) in data.block"
                          :key="index"
                          class="textAreaTitle__item">
                <text-area-title :data="elem"></text-area-title>
                <v-btn type="icon" class="textAreaTitle__close"
                           @click="deleteBlock(index)">
                    close
<!--                    <pb-icon name="close" size="S"></pb-icon>-->
                </v-btn>
            </div>
        </div>
        <v-btn type="secondary" @click="addNewBlock" style="margin-top: 24px;">
            addObjectMob
<!--            <pb-icon name="addObjectMob" size="M" style="margin-right: 8px;"></pb-icon>-->
            Добавить блок</v-btn>
    </div>
</template>

<script >
    import TextAreaTitle from './TextAreaTitle.vue';

    export default {
        name: "blocks-textarea-title",
        components: {
            TextAreaTitle,
        },
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
             * Создать блок
             */
            addNewBlock() {
                this.data.block.push({
                    value: '',
                    rows: '10',
                    title: '',
                    label: `Введите заголовок ${this.data.block.length + 1} блока`,
                });
            },
            /**
             * удалить блок
             */
            deleteBlock(index) {
                this.data.block.splice(index, 1);
            },
        },
    };

</script>

<style scoped>
    .textAreaTitle__list{
        display: flex;
        flex-wrap: wrap;
    }
    .textAreaTitle__item{
        position: relative;
        width: calc( 48% - 2*16px);
        margin-right: 40px;
        margin-bottom: 24px;
    }
    .textAreaTitle__item:last-of-type{
        margin-bottom: 0;
    }
    .textAreaTitle__close{
        position: absolute;
        top: -24px;
        right: -16px;
    }
</style>
