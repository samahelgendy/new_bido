// var down=document.querySelector('.space .fa-angle-down');
// var up=document.querySelector('.space .fa-angle-up');
// var content =document.querySelector('.cont .space span');
// var num =1;
// down.onclick = function(){
//     content.innerHTML +=num;
// }




var mytoogle = document.querySelector(".toggle-link");
var alllink =document.querySelectorAll('ul'); 
mytoogle.onclick= function(){
    var overlay = document.createElement('div');
    overlay.className="pop-over";
    document.body.appendChild(overlay);

    var content= document.createElement('div');
    content.className='content-menu';
    document.body.appendChild(content);


    var myinput = document.createElement('input');
    myinput.className="search";
    myinput.placeholder="ابحث عن المنتجات"
    content.appendChild(myinput)

    var myicon = document.createElement('i');
    myicon.className="fa-solid fa-magnifying-glass";
    content.appendChild(myicon);

    


    var title = document.createElement('span');
    var mytext = document.createTextNode("القائمه ");
    title.className="session my-active";
    title.appendChild(mytext);
    

    var title1 = document.createElement('span');
    title1.className="menu";
    var mytext1 = document.createTextNode("الاقسام ");
    title1.appendChild(mytext1);

    
    var mycontent= document.createElement('div');
    mycontent.className='my-content';
    mycontent.appendChild(title);
    mycontent.appendChild(title1);
    content.appendChild(mycontent);

   var mybutton = document.createElement('button');
   mybutton.className="my-button";
   var context = document.createTextNode('X');
   mybutton.appendChild(context);
   overlay.appendChild(mybutton);


   var menucontext= document.createElement('div');
   menucontext.className= "my-context";
    content.appendChild(menucontext);

    var ulit = document.createElement('ul')
    ulit.className="my-ulit";
    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الرئيسيه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('حسابى');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('العروض');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('المفضله ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('المجله ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('خدمه العملاء');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('لماذا نحن');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('حول');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);
    menucontext.appendChild(ulit);
    // start list

    var listcontext= document.createElement('div');
    listcontext.className= "my-listcontext";
    content.appendChild(listcontext);

    var ulit = document.createElement('ul')
    ulit.className="my-list";
    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('التلفزيونات ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الاجهزه الصزتيه');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('الاجهزه الكهربائيه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('رياضه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('عالم القهوه ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('مشاوى');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('مجوهرات ');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);

    var link =document.createElement('li');
    var ref = document.createElement('a');
    var inner = document.createTextNode('ساعات يد');
    ref.appendChild(inner);
    ulit.appendChild(link);
    link.appendChild(ref);
    listcontext.appendChild(ulit);
  
}

document.addEventListener('click' , (e) =>{
   
     if(e.target.className === 'my-button'){
         document.querySelector(".pop-over").remove();
         document.querySelector(".content-menu").remove();
     }

     if(e.target.className ==="pop-over" ) {
        document.querySelector(".pop-over").remove();
        document.querySelector(".content-menu").remove();

     }  

    
    if(e.target.className ==='menu'){
        document.querySelectorAll('span').forEach(span =>{
          span.classList.remove('my-active');
                  })
        e.target.classList.add('my-active');
        document.querySelector(".my-listcontext").style.display="block";
        document.querySelector(".my-context").style.display="none";
    }

    if(e.target.className ==='session'){
        document.querySelectorAll('span').forEach(span =>{
          span.classList.remove('my-active');
                  })
        e.target.classList.add('my-active');
        document.querySelector(".my-listcontext").style.display="none";
        document.querySelector(".my-context").style.display="block";
    }

});

var btn = document.querySelector(".top button");
var fix = document.querySelector('.fixed');
var bot = document.querySelector('.bottom');

window.onscroll = function(){
    if(window.scrollY >= 600){
      btn.style.display="block";
      fix.style.display="block";
    //   bot.style.display="block";
    }else{
        btn.style.display="none";
        fix.style.display="none";
        // bot.style.display="none";
    }
}

btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
    })
};

// start product
var basket = document.querySelector('.baske button');
var basket_1 = document.querySelector('.baske button span');
var basket_2 = document.querySelector('.baske button i');
var icon = document.createElement('i');
icon.className="fas fa-check";

basket.onclick =function(){
    basket_1.textContent="فى السله";
    basket_2.style.display="none";
    basket.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    basket.appendChild(icon);
    icon.style.cssText="color:white; fontWeight:bold"
}

var baskets_h = document.querySelector('.baske .btns_2');
var bass_2 = document.querySelector('.baske button .bass_2');
var icons_2 = document.querySelector('.baske button .icons_2');
var icon_v = document.createElement('i');
icon_v.className="fas fa-check";

baskets_h.onclick =function(){
    bass_2.textContent="فى السله";
    icons_2.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_h.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_h.appendChild(icon_v);
    icon_v.style.cssText="color:white; fontWeight:bold"
}


var baskets_3 = document.querySelector('.baske .btns_3');
var bass_3 = document.querySelector('.baske .bass_3');
console.log(bass_3);
var icons_3 = document.querySelector('.baske button .icons_3');
var icon_3 = document.createElement('i');
icon_3.className="fas fa-check";

baskets_3.onclick =function(){
    bass_3.textContent="فى السله";
    icons_3.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_3.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_3.appendChild(icon_3);
    icon_3.style.cssText="color:white; fontWeight:bold "
}

var baskets_4 = document.querySelector('.baske .btn_4');
var bass_4 = document.querySelector('.baske .bas_4');
var icons_4 = document.querySelector('.baske button .icon_4');
var icon_4 = document.createElement('i');
icon_4.className="fas fa-check";

baskets_4.onclick =function(){
    bass_4.textContent="فى السله";
    icons_4.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_4.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_4.appendChild(icon_4);
    icon_4.style.cssText="color:white; fontWeight:bold "
}


var baskets_5 = document.querySelector('.baske .btn_5');
var bas_5 = document.querySelector('.baske .bas_5');
var icons_5 = document.querySelector('.baske button .icon_5');
var icon_5 = document.createElement('i');
icon_5.className="fas fa-check";

baskets_5.onclick =function(){
    bas_5.textContent="فى السله";
    icons_5.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_5.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_5.appendChild(icon_5);
    icon_5.style.cssText="color:white; fontWeight:bold "
}

var baskets_6 = document.querySelector('.baske .btn_6');
var bass_6 = document.querySelector('.baske .bas_6');
var icons_6 = document.querySelector('.baske button .icon_6');
var icon_6 = document.createElement('i');
icon_6.className="fas fa-check";

baskets_6.onclick =function(){
    bass_6.textContent="فى السله";
    icons_6.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_6.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_6.appendChild(icon_6);
    icon_6.style.cssText="color:white; fontWeight:bold "
}

var baskets_7 = document.querySelector('.baske .btn_7');
var bass_7 = document.querySelector('.baske .bas_7');
var icons_7 = document.querySelector('.baske button .icon_7');
var icon_7 = document.createElement('i');
icon_7.className="fas fa-check";

baskets_7.onclick =function(){
    bass_7.textContent="فى السله";
    icons_7.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_7.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_7.appendChild(icon_7);
    icon_7.style.cssText="color:white; fontWeight:bold "
}

var baskets_8 = document.querySelector('.baske .btn_8');
var bass_8 = document.querySelector('.baske .bas_8');
var icons_8 = document.querySelector('.baske button .icon_8');
var icon_8 = document.createElement('i');
icon_8.className="fas fa-check";

baskets_8.onclick =function(){
    bass_8.textContent="فى السله";
    icons_8.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_8.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_8.appendChild(icon_8);
    icon_8.style.cssText="color:white; fontWeight:bold "
}


var baskets_9 = document.querySelector('.baske .btn_9');
var bass_9 = document.querySelector('.baske .bas_9');
var icons_9 = document.querySelector('.baske button .icon_9');
var icon_9 = document.createElement('i');
icon_9.className="fas fa-check";

baskets_9.onclick =function(){
    bass_9.textContent="فى السله";
    icons_9.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_9.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_9.appendChild(icon_9);
    icon_9.style.cssText="color:white; fontWeight:bold "
}

var baskets_10 = document.querySelector('.baske .btn_10');
var bass_10 = document.querySelector('.baske .bas_10');
var icons_10 = document.querySelector('.baske button .icon_10');
var icon_10 = document.createElement('i');
icon_10.className="fas fa-check";

baskets_10.onclick =function(){
    bass_10.textContent="فى السله";
    icons_10.style.cssText= "color:#b41318; margin-right:-15px"
    baskets_10.style.cssText="background-color:#b41318;padding:10px 30px;cursor:default";
    baskets_10.appendChild(icon_4);
    icon_10.style.cssText="color:white; fontWeight:bold "
}





var heart = document.querySelectorAll(".baske .fa-heart");
heart.forEach(hear =>{
    hear.onclick = function(){
  hear.classList.toggle("active_1");
    }
})

var filters = document.querySelector('.ico_1');
var icon_s = document.querySelector('.ico_1 .fa-angle-down');
var hide = document.querySelector('.session_1');
filters.onclick = function(){
    icon_s.classList.toggle('fa-angle-right');
    hide.classList.toggle('show_m');
}

var filter_2 = document.querySelector('.ico_2');
var icon_2 = document.querySelector('.ico_2 .fa-angle-down');
var hide_2 = document.querySelector('.session_2');
filter_2.onclick = function(){
    icon_2.classList.toggle('fa-angle-right');
    hide_2.classList.toggle('show_m');
}


var filter_3 = document.querySelector('.ico_3');
var icon_3 = document.querySelector('.ico_3 .fa-angle-down');
var hide_3 = document.querySelector('.session_3');
filter_3.onclick = function(){
    icon_3.classList.toggle('fa-angle-right');
    hide_3.classList.toggle('show_m');
}

// end product

