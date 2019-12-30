<template>
    <div class="content-wrap">
        <el-button type="primary" @click="handleAddRole">{{this.$t('button.newRole')}}</el-button>

        <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
            <el-table-column align="center" prop="roleName" label="Role Key" width="220"></el-table-column>
            <el-table-column align="center" prop="roleName" label="Role Name" width="220"></el-table-column>
            <el-table-column align="header-center" prop="describe" label="Description"></el-table-column>
            <el-table-column align="center" label="Operations">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="handleEdit(scope)">{{Edit}}</el-button>
                    <el-button type="danger" size="small" @click="handleDelete(scope)">{{Delete}}</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogVisible" @close="closeDialog" :title="dialogType==='edit'?'Edit Role':'New Role'">
            <el-form :model="role" label-width="80px" ref="roleForm" :rules="rules" label-position="left">
                <el-form-item label="Name" prop="name">
                <el-input v-model="role.name" placeholder="Role Name" />
                </el-form-item>
                <el-form-item label="Desc" prop="description">
                <el-input
                    v-model="role.description"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    type="textarea"
                    placeholder="Role Description"
                />
                </el-form-item>
            </el-form>
            <div style="text-align:right;">
                <el-button type="danger" @click="dialogVisible=false">Cancel</el-button>
                <el-button type="primary" @click="confirmRole">Confirm</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Edit: this.$t('button.edit'),
            Delete: this.$t('button.delete'),
            dialogVisible: false,
            dialogType: 'new',
            editIndex: -1,
            editRow: {},
            role: {
                key: '',
                name: '',
                description: '',
                routes: []
            },
            rolesList: [
                {
                    roleName: 'admin',
                    describe: 'Super Administrator. Have access to view all pages.'
                },
                {
                    roleName: 'editor',
                    describe: 'Normal Editor. Can see all pages except permission page'
                },
                {
                    roleName: 'visitor',
                    describe: 'Just a visitor. Can only see the home page and the document page'
                }
            ],
            rules: {
                name: [
                    // { required: true, message: 'Please input role name', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        
    },
    computed: {
        routesData() {
            return this.routes
        }
    },
    methods: {
        handleAddRole() {
            this.dialogVisible = true
            this.role.name = ''
            this.role.description = ''
        },
        handleEdit({ $index, row }) {
            this.dialogType = 'edit'
            this.dialogVisible = true
            this.editIndex = $index
            this.editRow = row
            this.role.name = row.roleName
            this.role.description = row.describe
        },
        handleDelete({ $index, row }) {
            this.$confirm('Confirm to remove the role?', 'Warning', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(async() => {
                this.rolesList.splice($index,1)
                this.$message({
                    type: 'success',
                    message: 'Delete succed!'
                })
            }).catch(err => { console.error(err) })
        },
        confirmRole() {
            this.$refs['roleForm'].validate((valid) => {
                if (valid) {
                    if(this.dialogType == 'edit') {
                        if(this.role.description !== '') {
                            this.rolesList[this.editIndex].describe = this.role.description
                        }
                        if(this.role.name !== '') {
                            this.rolesList[this.editIndex].roleName = this.role.name
                        }
                        this.dialogVisible = false
                        this.$refs['roleForm'].resetFields();
                        console.log(this.editRow)
                        this.$notify({
                            title: 'Success',
                            dangerouslyUseHTMLString: true,
                            message: `
                                <div>Role Key: ${this.editRow.roleName}</div>
                                <div>Role Nmae: ${this.editRow.roleName}</div>
                                <div>Description: ${this.editRow.describe}</div>
                            `,
                            type: 'success'
                        })
                    }else {
                        var arr = { roleName:this.role.name,describe:this.role.description }
                        this.rolesList.push(arr)
                        this.dialogVisible = false
                        this.$refs['roleForm'].resetFields()
                    }
                }
            });
        },
        closeDialog() {
            this.$refs['roleForm'].resetFields()
        }
    }
}
</script>

<style lang="less" scope>
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
</style>