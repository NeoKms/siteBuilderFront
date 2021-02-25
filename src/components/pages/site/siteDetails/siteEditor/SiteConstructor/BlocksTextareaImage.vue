<template>
    <v-container :label="data.label">
        <v-row class="textAreaImage__list">
            <v-col v-for="(elem, index) in data.block"
                   :lg="data.col" :sm="data.col" :md="data.col" :xl="data.col" :xs="data.col"
                   :key="index"
                   style="heigh:141px"
                   class="textAreaImage__item">
                <textAreaImage :data="elem"></textAreaImage>
                <v-btn v-if="data.btnType"
                       icon
                       class="textAreaImage__close"
                       color="red"
                       @click="deleteBlock(index)">
                    <v-icon>mdi-window-close</v-icon>
                </v-btn>
            </v-col>
            <v-col v-if="data.btnType === 'addPhoto'"
                   class="textAreaImage__item"
                   :span="data.col">
                <div class="textAreaImage__addPhoto"
                     @click="loadImage"
                     :style="{ height : data.height  + 'px'}">
                    <div class="textAreaImage__addPhoto-title">{{data.btnText}}</div>
                </div>
            </v-col>
            <v-col v-if="data.btnType === 'addVideo'"
                   class="textAreaImage__item"
                   :span="data.col">
                <div class="textAreaImage__addPhoto"
                     @click="loadImage"
                     :style="{ height : data.height  + 'px'}">
                    <div class="textAreaImage__addPhoto-title">{{data.btnText}}</div>
                </div>
            </v-col>
        </v-row>
        <v-btn v-if="data.btnType === 'secondary'" color="primary"
               @click="addNewBlock" style="margin-top: 24px;">
            {{data.btnText}}
        </v-btn>
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
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";
    import textAreaImage from './TextAreaImage';

    export default {
        name: "blocks-textarea-image",
        components: {
            textAreaImage
        },
        props: {
            data: {
                type: Object,
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
             * Подстановка данных об  выбранной фотографии в поля формы Нового блока
             */
            choseImage(item) {
                const newItem = this.$store.getters.getCopyObj(this.data.example);
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
                const newItem = this.$store.getters.getCopyObj(this.data.example);
                this.data.block.push(newItem);
            },
        },
    };
</script>

<style scoped>
    .textAreaImage__list {
        display: flex;
        flex-wrap: wrap;
    }

    .textAreaImage__item {
        position: relative;
        /*margin-bottom: 36px;*/
    }

    .textAreaImage__item:last-of-type {
        margin-bottom: 0;
    }

    .textAreaImage__close {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .textAreaImage__addPhoto {
        cursor: pointer;
        background: #FCFCFE;
        border: 1px dashed #D3D5DD;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .textAreaImage__addPhoto-title {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #2946C6;
        margin-top: 8px;
        text-align: center;
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
