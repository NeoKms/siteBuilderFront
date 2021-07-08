<template>
    <v-container>
        <v-row dense>
            <v-col>
                <v-select
                        v-model="selectedObj"
                        :items="objToSelect"
                        item-text="name"
                        item-value="id"
                        label="Объект"
                        :loading="objLoading"
                        @input="apiCall"
                />
            </v-col>
            <v-col>
                <v-select
                        v-model="selectedLit"
                        :items="litToSelect"
                        item-text="name"
                        item-value="id"
                        label="Литера"
                        :loading="litLoading"
                        @input="apiCall"
                />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <v-text-field
                        v-model="sqr[0]"
                        label="Площадь от"
                        @input="apiCall"
                />
            </v-col>
            <v-col>
                <v-text-field
                        v-model="sqr[1]"
                        label="Площадь до"
                        @input="apiCall"
                />
            </v-col>
            <v-col>
                <v-text-field
                        v-model="rate[0]"
                        label="Ставка от"
                        @input="apiCall"
                />
            </v-col>
            <v-col>
                <v-text-field
                        v-model="rate[1]"
                        label="Ставка до"
                        @input="apiCall"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-select
                        v-model="selectedType"
                        :items="types"
                        item-text="name"
                        item-value="val"
                        label="Тип помещения"
                        :multiple="true"
                        small-chips
                        @input="apiCall"
                />
            </v-col>
            <v-col>
                <v-switch
                        v-model="onlySelected"
                        label="Только выбранные"
                        @change="apiCall"
                />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <v-data-table
                        dense
                        v-model="selectedPublForSite"
                        :items="dataset"
                        :headers="headers"
                        show-select
                        :single-select="false"
                        @toggle-select-all="$emit('newSelected',$event)"
                        @item-selected="$emit('newSelected',$event)"
                >
                    <template v-slot:no-data>
                        Нет подходящих публикаций
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        name: "PublicationsTable",
        data() {
            return {
                objLoading: true,
                litLoading: true,
                publLoading: true,
                selectedObj: -1,
                selectedLit: -1,
                selectedType: [],
                selectedPublForSite: [],
                onlySelected: false,
                sqr: ['', ''],
                rate: ['',''],
                types: [
                    {val: 'warehouse', name: 'Офисы'},
                    {val: 'office', name: 'Склады'},
                    {val: 'manufacture', name: 'Производства'},
                ],
                headers: [
                    {text: 'Код', value: 'name'},
                    {text: 'Площадь', value: 'sqr'},
                    {text: 'Ставка', value: 'rate'},
                    {text: 'Назначение', value: 'destination'},
                ]
            }
        },
        computed: {
            ...mapGetters('objects', {
                objectList: 'getObjectList',
            }),
            ...mapGetters('liters', {
                literList: 'getLiterList',
            }),
            ...mapGetters('publications', {
                dataset: 'getPublicationList',
            }),
            ...mapGetters('sites', {
                site: 'getSiteData',
            }),
            objToSelect: function () {
                let objCopy = this.$store.getters.getCopyObj(this.objectList)
                objCopy.unshift({id: -1, name: 'Все'})
                return objCopy
            },
            litToSelect: function () {
                let objCopy = this.$store.getters.getCopyObj(this.literList)
                objCopy.unshift({id: -1, name: 'Все'})
                return objCopy
            }
        },
        methods: {
            apiCall() {
                this.publLoading = true
                let payload = {
                    sqr: this.sqr,
                    rate: this.rate,
                    liter_id: this.selectedLit,
                    object_id: this.selectedObj,
                    types: this.selectedType,
                }
                if (this.onlySelected) {
                    payload.ids = this.selectedPublForSite.map(el=>el.id)
                }
                this.$store.dispatch('publications/fetchPublicationList', payload)
                    .then(res => {
                        errVueHandler(this, res)
                        this.publLoading = false
                    })
            }
        },
        mounted() {
            this.selectedPublForSite = JSON.parse(JSON.stringify(this.site.publications))
        },
        created() {
            this.$store.dispatch('objects/fetchObjectList')
                .then(res => {
                    errVueHandler(this, res)
                    this.objLoading = false
                })
            this.$store.dispatch('liters/fetchLiterList')
                .then(res => {
                    errVueHandler(this, res)
                    this.litLoading = false
                })
            this.apiCall()
        }
    }
</script>

<style scoped>

</style>
