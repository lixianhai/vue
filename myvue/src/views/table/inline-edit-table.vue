<template>
  <div class="app-container content-wrap">
    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="Author">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="Importance">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Status" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="Title">
        <template slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.title" class="edit-input" size="small" />
            <el-button
              class="cancel-btn"
              size="small"
              icon="el-icon-refresh"
              type="warning"
              @click="cancelEdit(row)"
            >
              cancel
            </el-button>
          </template>
          <span v-else>{{ row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="{row}">
          <el-button
            v-if="row.edit"
            type="success"
            size="small"
            icon="el-icon-circle-check-outline"
            @click="confirmEdit(row)"
          >
            Ok
          </el-button>
          <el-button
            v-else
            type="primary"
            size="small"
            icon="el-icon-edit"
            @click="row.edit=!row.edit"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'InlineEditTable',
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
          status: 'published',
          title: 'Qqqd Uymjdvs Hzvkdri Uko Nhasg Zdmlulwz Ipvppyrq Dlazpo Eockeyg',
          actions: '',
          edit: false
        },
        {
          id: 2,
          timestamp: '1975-06-17 18:32',
          author: 'Steven',
          importance: 1,
          status: 'draft',
          title: 'Ludydfp Owzjwfa Xivy Cmgl Nlole',
          actions: '',
          edit: false
        },
        {
          id: 3,
          timestamp: '2007-01-26 03:05',
          author: 'Amy',
          importance: 3,
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
          status: 'deleted',
          title: 'Wuxvtfk Cki Imcg Gedfbegh Rgvzmpweq Eckglyyop Kbtkqmatqk Ccrb',
          actions: '',
          edit: false
        },
        {
          id: 11,
          timestamp: '1975-06-17 18:32',
          author: 'Steven',
          importance: 1,
          status: 'draft',
          title: 'Ludydfp Owzjwfa Xivy Cmgl Nlole',
          actions: '',
          edit: false
        },
        {
          id: 12,
          timestamp: '2007-01-26 03:05',
          author: 'Amy',
          importance: 3,
          status: 'published',
          title: 'Rhuzm Hfppphd Hhkhhlgo Tnyh Xwbgfnwy Msswybrlu Rqlgo Jhddf',
          actions: '',
          edit: false
        },
        {
          id: 13,
          timestamp: '1991-06-21 15:25',
          author: 'Kevin',
          importance: 1,
          status: 'deleted',
          title: 'Fsznwkurf Htjljjrfbv Fkdq Ifxyyb Laafdqvk Zjrulmv Rrw Ltjpn Lktybmsyqp Ahojkmvjm',
          actions: '',
          edit: false
        },
        {
          id: 14,
          timestamp: '1991-06-21 15:25',
          author: 'Kevin',
          importance: 1,
          status: 'deleted',
          title: 'Fsznwkurf Htjljjrfbv Fkdq Ifxyyb Laafdqvk Zjrulmv Rrw Ltjpn Lktybmsyqp Ahojkmvjm',
          actions: '',
          edit: false
        }
      ],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    
  },
  methods: {
    cancelEdit(row) {
      row.title = row.originalTitle
      row.edit = false
      this.$message({
        message: 'The title has been restored to the original value',
        type: 'warning'
      })
    },
    confirmEdit(row) {
      row.edit = false
      row.originalTitle = row.title
      this.$message({
        message: 'The title has been edited',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
