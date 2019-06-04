
/**
 * CUSTOM SCROLL BAR
 * 
 */
$(".rule-content").mCustomScrollbar();
$(".list-result").mCustomScrollbar();


/**
 * Animation Flower falling
 */

TweenLite.set("flower-animate",{perspective:600})

var total = 30;
var warp = document.getElementById("flower-animate"),	w = window.innerWidth , h = window.innerHeight;
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


/**
 * upload image file
 */


$('.upload-file').on("change", function(){ 
  var data_stt = $(this).attr('data-stt');
  if(this){
    if (this.files && this.files[0]) {
      /**data file for send server */
      // console.log(this.files[0])

      if(data_stt == 1){
        window.uploadImage_1 = this.files[0]
      }else{
        window.uploadImage_2 = this.files[0]
      }

      var reader = new FileReader();
      reader.onload = function(e) {
        $('.upload-result__' + data_stt).attr('src', e.target.result);
        $('.close__' + data_stt).css('opacity','1')
        // console.log(e.target.result)
      }
  
      reader.readAsDataURL(this.files[0]);
    }
  }
});



$('.upload-close').click(function(){
  var data_close = $(this).attr('data-close');
  $('.file__'+data_close).val('');
  $('.upload-result__'+data_close).attr('src',null);
  $('.close__' + data_close).css('opacity','0')
})


// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});