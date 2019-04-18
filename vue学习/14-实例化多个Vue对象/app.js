var one = new Vue({
    el: "#app-one",//容器
    data: {//存储数据
        title: "app one content"
    },
    methods: {//定义方法

    },
    computed: {//计算属性
        greet: function () {
            return "hello one"
        }
    }
});
var two = new Vue({
    el: "#app-two",//容器
    data: {//存储数据
        title: "app two content"
    },
    methods: {//定义方法
        changeTitle: function () {
            one.title = "已经改了"
        }
    },
    computed: {//计算属性
        greet: function () {
            return "hello two"
        }
    }
});
two.title="app two title 改了"