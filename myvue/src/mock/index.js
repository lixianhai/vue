const Mock = require('mockjs')
const Random  = Mock.Random;
import axios from "axios";

Mock.mock('http://localhost:8080/userRoutesInfo', 'get', ( data ) => {
    let resources = []
    for (let i = 0; i < 10; i++) {
        resources.push({
            id: Random.date() + ' ' + Random.time(),
            label: '一级' + Random.csentence(2, 5),
            children: [{
                label: '二级 1-1-1'
            }]   
        })
    }
    return resources
})

Mock.mock('http://localhost:8080/login', 'get', ( params ) => {
    var userName = params.body;
    setTimeout(()=>{
        userName = null;
    },10000)
    return userName
})

Mock.mock('http://localhost:8080/getInfo', 'get', ( params ) => {
    
    var userName = params.body;
    var name = userName && userName.split('-')[0]
    var obj = {
        code: 200,
        name: 'super ' + name,
        roles: [name]
    }
    
    return obj

})