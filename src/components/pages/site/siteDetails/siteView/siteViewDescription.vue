<template>
	<div class="container">
		<div class="description">
			<div class="description__title">
				<div class="title">Общее</div>
				<div class="active">
					<div class="mark" :class="{yes: site.active}"></div>
					<div class="text">{{site.active?'Активный':'Не активый'}}</div>
				</div>
			</div>
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
		</div>
		<div class="line">&shy;</div>
		<div class="template">
			<div class="template__title">
				<div class="title">Шаблон</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "siteViewDescription",
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
		}
    }
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		align-items: inherit;
	}
	.description {		padding: 1%;
		width:60%;
		&__title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.title {
				font-size: 14pt;
				font-weight: bold;
			}
			.active {
				align-items: center;
				display: flex;
				.mark {
					margin-right: 5px;
					background-color: #aebdc6;
					width: 12px;
					height: 12px;
					border-radius: 50%;
					&.yes {
						background-color: #2946c6;
					}
				}
			}
		}
	}
	.line {
		width:.3%;
		background: #dedede;
	}
	.template {
		padding: 1%;
		width:40%;
	}
</style>
