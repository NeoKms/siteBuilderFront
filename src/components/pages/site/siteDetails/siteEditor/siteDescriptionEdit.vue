<template>
	<v-container class="grey lighten-5">
		<v-row align-content="center">
			<v-col cols="7">
				<v-container class="description">
					<v-row>
						<v-col align="left" class="title ct-c" cols="2">
							Общее
						</v-col>
						<v-col cols="2" class="ct-c">
							<v-btn
									small class="btn-save"
									@click="editorSave"
							>
								<v-icon left>mdi-content-save</v-icon> Save
							</v-btn>
						</v-col >
						<v-col cols="2" class="ct-c">
							<v-btn
									small class="btn-cancel"
									@click="editorCancel"
							>
								<v-icon left>mdi-close-circle</v-icon> Cancel
							</v-btn>
						</v-col>
						<v-col align="right" cols="6">
							<v-row>
								<v-col align="right" class="ct-c">
								</v-col>
								<v-col align="left" class="ct-c">
									<v-switch v-model="siteForm.active" :label="siteForm.active?'Активный':'Не активый'"></v-switch>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<table class="table-descr">
								<tr>
									<td class="left">Название</td>
									<td>
										<v-text-field v-model="siteForm.name"></v-text-field>
									</td>
								</tr>
								<tr>
									<td class="left">Адрес</td>
									<td>
										<v-text-field v-model="siteForm.address"></v-text-field>
									</td>
								</tr>
								<tr>
									<td class="left">Тип</td>
									<td>
										<v-select
												v-bind="selectedType"
												:items="siteForm.type.options"
												item-text="label"
												item-value="value"
												@input="selectType"
												persistent-hint
												return-object
												single-line
										></v-select>
									</td>
								</tr>
								<tr>
									<td class="left">Описание</td>
									<td>
										<v-textarea
												filled
												v-model="siteForm.description"
										></v-textarea>
									</td>
								</tr>
							</table>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
			<v-col cols="5">
				<v-container>
					<v-row>
						<v-col class="title">
							Контакты
						</v-col>
					</v-row>
					<v-row>
						<v-col>
							<table class="table-descr-sm">
								<tr>
									<td class="left">Название организации</td>
									<td><v-text-field v-model="siteForm.contacts.title"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Телефон</td>
									<td><v-text-field v-model="siteForm.contacts.phone"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Город</td>
									<td><v-text-field v-model="siteForm.contacts.city"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Улица</td>
									<td><v-text-field v-model="siteForm.contacts.street"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Дом</td>
									<td><v-text-field v-model="siteForm.contacts.house"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Литера</td>
									<td><v-text-field v-model="siteForm.contacts.litera"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Индекс</td>
									<td><v-text-field v-model="siteForm.contacts.index"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Основной E-mail</td>
									<td><v-text-field v-model="siteForm.contacts.emailMain"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Обратная связь E-mail</td>
									<td><v-text-field v-model="siteForm.contacts.emailFeedback"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Координаты</td>
									<td>
										<v-text-field v-model="siteForm.contacts.coordinate.x" label="x"></v-text-field>
										<v-text-field v-model="siteForm.contacts.coordinate.y" label="y"></v-text-field>
									</td>
								</tr>

							</table>
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
							<div
									class="template__img"
									@click.stop="viewTemplates = true"
									@mousemove="viewEdit = true"
									@mouseleave="viewEdit = false"
							>
								<v-img
										v-show="siteForm.template.data.img"
										v-if="!viewEdit"
										:src="siteForm.template.data.img"
										width="250" height="155" contain
								/>
								<span v-show="viewEdit">Выберите шаблон сайта</span>
							</div>
							<div v-if="siteForm.template.data.img">
								{{siteForm.template.data.name}}
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
		<v-dialog
				v-model="viewTemplates"
				max-width="900"
		>
			<MtemplateChoose :viewTemplates="viewTemplates" @setChosenTmpl="setChosenTmpl"/>
		</v-dialog>
	</v-container>
</template>
<script>
    import MtemplateChoose from './MtemplateChoose'

    export default {
        name: "siteDescriptionEdit",
        components: {
            MtemplateChoose,
        },
		data() {
            return {
                selectTypeVal: { state: '', abbr: '' },
				viewTemplates: false,
				viewEdit: false,
				siteForm: {},
			}
		},
        props: {
            id: {
                type: String,
                required: true
            }
        },
        computed: {
            selectedType: function () {
				return this.siteForm.type.options.find( name => name.value === this.siteForm.type.value )
            },
			site: function () {
                return this.$store.getters.getCopyObj(this.$store.getters['sites/getSiteById'](this.id))
            }
        },
        methods: {
            selectType(val) {
                this.siteForm.type.value = val.value;
            },
            setChosenTmpl(id) {
                this.siteForm.template.id = id
				this.viewTemplates = false
				this.siteForm.template.data = this.$store.getters.getCopyObj(this.$store.getters['sites/getTemplatById'](id))
            },
            editorCancel() {
                this.$emit('editorCancel')
				this.$router.push({name:'siteDescriptionView',params:this.$router.history.current.params})
                this.$emit('editorOff')
            },
            editorSave() {
                this.$emit('editorSave')
				this.$store.dispatch('sites/updateSiteData', this.siteForm)
				//toDo сделать првоверку на значение
                this.$router.push({name:'siteDescriptionView',params:this.$router.history.current.params})
                this.$emit('editorOff')
			}
        },
		mounted() {
            this.siteForm = this.site;
            this.$emit('editorOn')
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
			cursor: pointer;
			display: grid;
		}
	}
</style>
