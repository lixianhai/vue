<template>
    <el-row>
        <el-col :span="6" style="padding:0 10px;">
            <div class="box-shadow">
                <div class="el-card__header">About me</div>
                <div class="el-card__body">
                    <div class="user-profile">
                        <div class="box-center">
                            <div class="pan-item">
                                <div class="pan-info">
                                    <div class="pan-info-roles-container">
                                        <div>Hello {{name}}</div>
                                    </div>
                                    <div class="pan-thumb"></div>
                                </div>
                            </div>
                        </div>
                        <div class="box-center">
                            <div class="user-name text-center">{{name=='admin'?'Super Admin':'Normal Editor'}}</div>
                            <div class="user-rule text-center text-muted">{{name}}</div>
                        </div>
                    </div>
                    <div class="user-bio">
                        <div class="user-education user-bio-section">
                            <div class="user-bio-section-header">
                                <svg-icon icon-class="book" />
                                <span>Education</span>
                            </div>
                            <div class="user-bio-section-body">
                                <div class="text-muted">JS in Computer Science from the University of Technology</div>
                            </div>
                        </div>
                        <div class="user-skills user-bio-section">
                            <div class="user-bio-section-header">
                                <svg-icon icon-class="skills" />
                                <span>Skills</span>
                            </div>
                            <div class="user-bio-section-body">
                                <div class="progress-item">
                                    <span>Vue</span>
                                    <el-progress :percentage="70"></el-progress>
                                </div>
                                <div class="progress-item">
                                    <span>JavaScript</span>
                                    <el-progress :percentage="80"></el-progress>
                                </div>
                                <div class="progress-item">
                                    <span>Css</span>
                                    <el-progress :percentage="100" status="success"></el-progress>
                                </div>
                                <div class="progress-item">
                                    <span>Echarts</span>
                                    <el-progress :percentage="50"></el-progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col :span="18" style="padding:0 10px;">
            <div class="box-shadow">
                <div class="el-card__body">
                    <el-tabs v-model="tabs">
                        <el-tab-pane label="Activity" name="Activity">
                            <div class="user-activity">
                                <div class="post">
                                    <div class="user-block">
                                        <img src="https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg?imageView2/1/w/80/h/80">
                                        <span class="username text-muted">Iron Man</span>
                                        <span class="description">Shared publicly - 7:30 PM today</span>
                                    </div>
                                    <p>
                                        Lorem ipsum represents a long-held tradition for designers,
                                        typographers and the like. Some people hate it and argue for
                                        its demise, but others ignore the hate as they create awesome
                                        tools to help create filler text for everyone from bacon lovers
                                        to Charlie Sheen fans.
                                    </p>
                                    <ul class="list-inline">
                                        <li>
                                            <span class="link-black text-sm">
                                                <i class="el-icon-share"></i> Share
                                            </span>
                                        </li>
                                        <li>
                                            <span class="link-black text-sm">Link</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="post">
                                    <div class="user-block">
                                        <img src="https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg?imageView2/1/w/80/h/80">
                                        <span class="username text-muted">Captain American</span>
                                        <span class="description">Sent you a message - yesterday</span>
                                    </div>
                                    <p>
                                        Lorem ipsum represents a long-held tradition for designers,
                                        typographers and the like. Some people hate it and argue for
                                        its demise, but others ignore the hate as they create awesome
                                        tools to help create filler text for everyone from bacon lovers
                                        to Charlie Sheen fans.
                                    </p>
                                    <ul class="list-inline">
                                        <li>
                                            <span class="link-black text-sm">
                                                <i class="el-icon-share"></i> Share
                                            </span>
                                        </li>
                                        <li>
                                            <span class="link-black text-sm">Link</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="post">
                                    <div class="user-block">
                                        <img src="https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg?imageView2/1/w/80/h/80">
                                        <span class="username text-muted">Spider Man</span>
                                        <span class="description">Posted 4 photos - 2 days ago</span>
                                    </div>
                                    <div class="user-images">
                                        <el-carousel :interval="4000" type="card" height="200px">
                                            <el-carousel-item>
                                                <img src="https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg?imageView2/2/h/440">
                                            </el-carousel-item>
                                            <el-carousel-item>
                                                <img src="https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg?imageView2/2/h/440">
                                            </el-carousel-item>
                                            <el-carousel-item>
                                                <img src="https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg?imageView2/2/h/440">
                                            </el-carousel-item>
                                            <el-carousel-item>
                                                <img src="https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg?imageView2/2/h/440" >
                                            </el-carousel-item>
                                        </el-carousel>
                                    </div>
                                    <ul class="list-inline">
                                        <li>
                                            <span class="link-black text-sm">
                                                <i class="el-icon-share"></i> Share
                                            </span>
                                        </li>
                                        <li>
                                            <span class="link-black text-sm">Link</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Timeline" name="Timeline">
                            <div class="block">
                                <ul class="el-timeline">
                                    <li class="el-timeline-item">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__timestamp is-top">2019/4/20</div>
                                            <div class="el-timeline-item__content"></div>
                                            <div class="el-card is-always-shadow"><!---->
                                                <div class="el-card__body">
                                                    <h4>Update Github template</h4> 
                                                    <p>PanJiaChen committed 2019/4/20 20:46</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="el-timeline-item">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__timestamp is-top">2019/4/21</div>
                                            <div class="el-timeline-item__content"></div>
                                            <div class="el-card is-always-shadow"><!---->
                                                <div class="el-card__body">
                                                    <h4>Update Github template</h4> 
                                                    <p>PanJiaChen committed 2019/4/20 20:46</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="el-timeline-item">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__timestamp is-top">2019/4/22</div>
                                            <div class="el-timeline-item__content"></div>
                                            <div class="el-card is-always-shadow"><!---->
                                                <div class="el-card__body">
                                                    <h4>Update Github template</h4> 
                                                    <p>PanJiaChen committed 2019/4/20 20:46</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="el-timeline-item">
                                        <div class="el-timeline-item__tail"></div>
                                        <div class="el-timeline-item__node el-timeline-item__node--normal el-timeline-item__node--"></div>
                                        <div class="el-timeline-item__wrapper">
                                            <div class="el-timeline-item__timestamp is-top">2019/4/23</div>
                                            <div class="el-timeline-item__content"></div>
                                            <div class="el-card is-always-shadow"><!---->
                                                <div class="el-card__body">
                                                    <h4>Update Github template</h4> 
                                                    <p>PanJiaChen committed 2019/4/20 20:46</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="Account" name="Account">
                            <el-form class="demo-form-inline">
                                <el-form-item label="Name">
                                    <el-input :value="name=='admin'?'Super Admin':'Normal Editor'"></el-input>
                                </el-form-item>
                                <el-form-item label="Email">
                                    <el-input value="lixianhai@163.com"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import Cookies from 'js-cookie'
export default {
    data() {
        return {
            tabs:'Activity',
            name:JSON.parse(Cookies.get('user_token')).name
        }
    },
    created() {
        
    }
}
</script>

<style lang="less" scoped>
.el-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #e6ebf5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.el-card__body {
    padding: 20px;
    .user-profile {
        .box-center {
            padding-top: 10px;
            margin: 0 auto;
            display: table;
            .pan-item {
                z-index: 1;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                cursor: default;
                -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.2);
                box-shadow: 0 1px 3px rgba(0,0,0,.2);
                &:hover .pan-thumb{
                    -webkit-transform: rotate(-110deg);
                    transform: rotate(-110deg);
                }
                .pan-info {
                    position: absolute;
                    width: inherit;
                    height: inherit;
                    border-radius: 50%;
                    -webkit-box-shadow: inset 0 0 0 5px rgba(0,0,0,.05);
                    box-shadow: inset 0 0 0 5px rgba(0,0,0,.05);
                    .pan-info-roles-container {
                        padding: 20px;
                        text-align: center;
                    }
                    .pan-thumb {
                        width: 100%;
                        height: 100%;
                        background-position: 50%;
                        background-size: cover;
                        border-radius: 50%;
                        overflow: hidden;
                        position: absolute;
                        top: 0;
                        -webkit-transform-origin: 95% 40%;
                        transform-origin: 95% 40%;
                        -webkit-transition: all .3s ease-in-out;
                        transition: all .3s ease-in-out;
                        background-image: url(https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif);
                    }
                }
            }
        }
        .user-name {
            font-weight: 700;
        }
        .user-rule {
            padding-top: 10px;
            font-weight: 400;
            font-size: 14px;
        }
        .text-muted {
            color: #777;
        }
    }
    .user-bio {
        margin-top: 20px;
        color: #606266;
        .user-bio-section {
            font-size: 14px;
            padding: 15px 0;
            .user-bio-section-header {
                border-bottom: 1px solid #dfe6ec;
                padding-bottom: 10px;
                margin-bottom: 10px;
                font-weight: 700;
                .svg-icon {
                    width: 1em;
                    height: 1em;
                    vertical-align: -.15em;
                    fill: currentColor;
                    overflow: hidden;
                }
            }
            .text-muted {
                color: #777;
            }
        }
        span {
            padding-left: 4px;
        }
    }
}
.user-activity {
    .post {
        font-size: 14px;
        border-bottom: 1px solid #d2d6de;
        margin-bottom: 15px;
        padding-bottom: 15px;
        color: #666;
        .user-block {
            img {
                border-radius: 50%;
                width: 40px;
                height: 40px;
                float: left;
            }
            span {
                font-weight: 500;
                font-size: 12px;
            }
            .text-muted {
                color: #777;
            }
            .username {
                font-size: 16px;
                color: #000;
                display: block;
                margin-left: 50px;
                padding: 2px 0;
            }
            .description {
                display: block;
                margin-left: 50px;
                padding: 2px 0;
            }
        }
        .list-inline {
            padding-left: 0;
            margin-left: -5px;
            list-style: none;
            li {
                display: inline-block;
                padding-right: 5px;
                padding-left: 5px;
                font-size: 13px;
                &:hover {
                    color: #999;
                }
            }
        }
        .user-images {
            padding-top: 20px;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.block {
    display: block;
    .el-timeline {
        margin: 0;
        font-size: 14px;
        list-style: none;
        .el-timeline-item {
            position: relative;
            padding-bottom: 20px;
            .el-timeline-item__tail {
                position: absolute;
                left: 4px;
                height: 100%;
                border-left: 2px solid #dfe4ed;
            }
            .el-timeline-item__node--normal {
                left: -1px;
                width: 12px;
                height: 12px;
            }
            .el-timeline-item__node {
                position: absolute;
                background-color: #dfe4ed;
                border-radius: 50%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
            }
            .el-timeline-item__wrapper {
                position: relative;
                padding-left: 28px;
                top: -3px;
                .el-timeline-item__timestamp.is-top {
                    margin-bottom: 8px;
                    padding-top: 4px;
                }
                .el-timeline-item__timestamp {
                    color: #909399;
                    line-height: 1;
                    font-size: 13px;
                }
                .el-timeline-item__content {
                    color: #303133;
                }
                .el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover {
                    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                }
            }
        }      
    }
}
/deep/.el-form-item {
    margin-bottom: 22px;
    .el-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        font-weight: 700;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .el-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
    }
    .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    }
}
</style>