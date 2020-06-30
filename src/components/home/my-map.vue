<template lang="html">
  <div class="container">
      <div class="search-box">
        <input
          v-model="searchKey"
          type="search"
          id="search">
        <button @click="searchByHand">搜索</button>
        <div class="tip-box" id="searchTip"></div>
      </div>
      <el-amap class="amap-box"
        :amap-manager="amapManager"
        :vid="'amap-vue'"
        :zoom="zoom"
        :plugin="plugin"
        :center="center"
        :events="events"
      >
        <!-- 标记 -->
        <el-amap-marker v-for="(marker, index) in markers" :position="marker" :key="index"></el-amap-marker>
      </el-amap>
    </div>
</template>
 

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
// import { getDetail } from "@/api/demo/demo";
let amapManager = new AMapManager();
export default {
  name: "my-map",
  data() {
    let self = this;
    return {
      address: null,
      searchKey: "",
      amapManager,
      markers: [],
      searchOption: {
        city: "全国",
        citylimit: true
      },
      center: [121.329402, 31.228667],
      zoom: 17,
      lng: 0,
      lat: 0,
      loaded: false,
      events: {
        init() {
          lazyAMapApiLoaderInstance.load().then(() => {
            self.initSearch();
          });
        },
        // 点击获取地址的数据
        click(e) {
          // console.log(e)
          self.markers = [];
          let { lng, lat } = e.lnglat;
          self.lng = lng;
          self.lat = lat;
          self.center = [lng, lat];
          self.markers.push([lng, lat]);
          // 这里通过高德 SDK 完成。
          let geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all"
          });
          geocoder.getAddress([lng, lat], function(status, result) {
            if (status === "complete" && result.info === "OK") {
              if (result && result.regeocode) {
                console.log("地址:" + result.regeocode.formattedAddress);
                self.address = result.regeocode.formattedAddress;
                self.searchKey = result.regeocode.formattedAddress;
                self.$nextTick();
              }
            }
          });
        }
      },
      // 一些工具插件
      plugin: [
        {
          // 定位
          pName: "Geolocation",
          events: {
            init(o) {
              // o是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  // 设置经度
                  self.lng = result.position.lng;
                  // 设置维度
                  self.lat = result.position.lat;
                  // 设置坐标
                  self.center = [self.lng, self.lat];

                  self.markers.push([self.lng, self.lat]);

                  console.log(self.center);

                  var cityName = "";
                  var geocoder = new AMap.Geocoder({
                    radius: 1000,
                    extensions: "all"
                  });
                  geocoder.getAddress([self.lng, self.lat], function(
                    status,
                    result1
                  ) {
                    if (status === "complete" && result1.info === "OK") {
                      if (result1 && result1.regeocode) {
                        console.log(
                          "地址::" + result1.regeocode.formattedAddress
                        );
                        self.address = result1.regeocode.formattedAddress;
                        var reg = /.+?(省|市|自治区|自治州|县|区)/g;
                        var city =
                          (self.address + ": ", self.address.match(reg));
                        console.log(city[2], city.length);
                        if (city.length == 2) {
                          cityName += city[0];
                          cityName += city[1];
                        }
                        if (city.length == 3) {
                          cityName += city[1];
                          cityName += city[2];
                        }
                      }
                    }

                    // const promise = this.initAddress();
                    console.log("行政区域呀：" + cityName);
                    axios
                      .get("/api/demo/detail", {
                        data: {
                          name: cityName
                        }
                      })
                      .then(res => {
                        // url即在mock.js中定义的
                        // console.log("233333333" + res.data);
                        var orgNameAndAddress = [];
                        for (var i = 0; i < res.data.length; i++) {
                          orgNameAndAddress.push(res.data[i]["orgAddress"]);
                          console.log(
                            res.data[i]["orgName"],
                            res.data[i]["orgAddress"]
                          );
                          geocoder.getLocation(
                            res.data[i]["orgAddress"],
                            function(status, result2) {
                              var lnglat = [
                                result2.geocodes[0].location.lng,
                                result2.geocodes[0].location.lat
                              ];

                              console.log("经纬度：" + lnglat);
                              console.log("经纬度数据类型" + typeof lnglat);
                              self.markers.push(lnglat);
                            }
                          );
                        }
                      });
                  });

                  self.loaded = true;
                  // 页面渲染好后
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },
  methods: {
    initSearch() {
      let vm = this;
      let map = this.amapManager.getMap();
      AMapUI.loadUI(["misc/PoiPicker"], function(PoiPicker) {
        var poiPicker = new PoiPicker({
          input: "search",
          placeSearchOptions: {
            map: map,
            pageSize: 10
          },
          suggestContainer: "searchTip",
          searchResultsContainer: "searchTip"
        });
        vm.poiPicker = poiPicker;
        // 监听poi选中信息

        poiPicker.on("poiPicked", function(poiResult) {
          // console.log(poiResult)

          let source = poiResult.source;
          let poi = poiResult.item;
          if (source !== "search") {
            poiPicker.searchByKeyword(poi.name);
          } else {
            poiPicker.clearSearchResults();
            vm.markers = [];
            let lng = poi.location.lng;
            let lat = poi.location.lat;
            let address = poi.cityname + poi.adname + poi.name;
            vm.center = [lng, lat];
            vm.markers.push([lng, lat]);
            vm.lng = lng;
            vm.lat = lat;
            vm.address = address;
            vm.searchKey = address;
          }
        });
      });
    },
    searchByHand() {
      if (this.searchKey !== "") {
        this.poiPicker.searchByKeyword(this.searchKey);
      }
    }
  }
};
</script>

<style lang="css">
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  border: 1px solid #999;
}
.search-box {
  position: absolute;
  z-index: 5;
  width: 70%;
  left: 13%;
  top: 10px;
  height: 30px;
}
.search-box input {
  float: left;
  width: 80%;
  height: 100%;
  border: 1px solid #30ccc1;
  padding: 0 8px;
  outline: none;
}
.search-box button {
  float: left;
  width: 20%;
  height: 100%;
  background: #30ccc1;
  border: 1px solid #30ccc1;
  color: #fff;
  outline: none;
}
.tip-box {
  width: 100%;
  max-height: 260px;
  position: absolute;
  top: 30px;
  overflow-y: auto;
  background-color: #fff;
}
</style>