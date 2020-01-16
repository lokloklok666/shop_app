<template>
    <div>
        <el-container>
            <el-aside class="aside-box-shadow"
                      width="200px">
                <user-info></user-info>
                <el-divider></el-divider>
                <aside-nav></aside-nav>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
import UserInfo from '../components/UserInfo.vue'
import AsideNav from '../components/AsideNav.vue'

export default {
    data() {
        return {
            
        }
    },
    components: {
        'user-info': UserInfo,
        'aside-nav': AsideNav,
    },
    methods: {
        
    }
}
</script>

<style lang="less" scoped>
.aside-box-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>


