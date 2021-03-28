<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <div class="mainRow">
                    <div class="mainRow__title">Предпросмотр</div>
                    <v-btn @click="changeFrameStyle(1)" :class="{active: this.iframe.now===1}">desktop</v-btn>
                    <v-btn @click="changeFrameStyle(2)" :class="{active: this.iframe.now===2}">tablet</v-btn>
                    <v-btn @click="changeFrameStyle(3)" :class="{active: this.iframe.now===3}">mobile</v-btn>
                </div>
            </v-col>
            <v-col cols="4">
                Страницы
                <v-btn color="primary" fab x-small dark
                       :to="{ name: 'siteContentEdit', params: { tabName:  this.tabName}}">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" class="iframe-column">
                <iframe
                        class="iframe-scale"
                        name="main"
                        :style="{
					'transform':'scale('+this.iframe.transform+')',
					'margin-left':this.iframe.marginL+'px',
					'margin-top':this.iframe.marginT+'px',
					}"
                        :srcdoc="preview"
                        v-show="iframe.loaded"
                        sandbox="allow-scripts"
                        :width="this.iframe.width" :height="this.iframe.width" frameborder="1"
                ></iframe>
                <img v-show="!iframe.loaded" src="@/assets/img/loading.gif" width="200" alt="loading">
            </v-col>
            <v-col cols="4">
                <v-expansion-panels accordion style="padding-right: 20px;" v-model="first">
                    <template v-for="(elem, index) in sitePages">
                        <v-expansion-panel v-if="elem.active"
                                           :key="index" class="siteLayout__collapse-item"
                                           :name="elem.name">
                            <v-expansion-panel-header class="head_accordion" @click="changeFrame(elem.name)">
                                {{elem.name}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="acc_content">
                                <ul v-for="(elem2, index2) in elem.blockList" :key="index2">
                                    <li class="block_head">
                                        {{elem2.name}}
                                    </li>
                                    <li>
                                        <ul v-for="(elem3, index3) in elem2.elements" :key="index3">
                                            <li v-if="elem3.active">{{elem3.name}}</li>
                                        </ul>
                                    </li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </template>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        data() {
            return {
                iframe: {
                    name: 'Главная',
                    src: '',
                    loaded: false,
                    transform: 0.378,
                    marginL: -615,
                    marginT: -615,
                    width: 1980,
                    now: 1
                },
                first: 0,
            }
        },
        name: "siteContentView",
        props: {
            id: {
                type: String,
                required: true
            },
            tabName: {
                type: String,
                required: true
            }
        },
        computed: {
            ...mapGetters('sites', {
                site: 'getSiteData',
                preview: 'getPreview',
            }),
            sitePages() {
                return this.site.template.pages;
            },
        },
        methods: {
            getPreview() {
                this.iframe.loaded = false;
                this.$store.dispatch('sites/fetchPreview',{
                    "template_id": this.site.template.id,
                    "site_id": this.site.id,
                    "page_name": this.iframe.name,
                    "auth" :"8fea39d82cfaae83ed954e7f8e821a3c981c6e854ad2155fc2a86f7d01a8fa52"
                })
                    .then(res => {
                        if (errVueHandler(this, res)){
                            this.iframe.loaded = true
                        }
                    })
            },
            frameLoad: function () {
                this.iframe.loaded = true;
            },
            changeFrame: function (name) {
                if (this.iframe.name !== name) {
                    this.iframe.name = name;
                    this.getPreview()
                }
            },
            changeFrameStyle: function (type) {
                switch (type) {
                    case 1:
                        this.iframe.marginL = -615;
                        this.iframe.marginT = -615;
                        this.iframe.transform = 0.378;
                        this.iframe.width = 1980;
                        this.iframe.now = 1;
                        break
                    case 2:
                        this.iframe.marginL = -9;
                        this.iframe.marginT = -9;
                        this.iframe.transform = 0.977;
                        this.iframe.width = 768;
                        this.iframe.now = 2;
                        break
                    case 3:
                        this.iframe.marginL = 0;
                        this.iframe.marginT = 163;
                        this.iframe.transform = 1.764;
                        this.iframe.width = 425;
                        this.iframe.now = 3;
                        break
                }
            }
        },
        mounted() {
            this.getPreview()
            this.$eventBus.$emit('editorOff')
        },
    }
</script>

<style scoped lang="scss">
    .block_head {
        font-size: 16px;
        line-height: 24px;
        padding-left: 4px;
        border-left: 2px solid #2946c6;
    }

    ul, li {
        text-align: left;
        list-style-type: none;
    }

    .acc_content {
        margin-top: 5px;
    }

    .head_accordion {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        font-size: 20px;
        line-height: 25px;
    }

    .mainRow {
        display: flex;

        &__title {
            padding-left: 20px;
            font-size: 20px;
            line-height: 25px;
            flex-grow: 1;
            text-align: left;
        }

        button {
            margin-right: 6px;

            &.active {
                color: #6200ea !important;
            }
        }
    }
</style>
