<template>
    <div>
        <el-avatar class="margin-top margin-bottom"
                   src="avatarIconUrl"
                   @error="loadAvatarUrlErr">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <p>{{nickName}}</p>

    </div>
</template>

<script>
export default {
    data() {
        return{
            nickName: 'nickName',
            avatarIconUrl: 'https://empty',
        }
    },methods: {
        loadAvatarUrlErr:function() {
            return true;
        },
    }
}
</script>

<style lang="less" scoped>
.width-auto {
  margin: 0px;
  width: 100%;
  height: 100%;
  zoom: 1;
}

.avatar-size {
  max-width: 60px;
  max-height: 60px;
}

.img-center {
  vertical-align: middle;
}
.margin-top {
  margin-top: 20px;
}
.margin-bottom {
  margin-bottom: 5px;
}
.text-align-center {
  text-align: center;
  outline: none;
}
</style>



