<template>
    <v-container style="background: #fafafa">
        <v-row justify="center">
            <h1>Список шаблонов</h1>
        </v-row>
        <v-row dense v-if="!loading">
            <v-col
                    class="tmpl-card"
                    v-for="template in templatesList"
                    :key="template.id"
                    cols="4"
                    @click="emitChange(template.id)"
            >
                <v-card dark align="center" elevation="7">
                    <v-img
                            class="white--text align-end"
                            width="300px"
                            :src="template.img+'.jpg'"
                    />
                    <div>{{template.type_name}}</div>
                    <v-card-title
                            class="headline text-wrap"
                            v-text="template.name"

                    ></v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense justify="center">
            <img v-if="loading" src="@/assets/img/loading.gif" width="200" alt="loading">
        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {errVueHandler} from '@/plugins/errorResponser'

    export default {
        name: "MtemplateChoose",
        props: {
            viewTemplates: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                loading: true,
            }
        },
        created() {
            this.loadData();
        },
        computed: {
            ...mapGetters('sites', {
                templatesList: 'getTemplatesList'
            })
        },
        methods: {
            loadData() {
                this.$store.dispatch('sites/fetchTemplatesList')
                    .then(res => {
                        if (errVueHandler(this, res)) {
                            this.loading = false
                        }
                    })
            },
            emitChange: function (id) {
                this.$emit('setChosenTmpl', id)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tmpl-card {
        :hover {
            .headline {
                background: #4b4b4b;
            }
        }
    }
</style>
