<template>
    <div class="content-wrap">
        <div class="box-shadow content-wrap">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="demonstration">默认 Hover 指示器触发</div>
                    <el-carousel height="200px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col :span="12">
                    <div class="demonstration">Click 指示器触发</div>
                    <el-carousel trigger="click" height="200px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
            </el-row>
        </div>
        <div class="box-shadow content-wrap">
            <h2>卡片化</h2>
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item>
                    <img src="@/assets/鬼刀1.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀2.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀3.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀4.jpg">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="box-shadow content-wrap">
            <h2>轮播方向</h2>
            <el-carousel height="650px" direction="vertical">
                <el-carousel-item>
                    <img src="@/assets/鬼刀1.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀2.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀3.jpg">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/鬼刀4.jpg">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style lang="less" scope>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
// .el-carousel__indicators {
//     position: absolute;
// }
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
    text-align: center;
}
.box-shadow {
    margin-bottom: 20px;
}
h2 {
    text-align: center;
    margin-top: 0;
}
img {
    width: 100%;
    height: 100%;
}
</style>