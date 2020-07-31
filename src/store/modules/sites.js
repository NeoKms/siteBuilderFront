export default {
	state: {
		siteList: [],
		sitesDataList: [],
		templatesList: [],
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
		getTemplatesList(state) {
			return state.templatesList;
		},
		getTemplatById: state => id => {
			return state.templatesList.find(template => Number(template.id) === Number(id));
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
					active: true,
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
					contacts:{
						"title":"названиеорг",
						"phone":"телорг",
						"city":"город",
						"street":"улиц",
						"house":"1",
						"litera":"2",
						"index":333444,
						"emailMain":"tmp1@gmila.com",
						"emailFeedback":"tmp2@gmail.com",
						"doubleMailing":"1",
						"coordinate":{"x":"59.9558742615268","y":"30.369708388251336"}
					},
					template: {
						id: 0,
						data: {

						}
					},
				},
				{
					id: 2,
					active: false,
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
					contacts:{
					"title":"названиеорг1",
						"phone":"телорг1",
						"city":"город1",
						"street":"улиц1",
						"house":"2",
						"litera":"3",
						"index":111111,
						"emailMain":"tmp1@gmila.com1",
						"emailFeedback":"tmp2@gmail.com1",
						"doubleMailing":"0",
						"coordinate":{"x":"59.9558742615268","y":"30.369708388251336"}
					},
					template: {
						id: 0,
						data: {

						}
					},
				}
			]
			//
			state.sitesDataList.push(data[payload.id-1])
		},
		getTemplatesList (state) {
			//типо ответ от апи
			state.templatesList = [
				{
					id: 1,
					type: 1,
					name: 'Сайт бц',
					active: 1,
					img: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/06/10/d9b97b5646fbb691e29947a921049a1d.jpg",
				},
				{
					id: 2,
					type: 1,
					name: 'Сайт школы',
					active: 1,
					img: "https://static10.tgstat.ru/channels/_0/e7/e7bf72a2d6081ba3f5a2e0b86606aa6b.jpg",
				},
			];
			//
		},
	},
	actions: {
		fetchSiteData (context, payload) {
			//запрашиваем от апи, если такого еще нет у нас
			if (context.getters.getSiteById(payload.id) === undefined) {
				context.commit('getSiteById', {id: payload.id})
			}
		},
		fetchTemplatesList (context) {
			if (context.getters.getTemplatesList.length === 0) {
				context.commit('getTemplatesList');
			}
		}
	},
};
