<template>
  <flexbox align="stretch">
    <flexbox-item style="margin-right: 50px;">
     <!-- <input label="中心位置" type='textarea' multiline='true' v-model="centerLocation"></input>-->
      <el-input v-model="centerLocation"
                placeholder=""></el-input>
      <div id="map-container"></div>
    </flexbox-item>
  </flexbox>

</template>
<script>
  export default {
    data(){
      return{
        hslotr: '保存',
        rangeValue: '',
        centerLocation: '中心位置',
        fenceName: '围栏1',
        fenceStyle: '进围栏报警',
        data:[],
        sheetVisible: false,
        radius: 500,
        circle: null,
        map: {},
        searchText: ''
      }
    },
    mounted(){
      this.initMap();
    },
    methods:{
      triggerHLeft(){
        this.$router.go(-1);
      },
      triggerHRight(){
        console.log('点击了保存')
      },
      clearSearch(){
        this.searchText = '';
      },
      /* 做围栏圈圈 */
      addCircle(lat,lng,radius){
        lat = lat + "";
        lng = lng + "";
        this.circle = new AMap.Circle({
          center: new AMap.LngLat(lat,lng), // 圆心位置
          radius: radius,  //半径
          strokeColor: "#76D5C2",  //线颜色
          strokeOpacity: 1,  //线透明度
          strokeWeight: 1,  //线粗细度
          fillColor: "#76D5C2",  //填充颜色
          fillOpacity: 0.35 //填充透明度
        });
        this.map.add(this.circle);
        this.map.setFitView();
      },
      initMap(){
        const _this = this;
        _this.map = new AMap.Map('map-container', {
          zoom: 10
        })
        /* 做地图拖拽选址 */
        AMapUI.loadUI(['misc/PositionPicker'], function(PositionPicker) {
          console.log('aaajdjdjdjdjdj')
          var positionPicker = new PositionPicker({
            mode: 'dragMap',
            map: _this.map
          });
          positionPicker.on('success', function(positionResult) {
            let position = positionResult.position;
            if(_this.circle){
              console.log(position.lng,position.lat)
              _this.circle.setCenter([position.lng,position.lat]);
            }else{
              _this.addCircle(position.lng, position.lat,_this.radius);
            }
            _this.centerLocation = positionResult.address;
          });
          positionPicker.on('fail', function(positionResult) {
            console.log('fail');
          });
          var onModeChange = function(e) {
            positionPicker.setMode(e.target.value)
          }
          positionPicker.start();
        });
        /* 搜索地址 */
        _this.map.plugin(["AMap.Autocomplete"], function() {
          var auto = new AMap.Autocomplete({
            input: "search_adress"
          });
          AMap.event.addListener(auto, "select", function(result){
            console.log(result);
            let location = result.poi.location;
            if(_this.circle){
              _this.circle.setCenter([location.lng,location.lat]);
            }else{
              _this.addCircle(location.lng, location.lat,_this.radius);
            }
            _this.map.setFitView();
          });
        });
      },

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #map-container {
    height: 300px;
    width: 100%;
    overflow: hidden;
    margin-top: 5px;
  }

  .map {
    height: 300px;
    width: 100%;
    overflow: hidden;
    margin-top: 5px;
  }
  .amap {
    height: 300px;
    width: 100%;
    overflow: hidden;
    margin-top: 5px;
  }

  .area-title {
    font-size: 12px;
    color: #aaa;
    padding-left: 10px;
  }

  .distpicker-address-wrapper /deep/ select {
    height: 34px;
    font-size: 12px;
    border-radius: 0.1rem;
  }
</style>
