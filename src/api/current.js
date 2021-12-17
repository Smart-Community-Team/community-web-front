

function Current () {
  const ws = new WebSocket('ws://120.55.86.4:8085/imserver/sh');

  ws.onopen = function () {
    console.log("onOpen")
    //ws.send('Hello Server!');
  }

  ws.onmessage = function (e) {
    console.log( "已接受服务器数据，然而 current 未绑定有效方法。服务器数据：",e.data )
  }

  ws.onclose = function(e){
    console.log("close",e);
  }
  ws.onerror = function(e){
    console.log("error");
  }

  this.bindOnmessage = function (func) {
    ws.onmessage = func
  }
}

const current = new Current()

export { current }