<template>
    <v-container>
        <v-row>
            <v-col cols="1" class="ct-c">
                <v-btn
                        small class="btn-save"
                        @click="editorSave"
                >
                    <v-icon left>mdi-content-save</v-icon>
                    Save
                </v-btn>
            </v-col>
            <v-col cols="1" class="ct-c">
                <v-btn
                        small class="btn-cancel"
                        @click="editorCancel"
                >
                    <v-icon left>mdi-close-circle</v-icon>
                    Cancel
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8">
                <template v-if="pageValue">
                    <v-form label-position="top">
                        <v-expansion-panels accordion v-model="activeDataInd">
                            <template v-for="(elem, index) in pageValue.blockList">
                                <v-expansion-panel :key="index" :name="elem.name" class="siteLayout__collapse-item" v-if="elem.active">
                                    <v-expansion-panel-header class="head_accordion siteLayout__collapse-header">
                                        {{elem.name}}
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content class="acc_content" v-if="activePageInd>-1">
                                        <v-row class="siteDataEdit__blockItem">
                                            <v-col :key="index2"
                                                   :span="elem2.col"
                                                   style="margin-bottom: 16px;"
                                                   v-for="(elem2, index2) in elem.elements"
                                                   :hidden="!elem2.active"
                                                   :lg="elem2.col" :sm="elem2.col" :md="elem2.col" :xl="elem2.col"
                                                   :xs="elem2.col"
                                            >
                                                {{elem2.data.label}}
                                                <component
                                                        :data="((siteForm.template.pages[activePageInd]||{}).blockList[index].elements[index2]||{}).data"
                                                        :is="blockComponent(elem2.type)"
                                                        v-if="elem2.active" />
                                            </v-col>
                                        </v-row>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </template>
                        </v-expansion-panels>
                    </v-form>
                </template>
            </v-col>
            <v-col cols="4">
                <v-expansion-panels accordion class="siteLayout__collapse" style="padding-right: 20px;"
                                    v-model="activePageInd">
                    <template v-for="(elem, index) in this.siteForm.template.pages">
                        <v-expansion-panel :key="index" :name="elem.name" class="siteLayout__collapse-item">
                            <v-expansion-panel-header @click="changeFrame(elem.name)" class="head_accordion">
                               <v-row no-gutters>
                                   <v-switch
                                           style="margin-top: -2px"
                                           dense hide-details
                                           v-model="siteForm.template.pages[index].active"
                                           v-if="!elem.require"
                                   ></v-switch>
                               </v-row>
                                {{elem.name}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="acc_content">
                                <ul :key="index2"
                                    class="siteLayout__collapse-blockMainList"
                                    v-for="(elem2, index2) in elem.blockList">
                                    <li class="siteLayout__collapse-blockMainItem block_head">
                                        <span v-if="!siteForm.template.pages[index].blockList[index2].require">
                                            <v-checkbox
                                                    hide-details
                                                    class="checkboxElement"
                                                    :label="elem2.name"
                                                    v-model="siteForm.template.pages[index].blockList[index2].active"
                                            ></v-checkbox>
                                        </span>
                                        <span v-else>{{elem2.name}}</span>
                                        <v-btn @click="changeOrder(index2, siteForm.template.pages[index].blockList)"
                                               icon
                                               color="green"
                                               v-if="!(!elem2.reorder
                                   || !(!!(elem.blockList[index2-1])
                                   && (elem.blockList[index2-1]).reorder))" x-small сolor="primary">
                                            <v-icon>mdi-swap-vertical</v-icon>
                                        </v-btn>
                                    </li>
                                    <li>
                                        <ul :key="index3"
                                            class="siteLayout__collapse-blockSubList"
                                            v-for="(elem3, index3) in elem2.elements">
                                            <li class="siteLayout__collapse-blockSubItem">
                                                <v-checkbox :disabled="elem3.require" :label="elem3.name"
                                                            class="checkboxElement"
                                                            v-model="siteForm.template.pages[index].blockList[index2].elements[index3].active"></v-checkbox>
                                            </li>
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
    import TextAreaImage from './SiteConstructor/TextAreaImage';
    import InputSimple from './SiteConstructor/InputSumple';
    import CheckboxGroup from './SiteConstructor/CheckboxGroup';
    import MultipleSelect from './SiteConstructor/SelectMultiple';
    import SelectSimple from './SiteConstructor/SelectSimple';
    import ImageBox from './SiteConstructor/ImageBox';
    import CheckboxVisible from './SiteConstructor/CheckboxVisible';
    import TextAreaSimple from './SiteConstructor/TextAreaSimple';
    import RadioImage from './SiteConstructor/RadioImage';
    import CheckboxSimple from './SiteConstructor/CheckboxSimple.vue';
    import TextAreaTitle from './SiteConstructor/TextAreaTitle.vue';
    import BlockTextareaTitle from './SiteConstructor/BlocksTextareaTitle.vue';
    import BlockTextareaImage from './SiteConstructor/BlocksTextareaImage.vue';
    import DataPickerSimple from './SiteConstructor/DataPickerSimple.vue';
    import SwitchSimple from './SiteConstructor/SwitchSimple';
    import {mapGetters} from 'vuex';

    export default {
        name: "siteContentEdit",
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
                siteForm2: {
                    active: false
                },
                checkbox1: true,
                blockElements: [
                    {
                        name: 'textAreaImage',
                        component: TextAreaImage,
                    },
                    {
                        name: 'inputSimple',
                        component: InputSimple,
                    },
                    {
                        name: 'checkboxGroup',
                        component: CheckboxGroup,
                    },
                    {
                        name: 'selectMultiple',
                        component: MultipleSelect,
                    },
                    {
                        name: 'selectSimple',
                        component: SelectSimple,
                    },
                    {
                        name: 'imageBox',
                        component: ImageBox,
                    },
                    {
                        name: 'checkboxVisible',
                        component: CheckboxVisible,
                    },
                    {
                        name: 'textAreaSimple',
                        component: TextAreaSimple,
                    },
                    {
                        name: 'radioImage',
                        component: RadioImage,
                    },
                    {
                        name: 'checkboxSimple',
                        component: CheckboxSimple,
                    },
                    {
                        name: 'textAreaTitle',
                        component: TextAreaTitle,
                    },
                    {
                        name: 'blockTextareaTitle',
                        component: BlockTextareaTitle,
                    },
                    {
                        name: 'blockTextareaImage',
                        component: BlockTextareaImage,
                    },
                    {
                        name: 'dataPickerSimple',
                        component: DataPickerSimple,
                    },
                    {
                        name: 'SwitchSimple',
                        component: SwitchSimple
                    }
                ],
                beforeActive: '',
                activeData: '',
                activeDataInd: null,
                activeLayout: 'Главная',
                activePageInd: 0,
                siteForm: {}
            }
        },
        computed: {
            ...mapGetters('sites', {
                site: 'getSiteData',
            }),
            sitePages() {
                return this.siteForm.template.pages;
            },
            pageValue() {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.activeDataInd = 0;
                return this.sitePages.find(el => el.name === this.activeLayout);
            },
        },
        methods: {
            changeFrame: function (name) {
                this.activeLayout = name;
            },
            blockComponent(nameComponent) {
                const currentElement = this.blockElements.find(item => item.name === nameComponent);
                if (currentElement) return currentElement.component;
                return false;
            },
            changeOrder(index, array) {
                array[index].order -= 1;
                array[index - 1].order += 1;
                array.sort((elem1, elem2) => {
                    return elem1.order - elem2.order;
                });
            },
            editorCancel() {
                this.$router.push({name: 'siteContentView', params: this.$router.history.current.params})
            },
            editorSave() {
                this.$store.dispatch('sites/updateSiteData', this.siteForm)
                this.$router.push({name: 'siteContentView', params: this.$router.history.current.params})
            }
        },
        created() {
            this.siteForm = this.$store.getters.getCopyObj(this.site)
            this.siteForm.contentUpdate = true
        }
    }
</script>

<style lang="scss" scoped>
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
    .block_head {
        font-size: 16px;
        line-height: 24px;
        padding-left: 4px;
        border-left: 2px solid #2946c6;
        margin-bottom: 4px;
        display: flex;
        justify-content: space-between;
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

    .checkboxElement {
        margin: 0;
        padding: 0;
    }
</style>
