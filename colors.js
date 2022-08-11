// 객체 : Links, Bodys
// function = 함수

var Links = {
  changeColor:function (color1){
    // 이 6줄을 아래 jquery 1줄로 대체.
    // var newlist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < newlist.length) {
    //   newlist[i].style.color = color1;
    //   i = i+1;
    // }
    $('a').css('color',color1);
  }
}

var Bodys = {
  setColor1:function (color2) {
    // document.querySelector('body').style.color = color2;
    $('body').css('color',color2);
  },
  setbackColor1:function (color3){
    // document.querySelector('body').style.backgroundColor = color3;
    $('body').css('backgroundColor', color3);
  }
}

function nightDaySwitch(self1){
var goal = document.querySelector('body');
if (self1.value === 'night') {
  Bodys.setbackColor1('black');
  Bodys.setColor1('white');
  self1.value = 'day'

  Links.changeColor('green');

} else {
  Bodys.setbackColor1('white');
  Bodys.setColor1('black');
  self1.value = 'night'

  Links.changeColor('red');
  }
}
