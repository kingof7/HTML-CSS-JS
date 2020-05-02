var Link = {
  setColor:function(color){
    //var alist = document.querySelectorAll('a');
    //var i = 0;
    //while(i < alist.length){
    //  alist[i].style.color = color;
    //  i = i + 1;
    //}
    $('a').css('color', color);
  }
}
var Body = {
    setColor: function (color){
      $('body').css('color', color);
    },
    setBackgroundColor:function(color){
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }

function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value === 'night'){
    //target.style.backgroundColor='black';
    //target.style.color='white';
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Link.setColor('powderblue');
  }
  else {
    //target.style.backgroundColor='white';
    //target.style.color='black';
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';
    Link.setColor('blue');
  }
}
