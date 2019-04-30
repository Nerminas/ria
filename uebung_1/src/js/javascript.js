window.onload = function (){
  console.log("Type of ww: " + typeof(ww));
  startWorker();
};


function startWorker(){
  let ww;
  if (ww === undefined){

    let ww = new Worker('src/js/webworker.js');
    ww.onmessage = function (event){

      document.getElementById('timer').innerHTML = event.data;
    };
  }
}