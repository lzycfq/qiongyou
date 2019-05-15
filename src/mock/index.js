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
				luvxing: [{
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
				zhuti: [{
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
					plcFocusPhoto:[
						{
							plcimg:'http://s3.lvjs.com.cn//uploads/pc/place2/2018-07-05/8cfc754f-0333-4f38-a5c3-4f89dc27a665.jpg'
						},
						{
							plcimg:'http://s1.lvjs.com.cn//uploads/pc/place2/2018-08-07/6279be70-daab-4563-b420-62c8d1dc9d02.jpg'
						},
						{
							plcimg:'http://s2.lvjs.com.cn//uploads/pc/place2/2018-07-05/f7150935-ebf0-4e9b-8de0-3070bd4d1569.jpg'
						},
						{
							plcimg:'http://s3.lvjs.com.cn//uploads/pc/place2/2018-07-05/dcc3bee4-2b72-43e7-8bfe-390985346655.jpg'
						}
					],
					plcnumber:"89657"
				}
			],
			message: '查询成功'
		}
	})
	const buildhotcity = Mock.mock(
		'/api/buildhotcity', 'get', (req, res) => {
			return {
				code: 200,
				data: [
					{
						hotname:"东京",
						morecitynumber:"2563",
						hotcitybanner:[
							{
								hotcitybannercontent:[
									{
										Citylistid:1,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2019-04-11/c30a366c-2e6b-4971-9b4e-5d55f032eb21_300_200.jpg',
										citylistname:"东京",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'浅草寺'
											},
											{
												Landscapeid:2,
												Landscapename:'东京塔'
											},
											{
												Landscapeid:3,
												Landscapename:'涩谷区'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'台场'
											},
											{
												Landscapeid:6,
												Landscapename:'上野公园'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:2,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2018-06-11/19019a65-f7d5-433c-b7e6-d4d457990740_300_200.jpg',
										citylistname:"大阪",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'大阪城天守阁'
											},
											{
												Landscapeid:2,
												Landscapename:'大阪城公园'
											},
											{
												Landscapeid:3,
												Landscapename:'环球影视'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'台场'
											},
											{
												Landscapeid:6,
												Landscapename:'上野公园'
											},
										
										],
									},
									
									{
										Citylistid:3,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2016-05-30/3ffa527e-ac92-4e7f-98cd-41b02102aa85_300_200.jpg',
										citylistname:"京都",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'清水寺'
											},
											{
												Landscapeid:2,
												Landscapename:'二条城'
											},
											{
												Landscapeid:3,
												Landscapename:'环球影视'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'花见小路'
											},
											{
												Landscapeid:6,
												Landscapename:'八坂神社'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:4,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2017-10-12/82737c6d-420d-47f0-a0cd-4815dfe82bb5_300_200.jpg',
										citylistname:"札幌",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'大通公园'
											},
											{
												Landscapeid:2,
												Landscapename:'白色恋人公园'
											},
											{
												Landscapeid:3,
												Landscapename:'札幌电视塔'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'花见小路'
											},
											{
												Landscapeid:6,
												Landscapename:'八坂神社'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:5,
										citylistimg:'//pics.lvjs.com.cn/pics//uploads/pc/place_vst/hotels/1246/12466/_i_Mobile640_960_0000im0U_300_200.jpg',
										citylistname:"箱根",
								
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'箱根'
											},
											{
												Landscapeid:2,
												Landscapename:'大涌谷'
											},
											{
												Landscapeid:3,
												Landscapename:'芦之湖'
											},
											{
												Landscapeid:4,
												Landscapename:'箱根神社'
											},
											{
												Landscapeid:5,
												Landscapename:'箱根强罗公园'
											},
											{
												Landscapeid:6,
												Landscapename:'箱根海贼船'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:6,
										citylistimg:'//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-06-20/0f09f0f2-629d-4b64-a711-2d43509484a5_300_200.jpg',
										citylistname:"箱根",				
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'富士山地区'
											},
											{
												Landscapeid:2,
												Landscapename:'河口湖'
											},
											{
												Landscapeid:3,
												Landscapename:'忍野八海'
											},
											{
												Landscapeid:4,
												Landscapename:'河口湖站'
											},
											{
												Landscapeid:5,
												Landscapename:'天上山公园'
											},
											{
												Landscapeid:6,
												Landscapename:'箱根海贼船'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
								]
							},
							{
								hotcitybannercontent:[
									{
										Citylistid:1,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2019-04-11/c30a366c-2e6b-4971-9b4e-5d55f032eb21_300_200.jpg',
										citylistname:"东京",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'浅草寺'
											},
											{
												Landscapeid:2,
												Landscapename:'东京塔'
											},
											{
												Landscapeid:3,
												Landscapename:'涩谷区'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'台场'
											},
											{
												Landscapeid:6,
												Landscapename:'上野公园'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:2,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2018-06-11/19019a65-f7d5-433c-b7e6-d4d457990740_300_200.jpg',
										citylistname:"大阪",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'大阪城天守阁'
											},
											{
												Landscapeid:2,
												Landscapename:'大阪城公园'
											},
											{
												Landscapeid:3,
												Landscapename:'环球影视'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'台场'
											},
											{
												Landscapeid:6,
												Landscapename:'上野公园'
											},
										
										],
									},
									
									{
										Citylistid:3,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2016-05-30/3ffa527e-ac92-4e7f-98cd-41b02102aa85_300_200.jpg',
										citylistname:"京都",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'清水寺'
											},
											{
												Landscapeid:2,
												Landscapename:'二条城'
											},
											{
												Landscapeid:3,
												Landscapename:'环球影视'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'花见小路'
											},
											{
												Landscapeid:6,
												Landscapename:'八坂神社'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:4,
										citylistimg:'//pics.lvjs.com.cn//uploads/pc/place2/2017-10-12/82737c6d-420d-47f0-a0cd-4815dfe82bb5_300_200.jpg',
										citylistname:"札幌",
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'大通公园'
											},
											{
												Landscapeid:2,
												Landscapename:'白色恋人公园'
											},
											{
												Landscapeid:3,
												Landscapename:'札幌电视塔'
											},
											{
												Landscapeid:4,
												Landscapename:'皇居'
											},
											{
												Landscapeid:5,
												Landscapename:'花见小路'
											},
											{
												Landscapeid:6,
												Landscapename:'八坂神社'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:5,
										citylistimg:'//pics.lvjs.com.cn/pics//uploads/pc/place_vst/hotels/1246/12466/_i_Mobile640_960_0000im0U_300_200.jpg',
										citylistname:"箱根",
								
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'箱根'
											},
											{
												Landscapeid:2,
												Landscapename:'大涌谷'
											},
											{
												Landscapeid:3,
												Landscapename:'芦之湖'
											},
											{
												Landscapeid:4,
												Landscapename:'箱根神社'
											},
											{
												Landscapeid:5,
												Landscapename:'箱根强罗公园'
											},
											{
												Landscapeid:6,
												Landscapename:'箱根海贼船'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
											},
										],
									},
									{
										Citylistid:6,
										citylistimg:'//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-06-20/0f09f0f2-629d-4b64-a711-2d43509484a5_300_200.jpg',
										citylistname:"箱根",				
										Landscape:[
											{
												Landscapeid:1,
												Landscapename:'富士山地区'
											},
											{
												Landscapeid:2,
												Landscapename:'河口湖'
											},
											{
												Landscapeid:3,
												Landscapename:'忍野八海'
											},
											{
												Landscapeid:4,
												Landscapename:'河口湖站'
											},
											{
												Landscapeid:5,
												Landscapename:'天上山公园'
											},
											{
												Landscapeid:6,
												Landscapename:'箱根海贼船'
											},
											{
												Landscapeid:7,
												Landscapename:' 新宿三丁目歌舞伎町'
											},
											{
												Landscapeid:8,
												Landscapename:' 明治神宫'
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
						
								wjcountry:"日本",
								moreweijinnumber:'5232',
								weijnbanner:[
									{
										weijnbannercontent:[
											{
												mguidedetailid:1,
												wjtitle:"北海道温泉大比拼",
												pois:10,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
												wjusername:"nice pert",
												wjtext:"京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"大阪美食惠",
												pois:7,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
												wjusername:"shenqu love",
												wjtext:"筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"京都豆腐节",
												pois:8,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
												wjusername:"乡村豆腐",
												wjtext:"除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"
												
											}
										],								
									},
										{
										weijnbannercontent:[
											{
												mguidedetailid:1,
												wjtitle:"北海道温泉大比拼",
												pois:10,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
												wjusername:"nice pert",
												wjtext:"京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"大阪美食惠",
												pois:7,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
												wjusername:"shenqu love",
												wjtext:"筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"京都豆腐节",
												pois:8,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
												wjusername:"乡村豆腐",
												wjtext:"除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"
												
											}
										],								
									},
										{
										weijnbannercontent:[
											{
												mguidedetailid:1,
												wjtitle:"北海道温泉大比拼",
												pois:10,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2017-12-06/01fbfd74-7de6-4386-bdbd-9c2b9fd9e14d_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2017-11-07/ae34cfaf-8443-4c64-bba5-54d167a0ad27_300_200.jpg",
												wjusername:"nice pert",
												wjtext:"京都美食不仅在日本有很高评价，也闻名世界。在米其林集团于日本出版的5本红色指南中，京都星级餐厅数仅次于东京。结合京都的人文传统，其收入的餐厅大多为京料理、怀石料理等传统日本料理（若非美食专业研究者可将怀石料理与会席料理同一认识），这些餐厅在时令、料理、器皿、环境乃至文化方面具有相当高的水准，非常值得一试。对于游客来说，如何在预算有限的情况下品尝到地道的京都美食，不仅是满足口腹之欲，更是感受日本传统食文化的现实需求。现将位于京都，每餐最低消费人均在8000日元以下，入选米其林指南并获得星级评价，。"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"大阪美食惠",
												pois:7,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2016-02-03/75ce7865-be3d-4d5f-b938-8f9cf19516b9_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2019-03-21/3b21de5f-2cce-46a2-b48f-0b5815eaca02_300_200.jpg",
												wjusername:"shenqu love",
												wjtext:"筑地是距离银座不远，是东京湾中一小块江户时代填海造出的土地，因为东京最重要的鲜鱼交易市场在这里而闻名海外。自然，许多以鱼生、海鲜为主打的餐厅也在筑地周边落户，筑地市场在吃货界可谓有着极高的知名度。但是，想吃到名店是有代价的，很多旅行者都受不了人气店从早到晚漫长的排队人流。那么在这里，有没有物美价廉又可以无需排队等位拿着就吃的美味？筑地市场同样没有让我们失望。下面推荐的都是相当于人民币30块钱以下又可以边走边吃的超级性价比美食！"
												
											},
											{
												mguidedetailid:2,
												wjtitle:"京都豆腐节",
												pois:8,
												wjimg:'//pics.lvjs.com.cn//uploads/pc/place2/2019-02-12/ab6de12c-dfcc-4419-ba1b-84adb17bf9f3_300_200.jpg',
												wjavter:"//pics.lvjs.com.cn//uploads/pc/place2/2018-09-27/278b49d3-62de-4579-98bb-5836dcf1681a_300_200.jpg",
												wjusername:"乡村豆腐",
												wjtext:"除了春天的樱花和深秋的红叶，京都也是一个以美食著称的城市。若你以为这里只有高冷的怀石料理那简直错得离谱。涮涮锅、烤肉、意大利菜、拉面、鳗鱼饭、深夜食堂、怀旧咖啡店……统统一网打尽！！"
												
											}
										],								
									}
									
									
										
							
								
							]
						
						
					}
				],
				message: '查询成功'
			}
		})
		const buildtjluxianbase = Mock.mock(
			'/api/buildtjluxianbase', 'get', (req, res) => {
				return {
					code: 200,
					data: [
						{
							tjname:"8日东京箱根游"
							
						},
						{
							tjname:"夏日北海道之旅"
							
						},
						{
							tjname:"11日关西行"
							
						}
					],
					message: '查询成功'
				}
			})
			const buildtjcontent = Mock.mock(
				'/api/buildtjcontent', 'get', (req, res) => {
					return {
						code: 200,
						data: [
							{
								tjimg:"//pics.lvjs.com.cn//uploads/pc/place2/2018-10-24/8af2205c-8f86-4049-845a-19b617b2b4a3_300_200.jpg",
								tjday:"9",
								tjtitle:"迪士尼，滋贺大自然农庄，奈良小鹿，相扑表演",
								tjliyou:"强势酒店攻势，保证入住2晚地道日式温泉酒店，日式美食吃不停（任食日本螃蟹、和牛黑䐁一品海鲜锅、Maihama自助餐任吃到饱）",
								tjcontentc:[
									{
										tjcontentdsc:'自选东京迪士尼乐园，安排不少于4小时游玩，让您和心爱的卡通人物如共渡暑假'
									},
									{
										tjcontentdsc:'滋贺大自然农庄，在一片缤纷绽放的花海中,亲近可爱小动物。'
									}
								]
							},
							{
								tjimg:"//pics.lvjs.com.cn//uploads/pc/place2/2017-11-17/29995311-5698-4c8c-b946-08d28eb0d97d_300_200.jpg",
								tjday:"5",
								tjtitle:"一次走遍东京、大阪、京都、箱根主要城市，网络经典景点! ",
								tjliyou:"山中湖花之都公园赏花，在面积30万平方公尺的花海田里，有春天的郁金香、夏天的波斯菊、向日葵和百日草。美丽的花海，日式和欧风的各类庭园搭配的巧思设计，富士山美景的衬托之下更显得绚烂缤纷。",
								tjcontentc:[
									{
										tjcontentdsc:'千年古都-京都，完整地保留了它千余年的历史文化遗产。'
									},
									{
										tjcontentdsc:'东京安排一整日的自由活动，行程自己做主，多种选择随心所欲！'
									}
								]
							},
							{
								tjimg:"//pics.lvjs.com.cn//uploads/pc/place2/2017-02-23/1dcbe67f-f58b-4ebd-9b62-689d8d5e50e0_300_200.jpg",
								tjday:"8",
								tjtitle:"日本冲绳5日自由行",
								tjliyou:"冲绳曾是一个古国，名为琉球王国。如今，这里不但有着闪着蓝宝石光芒的海洋、白沙滩、美丽的珊瑚礁、各种亚热带植物和亚热带风光，还有古老的文化传统和文化遗产。 ",
								tjcontentc:[
									{
										tjcontentdsc:' 冲绳气候温暖宜人，岛内四处郁郁葱葱，不仅是一个度假疗养的胜地，也是人人皆知的海上运动的麦加地'
									},
									{
										tjcontentdsc:'冲绳除了具有东南亚、中国、日本的民俗风情建筑外，较日本本土更具有独特的美式风情，值得一游。'
									}
								]
							}
						],
						message: '查询成功'
					}
				})
export default {
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
	buildweijing
}
