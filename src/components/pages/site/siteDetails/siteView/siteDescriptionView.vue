<template>
	<v-container class="grey lighten-5" v-if="site">
		<v-row align-content="center">
			<v-col cols="8">
				<v-container class="description">
					<v-row>
						<v-col align="left" class="title">
							Общее
							<v-btn color="primary" fab x-small dark  :to="{ name: 'siteDescriptionEdit', params: { tabName:  this.tabName}}">
								<v-icon>mdi-pencil</v-icon>
							</v-btn>
						</v-col>
						<v-col align="right">
							<v-row>
								<v-col align="right" class="ct-c"><div class="mark" :class="{yes: site.active}"></div></v-col>
								<v-col align="left" class="ct-c">{{site.active?'Активный':'Не активый'}}</v-col>
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
									<td>{{site.address}}</td>
								</tr>
								<tr>
									<td class="left">Тип</td>
									<td>{{site.type.options.find( name => name.value === site.type.value ).label}}</td>
								</tr>
								<tr>
									<td class="left">Описание</td>
									<td>{{site.description}}</td>
								</tr>
							</table>
						</v-col>
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
						<v-col>
							<table class="table-descr-sm">
								<tr>
									<td class="left">Название организации</td>
									<td>ООО ТРАНССВЯЗЬ</td>
								</tr>
								<tr>
									<td class="left">Телефон</td>
									<td>88005553535</td>
								</tr>
								<tr>
									<td class="left">Адрес</td>
									<td>666666, г. Санкт-Петербург, ул. Пушкина д.1 лит А </td>
								</tr>
								<tr>
									<td class="left">Основной E-mail</td>
									<td>tmp1@gmila.com</td>
								</tr>
								<tr>
									<td class="left">Обратная связь E-mail</td>
									<td>tmp2@gmail.com</td>
								</tr>
								<tr>
									<td class="left">Координаты</td>
									<td>59.9558742615268 30.369708388251336</td>
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
							<div class="template__img">
									<v-img
											v-show="site.template.data.img"
											:src="site.template.data.img"
											width="250" height="155" contain
									/>
								<span v-show="!site.template.data.img">Выберите шаблон сайта</span>
							</div>
							<div v-if="site.template.data.img">
								{{site.template.data.name}}
							</div>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
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
		computed: {
            site: function () {
                return this.$store.getters.getSiteById(this.id)
            },
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
</style>