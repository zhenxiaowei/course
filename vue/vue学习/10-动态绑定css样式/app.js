new Vue({
    el: "#app",//容器
    data: {//存储数据
        changeColor: false,
        chengeLength: false

    },
    methods: {//定义方法

    },
    computed: {//计算属性
        compClasses:function () {
            return {
                changeColor:this.changeColor,
                chengeLength:this.chengeLength
            }
        }
    }
});