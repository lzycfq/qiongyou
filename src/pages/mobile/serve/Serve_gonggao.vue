<template>
	<el-col :span='24'>
		<app-header></app-header>
		<div><img src="http://www.airmate-china.com/uploadfiles/2018/10/20181009182906296.jpg" width="100%" /></div>
		<div class="breadcrumbs">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '' }">服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">售后服务</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '' }">上门公告</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<hr style="width: 96%;margin: 0 auto;border:0.5px solid #E5E4E4;margin-top: 5px;"></hr>
		<div class="gonggao">
			<div class="gonggao_title">
				上门公告
			</div>
		<table style="width:100%;" class="gonggao_tb" cellpadding="0" cellspacing="0" border="1" bordercolor="#e9e9e9">
		<tbody>
			<tr>
				<td colspan="2" style="text-align:center;background:#005bac;color:#fff;">
					<strong>地区</strong> 
				</td>
				<td style="text-align:center;background:#005bac;color:#fff;">
					<strong>上门范围</strong> 
				</td>
			</tr>
			<tr>
				<td>
					<span>北京</span> 
				</td>
				<td>
					<span>北京</span> 
				</td>
				<td>
					<p>
						北京市区3环上门（东至：三元桥、燕莎桥、农展桥、长虹桥、国贸桥、双井桥、劲松桥、潘家园桥。南至：华威桥、十里河桥、分钟寺桥、方庄桥、东铁营桥刘家窑桥、赵公口桥、木犀园桥、洋桥、万芳桥、玉泉营桥。西至：万柳桥、丰益桥、丽泽桥、六里桥、莲花桥、新兴桥、航天桥、花园桥、紫竹桥、万寿桥为公桥、苏州桥。北至：四通桥、联想桥、蓟门桥、北太平庄桥、马甸桥、安华桥、安贞桥、和平东桥、太阳宫桥、西坝河桥三元西桥）
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>上海</span> 
				</td>
				<td>
					<span>上海</span> 
				</td>
				<td>
					<p>
						虹口区.闸北区.浦东区(金桥路龙阳路以内).普陀区.徐汇区.闵行区(七莘路春申路以内）.长宁区(西环大道以内).黄浦区.卢湾区.静安区.杨浦区
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>天津</span> 
				</td>
				<td>
					<span>天津</span> 
				</td>
				<td>
					<p>
						和平区.河西区.河北区.塘沽区.东丽区(外环线以内区域).南开区.
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>重庆</span> 
				</td>
				<td>
					<span>重庆</span> 
				</td>
				<td>
					<p>
						渝北区.沙坪坝区.万州区.南岸区.九龙坡区.大渡口区.涪陵区.渝中区.江北区
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>广东</span> 
				</td>
				<td>
					<span>广州<br>
北京<br>
东莞</span> 
				</td>
				<td>
					<p>
						海珠区.越秀区.荔湾区.白云区(九佛、钟落潭、竹料、雅谣、黄庄除外).天河区<br>
深圳关内(罗湖区、福田区、南山区）<br>
莞城区/东城区
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>广西</span> 
				</td>
				<td>
					<span>南宁</span> 
				</td>
				<td>
					<p>
						东至王良东客运站长岗路车管止,南至旧五一路菜市场,白沙大道江南新兴苑槎路电池厂、江南客运站止;西至科目大道立交桥西乡塘尾院止;北至邕武立交桥安吉客运站止
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>福建</span> 
				</td>
				<td>
					<span>福州<br>
厦门</span> 
				</td>
				<td>
					<p>
						市区二环以内<br>
厦门湖里区和思明区
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>浙江</span> 
				</td>
				<td>
					<span>杭州</span> 
				</td>
				<td>
					<p>
						杭州市上城区，下城区，西湖区，拱墅区，江干区(东至火车东，南至钱塘江，西至汽车西站，北至汽车北站)
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>江苏</span> 
				</td>
				<td>
					<span>南京<br>
苏州<br>
无锡</span> 
				</td>
				<td>
					<p>
						南京市区以内北至幕俯路，燕红路。南至雨花路大明路，兴隆路.西至江东北路江东南路热河路。东至北安门街，御道街，大明路。<br>
苏州市区以内北到北至东路，南至东方大道，西至西环路，东至东环路。<br>
无锡市区二环以内北至王爱路，南至浪东路，西至苏锡路，东至兴源路。
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>安徽</span> 
				</td>
				<td>
					<span>合肥</span> 
				</td>
				<td>
					<p>
						合肥市内二环内
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>湖北</span> 
				</td>
				<td>
					<span>湖北</span> 
				</td>
				<td>
					<p>
						江汉区、侨口区、江岸区(到堤角）、青山区（到武钢）、洪山区（到光谷广场）、汉阳区（到开发区）、武昌区（到南湖）、东西湖区（到吴家山以内）
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>江西</span> 
				</td>
				<td>
					<span>南昌</span> 
				</td>
				<td>
					<p>
						南昌市东到上海路最远到高新区,西到红谷二路,南到江纺,北到岱山
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>河南</span> 
				</td>
				<td>
					<span>郑州</span> 
				</td>
				<td>
					<p>
						郑州市区三环以内
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>河北</span> 
				</td>
				<td>
					<span>石家庄</span> 
				</td>
				<td>
					<p>
						东到东二环北路南路,南到南二环东路西路,北到北二环东路西路,西到西二环北路南路
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>山东</span> 
				</td>
				<td>
					<span>济南<br>
青岛</span> 
				</td>
				<td>
					<p>
						济南城区(不含长清区)<br>
青岛城区
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>内蒙</span> 
				</td>
				<td>
					<span>和浩特</span> 
				</td>
				<td>
					<p>
						呼和浩特市区
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>山西</span> 
				</td>
				<td>
					<span>太原</span> 
				</td>
				<td>
					<p>
						太原市区内：东至建设路、西至和平路、南至长风街、北至府东街
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>云南</span> 
				</td>
				<td>
					<span>昆明</span> 
				</td>
				<td>
					<p>
						昆明市二环路内（东到环城东路、西至西二环路、南至南过境路、北至北二环路立交桥）
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>四川</span> 
				</td>
				<td>
					<span>成都</span> 
				</td>
				<td>
					<p>
						成都市三环以内
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>贵州</span> 
				</td>
				<td>
					<span>贵阳</span> 
				</td>
				<td>
					<p>
						云岩区、南明区、小河区
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>陕西</span> 
				</td>
				<td>
					<span>西安</span> 
				</td>
				<td>
					<p>
						东至二环路（金花路），西至二环路，南至二环路，北至二环路
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>甘肃</span> 
				</td>
				<td>
					<span>兰州</span> 
				</td>
				<td>
					<p>
						西固区，安宁区，城关区，七里河
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>辽宁</span> 
				</td>
				<td>
					<span>沈阳<br>
大连</span> 
				</td>
				<td>
					<p>
						沈阳市二环以内区域<br>
沙河口区
					</p>
				</td>
			</tr>
			<tr class="tr_2">
				<td>
					<span>吉林</span> 
				</td>
				<td>
					<span>长春</span> 
				</td>
				<td>
					<p>
						宽城区,朝阳区,二道区,绿园区四区上门服务.高新产业开发区和净月开发区不上门服务.
					</p>
				</td>
			</tr>
			<tr>
				<td>
					<span>黑龙江</span> 
				</td>
				<td>
					<span>哈尔滨</span> 
				</td>
				<td>
					<p>
						道里区、道外区
					</p>
				</td>
			</tr>
		</tbody>
	</table>
	<p><br/></p>
    <p>
	<span style="line-height:2;">1、对于第一阶段暂未开通上门服务的区域，我司深表歉意！如需服务请拔打我司服务热线4008860315或联系就近网点送修处理，我司会继续扩大上门服务区域。</span><br>
<span style="line-height:2;">2、我司对执有《贵宾服务金卡》的消费者郑重承诺如下：</span><br>
<span style="line-height:2;">1）、自购买日起一年内，您只需拔打艾美特全国统一服务热线400-8860-315报修，以上城市可享有免费上门服务。</span><br>
<span style="line-height:2;">2）、自购买日起三年内，可享有免收维修技术费服务。</span><br>
<span style="line-height:2;">3）、风扇电机十年保用服务。</span>
</p>
	<p><br/></p>
		</div>

	</el-col>
</template>

<script>
		import Header from '../../../pages/mobile/components/header.vue';
	
	export default {
		name: 'linian',
		data() {
			return {
				}
				},
				 components:{
					
					    'app-header':Header,
				
					  
					},
				}
</script>

<style>
	.breadcrumbs {
		width: 96%;
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	
	.el-breadcrumb__inner a,
	.el-breadcrumb__inner.is-link {
		font-weight: 400 !important;
		text-decoration: none !important;
		-webkit-transition: color .2s cubic-bezier(.645, .045, .355, 1);
		transition: color .2s cubic-bezier(.645, .045, .355, 1);
		color: #303133 !important;
		font-size: 16px !important;
	
	}
	.gonggao{
		text-align: left;
		width: 99%;
		margin: 0 auto;
		}
	.gonggao .gonggao_title {
		text-align: center;
		font-size: 34px;
		padding: 10% 0;
		color: #333333;
	}

	@media screen and (max-width: 480px) {
		.gonggao .gonggao_title {
			font-size: 26px;
		}
	}
.gonggao tr td:nth-child(1), .gonggao tr td:nth-child(2) {
    width: 70px;
    text-align: center;
    border-right: none;
}
.gonggao tr td {
    border-top: none;
}
.gonggao td {
    padding: 2%;
    position: relative;
}
.gonggao tr td:nth-child(2) {
    border-left: none;
}
.gonggao .tr_2 td {
    background: #f8f8f8;
}
</style>
