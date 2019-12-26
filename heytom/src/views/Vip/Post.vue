<template>
  <div style="margin:10px">
    <el-form :model="post">
      <el-form-item>
        <el-input type="text" v-model="post.name" auto-complete="off" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item label="类型">
          <el-radio v-for="item in postType" :key="item.id" v-model="post.type" :label="item.id"></el-radio>
      </el-form-item>
      <el-form-item>
        <el-input type="textarea" placeholder="正文"></el-input>
      </el-form-item>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: "",
        type: 0,
        content: "",
        image: [""]
      },
      postType:[
        {
          name:"动态",
          id:0
        },
        {
          name:"领养",
          id:1
        }
      ]
    };
  },
  methods: {}
};
</script>
