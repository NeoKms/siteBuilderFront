<template>
    <div>
        <v-container class="grey lighten-5" v-if="!loading">
            <v-row>
                <v-col cols="1">
                    <router-link :to="{name: 'site'}" icon>
                        <v-icon>mdi-keyboard-backspace</v-icon>
                    </router-link>
                </v-col>
                <v-col cols="11">
                    {{ siteName }} ({{ id }})
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
                <router-view :key="this.$route.path" @editorOn="edit = true" @editorOff="edit = false" />
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
            this.setActiveTab()
        },
        computed: {
            ...mapGetters('sites', {
                siteData: 'getSiteData',
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
            }
        },
        methods: {
            loadData() {
                return this.$store.dispatch('sites/fetchSiteData', {id: this.id})
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.loading = false
                            //setTimeout(()=>this.loading = false,200)
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
