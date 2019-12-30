<template>
  <div class="app-container content-wrap">
    <!-- Note that row-key is necessary to get a correct row order. -->
    <el-table ref="dragTable" :data="list" row-key="id" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="110px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="icon-star" />
        </template>
      </el-table-column>

      <el-table-column align="center" label="Readings" width="95">
        <template slot-scope="scope">
          <span>{{ scope.row.pageviews }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Drag" width="80">
        <template slot-scope="{}">
          <svg-icon class="drag-handler" icon-class="drag" />
        </template>
      </el-table-column>
    </el-table>
    <div class="show-d">
      <el-tag>{{this.$t('page.table.drapTable.defauleSort')}}</el-tag> {{ oldList }}
    </div>
    <div class="show-d">
      <el-tag>{{this.$t('page.table.drapTable.sort')}}</el-tag> {{ newList }}
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'DragTable',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
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
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      sortable: null,
      oldList: [],
      newList: []
    }
  },
  mounted() {
    this.setSort()
  },
  methods: {
    setSort() {
      this.oldList = this.list.map(v => v.id)
      this.newList = this.oldList.slice()
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          const targetRow = this.list.splice(evt.oldIndex, 1)[0]
          this.list.splice(evt.newIndex, 0, targetRow)

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
          this.newList.splice(evt.newIndex, 0, tempIndex)
        }
      })
    }
  }
}
</script>

<style>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
</style>

<style scoped>
.icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
</style>
