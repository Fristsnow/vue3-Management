<script setup>
import {
  Management,
  Postcard,
  UserFilled,
  User,
  Crop,
  EditPen,
  SwitchButton,
  CaretBottom
} from '@element-plus/icons-vue'
import {RouterView, useRouter} from 'vue-router'
import {ElMessage, ElMessageBox} from "element-plus";

const router = useRouter();
/**
 * 登出
 * @param command
 */
const handleCommand = (command) => {
  if (command === 'logout') {
    ElMessageBox.confirm(
        '你确定要登出吗',
        '警告',
        {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        }
    )
        .then(() => {
          // const res = logoutService()
          ElMessage.success(res.message)
          // tokenStore.removeToken()
          // infoStores.removeInfo()
          router.push('/login')
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消',
          })
        })
  } else {
    router.push(`/user/${command}`)
  }

}
</script>

<template>
  <el-container class="layout-container">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu active-text-color="#ffd04b"
               background-color="#79f382"
               text-color="#fff"
               router
               default-active="/user">
        <el-menu-item index="/typeDrugs">
          <el-icon>
            <Management/>
          </el-icon>
          <span>药品分类</span>
        </el-menu-item>
        <el-menu-item index="/drugInstructions">
          <el-icon>
            <Postcard/>
          </el-icon>
          <span>药品说明</span>
        </el-menu-item>
        <el-sub-menu index="/user">
          <template #title>
            <el-icon>
              <UserFilled/>
            </el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/info">
            <el-icon>
              <User/>
            </el-icon>
            <span>基本资料</span>
          </el-menu-item>
          <el-menu-item index="/user/password">
            <el-icon>
              <EditPen/>
            </el-icon>
            <span>重置密码</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <!-- 右侧主区域 -->
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div>当前登录用户：<strong></strong></div>
        <el-dropdown placement="bottom-end" @command="handleCommand">
                    <span class="el-dropdown__box">
                      <el-avatar src=""/>
                        <el-icon>
                            <CaretBottom/>
                        </el-icon>
                    </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
              <el-dropdown-item command="password" :icon="EditPen">重置密码</el-dropdown-item>
              <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <!-- 中间区域 -->
      <el-main>
        <RouterView/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;

  .el-aside {
    background-color: #79f382;

    &__logo {
      width: 50px;
      height: 50px;
      margin: 10px;
      background: url("../assets/logo.png") no-repeat center / 120px auto;
      background-size: contain;
    }

    .el-menu {
      border-right: none;
    }
  }

  .el-header {
    background-color: #f8ffff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-dropdown__box {
      display: flex;
      align-items: center;

      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }

  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
