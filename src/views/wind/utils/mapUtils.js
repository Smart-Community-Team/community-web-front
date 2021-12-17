import {areaData} from '@/api/index.js'

//地图初始化配置
const config = {
  enableScrollWheelZoom: true, //开启鼠标滚轮缩放
}

//地图初始化
function initMap(mapDom,defaultArea) {
  const { BMap } = window
  let mapHandle =  new BMap.Map(mapDom); // 创建Map实例
  mapHandle.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  for(let e of areaData) {
    let point = new BMap.Point(...e.locationInMap)
    let marker = new BMap.Marker(point)
    mapHandle.addOverlay(marker)
    bmapData[e.areaName] = {
      point: point,
      marker: null
    }
  }
  mapHandle.centerAndZoom(bmapData[defaultArea].point, 16); // 初始化地图,设置中心点坐标和地图级别
  return {
    mapHandle
  }
}

//
function setDirectionInMap(mapHandle,currentDirection) {
  if(currentDirection==null)
    return 
  const { BMap } = window
  let size = new BMap.Size(128,128)
  let icon = new BMap.Icon(ICON,size)
  for(let e of areaData) {
    if(currentDirection[e.areaName]){
      const point = bmapData[e.areaName].point
      let marker = new BMap.Marker(point,{
        icon: icon,
        rotation: currentDirection[e.areaName].value,
        enableClicking: false
      })
      mapHandle.removeOverlay(bmapData[e.areaName].marker)
      mapHandle.addOverlay(marker)
      bmapData[e.areaName].marker = marker
    }
    else {
      mapHandle.removeOverlay(bmapData[e.areaName].marker)
      bmapData[e.areaName].marker = null
    }
  }
}

export {initMap,setDirectionInMap}