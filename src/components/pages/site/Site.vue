<template>
    <v-container>
        <v-row dense>
            <v-col>
                Перечень сайтов
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <siteList />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <v-btn color="info" @click="viewCreate=true">Создать сайт</v-btn>
            </v-col>
        </v-row>
        <v-dialog
                v-model="viewCreate"
                max-width="920"
        >
            <v-container class="grey lighten-5" fluid>
                <v-row justify="center" align="center">
                    <v-col class="text-center">
                        Добавление нового сайта
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col class="text-center">
                        <v-text-field label="Название сайта" filled v-model="siteName" />
                    </v-col>
                </v-row>
                <v-row justify="center" align="center">
                    <v-col class="text-center">
                        <v-btn @click="addNewSite">Создать</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-dialog>
    </v-container>
</template>

<script>
    import siteList from './siteList/siteList'
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        name: "Site",
        data() {
            return {
                viewCreate: false,
                siteName: '',
            }
        },
        methods: {
            addNewSite() {
                this.$store.dispatch('sites/setNewSite', {
                    name: this.siteName
                })
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.$router.push({
                                name: 'siteDetails',
                                params: {id: String(this.$store.getters['sites/getSiteData'].id)}
                            })
                        }
                    })
            }
        },
        components: {
            siteList,
        },
    }
</script>

<style scoped>

</style>
