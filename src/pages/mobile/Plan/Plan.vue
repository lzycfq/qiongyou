<template>
  <vue-drawer-layout ref="drawerLayout">
    <div class="drawer m_drawer" slot="drawer">
      <div class="m_drawer_from">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="plan_search">
            <el-input v-model="ruleForm.plan_search" size="mini"></el-input>
            <i class="el-icon-search m_drawericonsearch" @click="seachbtn('ruleForm')"></i>
          </el-form-item>
        </el-form>
      </div>
      <nav class="m_drawer_nav">
        <ul>
          <li><a><span class="qui-icon _home"></span><span>首页</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>目的地</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>行程助手</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>穷游锦囊</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>最世界，自由行</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>问答</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>论坛</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>穷游出品</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>酒店</span></a></li>
          <li><a><span class="qui-icon _home"></span><span>机票</span></a></li>
        </ul>
      </nav>
      <div class="m_drawel_asideTool">
        <ul>
          <li><a><span class="qui-icon _reply_line"></span><span>写点评</span></a></li>
          <li><a><span class="qui-icon _question"></span><span>提问题</span></a></li>
          <li><a><span class="qui-icon _create_plan"></span><span>做计划</span></a></li>
        </ul>
      </div>
    </div>
    <div class="content" slot="content">
      <div class="mplan__header">
      <span>穷游行程助手</span>
      <img src="../../../assets/images/qiongyou/plan_nav.png" class="iconfont mplan__header__lfico" @click="handleToggleDrawer" />
      </div>
      <div class="mplan_list">
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  </vue-drawer-layout>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          plan_search: '',
        },
        rules: {
          plan_search: [{
              required: true,
              message: '请输入搜索内容',
              trigger: 'blur'
            },
            {
              min: 0,
              max: 30,
              message: '长度在 0 到 30 个字符',
              trigger: 'blur'
            }
          ],
        }
      }
    },
    methods: {
      handleToggleDrawer() {
        this.$refs.drawerLayout.toggle();
      },
      seachbtn(formName) {
      	this.$refs[formName].validate((valid) => {
      		if (valid) {
      			this.axios.get('', {
      				params: {
      					'searchinfo': this.ruleForm.plan_search,
      				},
      			}).then(res => {
      				//搜索成功 返回值or跳转界面
      			}).catch(function(error) {
      				console.log(error);
      			});
      			// 表单提交
      		} else {
      			console.log('error submit!!');
      			return false;
      		}
      	});
      }
    },
  }
</script>

<style lang="scss">
  .mplan__header {
    position: absolute;
    left: 0;
    top: 0;
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    text-align: center;
    border-bottom: 0.05882rem solid #E5E5E5;
    z-index: 200;

    .mplan__header__lfico {
      position: absolute;
      top: 0.25rem;
      left: 0.2rem;
      width: 28px;
      height: 28px;
    }

    span {
      color: #646464;
      font-size: 18px;
    }
  }

  .m_drawer {
    position: relative;
    background-color: #2d3741;
    height: 100vh;
    width: 80%;

    .m_drawer_from {
      padding: 13px 10px 0px;

      .m_drawericonsearch {
        position: absolute;
        bottom: 9px;
        font-size: 20px;
        left: 5px;
      }
      /deep/ .el-input__inner{
        padding-left:0 25px !important;
      }
    }

    .m_drawer_nav {
      display: block;

      ul {
        list-style: none;

        li {
          border-top: 1px solid #232d34;
          background-color: #36424b;

          a {
            padding-left: 15px;
            line-height: 44px;
            display: block;
            font-size: 16px;
            color: #ced1d5;

            span {
              font-size: 16px;
            }
          }
        }

      }
    }

    .m_drawel_asideTool {
      border-top: 9px solid #232d34;
      background-color: #2d3741;

      ul {
        list-style: none;

        li {
          border-top: 1px solid #232d34;

          a {
            font-size: 16px;
            color: #ced1d5;
            padding-left: 15px;
            line-height: 44px;
            display: block;

            span {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .m_PlanList{
    width:100%;
    height: auto;
  }
</style>
