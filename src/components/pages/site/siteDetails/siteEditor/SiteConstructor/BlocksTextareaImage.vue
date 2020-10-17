<template>
    <div :label="data.label">
        <v-row class="textAreaImage__list"
             :gutter="24">
            <v-col v-for="(elem, index) in data.block"
                    :key="index"
                    :span="data.col"
                    style="heigh:141px"
                    class="textAreaImage__item">
                <text-area-image :data="elem"></text-area-image>
                <v-btn v-if="data.btnType"
                           type="icon" class="textAreaImage__close"
                           @click="deleteBlock(index)">
                    colse
                </v-btn>
            </v-col>
            <v-col v-if="data.btnType === 'addPhoto'"
                    class="textAreaImage__item"
                    :span="data.col">
                <div class="textAreaImage__addPhoto"
                     @click="loadImage"
                     :style="{ height : data.height  + 'px'}">
                    load photo
<!--                    <pb-icon name="loadPhoto" style="color: #D3D5DD; font-size: 42px;"></pb-icon>-->
                    <div class="textAreaImage__addPhoto-title">{{data.btnText}}</div>
                </div>
            </v-col>
            <v-col v-if="data.btnType === 'addVideo'"
                    class="textAreaImage__item"
                    :span="data.col">
                <div class="textAreaImage__addPhoto"
                     @click="loadImage"
                     :style="{ height : data.height  + 'px'}">
                    video
<!--                    <pb-icon name="video" size="XL" style="color: #D3D5DD;"></pb-icon>-->
                    <div class="textAreaImage__addPhoto-title">{{data.btnText}}</div>
                </div>
            </v-col>
        </v-row>
        <v-btn v-if="data.btnType === 'secondary'"
                type="secondary" @click="addNewBlock" style="margin-top: 24px;">
            addObjectMob
<!--            <pb-icon name="addObjectMob" size="M" style="margin-right: 8px;"></pb-icon>-->
            {{data.btnText}}</v-btn>
        <template v-if="showImageList">
            <transition name="fade-overlay">
                <div class="pb-overlay"
                     v-show="showImageList">
                </div>
            </transition>
            <transition name="fade-slide-modal">
                <div v-show="showImageList"
                     class="siteTemplateEdit__templates"
                     @click.self="closeImageList"
                >
                    <v-btn type="icon" class="siteTemplateEdit__templates-close"
                               @click="closeImageList">
                        close
<!--                        <pb-icon name="close" size="M"></pb-icon>-->
                    </v-btn>
                    title choose image
<!--                    <pb-title :level="4">Выберете изображение</pb-title>-->
                    <v-row class="imageBox__wrapper" :gutter="16">
                        <v-col class="imageBox__item"
                                v-for="(item, index) in getImageList"
                                :key="index"
                                :span="6"
                                style="margin-bottom: 16px;">
                            <div class="imageBox__item-img"
                                 :style="{backgroundImage: 'url(' + item + ')'}"
                                 @click="choseImage(item)"></div>
                        </v-col>
                    </v-row>
                </div>
            </transition>
        </template>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import TextAreaImage from './TextAreaImage';


    export default {
        name: "blocks-textarea-image",
        components: {
            TextAreaImage,
        },
        props: {
            data: {
                type: Object,
            },
        },
        data() {
            return {
                showImageList: false,
            };
        },
        computed: {
            ...mapGetters([
                'getImageList',
            ]),
        },
        methods: {
            ...mapActions([
                'fetchImageList',
            ]),
            /**
             * Загрузить список картинок
             */
            async loadImage() {
                await this.fetchImageList();
                this.showImageList = true;
            },
            /**
             * Закрыть список картинок
             */
            closeImageList() {
                this.showImageList = false;
            },
            /**
             * Подстановка данных об  выбранной фотографии в поля формы Нового блока
             */
            async choseImage(item) {
                const newItem = JSON.parse(JSON.stringify(this.data.example));
                newItem.img = item;
                this.data.block.push(newItem);
                this.showImageList = false;
            },
            /**
             * Удалить блок
             */
            deleteBlock(index) {
                this.data.block.splice(index, 1);
            },
            /**
             * Создать блок
             */
            addNewBlock() {
                const newItem = JSON.parse(JSON.stringify(this.data.example));
                this.data.block.push(newItem);
            },
        },
    };
</script>

<style scoped>
    .textAreaImage__list{
        display: flex;
        flex-wrap: wrap;
    }
    .textAreaImage__item{
        position: relative;
        margin-bottom: 36px;
    }
    .textAreaImage__item:last-of-type{
        margin-bottom: 0;
    }
    .textAreaImage__close{
        position: absolute;
        top: -8px;
        right: 16px;

    }
    .textAreaImage__addPhoto{
        cursor: pointer;
        background: #FCFCFE;
        border: 1px dashed #D3D5DD;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .textAreaImage__addPhoto-title{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #2946C6;
        margin-top: 8px;
        text-align: center;
    }
    .imageBox__item{
        height: 150px;
        cursor: pointer;
    }
    .imageBox__item-img{
        height: 100%;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .imageBox__item-img:hover,
    .imageBox__item-img:focus{
        outline: 1px solid #2946C6 ;
    }
</style>
