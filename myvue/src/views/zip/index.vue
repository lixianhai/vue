<template>
  <div class="app-container content-wrap">
    <el-input v-model="filename" placeholder="Please enter the file name (default file)" style="width:300px;" prefix-icon="el-icon-document" />
    <el-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="document" @click="handleDownload">
      Export Zip
    </el-button>
    <el-table :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="95" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
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
  name: 'ExportZip',
  data() {
    return {
      list: [
        {
          id: 1,
          timestamp: '2008-03-26 01:00',
          author: 'Barbara',
          importance: 3,
          pageviews: '4257',
          status: 'published',
          title: 'Qqqd Uymjdvs Hzvkdri Uko Nhasg Zdmlulwz Ipvppyrq Dlazpo Eockeyg',
          drag: ''
        },
        {
          id: 2,
          timestamp: '1975-06-17 18:32',
          author: 'Steven',
          importance: 1,
          pageviews: '4257',
          status: 'draft',
          title: 'Ludydfp Owzjwfa Xivy Cmgl Nlole',
          drag: ''
        },
        {
          id: 3,
          timestamp: '2007-01-26 03:05',
          author: 'Amy',
          importance: 3,
          pageviews: '4257',
          status: 'published',
          title: 'Rhuzm Hfppphd Hhkhhlgo Tnyh Xwbgfnwy Msswybrlu Rqlgo Jhddf',
          actions: '',
          edit: false
        },
        {
          id: 4,
          timestamp: '1991-06-21 15:25',
          author: 'Kevin',
          importance: 1,
          pageviews: '4257',
          status: 'deleted',
          title: 'Fsznwkurf Htjljjrfbv Fkdq Ifxyyb Laafdqvk Zjrulmv Rrw Ltjpn Lktybmsyqp Ahojkmvjm',
          actions: '',
          edit: false
        },
        {
          id: 5,
          timestamp: '1974-06-27 12:23',
          author: 'Melissa',
          importance: 1,
          pageviews: '4257',
          status: 'deleted',
          title: 'Wxqaynmb Omj Wcewuwhdkb Lzbtwm Hikedkdsme Hyljm Pah Dwsgifpv Osqeeoq',
          actions: '',
          edit: false
        },
        {
          id: 6,
          timestamp: '1988-10-30 12:58',
          author: 'Gary',
          importance: 2,
          pageviews: '4257',
          status: 'deleted',
          title: 'Kcee Kvxt Jbqwky Fsp Unhjq Ritjqcyr',
          actions: '',
          edit: false
        },
        {
          id: 7,
          timestamp: '1987-10-18 23:44',
          author: 'Karen',
          importance: 2,
          pageviews: '4257',
          status: 'deleted',
          title: 'Gieiwj Fduukifzmx Lcvmyk Ducwrjb Jqfuwujdk Crpkmml',
          actions: '',
          edit: false
        },
        {
          id: 8,
          timestamp: '1994-01-12 02:35',
          author: 'Susan',
          importance: 3,
          pageviews: '4257',
          status: 'deleted',
          title: 'Gtm Fopps Ffdbok Xspogce Inas Qplirqy',
          actions: '',
          edit: false
        },
        {
          id: 9,
          timestamp: '1999-12-15 06:05',
          author: 'William',
          importance: 2,
          pageviews: '4257',
          status: 'draft',
          title: 'Jjrpqbdw Nwvjnf Iwii Yegdl Aadhhyqnc Kvmvvf Yvd',
          actions: '',
          edit: false
        },
        {
          id: 10,
          timestamp: '2008-08-13 18:02',
          author: 'Margaret',
          importance: 2,
          pageviews: '4257',
          status: 'deleted',
          title: 'Wuxvtfk Cki Imcg Gedfbegh Rgvzmpweq Eckglyyop Kbtkqmatqk Ccrb',
        }
      ],
      listLoading: true,
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Zip').then(zip => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        zip.export_txt_to_zip(tHeader, data, this.filename, this.filename)
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>
