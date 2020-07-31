<template>
	<v-container style="background: #fafafa">
		<v-row dense>
			<v-col
					class="tmpl-card"
					v-for="template in templatesList"
					:key="template.id"
					cols="4"
					@click="emitChange(template.id)"
			>
				<v-card dark align="center" elevation="7">
						<v-img
								class="white--text align-end"
								width="286px"
								:src="template.img"
						/>
						<v-card-title
								class="headline"
								v-text="template.name"
						></v-card-title>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
    export default {
        name: "MtemplateChoose",
        props: {
            viewTemplates: {
                type: Boolean,
                required: true
            }
        },
        mounted() {
            this.loadData();
        },
        computed: {
            templatesList: function () {
                return this.$store.getters.getTemplatesList
            },
        },
        methods: {
            async loadData() {
                if (this.templatesList.length === 0) {
                    try {
                        this.isLoading = true;
                        await this.$store.dispatch('fetchTemplatesList')
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
            emitChange: function (id) {
                this.$emit('setChosenTmpl',id)
            }
        }
    }
</script>

<style scoped lang="scss">
	.tmpl-card {
		:hover {
			.headline {
				background: #4b4b4b;
			}
		}
	}
</style>
