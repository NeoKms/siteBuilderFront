export default {
	state: {
		siteList: [],
		sitesDataList: [],
	},
	getters: {
		getSiteList(state) {
			return state.siteList;
		},
		getSiteById: state => id => {
			return state.sitesDataList.find(siteData => Number(siteData.id) === id);
		},
	},
	mutations: {
		getSiteList (state) {
			state.siteList = [
				{
					id: 1,
					type: 'сайт',
					name: 'site1',
					active: true,
					address: 'vlad.dev.lan',
					img: "https://www.vkpress.ru/upload/iblock/56b/56b5d2504d707f50989bc1677e0fce38.png",
				},
				{
					id: 2,
					type: 'сайт',
					name: 'site2',
					active: false,
					address: 'vlad2.dev.lan',
					// img: "https://99px.ru/sstorage/56/2019/07/image_562207191850033055418.jpg",
				},
			];
		},
		getSiteById (state, payload) {
			let data = [
				{
					id: 1,
					name: 'site1'
				},
				{
					id: 2,
					name: 'site2'
				}
			]
			state.sitesDataList.push(data[payload.id-1])
		}
	},
	actions: {
		fetchSiteData (context, payload) {
			if (context.getters.getSiteById(payload.id) === undefined) {
				context.commit('getSiteById', {id: payload.id})
			}
		}
	},
};
