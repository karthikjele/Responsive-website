// header section start

$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    
    $(".navigation-menu").toggleClass("active");

});

var list=document.getElementById("list1").getElementsByClassName("tab");
// var btns=list.getElementsByClassName("tab");
var i;

for ( i = 0; i < list.length; i++) {
    list[i].addEventListener("click",function(){
        var current=document.getElementsByClassName("active1");
        current[0].className=current[0].className.replace("active1","");
        this.className+=" active1";
    })
    
};
