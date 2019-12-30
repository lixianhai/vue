<template>
    <div class="content-wrap">
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('page.components.button.BasicsButton')}}</h2>
                <el-col>
                    <el-button>{{this.$t('button.defaultButton')}}</el-button>
                    <el-button type="primary">{{this.$t('button.maintButton')}}</el-button>
                    <el-button type="success">{{this.$t('button.successtButton')}}</el-button>
                    <el-button type="info">{{this.$t('button.infoButton')}}</el-button>
                    <el-button type="warning">{{this.$t('button.warningButton')}}</el-button>
                    <el-button type="danger">{{this.$t('button.dangerButton')}}</el-button>
                </el-col>
                <el-col>
                    <el-button plain>{{this.$t('button.simpleButton')}}</el-button>
                    <el-button type="primary" plain>{{this.$t('button.maintButton')}}</el-button>
                    <el-button type="success" plain>{{this.$t('button.successtButton')}}</el-button>
                    <el-button type="info" plain>{{this.$t('button.infoButton')}}</el-button>
                    <el-button type="warning" plain>{{this.$t('button.warningButton')}}</el-button>
                    <el-button type="danger" plain>{{this.$t('button.dangerButton')}}</el-button>
                </el-col>
                <el-col>
                    <el-button round>{{this.$t('button.raduisButton')}}</el-button>
                    <el-button type="primary" round>{{this.$t('button.maintButton')}}</el-button>
                    <el-button type="success" round>{{this.$t('button.successtButton')}}</el-button>
                    <el-button type="info" round>{{this.$t('button.infoButton')}}</el-button>
                    <el-button type="warning" round>{{this.$t('button.warningButton')}}</el-button>
                    <el-button type="danger" round>{{this.$t('button.dangerButton')}}</el-button>
                </el-col>
                <el-col>
                    <el-button icon="el-icon-search" circle></el-button>
                    <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    <el-button type="success" icon="el-icon-check" circle></el-button>
                    <el-button type="info" icon="el-icon-message" circle></el-button>
                    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('page.components.button.disabledButton')}}</h2>
                <el-col>
                    <el-button disabled>{{this.$t('button.defaultButton')}}</el-button>
                    <el-button type="primary" disabled>{{this.$t('button.maintButton')}}</el-button>
                    <el-button type="success" disabled>{{this.$t('button.successtButton')}}</el-button>
                    <el-button type="info" disabled>{{this.$t('button.infoButton')}}</el-button>
                    <el-button type="warning" disabled>{{this.$t('button.warningButton')}}</el-button>
                    <el-button type="danger" disabled>{{this.$t('button.dangerButton')}}</el-button>
                </el-col>
                <el-col>
                    <el-button plain disabled>{{this.$t('button.simpleButton')}}</el-button>
                    <el-button type="primary" plain disabled>{{this.$t('button.maintButton')}}</el-button>
                    <el-button type="success" plain disabled>{{this.$t('button.successtButton')}}</el-button>
                    <el-button type="info" plain disabled>{{this.$t('button.infoButton')}}</el-button>
                    <el-button type="warning" plain disabled>{{this.$t('button.warningButton')}}</el-button>
                    <el-button type="danger" plain disabled>{{this.$t('button.dangerButton')}}</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('page.components.button.iconButton')}}</h2>
                <el-col>
                    <el-button type="primary" icon="el-icon-edit"></el-button>
                    <el-button type="primary" icon="el-icon-share"></el-button>
                    <el-button type="primary" icon="el-icon-delete"></el-button>
                    <el-button type="primary" icon="el-icon-search">{{this.$t('button.searchButton')}}</el-button>
                    <el-button type="primary">{{this.$t('button.uploadButton')}}<i class="el-icon-upload el-icon--right"></i></el-button>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('page.components.button.buttons')}}</h2>
                <el-col>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-arrow-left">{{this.$t('button.prevPageButton')}}</el-button>
                        <el-button type="primary">{{this.$t('button.nextPageButton')}}<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                    </el-button-group>
                    <el-button-group>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                    </el-button-group>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('page.components.button.size')}}</h2>
                <el-col>
                    <el-button>{{this.$t('button.defaultButton')}}</el-button>
                    <el-button size="medium">{{this.$t('button.secondButton')}}</el-button>
                    <el-button size="small">{{this.$t('button.smallButton')}}</el-button>
                    <el-button size="mini">{{this.$t('button.superSmallButton')}}</el-button>
                </el-col>
                <el-col>
                    <el-button round>{{this.$t('button.defaultButton')}}</el-button>
                    <el-button size="medium" round>{{this.$t('button.secondButton')}}</el-button>
                    <el-button size="small" round>{{this.$t('button.smallButton')}}</el-button>
                    <el-button size="mini" round>{{this.$t('button.superSmallButton')}}</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('button.textButton')}}</h2>
                <el-col>
                    <el-button type="text">{{this.$t('button.textButton')}}</el-button>
                    <el-button type="text" disabled>{{this.$t('button.textButton')}}</el-button>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <el-row>
                <h2>{{this.$t('button.loadingButton')}}</h2>
                <el-col>
                    <el-button type="primary" :loading="true">{{this.$t('button.loadingButton')}}</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box-shadow {
    margin-bottom: 20px;
}
.el-row {
    text-align: center;
    h2 {
        margin-bottom: 40px;
    }
    .el-col {
        margin-bottom: 20px;
    }
}
</style>