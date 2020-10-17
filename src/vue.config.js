module.exports = {
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			sass: {
				prependData: ' @import "@/assets/scss/styles.scss"; '
			}
		}
	}
}
