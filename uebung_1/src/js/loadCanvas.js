function draw(){

  cv = document.querySelector('#fav');
  ctx = cv.getContext('2d');

  if (!!ctx){
    startingAngle = 1.5 * Math.PI;
    btn = document.querySelector('#loadBtn');
    timer = 0;
    percent = 0;
    lnk = document.querySelector('link[rel*="icon"]');
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'fuchsia';

    let lbl = document.querySelector('#lbl_fav');
    lbl.textContent = 'This should happen: ';
    timer = setInterval(updateLoader, 60);
    btn.textContent = 'Loading';
    btn.style.backgroundColor = '#999';
    btn.setAttribute('disabled', 'true');

  }
}

function updateLoader(){
  ctx.clearRect(0, 0, 16, 16);
  ctx.beginPath();
  ctx.arc(8, 8, 6, startingAngle,
    (percent * 2 * Math.PI / 100 + startingAngle));
  ctx.stroke();
  lnk.href = cv.toDataURL('image/png');

  if (percent === 100){
    clearInterval(timer);
    btn.textContent = 'Load again';
    btn.style.backgroundColor = 'limegreen';
    btn.removeAttribute('disabled');
    return;
  }

  percent++;
}
