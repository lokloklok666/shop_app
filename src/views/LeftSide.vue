<template>
    <div>
        <el-aside class="aside-box-shadow aside-min-height"
                  width="200px">
            <user-info></user-info>
            <el-divider></el-divider>
            <el-row>
                <el-col :span="24">
                    <aside-nav></aside-nav>
                </el-col>
            </el-row>
        </el-aside>
    </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import AsideNav from '../components/AsideNav.vue'

export default {
    components: {
        'user-info': UserInfo,
        'aside-nav': AsideNav
    }
}
</script>

<style lang="less" scoped>
.aside-box-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-divider--horizontal {
  margin: 5px 0;
}
.aside-min-height {
  min-height: 900px;
}
</style>


