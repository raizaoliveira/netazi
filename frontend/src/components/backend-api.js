import axios from 'axios'

const AXIOS = axios.create({
  baseURL: `/api`,
  timeout: 1000
});


export default {
    getSystem() {
        return AXIOS.get(`/system/`);
    },
    callHelloApi(){
      return AXIOS.get( `/hello` )
    },
    createSystem(name, description, status) {
        return AXIOS.post(`/system/` + name + '/' + description + '/' + status);
    }
}


