new Vue({
    el: "#app",//容器
    data: {//存储数据
        name: "zxw",
        job: "web开发",
        website:"www.baidu.com",
        websiteTag:"<a href='www.baidu.com'>web开发1</a>"
    },
    methods: {//定义方法
        greet: function (time) {
            return "good "+time+" "+this.name+"!"
        }
    }
});