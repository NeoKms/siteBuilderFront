<template>
	<div v-if="loadSuccess">
		<div class="header">
			<div class="header__title">{{ siteName }} ({{ siteId }})</div>
			<div class="header__tab-container">
				<div v-for="(tab, index) in tabs" :key="index"
					:class="{ active: activeTab === tab.name }"
					@click="activeTab = tab.name"
					class="tab"
				>
					{{tab.label}}
				</div>
			</div>
		</div>
		<div class="component-container">
			<siteViewDescription v-if="activeTab==='description'"></siteViewDescription>
			<siteViewContent v-if="activeTab==='content'"></siteViewContent>
		</div>
	</div>
</template>

<script>
    import siteViewDescription from './siteView/siteViewDescription.vue'
    import siteViewContent from './siteView/siteViewContent.vue'

    export default {
        name: "siteDetails",
        components: {
            siteViewDescription,
            siteViewContent
        },
		data() {
            return {
                siteId: Number(this.$route.params.id),
                isLoading: false,
				loadSuccess: false,
                activeTab: 'description',
                tabs: {
                    description: {
                        name: 'description',
                        label: 'Описание',
                        component: siteViewDescription,
                    },
                    content: {
                        name: 'content',
                        label: 'Контент',
                        component: siteViewContent,
                    },
                },
			}
		},
		mounted() {
            this.loadData();
        },
		computed: {
            siteData: function () {
                return this.$store.getters.getSiteById(this.siteId)
            },
            siteName: function () {
				return this.siteData.name
            }
		},
		methods: {
            async loadData() {
                if (this.siteData === undefined) {
                    try {
                        this.isLoading = true;
                        await this.$store.dispatch('fetchSiteData', {id: this.siteId})
                    } catch (e) {
                        console.log(e);
                    } finally {
                        this.isLoading = false;
                        this.loadSuccess = true;
                    }
                } else {
                    this.loadSuccess = true;
				}
            },
            setActiveTab() {
                const { tab } = this.$route.params;
                const tabs = Object.keys(this.tabs);
                if (tabs.some(item => item === tab)) this.activeTab = tab;
                else this.activeTab = 'description';
            },
		}
    }
</script>

<style scoped lang="scss">
	.header {
		&__title {
			font-size: 24px;
			color: #000000;
			text-align: left;
		}
		&__tab-container {
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-top: 10px;
			margin-bottom: 10px;
			.tab {
				margin-left: 20px;
				cursor: pointer;
				&.active {
					color: #16C0B0;
					text-decoration: underline;
				}
			}
		}
	}

</style>
