const Mock = require('mockjs')
import img1 from "../assets/images/qiongyou/banner_1.jpg"
import img2 from "../assets/images/qiongyou/banner_2.jpg"
import img3 from "../assets/images/qiongyou/banner_3.jpg"
import videos from "../assets/images/qiongyou/7140.mp4"
const buildwebswiper = Mock.mock(
	'/api/buildwebswiper', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					tweenimg: img1,
					swipertitle: "【意大利游记攻略】“意”惹情牵，沐浴在艳阳下的旧时光",
					swiperdsc: "Da-image"
				},
				{
					tweenimg: img2,
					swipertitle: "穷游锦囊 | 越南",
					swiperdsc: "山海远阔，喧嚣街市，一袭奥黛品越南"
				},
				{
					tweenimg: img3,
					swipertitle: "【台湾游记攻略】那年，我们在台湾由北向南的青春狂欢",
					swiperdsc: "林琛Live"
				}
			],
			message: '查询成功'
		}
	})
const buildpopoverdiv = Mock.mock(
	'/api/buildpopoverdiv', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					popoverdivcity: "香港",
					id: '1'
				},
				{
					popoverdivcity: "澳门",
					id: '2'

				},
				{
					popoverdivcity: "东京",
					id: '3'

				},
				{
					popoverdivcity: "厦门",
					id: '4'

				},
				{
					popoverdivcity: "北京",
					id: '5'

				},
				{
					popoverdivcity: "伦敦",
					id: '6'

				},
				{
					popoverdivcity: "首尔",
					id: '7'

				},
				{
					popoverdivcity: "大阪",
					id: '8'

				},
				{
					popoverdivcity: "香港",
					id: '9'

				},
				{
					popoverdivcity: "巴黎",
					id: '10'

				},
				{
					popoverdivcity: "罗马",
					id: '11'

				},
				{
					popoverdivcity: "清迈",
					id: '12'

				},
				{
					popoverdivcity: "新加坡",
					id: '13'

				},
				{
					popoverdivcity: "台北",
					id: '14'

				},
				{
					popoverdivcity: "北京",
					id: '15'

				},
				{
					popoverdivcity: "威尼斯",
					id: '16'

				},
				{
					popoverdivcity: "普吉岛",
					id: '17'

				},
				{
					popoverdivcity: "哈罗伦萨",
					id: '18'

				},
				{
					popoverdivcity: "洛杉矶",
					id: '19'

				},
				{
					popoverdivcity: "纽约",
					id: '20'

				},
				{
					popoverdivcity: "米兰",
					id: '21'

				},
				{
					popoverdivcity: "巴厘岛",
					id: '22'

				}
			],
			message: '查询成功'
		}
	})

const buildlayoutuijian = Mock.mock(
	'/api/buildlayoutuijian', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					type: 1,
					layout: [{
						video: videos,
						icon: "视频",
						link: "video",
						id: 1,
						title: "探访峇峇娘惹华人隐藏的豪宅",
						fr: "旅行囧记",
						f14: "槟城",

					}]
				},
				{
					type: 2,
					layout: [{
						img: "http://www.airmate-china.com/uploadfiles/2018/11/20181116090057057.jpg",
						icon: "商城",
						link: "shop",
						id: 1,
						title: "[暑期/十一预售]北京/天津直飞日本东京/大阪/东阪/冲绳/北海道4-8天往返含税机票",
						jiage: "1980",
						didian: "北京.天津",
					}]
				},
				{
					type: 3,
					layout: [{
						img: "http://www.airmate-china.com/uploadfiles/2018/10/20181015100245245.png",
						icon: "游记",
						link: "youji",
						id: 1,
						title: "[暑期/十一预售]北京/天津直飞日本东京/大阪/东阪/冲绳/北海道4-8天往返含税机票",
						liulan: "15360",
						youjiname: "抠脚大仙",
					}]
				},
				{
					type: 4,
					layout: [{
						img: "http://www.airmate-china.com/uploadfiles/2018/10/201810181344244424.jpg",
						icon: "专栏",
						link: "zhuanlan",
						id: 1,
						title: "2019版日本三大花火－长冈祭选座及购票",
						frdsc: "磨人哒小栗砸",
						f14dsc: "小红栗子满地跑",
					}]
				},

				{
					type: 2,
					layout: [{
						img: "https://z1.muscache.cn/im/pictures/6533dd84-3fc8-4bc3-bc2c-38aaa50e5577.jpg",
						icon: "商城",
						link: "shop",
						id: 2,
						title: "在云南，探寻昔日难访的秘境.便利的交通，使昔日秘境变得触手可及",
						jiage: "999",
						didian: "云南",
					}]
				},
				{
					type: 3,
					layout: [{
						img: "https://z1.muscache.cn/im/pictures/46e72192-9bbc-4def-a634-4df46deeb653.jpg",
						icon: "游记",
						link: "youji",
						id: 2,
						title: "树屋、悬崖别墅、无边泳池或法式风情，无论你热爱自然风光还是城市浪漫。",
						liulan: "14780",
						youjiname: "爱美小子",
					}]
				},

				{
					type: 4,
					layout: [{
						img: "https://z1.muscache.cn/im/pictures/d4089962-20c5-4939-95c5-e7b43d431f4b.jpg",
						icon: "专栏",
						link: "zhuanlan",
						id: 2,
						title: "FC法 租界独门独用精品LOFT，经典石库门淮海路复兴路思南路衡山路田子坊附近",
						frdsc: "圣地LOFT",
						f14dsc: "复古气息元素",
					}]
				},
				{
					type: 3,
					layout: [{
						img: "https://z1.muscache.cn/im/pictures/9d8e6aea-edb1-4686-b09f-0bab6312b4e0.jpg",
						icon: "游记",
						link: "youji",
						id: 3,
						title: "SPECTACULAR Views of Yuyuan, Bund private Balcony",
						liulan: "147850",
						youjiname: "天龙人",
					}]
				}
			],
			message: '查询成功'
		}
	})
const buildqshop = Mock.mock(
	'/api/buildqshop', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					id: 1,
					qimg: 'http://dg.ptotour.com/files/line2018/d131731714906093750.jpg',
					type: 1,
					date: 25,
					title: '【冰川奇遇】新西兰南岛弗朗兹约瑟夫直升机+3小时冰川健行Heli Hike',
					tejia: "APP立减150",
					jiage: '998'
				},
				{
					id: 2,
					qimg: 'http://dg.ptotour.com/files/line2018/d131950222461093750.jpg',
					type: 2,
					title: '【暹粒必看】柬埔寨《吴哥的微笑》表演秀+自助晚餐（可加购接送）',
					tejia: "秒减150",
					jiage: '99'
				},
				{
					id: 3,
					qimg: 'http://dg.ptotour.com/files/line2017/d131450823099335384.jpg',
					type: 2,
					title: '[早鸟特惠]北京直飞塞班岛6-7天自由行（免税直飞+赠北部观光环岛游+中文接送机+可升级指定酒店+可预定敞篷野马/大黄蜂自驾用车）',
					tejia: "秒杀150",
					jiage: '1999'
				},
				{
					id: 4,
					qimg: 'http://dg.ptotour.com/files/line2018/d131642760290156250.jpg',
					type: 2,
					title: '泰国芭提雅Tiffany蒂芬妮人妖秀表演门票(可加订接送)',
					tejia: "APP秒减30",
					jiage: '550'
				},
				{
					id: 5,
					qimg: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
					type: 1,
					date: 15,
					title: '【原生态象营】泰国清迈KerChor大象生态公园 (中文服务,体验象夫生活,照顾象宝宝)',
					tejia: "APP立减250",
					jiage: '666'
				},
				{
					id: 6,
					qimg: 'http://dg.ptotour.com/files/2018-11/d20181119160642132405.jpg',
					type: 2,
					title: '日本大阪周游卡OSAKA AMAZINGPASS(1日/2日券)',
					tejia: "秒杀",
					jiage: '679'
				},
				{
					id: 7,
					qimg: 'https://pic.qyer.com/public/supplier/lastminute/2017/01/06/14836899639665/300x300',
					type: 1,
					date: 3,
					title: '【错峰优惠】摩洛哥6天5晚豪车私家团 蓝城舍夫沙万+世遗非斯+独立卫浴沙漠帐篷营地观星+柏柏篝火晚餐+骑骆驼看日落+沙漠水井+拜访柏柏尔人家+非洲Gnawa音乐 沙漠留足一整天',
					tejia: "APP立减400",
					jiage: '5100'
				},
				{
					id: 8,
					qimg: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
					type: 1,
					date: 5,
					title: '【错峰优惠】摩洛哥5天4晚豪车私家团 蓝城舍夫沙万+撒哈拉沙漠独立卫浴沙漠帐篷营地观星+世遗非斯+柏柏篝火晚餐+骑骆驼看日落',
					tejia: "APP立减400",
					jiage: '5100'
				},


			],
			message: '查询成功'
		}
	})
const buildyoujic = Mock.mock(
	'/api/buildyoujic', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					youjiccontent: [{
							id: 1,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "啤酒女",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 2,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
							pinglun: "45",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg",
							youjiname: "少侠",
							youjidsc: "神奇印度，佛国圣境，穿越千年，探寻玄奘足迹。"
						},
						{
							id: 3,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
							pinglun: "615",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg",
							youjiname: "Apple",
							youjidsc: "Aloha！去太平洋吹吹风 感受你的炙热"
						},
						{
							id: 4,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879505389843750.jpg',
							pinglun: "745",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "圣杯TI",
							youjidsc: " 太平山顶观赏无敌景观，金紫荆广场，精华景点一次玩遍"
						},
						{
							id: 5,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879507549375000.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "AIRI",
							youjidsc: "第五回:2018西安出发【5400块】兰卡威槟城吉隆坡 马六甲狮城新加坡【12天】的【马来西亚/新加坡】海上丝路之行"
						},
						{
							id: 6,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211121003153390.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "WSEDR",
							youjidsc: " 深圳南澳西冲CS野战基地|南澳西冲CS野战户外拓展一日游方案_深圳拓展训练"
						},
						{
							id: 7,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211114341157369.jpg',
							pinglun: "657",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131599439452597216.jpg",
							youjiname: "WSDERF",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 8,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "654",
							youjixiang: "http://dg.ptotour.com/files/line2017/d131450824448719020.jpg",
							youjiname: "ESD女",
							youjidsc: "哥斯达黎加没有故事（附两万字游玩和交通攻略）"
						},
					]
				},
				{
					youjiccontent: [{
							id: 1,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "啤酒女",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 2,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
							pinglun: "45",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg",
							youjiname: "少侠",
							youjidsc: "神奇印度，佛国圣境，穿越千年，探寻玄奘足迹。"
						},
						{
							id: 3,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
							pinglun: "615",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg",
							youjiname: "Apple",
							youjidsc: "Aloha！去太平洋吹吹风 感受你的炙热"
						},
						{
							id: 4,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879505389843750.jpg',
							pinglun: "745",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "圣杯TI",
							youjidsc: " 太平山顶观赏无敌景观，金紫荆广场，精华景点一次玩遍"
						},
						{
							id: 5,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879507549375000.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "AIRI",
							youjidsc: "第五回:2018西安出发【5400块】兰卡威槟城吉隆坡 马六甲狮城新加坡【12天】的【马来西亚/新加坡】海上丝路之行"
						},
						{
							id: 6,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211121003153390.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "WSEDR",
							youjidsc: " 深圳南澳西冲CS野战基地|南澳西冲CS野战户外拓展一日游方案_深圳拓展训练"
						},
						{
							id: 7,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211114341157369.jpg',
							pinglun: "657",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131599439452597216.jpg",
							youjiname: "WSDERF",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 8,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "654",
							youjixiang: "http://dg.ptotour.com/files/line2017/d131450824448719020.jpg",
							youjiname: "ESD女",
							youjidsc: "哥斯达黎加没有故事（附两万字游玩和交通攻略）"
						},
					]
				},
				{
					youjiccontent: [{
							id: 1,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "啤酒女",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 2,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
							pinglun: "45",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg",
							youjiname: "少侠",
							youjidsc: "神奇印度，佛国圣境，穿越千年，探寻玄奘足迹。"
						},
						{
							id: 3,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
							pinglun: "615",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg",
							youjiname: "Apple",
							youjidsc: "Aloha！去太平洋吹吹风 感受你的炙热"
						},
						{
							id: 4,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879505389843750.jpg',
							pinglun: "745",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "圣杯TI",
							youjidsc: " 太平山顶观赏无敌景观，金紫荆广场，精华景点一次玩遍"
						},
						{
							id: 5,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879507549375000.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "AIRI",
							youjidsc: "第五回:2018西安出发【5400块】兰卡威槟城吉隆坡 马六甲狮城新加坡【12天】的【马来西亚/新加坡】海上丝路之行"
						},
						{
							id: 6,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211121003153390.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "WSEDR",
							youjidsc: " 深圳南澳西冲CS野战基地|南澳西冲CS野战户外拓展一日游方案_深圳拓展训练"
						},
						{
							id: 7,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211114341157369.jpg',
							pinglun: "657",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131599439452597216.jpg",
							youjiname: "WSDERF",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 8,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "654",
							youjixiang: "http://dg.ptotour.com/files/line2017/d131450824448719020.jpg",
							youjiname: "ESD女",
							youjidsc: "哥斯达黎加没有故事（附两万字游玩和交通攻略）"
						},
					]
				},
				{
					youjiccontent: [{
							id: 1,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "啤酒女",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 2,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
							pinglun: "45",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg",
							youjiname: "少侠",
							youjidsc: "神奇印度，佛国圣境，穿越千年，探寻玄奘足迹。"
						},
						{
							id: 3,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
							pinglun: "615",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg",
							youjiname: "Apple",
							youjidsc: "Aloha！去太平洋吹吹风 感受你的炙热"
						},
						{
							id: 4,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879505389843750.jpg',
							pinglun: "745",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "圣杯TI",
							youjidsc: " 太平山顶观赏无敌景观，金紫荆广场，精华景点一次玩遍"
						},
						{
							id: 5,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879507549375000.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "AIRI",
							youjidsc: "第五回:2018西安出发【5400块】兰卡威槟城吉隆坡 马六甲狮城新加坡【12天】的【马来西亚/新加坡】海上丝路之行"
						},
						{
							id: 6,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211121003153390.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "WSEDR",
							youjidsc: " 深圳南澳西冲CS野战基地|南澳西冲CS野战户外拓展一日游方案_深圳拓展训练"
						},
						{
							id: 7,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211114341157369.jpg',
							pinglun: "657",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131599439452597216.jpg",
							youjiname: "WSDERF",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 8,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "654",
							youjixiang: "http://dg.ptotour.com/files/line2017/d131450824448719020.jpg",
							youjiname: "ESD女",
							youjidsc: "哥斯达黎加没有故事（附两万字游玩和交通攻略）"
						},
					]
				},
				{
					youjiccontent: [{
							id: 1,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "啤酒女",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 2,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950223595468750.jpg',
							pinglun: "45",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg",
							youjiname: "少侠",
							youjidsc: "神奇印度，佛国圣境，穿越千年，探寻玄奘足迹。"
						},
						{
							id: 3,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131841525595625000.jpg',
							pinglun: "615",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg",
							youjiname: "Apple",
							youjidsc: "Aloha！去太平洋吹吹风 感受你的炙热"
						},
						{
							id: 4,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879505389843750.jpg',
							pinglun: "745",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "圣杯TI",
							youjidsc: " 太平山顶观赏无敌景观，金紫荆广场，精华景点一次玩遍"
						},
						{
							id: 5,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131879507549375000.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "AIRI",
							youjidsc: "第五回:2018西安出发【5400块】兰卡威槟城吉隆坡 马六甲狮城新加坡【12天】的【马来西亚/新加坡】海上丝路之行"
						},
						{
							id: 6,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211121003153390.jpg',
							pinglun: "65",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131950226100156250.jpg",
							youjiname: "WSEDR",
							youjidsc: " 深圳南澳西冲CS野战基地|南澳西冲CS野战户外拓展一日游方案_深圳拓展训练"
						},
						{
							id: 7,
							youjipic: 'http://dg.ptotour.com/files/2014-12/d20141211114341157369.jpg',
							pinglun: "657",
							youjixiang: "http://dg.ptotour.com/files/line2018/d131599439452597216.jpg",
							youjiname: "WSDERF",
							youjidsc: "他与他相恋，在苏格兰城堡触及灵魂的一场王子们婚礼（爱丁堡，权利的游戏北爱尔兰，再逛伦敦）"
						},
						{
							id: 8,
							youjipic: 'http://dg.ptotour.com/files/line2018/d131950226100156250.jpg',
							pinglun: "654",
							youjixiang: "http://dg.ptotour.com/files/line2017/d131450824448719020.jpg",
							youjiname: "ESD女",
							youjidsc: "哥斯达黎加没有故事（附两万字游玩和交通攻略）"
						},
					]
				}

			],
			message: '查询成功'
		}
	})
const buildtrys = Mock.mock(
	'/api/buildtrys', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				tryA: [{
					tryimg: "http://dg.ptotour.com/files/line2017/d131450823099335384.jpg",
					id: 1,
					mianfei: "20",
					title: "穿越时空的旅行者 猫王旅行体验官招募",
					jiage: "1952",
					tryE: [{
							canyu: "http://dg.ptotour.com/files/line2018/d131950223595468750.jpg"
						},
						{
							canyu: "http://dg.ptotour.com/files/line2018/d131841525595625000.jpg"
						},
						{
							canyu: "http://dg.ptotour.com/files/line2018/d131950227950000000.jpg"
						},
						{
							canyu: "http://dg.ptotour.com/files/line2018/d131950227332968750.jpg"
						}
					]
				}],
				tryB: [{
					cehuaimg: "https://cc.ddcdn.com/ddimg/home_2015/tourism_blog.png"
				}],
				tryC: [{
						cimg: "http://dg.ptotour.com/files/line2018/d131879505389843750.jpg",
						erweima: "https://pic.qyer.com/zt/a310/d3aa/6fc8/8ea0/429c/ff10/9dce/75b5",
						cehuaname: "地球不蹦"
					},
					{
						cimg: "http://dg.ptotour.com/files/line2018/d131879507549375000.jpg",
						erweima: "https://pic.qyer.com/zt/a310/d3aa/6fc8/8ea0/429c/ff10/9dce/75b5",
						cehuaname: "嘎嘣脆"
					},
					{
						cimg: "http://dg.ptotour.com/files/line2018/d131879506463125000.jpg",
						erweima: "https://pic.qyer.com/zt/a310/d3aa/6fc8/8ea0/429c/ff10/9dce/75b5",
						cehuaname: "火烧的寂寞"
					},
					{
						cimg: "http://dg.ptotour.com/files/line2018/d131690382063593750.jpg",
						erweima: "https://pic.qyer.com/zt/a310/d3aa/6fc8/8ea0/429c/ff10/9dce/75b5",
						cehuaname: "仰望自己"
					}
				]

			}],
			message: '查询成功'
		}
	})
const buildsearchhotCity = Mock.mock(
	'/api/buildsearchhotCity', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					didian: "美国",
					searchhotCitys: [{
							guojia: "美国莫西比河",
							jname: "use",
							id: 1,
							qlink: "/qianzheng",
							clink: "/city",
							jlink: "/jingdian",
							tlink: "/canting",
							ylink: "/youji",
							glink: "/jihua",
						},
						{
							guojia: "美国冰川国家公园",
							jname: "Glacier national park USA",
							id: 2,
							qlink: "/qianzheng",
							clink: "/city",
							jlink: "/jingdian",
							tlink: "/canting",
							ylink: "/youji",
							glink: "/jihua",
						},
						{
							guojia: "美国千岛湖",
							jname: "Thousand Islands",
							id: 3,
							qlink: "/qianzheng",
							clink: "/city",
							jlink: "/jingdian",
							tlink: "/canting",
							ylink: "/youji",
							glink: "/jihua",
						},
						{
							guojia: "红杉国家公园",
							jname: "Sequoia national park",
							id: 4,
							qlink: "/qianzheng",
							clink: "/city",
							jlink: "/jingdian",
							tlink: "/canting",
							ylink: "/youji",
							glink: "/jihua",
						}
					]
				}

			],
			message: '查询成功'
		}
	})
const buildsearchhotCitys = Mock.mock(
	'/api/buildsearchhotCitys', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					didian: '埃及',
					id: 1,
					searchhotCity: [{


							guojia: "美国莫西比河",
							jname: "use",
							id: 1,
							didian: "迪拜"

						},
						{
							guojia: "美国冰川国家公园",
							jname: "Glacier national park USA",
							id: 2,
							didian: "中国"

						},
						{
							guojia: "美国千岛湖",
							jname: "Thousand Islands",
							id: 3,
							didian: "上海"

						},
						{
							guojia: "红杉国家公园",
							jname: "Sequoia national park",
							id: 4,
							didian: "悉尼"

						}
					]
				}




			],
			message: '查询成功'
		}
	})
const builddescity = Mock.mock(
	'/api/builddescity', 'get', (req, res) => {
		return {
			code: 200,
			data: [{ // 第一个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京a",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				}, // 第一个tab
				{ // 第二个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京b",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				}, // 第一个tab
				{ // 第三个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京c",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				},
				// 第四个tab
				{ // 第二个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京d",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				}, // 第一个tab
				{ // 第五个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京e",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				}, // 第一个tab
				{ // 第六个tab
					descitys: [{
						descityss: [{
							descitysss: [{
									citytitle: "全球TOP 10 城市",
									descitycontent: [{
											cityname: "东京f",
											id: 1,
										},
										{
											cityname: "广州",
											id: 2,
										},
										{
											cityname: "佛山",
											id: 3,
										},
										{
											cityname: "深圳",
											id: 4,
										},
										{
											cityname: "纽约",
											id: 5,
										},
										{
											cityname: "伦敦",
											id: 6,
										},
										{
											cityname: "澳门",
											id: 7,
										},
										{
											cityname: "香港",
											id: 8,
										},
										{
											cityname: "洛杉矶",
											id: 9,
										},
										{
											cityname: "巴黎",
											id: 10,
										}
									]
								},
								{
									citytitle: "免签及落地签最热旅行地",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "印度尼西亚",
											id: 2,
										},
										{
											cityname: "泰国",
											id: 3,
										},
										{
											cityname: "塞班岛",
											id: 4,
										},
										{
											cityname: "摩洛哥",
											id: 5,
										},
										{
											cityname: "柬埔寨",
											id: 6,
										},
										{
											cityname: "法国",
											id: 7,
										},
										{
											cityname: "厄尔多瓜",
											id: 8,
										},
									]
								},
								{
									citytitle: "热门海岛",
									descitycontent: [{
											cityname: "济州岛",
											id: 1,
										},
										{
											cityname: "塞班岛",
											id: 2,
										},
										{
											cityname: "马尔代夫",
											id: 3,
										},
										{
											cityname: "沙巴",
											id: 4,
										},
										{
											cityname: "普吉岛",
											id: 5,
										},
										{
											cityname: "巴厘岛",
											id: 6,
										},
										{
											cityname: "苗庄",
											id: 7,
										},
										{
											cityname: "帕劳",
											id: 8,
										},
										{
											cityname: "冲绳",
											id: 8,
										},
									]
								}
							] //descitysss		
						}] //descityss
					}] //descitys

				} // 第一个tab
			],
			message: '查询成功'
		}
	})
const builddesczhu = Mock.mock(
	'/api/builddesczhu', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					id: 1,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '洛克菲勒观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				},
				{
					id: 2,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '洛克观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				},
				{
					id: 3,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '菲勒观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				},
				{
					id: 4,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '罗马观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				},
				{
					id: 5,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '伦敦观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				},
				{
					id: 6,
					zhubg: "https://cc.ddcdn.com/ddimg/home_2015/city_guide.png",
					title: '新德观景台',
					dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿',
					desmall: [{
							id: 1,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/30/02/phuket.jpg",
							title: '普吉岛地下河',
							dsc: '这里是欣赏曼哈顿天际线的绝佳位置，观景台一共有三层，不仅可以将帝国大厦、新世贸中心大楼等摩天大楼尽收眼底，向北可鸟瞰中央公园，甚至可以看到自由女神像的绰约风姿'
						},
						{
							id: 2,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '普吉岛地下河',
							dsc: '丝绸之路途中的千年驿站，沙漠中的古城。'
						},
						{
							id: 3,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/c0/chiang-mai.jpg",
							title: '普吉岛地下河',
							dsc: '神秘的印加帝国遗迹'
						},
						{
							id: 4,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2d/ad/bangkok.jpg",
							title: '泰国清迈寺庙',
							dsc: '追寻郑和的足迹。'
						},
						{
							id: 5,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-s/03/9b/2e/18/tokyo.jpg",
							title: '东京夜景',
							dsc: '存完好的中世纪风貌，保存完好的德国浪漫之路。'
						},
						{
							id: 6,
							zhubgz: "https://ccm.ddcdn.com/ext/photo-b/1280x250/03/9b/2d/dc/kyoto.jpg",
							title: '日本京都古屋',
							dsc: '新罗时代的金城'
						}
					]
				}
			],
			message: '查询成功'
		}
	})
const builddesczhuy = Mock.mock(
	'/api/builddesczhuy', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '巴塞罗那',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '新德西州',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '俄罗斯',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '伦敦',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '大本钟',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '上海',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '巴黎',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '芬兰',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '洛杉矶',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '华盛顿',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '北京',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '摩洛哥',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},

						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},
				{
					desczhucontent: [{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/photography/barcelona-large.png',
							title: '澳门',
							dsc: '新罗时代的金城',
							id: 1
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/delicacy/macau-large.png',
							title: '澳门美食',
							dsc: '澳门美食',
							id: 2
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/shopping/hong-kong-large.png',
							title: '香港购物',
							dsc: '香港购物',
							id: 3
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/museum/new-york-large.png',
							title: '纽约博物馆',
							dsc: '纽约博物馆',
							id: 4
						},
						{
							zhubgy: 'https://ccm.ddcdn.com/cms/img/tourism/theme_travel/explore/langkawi-district-large.png',
							title: '新西兰探险',
							dsc: '新西兰探险',
							id: 5
						},
					]
				},


			],
			message: '查询成功'
		}
	})

const builddesguojia = Mock.mock(
	'/api/builddesguojia', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					desguojiacontent: [{
							id: 1,
							guojia: "阿富汗",
							jname: 'United Arab Emirates',
							type: 1
						},
						{
							id: 2,
							guojia: "阿联酋",
							jname: 'United Arab Emirates ',
						},
						{
							id: 3,
							guojia: "阿曼",
							jname: 'Oman',
							type: 1
						},
						{
							id: 4,
							guojia: "巴基斯坦",
							jname: 'Pakistan',

						},
						{
							id: 5,
							guojia: "巴林",
							jname: 'Bahrain',

						},
						{
							id: 6,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 7,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 7,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 8,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 9,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 10,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 11,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 12,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "阿尔巴尼亚",
							jname: 'Albania',
							type: 1
						},
						{
							id: 12,
							guojia: "爱尔兰",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "爱沙尼亚",
							jname: 'Oman',
							type: 1
						},
						{
							id: 14,
							guojia: "阿塞拜疆",
							jname: 'Pakistan',

						},
						{
							id: 15,
							guojia: "巴林",
							jname: 'Bahrain',

						},
						{
							id: 16,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 17,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 17,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 18,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 19,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 20,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 21,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 22,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "埃及",
							jname: 'Albania',
							type: 1
						},
						{
							id: 12,
							guojia: "安哥拉",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "埃塞尔比亚",
							jname: 'Oman',
							type: 1
						},
						{
							id: 14,
							guojia: "肯尼亚",
							jname: 'Pakistan',

						},
						{
							id: 15,
							guojia: "巴林",
							jname: 'Bahrain',

						},
						{
							id: 16,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 17,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 17,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 18,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 19,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 20,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 21,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 22,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "美国",
							jname: "use",
							type: 1
						},
						{
							id: 12,
							guojia: "加拿大",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "墨西哥",
							jname: 'Oman',
							type: 1
						},
						{
							id: 14,
							guojia: "阿塞拜疆",
							jname: 'Pakistan',

						},
						{
							id: 15,
							guojia: "巴林",
							jname: 'Bahrain',

						},
						{
							id: 16,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 17,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 17,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 18,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 19,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 20,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 21,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 22,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "阿根廷",
							jname: 'Albania',
							type: 1
						},
						{
							id: 12,
							guojia: "巴拉圭",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "巴西",
							jname: 'Oman',
							type: 1
						},
						{
							id: 14,
							guojia: "秘鲁",
							jname: 'Pakistan',

						},
						{
							id: 15,
							guojia: "玻利维亚",
							jname: 'Bahrain',

						},
						{
							id: 16,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 17,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 17,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 18,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 19,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 20,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 21,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 22,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "澳大利亚",
							jname: 'Albania',
							type: 1
						},
						{
							id: 12,
							guojia: "斐济",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "关岛",
							jname: 'Oman',
							type: 1
						},
						{
							id: 14,
							guojia: "汤加",
							jname: 'Pakistan',

						},
						{
							id: 15,
							guojia: "巴林",
							jname: 'Bahrain',

						},
						{
							id: 16,
							guojia: "不丹",
							jname: 'Bhutan',

						},
						{
							id: 17,
							guojia: "朝鲜",
							jname: 'North Korea',

						},
						{
							id: 17,
							guojia: "东帝汶",
							jname: ' East Timor',

						},
						{
							id: 18,
							guojia: "菲律宾",
							jname: 'Philippines',

						},
						{
							id: 19,
							guojia: "韩国",
							jname: 'South Korea ',

						},
						{
							id: 20,
							guojia: "哈萨克斯坦",
							jname: 'Kazakhstan',

						},
						{
							id: 21,
							guojia: "柬埔寨",
							jname: 'Cambodia',

						},
						{
							id: 22,
							guojia: "吉尔吉斯斯坦",
							jname: 'Kazakhstan',

						},
					]

				},
				{
					desguojiacontent: [{
							id: 13,
							guojia: "布韦岛",
							jname: 'Albania',
							type: 1
						},
						{
							id: 12,
							guojia: "太空",
							jname: 'Ireland ',
						},
						{
							id: 13,
							guojia: "南极",
							jname: 'Oman',
							type: 1
						},

					]

				}


			],
			message: '查询成功'
		}
	})
const builddetailswiper = Mock.mock(
	'/api/builddetailswiper', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					picnumber: 15268,
					detailswipers: [{
							detailtweenimg: img1,

						},
						{
							detailtweenimg: img2,

						},
						{
							detailtweenimg: img3,

						}
					]
				}

			],
			message: '查询成功'
		}
	})
const builddetailswipercontent = Mock.mock(
	'/api/builddetailswipercontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

					detailswipercontents: [{
							avater: "https://ac-r.static.booking.cn/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
							name: "tween",
							youyong: 35,
							desc: "Edgar Suites Expo Paris Porte de Versailles公寓位于巴黎（Paris），距离巴黎世博会 - 凡尔赛门（Paris Expo - Porte de Versailles）有不到1公里，提供免费WiFi。 所有空调公寓均配有带微波炉、烤面包机和用餐区的厨房、冰箱以及咖啡机。 Edgar Suites Expo Paris Porte de..."

						},
						{
							avater: "https://ac-r.static.booking.cn/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
							name: "tinas",
							youyong: 45,
							desc: "Riad El Walida旅馆位于马拉喀什（Marrakech），设有免费Wi-Fi和餐厅，距离巴迪宫（El Badi Palace）有100米，距离穆莱萨尔瓦多耶齐德清真寺（Moulay El Yazid Mosque）和巴伊亚宫（Bahia Palace）有400米。..."

						},
					]
				},
				{

					detailswipercontents: [{
							avater: "https://ac-r.static.booking.cn/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
							name: "tween",
							youyong: 35,
							desc: "Edgar Suites Expo Paris Porte de Versailles公寓位于巴黎（Paris），距离巴黎世博会 - 凡尔赛门（Paris Expo - Porte de Versailles）有不到1公里，提供免费WiFi。 所有空调公寓均配有带微波炉、烤面包机和用餐区的厨房、冰箱以及咖啡机。 Edgar Suites Expo Paris Porte de..."

						},
						{
							avater: "https://ac-r.static.booking.cn/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
							name: "tinas",
							youyong: 45,
							desc: "Riad El Walida旅馆位于马拉喀什（Marrakech），设有免费Wi-Fi和餐厅，距离巴迪宫（El Badi Palace）有100米，距离穆莱萨尔瓦多耶齐德清真寺（Moulay El Yazid Mosque）和巴伊亚宫（Bahia Palace）有400米。..."

						},
					]
				}
			],
			message: '查询成功'
		}
	})
const builddesbase = Mock.mock(
	'/api/builddesbase', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotdi: "景点"
				},
				{
					hotdi: "美食"
				},
				{
					hotdi: "购物"
				},
				{
					hotdi: "活动"
				}
			],
			message: '查询成功'
		}
	})
const builddestinationcontent = Mock.mock(
	'/api/builddestinationcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					destinationcontents: [{
							id: 1,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇a",
							desvalue: "3"
						},
						{
							id: 2,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4"
						},
						{
							id: 3,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2"
						},
						{
							id: 4,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.5"
						},
						{
							id: 5,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.9"
						},
						{
							id: 6,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "3.5"
						},
						{
							id: 7,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4.2"
						},
						{
							id: 8,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "5"
						},
					]
				},
				{
					destinationcontents: [{
							id: 1,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇b",
							desvalue: "3"
						},
						{
							id: 2,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4"
						},
						{
							id: 3,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2"
						},
						{
							id: 4,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.5"
						},
						{
							id: 5,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.9"
						},
						{
							id: 6,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "3.5"
						},
						{
							id: 7,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4.2"
						},
						{
							id: 8,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "5"
						},
					]
				},
				{
					destinationcontents: [{
							id: 1,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇c",
							desvalue: "3"
						},
						{
							id: 2,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4"
						},
						{
							id: 3,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2"
						},
						{
							id: 4,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.5"
						},
						{
							id: 5,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.9"
						},
						{
							id: 6,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "3.5"
						},
						{
							id: 7,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4.2"
						},
						{
							id: 8,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "5"
						},
					]
				},
				{
					destinationcontents: [{
							id: 1,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇d",
							desvalue: "3"
						},
						{
							id: 2,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4"
						},
						{
							id: 3,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2"
						},
						{
							id: 4,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.5"
						},
						{
							id: 5,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "2.9"
						},
						{
							id: 6,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "3.5"
						},
						{
							id: 7,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "4.2"
						},
						{
							id: 8,
							desimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-12/f34c2a69-1936-4b33-8a7c-2655f1a34072_300_200.jpg',
							destitle: "【特卖】无锡荡口古镇",
							desvalue: "5"
						},
					]
				},


			],
			message: '查询成功'
		}
	})
const buildwriteyouji = Mock.mock(
	'/api/buildwriteyouji', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					id: 1,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},
				{
					id: 2,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},
				{
					id: 3,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},
				{
					id: 4,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},
				{
					id: 5,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},
				{
					id: 6,
					writeyoujiimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					title: "寻迹匠心，邂逅霓虹国",
					zuozhe: "TEWSD",
					userinfo: '//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg',
					liulan: "15233"
				},


			],
			message: '查询成功'
		}
	})
const buildxingcheng = Mock.mock(
	'/api/buildxingcheng', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					xcimg: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					day: '20',
					nyr: "2019-6-5",
					xctitle: "riverbed的日本东京箱根京都奈良行程",
					xcbiaoqiao: [{
							biaoqiao: "购物"
						},
						{
							biaoqiao: "美食"
						},
						{
							biaoqiao: "时尚"
						}
					],
					xccity: [{
							xccityname: "上海"
						},
						{
							xccityname: "北京"
						},
						{
							xccityname: "富士河口"
						},
						{
							xccityname: "名古屋"
						},
						{
							xccityname: "纽约"
						},
						{
							xccityname: "华盛顿"
						},
						{
							xccityname: "广州"
						},
						{
							xccityname: "伦敦"
						},
						{
							xccityname: "奥尔良"
						},
						{
							xccityname: "新加坡"
						}
					],
					userinfo: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					xcname: "拖儿带女",
					xcliulna: "12538",
					pinglun: "72"
				},
				{
					xcimg: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					day: '20',
					nyr: "2019-6-5",
					xctitle: "riverbed的日本东京箱根京都奈良行程",
					xcbiaoqiao: [{
							biaoqiao: "购物"
						},
						{
							biaoqiao: "美食"
						},
						{
							biaoqiao: "时尚"
						}
					],
					xccity: [{
							xccityname: "上海"
						},
						{
							xccityname: "北京"
						},
						{
							xccityname: "富士河口"
						},
						{
							xccityname: "名古屋"
						},
						{
							xccityname: "纽约"
						},
						{
							xccityname: "华盛顿"
						},
						{
							xccityname: "广州"
						},
						{
							xccityname: "伦敦"
						},
						{
							xccityname: "奥尔良"
						},
						{
							xccityname: "新加坡"
						}
					],
					userinfo: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					xcname: "拖儿带女",
					xcliulna: "12538",
					pinglun: "72"
				},
				{
					xcimg: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					day: '20',
					nyr: "2019-6-5",
					xctitle: "riverbed的日本东京箱根京都奈良行程",
					xcbiaoqiao: [{
							biaoqiao: "购物"
						},
						{
							biaoqiao: "美食"
						},
						{
							biaoqiao: "时尚"
						}
					],
					xccity: [{
							xccityname: "上海"
						},
						{
							xccityname: "北京"
						},
						{
							xccityname: "富士河口"
						},
						{
							xccityname: "名古屋"
						},
						{
							xccityname: "纽约"
						},
						{
							xccityname: "华盛顿"
						},
						{
							xccityname: "广州"
						},
						{
							xccityname: "伦敦"
						},
						{
							xccityname: "奥尔良"
						},
						{
							xccityname: "新加坡"
						}
					],
					userinfo: "//pics.lvjs.com.cn//uploads/pc/place2/2014-10-17/1413537591527_300_200.jpg",
					xcname: "拖儿带女",
					xcliulna: "12538",
					pinglun: "72"
				},

			],
			message: '查询成功'
		}
	})

const buildqshops = Mock.mock(
	'/api/buildqshops', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					id: 1,
					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 2,
					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 3,
					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 4,
					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 5,
					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 6,

					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				},
				{
					id: 7,

					qimgs: "//pics.lvjs.com.cn//uploads/pc/place2/2016-09-03/6e54c162-89d5-4df8-a827-7e24a2103090_300_200.jpg",
					qtitel: "【趣玩三亚】三亚亚龙湾喜来登双飞6日5晚自由行(儿童俱乐部每天不同主题活动，睡甜梦之床、私家园林、一线海景＋醉美沙滩＋赠送三亚酒店免费跟拍服务一次)",
					qjiage: "1980"
				}
			],
			message: '查询成功'
		}
	})
const buildcityq = Mock.mock(
	'/api/buildcityq', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					id: 1,
					klimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-02/81aa2dee-4372-4743-acd9-a2d5a397e5d0_300_200.jpg",
					kltitle: "泰国曼谷-芭堤雅6日5晚跟团游",
					delprice: "2500",
					lasterprice: "988",
					type: 1
				},
				{
					id: 2,
					klimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-02/81aa2dee-4372-4743-acd9-a2d5a397e5d0_300_200.jpg",
					kltitle: "泰国曼谷-芭堤雅6日5晚跟团游",
					delprice: "2500",
					lasterprice: "988",

				},
				{
					id: 3,
					klimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-02/81aa2dee-4372-4743-acd9-a2d5a397e5d0_300_200.jpg",
					kltitle: "泰国曼谷-芭堤雅6日5晚跟团游",
					delprice: "2500",
					lasterprice: "988",
					type: 1
				},
				{
					id: 4,
					klimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-02/81aa2dee-4372-4743-acd9-a2d5a397e5d0_300_200.jpg",
					kltitle: "泰国曼谷-芭堤雅6日5晚跟团游",
					delprice: "2500",
					lasterprice: "988",

				}
			],
			message: '查询成功'
		}
	})
const buildStrategy = Mock.mock(
	'/api/buildStrategy', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				id: 1,
				stjiage: "685",
				stxingji: 3.6,
				stpingfen: 9.5,
				Strategybanner: [{
						Strategybannercontent: [{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/13/da/bd/kamala.jpg",
								stxingji: "4.5",
								stdianname: "上苑爱酒店",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/44/52/grand-palace-3.jpg",
								stxingji: "4.5",
								stdianname: "爱饭国际",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/01/c4/29/bb/royal-flora-ratchphruek.jpg",
								stxingji: "4.5",
								stdianname: "徐媛佳丽",
								stjuli: "1.2",
								stdianjiage: "445"
							}
						]
					},
					{
						Strategybannercontent: [{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/13/da/bd/kamala.jpg",
								stxingji: "4.5",
								stdianname: "上苑爱酒店",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/44/52/grand-palace-3.jpg",
								stxingji: "4.5",
								stdianname: "爱饭国际",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/01/c4/29/bb/royal-flora-ratchphruek.jpg",
								stxingji: "4.5",
								stdianname: "徐媛佳丽",
								stjuli: "1.2",
								stdianjiage: "445"
							}
						]
					},
					{
						Strategybannercontent: [{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/13/da/bd/kamala.jpg",
								stxingji: "4.5",
								stdianname: "上苑爱酒店",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/44/52/grand-palace-3.jpg",
								stxingji: "4.5",
								stdianname: "爱饭国际",
								stjuli: "1.2",
								stdianjiage: "445"
							},
							{
								id: 1,
								stimg: "https://ccm.ddcdn.com/ext/photo-s/01/c4/29/bb/royal-flora-ratchphruek.jpg",
								stxingji: "4.5",
								stdianname: "徐媛佳丽",
								stjuli: "1.2",
								stdianjiage: "445"
							}
						]
					}
				],
				stqbaifenzhi_1: '50%',
				stqdianname_1: "福岛爱黎/国际岛/千道苑",
				stqdsc: " 潜水、浮潜、帆板和帆船等运动项目任您选择。 您还可以前往内陆地区探索树木丛生的小山、巍峨的高山和陡峭的悬崖。",
				stqbaifenzhi_2: '20%',
				stqdianname_2: "慧丽家园",
				stqbaifenzhi_3: '25%',
				stqdianname_3: "广岛丽",
				stjiudianname: "东京"

			}],
			message: '查询成功'
		}
	})
const buildaibase = Mock.mock(
	'/api/buildaibase', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

					aitese: "独立套房"
				},
				{

					aitese: "独立房间"
				},
				{

					aitese: "合租房间"
				},
				{

					aitese: "别墅"
				}
			],
			message: '查询成功'
		}
	})
const buildaizcontent = Mock.mock(
	'/api/buildaizcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					aizcontents: [{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"
						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						}
					]
				},
				{
					aizcontents: [{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "4张床，可容纳5人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						}
					]
				},
				{
					aizcontents: [{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "7张床，可容纳5人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						}
					]
				},
				{
					aizcontents: [{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "1张床，可容纳2人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						},
						{
							aiimg: "https://ccm.ddcdn.com/ext/photo-s/00/1a/00/7e/ume-plum-flowers-at-kitano.jpg",
							aipingfen: "5",
							aipinglun: "1526",
							aidsc: "2张床，可容纳3人",
							jiage: "586",
							aizuozhe: "rised",
							aiavter: "https://ccm.ddcdn.com/ext/photo-s/04/9e/4b/99/caption.jpg"

						}
					]
				}

			],
			message: '查询成功'
		}
	})
const buildquestionanswer = Mock.mock(
	'/api/buildquestionanswer', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				id: 1,
				question: [{
						question: "急求大神：日本9天，大阪进，东京出，需要购买JR pass全国7日券么？",
						answer: "行程很奇怪。为何不是关西玩好去鸟取，然后从鸟取飞东京？"
					},
					{
						question: "日本东京大阪京都十日游，咨询交通问题",
						answer: "就我个人来说，我选东京新干线到京都，JR东海官网买新干线早特21票11000；大阪伊丹空港飞成田直接转走，两航外国人票7560。"
					}
				],
				answer: [{
						animg: "https://ccm.ddcdn.com/ext/photo-s/00/17/b8/4f/po-ngar-tower-2.jpg",
						antitle: "三和大神到此一游，大家欢迎",
						anzuozhe: "apple",
						antime: "2小时前",
						anliulan: "2563",
						anhuifu: "253",
						anchufa: "2019-6-2",
						anfanhui: "2019-6-10"
					},
					{
						animg: "https://ccm.ddcdn.com/ext/photo-s/00/17/b8/4f/po-ngar-tower-2.jpg",
						antitle: "三和大神到此一游，大家欢迎",
						anzuozhe: "apple",
						antime: "2小时前",
						anliulan: "2563",
						anhuifu: "253",
						anchufa: "2019-6-2",
						anfanhui: "2019-6-10"
					}
				]
			}],
			message: '查询成功'
		}
	})
const buildyoujilist = Mock.mock(
	'/api/buildyoujilist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				id: 1,
				yjimg: "https://ccm.ddcdn.com/ext/photo-s/00/12/e8/b0/tokyo.jpg",
				yjtitle: "歌舞伎町的霓虹闪烁，你能在东京这座国际化的都市里找到停留的理由",
				yjdsc: "【网红图预览】按照这个时间，我本应该是在日本赏樱花的。无奈年初的时候意外伤了右腿，不得不取消了今年日本樱花季的行程。闲下来还是决定好好的整理的一下去年十月中旬去日本的游记。我想大概也能帮助到一部分人。想想也是好巧，本来今年定的去日本的行程已经是自己第三次去日本了，前两次都没有看到",
				yjavter: "https://ccm.ddcdn.com/ext/photo-s/00/12/e8/b0/tokyo.jpg",
				yjzuozhe: "lovers",
				yjliulan: "125363",
				yjdianzan: "东京"

			}],
			message: '查询成功'
		}
	})
const buildmianbaoxie = Mock.mock(
	'/api/buildmianbaoxie', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				mudicon: "日本",
				mudicity: "东京",
				mianbaoplace: [{
						place: '中国',
						id: 1
					},
					{
						place: '日本',
						id: 2
					}
				],
				mianbaocity: [{
						city: "广州",
						id: 1
					},
					{
						city: "东京",
						id: 2
					}
				],
				mianbaogonglv: [{
						gonglv: "东京攻略",
						id: 1
					},
					{
						gonglv: "东京购物",
						id: 2
					}
				],
				mianbaodidian: "东京"
			}],
			message: '查询成功'
		}
	})
const buildnavbars = Mock.mock(
	'/api/buildnavbars', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				city: "日本",
				englishcity: "Tokyo",
				navbarmudi: [{
						mudi: "目的速写"
					},
					{
						mudi: "当地人生"
					},
					{
						mudi: "历史"
					},
					{
						mudi: "文化"
					}
				],
				navbarchengji: [{
						chengji: "飞机"
					},
					{
						chengji: "高铁"
					},
					{
						chengji: "城轨"
					},
					{
						chengji: "汽车"
					},
					{
						chengji: "水运"
					}
				],
				navbarshinei: [{
						shinei: "地铁"
					},
					{
						shinei: "巴士"
					},
					{
						shinei: "地铁"
					},
					{
						shinei: "滴滴"
					}
				],
				navbarrili: [{
						rili: "旅行季节"
					},
					{
						rili: "当地节日"
					}
				],
				navbarxiaofei: [{
						xiaofei: "银联"
					},
					{
						xiaofei: "货币兑换"
					}
				],
				navbarxinxi: [{
						xinxi: "网络"
					},
					{
						xinxi: "电话"
					},
					{
						xinxi: "信息中心"
					}
				],
				navbargonggao: [{
						gonggao: "负责任旅行"
					},
					{
						gonggao: "安全"
					},
					{
						gonggao: "医疗"
					}
				],
				navbarluxian: [{
						luxian: "一日游"
					},
					{
						luxian: "两日游"
					},
					{
						luxian: "三日游"
					}
				],
				navbarmeishi: [{
					meishi: "景点观光",
					meishinumber: "1252"
				}],
				navbarshequ: [{
						shequ: "东京游记"
					},
					{
						shequ: "东京问答"
					}
				],
				navbartuijian: [{
						tuijian: "私人定制"
					},
					{
						tuijian: "路线推荐"
					}

				],
				navbarshop: [{
						shop: "自由行",
						shopnumber: '1526'
					},
					{
						shop: "飞机",
						shopnumber: '8526'
					}
				]

			}, ],
			message: '查询成功'
		}
	})
const buildqyou = Mock.mock(
	'/api/buildqyou', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					type: 1,
					qyoufirst: [{
							qyfengmianimg: "http://media.china-sss.com/pics/gallery/201512/eb5783bd-dd77-4f9c-ae99-169457c6a404_201512151050_500_350.jpg",
							qyfengmiantitle: "大阪"
						},
						{
							qyfengmianimg: "http://media.china-sss.com/pics/gallery/201710/1831c4aa-4875-465f-b54e-e0ca4376a675_201710271440_500_350.jpg",
							qyfengmiantitle: "名古屋"
						},
						{
							qyfengmianimg: "http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg",
							qyfengmiantitle: "济州岛"
						},
						{
							qyfengmianimg: "http://media.china-sss.com/pics/gallery/201512/eb5783bd-dd77-4f9c-ae99-169457c6a404_201512151050_500_350.jpg",
							qyfengmiantitle: "大阪"
						},
						{
							qyfengmianimg: "http://media.china-sss.com/pics/gallery/201804/86207e3a-1a26-4ee1-ad2b-b28f33da2bbc_201804030959_500_350.jpg",
							qyfengmiantitle: "东京迪士尼"
						}
					]
				},
				{

					qyoutwo: [{
						qfengmianimg: "http://media.china-sss.com/pics/gallery/201512/d05af6e2-35d0-4af8-b048-a39bd687bf03_201512281324_500_350.jpg",
						qyfengmiandidian: "东京迪士尼",
						qyfengmiandsc: "大阪城公园】（停留约60分钟）丰臣秀吉于1583年所建，是由雄伟的石墙砌造而成，大阪城公园内城中央耸立着大阪城的主体建筑天守阁，镶铜镀金，十分壮观。附近有风景秀丽的庭园和亭台楼阁，奇花异卉，满目青翠，充满诗情画意。【心斋桥、道顿堀】（停留约60分钟）大阪最大的繁华街，集中了许多精品屋和专卖店，从早到晚熙熙攘攘，到处是市民和游客的人流。心斋桥是以带有拱廊设施的心斋桥筋商店街为中心发展起来的。这里大型百货店、百年老铺、面向平民的各种小店铺鳞次栉比。道顿崛坐落着很多美食店，不仅有日本菜，还可以品尝到亚洲、美洲和欧洲等世界各个国家、各个地区不同的风味。",
						qyfengmianavter: "http://media.china-sss.com/pics/1f6d1f0b-62b0-4729-a8c2-ef4b2097cc69_201405081341_500_350.jpg",
						qyfengmianzuozhe: "LOVE"
					}]
				}
			],
			message: '查询成功'
		}
	})
const buildstrategy_breadcrumb = Mock.mock(
	'/api/buildstrategy_breadcrumb', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				breadcrumbcity: "东京",
				strategy_breadcrumbs: [{
						breadcrumbname: "目的地",
						link: "/",
						breadcrumbid: "1",

					},
					{
						breadcrumbname: "日本",
						link: "/Destination_Countrydetail",
						breadcrumbid: "2",
					},
					{
						breadcrumbname: "东京",
						link: "/Destination_Strategydetail",
						breadcrumbid: "3",
					}
				]
			}],
			message: '查询成功'
		}
	})
const buildplcTopBar = Mock.mock(
	'/api/buildplcTopBar', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				plcTopBarjianxie: "Tokyo",
				plcTopBarcity: "日本",
				plcTopBargo: "25263",
				plcTopBarpinlun: "25236",
				cityid: 1
			}],
			message: '查询成功'
		}
	})
const buildstrategy_list = Mock.mock(
	'/api/buildstrategy_list', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				navbarmudi: [{
						mudi: "目的速写"
					},
					{
						mudi: "当地人生"
					},
					{
						mudi: "历史"
					},
					{
						mudi: "文化"
					}
				],
				navbarchengji: [{
						chengji: "飞机"
					},
					{
						chengji: "高铁"
					},
					{
						chengji: "城轨"
					},
					{
						chengji: "汽车"
					},
					{
						chengji: "水运"
					}
				],
				navbarshinei: [{
						shinei: "地铁"
					},
					{
						shinei: "巴士"
					},
					{
						shinei: "地铁"
					},
					{
						shinei: "滴滴"
					}
				],
				navbarrili: [{
						rili: "旅行季节"
					},
					{
						rili: "当地节日"
					}
				],
				navbarxiaofei: [{
						xiaofei: "银联"
					},
					{
						xiaofei: "货币兑换"
					}
				],
				navbarxinxi: [{
						xinxi: "网络"
					},
					{
						xinxi: "电话"
					},
					{
						xinxi: "信息中心"
					}
				],
				navbargonggao: [{
						gonggao: "负责任旅行"
					},
					{
						gonggao: "安全"
					},
					{
						gonggao: "医疗"
					}
				],
				navbarluxian: [{
						luxian: "一日游"
					},
					{
						luxian: "两日游"
					},
					{
						luxian: "三日游"
					}
				],
				navbarmeishi: [{
					meishi: "景点观光",
					meishinumber: "1252"
				}],
				navbarshequ: [{
						shequ: "东京游记"
					},
					{
						shequ: "东京问答"
					}
				],
				navbartuijian: [{
						tuijian: "私人定制"
					},
					{
						tuijian: "路线推荐"
					}

				],
				navbarshop: [{
						shop: "自由行",
						shopnumber: '1526'
					},
					{
						shop: "飞机",
						shopnumber: '8526'
					}
				],
				listStrategy: [{
						listStrategyid: 1,
						listStrategycity: "景点",
						listnumber: 1523
					},
					{
						listStrategyid: 2,
						listStrategycity: "美食",
						listnumber: 74523

					},
					{
						listStrategyid: 3,
						listStrategycity: "购物",
						listnumber: 74423

					},
					{
						listStrategyid: 4,
						listStrategycity: "活动",
						listnumber: 523

					},
					{
						listStrategyid: 5,
						listStrategycity: "微锦囊",
						listnumber: 1223

					}
				]
			}],
			message: '查询成功'
		}
	})
const buildqyWrap = Mock.mock(
	'/api/buildqyWrap', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

				mguideid: 1,
				mguidedidian: '东京',
				mguidenumber: "5259",
				qyWraps: [{
						qyWrapc: [{
								Destination_mguidedetail: 1,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailtitle: "巴厘岛：深情一眼，挚爱万年",
								mguidedetaildsc: "远离繁华和喧嚣的美好庭院出门前旅馆老板为我们推荐了一家他们很喜欢的当地小馆，沿着旅馆所在的小街Sweta Street溜达过去大概要十分钟的时间",
								mguidedetailtags: "Warung Makan Bu Rus"
							},
							{
								Destination_mguidedetail: 2,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailtitle: "爱在上岛，臻爱纸上美好",
								mguidedetaildsc: "鱼眼公园浮潜 情人崖上呼唤爱因为关岛和中国内地时差2小时，所以早上8点起床时，人是很迷糊的。",
								mguidedetailtags: "love YOU"
							},
							{
								Destination_mguidedetail: 3,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "彩色摩洛哥，八天七座城，梦想之地，如约而至",
								mguidedetaildsc: "摩洛哥一直是我的梦想之地，他是《孤独星球》的十佳旅行目的地",
								mguidedetailtags: "FANXING YOU"
							},
							{
								Destination_mguidedetail: 4,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/13/dc/99/2c/caption.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "躲开大三巴牌坊前的人潮，穿过大家都忙于拍照的恋爱巷",
								mguidedetaildsc: "恋爱巷全长只有50米，但是巷子两边是糖果色系的葡萄牙风格建筑，粉色和亮黄色墙面和谐交错，",
								mguidedetailtags: "meiliLOVE"
							},
						]
					},
					{
						qyWrapc: [{
								Destination_mguidedetail: 1,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailtitle: "巴厘岛：深情一眼，挚爱万年",
								mguidedetaildsc: "远离繁华和喧嚣的美好庭院出门前旅馆老板为我们推荐了一家他们很喜欢的当地小馆，沿着旅馆所在的小街Sweta Street溜达过去大概要十分钟的时间",
								mguidedetailtags: "Warung Makan Bu Rus"
							},
							{
								Destination_mguidedetail: 2,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailtitle: "爱在上岛，臻爱纸上美好",
								mguidedetaildsc: "鱼眼公园浮潜 情人崖上呼唤爱因为关岛和中国内地时差2小时，所以早上8点起床时，人是很迷糊的。",
								mguidedetailtags: "love YOU"
							},
							{
								Destination_mguidedetail: 3,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "彩色摩洛哥，八天七座城，梦想之地，如约而至",
								mguidedetaildsc: "摩洛哥一直是我的梦想之地，他是《孤独星球》的十佳旅行目的地",
								mguidedetailtags: "FANXING YOU"
							},
							{
								Destination_mguidedetail: 4,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/13/dc/99/2c/caption.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "躲开大三巴牌坊前的人潮，穿过大家都忙于拍照的恋爱巷",
								mguidedetaildsc: "恋爱巷全长只有50米，但是巷子两边是糖果色系的葡萄牙风格建筑，粉色和亮黄色墙面和谐交错，",
								mguidedetailtags: "meiliLOVE"
							},
						]
					},
					{
						qyWrapc: [{
								Destination_mguidedetail: 1,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailtitle: "巴厘岛：深情一眼，挚爱万年",
								mguidedetaildsc: "远离繁华和喧嚣的美好庭院出门前旅馆老板为我们推荐了一家他们很喜欢的当地小馆，沿着旅馆所在的小街Sweta Street溜达过去大概要十分钟的时间",
								mguidedetailtags: "Warung Makan Bu Rus"
							},
							{
								Destination_mguidedetail: 2,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailtitle: "爱在上岛，臻爱纸上美好",
								mguidedetaildsc: "鱼眼公园浮潜 情人崖上呼唤爱因为关岛和中国内地时差2小时，所以早上8点起床时，人是很迷糊的。",
								mguidedetailtags: "love YOU"
							},
							{
								Destination_mguidedetail: 3,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "彩色摩洛哥，八天七座城，梦想之地，如约而至",
								mguidedetaildsc: "摩洛哥一直是我的梦想之地，他是《孤独星球》的十佳旅行目的地",
								mguidedetailtags: "FANXING YOU"
							},
							{
								Destination_mguidedetail: 4,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/13/dc/99/2c/caption.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "躲开大三巴牌坊前的人潮，穿过大家都忙于拍照的恋爱巷",
								mguidedetaildsc: "恋爱巷全长只有50米，但是巷子两边是糖果色系的葡萄牙风格建筑，粉色和亮黄色墙面和谐交错，",
								mguidedetailtags: "meiliLOVE"
							},
						]
					},
					{
						qyWrapc: [{
								Destination_mguidedetail: 1,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailtitle: "巴厘岛：深情一眼，挚爱万年",
								mguidedetaildsc: "远离繁华和喧嚣的美好庭院出门前旅馆老板为我们推荐了一家他们很喜欢的当地小馆，沿着旅馆所在的小街Sweta Street溜达过去大概要十分钟的时间",
								mguidedetailtags: "Warung Makan Bu Rus"
							},
							{
								Destination_mguidedetail: 2,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/14/aa/1f/d6/blog63252-34.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailtitle: "爱在上岛，臻爱纸上美好",
								mguidedetaildsc: "鱼眼公园浮潜 情人崖上呼唤爱因为关岛和中国内地时差2小时，所以早上8点起床时，人是很迷糊的。",
								mguidedetailtags: "love YOU"
							},
							{
								Destination_mguidedetail: 3,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/16/49/73/bb/1.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "彩色摩洛哥，八天七座城，梦想之地，如约而至",
								mguidedetaildsc: "摩洛哥一直是我的梦想之地，他是《孤独星球》的十佳旅行目的地",
								mguidedetailtags: "FANXING YOU"
							},
							{
								Destination_mguidedetail: 4,
								mguidedetailimg: "https://ccm.ddcdn.com/photo-s/13/dc/99/2c/caption.jpg",
								mguidedetailavter: "https://ccm.ddcdn.com/photo-s/12/77/2a/cd/blog61822-129.jpg",
								mguidedetailtitle: "躲开大三巴牌坊前的人潮，穿过大家都忙于拍照的恋爱巷",
								mguidedetaildsc: "恋爱巷全长只有50米，但是巷子两边是糖果色系的葡萄牙风格建筑，粉色和亮黄色墙面和谐交错，",
								mguidedetailtags: "meiliLOVE"
							},
						]
					}
				]

			}],


			message: '查询成功'
		}
	})

const buildzl = Mock.mock(
	'/api/buildzl', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				zlcity: "东京",
				search_luvxing: [{
						lvxingdi: '全部',
						lvxingnumber: '58523'
					},
					{
						lvxingdi: '景点',
						lvxingnumber: '3523'
					},
					{
						lvxingdi: '美食',
						lvxingnumber: '8563'
					},
					{
						lvxingdi: '购物',
						lvxingnumber: '2596'
					},
					{
						lvxingdi: '活动',
						lvxingnumber: '3578'
					}
				],
				search_zhuti: [{
						zhitiname: "人文"
					},
					{
						zhitiname: "历史"
					},
					{
						zhitiname: "观光"
					},
					{
						zhitiname: "娱乐休闲"
					},
					{
						zhitiname: "趣味活动"
					},
					{
						zhitiname: "自然风光"
					},
					{
						zhitiname: "古屋"
					},
					{
						zhitiname: "游乐场"
					},
					{
						zhitiname: "博物馆"
					}
				]
			}],
			message: '查询成功'
		}
	})
const buildplcPoiList = Mock.mock(
	'/api/buildplcPoiList', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					plcPoiListid: 1,
					ratevalue: 8,
					plcPoiListidimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-01-06/43fcb163-e1a9-4a68-9b4b-afacd7b1d315_300_200.jpg",
					plcPoiListidjianxie: "Tokyo Disney Resort",
					plcPoiListtitle: "东京迪士尼度假区",
					plcPoiListfirat: "1",
					plcPoiListavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
					plcPoiListjn: "1",
					plcPoiListyouhui: "打卡必玩 日本东京迪斯尼乐园/迪士尼海洋1日实体票/电子票",
					plcPoiListxt: "“暑期预售”日本东京 - 富士山 - 京都 - 大阪 - 名古屋6日5晚半自助跟团游(东京一日自由，山中湖花之都赏花，含5顿正餐尽享美食，一晚温泉酒店日式泡汤，"
				},
				{
					plcPoiListid: 1,
					ratevalue: 9.5,
					plcPoiListidimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-01-06/43fcb163-e1a9-4a68-9b4b-afacd7b1d315_300_200.jpg",
					plcPoiListidjianxie: "Tokyo Disney Resort",
					plcPoiListtitle: "东京迪士尼度假区",
					plcPoiListfirat: "1",
					plcPoiListavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
					plcPoiListjn: "1",
					plcPoiListyouhui: "打卡必玩 日本东京迪斯尼乐园/迪士尼海洋1日实体票/电子票",
					plcPoiListxt: "“暑期预售”日本东京 - 富士山 - 京都 - 大阪 - 名古屋6日5晚半自助跟团游(东京一日自由，山中湖花之都赏花，含5顿正餐尽享美食，一晚温泉酒店日式泡汤，"
				},
				{
					plcPoiListid: 1,
					ratevalue: 9.8,
					plcPoiListidimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-01-06/43fcb163-e1a9-4a68-9b4b-afacd7b1d315_300_200.jpg",
					plcPoiListidjianxie: "Tokyo Disney Resort",
					plcPoiListtitle: "东京迪士尼度假区",
					plcPoiListfirat: "1",
					plcPoiListavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
					plcPoiListjn: "1",
					plcPoiListyouhui: "打卡必玩 日本东京迪斯尼乐园/迪士尼海洋1日实体票/电子票",
					plcPoiListxt: "“暑期预售”日本东京 - 富士山 - 京都 - 大阪 - 名古屋6日5晚半自助跟团游(东京一日自由，山中湖花之都赏花，含5顿正餐尽享美食，一晚温泉酒店日式泡汤，"
				}



			],
			message: '查询成功'
		}
	})
const buildCountry_breadcrumb = Mock.mock(
	'/api/buildCountry_breadcrumb', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					Country: '日本',
					Countryname: '目的地',
					Country_list: [{
						Country_listname: "日本",
						Country_lists: [{
								Country_listid: 1,
								Country_listnames: "日本景点"
							},
							{
								Country_listid: 2,
								Country_listnames: "日本交通"
							},
							{
								Country_listid: 3,
								Country_listnames: "日本体验"
							},
							{
								Country_listid: 4,
								Country_listnames: "日本购物"
							},
							{
								Country_listid: 5,
								Country_listnames: "日本美食"
							}
						]
					}],

				}

			],
			message: '查询成功'
		}
	})
const buildCountryplcTopBar = Mock.mock(
	'/api/buildCountryplcTopBar', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				plcTopBarjianxie: "Tokyo",
				plcTopBarcity: "日本",
				CountryidBargo: "25263",
				Countryidpinlun: "25236",
				Countryid: 1
			}],
			message: '查询成功'
		}
	})
const buildplcMenuBarHolder = Mock.mock(
	'/api/buildplcMenuBarHolder', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				hotcity: [{
						hotcityid: 1,
						hotcityimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-07-05/8cfc754f-0333-4f38-a5c3-4f89dc27a665_300_200.jpg",
						hotcityname: "东京",
						hotcityjx: 'Tokyo'
					},
					{
						hotcityid: 2,
						hotcityimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-01-18/f2e28f6e-6082-4262-8293-ca478d589b52_300_200.jpg",
						hotcityname: "大阪",
						hotcityjx: 'OSAKA'
					},
					{
						hotcityid: 3,
						hotcityimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-03-27/512ee636-16df-4b7b-a6ed-c5ce669d34a1_300_200.jpg",
						hotcityname: "名古屋",
						hotcityjx: 'Nagoya'
					}
				],
				navbarmudi: [{
						mudi: "目的速写"
					},
					{
						mudi: "当地人生"
					},
					{
						mudi: "历史"
					},
					{
						mudi: "文化"
					}
				],
				navbarchengji: [{
						chengji: "飞机"
					},
					{
						chengji: "高铁"
					},
					{
						chengji: "城轨"
					},
					{
						chengji: "汽车"
					},
					{
						chengji: "水运"
					}
				],
				navbarshinei: [{
						shinei: "地铁"
					},
					{
						shinei: "巴士"
					},
					{
						shinei: "地铁"
					},
					{
						shinei: "滴滴"
					}
				],
				navbarrili: [{
						rili: "旅行季节"
					},
					{
						rili: "当地节日"
					}
				],
				navbarxiaofei: [{
						xiaofei: "银联"
					},
					{
						xiaofei: "货币兑换"
					}
				],
				navbarxinxi: [{
						xinxi: "网络"
					},
					{
						xinxi: "电话"
					},
					{
						xinxi: "信息中心"
					}
				],
				navbargonggao: [{
						gonggao: "负责任旅行"
					},
					{
						gonggao: "安全"
					},
					{
						gonggao: "医疗"
					}
				],
				navbarluxian: [{
						luxian: "一日游"
					},
					{
						luxian: "两日游"
					},
					{
						luxian: "三日游"
					}
				],
				hotwan: [{
						hotwanid: 1,
						hotwanname: '景点观光',
						hotwannumber: "2533"
					},
					{
						hotwanid: 2,
						hotwanname: '休闲娱乐',
						hotwannumber: "8563"
					},
					{
						hotwanid: 3,
						hotwanname: '购物',
						hotwannumber: "85236"
					},
					{
						hotwanid: 4,
						hotwanname: '特色主题',
						hotwannumber: "7433"
					},
					{
						hotwanid: 5,
						hotwanname: '一日游',
						hotwannumber: "789"
					}

				],
				lvxingwan: [{
						lvxingwanid: 1,
						lvxingwanname: '自由行',
						lvxingwannumber: "1253"
					},
					{
						lvxingwanid: 2,
						lvxingwanname: '飞机',
						lvxingwannumber: "745"
					},
					{
						lvxingwanid: 3,
						lvxingwanname: '签证服务',
						lvxingwannumber: "859"
					},
					{
						lvxingwanid: 4,
						lvxingwanname: '交通票',
						lvxingwannumber: "789"
					},
					{
						lvxingwanid: 5,
						lvxingwanname: '城市玩乐',
						lvxingwannumber: "4569"
					}
				],
				xingcheng: [{
						xingchengid: 1,
						xingchengname: '私人订制'
					},
					{
						xingchengid: 2,
						xingchengname: '推荐路线'
					}
				],
				shequ: [{
						shequid: 1,
						shequname: '日本结伴',

					},
					{
						shequid: 2,
						shequname: '旅行问答',

					},
					{
						shequid: 3,
						shequname: '日本相片',

					}
				]
			}],
			message: '查询成功'
		}
	})
const buildplcFocus = Mock.mock(
	'/api/buildplcFocus', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				plcFocusPhoto: [{
						plcimg: 'http://s3.lvjs.com.cn//uploads/pc/place2/2018-07-05/8cfc754f-0333-4f38-a5c3-4f89dc27a665.jpg'
					},
					{
						plcimg: 'http://s1.lvjs.com.cn//uploads/pc/place2/2018-08-07/6279be70-daab-4563-b420-62c8d1dc9d02.jpg'
					},
					{
						plcimg: 'http://s2.lvjs.com.cn//uploads/pc/place2/2018-07-05/f7150935-ebf0-4e9b-8de0-3070bd4d1569.jpg'
					},
					{
						plcimg: 'http://s3.lvjs.com.cn//uploads/pc/place2/2018-07-05/dcc3bee4-2b72-43e7-8bfe-390985346655.jpg'
					}
				],
				plcnumber: "89657"
			}],
			message: '查询成功'
		}
	})
const buildhotcity = Mock.mock(
	'/api/buildhotcity', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotname: "东京",
					morecitynumber: "2563",
					hotcitybanner: [{
							hotcitybannercontent: [{
									Citylistid: 1,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-04-11/c30a366c-2e6b-4971-9b4e-5d55f032eb21_300_200.jpg',
									citylistname: "东京",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '浅草寺'
										},
										{
											Landscapeid: 2,
											Landscapename: '东京塔'
										},
										{
											Landscapeid: 3,
											Landscapename: '涩谷区'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '台场'
										},
										{
											Landscapeid: 6,
											Landscapename: '上野公园'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 2,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2018-06-11/19019a65-f7d5-433c-b7e6-d4d457990740_300_200.jpg',
									citylistname: "大阪",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '大阪城天守阁'
										},
										{
											Landscapeid: 2,
											Landscapename: '大阪城公园'
										},
										{
											Landscapeid: 3,
											Landscapename: '环球影视'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '台场'
										},
										{
											Landscapeid: 6,
											Landscapename: '上野公园'
										},

									],
								},

								{
									Citylistid: 3,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2016-05-30/3ffa527e-ac92-4e7f-98cd-41b02102aa85_300_200.jpg',
									citylistname: "京都",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '清水寺'
										},
										{
											Landscapeid: 2,
											Landscapename: '二条城'
										},
										{
											Landscapeid: 3,
											Landscapename: '环球影视'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '花见小路'
										},
										{
											Landscapeid: 6,
											Landscapename: '八坂神社'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 4,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-10-12/82737c6d-420d-47f0-a0cd-4815dfe82bb5_300_200.jpg',
									citylistname: "札幌",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '大通公园'
										},
										{
											Landscapeid: 2,
											Landscapename: '白色恋人公园'
										},
										{
											Landscapeid: 3,
											Landscapename: '札幌电视塔'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '花见小路'
										},
										{
											Landscapeid: 6,
											Landscapename: '八坂神社'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 5,
									citylistimg: '//pics.lvjs.com.cn/pics//uploads/pc/place_vst/hotels/1246/12466/_i_Mobile640_960_0000im0U_300_200.jpg',
									citylistname: "箱根",

									Landscape: [{
											Landscapeid: 1,
											Landscapename: '箱根'
										},
										{
											Landscapeid: 2,
											Landscapename: '大涌谷'
										},
										{
											Landscapeid: 3,
											Landscapename: '芦之湖'
										},
										{
											Landscapeid: 4,
											Landscapename: '箱根神社'
										},
										{
											Landscapeid: 5,
											Landscapename: '箱根强罗公园'
										},
										{
											Landscapeid: 6,
											Landscapename: '箱根海贼船'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 6,
									citylistimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-06-20/0f09f0f2-629d-4b64-a711-2d43509484a5_300_200.jpg',
									citylistname: "箱根",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '富士山地区'
										},
										{
											Landscapeid: 2,
											Landscapename: '河口湖'
										},
										{
											Landscapeid: 3,
											Landscapename: '忍野八海'
										},
										{
											Landscapeid: 4,
											Landscapename: '河口湖站'
										},
										{
											Landscapeid: 5,
											Landscapename: '天上山公园'
										},
										{
											Landscapeid: 6,
											Landscapename: '箱根海贼船'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
							]
						},
						{
							hotcitybannercontent: [{
									Citylistid: 1,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-04-11/c30a366c-2e6b-4971-9b4e-5d55f032eb21_300_200.jpg',
									citylistname: "东京",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '浅草寺'
										},
										{
											Landscapeid: 2,
											Landscapename: '东京塔'
										},
										{
											Landscapeid: 3,
											Landscapename: '涩谷区'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '台场'
										},
										{
											Landscapeid: 6,
											Landscapename: '上野公园'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 2,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2018-06-11/19019a65-f7d5-433c-b7e6-d4d457990740_300_200.jpg',
									citylistname: "大阪",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '大阪城天守阁'
										},
										{
											Landscapeid: 2,
											Landscapename: '大阪城公园'
										},
										{
											Landscapeid: 3,
											Landscapename: '环球影视'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '台场'
										},
										{
											Landscapeid: 6,
											Landscapename: '上野公园'
										},

									],
								},

								{
									Citylistid: 3,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2016-05-30/3ffa527e-ac92-4e7f-98cd-41b02102aa85_300_200.jpg',
									citylistname: "京都",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '清水寺'
										},
										{
											Landscapeid: 2,
											Landscapename: '二条城'
										},
										{
											Landscapeid: 3,
											Landscapename: '环球影视'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '花见小路'
										},
										{
											Landscapeid: 6,
											Landscapename: '八坂神社'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 4,
									citylistimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-10-12/82737c6d-420d-47f0-a0cd-4815dfe82bb5_300_200.jpg',
									citylistname: "札幌",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '大通公园'
										},
										{
											Landscapeid: 2,
											Landscapename: '白色恋人公园'
										},
										{
											Landscapeid: 3,
											Landscapename: '札幌电视塔'
										},
										{
											Landscapeid: 4,
											Landscapename: '皇居'
										},
										{
											Landscapeid: 5,
											Landscapename: '花见小路'
										},
										{
											Landscapeid: 6,
											Landscapename: '八坂神社'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 5,
									citylistimg: '//pics.lvjs.com.cn/pics//uploads/pc/place_vst/hotels/1246/12466/_i_Mobile640_960_0000im0U_300_200.jpg',
									citylistname: "箱根",

									Landscape: [{
											Landscapeid: 1,
											Landscapename: '箱根'
										},
										{
											Landscapeid: 2,
											Landscapename: '大涌谷'
										},
										{
											Landscapeid: 3,
											Landscapename: '芦之湖'
										},
										{
											Landscapeid: 4,
											Landscapename: '箱根神社'
										},
										{
											Landscapeid: 5,
											Landscapename: '箱根强罗公园'
										},
										{
											Landscapeid: 6,
											Landscapename: '箱根海贼船'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
								{
									Citylistid: 6,
									citylistimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-06-20/0f09f0f2-629d-4b64-a711-2d43509484a5_300_200.jpg',
									citylistname: "箱根",
									Landscape: [{
											Landscapeid: 1,
											Landscapename: '富士山地区'
										},
										{
											Landscapeid: 2,
											Landscapename: '河口湖'
										},
										{
											Landscapeid: 3,
											Landscapename: '忍野八海'
										},
										{
											Landscapeid: 4,
											Landscapename: '河口湖站'
										},
										{
											Landscapeid: 5,
											Landscapename: '天上山公园'
										},
										{
											Landscapeid: 6,
											Landscapename: '箱根海贼船'
										},
										{
											Landscapeid: 7,
											Landscapename: ' 新宿三丁目歌舞伎町'
										},
										{
											Landscapeid: 8,
											Landscapename: ' 明治神宫'
										},
									],
								},
							]
						},

					],
				}

			],
			message: '查询成功'
		}
	})
const buildweijing = Mock.mock(
	'/api/buildweijing', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

				wjcountry: "日本",
				moreweijinnumber: '5232',
				weijnbanner: [{
						weijnbannercontent: [{
								mguidedetailid: 1,
								wjtitle: "北海道温泉大比拼",
								pois: 10,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
								wjusername: "nice pert",
								wjtext: "京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"

							},
							{
								mguidedetailid: 2,
								wjtitle: "大阪美食惠",
								pois: 7,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
								wjusername: "shenqu love",
								wjtext: "筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"

							},
							{
								mguidedetailid: 2,
								wjtitle: "京都豆腐节",
								pois: 8,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
								wjusername: "乡村豆腐",
								wjtext: "除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"

							}
						],
					},
					{
						weijnbannercontent: [{
								mguidedetailid: 1,
								wjtitle: "北海道温泉大比拼",
								pois: 10,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
								wjusername: "nice pert",
								wjtext: "京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"

							},
							{
								mguidedetailid: 2,
								wjtitle: "大阪美食惠",
								pois: 7,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
								wjusername: "shenqu love",
								wjtext: "筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"

							},
							{
								mguidedetailid: 2,
								wjtitle: "京都豆腐节",
								pois: 8,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
								wjusername: "乡村豆腐",
								wjtext: "除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"

							}
						],
					},
					{
						weijnbannercontent: [{
								mguidedetailid: 1,
								wjtitle: "北海道温泉大比拼",
								pois: 10,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
								wjusername: "nice pert",
								wjtext: "京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"

							},
							{
								mguidedetailid: 2,
								wjtitle: "大阪美食惠",
								pois: 7,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
								wjusername: "shenqu love",
								wjtext: "筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"

							},
							{
								mguidedetailid: 2,
								wjtitle: "京都豆腐节",
								pois: 8,
								wjimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
								wjavter: "//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
								wjusername: "乡村豆腐",
								wjtext: "除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"

							}
						],
					}





				]


			}],
			message: '查询成功'
		}
	})
const buildtjluxianbase = Mock.mock(
	'/api/buildtjluxianbase', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					index: 1,
					tjname: "8日东京箱根游"

				},
				{
					index: 2,
					tjname: "夏日北海道之旅"

				},
				{
					index: 3,
					tjname: "11日关西行"

				}
			],
			message: '查询成功'
		}
	})
const buildtjcontent = Mock.mock(
	'/api/buildtjcontent', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					tjimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-10-24/8af2205c-8f86-4049-845a-19b617b2b4a3_300_200.jpg",
					tjday: "9",
					tjtitle: "迪士尼，滋贺大自然农庄，奈良小鹿，相扑表演",
					tjliyou: "强势酒店攻势，保证入住2晚地道日式温泉酒店，日式美食吃不停（任食日本螃蟹、和牛黑䐁一品海鲜锅、Maihama自助餐任吃到饱）",
					tjcontentc: [{
							tjcontentdsc: '自选东京迪士尼乐园，安排不少于4小时游玩，让您和心爱的卡通人物如共渡暑假'
						},
						{
							tjcontentdsc: '滋贺大自然农庄，在一片缤纷绽放的花海中,亲近可爱小动物。'
						}
					]
				},
				{
					tjimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg",
					tjday: "5",
					tjtitle: "一次走遍东京、大阪、京都、箱根主要城市，网络经典景点! ",
					tjliyou: "山中湖花之都公园赏花，在面积30万平方公尺的花海田里，有春天的郁金香、夏天的波斯菊、向日葵和百日草。美丽的花海，日式和欧风的各类庭园搭配的巧思设计，富士山美景的衬托之下更显得绚烂缤纷。",
					tjcontentc: [{
							tjcontentdsc: '千年古都-京都，完整地保留了它千余年的历史文化遗产。'
						},
						{
							tjcontentdsc: '东京安排一整日的自由活动，行程自己做主，多种选择随心所欲！'
						}
					]
				},
				{
					tjimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-02-23/1dcbe67f-f58b-4ebd-9b62-689d8d5e50e0_300_200.jpg",
					tjday: "8",
					tjtitle: "日本冲绳5日自由行",
					tjliyou: "冲绳曾是一个古国，名为琉球王国。如今，这里不但有着闪着蓝宝石光芒的海洋、白沙滩、美丽的珊瑚礁、各种亚热带植物和亚热带风光，还有古老的文化传统和文化遗产。 ",
					tjcontentc: [{
							tjcontentdsc: ' 冲绳气候温暖宜人，岛内四处郁郁葱葱，不仅是一个度假疗养的胜地，也是人人皆知的海上运动的麦加地'
						},
						{
							tjcontentdsc: '冲绳除了具有东南亚、中国、日本的民俗风情建筑外，较日本本土更具有独特的美式风情，值得一游。'
						}
					]
				}
			],
			message: '查询成功'
		}
	})
const buildgo = Mock.mock(
	'/api/buildgo', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				gocountry: '日本',
				Countryqianzhengid: 1,
				Country_baoxianid: 1.,
				Country_phoneid: 1,
				gofly: [{
						goflyrexiaoid: 1,
						goflytxt: "[预售至19年底|端午|中秋|枫叶季|拒签全退]北京/天津直飞日本东京/大阪/名古屋/札幌/冲绳3-30天机票(1人/2人起订,赠1晚酒店+全程WiFi/可升级公务舱)",
						goflyzhe: 8,
						goflyjiage: 859
					},
					{
						goflyrexiaoid: 2,
						goflytxt: "上海直飞台北/高雄单程含税机票(可自由搭配回程票/可订购台北101观景台/野柳地质公园/台北101观景台+猫空缆车+双层观光巴士双人套票)",
						goflyzhe: 7,
						goflyjiage: 3659
					}
				],
				goflyimg: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-29/fe4fb464-0fc6-4100-b415-8e7318dbeb2b_300_200.jpg",
				goziyouxing: [{
						goziyouxingimg: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
						goziyouxingtxt: ' [端午/暑假/国庆]上海直飞大阪5-7天自由行(体验当地日式亲子民宿+两套航班可选+多类型酒店可选+全程自由安排+随时出发+可加购当地热门景点门票）',
						number: "14",
						goziyouxingzhe: "9",
						goziyouxingjiage: "52"
					},
					{
						goziyouxingimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
						goziyouxingtxt: ' [端午/暑假/国庆]上海直飞大阪5-7天自由行(体验当地日式亲子民宿+两套航班可选+多类型酒店可选+全程自由安排+随时出发+可加购当地热门景点门票）',
						number: "14",
						goziyouxingzhe: "9",
						goziyouxingjiage: "52"
					}
				]
			}],
			message: '查询成功'
		}
	})
const buildplcFocusOperate = Mock.mock(
	'/api/buildplcFocusOperate', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				plcFocusOperates: [{
						plcFOcontent: "来到泰国，不去吃遍当地的美食就太遗憾了！这个拥有狭长海岸线的热带国家，出产了丰富的海鲜、蔬菜及"
					},
					{
						plcFOcontent: "曼谷，这座旧日风情与时尚气息互相交融的大都市，每次造访可能都会给你新的惊喜与收获。这座城市有着数"
					}
				],
				pictitle: "东京",
				picimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-04-25/e7d8111d-f443-478f-be10-3486ec1ac8db_300_200.jpg",
				piczuozhe: "Love YOU",
				piccishu: "25236"
			}],
			message: '查询成功'
		}
	})
const buildplcCitylist = Mock.mock(
	'/api/buildplcCitylist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					citydetailid: 1,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-05-13/3fe8c6d1-4885-41f2-9363-50f26b0f75d6_300_200.jpg",
					plcCitylistname: "东京",
					plcCitylistjx: "Tokyo",
					plcCitylistnumber: "25896",
					cityLandscape: [
						// {
						// 	cityLandscapecontent:""
						// }
						{
							Landscapeid: 1,
							cityLandscapecontent: '浅草寺'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '东京塔'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '涩谷区'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: '皇居'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '台场'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '上野公园'
						},
						{
							Landscapeid: 7,
							cityLandscapecontent: ' 新宿三丁目歌舞伎町'
						},
						{
							Landscapeid: 8,
							cityLandscapecontent: ' 明治神宫'
						},
					]
				},
				{
					citydetailid: 2,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-11-06/f81e3bd8-1f1e-4bdc-95f1-300b6ead4eff_300_200.jpg",
					plcCitylistname: "大阪",
					plcCitylistjx: "OSAKA",
					plcCitylistnumber: "96896",
					cityLandscape: [
						// {
						// 	cityLandscapecontent:""
						// }
						{
							Landscapeid: 1,
							cityLandscapecontent: '大阪城天守阁'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '大阪城公园'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '环球影视'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: '皇居'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '台场'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '上野公园'
						},

					]
				},
				{
					citydetailid: 3,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-06-27/b3412930-46e2-4a4b-bfbc-d297ad5d8f7d_300_200.jpg",
					plcCitylistname: "箱根",
					plcCitylistjx: "xianggen",
					plcCitylistnumber: "6896",
					cityLandscape: [
						// {
						// 	cityLandscapecontent:""
						// }
						{
							Landscapeid: 1,
							cityLandscapecontent: '清水寺'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '二条城'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '环球影视'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: '皇居'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '花见小路'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '八坂神社'
						},
						{
							Landscapeid: 7,
							cityLandscapecontent: ' 新宿三丁目歌舞伎町'
						},
						{
							Landscapeid: 8,
							cityLandscapecontent: ' 明治神宫'
						},
					]
				},
				{
					citydetailid: 4,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-12-05/34403d9b-01a4-4919-8500-a237cedbc7e7_300_200.jpg",
					plcCitylistname: "京都",
					plcCitylistjx: "jingdou",
					plcCitylistnumber: "7895",
					cityLandscape: [
						// {
						// 	cityLandscapecontent:""
						// }
						{
							Landscapeid: 1,
							cityLandscapecontent: '大通公园'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '白色恋人公园'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '札幌电视塔'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: '皇居'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '花见小路'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '八坂神社'
						},
						{
							Landscapeid: 7,
							cityLandscapecontent: ' 新宿三丁目歌舞伎町'
						},
						{
							Landscapeid: 8,
							cityLandscapecontent: ' 明治神宫'
						},
					]
				},
				{
					citydetailid: 5,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-04-25/d435ce67-2dc0-4f80-ad74-83826b0649b1_300_200.jpg",
					plcCitylistname: "富士山地区",
					plcCitylistjx: "fushiishan",
					plcCitylistnumber: "7895",
					cityLandscape: [
						// {
						// 	cityLandscapecontent:""
						// }
						{
							Landscapeid: 1,
							cityLandscapecontent: '富士山地区'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '河口湖'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '忍野八海'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: '河口湖站'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '天上山公园'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '箱根海贼船'
						},
						{
							Landscapeid: 7,
							cityLandscapecontent: ' 新宿三丁目歌舞伎町'
						},
						{
							Landscapeid: 8,
							cityLandscapecontent: ' 明治神宫'
						},
					]
				},
				{
					citydetailid: 6,
					plcCitylistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-30/09b3f8a6-427d-4e40-819c-c5430edfd5d1_300_200.jpg",
					plcCitylistname: "名古屋",
					plcCitylistjx: "Nagoya",
					plcCitylistnumber: "14563",
					cityLandscape: [

						{
							Landscapeid: 1,
							cityLandscapecontent: '名古屋城'
						},
						{
							Landscapeid: 2,
							cityLandscapecontent: '热田神宫'
						},
						{
							Landscapeid: 3,
							cityLandscapecontent: '名古屋电视塔'
						},
						{
							Landscapeid: 4,
							cityLandscapecontent: 'JR中心塔'
						},
						{
							Landscapeid: 5,
							cityLandscapecontent: '大须观音'
						},
						{
							Landscapeid: 6,
							cityLandscapecontent: '名城公园'
						},
						{
							Landscapeid: 7,
							cityLandscapecontent: ' 平和公园'
						},
						{
							Landscapeid: 8,
							cityLandscapecontent: ' 明治神宫'
						},
					]
				},

			],
			message: '查询成功'
		}
	})
const buildstrategy_jieshao = Mock.mock(
	'/api/buildstrategy_jieshao', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				strategy_jieshao_didian: "东京",
				strategy_jieshao_text: "东京，作为日本的窗口，在紧随国际潮流趋势的同时，也从来未曾放弃过自己的传统文化。日本动漫、日本茶道、节日祭典、宅文化以及各... ",
				strategy_jieshao_img: "//pics.lvjs.com.cn//uploads/pc/place2/2017-03-14/64fe3c91-f69c-4e53-a254-30a640dc3325_300_200.jpg"
			}],
			message: '查询成功'
		}
	})
const buildmguide = Mock.mock(
	'/api/buildmguide', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				mguidename: "庶民价格品米其林餐厅京都篇",
				mguideimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-12-03/766b7462-bbcc-4462-86c0-1e35d1fb2469_300_200.jpg",
				mguideavter: "//pics.lvjs.com.cn//uploads/pc/place2/2018-07-20/d62027c5-3d25-44d5-933d-81babdb4a15a_300_200.jpg",
				mguidetime: "晚上八点",
				mguidepinglun: "14552",
				mguidetxt: '京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，且在日本食评网站tabelog上也有较好排名，适合游客前往的代表餐厅收入于此微锦囊，供各位穷游er参考。当然，这里也给出一些提示：光顾锦囊里的餐厅，除特别注明外请提前预约；绝大部分怀石料理、割烹料理是由店家根据当季食材搭配不同价位套餐，无单点菜单。价位越高的套餐包含的料理道数更多，食材更高级，所谓“一分价钱一分货”；一些怀石料理、割烹料理店会在中午时段供应便当或“简化”的套餐，在保障餐厅水准的前提下，给出了很有性价比的套餐价格；不少餐厅在菜单定价之外有10%左右的服务费。',
				mguidelist: [{
						mguidedianming: "菊乃井(总店)",
						mguidedidian: "京都",
						mguidebanner: [{
								mguidebannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-12-29/b7ae573f-8a64-4aad-833b-eabe35917f22_480_320.jpg",
							},
							{
								mguidebannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-12-05/60075c3b-ef6a-450e-9000-4cfe4e42ab48_480_320.jpg",
							},
							{
								mguidebannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_480_320.jpg",
							},
							{
								mguidebannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-04-20/c9c9ba90-7dab-4044-8a7c-7c49e4d552e8_480_320.jpg",
							}
						],
						mguiderate: "9.8",
						mguidedianping: "58963",
						mguidedetailc: "自关西米其林指南诞生以来，菊乃井本店就一直是三星评价，在tabelog上也是绝对高分店。这里的料理中规中矩，恪守怀石料理传统。并且，店里充满禅意的氛围和店员举手投足间高贵的气质，无可挑剔、一丝不苟的服务给我留下极为深刻的印象。",
						mguideyouyong: "253"

					},
					{
						mguidedianming: "鳗鱼屋 广川",
						mguidedidian: "京都",
						mguidebanner: [{
								mguidebannerimg: "http://s1.lvjs.com.cn/uploads/pc/place2/2018-12-03/766b7462-bbcc-4462-86c0-1e35d1fb2469_480_320.jpg",
							},
							{
								mguidebannerimg: "http://s2.lvjs.com.cn/uploads/pc/place2/2018-12-03/e83aaf6e-ea02-4c39-bf2b-62ace97bc660_480_320.jpg",
							},
							{
								mguidebannerimg: "http://s1.lvjs.com.cn/uploads/pc/place2/2018-12-03/9d38412a-03e4-4634-b9a8-6c426b2e3afd_480_320.jpg",
							},
							{
								mguidebannerimg: "http://s3.lvjs.com.cn/uploads/pc/place2/2018-12-03/98b4b7b6-ca6f-44ad-be33-417b01beb5ce_480_320.jpg",
							},

						],
						mguiderate: "8.8",
						mguidedianping: "58963",
						mguidedetailc: "考究的鳗鱼料理店全部是活杀活料理的形式，因此需要在店内“饲养”鳗鱼。广川“饲养”鳗鱼的水全部是来自岚山嵯峨野的地下水，每日更换，狠扣每个细节。店主认为，河鳗料理贵在新鲜，直接烤无法体现新鲜鳗鱼的口感，他们历代坚持先蒸后烤的做法。顾客点单才开始杀鳗鱼，处理鳗鱼，蒸再烤，从点餐到上菜至少要半个小时。与以前其他店吃的相比，该店的鳗鱼饭甜味不突出，更多的是清香。同时，或许是很少不需要预约的米其林料理店，但请在每日开店时及早前往，否则一会儿就需要长时间排队了。",
						mguideyouyong: "353",
					}
				],
				mguideinvolve: [{
						mguideinvolveimg: '//pics.lvjs.com.cn//uploads/pc/place2/2018-01-05/e8cc1cf6-2ead-42cf-b04b-c5c70da094e0_300_200.jpg',
						mguideinvolvetitle: "吃在京都 | 资深吃货的美食推荐",
						mguideinvolveavter: 'http://s1.lvjs.com.cn/uploads/pc/place2/2017-05-16/05a38163-448b-4f4f-9704-36b7ce67cb83_480_320.jpg',
						mguideinvolvename: "biubiu 肥"
					},
					{
						mguideinvolveimg: '//pics.lvjs.com.cn//uploads/pc/place2/2018-01-05/e8cc1cf6-2ead-42cf-b04b-c5c70da094e0_300_200.jpg',
						mguideinvolvetitle: "京都最值得一去的10间抹茶甜品店",
						mguideinvolveavter: 'http://s1.lvjs.com.cn/uploads/pc/place2/2017-05-16/05a38163-448b-4f4f-9704-36b7ce67cb83_480_320.jpg',
						mguideinvolvename: "咯v热"
					},
					{
						mguideinvolveimg: 'http://s3.lvjs.com.cn/uploads/pc/place2/2017-05-16/d92ec767-57fd-4be6-98b6-c91605b4d351_480_320.jpg',
						mguideinvolvetitle: "来自樱和茶的甘味——京都的和果子和茶房们",
						mguideinvolveavter: 'http://s1.lvjs.com.cn//uploads/pc/place2/2018-08-16/656e2c0b-db13-48fd-947d-51e235e50b12.jpg',
						mguideinvolvename: "LOVE APPLE"
					},
					{
						mguideinvolveimg: 'http://s2.lvjs.com.cn//uploads/pc/place2/2018-08-16/6fe7fb3f-5cb7-4898-9a93-7da80d1f905c.jpg',
						mguideinvolvetitle: "京都不可错过的5大和食老铺",
						mguideinvolveavter: 'http://s1.lvjs.com.cn/uploads/pc/place2/2017-05-16/05a38163-448b-4f4f-9704-36b7ce67cb83_480_320.jpg',
						mguideinvolvename: "TWEEN"
					},
					{
						mguideinvolveimg: 'http://s3.lvjs.com.cn//uploads/pc/place2/2018-08-16/3c78644f-e8fb-4924-8cf7-26306c4c8413.jpg',
						mguideinvolvetitle: "京都咖啡店之小搜查",
						mguideinvolveavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2018-08-16/26d26e4d-3bbb-4e88-8971-ecd4aecd3533.jpg',
						mguideinvolvename: "hot 热"
					}
				]

			}, ],
			message: '查询成功'
		}
	})
const buildsearch_chose = Mock.mock(
	'/api/buildsearch_chose', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					search_chosename: "全部",
					search_chosenumber: '2536'
				},
				{
					search_chosename: "五星",
					search_chosenumber: '286'
				},
				{
					search_chosename: "四星",
					search_chosenumber: '236'
				},
				{
					search_chosename: "三星",
					search_chosenumber: '896'
				},
				{
					search_chosename: "二星",
					search_chosenumber: '786'
				},
				{
					search_chosename: "一星",
					search_chosenumber: '586'
				}
			],
			message: '查询成功'
		}
	})
const buildLandscape = Mock.mock(
	'/api/buildLandscape', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				country: "日本",
				Landscapecity: [{
						cityid: 1,
						Landscapecityname: "东京"
					},
					{
						cityid: 2,
						Landscapecityname: "大阪"
					},
					{
						cityid: 3,
						Landscapecityname: "名古屋"
					},
					{
						cityid: 4,
						Landscapecityname: "北海道"
					},
					{
						cityid: 5,
						Landscapecityname: "冲绳岛"
					}
				],
				strategycity: "东京",
				strategycitys: [{
						Strategyid: 1,
						strategycityname: "东京美食"
					},
					{
						Strategyid: 2,
						strategycityname: "东京体验"
					},
					{
						Strategyid: 3,
						strategycityname: "东京交通"
					},
					{
						Strategyid: 4,
						strategycityname: "东京活动"
					},
					{
						Strategyid: 5,
						strategycityname: "东京购物"
					},
					{
						Strategyid: 6,
						strategycityname: "东京住宿"
					}
				],
				Landscapec: [{
						Landscapeid: 1,
						Landscapecname: "浅草寺"
					},
					{
						Landscapeid: 2,
						Landscapecname: "皇居"
					},
					{
						Landscapeid: 3,
						Landscapecname: "台场"
					},
					{
						Landscapeid: 4,
						Landscapecname: "东京迪士尼"
					},
					{
						Landscapeid: 5,
						Landscapecname: "彩虹大桥"
					},
					{
						Landscapeid: 6,
						Landscapecname: "东京塔"
					},
					{
						Landscapeid: 7,
						Landscapecname: "明治神像"
					}
				],
				Landname: "明治神宫",
				jianxie: "Meiji Jingu",
				Landscapezhongwen: "明治神宫"
			}],
			message: '查询成功'
		}
	})
const buildLandscpaemain = Mock.mock(
	'/api/buildLandscpaemain', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				photoid: 1,
				photo: "//pics.lvjs.com.cn//uploads/pc/place2/2018-03-27/512ee636-16df-4b7b-a6ed-c5ce669d34a1_300_200.jpg",
				photonumber: "23563",
				Landscpaefen: '9.5',
				Landscpaerate: "5",
				Landscpaedianping: "5963",
				Landscpaeming: '7',
				Landscpaetxt: "供奉明治天皇和昭宪皇太后灵位，是日本神道教最重要的神社，有着东京都内最大的一片绿地。明治神宫由入口处耸立的日本最大的鸟居、“升”字型大参道、大殿、宝物殿构成，大殿由神社名匠大江新一郎提案建造，全部铺设除邪之用的鹅卵石。明治神宫内苑的植物根据四季更迭呈现出不同景致，但因最初的造林计划中规定不种植华丽花木，因此神宫内少有日本代表性的樱花。因昭宪皇太后生前酷爱睡莲，睡莲反而成了神宫内最为重要的植物，在9月盛开。到了秋日的银杏时节，神宫代代木入口处的银杏大道上金灿灿的，非常美丽。10月明治天皇生日大祭时会在神宫内举办各种传统艺能演出，尤以流镝马这一传承了1500年的古典祭神仪式最为特殊，有机会的话不妨前去一睹为快。",
				Landscpaetip: "毎年的新年参拜，明治神宫都迎来日本最多的参拜客，新年祈愿也是一个很重要很有特色的仪式。有机会的话可以在新年第一天前去。",
				Landscpaetime: "2019-5-28",
				Landscpaeenjoy: "apple",
				Landscpaebianji: "500",
				Landscpaexiangce: [{
						Landscpaeimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-04-19/cabef5b4-19e6-4f4e-bd24-3bbffa55d962_300_200.jpg",
						Landscpaename: "浅草寺",
						Landscapeid: 1,
						Landscpaexiangcerate: "9.8"

					},
					{
						Landscpaeimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-30/f73b4e92-e3b9-4c7c-9577-067a969e856f_300_200.jpg",
						Landscpaename: "东京塔",
						Landscapeid: 2,
						Landscpaexiangcerate: "8.8"

					},
					{
						Landscpaeimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-27/b910bcce-93c8-48c1-9fb4-c169a49a5245_300_200.jpg",
						Landscpaename: "台场",
						Landscapeid: 3,
						Landscpaexiangcerate: "8.8"

					},
					{
						Landscpaeimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-03-24/e086b2bd-f11f-4456-aa1c-2b43a5fbf06b_300_200.jpg",
						Landscpaename: "彩虹大桥",
						Landscapeid: 4,
						Landscpaexiangcerate: "8.8"

					}
				],

			}],
			message: '查询成功'
		}
	})
const buildcommentlist = Mock.mock(
	'/api/buildcommentlist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					avterimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-02/81aa2dee-4372-4743-acd9-a2d5a397e5d0_300_200.jpg",
					commentlistname: "biubiu",
					commentlistrate: "7.8",
					commentlisttime: "2019-5-30",
					commentlisttxt: "今年要改元了，如果有收集朱印的朋友还是应该去一次，拿一个平成的朱印，五一的时候有明治神宫春日祭，很多表演、巫女神乐，每年都有，可以提前查好了去看，领略日本文化",
					type: 1,
					commentlisttype: [{
						commentlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-03-27/512ee636-16df-4b7b-a6ed-c5ce669d34a1_300_200.jpg"
					}],
					commentlisthuifu: '1452',
					commentlistyouyong: "369"



				},
				{
					avterimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-10-19/a80e98d1-b3ef-4a1c-8b5c-bce73e910a52_300_200.jpg",
					commentlistname: "love",
					commentlistrate: "9.5",
					commentlisttime: "2019-6-30",
					commentlisttxt: "在临走前的最后一早上打卡了东京的绿地~ 和小卉卉一起。快步走汗基本已经出透，清新自然，虔诚地许下愿望，是非常值得去的地方。",
					type: 1,
					commentlisttype: [{
						commentlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-03-27/512ee636-16df-4b7b-a6ed-c5ce669d34a1_300_200.jpg"
					}],
					commentlisthuifu: '1452',
					commentlistyouyong: "369"



				}
			],
			message: '查询成功'
		}
	})
const buildcomwenda = Mock.mock(
	'/api/buildcomwenda', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					comwendatitle: "东京二日游，住在新宿华盛顿酒店，想去银座、皇居、明治神宫、浅草寺等景点",
					comwendahuida: '4'
				},
				{
					comwendatitle: "住在东京茅场町附近，有三天，想去浅草寺，上野公园，秋叶原，东京塔，皇居，银座，明治神宫，原宿，涉谷，新宿。怎样安排比较妥当",
					comwendahuida: '8'
				},
				{
					comwendatitle: "皇居和明治神宫那个好玩更值得去",
					comwendahuida: '3'
				},

			],
			message: '查询成功'
		}
	})
const buildzlist = Mock.mock(
	'/api/buildzlist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					zlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-05-07/e38aab64-6cfa-42d8-b27f-8088c8b807dd_300_200.jpg",
					zlistname: "东京塔",
					zlistprice: "150",
					zlistposition: 1.3
				},
				{
					zlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-11-08/638142c1-fd69-4755-8ff5-112c2fed229c_300_200.jpg",
					zlistname: "浅草寺",
					zlistprice: "90",
					zlistposition: 2.3
				},
				{
					zlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-08-19/47b1c9c6-2877-4c48-9a46-1f2ce0f102b6_300_200.jpg",
					zlistname: "彩虹桥",
					zlistprice: "140",
					zlistposition: 0.3
				},
				{
					zlistimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-12-04/4acbc8c5-d93f-4b86-9c4c-f827b4590c42_300_200.jpg",
					zlistname: "台场",
					zlistprice: "170",
					zlistposition: 1.34
				}
			],
			message: '查询成功'
		}
	})
const buildContinentbramd = Mock.mock(
	'/api/buildContinentbramd', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				Continentid: 1,
				country: [{
						countryid: 1,
						country: "中国"
					},
					{
						countryid: 2,
						country: "日本"
					},
					{
						countryid: 1,
						country: "韩国"
					},
					{
						countryid: 1,
						country: "蒙古"
					},
					{
						countryid: 1,
						country: "印度"
					},
					{
						countryid: 1,
						country: "新加坡"
					},
					{
						countryid: 1,
						country: "印度尼西亚"
					},
					{
						countryid: 1,
						country: "哈萨克斯坦"
					},
					{
						countryid: 1,
						country: "尼泊尔"
					},
					{
						countryid: 1,
						country: "泰国"
					}
				],
				Continent: '亚洲',
				Landscapecity: [{
						countryid: "1",
						Landscapecityname: "中国"
					},
					{
						countryid: "1",
						Landscapecityname: "泰国"
					},
					{
						countryid: "1",
						Landscapecityname: "印度"
					},
					{
						countryid: "1",
						Landscapecityname: "越南"
					},
					{
						countryid: "1",
						Landscapecityname: "缅甸"
					},
					{
						countryid: "1",
						Landscapecityname: "印度尼西亚"
					},
					{
						countryid: "1",
						Landscapecityname: "新加坡"
					},
					{
						countryid: "1",
						Landscapecityname: "台湾"
					},
					{
						countryid: "1",
						Landscapecityname: "日本"
					},
					{
						countryid: "1",
						Landscapecityname: "韩国"
					},
					{
						countryid: "1",
						Landscapecityname: "朝鲜"
					},
					{
						countryid: "1",
						Landscapecityname: "中东"
					}
				]

			}],
			message: '查询成功'
		}
	})
const buildplatopbar = Mock.mock(
	'/api/buildplatopbar', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
				english: "Asia",
				chinses: "亚洲",
				gonumber: "256693",
				wentnumber: '25896',
				livednumber: "589663",
				goed: '25896'
			}],
			message: '查询成功'
		}
	})
const buildcontryul = Mock.mock(
	'/api/buildcontryul', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					Countryid: 1,
					countryimg: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2018-09-10/97ce749c-379c-48ef-a7fb-529b5f548806_300_200.jpg",
					countryname: "中国",
					contrycity: [{
							Cityid: 1,
							contrycityname: "广州"
						},
						{
							Cityid: 1,
							contrycityname: "上海"
						},
						{
							Cityid: 1,
							contrycityname: "深圳"
						},
						{
							Cityid: 1,
							contrycityname: "厦门"
						},
						{
							Cityid: 1,
							contrycityname: "大理"
						},
						{
							Cityid: 1,
							contrycityname: "昆明"
						},
						{
							Cityid: 1,
							contrycityname: "拉萨"
						},
						{
							Cityid: 1,
							contrycityname: "澳门"
						},
						{
							Cityid: 1,
							contrycityname: "福州"
						},
						{
							Cityid: 1,
							contrycityname: "长沙"
						},
						{
							Cityid: 1,
							contrycityname: "福州"
						},
					],
				},
				{
					Countryid: 2,
					countryimg: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-11-06/4a249f92-7865-4907-95bc-4eabd1b4a82e_300_200.jpg",
					countryname: "日本",
					contrycity: [{
							Cityid: 1,
							contrycityname: "东京"
						},
						{
							Cityid: 1,
							contrycityname: "名古屋"
						},
						{
							Cityid: 1,
							contrycityname: "大阪"
						},
						{
							Cityid: 1,
							contrycityname: "北海道"
						},
						{
							Cityid: 1,
							contrycityname: "箱根"
						},
						{
							Cityid: 1,
							contrycityname: "京都"
						},
						{
							Cityid: 1,
							contrycityname: "拉萨"
						},
						{
							Cityid: 1,
							contrycityname: "横滨"
						},
						{
							Cityid: 1,
							contrycityname: "札幌"
						},
						{
							Cityid: 1,
							contrycityname: "神户"
						},
						{
							Cityid: 1,
							contrycityname: "福冈"
						},
					],
				},
				{
					Countryid: 3,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-07-14/5cdbb665-eda5-47fe-a963-8e9ea3479beb_300_200.jpg",
					countryname: "泰国",
					contrycity: [{
							Cityid: 1,
							contrycityname: "曼谷"
						},
						{
							Cityid: 1,
							contrycityname: "普吉岛"
						},
						{
							Cityid: 1,
							contrycityname: "芭堤雅"
						},
						{
							Cityid: 1,
							contrycityname: "清迈"
						},
						{
							Cityid: 1,
							contrycityname: "清莱"
						},

					],
				},
				{
					Countryid: 4,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg",
					countryname: "韩国",
					contrycity: [{
							Cityid: 1,
							contrycityname: "首尔"
						},
						{
							Cityid: 1,
							contrycityname: "斐济岛"
						},
						{
							Cityid: 1,
							contrycityname: "釜山"
						},
						{
							Cityid: 1,
							contrycityname: "仁川"
						},
						{
							Cityid: 1,
							contrycityname: "庆州"
						},
						{
							Cityid: 1,
							contrycityname: "大邱"
						},
					],
				},
				{
					Countryid: 5,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-05-15/fe7a3ee2-26af-4899-a4f0-dafd77d9c280_300_200.jpg",
					countryname: "马来西亚",
					contrycity: [

						{
							Cityid: 1,
							contrycityname: "吉隆坡"
						},
						{
							Cityid: 1,
							contrycityname: "马六甲"
						},
						{
							Cityid: 1,
							contrycityname: "亚庇"
						},
						{
							Cityid: 1,
							contrycityname: "沙巴"
						},
						{
							Cityid: 1,
							contrycityname: "槟城"
						},
						{
							Cityid: 1,
							contrycityname: "兰卡威"
						},
					],
				},
				{
					Countryid: 6,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg",
					countryname: "新加坡",
					contrycity: [

						{
							Cityid: 1,
							contrycityname: "新加坡"
						},

					],
				},
				{
					Countryid: 3,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2017-07-14/5cdbb665-eda5-47fe-a963-8e9ea3479beb_300_200.jpg",
					countryname: "泰国",
					contrycity: [{
							Cityid: 1,
							contrycityname: "曼谷"
						},
						{
							Cityid: 1,
							contrycityname: "普吉岛"
						},
						{
							Cityid: 1,
							contrycityname: "芭堤雅"
						},
						{
							Cityid: 1,
							contrycityname: "清迈"
						},
						{
							Cityid: 1,
							contrycityname: "清莱"
						},

					],
				},
				{
					Countryid: 4,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg",
					countryname: "韩国",
					contrycity: [{
							Cityid: 1,
							contrycityname: "首尔"
						},
						{
							Cityid: 1,
							contrycityname: "斐济岛"
						},
						{
							Cityid: 1,
							contrycityname: "釜山"
						},
						{
							Cityid: 1,
							contrycityname: "仁川"
						},
						{
							Cityid: 1,
							contrycityname: "庆州"
						},
						{
							Cityid: 1,
							contrycityname: "大邱"
						},
					],
				},
				{
					Countryid: 5,
					countryimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-05-15/fe7a3ee2-26af-4899-a4f0-dafd77d9c280_300_200.jpg",
					countryname: "马来西亚",
					contrycity: [

						{
							Cityid: 1,
							contrycityname: "吉隆坡"
						},
						{
							Cityid: 1,
							contrycityname: "马六甲"
						},
						{
							Cityid: 1,
							contrycityname: "亚庇"
						},
						{
							Cityid: 1,
							contrycityname: "沙巴"
						},
						{
							Cityid: 1,
							contrycityname: "槟城"
						},
						{
							Cityid: 1,
							contrycityname: "兰卡威"
						},
					],
				},
			],
			message: '查询成功'
		}
	})
const buildcountrylist = Mock.mock(
	'/api/buildcountrylist', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					type: 1,
					Countryid: 1,
					coutryname: "阿富汗",
					countryenglish: 'Afghanistan'
				},
				{
					type: 1,
					Countryid: 1,
					coutryname: "阿富汗",
					countryenglish: 'Afghanistan'
				},
				{
					type: 1,
					Countryid: 1,
					coutryname: "阿富汗",
					countryenglish: 'Afghanistan'
				}
			],
			message: '查询成功'
		}
	})
const buildyoujilists = Mock.mock(
	'/api/buildyoujilists', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					ThreadDetailid: 1,
					thraedimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-03-29/4783eb8b-d603-4fc7-98d0-55f0aac4ee50_300_200.jpg",
					threadtitle: '丽江、香格里拉、梅里雪山双飞6日',
					threadavter: "http://s3.lvjs.com.cn/uploads/pc/place2/2018-03-29/903bfaf9-a91d-4340-8597-233c818bc03a.jpg",
					threadtime: '2019-6-5',
					threadliulan: '256',
					threadlike: '1458',
					threadzuozhe: 'biu biu',
					threadtxt: '摄影全线，拍摄梅里雪山不同的瞬间，拍摄经典“日照金顶”景观；尝美食：尼西土鸡+风味藏餐+牦牛肉小火锅+马帮菜+三文鱼宴；品质宿：全程高标酒店+1晚德钦飞来寺观景天堂酒店景观房；赏美景：虎跳峡、松赞林寺、普达措天堂、飞来寺观景梅里雪山。'
				},
				{
					ThreadDetailid: 2,
					thraedimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-05-10/84c4023b-01c5-47aa-b3ff-23a927cf68ef_300_200.jpg",
					threadtitle: '新加坡航空，脏鸭餐，情人崖下午茶，玻璃底船，花漾双岛之旅',
					threadavter: "http://pic.lvmama.com/uploads/pc/place2/2019-05-10/2bb768d8-f938-445e-9e47-0ae37848a6b1_480_320.jpg",
					threadtime: '2019-8-3',
					threadliulan: '456',
					threadlike: '17458',
					threadzuozhe: 'biu love',
					threadtxt: '当地美食： 生猛脏鸭餐、情人崖下午茶、金巴兰 BBQ,睡得好香： 新加坡当地 ★★★，巴厘岛升级国际连锁 ★★★★,畅玩： 乌布皇宫、乌布传统市场、海神庙、小婆罗浮屠、小印度，'
				},
				{
					ThreadDetailid: 3,
					thraedimg: "//pics.lvjs.com.cn//uploads/pc/place2/2019-01-02/0ba188f5-8d02-4447-8f53-10b8b35f2294_300_200.jpg",
					threadtitle: '五星温泉酒店、敞篷JEEP车环海旅拍、VIP私人游艇、玉龙雪山大索道',
					threadavter: "http://pic.lvmama.com/uploads/pc/place2/2018-03-23/bd28cb75-8a9a-4b7c-80d2-8c4a6bb9f57e_480_320.jpg",
					threadtime: '2019-4-13',
					threadliulan: '756',
					threadlike: '7758',
					threadzuozhe: '波波肥仔',
					threadtxt: '管家式一对一客服，含往返机票，舒适住宿,全程无忧 ,实力商家，专业接送机，金牌导游,微信管1对1服务 ,赠丽水金沙，渔鹰表演，当地特色餐,赠一晚温泉酒店，石林风景区，雪山大索道，洱海游船，敞篷吉普车环海'
				}
			],
			message: '查询成功'
		}
	})
const buildthreadbanner = Mock.mock(
	'/api/buildthreadbanner', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					threadbannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-12-05/60075c3b-ef6a-450e-9000-4cfe4e42ab48_480_320.jpg",
					threadbannerdsc: "体验正宗日式泡汤之乐,日式烤肉、温泉料理、日式火锅大饱口福,夏日浪漫赏花- 山中湖花之都公园",
					threadbannerzuozhe: "chui qiu",
					threadbanneravter: "//pics.lvjs.com.cn//uploads/pc/place2/2017-02-23/1dcbe67f-f58b-4ebd-9b62-689d8d5e50e0_300_200.jpg",
				},
				{
					threadbannerimg: "http://pic.lvmama.com/uploads/pc/place2/2017-03-23/ee690612-66f9-4ff2-a3ec-26c547aa2ec2_480_320.jpg",
					threadbannerdsc: "东急酒店，对面即是大街道和三越百货，代购圣地，放心买买买",
					threadbannerzuozhe: "国爱媛",
					threadbanneravter: "http://pic.lvmama.com/uploads/pc/place2/2017-03-23/f9f1c526-1732-4536-8720-d9fa8cbd5fa3_480_320.jpg",
				},
				{
					threadbannerimg: "//pics.lvjs.com.cn//uploads/pc/place2/2018-10-24/8af2205c-8f86-4049-845a-19b617b2b4a3_300_200.jpg",
					threadbannerdsc: "畅游城市: 大阪/奈良/富士山/东京环球影城 (已含门票)，自由畅玩不少于6小时寿司DIY",

					threadbannerzuozhe: "瘪子三强",
					threadbanneravter: "http://pic.lvmama.com/uploads/pc/place2/2018-10-24/02a20c99-9477-480c-9faa-84c63a4774c0_480_320.jpg",
				}
			],
			message: '查询成功'
		}
	})

const buildcnpopover = Mock.mock(
	'/api/buildcnpopover', 'get', (req, res) => {
		return {
			code: 200,
			data: [{

				cnpopovertd: [{
						cnxingqus: '结伴同游',
						cnxingqu: '旅行视频',
					},
					{
						cnxingqus: '签证',
						cnxingqu: '旅行摄影',

					},
					{
						cnxingqus: '保险',
						cnxingqu: '户外运动',

					},
					{
						cnxingqus: '旅行购物',
						cnxingqu: '潜水俱乐部',

					},
					{
						cnxingqus: '穷游折扣',
						cnxingqu: '带孩子旅行',

					},
					{
						cnxingqus: '睡遍全球',
						cnxingqu: '带父母旅行',

					},
					{
						cnxingqus: '邮轮',
						cnxingqus: '明信片',

					},
					{
						cnxingqus: '航空',
						cnxingqu: '路刻社',

					},
					{
						cnxingqus: '自驾',
						cnxingqu: 'Discovery探索频道',

					}
				],
				cnpopoverli: [{
						cnpopoverliname: "穷游活动"
					},
					{
						cnpopoverliname: "穷游er访谈"
					},
					{
						cnpopoverliname: "穷游沙龙"
					},
					{
						cnpopoverliname: "轻年计划"
					},
					{
						cnpopoverliname: "城市漫步"
					}
				],

				cnpopoverouzhou: [{
						cnxingquouzhous: '环游欧洲',
						cnxingquouzhou: '法国/摩纳哥',

					},
					{
						cnxingquouzhous: '德国',
						cnxingquouzhou: '瑞士/列支敦士登',

					},
					{
						cnxingquouzhous: '奥地利/捷克',
						cnxingquouzhou: '斯洛伐克/匈牙利',

					},
					{
						cnxingquouzhous: '西班牙/葡萄牙',
						cnxingquouzhou: '安道尔/希腊',

					},
					{
						cnxingquouzhous: '塞浦路斯/意大利',
						cnxingquouzhou: '梵蒂冈/圣马力诺',

					},
					{
						cnxingquouzhous: '比利时/卢森堡',
						cnxingquouzhou: '波兰/立陶宛',

					},
					{
						cnxingquouzhous: '挪威/瑞典',
						cnxingquouzhou: '芬兰/丹麦',

					},
					{
						cnxingquouzhous: '拉脱维亚/爱沙尼亚',
						cnxingquouzhou: '爱尔兰/荷兰',

					},
					{
						cnxingquouzhous: '马耳他/英国',
						cnxingquouzhou: '俄罗斯/乌克兰',

					},
					{
						cnxingquouzhous: '马耳他/英国',
						cnxingquouzhou: '白俄罗斯',

					},
					{
						cnxingquouzhous: '欧洲交通',
						cnxingquouzhou: '土耳其',

					},
					{
						cnxingquouzhous: '东欧平原',
						cnxingquouzhou: '土耳其海峡',

					},
					{
						cnxingquouzhous: '地中海',
						cnxingquouzhou: '爱琴海',

					}
				],
				cnpopoveryazhou: [{
						cnxingquyazhous: "环游亚洲",
						cnxingquyazhou: "中国",

					},
					{
						cnxingquyazhous: "韩国/朝鲜",
						cnxingquyazhou: "台湾",

					},
					{
						cnxingquyazhous: "香港/澳门",
						cnxingquyazhou: "泰国",

					},
					{
						cnxingquyazhous: "越南",
						cnxingquyazhou: "缅甸",

					},
					{
						cnxingquyazhous: "马来西亚/文莱",
						cnxingquyazhou: "新加坡",

					},
					{
						cnxingquyazhous: "柬埔寨/印度",
						cnxingquyazhou: "哈萨克斯坦",

					},
					{
						cnxingquyazhous: "韩国/朝鲜",
						cnxingquyazhou: "蒙古",

					},
					{
						cnxingquyazhous: "吉尔杰斯坦/伊朗",
						cnxingquyazhou: "迪拜",

					},
					{
						cnxingquyazhous: "新几内亚/马尔代夫",
						cnxingquyazhou: "孟加拉/阿联酋",

					},
					{
						cnxingquyazhous: "以色列/东坟帝",
						cnxingquyazhou: "斐济岛",

					},
					{
						cnxingquyazhous: "阿富汗/乌兹别克斯坦",
						cnxingquyazhou: "越南",

					},
					{
						cnxingquyazhous: "不丹",
						cnxingquyazhou: "阿塞拜疆",

					},
					{
						cnxingquyazhous: "科威特",
						cnxingquyazhou: "叙利亚",

					},
					{
						cnxingquyazhous: "亚美尼亚",
						cnxingquyazhou: "巴基斯坦",

					},
					{
						cnxingquyazhous: "也门",
						cnxingquyazhou: "约旦/沙特阿拉伯",

					},
					{
						cnxingquyazhous: "卡塔尔/马来西亚",
						cnxingquyazhou: "吉尔吉斯斯坦",

					},
					{
						cnxingquyazhous: "土库曼斯坦",
						cnxingquyazhou: "巴勒斯坦/格鲁吉亚",

					},
				],
				cnpopovermeizhou: [{
						cnpopovermeizhouname: "美国"
					},
					{
						cnpopovermeizhouname: "加拿大"
					},
					{
						cnpopovermeizhouname: "墨西哥"
					},
					{
						cnpopovermeizhouname: "古巴"
					}
				],
				cnpopoverfeizhou: [{
						cnpopoverfeizhouname: "北非地区"
					},
					{
						cnpopoverfeizhouname: "东非地区"
					},
					{
						cnpopoverfeizhouname: "非洲海岛"
					},
					{
						cnpopoverfeizhouname: "非洲及其国家"
					}
				],
				cnpopoverdayangzhou: [{
						cnpopoverdayangzhouname: '澳大利亚'
					},
					{
						cnpopoverdayangzhouname: '新西兰'
					},
					{
						cnpopoverdayangzhouname: '所罗门群岛'
					},
					{
						cnpopoverdayangzhouname: '帕劳'
					},
					{
						cnpopoverdayangzhouname: '太平洋岛国'
					}

				]

			}],
			message: '查询成功'
		}
	})
const buildcon = Mock.mock(
	'/api/buildcon', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					conavter: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-05-20/a8f9e58e-6637-4eac-956b-19a13c00ffbe_300_200.jpg",
					conname: "biu biu",
					condiqu: "日本",
					condianzan: '4856',
					conhour: '3小时',
					condsc: '迪士尼乐园门票是不便宜！但是人家不但绿化很漂亮！那些演出比如：杰克船长风暴来临好看也很幽默！加勒比海盗沉落宝臧画面很壮丽！人猿泰山的表演是杂技表演！我不由自主的给了好多',
					contxt: '迪士尼朋友化身成可爱的彩蛋藏在花海中，迎接春天的到来。圆滚滚的造型、缤纷靓丽的色彩加上调皮有趣的表情，给游客带来焕然一新和青春洋溢的欢乐气息。',
					conpic: "http://pic.lvmama.com//uploads/pc/place2/2019-03-01/2366a456-4121-4f54-b06c-8f63e960db53_480_320.jpg"
				},
				{
					conavter: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
					conname: "biu love",
					condiqu: "泰国",
					condianzan: '8966',
					conhour: '1小时',
					condsc: '吉祥航空787梦幻宽体客机，往返直飞，给您舒适体验,升级住宿4+峡湾特色酒店全程含餐！5菜一汤+特别安排峡湾特色餐+北欧肉丸餐双峡湾+岩石教堂斯德市政厅入内+皇后岛+菲耶巴卡赫尔辛基半天自由活动',
					contxt: '哈当厄尔峡湾游船：乘船遨游峡湾，两岸奇峰怪石、农田果树令人心神荡漾，忘却尘嚣；沃尔令斯大瀑布：挪威很火瀑布，水幕层层叠叠，声势浩大图尔库：芬兰的古老城市，漫步其中，感受中世纪情怀。',
					conpic: "http://pic.lvmama.com/uploads/pc/place2/2017-12-29/796fbe4f-d4ec-4c4b-9f60-80cae821a3eb_480_320.jpg"
				},
				{
					conavter: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
					conname: "biu love",
					condiqu: "泰国",
					condianzan: '8966',
					conhour: '1小时',
					condsc: '吉祥航空787梦幻宽体客机，往返直飞，给您舒适体验,升级住宿4+峡湾特色酒店全程含餐！5菜一汤+特别安排峡湾特色餐+北欧肉丸餐双峡湾+岩石教堂斯德市政厅入内+皇后岛+菲耶巴卡赫尔辛基半天自由活动',
					contxt: '哈当厄尔峡湾游船：乘船遨游峡湾，两岸奇峰怪石、农田果树令人心神荡漾，忘却尘嚣；沃尔令斯大瀑布：挪威很火瀑布，水幕层层叠叠，声势浩大图尔库：芬兰的古老城市，漫步其中，感受中世纪情怀。',
					conpic: "http://pic.lvmama.com/uploads/pc/place2/2017-12-29/796fbe4f-d4ec-4c4b-9f60-80cae821a3eb_480_320.jpg"
				},
				{
					conavter: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
					conname: "biu love",
					condiqu: "泰国",
					condianzan: '8966',
					conhour: '1小时',
					condsc: '吉祥航空787梦幻宽体客机，往返直飞，给您舒适体验,升级住宿4+峡湾特色酒店全程含餐！5菜一汤+特别安排峡湾特色餐+北欧肉丸餐双峡湾+岩石教堂斯德市政厅入内+皇后岛+菲耶巴卡赫尔辛基半天自由活动',
					contxt: '哈当厄尔峡湾游船：乘船遨游峡湾，两岸奇峰怪石、农田果树令人心神荡漾，忘却尘嚣；沃尔令斯大瀑布：挪威很火瀑布，水幕层层叠叠，声势浩大图尔库：芬兰的古老城市，漫步其中，感受中世纪情怀。',
					conpic: "http://pic.lvmama.com/uploads/pc/place2/2017-12-29/796fbe4f-d4ec-4c4b-9f60-80cae821a3eb_480_320.jpg"
				},
				{
					conavter: "//pics.lvjs.com.cn/pics//uploads/pc/place2/2017-12-29/21415a82-3831-4983-b26c-62f16ff857ee_300_200.jpg",
					conname: "biu love",
					condiqu: "泰国",
					condianzan: '8966',
					conhour: '1小时',
					condsc: '吉祥航空787梦幻宽体客机，往返直飞，给您舒适体验,升级住宿4+峡湾特色酒店全程含餐！5菜一汤+特别安排峡湾特色餐+北欧肉丸餐双峡湾+岩石教堂斯德市政厅入内+皇后岛+菲耶巴卡赫尔辛基半天自由活动',
					contxt: '哈当厄尔峡湾游船：乘船遨游峡湾，两岸奇峰怪石、农田果树令人心神荡漾，忘却尘嚣；沃尔令斯大瀑布：挪威很火瀑布，水幕层层叠叠，声势浩大图尔库：芬兰的古老城市，漫步其中，感受中世纪情怀。',
					conpic: "http://pic.lvmama.com/uploads/pc/place2/2017-12-29/796fbe4f-d4ec-4c4b-9f60-80cae821a3eb_480_320.jpg"
				},
			],
			message: '查询成功'
		}
	})
const buildjieban = Mock.mock(
	'/api/buildjieban', 'get', (req, res) => {
		return {
			code: 200,
			data: [


				{
					jiebanavter: "//pic.lvmama.com/uploads/pc/place2/2019-03-24/e086b2bd-f11f-4456-aa1c-2b43a5fbf06b_480_320.jpg",
					jiebanname: "情怀 love",
					jiebanliulan: '12536',
					jiebanhuifu: '2563',
					jiebantime: '15分钟',
					jiebantxt: '旅游攻略论坛：结伴同游6月法国1女求捡或被捡！ 觅靠谱小伙伴拼吃拼玩拼车拼住宿。自由行经验丰富',
					jiebanchufa: '2019-6-1',
					jiebanfancheng: '2019-6-9',
					jiebanmudi: '卢瓦尔河谷、巴黎'
				},
				{
					jiebanavter: "//pic.lvmama.com/uploads/pc/place2/2019-03-24/e086b2bd-f11f-4456-aa1c-2b43a5fbf06b_480_320.jpg",
					jiebanname: "情怀 love",
					jiebanliulan: '12536',
					jiebanhuifu: '2563',
					jiebantime: '15分钟',
					jiebantxt: '旅游攻略论坛：结伴同游6月法国1女求捡或被捡！ 觅靠谱小伙伴拼吃拼玩拼车拼住宿。自由行经验丰富',
					jiebanchufa: '2019-6-1',
					jiebanfancheng: '2019-6-9',
					jiebanmudi: '卢瓦尔河谷、巴黎'
				},
				{
					jiebanavter: "//pic.lvmama.com/uploads/pc/place2/2019-03-24/e086b2bd-f11f-4456-aa1c-2b43a5fbf06b_480_320.jpg",
					jiebanname: "情怀 love",
					jiebanliulan: '12536',
					jiebanhuifu: '2563',
					jiebantime: '15分钟',
					jiebantxt: '旅游攻略论坛：结伴同游6月法国1女求捡或被捡！ 觅靠谱小伙伴拼吃拼玩拼车拼住宿。自由行经验丰富',
					jiebanchufa: '2019-6-1',
					jiebanfancheng: '2019-6-9',
					jiebanmudi: '卢瓦尔河谷、巴黎'
				},
				{
					jiebanavter: "//pic.lvmama.com/uploads/pc/place2/2019-03-24/e086b2bd-f11f-4456-aa1c-2b43a5fbf06b_480_320.jpg",
					jiebanname: "情怀 love",
					jiebanliulan: '12536',
					jiebanhuifu: '2563',
					jiebantime: '15分钟',
					jiebantxt: '旅游攻略论坛：结伴同游6月法国1女求捡或被捡！旅游攻略论坛：结伴同游6月法国1女求捡或被捡！ 觅靠谱小伙伴拼吃拼玩拼车拼住宿。自由行经验丰富 觅靠谱小伙伴拼吃拼玩拼车拼住宿。自由行经验丰富',
					jiebanchufa: '2019-6-1',
					jiebanfancheng: '2019-6-9',
					jiebanmudi: '卢瓦尔河谷、巴黎'
				}


			],
			message: '查询成功'
		}
	})
const buildzlcli = Mock.mock(
	'/api/buildzlcli', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					zlctitle: "穷游兴趣小组",


					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{
					zlctitle: "穷游欧洲",


					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "穷游亚洲",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "穷游北美洲",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "穷游大洋洲",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "穷游非洲",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "穷游南美洲",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "线上线下",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				},
				{

					zlctitle: "后院",
					zlclicontent: [{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
						{
							zlcpic: '//pic.lvmama.com/uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_480_320.jpg',
							zlcname: '直飞日本',
							zlctxt: '2小时即可开启完美旅程'
						},
					],

				}


			],
			message: '查询成功'
		}
	})
const builddtdl = Mock.mock(
	'/api/builddtdl', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					dtname: '兴趣小组',
					dl: [{
							dlname: '结伴旅行',
							link: '/Thread_CompanionsList',
							linkid: 1
						},
						{
							dlname: '签证',
							link: '',
							linkid: 2
						},
						{
							dlname: '旅行摄影',
							link: '',
							linkid: 3
						},
						{
							dlname: '潜水俱乐部',
							link: '',
							linkid: 4
						},
						{
							dlname: '带孩子旅行',
							link: '',
							linkid: 5
						},
						{
							dlname: '自驾',
							link: '',
							linkid: 6
						}
					],
				},
				{
					dtname: '穷游欧洲',
					dl: [{
							dlname: '法国/摩洛哥',
							link: '',
							linkid: 1
						},
						{
							dlname: '德国',
							link: '',
							linkid: 2
						},
						{
							dlname: '英国',
							link: '',
							linkid: 3
						},
						{
							dlname: '西班牙',
							link: '',
							linkid: 4
						},
						{
							dlname: '葡萄牙',
							link: '',
							linkid: 5
						},
						{
							dlname: '芬兰',
							link: '',
							linkid: 6
						},
						{
							dlname: '德国',
							link: '',
							linkid: 7
						},
						{
							dlname: '土耳其',
							link: '',
							linkid: 8
						},
						{
							dlname: '挪威',
							link: '',
							linkid: 9
						},
						{
							dlname: '丹麦',
							link: '',
							linkid: 10
						},
						{
							dlname: '冰岛',
							link: '',
							linkid: 11
						},
						{
							dlname: '焚帝冈',
							link: '',
							linkid: 12
						},
						{
							dlname: '意大利',
							link: '',
							linkid: 13
						},
						{
							dlname: '瑞士',
							link: '',
							linkid: 14
						},
						{
							dlname: '白俄罗斯',
							link: '',
							linkid: 15
						},
					],
				},
				{
					dtname: '穷游压洲',
					dl: [{
							dlname: '蒙古/台湾',
							link: '',
							linkid: 1
						},
						{
							dlname: '朝鲜',
							link: '',
							linkid: 2
						},
						{
							dlname: '中国',
							link: '',
							linkid: 3
						},
						{
							dlname: '韩国',
							link: '',
							linkid: 4
						},
						{
							dlname: '印度',
							link: '',
							linkid: 5
						},
						{
							dlname: '柬埔寨',
							link: '',
							linkid: 6
						},
						{
							dlname: '缅甸',
							link: '',
							linkid: 7
						},
						{
							dlname: '孟加拉',
							link: '',
							linkid: 8
						},
						{
							dlname: '巴基斯坦',
							link: '',
							linkid: 9
						},
						{
							dlname: '哈萨克斯坦',
							link: '',
							linkid: 10
						},
						{
							dlname: '吉尔吉斯坦',
							link: '',
							linkid: 11
						},
						{
							dlname: '伊朗',
							link: '',
							linkid: 12
						},
						{
							dlname: '日本',
							link: '',
							linkid: 13
						},
						{
							dlname: '迪拜',
							link: '',
							linkid: 14
						},
						{
							dlname: '科威特',
							link: '',
							linkid: 15
						},
						{
							dlname: '叙利亚',
							link: '',
							linkid: 16
						},
						{
							dlname: '俄罗斯',
							link: '',
							linkid: 17
						},
						{
							dlname: '马尔代夫',
							link: '',
							linkid: 17
						},
						{
							dlname: '香港',
							link: '',
							linkid: 18
						},
						{
							dlname: '文莱',
							link: '',
							linkid: 19
						},
						{
							dlname: '新加坡',
							link: '',
							linkid: 20
						},
					],
				},
				{
					dtname: '北美洲',
					dl: [{
							dlname: '加拿大',
							link: '',
							linkid: 1
						},
						{
							dlname: '美国',
							link: '',
							linkid: 2
						},
						{
							dlname: '墨西哥',
							link: '',
							linkid: 3
						},
						{
							dlname: '古巴',
							link: '',
							linkid: 4
						},
						{
							dlname: '牙买加',
							link: '',
							linkid: 5
						},
						{
							dlname: '巴拿马共和国',
							link: '',
							linkid: 6
						},
						{
							dlname: '危地马拉共和国',
							link: '',
							linkid: 8
						},
						{
							dlname: '伯里兹',
							link: '',
							linkid: 9
						},
						{
							dlname: '洪都拉斯共和国',
							link: '',
							linkid: 10
						},
						{
							dlname: '洪都拉斯共和国',
							link: '',
							linkid: 11
						}
					],
				},
				{
					dtname: '南美洲',
					dl: [{
							dlname: '厄瓜多尔',
							link: '',
							linkid: 1
						},
						{
							dlname: '哥伦比亚',
							link: '',
							linkid: 2
						},
						{
							dlname: '委内瑞拉',
							link: '',
							linkid: 3
						},
						{
							dlname: '秘鲁',
							link: '',
							linkid: 4
						},
						{
							dlname: '巴西',
							link: '',
							linkid: 5
						},
						{
							dlname: '智利',
							link: '',
							linkid: 6
						},
						{
							dlname: '乌拉圭',
							link: '',
							linkid: 8
						},
						{
							dlname: '巴拉圭',
							link: '',
							linkid: 9
						},
						{
							dlname: '阿根廷',
							link: '',
							linkid: 10
						},
						{
							dlname: '利维亚',
							link: '',
							linkid: 11
						},
						{
							dlname: '苏里南',
							link: '',
							linkid: 12
						},
						{
							dlname: '法属圭亚那',
							link: '',
							linkid: 13
						},
						{
							dlname: '福克兰群岛',
							link: '',
							linkid: 14
						},
						{
							dlname: '南乔治亚岛',
							link: '',
							linkid: 15
						},
						{
							dlname: '南桑威奇群岛',
							link: '',
							linkid: 16
						},

					],
				},
				{
					dtname: '大洋洲',
					dl: [{
							dlname: '澳大利亚',
							link: '',
							linkid: 1
						},
						{
							dlname: '新西兰',
							link: '',
							linkid: 2
						},
						{
							dlname: '太平洋群岛',
							link: '',
							linkid: 3
						},

					],
				},
				{
					dtname: '非洲',
					dl: [{
							dlname: '东非地区',
							link: '',
							linkid: 1
						},
						{
							dlname: '西非地区',
							link: '',
							linkid: 2
						},
						{
							dlname: '南非',
							link: '',
							linkid: 3
						},

					],
				},
			],
			message: '查询成功'
		}
	})
const buildcoutryCom = Mock.mock(
	'/api/buildcoutryCom', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{

					ouzhoucoutry: [{
							countryname: '法国/摩洛哥',

							coutrycountryid: 1
						},
						{
							countryname: '德国',

							coutrycountryid: 2
						},
						{
							countryname: '英国',

							coutrycountryid: 3
						},
						{
							countryname: '西班牙',

							coutrycountryid: 4
						},
						{
							countryname: '葡萄牙',

							coutrycountryid: 5
						},
						{
							countryname: '芬兰',

							coutrycountryid: 6
						},
						{
							countryname: '德国',

							linkid: 7
						},
						{
							countryname: '土耳其',

							coutrycountryid: 8
						},
						{
							countryname: '挪威',

							coutrycountryid: 9
						},
						{
							countryname: '丹麦',

							coutrycountryid: 10
						},
						{
							countryname: '冰岛',

							coutrycountryid: 11
						},
						{
							countryname: '焚帝冈',

							coutrycountryid: 12
						},
						{
							countryname: '意大利',

							coutrycountryid: 13
						},
						{
							countryname: '瑞士',

							coutrycountryid: 14
						},
						{
							countryname: '白俄罗斯',

							coutrycountryid: 15
						},
					],
					yazhoucoutry: [{
							countryname: '蒙古/台湾',
							link: '',
							countryid: 1
						},
						{
							countryname: '朝鲜',
							link: '',
							countryid: 2
						},
						{
							countryname: '中国',
							link: '',
							countryid: 3
						},
						{
							countryname: '韩国',
							link: '',
							countryid: 4
						},
						{
							countryname: '印度',
							link: '',
							countryid: 5
						},
						{
							countryname: '柬埔寨',
							link: '',
							countryid: 6
						},
						{
							countryname: '缅甸',
							link: '',
							countryid: 7
						},
						{
							countryname: '孟加拉',
							link: '',
							countryid: 8
						},
						{
							countryname: '巴基斯坦',
							link: '',
							countryid: 9
						},
						{
							countryname: '哈萨克斯坦',
							link: '',
							countryid: 10
						},
						{
							countryname: '吉尔吉斯坦',
							link: '',
							countryid: 11
						},
						{
							dlname: '伊朗',
							link: '',
							countryid: 12
						},
						{
							countryname: '日本',
							link: '',
							countryid: 13
						},
						{
							countryname: '迪拜',
							link: '',
							countryid: 14
						},
						{
							countryname: '科威特',
							link: '',
							countryid: 15
						},
						{
							countryname: '叙利亚',
							link: '',
							countryid: 16
						},
						{
							countryname: '俄罗斯',
							link: '',
							linkid: 17
						},
						{
							countryname: '马尔代夫',
							link: '',
							countryid: 17
						},
						{
							countryname: '香港',
							link: '',
							countryid: 18
						},
						{
							countryname: '文莱',
							link: '',
							countryid: 19
						},
						{
							countryname: '新加坡',
							link: '',
							countryid: 20
						},
					],
					meizhoucoutry: [{
							countryname: '加拿大',
							link: '',
							countryid: 1
						},
						{
							countryname: '美国',
							link: '',
							countryid: 2
						},
						{
							countryname: '墨西哥',
							link: '',
							countryid: 3
						},
						{
							countryname: '古巴',
							link: '',
							countryid: 4
						},
						{
							countryname: '牙买加',
							link: '',
							countryid: 5
						},
						{
							countryname: '巴拿马共和国',
							link: '',
							countryid: 6
						},
						{
							countryname: '危地马拉共和国',
							link: '',
							countryid: 8
						},
						{
							countryname: '伯里兹',
							link: '',
							linkid: 9
						},
						{
							countryname: '洪都拉斯共和国',
							link: '',
							countryid: 10
						},
						{
							countryname: '洪都拉斯共和国',
							link: '',
							countryid: 11
						},
						{
							countryname: '厄瓜多尔',
							link: '',
							countryid: 1
						},
						{
							countryname: '哥伦比亚',
							link: '',
							countryid: 2
						},
						{
							countryname: '委内瑞拉',
							link: '',
							countryid: 3
						},
						{
							countryname: '秘鲁',
							link: '',
							countryid: 4
						},
						{
							countryname: '巴西',
							link: '',
							countryid: 5
						},
						{
							countryname: '智利',
							link: '',
							countryid: 6
						},
						{
							countryname: '乌拉圭',
							link: '',
							countryid: 8
						},
						{
							countryname: '巴拉圭',
							link: '',
							countryid: 9
						},
						{
							countryname: '阿根廷',
							link: '',
							linkid: 10
						},
						{
							countryname: '利维亚',
							link: '',
							countryid: 11
						},
						{
							countryname: '苏里南',
							link: '',
							countryid: 12
						},
						{
							countryname: '法属圭亚那',
							link: '',
							countryid: 13
						},
						{
							countryname: '福克兰群岛',
							link: '',
							countryid: 14
						},
						{
							countryname: '南乔治亚岛',
							link: '',
							countryid: 15
						},
						{
							countryname: '南桑威奇群岛',
							link: '',
							countryid: 16
						},
					],
					dayangzhoucoutry: [{
							countryname: '澳大利亚',
							link: '',
							countryid: 1
						},
						{
							countryname: '新西兰',
							link: '',
							countryid: 2
						},
						{
							countryname: '太平洋群岛',
							link: '',
							countryid: 3
						},

					],
					feizhoucoutry: [{
							countryname: '东非地区',
							link: '',
							countryid: 1
						},
						{
							countryname: '西非地区',
							link: '',
							countryid: 2
						},
						{
							countryname: '南非',
							link: '',
							countryid: 3
						},
					]


				},


			],
			message: '查询成功'
		}
	})
const buildgotimes = Mock.mock(
	'/api/buildgotimes', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					gotime: "不限"
				},
				{
					gotime: "2019",

				},
				{
					gotime: "5月"
				},
				{
					gotime: "6月"
				},
				{
					gotime: "7月"
				},
				{
					gotime: "8月"
				},
				{
					gotime: "9月"
				},
				{
					gotime: "10月"
				},
				{
					gotime: "11月"
				},
				{
					gotime: "12月"
				},
				{
					gotime: "假日"
				}
			],
			message: '查询成功'
		}
	})

const buildComcrad = Mock.mock(
	'/api/buildComcrad', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				},
				{
					Comcradimg: '//pics.lvjs.com.cn/pics//uploads/pc/place2/2019-03-05/47357176-69ba-4e16-8517-1b52e4c5ace4_300_200.jpg',
					Comcradtitle: "六月最后两周都可以，一起share酒店和路上的车，有愿意的人请微信thecity",
					Comcradavter: 'http://s3.lvjs.com.cn//uploads/pc/place2/2019-04-26/955e2b94-ba2e-4007-a237-5d9ad5a6a44f_480_320.jpg',
					Comcradname: 'Apple Love',
					Comcradmudidi: '东京，京都，大阪',
					Comcradgotime: '2019-6-5',
					Comcradfanhuitime: '2019-6-15'
				}
			],
			message: '查询成功'
		}
	})

const buildcheckbox = Mock.mock(
	'/api/buildcheckbox', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					value: 1,
					valuename: "我要拼车"
				},
				{
					value: 2,
					valuename: "我要拼房"
				}
			],
			message: '查询成功'
		}
	})
const buildgotimehot = Mock.mock(
	'/api/buildgotimehot', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotcountry: "法国"
				},
				{
					hotcountry: "马来西亚"
				},
				{
					hotcountry: "泰国"
				},
				{
					hotcountry: "韩国"
				},
				{
					hotcountry: "伦敦"
				},
				{
					hotcountry: "新德里"
				},
				{
					hotcountry: "柬埔寨"
				},
				{
					hotcountry: "纽约"
				},
				{
					hotcountry: "华盛顿"
				},
				{
					hotcountry: "巴西"
				},
				{
					hotcountry: "土耳其"
				},
				{
					hotcountry: "阿根廷"
				},
				{
					hotcountry: "俄罗斯"
				},
				{
					hotcountry: "孟加拉"
				},
				{
					hotcountry: "巴基斯坦"
				},
				{
					hotcountry: "迪拜"
				},
				{
					hotcountry: "科威特"
				},
				{
					hotcountry: "伊朗"
				},
				{
					hotcountry: "伊拉克"
				},
				{
					hotcountry: "葡萄牙"
				},
				{
					hotcountry: "西班牙"
				},
				{
					hotcountry: "德国"
				}

			],
			message: '查询成功'
		}
	})
const buildgotimeyazhou = Mock.mock(
	'/api/buildgotimeyazhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotcountry: '中国'
				},
				{
					hotcountry: '台湾'
				},
				{
					hotcountry: '香港'
				},
				{
					hotcountry: '菲律宾'
				},
				{
					hotcountry: '日本'
				}

			],
			message: '查询成功'
		}
	})
const buildgotimeouzhou = Mock.mock(
	'/api/buildgotimeouzhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotcountry: '英国'
				},
				{
					hotcountry: '芬兰'
				},
				{
					hotcountry: '德国'
				},
				{
					hotcountry: '英国'
				}

			],
			message: '查询成功'
		}
	})
const buildgotimebeimeizhou = Mock.mock(
	'/api/buildgotimebeimeizhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					hotcountry: '美国'
				},
				{
					hotcountry: '加拿大'
				},
				{
					hotcountry: '墨西哥'
				},
				{
					hotcountry: '古巴'
				}

			],
			message: '查询成功'
		}
	})
const buildgotimenanmeizhou = Mock.mock(
	'/api/buildgotimenanmeizhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					hotcountry: '阿根廷'
				},
				{
					hotcountry: '巴西'
				},
				{
					hotcountry: '上岛'
				},
				{
					hotcountry: '古巴'
				}
			],
			message: '查询成功'
		}
	})
const buildgotimedayangzhou = Mock.mock(
	'/api/buildgotimedayangzhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotcountry: '澳大利亚'
				},
				{
					hotcountry: '新西兰'
				},
				{
					hotcountry: '新几内亚'
				},

			],
			message: '查询成功'
		}
	})
const buildgotimefeizhou = Mock.mock(
	'/api/buildgotimefeizhou', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					hotcountry: '北非地区'
				},
				{
					hotcountry: '中非地区'
				},
				{
					hotcountry: '南非地区'
				},

			],
			message: '查询成功'
		}
	})
const buildcrumnav = Mock.mock(
	'/api/buildcrumnav', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					mohubg: '//pics.lvjs.com.cn/uploads/pc/place2/2019-05-16/eca4ff07-bba6-4cb7-baf7-e478ec3c0a61.jpg',
					crumnavimg: '//pics.lvjs.com.cn/uploads/pc/place2/2019-05-16/eca4ff07-bba6-4cb7-baf7-e478ec3c0a61.jpg',
					crumnavnumber: '2亿',
					crumnavnow: '25026人',
					crumnavmoth: '363997人'
				},

			],
			message: '查询成功'
		}
	})
const buildvbanner = Mock.mock(
	'/api/buildvbanner', 'get', (req, res) => {
		return {
			code: 200,
			data: [

				{
					vbannerimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-03-24/b3492b4b-c33f-4e65-a8ba-44b445fc855c_300_200.jpg',
					vaterimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-03-24/b3492b4b-c33f-4e65-a8ba-44b445fc855c_300_200.jpg',
					vbannertitle: '泰国曼谷三日行',
					Visabannerid: 1,
					vbannerdsc: '超详细冰岛签证筹备&递签（无电调）7个工作日出签！4.25深圳丹麦中心递签分享-完整版（附演练版电调问题清单）',

				},
				{
					vbannerimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-04-30/243009d5-9cf6-41c0-9153-3474d153d93b_300_200.jpg',
					vaterimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-03-24/b3492b4b-c33f-4e65-a8ba-44b445fc855c_300_200.jpg',
					vbannertitle: '泰国曼谷三日行',
					Visabannerid: 2,
					vbannerdsc: '超详细冰岛签证筹备&递签（无电调）7个工作日出签！4.25深圳丹麦中心递签分享-完整版（附演练版电调问题清单）',

				},
				{
					vbannerimg: '//pics.lvjs.com.cn//uploads/pc/place2/2018-03-27/512ee636-16df-4b7b-a6ed-c5ce669d34a1_300_200.jpg',
					vaterimg: '//pics.lvjs.com.cn//uploads/pc/place2/2019-03-24/b3492b4b-c33f-4e65-a8ba-44b445fc855c_300_200.jpg',
					vbannertitle: '泰国曼谷三日行',
					Visabannerid: 3,
					vbannerdsc: '超详细冰岛签证筹备&递签（无电调）7个工作日出签！4.25深圳丹麦中心递签分享-完整版（附演练版电调问题清单）',

				}

			],
			message: '查询成功'
		}
	})
const buildqianzheng = Mock.mock(
	'/api/buildqianzheng', 'get', (req, res) => {
		return {
			code: 200,
			data: [{
					qianzhengid: 1,
					qianzhengimg: '//common1.qyerstatic.com/bbs/old/images/list/Korea.jpg',
					qianzhengcountry: '韩国',
					qianzhengjiage: '236'

				},
				{
					qianzhengid: 2,
					qianzhengimg: '//common1.qyerstatic.com/bbs/old/images/list/Australia.jpg',
					qianzhengcountry: '澳大利亚',
					qianzhengjiage: '836'

				},
				{
					qianzhengid: 3,
					qianzhengimg: '//common1.qyerstatic.com/bbs/old/images/list/Thailand.jpg',
					qianzhengcountry: '泰国',
					qianzhengjiage: '156'

				}

			],
			message: '查询成功'
		}
	})
export default {
	buildqianzheng,
	buildvbanner,
	buildgotimefeizhou,
	buildgotimedayangzhou,
	buildgotimenanmeizhou,
	buildgotimebeimeizhou,
	buildgotimeouzhou,
	buildgotimeyazhou,
	buildcheckbox,
	buildComcrad,
	buildgotimehot,
	buildcoutryCom,
	builddtdl,
	buildwebswiper,
	buildpopoverdiv,
	buildlayoutuijian,
	buildqshop,
	buildyoujic,
	buildtrys,
	buildsearchhotCity,
	buildsearchhotCitys,
	builddescity,
	builddesczhu,
	builddesczhuy,
	builddesguojia,
	builddetailswiper,
	builddetailswipercontent,
	builddesbase,
	builddestinationcontent,
	buildxingcheng,
	buildqshops,
	buildcityq,
	buildStrategy,
	buildaibase,
	buildaizcontent,
	buildquestionanswer,
	buildyoujilist,
	buildnavbars,
	buildqyou,
	buildstrategy_breadcrumb,
	buildplcTopBar,
	buildstrategy_list,
	buildqyWrap,
	buildzl,
	buildplcPoiList,
	buildCountry_breadcrumb,
	buildCountryplcTopBar,
	buildplcMenuBarHolder,
	buildhotcity,
	buildweijing,
	buildgo,
	buildplcFocusOperate,
	buildplcCitylist,
	buildmguide,
	buildsearch_chose,
	buildLandscape,
	buildLandscpaemain,
	buildcommentlist,
	buildcomwenda,
	buildContinentbramd,
	buildplatopbar,
	buildcontryul,
	buildcountrylist,
	buildyoujilists,
	buildthreadbanner,
	buildcnpopover,
	buildjieban,
	buildzlcli
}
