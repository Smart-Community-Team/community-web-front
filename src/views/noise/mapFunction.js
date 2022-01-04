
import {areaData} from '@/api/index.js'

const SIZE = 50
const traceName = "噪音溯源坐标"

export function setCircleInMap(mapHandle,currentTrace,bmapData) {
  if(currentTrace==null)
    return 
  const { BMap } = window
  //标记出各小区的噪音大小
  for(let e of areaData) {
    if(currentTrace[e.areaName]){
      const point = bmapData[e.areaName].point
      let circle = new BMap.Circle(point,currentTrace[e.areaName]*SIZE,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5})
      console.log(e.areaName)
      mapHandle.removeOverlay(bmapData[e.areaName].overlay)
      mapHandle.addOverlay(circle)
      bmapData[e.areaName].overlay = circle
    }
    else {
      mapHandle.removeOverlay(bmapData[e.areaName].overlay)
      bmapData[e.areaName].overlay = null
    }
  }
  //标记出溯源的结论
  if(currentTrace[traceName]){
    const point = new BMap.Point(...currentTrace[traceName])
    let overlay = new BMap.Marker(point)
    mapHandle.addOverlay(overlay)
    let circle = new BMap.Circle(point,500,{strokeColor:"red", strokeWeight:2, strokeOpacity:0.5})
    mapHandle.removeOverlay(bmapData[traceName].overlay)
    bmapData[traceName].overlay = circle
    mapHandle.addOverlay(circle)
  }
}

export function initMap(mapDom,defaultArea,bmapData) {
  const { BMap } = window
  let mapHandle =  new BMap.Map(mapDom); // 创建Map实例
  mapHandle.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
  for(let e of areaData) {
    let point = new BMap.Point(...e.locationInMap)
    let overlay = new BMap.Marker(point)
    mapHandle.addOverlay(overlay)
    bmapData[e.areaName] = {
      point: point,
      overlay: null
    }
  }
  bmapData[traceName] = {}
  mapHandle.centerAndZoom(bmapData[defaultArea].point, 15); // 初始化地图,设置中心点坐标和地图级别
  return {
    mapHandle
  }
}
