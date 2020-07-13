<template>
	<div v-if="loadSuccess">
		<div class="header">
			<router-link :to="{name: 'site'}">back</router-link>
			<div class="header__title">{{ siteName }} ({{ id }})</div>
			<div class="header__tab-container">
				<div v-for="(tab, index) in tabs" :key="index"
					:class="{ active: activeTab === tab.name }"
					class="tab"
				>
					<router-link
					:to="{ name: tab.route, params: { tabName:  tab.name}}"
					>
						{{tab.label}}
					</router-link>
				</div>
			</div>
		</div>
		<div class="component-container">
			<router-view :key="this.$route.path"/>
		</div>
	</div>
</template>

<script>
    export default {
        name: "siteDetails",
        props: {
            id: {
                type: String,
                required: true
            }
        },
		data() {
            return {
                isLoading: false,
				loadSuccess: false,
                activeTab: 'description',
                tabs: {
                    description: {
                        name: 'description',
                        label: 'Описание',
                        route: 'siteDescription',
                    },
                    content: {
                        name: 'content',
                        label: 'Контент',
                        route: 'siteContent',
                    },
                },
			}
		},
		mounted() {
            this.setActiveTab()
            this.loadData();
        },
		computed: {
            siteData: function () {
                return this.$store.getters.getSiteById(this.id)
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
                        await this.$store.dispatch('fetchSiteData', {id: this.id})
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
                const { tabName } = this.$route.params;
                const tabs = Object.keys(this.tabs);
                if (tabs.some(item => item === tabName)) {
                    this.activeTab = tabName;
                }
                else {
                    this.activeTab = 'description';
                    this.$router.push({ name: this.tabs[this.activeTab].route, params: { tabName:  this.activeTab} })
                }
                //
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
