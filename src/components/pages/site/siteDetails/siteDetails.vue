<template>
	<v-container class="grey lighten-5"  v-if="loadSuccess">
		<v-row>
			<v-col cols="1">
				<router-link :to="{name: 'site'}" icon>
					<v-icon>mdi-keyboard-backspace</v-icon>
				</router-link>
			</v-col>
			<v-col cols="11">
				{{ siteName }} ({{ id }})
			</v-col>
		</v-row>
		<v-row>
			<v-tabs
					background-color="#fafafa"
					color="deep-purple accent-4"
					left
			>
				<v-tab
						v-for="(tab, index) in tabs" :key="index"
						:to="{ name: tab.route, params: { tabName:  tab.name}}"
				>
					{{tab.label}}
				</v-tab>
			</v-tabs>
		</v-row>
		<v-row>
			<router-view :key="this.$route.path" @editorOn="edit = true" @editorOff="edit = false"/>
		</v-row>
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
                        route: 'siteDescriptionEdit',
                    },
                    content: {
                        name: 'content',
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
                let { path } = this.$route;
                path = path.toString().split('/')
                if (path[path.length-1]!=='edit'){
                    const tabs = Object.keys(this.tabs);
                    const tabName=path[path.length-1];
                    if (tabs.some(item => item === tabName)) {
                        this.activeTab = path[path.length-1];
                        this.$router.push({ name: this.tabs[this.activeTab].route, params: { tabName:  this.activeTab} }).catch(()=>{})
                    }
                    else {
                        this.activeTab = 'description';
                        this.$router.push({ name: this.tabs[this.activeTab].route, params: { tabName:  this.activeTab} }).catch(()=>{})
                    }
                } else {
                    this.activeTab = path[path.length-2];
                    this.$router.push({ name: this.editTabs[this.activeTab].route, params: { tabName:  this.activeTab} }).catch(()=>{})
				}
            },
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

</style>
