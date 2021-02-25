<template>
	<div>
		<p>Перечень сайтов</p>
		<siteList/>
	</div>
</template>

<script>
    import siteList from './siteList/siteList'
    export default {
        name: "Site",
        components: {
            siteList,
        },
    }
</script>

<style scoped>

</style>
