

let size_temp = 9;
let temp = 1;    
let temp_zero = temp;
let id_state_ms;

function slider(){
  temp_zero = temp;
  (temp == 0) ? temp_zero = size_temp : temp ;
  document.getElementById('left1').style.backgroundImage = 'url(images/slider' + Math.abs((temp_zero - 1)%size_temp) + '.jpg)';
  document.getElementById('main__item').style.backgroundImage = 'url(images/slider' +  Math.abs((temp)%size_temp)  + '.jpg)';
  document.getElementById('right1').style.backgroundImage = 'url(images/slider' +  Math.abs((temp + 1)%size_temp)  + '.jpg)';
}


function master(ms_w_h, ms_mar){
  console.log(ms_mar)
  document.getElementById(id_state_ms).style.width = ms_w_h;
  document.getElementById(id_state_ms).style.height = ms_w_h;
  document.getElementById(document.getElementById(id_state_ms).parentNode.id).style.margin = ms_mar;

}

document.getElementById('button__right').onclick = () => {
    temp = Math.abs(temp + 1);
      slider();
    temp = temp%size_temp;
}


document.getElementById('button__left').onclick = () => {
  temp -= 1;
    (temp < 0) ? temp = size_temp  + temp: temp;
  temp = temp%size_temp;
    slider();
}


document.addEventListener('mouseover', f_over = (even) => {
  
  if(even.target.id == 'item__master3' || even.target.id == 'item__master2' || even.target.id == 'item__master1') {

      id_state_ms = even.target.id;
      const ms_w_h = '250px';
      const mas_mar = '0px';
      master(ms_w_h, mas_mar);
  }
})


document.addEventListener('mouseout', f_out = (even) => {
   if(even.target.id == id_state_ms){
      const ms_w_h = '200px';
      const mas_mar = '25px';
      master(ms_w_h, mas_mar);
  }
})



