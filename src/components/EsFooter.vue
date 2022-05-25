<template>
  <div class="footer-container">
    <!-- 全选 -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" :checked="isfull"
             @change="onCheckBoxChange">
      <label class="form-check-label" for="flexCheckDefault">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计：</span>
      <!-- .toFixed(2)渲染结果保留两位小数 -->
      <span class="amount">￥{{ amount }}</span>
    </div>
    <!-- 结算 -->
    <button type="button" class="btn btn-dark" :disabled="total === 0">结算({{ total }})</button>
  </div>
</template>

<script>
export default {
  name: "es-footer",
  props: {
    amount: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    isfull: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['update:isfull', 'fullChange'],
  data() {
    return {}
  },
  methods: {
    onCheckBoxChange(e) {
      this.$emit('update:isfull', e.target.checked);
      this.$emit('fullChange', e.target.checked);//e.target.checked: 复选框最新的选中状态
    }
  }
}
</script>

<style lang="less" scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: white;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .form-check-input {
    border-radius: 10px;
  }

  .amount {
    color: crimson;
    font-weight: bold;
  }

  .btn-dark {
    color: #B59758;
    width: 90px;
    height: 38px;
    border-radius: 20px;
    margin: 0 0 0 20px;
  }
}
</style>