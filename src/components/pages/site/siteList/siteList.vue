<template>
	<div class="siteContainer">
		<div class="siteCard"
			v-for="(site, index) in siteList"
			:key="index"
			:class="{active: site.active}"
			@click="goToDetails"
			@mouseover="setCurrentSiteId(site.id)"
		>
			<div v-if="site.img" class="siteCard__img" :style="{ backgroundImage: 'url('+site.img+')'}"></div>
			<div v-if="!site.img" class="siteCard__img" style="background-image: url('assets/img/none.png')"></div>
			<div class="siteCard__info">
				<div class="title">
					<div class="title__type">{{ site.type.options.find( name => name.value === site.type.value ).label }}</div>
					<div class="title__active" :class="{active: site.active}"></div>
				</div>
				<div class="name">{{ site.name }}</div>
				<div class="address">https://{{ site.address }}</div>
				<div class="footer">
					<div>&nbsp;</div>
					<div class="popover">
						<div class="popover__dot"></div>
						<div class="popover__dot"></div>
						<div class="popover__dot"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "siteList",
		data() {
            return {
                currentSiteId: 0
			}
		},
        mounted() {
            if (this.siteList.length === 0) {
                this.$store.commit('sites/getSiteList')
            }
        },
        computed: {
            ...mapGetters('sites',{
                siteList: 'getSiteList',
            }),
        },
        methods: {
            goToDetails: function () {
                this.$router.push({ name: 'siteDetails', params: { id: String(this.currentSiteId) } })
			},
            setCurrentSiteId: function (id) {
				this.currentSiteId = id
            }
        }
    }
</script>
<style scoped lang="scss">
	.siteContainer {
		margin: 5px;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		}
	.siteCard {
		opacity: .5;
		&.active {
			opacity: 1;
		}
		margin: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
		width: 240px;
		height: 310px;
		cursor: pointer;
		border-radius: 5%;
		&:hover {
			background-color: #ebeced;
		}
		&__img {
			border-radius: 5% 5% 0 0;
			background-position: 50%;
			background-repeat: no-repeat;
			/*background-size: cover;*/
			background-size: contain;
			height: 170px;
			width: 100%;
		}
		&__info {
			padding: 5px;
			.title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 22px;
				&__type {
					font-size: 12px;
					line-height: 16px;
					text-transform: uppercase;
					color: #2e3945;
				}
				&__active {
					&.active {
						background-color: #2946c6;
					}
					background-color: #aebdc6;
					width: 12px;
					height: 12px;
					border-radius: 50%;
				}
			}
			.name {
				font-weight: 500;
				font-size: 20px;
				line-height: 24px;
				margin-bottom: 0;
			}
			.address {
				font-size: 14px;
				line-height: 20px;
				margin-bottom: 18px;
				color: #2946c6;
			}
		}
		.footer {
			/*margin: 10px;*/
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.popover {
			width: 24px;
			height: 16px;
			align-items: center;
			&__dot {
				margin-top: 1px;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background-color: #626b74;
			}
		}
	}
</style>
