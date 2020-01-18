<template>
    <div>
        <el-col :span="24">
            <el-menu :default-active="defaultActive"
                     class="el-menu-vertical-demo menu-width"
                     @open="handleOpen"
                     @close="handleClose"
                     @select="handleSelect"
                     unique-opened
                     router>
                <template v-for="titleItem in navData">
                    <!-- 一级 :index="titleItem.titleIndex.toString()"-->
                    <template v-if="titleItem.titleType === 'primary'">
                        <el-menu-item :index="jugTarPath(titleItem.tarPath)?titleItem.tarPath:titleItem.titleIndex.toString()"
                                      :key="titleItem.titleIndex"
                                      class="menuItem-text-left">
                            <i :class="titleItem.titleIcon"></i>
                            <span slot="title">{{titleItem.titleName}}:{{titleItem.titleIndex}}:{{titleItem.items.length}}</span>
                        </el-menu-item>
                    </template>
                    <!-- 一级 -->
                    <template v-else-if="titleItem.titleType === 'sub'">
                        <template v-if="titleItem.items.length > 0">
                            <!-- 二级 -->
                            <el-submenu :index="titleItem.titleIndex.toString()"
                                        :key="titleItem.titleIndex"
                                        class="menuItem-text-left">
                                <template slot="title">
                                    <i :class="titleItem.titleIcon"></i>
                                    <span>{{titleItem.titleName}}:{{titleItem.titleIndex}}:{{titleItem.items.length}}</span>
                                </template>
                                <template v-for="(subItem,index) in titleItem.items">
                                    <el-menu-item-group :key="index">
                                        <template slot="title">分组{{index + 1}}</template>
                                        <el-menu-item :index="jugTarPath(subItem.tarPath)?subItem.tarPath:(titleItem.titleIndex.toString() + '-' + subItem.subIndex.toString())">{{subItem.subTitleName}}</el-menu-item>
                                    </el-menu-item-group>
                                </template>
                            </el-submenu>
                        </template>
                        <!-- 一级 -->
                        <template v-else>
                            <el-menu-item :index="jugTarPath(titleItem.tarPath)?titleItem.tarPath:titleItem.titleIndex.toString()"
                                          :key="titleItem.titleIndex"
                                          class="menuItem-text-left">
                                <i :class="titleItem.titleIcon"></i>
                                <span slot="title">{{titleItem.titleName}}:{{titleItem.titleIndex}}:{{titleItem.items.length}}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </template>
            </el-menu>
        </el-col>
    </div>
</template>

<script>
export default {
  data() {
    return {
        defaultActive: '/#',
        navData: [
            {
                titleIndex: 1,
                titleIcon: 'el-icon-s-home',
                titleName: '首页',
                titleType: 'primary',
                tarPath: '/#',
                items: []
            },{
                titleIndex: 2,
                titleIcon: 'el-icon-s-grid',
                titleName: '商品管理',
                titleType: 'sub',
                tarPath: '/',
                items: [
                    {
                        subIndex:1,
                        subTitleName:'项1',
                        tarPath: '项1'
                    },{
                        subIndex:2,
                        subTitleName:'项2',
                        tarPath: '项2'
                    }
                ]
            },{
                titleIndex: 3,
                titleIcon: 'el-icon-s-custom',
                titleName: '会员管理',
                titleType: 'sub',
                tarPath: 'SellMgr',
                items: []
            },{
                titleIndex: 4,
                titleIcon: 'el-icon-s-management',
                titleName: '销售管理',
                titleType: 'sub',
                tarPath: '/#',
                items: [
                    {
                        subIndex:1,
                        subTitleName:'项1',
                        tarPath: '/',
                    },{
                        subIndex:2,
                        subTitleName:'项2',
                        tarPath: '/',
                    }
                ]
            },{
                titleIndex: 5,
                titleIcon: 'el-icon-setting',
                titleName: '权限管理',
                titleType: 'sub',
                tarPath: 'GrantMgr',
                items: []
            },
        ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      window.console.log("open===>",key, keyPath);
    },
    handleClose(key, keyPath) {
      window.console.log("close===>",key, keyPath);
    },
    handleSelect(key, keyPath) {
        window.console.log("sel====>",key,keyPath);
    },
    jugTarPath(path) {
        if(path != '/#' || path.replace(/\s+/g,'') != '') return true
        return false;
    }
  },
  computed: {
  },
};
</script>

<style lang="less" scoped>
.menu-width {
  width: 200px;
}
.title-padding {
  padding-left: 0px;
}
.menuItem-text-left {
  text-align: left;
}
</style>
