<template>
  <div class="app-container content-wrap">
    <el-input v-model="filename" placeholder="Please enter the file name (default excel-list)" style="width:350px;" prefix-icon="el-icon-document" />
    <el-button :loading="downloadLoading" style="margin-bottom:20px" type="primary" icon="document" @click="handleDownload">
      Export Selected Items
    </el-button>
    <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
      <el-tag type="info">Documentation</el-tag>
    </a>
    <el-table
      ref="multipleTable"
      :data="list"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="PDate" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'SelectExcel',
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'Inqmgrigib Xxpc Wpxaen Tvvifnykv Lwfjlgbxe Krqkdw Jfcsfgl Trcmuwpxk Vgmflhw',
          author: 'Linda',
          pageviews: '2828',
          display_time: '1986-06-05 17:21'
        },
        {
          id: 2,
          title: 'Slclv Ytakiictiw Kubtn Iemx Oqfb Dba',
          author: 'Sharon',
          pageviews: '1126',
          display_time: '1983-03-07 10:56'
        },
        {
          id: 3,
          title: 'Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe',
          author: 'Joseph',
          pageviews: '938',
          display_time: '1999-07-10 09:54'
        },
        {
          id: 4,
          title: 'Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp',
          author: 'Donna',
          pageviews: '943',
          display_time: '1971-11-26 12:33'
        },
        {
          id: 5,
          title: 'Wvjacn Ouruxmvfb Bbwtttv Ludeppqx Lnsgqd Ojfp',
          author: 'Patricia',
          pageviews: '3052',
          display_time: '2017-03-09 02:43'
        },
        {
          id: 6,
          title: 'Xmtdurufy Ouyjfvgn Juutjttsf Gxxbqcg Obcxmgnp Kopv Jjndo Lwso Wocxufrc',
          author: 'Susan',
          pageviews: '1553',
          display_time: '985-12-31 07:20'
        },
        {
          id: 7,
          title: 'Hyajbxhu Rhivpy Qhr Hwsmxutbu Ccjyfci Gircnnb Xrmgoeypu Occwbehd Xidutqmiv',
          author: 'Brenda',
          pageviews: '1297',
          display_time: '2006-10-24 13:43'
        },
        {
          id: 8,
          title: 'Uiurtmrkv Gftr Zbxivct Qjaohlok Vlcz Selxuxjhq Jkbfrpyt Rpobayi Gcqxwwh',
          author: 'Elizabeth',
          pageviews: '4006',
          display_time: '1993-09-08 06:11'
        },
        {
          id: 9,
          title: 'Koc Hemnjyc Tnckpjssz Txigwe Ojn Empudeci',
          author: 'Kimberly',
          pageviews: '4363',
          display_time: '1988-08-29 12:54'
        },
        {
          id: 10,
          title: 'Inqmgrigib Xxpc Wpxaen Tvvifnykv Lwfjlgbxe Krqkdw Jfcsfgl Trcmuwpxk Vgmflhw',
          author: 'Linda',
          pageviews: '2828',
          display_time: '1986-06-05 17:21'
        },
        {
          id: 11,
          title: 'Slclv Ytakiictiw Kubtn Iemx Oqfb Dba',
          author: 'Sharon',
          pageviews: '1126',
          display_time: '1983-03-07 10:56'
        },
        {
          id: 12,
          title: 'Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe',
          author: 'Joseph',
          pageviews: '938',
          display_time: '1999-07-10 09:54'
        },
        {
          id: 13,
          title: 'Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp',
          author: 'Donna',
          pageviews: '943',
          display_time: '1971-11-26 12:33'
        },
        {
          id: 14,
          title: 'Wvjacn Ouruxmvfb Bbwtttv Ludeppqx Lnsgqd Ojfp',
          author: 'Patricia',
          pageviews: '3052',
          display_time: '2017-03-09 02:43'
        },
        {
          id: 15,
          title: 'Xmtdurufy Ouyjfvgn Juutjttsf Gxxbqcg Obcxmgnp Kopv Jjndo Lwso Wocxufrc',
          author: 'Susan',
          pageviews: '1553',
          display_time: '985-12-31 07:20'
        },
        {
          id: 16,
          title: 'Hyajbxhu Rhivpy Qhr Hwsmxutbu Ccjyfci Gircnnb Xrmgoeypu Occwbehd Xidutqmiv',
          author: 'Brenda',
          pageviews: '1297',
          display_time: '2006-10-24 13:43'
        },
        {
          id: 17,
          title: 'Uiurtmrkv Gftr Zbxivct Qjaohlok Vlcz Selxuxjhq Jkbfrpyt Rpobayi Gcqxwwh',
          author: 'Elizabeth',
          pageviews: '4006',
          display_time: '1993-09-08 06:11'
        },
        {
          id: 18,
          title: 'Koc Hemnjyc Tnckpjssz Txigwe Ojn Empudeci',
          author: 'Kimberly',
          pageviews: '4363',
          display_time: '1988-08-29 12:54'
        },
        {
          id: 19,
          title: 'Wdlao Jowe Lxpmbx Oimv Jfjejj Nhrmk Smiuw Jgjbm Qlqxe',
          author: 'Joseph',
          pageviews: '938',
          display_time: '1999-07-10 09:54'
        },
        {
          id: 20,
          title: 'Udxexwqi Fkynr Cfxswq Eqpfgaxk Zteyw Fjvpvhjgp',
          author: 'Donna',
          pageviews: '943',
          display_time: '1971-11-26 12:33'
        }
      ],
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
          const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
          const list = this.multipleSelection
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename
          })
          this.$refs.multipleTable.clearSelection()
          this.downloadLoading = false
        })
      } else {
        this.$message({
          message: 'Please select at least one item',
          type: 'warning'
        })
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>
