
import ICON from '@/assets/arrow2.svg'
import {areaData} from '@/api/index.js'

export function setDirectionInMap(mapHandle,currentDirection,currentPower,bmapData) {
  if(currentDirection==null)
    return 
  const { BMap } = window
  const size = new BMap.Size(128,128)
  const icon = new BMap.Icon(ICON, size)
  for(let e of areaData) {
    if(currentPower[e.areaName]) {
      const power = currentPower[e.areaName].value
      const theSize = new BMap.Size(128*power,128*power)
      icon.setSize(theSize)
      icon.setImageSize(theSize)
      icon.setAnchor( new BMap.Size(64*power,64*power) )
    }
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

export function initMap(mapDom,defaultArea,bmapData) {
  const { BMap } = window
  if( !BMap ) return  //BMap数据需要通过网络请求异步获取，需要兼容还未取到的状态
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
