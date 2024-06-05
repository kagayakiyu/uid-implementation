
var Audios = window.document.getElementById('audio');
var Chargers = window.document.getElementById('Chargers');
var USB = window.document.getElementById('USB');
var PhoneCarGears = window.document.getElementById('PhoneCarGears');
var erji = window.document.getElementById('erji');
var Deals = window.document.getElementById('Deals');
var searchFor = window.document.querySelector('.search');
var shopcar = window.document.querySelector('.shopcar');



Audios.addEventListener('click',()=>{
    locationHref('Audios');
});
Chargers.addEventListener('click',()=>{
    locationHref('Charger');
});
USB.addEventListener('click',()=>{
    locationHref('USB');
});
PhoneCarGears.addEventListener('click',()=>{
    locationHref('PhoneCarGear');
});
erji.addEventListener('click',()=>{
    locationHref('ProductDetail');
});
Deals.addEventListener('click',()=>{
    locationHref('Todaysdeal');
});
searchFor.addEventListener('click',()=>{
    locationHref('searchfor');
});
shopcar.addEventListener('click',()=>{
    locationHref('ProductDetail');
});
var left_but = document.querySelector('.left_but');
var right_but = document.querySelector('.right_but');
var big_box = document.querySelector('.big_box');
//滑动函数
function anime(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        var count = (target - obj.offsetLeft) / 10;
        count = count > 0 ? Math.ceil(count) : Math.floor(count);
        obj.style.left = obj.offsetLeft + count + 'px';
    }, 30)

}
big_box.addEventListener('mouseover', function() {
    left_but.style.display = 'block';
    right_but.style.display = 'block'
    //关闭自动播放
    clearInterval(timer);
    timer = null;

})
big_box.addEventListener('mouseout', function() {
    left_but.style.display = 'none';
    right_but.style.display = 'none'
    //开启自动播放
    timer = setInterval(function() {
        right_but.click();
    }, 4000)
})
var ol = document.querySelector('.promo_nav');
var slide_img = document.querySelector('.slide_img');
//创建与图片个数一样的li
for (var i = 0; i < slide_img.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    //li 滑动变色事件
    li.addEventListener('mousemove', function(e) {
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].className = '';
        }
        e.target.className = 'selected';
        //滑动移动图片
        var big_boxWidth = big_box.offsetWidth;
        count = this.getAttribute('index');
        circle = this.getAttribute('index');
        var slide_dis = big_boxWidth * this.getAttribute('index');
        flag = true;
        anime(slide_img, -slide_dis);
    })
    ol.style.width = 14 * ol.children.length + 'px';
}
ol.children[0].className = 'selected';
//左右按钮点击事件
//右按钮
var count = 0;
var circle = 0;
var flag = true;
var first = slide_img.children[0].cloneNode(true)
slide_img.appendChild(first);
right_but.addEventListener('click', function() {
    if (flag) {
        flag = false;
        if (count == slide_img.children.length - 1) {
            slide_img.style.left = 0;
            count = 0;
        }
        count++;
        anime(slide_img, -count * big_box.offsetWidth, function() {
            flag = true;
        });
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        //改变圆函数
        circleChange();
    }
})
//左按钮
left_but.addEventListener('click', function() {

    if (flag) {
        flag = false;
        if (count == 0) {
            slide_img.style.left = -(slide_img.children.length - 1) * big_box.offsetWidth + 'px';
            count = slide_img.children.length - 1;

        }
        count--;
        anime(slide_img, -count * big_box.offsetWidth, function() {
            flag = true;
        });
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }

        circleChange();
    }
})
//改变圆
function circleChange() {
    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'selected';
}
var timer = setInterval(function() {
    //自动调用事件
    right_but.click();
}, 4000)
