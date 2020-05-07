new Vue({
    el: "#app",//容器
    data: {//存储数据
        age: 30,
        x:0,
        y:0
    },
    methods: {//定义方法
        add: function (inc) {
            this.age += inc
        },
        subtract: function (inc) {
            this.age -= inc

        },
        updateXY:function (event) {
            console.log(event);
            this.x=event.offsetX
            this.y=event.offsetY
        },
        stop:function (event) {
            event.stopPropagation()//阻止冒泡
        },
        alert:function () {
            alert(11)
        }
    }
});