import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const apiUrl = 'http://127.0.0.1:5000';

export default{
    saveBreakfastButton(state){
        return Vue.http.post(`${apiUrl}/saveBreakfastButton`, { state });
    },
    getBreakfastButton(){
        return Vue.http.get(`${apiUrl}/saveBreakfastButton`)
    }
}