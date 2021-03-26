<template>
    <div>
        <v-container class="grey lighten-5" v-if="!loading">
            <v-row>
                <v-col cols="1">
                    <router-link :to="{name: 'site'}" icon>
                        <v-icon>mdi-keyboard-backspace</v-icon>
                    </router-link>
                </v-col>
                <v-col cols="7">
                    {{ siteName }} ({{ id }})
                </v-col>
                <v-col cols="4">
                    <v-btn :disabled="editor" small  v-if="siteData.processing" color="warning">
                        В процессе {{siteData.processing===1 ? 'публикации' : 'снятия с публикации'}}
                        <v-btn :disabled="editor" small  color="info" :loading="true" icon>loading</v-btn>
                    </v-btn>
                    <v-btn :disabled="editor" small v-else-if="!!siteData.active" color="error" @click="unPublish">Снять с публикации</v-btn>
                    <v-btn :disabled="editor" small v-else-if="cannotPublish" color="error" v-tooltip.auto="publishErrors.join('</br>')">Невозможно опубликовать</v-btn>
                    <v-btn :disabled="editor" small v-else color="green" @click="Publish">Отправить на публикацию</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-tabs
                        background-color="#fafafa"
                        color="deep-purple accent-4"
                        left
                >
                    <v-tab
                            v-for="(tab, index) in tabs" :key="index"
                            :to="{ name: tab.route, params: { tabName:  tab.name}}"
                    >
                        {{tab.label}}
                    </v-tab>
                </v-tabs>
            </v-row>
            <v-row>
                <router-view :key="this.$route.path" />
            </v-row>
        </v-container>
        <v-container v-if="loading">
            <v-row justify="center">
                <img src="@/assets/img/loading.gif" width="200" alt="loading">
            </v-row>
            <v-row justify="center">
                Загрузка сайта...
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        name: "siteDetails",
        props: {
            id: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                loading: true,
                editor: false,
                activeTab: 'description',
                edit: false,
                editTabs: {
                    description: {
                        name: 'description',
                        route: 'siteDescriptionEdit',
                    },
                    content: {
                        name: 'content',
                        route: 'siteContentEdit',
                    },
                }
            }
        },
        async mounted() {
            await this.loadData();
            if (!this.siteList.length) {
                this.$store.dispatch('sites/fetchSiteList').then(res => errVueHandler(this, res))
            }
            this.setActiveTab()
        },
        computed: {
            ...mapGetters('sites', {
                siteData: 'getSiteData',
                siteList: 'getSiteList',
            }),
            siteName: function () {
                return this.siteData.name
            },
            tabs: function () {
                let tabs = {
                    description: {
                        name: 'description',
                        label: 'Описание',
                        route: 'siteDescriptionView',
                    }
                }
                if (this.siteData && this.siteData.template.id > 0) {
                    tabs.content = {
                        name: 'content',
                        label: 'Контент',
                        route: 'siteContentView',
                    }
                }
                return tabs
            },
            publishErrors: function () {
                let arr = []
                if (!this.siteList.length || this.siteList.find(el=>el.address===this.siteData.address && el.active)) {
                    arr.push("Данный домен уже опубликован.")
                }
                if (!this.siteData.address) {
                    arr.push("Не выбран адрес (домен)")
                }
                if (this.siteData.type.value<1) {
                    arr.push("Не выбран тип")
                }
                if (this.siteData.template.id<1) {
                    arr.push("Не выбран шаблон")
                }
                if (!this.siteData.publications.length) {
                    arr.push("Не выбраны публикации")
                }
                if (!this.contactsChecked) {
                    arr.push("Не заполнены контактные данные")
                }
                return arr
            },
            contactsChecked: function() {
                let c = this.siteData.contacts
                return !!c.city && !!c.coordinate.x && !!c.coordinate.y && !!c.emailFeedback && !!c.emailMain && !!c.index && !!c.litera && !!c.street && !!c.city && !!c.doubleMailing
                    && !!c.house && !!c.phone && !!c.title
            },
            cannotPublish: function () {
                return !!this.publishErrors.length
            }
        },
        methods: {
            loadData() {
                return this.$store.dispatch('sites/fetchSiteData', {id: this.id})
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.loading = false
                        }
                    })
            },
            setActiveTab() {
                let {path} = this.$route;
                path = path.toString().split('/')
                if (path[path.length - 1] !== 'edit') {
                    const tabs = Object.keys(this.tabs);
                    const tabName = path[path.length - 1];
                    if (tabs.some(item => item === tabName)) {
                        this.activeTab = path[path.length - 1];
                        this.$router.push({
                            name: this.tabs[this.activeTab].route,
                            params: {tabName: this.activeTab}
                        }).catch(() => {
                        })
                    } else {
                        this.activeTab = 'description';
                        this.$router.push({
                            name: this.tabs[this.activeTab].route,
                            params: {tabName: this.activeTab}
                        }).catch(() => {
                        })
                    }
                } else {
                    this.activeTab = path[path.length - 2];
                    this.$router.push({
                        name: this.editTabs[this.activeTab].route,
                        params: {tabName: this.activeTab}
                    }).catch(() => {
                    })
                }
            },
            Publish() {
                this.$store.dispatch('sites/publishSite', {id: this.id})
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.siteData.processing = 1
                            this.$store.commit('notifications/addMessage', {
                                name: 'Сайт отправлен на публикацию',
                                time: 2000,
                            })
                        }
                    })
            },
            unPublish() {
                this.$store.dispatch('sites/unPublishSite', {id: this.id})
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.siteData.processing = 2
                            this.$store.commit('notifications/addMessage', {
                                name: 'Сайт отправлен на снятие с публикации',
                                time: 2000,
                            })
                        }
                    })
            }
        },
        created() {
            this.$eventBus.$on('editorOn', () => {
                this.editor = true
            })
            this.$eventBus.$on('editorOff', () => {
                this.editor = false
            })
        }
    }
</script>

<style scoped lang="scss">
    .btn-cancel {
        color: red !important;

        i {
            color: #ea0400 !important;
        }
    }

    .btn-save {
        color: #2946c6 !important;

        i {
            color: #2946c6 !important;
        }
    }
</style>
