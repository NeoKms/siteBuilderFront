<template>
    <div class="imageBox" :label="data.label ? data.label : ''"
                  style="margin-bottom: 0">
        <div class="imageBox__image"
             :class="data.mask ? 'imageBox__mask' : '' "
             @click="loadImage"
             :style="{ backgroundImage: 'url(' + data.img  + ')',
             width: data.size.width ? data.size.width + 'px' : '100%',
             height: data.size ? data.size.height  + 'px' : '100%',
             margin: centerMode ? '0 auto' : ''}">
            <span class="imageBox__change">Заменить</span>
        </div>
        <span v-if="data.note" class="imageBox__note">
                {{data.note}}
            </span>
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
                        Close
                    </v-btn>
<!--                    <pb-title :level="4">Выберете изображение</pb-title>-->
                    <v-row class="imageBox__wrapper">
                        <v-col class="imageBox__item"
                                 v-for="(item, index) in getImageList"
                                 :key="index"
                                cols="6"
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

    export default {
        name: "ImageBox",
        props: {
            data: {
                type: Object,
            },
            centerMode: {
                type: Boolean,
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
             * Закрыть список шаблонов
             */
            closeImageList() {
                this.showImageList = false;
            },
            /**
             * Подстановка данных об  выбранной фотографии в поля формы Нового блока
             */
            async choseImage(item) {
                this.data.img = item;
                this.showImageList = false;
            },
        },
    };

</script>

<style scoped>
    .imageBox__mask{
        border-radius: 50%;
        overflow: hidden;
    }
    .imageBox__image{
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;
    }
    .imageBox__image:before{
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(196, 196, 196, 0.8);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    .imageBox__change{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        padding: 6px 20px;
        background-color: rgba(46, 57, 69, 0.8);
        color: #fff;
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    .imageBox__image:hover.imageBox__image:before,
    .imageBox__image:focus.imageBox__image:before{
        opacity: 1;
    }
    .imageBox__image:hover .imageBox__change,
    .imageBox__image:focus .imageBox__change{
        opacity: 1;
    }
    .imageBox__note{
        display: block;
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
        color: #626B74;
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
