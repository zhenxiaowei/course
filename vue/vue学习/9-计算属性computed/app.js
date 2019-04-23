new Vue({
    el: "#app",//容器
    data: {//存储数据
        a: 0,
        b: 0,
        age: 20

    },
    methods: {//定义方法
        /*        addtoA:function () {
                    console.log(1);
                    return this.a+this.age
                },
                addtoB:function () {
                    console.log(2);
                    return this.b+this.age
                }*/
    },
    computed: {//计算属性
        addtoA: function () {
            console.log(1);
            return this.a + this.age
        },
        addtoB: function () {
            console.log(2);
            return this.b + this.age
        }
    }
});