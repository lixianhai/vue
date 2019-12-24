import request from "../axios";

export function userRoutesInfo( data ) {
    return request({
        url: 'http://localhost:8080/userRoutesInfo',
        methods: 'get',
        data
    })
}
export function login( data ) {
    return request({
        url: 'http://localhost:8080/login',
        methods: 'get',
        data
    })
}

export function getInfo( data ) {
    return request({
        url: 'http://localhost:8080/getInfo',
        methods: 'get',
        data
    })
}