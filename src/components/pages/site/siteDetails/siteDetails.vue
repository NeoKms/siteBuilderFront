<template>
	<v-container class="grey lighten-5"  v-if="loadSuccess">
		<div class="header">
			<router-link :to="{name: 'site'}">back</router-link>
			<div class="header__title">{{ siteName }} ({{ id }})</div>
			<div class="header__tab-container" >
<!--				<div >-->
					<div v-for="(tab, index) in tabs" :key="index"
						:class="{ active: activeTab === tab.name }"
						class="tab"
					>
						<router-link
						:to="{ name: tab.route, params: { tabName:  tab.name}}"
						v-if="!edit"
						>
							{{tab.label}}
						</router-link>
					</div>
<!--				</div>-->
				<div
						class="edit"
						v-if="!edit"
				>
					<router-link
							class="tab"
							:to="{ name: editTabs[activeTab].route, params: { tabName:  activeTab}}"
					>
						<img :src="editTabs[activeTab].img" width="20">
					</router-link>
				</div>
			</div>
		</div>
		<div class="component-container">
			<router-view :key="this.$route.path" @editorOn="edit = true" @editorOff="edit = false"/>
		</div>
	</v-container>
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
				edit: false,
                tabs: {
                    description: {
                        name: 'description',
                        label: 'Описание',
                        route: 'siteDescriptionView',
                    },
                    content: {
                        name: 'content',
                        label: 'Контент',
                        route: 'siteContentView',
                    },
                },
				editTabs: {
                    description: {
                        name: 'description',
                        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRIib3VPWsUQRgA4EcJVtEDO9GYw0JshJQWVlZKmpAPOQ0EDHYqNhaaMmX6NDYmZUIIFqZIYWdQEf+BH02IBC0EbYxezmJ2ub3Bu9zsLb7wMvvBzrPvzM4s1cVFrGIdVyvstyMu4xtaWf7GdNXICZzDhwJUOdbAR1zogv3B7UGRYexmHX5GHSMZHFdWes6uoYZL+BJh5/+BrZVBJvALb47APhWgp6nIJA4KHfTCRrPjr9l53zEVIXm+xqkuWB1jKciMMKkxkuerLpXVqkTyfI/Twg6xi0cpyK0+kXjOTqYgs8KC6xfJcy4FaSRWkufC/0CepCB30CyBPE5BZkogh3iYgsDLwsP9Ig9SkZqw6n/iBpbwDHs9kHupCNzMOngeXd/sgtxPBYaydjxrt6L7P6LzljBcy6kQHMe+8KZno3tT2pU0cbcMkMcV7T/hdZzBPDbwXXu45gdBYFHnb7f41R0IX+PsoAi81TnZ+1gR1lXSNt8rhrCDY9jGC7wTqqo0/gKUsOfqJ3dX9AAAAABJRU5ErkJggg==',
                        route: 'siteDescriptionEdit',
                    },
                    content: {
                        name: 'content',
                        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABhElEQVRIib3VPWsUQRgA4EcJVtEDO9GYw0JshJQWVlZKmpAPOQ0EDHYqNhaaMmX6NDYmZUIIFqZIYWdQEf+BH02IBC0EbYxezmJ2ub3Bu9zsLb7wMvvBzrPvzM4s1cVFrGIdVyvstyMu4xtaWf7GdNXICZzDhwJUOdbAR1zogv3B7UGRYexmHX5GHSMZHFdWes6uoYZL+BJh5/+BrZVBJvALb47APhWgp6nIJA4KHfTCRrPjr9l53zEVIXm+xqkuWB1jKciMMKkxkuerLpXVqkTyfI/Twg6xi0cpyK0+kXjOTqYgs8KC6xfJcy4FaSRWkufC/0CepCB30CyBPE5BZkogh3iYgsDLwsP9Ig9SkZqw6n/iBpbwDHs9kHupCNzMOngeXd/sgtxPBYaydjxrt6L7P6LzljBcy6kQHMe+8KZno3tT2pU0cbcMkMcV7T/hdZzBPDbwXXu45gdBYFHnb7f41R0IX+PsoAi81TnZ+1gR1lXSNt8rhrCDY9jGC7wTqqo0/gKUsOfqJ3dX9AAAAABJRU5ErkJggg==',
                        route: 'siteContentEdit',
                    },
				}
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
                    console.log(this.activeTab)
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
			border-bottom: 2px solid lightgrey;
			box-shadow: 0 2px 1px rgba(0, 0, 0, 0.5);
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin: 10px -15px;
			padding: 5px;
			.tab {
				height: 24px;
				margin-left: 20px;
				&.active a {
					color: #34c3ce;
					text-decoration: underline;
				}
			}
		}
	}

</style>
