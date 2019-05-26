// $('.icon-toggle-mobile').click(function(){
//     $('.menu').toggleClass('active')
//     $(this).toggleClass('active')
// })


function changeViewDetect(){
    if($(window).width() < 1400){
        $('.taisun-lp2__home--left').css('transform','scale(0.92)')
    }
    if($(window).width() < 1024){
        $('.taisun-lp2__home--left').css('transform','scale(0.8)')
    }
    if($(window).width() < 480){
        $('.taisun-lp2__home--left').css({
            'transform':'scale(0.8)',
            'margin-top':0
        })
    }
}

$(window).on('load',function(){
    changeViewDetect()
})
$(window).on('resize',function(){
    changeViewDetect()
})