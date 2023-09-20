<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item,index in ban">
      <img :src="item.picUrl" alt=""></van-swipe-item>
    </van-swipe>
    <div class="hand">
      <h2>商品列表</h2>
    </div>
    <div class="foot">
      <div v-for="item,index in list" style="width: 47%; margin: 5px; background: #fff; border-radius: 10px;">
        <img :src="item.pic" alt="">
        <div style="width: 100%; padding: 5px;">
          <p>{{ item.name }}</p>
          <div style="display: flex; justify-content: space-between;">
            <div>
              <span>￥{{ item.minPrice }}</span>
              <s>￥{{ item.originalPrice }}</s>
            </div>
            <button @click="go(item.id)">购买</button>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import {banapi,listapi} from '@/util/api'
import foot from '../components/foot.vue'
const route = useRoute();
const router = useRouter();
const ban=ref([]as any)
const list=ref([]as any)
banapi({
}).then((res:any)=>{
  // console.log(res);
  ban.value=res.data.data
})
listapi({}).then((res:any)=>{
  // console.log(res);
  list.value=res.data.data
})
const go=(id:string)=>{
  // console.log(11);
  
  router.push({
    path:'about',
    query:{
      id:id
    }
  })
}
</script>

<style lang="scss" scoped>
.van-swipe-item{
  width: 100%;
  height: 200px;
  img{
    width: 100%;
    height: 200px;
  }
}
.hand{
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.foot{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #f7f8fa;
  img{
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  button{
    margin-right: 5px;
  }
}
</style>