<template>
    <div>
        <div v-show="store.state.list!=store.state.data">
            <div class="hand">
            <span>购物车</span>
            <span style="color: #3388ff;" @click="del">编辑</span>
        </div>
        <div v-for="item, index in store.state.list" style="padding-top: 10px;">
            <van-row>
                <van-col span="4">
                    <van-checkbox v-model="item.ck" @click="check"></van-checkbox>
                </van-col>
                <van-col span="20" style="display: flex;">
                    <img :src="item.pic" alt="">
                    <div style="margin-left: 10px;">
                        <p>{{ item.name }}</p>
                        <div style="display: flex; justify-content: space-between;">
                            <span>￥{{ item.minPrice }}</span>
                            <van-stepper v-model="item.num" />
                        </div>
                    </div>
                </van-col>
            </van-row>
        </div>
        <van-submit-bar :price="store.getters.pic" button-text="去结算">
            <van-checkbox v-model="store.state.cks" @click="ckall">全选</van-checkbox>
        </van-submit-bar>
        </div>
        <van-empty description="描述文字" v-show="!store.state.list">
            <van-button round type="primary" class="bottom-button">按钮</van-button>
        </van-empty>
        <foot></foot>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import foot from '../components/foot.vue'
const store = useStore()
const route = useRoute();
const router = useRouter();
const ck = ref(false)
const value = ref(1)
const ckall = () => {
    store.commit('ckall')
}
const check = () => {
    store.commit('check')
}
const del=()=>{
    store.commit('del')
}
</script>

<style lang="scss" scoped>
.hand {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
}

img {
    width: 80px;
    height: 100px;
}

.van-checkbox {
    margin-left: 20px;
    margin-top: 30px;
}

.van-submit-bar {
    margin-bottom: 50px;
}
.bottom-button {
    width: 160px;
    height: 40px;
  }
</style>