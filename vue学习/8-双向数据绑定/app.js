new Vue({
    el: "#app",//容器
    data: {//存储数据
        name: '',
        age: '',
        names:'hello'

    },
    methods: {//定义方法
        logName: function () {
            console.log("正在输入姓名");
            this.name=this.$refs.name.value
        },
        logAge: function () {
            console.log("正在输入年龄");
            this.age=this.$refs.age.value

        }
    }
});