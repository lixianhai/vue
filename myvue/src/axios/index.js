import axios from 'axios'

const servers = axios.create({
    baseURL:'http://localhost:8080',
    timeout: 50000
})

servers.interceptors.response.use(
    response => {
        return Promise.resolve(response.data)
    }
)

export default servers

