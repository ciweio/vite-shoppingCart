<template>
  <div class="app-container">
    <es-header title="LOL购物车"/>
    <es-commodities v-for="item in commodity_list" key="item.gid"
                    :id="item.gid"
                    :url="item.commodityUrl"
                    :desc="item.commodityDesc"
                    :price="item.commodityPrice"
                    :count="item.commodityCount"
                    :ischecked="item.ischecked"
                    @stateChange="stateModify"
                    @countModify="countModify"/>
    <es-footer :amount="amount" :total="total" v-model:isfull="isfull" @fullChange="monitorFullChange"/>
  </div>
</template>

<script>
import esHeader from "./components/EsHeader.vue";
import esCommodities from "./components/EsCommodities.vue";
import esFooter from "./components/EsFooter.vue";


export default {
  name: 'App',
  components: {
    esHeader,
    esCommodities,
    esFooter
  },
  data() {
    return {
      commodity_list: [],
      isfull: false
    }
  },
  computed: {
    amount() {
      let tp = 0
      this.commodity_list
          .filter(x => x.ischecked)
          .forEach(x => {
            tp += x.commodityPrice * x.commodityCount;
          })
      return tp;
    },
    total() {
      let sum = 0
      this.commodity_list
          .filter(x => x.ischecked)
          .forEach(x => (sum += x.commodityCount));
      return sum;
    }
  },
  created() {
    this.getCommodityList();
  },
  methods: {
    async getCommodityList() {
      const {data: ret} = await this.$http.get('commodity');
      if (ret.code === 20000) {
        this.commodity_list = ret.data;
        // console.log(this.commodity_list);
      } else {
        alert('Server Failure');
      }
    },
    monitorFullChange(isfull) {
      console.log(isfull);
      this.commodity_list.forEach(x => x.ischecked = isfull)
    },
    stateModify(e) {
      console.log(e);
      const retObj = this.commodity_list.find(x => x.gid === e.id)
      // console.log(retObj);
      if (retObj) {
        retObj.ischecked = e.value;
      }
      // const {data: ret} = await this.$http.put('commodity/upd', e);
    },
    countModify(e) {
      const retObj = this.commodity_list.find(x => x.gid === e.id)
      // console.log(retObj);
      if (retObj) {
        retObj.commodityCount = e.value;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 45px 0 50px 0;
}
</style>