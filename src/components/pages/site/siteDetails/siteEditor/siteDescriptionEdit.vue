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
							<v-btn small class="btn-save">
								<v-icon left>mdi-content-save</v-icon> Save
							</v-btn>
						</v-col >
						<v-col cols="2" class="ct-c">
							<v-btn small class="btn-cancel">
								<v-icon left>mdi-close-circle</v-icon> Cancel
							</v-btn>
						</v-col>
						<v-col align="right" cols="6">
							<v-row>
								<v-col align="right" class="ct-c">
								</v-col>
								<v-col align="left" class="ct-c">
									<v-switch v-model="site.active" :label="site.active?'Активный':'Не активый'" value="John"></v-switch>
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
										<v-text-field v-model="site.name"></v-text-field>
									</td>
								</tr>
								<tr>
									<td class="left">Адрес</td>
									<td>
										<v-text-field v-model="site.address"></v-text-field>
									</td>
								</tr>
								<tr>
									<td class="left">Тип</td>
									<td>
										<v-select
												v-model="selectedType"
												:items="site.type.options"
												item-text="label"
												item-value="value"
												@input="selectType(selectTypeVal,$event)"
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
												v-model="site.description"
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
									<td><v-text-field v-model="site.contacts.title"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Телефон</td>
									<td><v-text-field v-model="site.contacts.phone"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Город</td>
									<td><v-text-field v-model="site.contacts.city"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Улица</td>
									<td><v-text-field v-model="site.contacts.street"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Дом</td>
									<td><v-text-field v-model="site.contacts.house"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Литера</td>
									<td><v-text-field v-model="site.contacts.litera"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Индекс</td>
									<td><v-text-field v-model="site.contacts.index"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Основной E-mail</td>
									<td><v-text-field v-model="site.contacts.emailMain"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Обратная связь E-mail</td>
									<td><v-text-field v-model="site.contacts.emailFeedback"></v-text-field></td>
								</tr>
								<tr>
									<td class="left">Координаты</td>
									<td>
										<v-text-field v-model="site.contacts.coordinate.x" label="x"></v-text-field>
										<v-text-field v-model="site.contacts.coordinate.y" label="y"></v-text-field>
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
							<div class="template__img" :style="site.template.img?'':'display: grid;'">
								<img v-if="site.template.img" :src="site.template.img">
								<span v-else>Выберите шаблон сайта</span>
							</div>
						</v-col>
					</v-row>
					<v-row>

					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
    export default {
        name: "siteDescriptionEdit",
		data() {
            return {
                selectTypeVal: { state: '', abbr: '' },
			}
		},
        props: {
            id: {
                type: String,
                required: true
            }
        },
        computed: {
            site: function () {
                return this.$store.getters.getSiteById(this.id)
            },
            selectedType: function () {
				return this.site.type.options.find( name => name.value === this.site.type.value )
            }
        },
        methods: {
            selectType(propName, propVal) {
                this.site.type.value = propVal.value;
            }
        },
		mounted() {
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
		}
	}
</style>
