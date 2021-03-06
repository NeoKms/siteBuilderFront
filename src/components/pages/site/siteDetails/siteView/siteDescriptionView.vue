<template>
    <v-container v-if="site">
        <v-row align-content="center">
            <v-col cols="8">
                <v-container class="description">
                    <v-row>
                        <v-col align="left" class="title">
                            Общее
                            <v-btn color="primary" fab x-small dark
                                   :to="{ name: 'siteDescriptionEdit', params: { tabName:  this.tabName}}">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col align="right">
                            <v-row>
                                <v-col align="right" class="ct-c">
                                    <div class="mark" :class="{yes: site.active}"></div>
                                </v-col>
                                <v-col align="left" class="ct-c">{{site.active?'Опубликован':'Не опубликован'}}</v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <table class="table-descr">
                                <tr>
                                    <td class="left">Название</td>
                                    <td>{{site.name}}</td>
                                </tr>
                                <tr>
                                    <td class="left">Адрес</td>
                                    <td><a :href="'http://'+site.address" target="_blank">{{site.address}}</a></td>
                                </tr>
                                <tr>
                                    <td class="left">Тип</td>
                                    <td>{{(site.type.options.find( name => name.value === site.type.value )||{label:'--||--'}).label}}</td>
                                </tr>
                                <tr>
                                    <td class="left">Описание</td>
                                    <td>{{site.description}}</td>
                                </tr>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row class="title">
                        Публикации
                    </v-row>
                    <v-row style="margin-top: 10px">
                        <v-data-table
                                :loading="loading"
                                dense
                                :items="dataset"
                                :headers="headers"
                        >
                            <template v-slot:no-data>
                                У данного сайта нет пбуликаций
                            </template>
                        </v-data-table>
                    </v-row>
                </v-container>
            </v-col>
            <v-col cols="4">
                <v-container>
                    <v-row>
                        <v-col class="title">
                            Контакты
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Название организации
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.title}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Телефон
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.phone}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Адрес
                        </v-col>
                        <v-col cols="6">
                            {{[
                            site.contacts.index,
                            site.contacts.city,
                            site.contacts.street,
                            site.contacts.litera,
                            site.contacts.house
                            ].join(',')}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Основной E-mail
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.emailMain}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Обратная связь E-mail
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.emailFeedback}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Дублирование почты
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.doubleMailing ? 'Да' : 'Нет'}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            Координаты
                        </v-col>
                        <v-col cols="6">
                            {{site.contacts.coordinate.x}}<br>{{site.contacts.coordinate.y}}
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-row>
                        <v-col class="title">
                            Шаблон
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="template__img">
                                <v-img
                                        v-if="site.template.img"
                                        :src="`${site.template.img}_${site.template.style[0].elements[0].data.value}.jpg`"
                                        width="250" height="155" contain
                                />
                                <span v-else>Выберите шаблон сайта</span>
                            </div>
                            <div v-if="site.template.img">
                                {{site.template.name}}
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        name: "siteDescriptionView",
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
        data() {
            return {
                loading: true,
                headers: [
                    {text: 'Код', value: 'name'},
                    {text: 'Площадь', value: 'sqr'},
                    {text: 'Ставка', value: 'rate'},
                    {text: 'Назначение', value: 'destination'},
                ]
            }
        },
        computed: {
            ...mapGetters('sites', {
                site: 'getSiteData',
            }),
            ...mapGetters('publications', {
                dataset: 'getPublicationList',
            }),
        },
        mounted() {
            this.$eventBus.$emit('editorOff')
        },
        created() {
            if (this.site.publications.length) {
                this.$store.dispatch('publications/fetchPublicationList', {
                    ids: this.site.publications.map(el => el.id)
                })
                    .then(res => {
                        errVueHandler(this, res)
                        this.loading = false
                    })
            } else {
                this.loading = false
                this.$store.commit('publications/setPublicationList',[])
            }
        }
    }
</script>

<style scoped lang="scss">
    .title {
        font-size: 14pt;
        font-weight: bold;
    }

    .mark {
        margin-right: -12px;
        background-color: #aebdc6;
        width: 15px;
        height: 15px;
        border-radius: 50%;

        &.yes {
            background-color: #2946c6;
        }
    }

    .ct-c {
        align-self: center;
    }

    .template {
        &__img {
            align-items: center;
            border: 2px dotted grey;
            margin: auto;
            width: 250px;
            height: 160px;
            display: grid;
        }
    }
    .table-descr {
        td {
            padding: 5px 10px 5px 10px;
        }
    }
</style>
