<template>
	<el-col :span="24">
		<headers></headers>
		<div style="clear: both;"></div>
		<el-carousel height="560px" indicator-position="none">
			<el-carousel-item v-for="(item,index) in Aboutbanner" :key='index'>
				<div class="rt_cover">
					<img class="big_img" width="100%" :src="item.Aboutbannerimg" alt="item.Aboutbannertitle">
					<div class="rt_slogan" style="left: 310px; top: 103px;">
						<img :src="item.Aboutbannerdscimg" width="100%" alt="item.Aboutbannertitle">
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
		<div class="rt_contabbg">
			<div class="rt_content">
				<div class="rt_contenttab">
					<el-tabs>
						<el-tab-pane label="关于负责任的旅行">
							<div class="rt_tabfirst">

								<h1 id="toc_0">HELLO,WORLD!</h1>

								<p>我们生活在一个精彩的世界当中，这里充满无数的美好、魅力与奇遇。如果你愿意睁大双眼去探索这个世界，一定会发现这条充满冒险与惊奇的旅途永无穷尽。</p>

								<p>在宽阔的湄公河上泛舟缓缓行进，尽情享受摩洛哥街头地道的当地美食，在古老的马丘比丘沉思生命的奥秘......</p>

								<p>这个世界的多样性将我们联结在一起，给予我们机会去探索、融入与体验不同的人群与文化所创造出来的美好。作为旅行者，尊重我们所生活的这个世界，以及那些令我们与众不同的多样性元素，这些都会提升你的旅行体验。无论你是去热带的沙滩、喧闹的城市，还是宁静的村庄，一定会从旅行中获益良多，并且赢得人与人之间的尊重。</p>

								<p>我们坚信，实践负责任的旅行，会令你的旅行尽可能的有益与快乐——无论是对于你自己，对于你在路上所遇见的人，还是你所去到的地方。</p>

								<p>当我们带着最初的那份对世界的好奇，小心翼翼地迈出旅行的第一步时，就和这个世界产生了必然的联系。因为旅行，正在给我们的环境和社会带来巨大的变化。旅游业已经在很大程度上影响了景区及周围的居民，这些影响有好有坏，不能一概而论。而我们在旅行中，也会经常陷入矛盾:我们不想重复别人走过的路，但又没有勇气另辟蹊径;我们想体验传统文化，但又不愿放弃已经习惯的舒适。当我们看到传统村庄居民的住房、交通方式和衣着都趋于现代化的时候，可能会感到失望，但同样的改变每时每刻也都发生在我们自己的生活中，我们却从未产生过置疑。</p>

								<p>这世界上每个人都有摆脱贫穷、发展经济的权利，包括旅行目的地的居民，所以要对当地人发展经济和追求物质生活的行为保持理解的态度，虽然这些行为可能会改变当地的初始风貌，通常这些改变是因为旅行目的地的环境和社会基础构架的承载量是有限的，当游客带来的冲击大到一定程度的时候，这种改变就会发生。</p>

								<p>如果要简单地描述这条关系链，它的大概情况是:一些最前沿的背包客来到旅行目的地——少量的口碑传播——少量游客陆续到来——当地人发现人们很喜欢这里——决定通过旅游业来发展经济——旅游宣传——大量游客涌入——环境和社会基础构架遭遇挑战......所以往往追溯源头，很多老背包客都会多少有些自责。</p>

								<p>有人会说自助旅行只会产生较小的影响，但依然是有影响。无论我们去哪儿，我们的旅行活动都会对当地的环境造成一定影响，这里所指的环境包含自然环境、人文环境和社会构架。当地人也要发展，我们不能改变当地人的决定，但并不意味着对此无所作为。作为一名旅行者，我们可以努力尝试把影响降到最低，并尽量通过参与一些维护生态平衡甚或改善生态环境的项目来抵消影响，比如多参与一些公益活动。同时能够给当地居民分享一些来自我们的经验和建议，以帮助当地形成平衡的发展观。而不是“我来过了，我走了”。当然我们过去常说的“除了照片什么都别带走，除了脚印什么都别留下”是最基本的，只是能做到这点的旅行者已经寥寥无几。</p>

								<p>我们已经为自己的旅行花了钱，这些钱当然有利于当地经济的发展，除此之外，我们还能做得更多。旅行可能让我们对当地的环境、社会和文化有了一定了解，所以可以在力所能及的范围之内帮助维持他们的文化传统，比如通过游记记录和传播当地文化，但要避免曲解。要知道钱并不是唯一稀缺的资源，我们的时间或知识也是宝贵的财富。</p>

								<p>无论走到世界的哪个角落，对于我们而言，负责任的旅行态度都不可或缺。换言之，我们应当以一种心怀尊重，并能对旅行地居民、文化及环境有益的方式旅行，这也是负责任的旅行重要的组成部分。</p>

								<p>有句老话说得好——“让喜马拉雅山去改变你，而不要去改变喜马拉雅山。”</p>

								<p style="background: #fef3f3; padding: 15px">作为中国出境游最早也是最大的社区，穷游见证了中国每年出境游人数从百万到过亿的过程。如今，当大部分人都有经济能力能够走出去的时候，中国游客的问题就成了世界的问题。在过去的几年中，我们在“负责任的旅行”方面和众多旅行者一起做了一些事情。2011年初，穷游社区重新撰写了内容准则，其中重要的几项包含:严禁发布或讨论使用虚假证件、逃票攻略等;严禁发布或讨论使用虚假证明申请签证、入境、过境、偷渡等行为;严禁发布破坏危害自然生态环境、历史文化遗迹的相关内容，严禁发布教唆触摸海洋生物的相关内容。对所有涉及到这些的内容予以警告、封禁或删除处理，当然这也是依靠所有穷游用户的共同监督达成的。类似这样的社区规则也将会在穷游社区长久地执行下去。除此之外，我们在穷游锦囊和网站目的地频道中加入了“负责任的旅行”栏目，包括旅行目的地文化、风俗、禁忌、准则和自然环境保护等相关内容，便于旅行者在旅行前首先了解到这方面的内容。随着越来越多的旅行者接纳并开始实践负责任的旅行，我们也会和大家一起不断更新和丰富其内容。</p>

								<p>欢迎查看<router-link to="" class="mailto">“负责任的旅行-旅行者指南”</router-link>，或下载详细版本的<router-link to='' class="mailto">PDF文档</router-link>了解详细内容。</p>


							</div>
						</el-tab-pane>
						<el-tab-pane label="旅行者指南">
							<div class="rt_tabfirst">
								<h1 id="toc_0">负责任的旅行-旅行者指南</h1>
								<p style="font-size: 30px;">Guides for a responsible traveler</p>
								<p>
									<font style="color: #e31d1a; font-weight: bold">关于“负责任的旅行”，我们期望达成的目标：</font>
									<br>
									<strong>• 鼓励旅行者与当地居民建立良好的关系，在感受真实旅行体验的同时，为当地人带去合理的经济收益；</strong>
									<br>
									<strong>• 尊重当地生态环境，努力将旅行对环境的不利影响降到最低。</strong>
								</p>

								<p>
									<font style="color: #e31d1a; font-weight: bold">设立本“负责任的旅行-旅行者指南”的目的是：</font><br>
									<strong>• 为我们“负责任的旅行”目标提供具体详实的指导，以及为此目标设定统一的行为标准；</strong><br>
									<strong>• 为我们的员工和旅行者提供旅行地环境、文化和经济保护意识的教育。</strong>
								</p>

								<p>
									<font style="color: #e31d1a;font-weight: bold">一、旅行者能做什么？</font><br>

									要做到负责任的旅行，首先需尊重当地的文化，所以行前应多做功课，主动了解旅行目的地的方方面面。比如学习一点当地的语言，或者阅读几本有关宗教和文化背景的书籍，都能使你获益良多。只要在这方面付出一点努力，就能使你对当地文化怀有一颗理解和宽容的心，尽情享受旅行带来的乐趣。
								</p>

								<p>以下是一些我们希望旅行者能够遵守的基本行为准则，它们的核心思想就是“尊重”。为什么要出这样一份指南呢？因为我们作为旅行者，只是一个客人，我们的旅行应是负责任的和可持续的，即在我们走过之后，其它的旅行者亦能够拥有同样精彩的旅行。很多旅行者在当地结下了许多深厚的友谊，大家珍视这些情谊，并希望它们能够持续下去。</p>
								<div class="small_title" id="toc_2">
									<font style="color: #e31d1a"><strong>二、旅行者和当地居民</strong></font>
								</div>

								<p><strong>尊重文化差异</strong><br>
									在不同的地方，人们的生活方式千差万别，这正是我们热爱旅行的原因，旅行最大的魅力也在于融入当地文化。在和当地人打交道的过程中，请敞开心扉去接受并适应他们，而不是为了自己的方便和舒适去改变他们。以时间为例：有些地方的人们时间观念不是很强，他们对时间的态度是——顺其自然。急躁不能解决任何问题，你应当保持冷静、乐观和友好。耐心、礼貌和微笑是打开很多扇门的钥匙。为此旅行者应尽量了解：
								</p>

								<p>∙ 提前了解旅行地的传统文化、习俗、宗教、身体语言和饮食习惯，包括社会环境，这是尊重理解的基础，让你对未来的旅程更加期待，也可以避免引起不必要的冲突；<br>
									∙ 雇佣当地向导和在当地人经营的旅舍、餐馆、商店消费等是为当地人提供多种工作机会；<br>
									∙ 旅行中尽量去认识和了解当地文化和居民，多与当地居民接触和交流，提前学习几句简单的当地方言，这是友谊开始最好的方式；<br>
									∙ 多种视角了解旅行地，避免对旅行地文化的偏见。</p>

								<p><strong>礼仪和服装</strong><br>
									尽量穿着合乎当地标准和特色的服饰，尊重当地的文化和礼仪，比如在贵州的某些地区，如果当地人向你敬酒时，你用手触碰了酒杯，那么就一定要喝完酒杯里的酒。着装习惯也是一样，比如在新疆，即使在夏天，女孩子也尽量不要穿短裤或短裙，因为这对于当地人来说是非常重要的。
								</p>

								<p><strong>摄影和摄像</strong><br>
									人们对摄影的敏感性可能会超乎你的想象，在这方面，一些少数民族或偏远地区尤甚。在拍照前，请尽量取得被拍摄者的同意，如果他们拒绝了你的请求，最好是收回你的相机或摄像机，尊重他们！此外，请不要尝试用金钱换来照片，因为事实证明这将诱导当地居民的乞讨行为，不过有时候，被游客拍照是一些人的收入来源，所以提前问清楚非常重要；若你有幸被允许拍照，请尽量在旅行结束后寄回一些照片给他们。人们乐于见到照片上的自己，这样做你的拍摄行为就成为一个双向的交流，而不是简单地“索取”一份美丽的回忆。再次造访时，记得捎上你的祝福。</p>

								<p><strong>施舍和捐赠</strong><br>
									请不要直接施舍金钱、文具或糖果给当地孩子，因为这会诱导一种“乞讨文化”的产生。施舍本身就在旅行者和当地居民之间建立起了一种不平等的关系，在这种关系里，旅行者是纯粹的“给予者”，施舍行为只能导致“接受者”用贫穷来乞求更多的物质给予，并不能帮助被施舍者通过自己的努力和当地社区的力量来解决贫困问题。
								</p>

								<p>如果你仍然希望通过捐赠来帮助当地，可以通过支援当地慈善机构或民生项目为贫困群体提供长远而有效的帮助，笔和笔记本等文具则最好通过学校或老师发给学生，因为这样孩子们才会知道需要去学校上学才能得到这些，并且直接的给予行为对那些无力买礼物给孩子的家长来说也非常不尊重的。</p>

								<p>此外，还可以以恰当的方式向当地居民赠送礼物，或者访问民居时对主人的热情招待回礼，比如埃及人对我国的风油精有迷之喜爱。</p>

								<p><strong>友谊</strong><br>
									若有幸接到当地居民的盛情邀请，大胆接受吧！这是促进双方互相了解的最好时机。比如，花点时间同他们一同喝茶聊天，能使你得到一窥当地人的日常生活、学习当地文化、了解当地人生活态度的机会，以及欢乐的时光和一连串欢笑，反过来，这同样也是一个让他们了解你的机会。当然，回家后别忘记寄回一些照片给他们，同时不要许下你不能兑现的承诺。</p>



								<div class="small_title" id="toc_3">
									<font style="color: #e31d1a"><strong>三、旅行目的地消费</strong></font>
								</div>

								<p>旅行者可以通过光顾当地餐厅、超市、购买当地特色产品为旅行地带去经济收益，同时避免过度采购造成当地商品的短缺；</p>
								<p>

									∙当地美食是旅行中绝对不可错过的一部分！我们强烈建议你品尝当地的美食，这样不仅能让你感受更加真实的旅行，同时也是对当地的支持；不要食用由稀有动物或濒危物种制作的菜式；<br>

									∙ 尽量从手工艺品制作者手中直接购买，而不是从精品店里购买工艺品，这样不仅能让当地居民获益，同时也能获得货真价实的当地纪念品； <br>

									∙ 不要购买用稀有动物、濒危物种制造的商品！这些野生动植物制品绝大多数是非法出售的。同时，你的购买行为会刺激当地的非法野生动物交易。请不要购买以下商品：海龟制品、珊瑚、蛇皮、沙图什（由藏羚羊皮制成）、象牙制品等…
									<br>

									∙ 注意当地关于古董购买和出口的法律条文；<br>

									∙ 注意不要购买可能由童工制造的商品；<br>

									∙ 关于还价，有时候你可以在购物时发挥你的还价艺术，但是也请记住以下几点： <br>
									了解当地的还价习惯，以合理的价格购买商品；但同时要注意掌握火候，因为自己的利得往往是他人的损失；礼貌、有耐心并且坚定，粗鲁不仅让你输掉更便宜的价钱，也输掉友谊；&nbsp;一旦就价格达成一致后就不要反悔，只有在你真的打算过一会儿再来时才这样说。</p>



								<div class="small_title" id="toc_4">
									<font style="color: #e31d1a"><strong>四、旅行者和当地环境</strong></font>
								</div>

								<p>无论去哪儿，我们的旅行都会对当地环境造成一定影响。但你可以努力尝试把影响降到最低，并通过参与一些维护生态平衡甚或改善生态环境的项目来抵消影响。</p>

								<p>环境污染和垃圾处理是一个世界性难题。在一些地方，垃圾处理和废弃物回收再利用的系统并不完善，这使当地面临的环境问题更加严重。我们建议你在购物时用自己携带的环保袋装东西，尽量不要使用塑料袋。在搭乘公共交通时，不要以为把垃圾扔到垃圾桶里就万事大吉，也许下一秒，它们就被从窗口扔了出去。最好能把垃圾收集起来，到达下一个城镇或旅店后再处理掉。
									我们同样需要关爱自然环境。徒步旅行中，记住永远不要把水源处当成厕所，尽量不要在河流湖泊附近使用肥皂和洗发水。</p>

								<p>有些地区缺乏环境意识的教育，因此当地人并不知道他们乱扔垃圾的行为会破坏环境。作为负责任的旅行者，我们的目标是用行动来传播环境意识。如果你身体力行地投入，你会发现你的行为会对当地居民产生潜移默化的影响，这对环境保护的作用是极其深远的。</p>

								<p>选择拥有环保政策和当地社区项目的旅行社。</p>



								<div class="small_title" id="toc_5">
									<font style="color: #e31d1a"><strong>五、住宿</strong></font>
								</div>

								<p>在旅途中入住旅馆时，尽量做到以下事项：<br>
									∙ 离开房间或不需要使用电器时关掉空调、电视和电风扇等电器，电视尽量切断电源而不是维持在待机状态，因为待机状态中的电视同样会耗电；<br>
									∙ 在一些国家，厕纸和卫生棉不得扔入厕所中，因为当地的污水处理系统无法处理非排泄物，忽视这一点可能会引起厕所堵塞甚或排泄物外溢；<br>
									∙ 尝试寻找环保型的旅馆，比如使用可再生能源等；<br>
									∙ 如非必要，酒店提供的毛巾可以多次使用，不必每天更换清洗；</p>



								<div class="small_title" id="toc_6">
									<font style="color: #e31d1a"><strong>六、旅行交通工具</strong></font>
								</div>

								<p>∙ 尽量选择公共交通，在一些国家中使用公共交通设施，注意不占用特殊人士座位或设施；<br>
									∙ 只在必要时开启交通工具内的空调设备。</p>



								<div class="small_title" id="toc_7">
									<font style="color: #e31d1a"><strong>七、旅行中的用水</strong></font>
								</div>

								<p>时刻节约用水，即使是在有充足水资源的国家，因为净水工程需消耗能源，过度用水还会导致水位下降，进一步造成污染。<br>
									∙ 选择淋浴而不是泡浴；<br>
									∙ 不要让水一直流，所需水量减少时相应调低出水量，刷牙、涂沐浴露洗发水时关闭水龙头；<br>
									∙ 自驾旅行时减少途中过度洗车，交通工具在出发前清洗干净并在旅行途中保持内厢和窗户清洁即可。</p>



								<div class="small_title" id="toc_8">
									<font style="color: #e31d1a"><strong>八、关于野生动物</strong></font>
								</div>

								<p>注：“动物”指得是鸟类、海生动物、爬虫类和其它一般动物，“野生”指任何没有被驯化的动物，包括笼子里的大象及海洋馆的鲸类等。</p>

								<p><strong>建议旅行中尽量减少涉及的活动和注意事项：</strong><br>
									∙ 不要观看动物经训练后非自然的娱乐性表演，如海豚表演，马戏团动物表演等；<br>
									∙ 不与被圈养的海豚或其他水生动物游泳，这种行为可能会对游客及野生动物本身造成伤害；<br>
									∙ 不把野生动物装扮成拍照的道具，如：跳舞的灰熊，会表演节目的猴子和任何抱着动物拍照的行为；<br>
									∙ 不要为了吸引动物靠近而发出特定声音，如拍手、吹口哨或学鸟叫等，这样会影响动物的行动和生活模式，让它们受到惊吓甚至陷入危险；<br>
									∙ 不要触摸野生动物，人类会有遭到动物袭击或跟动物之间相互传染病毒的危险。大多数野生动物的行为不可预测，也不习惯与人类亲近，故经常性被触摸会给动物习性带来极大的干扰，导致它们不能正常地生活；<br>
									∙
									不要喂食野生动物，如在游船观光时向船外抛食物，利用食物吸引动物，或者在营地或者野餐地留下食物，喂食会扰乱动物自然的捕食模式并且会使动物养成依赖而不去学习捕食技巧，习惯了被喂食的动物会跑到人类居住的地方偷食和侵害庄稼，猎捕牲畜和家禽，造成许多麻烦；<br>
									∙ 不要采摘花草，拣化石、石头和贝壳，自然环境应受到保护不被破坏，否则终有一天会什么都不剩，采摘植物或者植物的一部分，都可能会威胁到整个植株的生命<br>
									∙ 不要购买不可持续生产的野生动植物商品，包括珊瑚、龟壳、象牙、河马牙齿、大象皮毛、贝壳、野生动物皮草和硬木等，这些都是濒临灭绝的物种，购买这些商品会刺激更多猎杀野生动植物的行为。</p>

								<p><strong>涉及野生动植物的旅行安排需要时刻牢记的：</strong><br>
									∙ 遵守园区交通规定，尤其是车速、驾驶时间和越野驾驶的规定等；<br>
									∙ 不得为了拍照或者更好地观赏而追逐动物或者把幼崽带离其父母，与动物保持足够的安全距离<br>
									∙ 不要站立在珊瑚上或捆绑珊瑚；<br>
									∙ 不要在野生动植物旁吸烟；<br>
									∙ 为野生动物拍照时不要使用闪光灯；<br>
									∙ 夜间行驶时，避免把灯光长时间地直接照在动物身上;<br>
									∙ 不要靠近繁殖地点，包括巢，洞穴等；<br>
									∙ 尽量从侧面靠近动物不要让他们感觉到威胁；<br>
									∙ 我们不鼓励通过投食喂养的方式来让迷路的动物跟随，最好的做法应该是无视他们并离开。</p>



								<div class="small_title" id="toc_9">
									<font style="color: #e31d1a"><strong>九、旅行中的垃圾问题和减少浪费</strong></font>
								</div>

								<p>垃圾在许多国家是一个非常严重的问题，那些国家只有有限的、甚至完全没有废物处理设施，更不要说废物回收再利用设备。解决垃圾问题的首要任务是减少资源使用，从而减少浪费，然后尽量保证废物以最合适的方式被处理掉。</p>

								<p>
									<span></span></p>
								<p><strong>控制废物增长</strong><br>
									• 建议旅行者不使用任何商店提供的塑料袋并减少在其它用途上使用塑料袋(比如收集垃圾，防水等)；<br>
									• 旅行中大部分情况下有饮用水的补给，建议旅行者自带水壶，尽量减少瓶装水的消费，以减少塑料瓶垃圾；<br>
									• 宿营时尽量使用可多次利用的食物器皿，不用锡纸、塑料袋、一次性的盘子杯子和刀子。<br>
									<span>
									</span></p>
								<p><strong>垃圾</strong><br>
									许多旅行者已经习惯携带一只垃圾袋专门用来收集沿途的垃圾，这是非常好的做法。需要注意的是在处理这些垃圾时，不要简单地把它们扔到火里烧掉。你应该把垃圾带到下一个城镇再处理掉。<br>
									∙ 负责任地处理垃圾。如果不确定附近的垃圾箱会被定期清理，就把垃圾带到能够被妥善处理的地方；<br>
									∙ 不乱扔烟头，如随便扔在路上、树丛中或者抛出船外等，而要放进垃圾箱或者垃圾袋里。建议吸烟者自带便携烟盒，胶片盒子就是一个即方便又易除味的小容器；<br>
									∙ 食物垃圾——包括苹果核等——不能扔在树丛里或者抛出船外等，而应扔到垃圾箱里。 注：橙子皮在适宜的气候里需要6个月才能完全分解，这会在很长时间内影响环境。
									另外，它会使误食的野生动物中毒，还会吸引凶猛的动物来到人类活动的地方。所以，许多国家公园都禁止随地乱扔食物垃圾；<br>
									∙ 旅行者在徒步过程、景区或其他地区可以收集垃圾并在结束后妥善处理，让当地环境比我们到达前更美丽；<br>
									∙ 乘船时，应该把垃圾带到岸上处理，不要扔出船外或者藏在岩石背后。</p>


								<p></p>

								<div class="small_title" id="toc_10">
									<font style="color: #e31d1a"><strong>十、旅行中的古迹游览</strong></font>
								</div>

								<p>∙ 不要触摸古代碑刻，因为手上的油脂、酸性物和污垢会腐蚀碑刻；<br>
									∙ 拍照时不开闪光灯，因为亮光会破坏壁画等古迹；<br>
									∙ 不要捡拾碎石，化石或者陶瓷化石，那都是景点的一部分；<br>
									∙ 沿着修葺好的小路走，不乱走乱窜；<br>
									∙ 绝不攀爬、翻越古迹或墙壁。</p>



								<div class="small_title" id="toc_11">
									<font style="color: #e31d1a"><strong>十一、关于徒步旅行</strong></font>
								</div>

								<p>建议尽量熟知当地对徒步的法律法规。为避免破坏环境，应该坚持以下的一般性建议：</p>

								<p><strong>在已有小道的地方：</strong><br>
									∙ 集中在小道上走路；<br>
									∙&nbsp;排成一列纵队走在小道中间，即便原始环境的地面潮湿或者泥泞；</p>

								<p><strong>在小道尚未形成的地方：</strong><br>
									∙ 分散行走以免足迹重复形成小道；<br>
									∙ 避开刚开始出现人为破坏痕迹的地方。<br>
									∙ 只有在没有其它选择的情况下才直接在植被上行走。当要穿过田地或种植地时，我们建议尽量先得到主人的同意并排成纵列小心地沿着边缘行走。</p>



								<div class="small_title" id="toc_12">
									<font style="color: #e31d1a"><strong>十二、关于野营</strong></font>
								</div>

								<p>野营对环境有着非常显著的影响。除了上述外，旅行者还应降低野营活动对环境的损害。</p>

								<p><strong>营地选择</strong><br>
									一般性建议：<br>
									∙ 集中使用已有的营地；<br>
									∙ 控制营地规模，集中在没有植物的地区活动；<br>
									∙ 如果在河流旁扎营，尽量选择在当地居民水源下游扎营，以避免污染他们的水源；<br>
									∙ 在原始的地区或者野生树丛中扎营，注意定期更换营地，避免在土地上形成大片扎营痕迹或小道；<br>
									∙ 如果营地附近有民居或者其他的露营者，要降低音量。</p>

								<p><strong>野外厕所</strong><br>
									如果营地里没有固定的厕所，要挖一个坑，以下是我们对厕所建造和帐篷使用的一些指导：<br>
									∙ 坑必须挖在离水源至少30米(100码)的地方，而且要尽可能的深。在松软土地(如沙质土地)上挖坑前，先在地上倒些水，能使土地变硬防止下陷；(注：细菌在这深度的土壤里最活跃，因此粪便能够更快地降解；)<br>
									∙ 使用后掩埋粪便；<br>
									∙ 如果有可能，尽量收集、焚烧和掩埋使用过的卫生纸；<br>
									∙ 尽量少挖坑，填满一个再挖另一个。</p>

								<p><strong>营火</strong><br>
									∙ 仅在庆祝或必要时偶尔生火，因为这会消耗自然资源、造成空气污染和掠夺当地人有限的煤炭资源。并没有令人信服的证据证明必须用营火取暖和照明，我们可以很容易地找到别的方法来实现。 <br>
									∙ 如果由于煮食需要开火，可以选用事先准备的户外气罐和炉头，因为我们无法确定木材是否来自珍惜物种，木炭其实不一定是环保燃料；<br>
									∙ 如果有需要，应用已经枯死倒下的树木上取材。不要折断树枝，因为看起来已经枯死的树枝也许只是干掉或者进入休眠期；<br>
									∙ 控制火势；<br>
									∙ 在先前生过火或已搭建好的生火场地生火；<br>
									∙ 只使用纸制品作为引燃材料或投入火里燃烧，含有极少量塑料的材料在燃烧时都会产生有 毒烟雾；<br>
									∙ 注意火灾隐患，遵守当地用火规定；<br>
									∙ 离开营地时，要把营火灰烬掩埋，确保营火已灭并恢复营地整洁。</p>

								<p><strong>野营中的垃圾处理</strong><br>
									处理营地垃圾时我们建议：<br>
									∙ 焚烧处理：纸张和卡片；<br>
									∙ 填埋处理：蔬菜和食品垃圾；<br>
									∙ 带走处理：塑料，玻璃和罐头；<br>
									∙ 离开前要检查营地所有垃圾包括瓶盖和烟蒂；<br>
									∙ 查找并利用当地回收机构。注：在国家公园和一些当地法规特别规定的地方，所有垃圾包括蔬菜食品都要带走。因为 外来的食品垃圾有可能令动物致病，而且会吸引动物接近营地(棕熊，狮子等)。</p>

								<p><strong>野营用水</strong><br>
									∙ 在生态脆弱的地方如非万不得已不从泉中取水；<br>
									∙ 如果没有太阳能热水器则减少为个人梳洗提供热水，因为会需要消耗更多的燃料；<br>
									∙ 淋浴涂肥皂时应关掉水龙头；<br>
									∙ 废水，如洗餐具水，应在距离水源地30米(100码)以外倾倒处理；<br>
									∙ 不在湖泊或溪流中使用不可降解的肥皂。应购买并使用可降解产品；<br>
									∙ 不往水道里倾道油腻的废水；<br>
									∙ 在大容器里盛水清洗餐具，其用水量比冲洗更少。&nbsp; &nbsp; </p>



								<div class="small_title" id="toc_13">
									<font style="color: #e31d1a"><strong>十三、旅行安全</strong></font>
								</div>
								<p>对于热爱旅行的人来说，现在可能就是最好的年代。签证开放交通便捷，你向往一个目的地，下一步就能去到。但没人能否认，伴随着每一次出发，未知的目的地等待我们的除了美好的遇见，还有意料之外的安全问题。没有绝对的安全，但须绝对地谨慎——为了减少旅途中出现令人措手不及的状况，建议做好以下准备</p>

								<p>∙ 尽量避免前往战乱或不稳定地区，寻求刺激或不负责任的特立独行并不能为你带来什么益处，同时也是对自己家人和朋友极不负责的行为；不要认为有人应该为你的行为买单，包括驻外使领馆；<br>
									∙ 采取恰当的健康及安全预防措施，无论在旅行之前或是旅行途中；<br>
									∙ 了解在紧急状况下如何得到医疗救治、救助，以及在何种情况下应该联系本国的使领馆；<br>
									∙ 养成旅行前购买旅行保险的好习惯，在旅途中通常情况下，一份好的旅行保险比任何远在家乡的朋友都可靠。</p>

								<p>穷游锦囊的安全频道为全球主要目的地进行了安全评级，并且制作发布了《旅行安全指南》，可作为旅行目的地选择之参考，以及遇到紧急情况下的安全指南。 </p>

								<p>《旅行安全指南》详情请见“穷游锦囊”App中的旅行安全频道：<br>
									<img style="margin-top: 38px;" src="//static.qyer.com/models/project/rt_travel/img/res_guide.png" alt="负责任的旅行 - 穷游网">


								</p>
								<div class="small_title" id="toc_14">
									<font style="color: #e31d1a"><strong>十四、发展的权利</strong></font>
								</div>

								<p>任何人都有权利摆脱贫穷、发展经济，包括我们旅行的目的地的居民，所以请对当地人发展经济和追求物质生活的行为保持理解的态度，虽然这些行为可能会改变当地的初始风貌。当我们看到传统村庄居民的住房，交通和衣着都趋于现代化的时候，可能会感到失望，但同样的改变每时每刻也都发生在我们自己的生活中，我们却从未产生过置疑。通常这些改变是因为旅行目的地的环境和社会基础构架的承载量是有限的，当游客的冲击大到一定程度的时候，这种改变就会发生。</p>

								<p>虽然不能改变他们的决定，但并不意味着你对此无所作为。作为一名旅行者，你能够给当地居民分享一些来自我们的经验和建议，以帮助他们形成平衡的发展观。</p>




								<div class="small_title" id="toc_15">
									<font style="color: #e31d1a"><strong>十五、旅行结束，负责任的旅行却不止于此</strong></font>
								</div>

								<p>结束旅行回家后，可以好好思考该如何帮助你曾经旅行过的地区。你已经为自己的旅行花了些钱，这些钱当然有利于当地经济的发展，除此之外，你还能做得更多。旅行可能让你对当地的环境、社会和文化有了一定了解，你可以在力所能及的范围之内帮助维持他们的文化传统，比如结束旅行返回后，通过客观的游记或照片记录和传播当地文化，诚实地评价目的地，将积极的旅行经验告诉大家。钱并不是唯一稀缺的资源，你的时间或专业知识也是宝贵的财富。</p>



								<div class="small_title" id="toc_16">
									<font style="color: #e31d1a"><strong>十六、十二条旅行小建议</strong></font>
								</div>
								<p>鉴于“负责任的旅行”所涉及的方面及细节非常多，所以我们准备了关于“负责任的旅行”的十二条小建议，方便旅行者记住和践行：</p>

								<p>
									1. 行前多做功课，了解旅行目的地宗教信仰、文化、禁忌、价值观等知识。<br>
									2. 学习并尽量使用一些当地语言，别担心出丑，小小的幽默能迅速拉近人与人之间的距离。<br>
									3. 前往某些文化差异显著的目的地，应提前了解我们日常的身体语言在当地是否有特殊的含义。<br>
									4. 支持当地产业、吃当地的食物、使用当地的公共交通，这能帮助你融入当地生活，了解当地居民的生活状态。<br>
									5. 凡事需三思。以稀有物种的保护为例，也许你在以此物种作为食材的餐馆里吃饭时、在售卖此物种周边制品的商店买东西时，不知不觉中也加速了它们的灭亡。<br>
									6. 选购纪念品时尽量购买当地的手工艺品，支持当地产业，同时也要把握还价的尺度。<br>
									7. 尊重当地宗教和文化对穿着的要求，慎重选择衣着，尤其是泳装。<br>
									8. 对人物拍照和录影前，应先征得他们的同意，并尽量在旅行结束后把你的作品寄送一份给他们，分享快乐。<br>
									9. 不要轻易给任何人施舍，无论是礼物或金钱。把钱用来支持当地学校、诊所或其它发展项目往往是更有建设性的帮助。<br>
									10. 除了照片什么都不要带走，除了脚印什么都不要留下——像爱护自己的家一样爱护当地环境。<br>
									11. 旅行结束回家后，考虑如何为给予你美丽回忆的地方出一份力。<br>
									12.微笑——做冷静、乐观、友好的旅行者。<br>


								</p>
								<div class="small_title" id="toc_15">
									<font style="color: #e31d1a"><strong>十七、参与共建“负责任的旅行-旅行者指南”
										</strong></font>
								</div>
								<p>必须承认目前包括我们自己在内所做的远非完美，但我们正不断从旅行者和目的地居民处收集反馈意见，提高行为标准并努力达成目标。</p>
								<p>
									• 本指南虽然不具备任何法律约束力，但通过我们十几年来和众多旅行者的共同讨论及研究，已经成为了一个众多旅行者自愿实施的机制；<br>
									• 本指南将处于不断更新中，我们欢迎你通过各种渠道给予我们反馈意见。<br>
								</p>
								<p><strong>反馈渠道：</strong><br>
									<strong>Email: <router-link to="" class="mailto" style="text-decoration: underline;">rt@qyer.com</router-link></strong><br>
									<strong>微信公众号：穷游锦囊（qyerguide）</strong></p>
								<div style="margin-bottom: 15px">
									<font style="color: #e31d1a"><strong>
											<router-link to="" class="mailto" style="    text-decoration: underline;">《负责任的旅行-旅行者指南》完整版，可下载PDF文件查阅</router-link>
										</strong></font>
								</div>
								<p>
									<router-link to="">
										<img src="https://static.qyer.com/models/project/rt_travel/img/about_bottom.png" alt="">
									</router-link>
								</p>

							</div>
						</el-tab-pane>
						<el-tab-pane label="负责任旅行联盟">
							<div class="rt_tabfirst">
								<h1>负责任旅行联盟</h1>
								<div class="art_desc">
									当我们带着最初的那份对世界的好奇，小心翼翼的迈出旅行的第一步时，就和这个世界产生了必然的联系。因为旅行，正在给我们的环境和社会带来巨大的变化。</div>
								<div class="art_thx">
									特别感谢世界自然基金会（WWF）、国际野生物贸易研究组织（TRAFFIC）、森林管理委员会（FSC）在内容方面的支持.
								</div>
								<h1>联盟成员</h1>
								<div class="rt_partner_listwrap">
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_9.png&#10;" alt="Discovery
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">Discovery
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_14.png&#10;" alt="新西兰旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">新西兰旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_23.png &#10;" alt="众信旅游
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">众信旅游
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_8.png&#10;" alt="大疆创新
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">大疆创新
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_13.png&#10;" alt="The North Face
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">The North Face
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_4.png&#10;" alt="新加坡航空公司
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">新加坡航空公司
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_11.png&#10;" alt="OSPREY
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">OSPREY
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_22.png&#10;" alt="澳大利亚旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">澳大利亚旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_5.png&#10;" alt="支付宝
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">支付宝
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_6.png&#10;" alt="天巡
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">天巡
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_2.png&#10;" alt="澳洲航空公司
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">澳洲航空公司
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_3.png&#10;" alt="新加坡酷航
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">新加坡酷航
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_7.png&#10;" alt="租租车
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">租租车
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_10.png&#10;" alt="LifeStraw生命水壶
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">LifeStraw生命水壶
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_12.png&#10;" alt="Speedo
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">Speedo
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_15.png&#10;" alt="新加坡旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">新加坡旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_16.png&#10;" alt="瑞士国家旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">瑞士国家旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_17.png&#10;" alt="斯堪的纳维亚旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">斯堪的纳维亚旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_18.png&#10;" alt="德国国家旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">德国国家旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_19.png&#10;" alt="比利时法兰德斯旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">比利时法兰德斯旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_20.png&#10;" alt="荷兰国家旅游会议促进局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">荷兰国家旅游会议促进局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://static.qyer.com/models/project/rt_travel/logo/cop_logo_21.png&#10;" alt="留尼汪旅游局
">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">留尼汪旅游局
											</a>
										</div>
									</span>
									<span class="rt_pat_list">
										<span>
											<img src="https://fes.qyerstatic.com/FtR24p4D8OD7cnKzrG0pE3-R-mm7?imageslim&#10;" alt="英国驻华大使馆">
										</span>
										<div class="rt_pat_list_title">
											<a href="javascript:void(0)
">英国驻华大使馆</a>
										</div>
									</span>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
			<div class="rt_contenttabline"></div>
		</div>
	</el-col>
</template>

<script>
	import headers from '../web/compoents/header_two.vue'
	export default {
		name: 'About',
		data() {
			return {
				Aboutbanner: []
			}
		},
		created() {
			this.buildAboutbanner();
		},
		methods: {
			buildAboutbanner() {
				this.axios.get('/api/buildAboutbanner').then(res => {
					this.Aboutbanner = res.data.data
				}).catch(function(error) {
					console.log(error);
				})
			}
		},
		components: {
			headers
		},
	}
</script>

<style lang="scss">
	.rt_contabbg {
		width: 100%;
		height: auto;
		position: relative;

		.rt_content {
			width: 1160px;
			margin: 0 auto;
			height: auto;

			.rt_contenttab {
				width: 680px;
				height: auto;
				float: left;
			}

			.rt_contenttab {
				/deep/ .el-tabs__item {
					width: 226.6px;
					height: 50px;
					color: #999999;
					font-size: 16px;
					text-align: center;
				}
			}

			.rt_contenttab {
				/deep/ .el-tabs__item.is-active {
					color: #323232 !important;
				}
			}

			.rt_contenttab {
				/deep/ .el-tabs__active-bar {
					background: #E02125;
					height: 5px;
				}
			}

			.rt_contenttab {
				/deep/.el-tabs__nav-wrap::after {
					display: none;
				}
			}

			.rt_tabfirst {

				h1 {
					font-size: 36px;
					color: #323232;
					margin-top: 30px;
					margin-bottom: 20px;
				}

				p {
					color: #323232;
					line-height: 26px;
					margin: 6px 0 28px 0;
					font-size: 14px;
				}

				.mailto {
					color: #e31d1a;
				}
.art_desc {
    margin: 25px 0;
}
.art_desc, .art_thx {
    color: #636363;
    font-size: 14px;
}
.art_thx {
    font-weight: bold;
    margin: 35px 0;
}
.rt_partner_listwrap {
    background: #F5F5F5;
    padding: 30px 10px 30px 30px;
    overflow: hidden;
    font-size: 0;
 .rt_pat_list {
    width: 190px;
    margin-right: 20px;
    display: inline-block;
	 img {
    height: 100px;
    border: none;
    background: #fff;
    border-radius: 4px;
}
.rt_pat_list_title {
    width: 190px;
    text-align: center;
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 0 20px;
    font-weight: bold;
    overflow: hidden;
	a {
    color: #323232;
}
}
}
}
			}
		}

		.rt_contenttabline {
			width: 100%;
			height: 1px;
			background: #D8D8D8;
			position: absolute;
			top: 50px;
		}
	}

	.rt_conbg {
		width: 100%;
		height: auto;
		position: relative;
	}

	.rt_cover {
		width: 100%;

		position: relative;

		.rt_slogan {
			position: absolute;
			color: #fff;
			left: 100px;
			height: 280px;
			z-index: 1;
			left: 310px;
			top: 103px;

			img {
				height: 100%;
				width: initial;
			}
		}

	}
</style>
