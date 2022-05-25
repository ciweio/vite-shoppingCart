<template>
  <div class="goods-container">
    <div class="left">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" :id="id" :checked="ischecked"
               @change="monitorSingleChange">
        <label class="form-check-label" :for="id">
          <img :src="url" alt="thumbnail" class="thumb"/>
        </label>
      </div>
    </div>

    <div class="right">
      <div class="top">{{ desc }}</div>
      <div class="bottom">
        <div class="price">￥{{ price }}</div>
        <es-counter :count="count" @countChange="getCountChange"/>
      </div>
    </div>
  </div>
</template>

<script>
import esCounter from "./EsCounter.vue";


export default {
  name: "es-commodities",
  components: {
    esCounter
  },
  props: ['id', 'url', 'desc', 'price', 'count', "ischecked"],
  emits: ['stateChange', 'countModify'],
  data() {
    return {}
  },
  methods: {
    monitorSingleChange(e) {
      this.$emit('stateChange', {
        id: this.id,
        value: e.target.checked,
      })
    },
    getCountChange(newCount) {
      this.$emit('countModify', {
        id: this.id,
        value: newCount,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;

  //相邻兄弟选择器(+): .goods-container + .goods-container
  + .goods-container {
    border-top: 1px solid #efefef;
  }

  .left {
    margin-right: 10px;

    .form-check-input {
      border-radius: 10px;
      position: relative;
      top: 44px;
    }

    .thumb {
      display: block;
      width: 100px;
      height: 100px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .top {
      font-weight: bold;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>