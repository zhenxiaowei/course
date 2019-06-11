Vue.component('greeting',{
    template:'' +
    '<p>' +
    '{{name}}:我是组件的内容' +
    '<button v-on:click="changeName">改名</button>' +
    '</p>',
    data(){
        return {
            name:"鹿晗"
        }
    },
    methods:{
        changeName:function () {
            this.name='henry'
        }
    }
});


new Vue({
    el: "#app-one",//容器
});
 new Vue({
    el: "#app-two",//容器
});
