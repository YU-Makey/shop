<template>
  <div>
    <img v-for="item, index in pics2" :src="item" alt="">
    <div style="width: 100%;">
      <h2>￥{{ arr.minPrice }}.00</h2>
      <p>价格<s>￥{{ arr.originalPrice }}.00</s></p>
      <h1>{{ arr.name }}</h1>
      <span>{{ arr.characteristic }}</span>
      <div
        style="display: flex; justify-content: space-between; width: 100%; height: 50px; line-height: 50px; border-top: 1px solid #ccc;">
        <span>运费包邮</span>
        <span>剩余{{ arr.stores }}</span>
      </div>
    </div>
    <van-nav-bar title="商品详情" />
    <div v-html="content" style="width: 100%; overflow: hidden;"></div>
    <van-action-bar>
      <van-action-bar-icon icon="good-job-o" text="首页" @click="shou"/>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button color="#d9f6ef" type="warning" text="加入购物车" style="color: #1ba784;"/>
      <van-action-bar-button color="#1ba784" type="danger" text="立即购买" @click="add(arr)" />
    </van-action-bar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { deltapi } from "@/util/api";
import { useStore } from "vuex";
const store=useStore()
const route = useRoute();
const router = useRouter();
const arr = ref([] as any)
const pics2 = ref({})
const content = ref('')
deltapi({
  id: route.query.id
}).then((res: any) => {
  console.log(res);
  arr.value = res.data.data.basicInfo
  pics2.value = res.data.data.pics2
  content.value = res.data.data.content
})
const add=(val:any)=>{
  store.commit('add',val)
}
const shou=()=>{
  router.push('/')
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}

h2 {
  color: #1ba784;
}
.van-action-bar{

}
</style>