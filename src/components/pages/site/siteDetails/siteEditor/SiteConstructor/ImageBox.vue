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
        <v-dialog
                v-model="showImageList"
                width="600px"
        >
            <v-card>
                <v-card-title>
                    <span class="headline">Выберете изображение</span>
                </v-card-title>
                <v-card-text>
                    <div v-if="imageInLoad">
                        <img style="margin-left: 170px" src="/assets/img/loading.gif" width="200" alt="loading">
                    </div>
                    <div v-else
                         class="siteTemplateEdit__templates"
                         @click.self="closeImageList"
                    >
                        <v-row class="imageBox__wrapper">
                            <v-col class="imageBox__item"
                                   v-for="(item, index) in imageList"
                                   :key="index"
                                   cols="6"
                                   style="margin-bottom: 16px;">
                                <div class="imageBox__item-img"
                                     :style="{backgroundImage: 'url(' + item + ')'}"
                                     @click="choseImage(item)"></div>
                            </v-col>
                        </v-row>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

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
                imageInLoad: false,
            };
        },
        computed: {
            ...mapGetters('sites', {
                imageList: 'getImageList',
            }),
        },
        methods: {
            /**
             * Загрузить список картинок
             */
            loadImage() {
                if (!this.imageList.length) {
                    this.imageInLoad = true;
                    this.showImageList = true;
                    this.$store.dispatch('sites/fetchImageList').then(res => {
                        if (res) {
                            this.imageInLoad = false
                        } else {
                            this.showImageList = false
                            this.$store.commit('notifications/addMessage', {
                                name: 'Ошибка загрузки изображений. Попробуйте позже',
                                type: 'error',
                                time: 3000,
                            })
                        }
                    });
                } else {
                    this.showImageList = true
                }
            },
            /**
             * Закрыть список картинок
             */
            closeImageList() {
                this.showImageList = false;
            },
            /**
             * Подстановка данных об выбранной фотографии в поля формы Нового блока
             */
            async choseImage(item) {
                this.data.img = item;
                this.showImageList = false;
            },
        },
    };

</script>

<style scoped>
    .imageBox__mask {
        border-radius: 50%;
        overflow: hidden;
    }

    .imageBox__image {
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;
    }

    .imageBox__image:before {
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

    .imageBox__change {
        position: absolute;
        top: 50%;
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
    .imageBox__image:focus.imageBox__image:before {
        opacity: 1;
    }

    .imageBox__image:hover .imageBox__change,
    .imageBox__image:focus .imageBox__change {
        opacity: 1;
    }

    .imageBox__note {
        display: block;
        font-size: 12px;
        line-height: 16px;
        margin-top: 8px;
        color: #626B74;
    }

    .imageBox__item {
        height: 150px;
        cursor: pointer;
    }

    .imageBox__item-img {
        height: 100%;
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .imageBox__item-img:hover,
    .imageBox__item-img:focus {
        outline: 1px solid #2946C6;
    }
</style>
