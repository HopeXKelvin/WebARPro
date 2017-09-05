window.onload = function(){
    // console.log(parent.window.sayMyName());
    // 子iframe调用父html的方法
    parent.window.sayMyName();
};

function ObserverEle(){
    this.eleList = [];
    this.markers = [];
};

ObserverEle.prototype = {

};


// 注册组件
AFRAME.registerComponent('test', {
    schema: {
        // 定义描述组件属性的对象
        // 类似 参数的默认值
        color: {default: '#fff'},
        size: {type: 'int', default: 5}
    },
    init: function(){
        var obj = this.el.sceneEl.object3D;
        console.log(obj);
    },
    tick: function(time, timeDelta){
        // 在每个场景渲染循环被调用。用于连续的改变或检查。
        // console.log(this.el);
    },
    pause: function(){
        console.log('实体脱离场景时被调用!');
    }
});