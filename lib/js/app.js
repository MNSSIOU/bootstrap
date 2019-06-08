$(function () {

    //自定义滚动条
    $("body").niceScroll({
        oneaxismousemode: false
    });

    //设置轮播时长
    $('.carousel').carousel({
        interval: 3000
    });
    //工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //品牌添加动画效果

    $('.brand-content img').hover(function () {

        $(this).addClass('animated rubberBand');
    },function () {
        $(this).removeClass('animated rubberBand ');
    });

    //小菜单点击后隐藏
    $('.navbar-collapse a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });


    //联系我们导航栏背景切换
    var flag=false;
    function bgChange(url,color1,color2){
        var w=$(document).width();
        if(w>=992){
            $('.contact-nav').css('background','url('+url+') no-repeat center center');
        }
        else {

            $('.contact-nav .tabone').css('background',color1);
            $('.contact-nav .tabtwo').css('background',color2);
        }
    }

    $('.tabone').click({url:"images/contact-nav2.jpg",color1:'#e82c0c',color2:'#ddd'},function (event) {
        flag=false;
        bgChange(event.data.url,event.data.color1,event.data.color2);

    });

    $('.tabtwo').click({url:"images/contact-nav.jpg",color1:'#ddd',color2:'#e82c0c'},function (event) {
        flag=true;
        bgChange(event.data.url,event.data.color1,event.data.color2);

    });

    $(window).resize(function(){
        var w=$(document).width();
        if(w>=992){
             if(flag===false){
                 $('.contact-nav .tabone,.contact-nav .tabtwo').css('background','transparent');
                 $('.contact-nav').css('background','url("images/contact-nav2.jpg") no-repeat center center');
             }else if(flag===true){
                 $('.contact-nav .tabone,.contact-nav .tabtwo').css('background','transparent');
                 $('.contact-nav').css('background','url("images/contact-nav.jpg") no-repeat center center');
             }
        }else{
            if(flag===false){
                $('.contact-nav .tabone').css('background',"#e82c0c");
                $('.contact-nav .tabtwo').css('background',"#ddd");
            }else if(flag===true){
                $('.contact-nav .tabone').css('background',"#ddd");
                $('.contact-nav .tabtwo').css('background',"#e82c0c");
            }
        }
    });

    //初始化数字动画
    $('.counter').countUp();

    //初始化相册
    $('.w3layouts_gallery_grid span').simpleLightbox();

    //初始化入场动画
    new WOW().init();

    // 百度地图API功能
    var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(117.222, 34.219), 14);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("徐州");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
});

//我们的团队--初始化轮播
jQuery(function ($) {
    var slider = $('.mis-stage').miSlider({
        pause: 2000,
        slidesOnStage: false,
        slidePosition: 'center',
        slideStart: 'mid',
        slideScaling: 150,
        offsetV: -5,
        centerV: true,
        navButtonsOpacity: 1,
        navList: false,
        stageHeight: 380
    });

    //导航跳转缓冲效果
    $('.nav').singlePageNav({
        offset:100,
        currentClass: 'current'
    });

});

