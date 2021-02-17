<template>
	<v-container>
		<v-row>
			<v-col cols="8">
				<div class="mainRow">
					<div class="mainRow__title">{{pageValue.name}}</div>
				</div>
			</v-col>
			<v-col cols="4">
				<v-checkbox v-model="siteForm.active" :label="siteForm.active.toString()"></v-checkbox>
			</v-col>
		</v-row>
<!--		<v-row>-->
<!--			<v-col cols="8">-->
<!--				<template v-if="pageValue">-->
<!--				<v-form label-position="top">-->
<!--					<v-expansion-panels v-model="activeDataInd" accordion>-->
<!--						<template v-for="(elem, index) in pageValue.blockList">-->
<!--							<v-expansion-panel :key="index" :name="elem.name" class="siteLayout__collapse-item">-->
<!--								<v-expansion-panel-header class="head_accordion siteLayout__collapse-header" >-->
<!--									{{elem.name}}-->
<!--								</v-expansion-panel-header>-->
<!--								<v-expansion-panel-content class="acc_content">-->
<!--								<v-row class="siteDataEdit__blockItem">-->
<!--									<v-col :span="elem2.col"-->
<!--											v-for="(elem2, index2) in elem.elements"-->
<!--											:key="index2" style="margin-bottom: 16px;">-->
<!--										<component v-if="elem2.active" :is="blockComponent(elem2.type)" :data="elem2.data"/>-->
<!--									</v-col>-->
<!--								</v-row>-->
<!--								</v-expansion-panel-content>-->
<!--							</v-expansion-panel>-->
<!--						</template>-->
<!--					</v-expansion-panels>-->
<!--				</v-form>-->
<!--			</template>-->
<!--			</v-col>-->
<!--			<v-col cols="4" >-->
<!--				<v-expansion-panels v-model="this.activePageInd" accordion class="siteLayout__collapse" style="padding-right: 20px;">-->
<!--					<template v-for="(elem, index) in this.siteForm.template.pages">-->
<!--						<v-expansion-panel v-if="elem.active" :key="index" class="siteLayout__collapse-item" :name="elem.name">-->
<!--							<v-expansion-panel-header class="head_accordion" @click="changeFrame(elem.name)">-->
<!--								{{elem.name}}-->
<!--							</v-expansion-panel-header>-->
<!--							<v-expansion-panel-content class="acc_content">-->
<!--								<ul v-for="(elem2, index2) in elem.blockList"-->
<!--								:key="index2"-->
<!--								class="siteLayout__collapse-blockMainList">-->
<!--								<li class="siteLayout__collapse-blockMainItem block_head">-->
<!--									<span>-->
<!--										{{elem2.name}}-->
<!--									</span>-->
<!--									<v-btn v-if="!(!elem2.reorder-->
<!--                                   || !(!!(elem.blockList[index2-1])-->
<!--                                   && (elem.blockList[index2-1]).reorder))" @click="changeOrder(index2, elem.blockList)"-->
<!--											сolor="primary" fab x-small dark>-->
<!--										<v-icon>mdi-swap-vertical</v-icon>-->
<!--									</v-btn>-->
<!--								</li>-->
<!--								<li>-->
<!--									<ul v-for="(elem3, index3) in elem2.elements"-->
<!--										class="siteLayout__collapse-blockSubList"-->
<!--										:key="index3">-->
<!--										<li class="siteLayout__collapse-blockSubItem">-->
<!--											<v-checkbox v-model="elem3.active" :disabled="elem3.require" :label="elem3.name" class="checkboxElement"></v-checkbox>-->
<!--										</li>-->
<!--									</ul>-->
<!--								</li>-->
<!--							</ul>-->
<!--							</v-expansion-panel-content>-->
<!--						</v-expansion-panel>-->
<!--					</template>-->
<!--				</v-expansion-panels>-->
<!--			</v-col>-->
<!--		</v-row>-->
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
                ],
                beforeActive: '',
                activeData: '',
                activeDataInd: null,
                activeLayout: 'Главная',
                activePageInd: 0,
            }
        },
        computed: {
            siteForm: function () {
                return this.$store.getters.getCopyObj(this.$store.getters['sites/getSiteById'](this.id))
            },
            sitePages() {
                console.log(this.siteForm);
                return this.siteForm.template.pages;
            },
            pageValue() {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.activeDataInd = 0;
                return this.sitePages.find((el) => {
                    if (el.name === this.activeLayout){
                        return el;
					}
                });
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
        },
		mounted() {

        }
    }
</script>

<style scoped lang="scss">
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
		box-shadow: 0 0 1px rgba(0,0,0,0.5);
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
