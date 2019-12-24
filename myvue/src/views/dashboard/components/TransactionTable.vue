<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { transactionList } from '@/api/remote-search'
import Cookies from 'js-cookie'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      userName:'admin',
      list: [
        {
          order_no: '《代码大全》 史蒂夫·迈克康奈尔',
          price: '1,489.5',
          status: 'success'
        },
        {
          order_no: '《程序员修炼之道》',
          price: '2,755.7',
          status: 'success'
        },
        {
          order_no: '《计算机程序的构造和解释》',
          price: '6,397.6',
          status: 'pending'
        },
        {
          order_no: '《C程序设计语言》',
          price: '6,178',
          status: 'success'
        },
        {
          order_no: '《算法导论》',
          price: '5,271.53',
          status: 'success'
        },
        {
          order_no: '《重构：改善既有代码的设计》',
          price: '9,064.8',
          status: 'pending'
        },
        {
          order_no: '《深入浅出设计模式》',
          price: '7,214.8',
          status: 'success'
        },
        {
          order_no: '《JavaScript 面向对象编程》',
          price: '12,214.8',
          status: 'success'
        }
      ]
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // fetchData() {
    //   transactionList().then(response => {
    //     this.list = response.data.items.slice(0, 8)
    //   })
    // }
  }
}
</script>

<style lang="less" scope>
.el-table td {
    padding: 8px 0;
}
label {
    font-weight: 700;
}
.el-tag--danger {
    background-color: rgba(255,73,73,.1);
    border-color: rgba(255,73,73,.2);
    color: #ff4949;
}
</style>
