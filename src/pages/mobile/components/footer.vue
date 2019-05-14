<template>
	<footer class="footer">
		<img src="http://www.airmate-china.com/uploadfiles/image/wap_Home_img2.jpg" width="100%" />
		<div class="tip_tel">
			<h2>客户热线</h2>
			<figure>
				<p>400-8860-315</p>
			</figure>
		</div>
		<nav class="foot_nav">
		<ul class="ul uls">
      <li class="on_nav">
        <router-link to="">产品中心<span  @click="show = !show"></span></router-link>
        <dl v-show="show">
          <dd><router-link to="">电风扇</router-link></dd><!-- :to="{ name:'Productlist', params: { id: item.id }}" -->
        </dl>
      </li>
		 <li class="on_nav">
		   <router-link to="">服务<span  @click="fshow = !fshow"></span></router-link>
		   <dl v-show="fshow">
		     <dd><router-link to="">售后服务</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li>  
		  <li class="on_nav">
		   <router-link to="">利益关系专区<span  @click="lshow = !lshow"></span></router-link>
		   <dl v-show="lshow">
		     <dd><router-link to="">利益关系专区</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li> 
		  <li class="on_nav">
		   <router-link to="">网上商城<img src="../../../assets/images/arrow_right_2.png" style="float: right;position: relative;top: 7px;"  @click="wshow = !wshow"/></span></router-link>
		   <dl v-show="wshow">
		     <dd><router-link to="">售后服务</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li> 
		  <li class="on_nav">
		   <router-link to="">关于艾美特<span  @click="gshow = !gshow"></span></router-link>
		   <dl v-show="gshow">
		     <dd><router-link to="">售后服务</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li> 
		 <li class="on_nav">
		   <router-link to="">新闻资讯<span  @click="xshow = !xshow"></span></router-link>
		   <dl v-show="xshow">
		     <dd><router-link to="">售后服务</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li> 
		 <li class="on_nav">
		   <router-link to="">人力资源<span  @click="rshow = !rshow"></span></router-link>
		   <dl v-show="rshow">
		     <dd><router-link to="">售后服务</router-link></dd><!-- :to="{ name:'Productlist', params: { id:item.id }}" -->
		   </dl>
		 </li> 
    </ul>
	</nav>
	<div class="bottom">
 
    Copyright © 2017 艾美特电 器（AIRMATE）官网<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备09180592号-1</a>
  </div>
	</footer>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				show:false,
				fshow:false,
				lshow:false,
                 wshow:false,
				 gshow:false,
				 xshow:false,
				 rshow:false,

			}
		},
		methods:{
			show(){
				
			this.show=false
			},
			fshow(){
				
			this.fshow=false
			},
			lshow(){
				
			this.lshow=false
			},
			wshow(){
				
			this.wshow=false
			},
			gshow(){
				
			this.gshow=false
			},
			xshow(){
				
			this.xshow=false
			},
			rshow(){
				
			this.rshow=false
			}
		}
		}
</script>

<style>
.footer .foot_nav {
    padding: 5% 2%;
    background: #fdfdfd;
	
}
.footer .foot_nav .uls .on_nav{
    padding: 3% 0;
	text-align: left;
    border-bottom: 1px solid #e5e4e4;
}
.footer .foot_nav li >a {
    font-size: 16px;
	text-align: left;

}
.footer .foot_nav li a {
    display: block;
    line-height: 30px;
    font-size: 16px;
    position: relative;
    color: #666666;
	text-align: left;

}
.footer .foot_nav li dl {
    padding-left: 5%;
  
}
.footer .foot_nav li span {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.footer .foot_nav li.on_nav >a span:before, .footer .foot_nav .subnav_on >a span:before {
    left: 0;
    width: 100%;
    height: 2px;
    top: 50%;
    margin-top: -1px;
}
.footer .foot_nav li.on_nav >a span:after, .footer .foot_nav .subnav_on >a span:after {
    top: 0;
    height: 100%;
    width: 2px;
    left: 50%;
    margin-left: -1px;
}
	.footer .foot_nav li.on_nav >a span:before, .footer .foot_nav li.on_nav >a span:after, .footer .foot_nav .subnav_on >a span:before, .footer .foot_nav .subnav_on >a span:after {
    position: absolute;
    content: '';
    background-color: #a4a4a4;
}
	.footer .tip_tel {
		padding: 8% 0 12%;
		text-align: center;
	}

.footer .bottom {
    color: #666666;
	
    font-size: 16px;
    margin: 3% auto 0;
}

	@media screen and (max-width: 480px) {
.footer .tip_tel h2{
    font-size: 18px;
}
}

	


	.footer .tip_tel h2 {
		font-weight: normal;
		font-size: 20px;
		color: #666666;
		margin-bottom: 20px;
	}

	.footer .tip_tel figure {
		width: 412px;
		max-width: 80%;
		padding: 3% 0;
		border: 1px solid #d6d6d6;
		border-radius: 50px;
		margin: 0 auto;
	}

	@media screen and (max-width: 480px) {
		.footer .tip_tel figure {
			max-width: 60%;
		}
	}

	@media screen and (max-width: 480px) {
		.footer .tip_tel figure p {
			font-size: 22px;
		}
	}

	.footer .tip_tel figure p {
		margin: 0;
		display: inline-block;
		background: url('http://www.airmate-china.com/wap/images/footer_iocn1.png') no-repeat left center;
		background-size: contain;
		color: #005bac;
		font-size: 25px;
		padding-left: 15%;
		font-family: Arial;
	}
</style>
