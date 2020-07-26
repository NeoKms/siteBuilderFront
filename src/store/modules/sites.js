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
			return state.sitesDataList.find(siteData => Number(siteData.id) === Number(id));
		},
		getSiteDataList(state) {
			return state.sitesDataList;
		},
	},
	mutations: {
		getSiteList (state) {
			state.siteList = [
				{
					id: 1,
					type: {
						options: [
							{value: 1, label: 'Сайт', code:'site'},
							{value: 2, label: 'Лендинг', code:'landing'},
							{value: 3, label: 'Промо-сайт', code:'promoSite'},
						],
						value: 1
					},
					name: 'site1',
					active: 1,
					address: 'vlad.dev.lan',
					img: "https://www.vkpress.ru/upload/iblock/56b/56b5d2504d707f50989bc1677e0fce38.png",
				},
				{
					id: 2,
					type: {
						options: [
							{value: 1, label: 'Сайт', code:'site'},
							{value: 2, label: 'Лендинг', code:'landing'},
							{value: 3, label: 'Промо-сайт', code:'promoSite'},
						],
						value: 2
					},
					name: 'site2',
					active: 0,
					address: 'vlad2.dev.lan',
					// img: "https://99px.ru/sstorage/56/2019/07/image_562207191850033055418.jpg",
				},
			];
		},
		getSiteById (state, payload) {
			//типо ответ от апи
			let data = [
				{
					id: 1,
					active: 1,
					address: "vlad.dev.lan",
					description: "Описание",
					name: "site1",
					publications: [],
					type: {
						options: [
							{value: 1, label: 'Сайт', code:'site'},
							{value: 2, label: 'Лендинг', code:'landing'},
							{value: 3, label: 'Промо-сайт', code:'promoSite'},
						],
						value: 1
					},
					template: 0,
				},
				{
					id: 2,
					active: 0,
					address: "vlad2.dev.lan",
					description: "Описание",
					name: "site1",
					publications: [],
					type: {
						options: [
							{value: 1, label: 'Сайт', code:'site'},
							{value: 2, label: 'Лендинг', code:'landing'},
							{value: 3, label: 'Промо-сайт', code:'promoSite'},
						],
						value: 2
					},
					template: 0,
				}
			]
			//
			state.sitesDataList.push(data[payload.id-1])
		}
	},
	actions: {
		fetchSiteData (context, payload) {
			//запрашиваем от апи, если такого еще нет у нас
			if (context.getters.getSiteById(payload.id) === undefined) {
				context.commit('getSiteById', {id: payload.id})
			}
		}
	},
};
