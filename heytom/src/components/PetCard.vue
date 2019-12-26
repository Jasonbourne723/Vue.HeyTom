<template>
  <div>
    <el-card>
      <img
        :src="item.image"
        class="image"
      />
      <div>
        <span>{{item.title}}</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "PetCard",
  props: {
    item:{
        type:Object
    }
  }
};
</script>