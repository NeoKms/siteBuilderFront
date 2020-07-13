<template>
	<div>
		<h1>descr</h1>
		<h1>{{this.$route.params}}</h1>
		<h1>1{{siteData}}</h1>
<!--		<h1>{{siteData.address}}</h1>-->
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
            siteData: function () {
                return this.$store.getters.getSiteById(this.id)
            },
		}
    }
</script>

<style scoped>

</style>
