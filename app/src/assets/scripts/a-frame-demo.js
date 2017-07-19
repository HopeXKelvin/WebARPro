(function(){
    // 封装一下querySelector方法
    function getEle(selectStr){
        return document.querySelector(selectStr);
    }

    // 定义变量
    var scene = getEle('a-scene');
    var hiroMarker = getEle('a-marker[preset="hiro"]');
    var kanjiMarker = getEle('a-marker[preset="kanji"]');
    var hiroObj = getEle('a-box');
    var kanjiObj = getEle('a-sphere');

    // A-Frame中的 <a-box>原语(primitive)的代码
    var extendDeep = AFRAME.utils.extendDeep;

    var meshMixin = AFRAME.primitives.getMeshMixin();

    AFRAME.registerPrimitive('a-box', extendDeep({}, meshMixin, {
        defaultComponents: {
            geometry: {primitive: 'box'}
        },
        mappings: {
            depth: 'geometry.depth',
            height: 'geometry.height',
            width: 'geometry.width'
        }
    }));
})();