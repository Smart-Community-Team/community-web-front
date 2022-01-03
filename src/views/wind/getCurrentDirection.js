
import { windDirectionData,windPowerData } from "../../api/index.js"

export function getCurrentDirection(currentHour) {
  const currentDirection = {}
  const currentPower = {}
  for(let e of windDirectionData){
    const item = e.hours.find((item)=>{
      return item.hour === currentHour
    })
    currentDirection[e.area] = item
  }
  for(let e of windPowerData){
    const item = e.hours.find((item)=>{
      return item.hour === currentHour
    })
    currentPower[e.area] = item
  }
  return {
    currentDirection,
    currentPower
  }
}
