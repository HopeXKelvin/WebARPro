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

    function trackMarker(marker){
        // 新生成一个黑色的正方体跟踪marker
        var markPos = marker.getWorldPosition();
        var markX = markPos.x;
        var markY = markPos.y;
        var markZ = markPos.z;
        var newBox = new THREE.BoxBufferGeometry(1, 1, 1);
        var newMat = new THREE.MeshStandardMaterial({color: 0x000000});
        var newMesh = new THREE.Mesh(newBox, newMat);
        newMesh.position = {x: markX, y: markY, z: markZ};
        console.log(markPos);
        var el = document.createElement('a-entity');
        el.setObject3D('mesh', newMesh);
        scene.add(setObject3D);
    }

    var hiroMarkerObj = hiroMarker.object3D;
    trackMarker(hiroMarkerObj);
})();