(function(){var e;e=!1,document.addEventListener("DOMContentLoaded",function(){try{document.createEvent("TouchEvent"),document.documentElement.className+=" touch",e=!0}catch(e){e,document.documentElement.className+=" no-touch"}return window.hasTouch=function(){return e}}),document.addEventListener("DOMContentLoaded",function(){var e;return e=!0,window.footerReposition=function(){var t;if(t=$(".footer"),$("body").height()+t.outerHeight()+t.height()>$(window).outerHeight()){if(e)return t.addClass("content-footer"),e=!1}else if(!e)return t.removeClass("content-footer"),e=!0},$(window).resize(footerReposition)}),$(window).on("load",function(){return footerReposition()}),document.addEventListener("DOMContentLoaded",function(){return window.navbarShow=function(){var e;return(e=$(".default-nav")).hasClass("active")?e.removeClass("active"):e.addClass("active")}})}).call(this);



function whatsapp(formType){
  name = formType=='pray' ? $('#prayName').val() : $('#tesName').val()
  email = formType=='pray' ? $('#prayEmail').val() : ''
  number = formType=='pray' ? $('#prayNum').val() : $('#tesNum').val()
  text = formType=='pray' ? $('#prayText').val() : $('#tesText').val()
  if (formType=='pray')
  {
    var u = encodeURI('Hi Woubshet my name is: '+ name + ', My email adress is : '+ email + ' ,  My phone number is : ' + number + ',  Here is my pray request text: ' + text )
  }else{
    var u = encodeURI('Hi Woubshetmy name is: '+ name + ', My email adress is : '+ email + ' ,  My phone number is : ' + number + ',  Here is my testimony: ' + text )
  }


  window.location =("https://api.whatsapp.com/send?phone=+12675284014&text="+ u)
}
