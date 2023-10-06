import axios from 'axios'

let offset = 0;
let chunkSize = 1
export default {
    getMarkdown(name, chunk) {
        return axios.get(`/md/${name}/${chunk}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getJSON(name) {
        return axios.get(`/json/${name}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getMdData(name) {
        return axios.get(`/md/${name}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getDetails(id){
        return axios.get(`/make/${id}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    }
}