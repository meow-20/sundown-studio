function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
}
function fixedImgAnime(){
    var elem = document.querySelectorAll(".element");
    var display_img = document.querySelector(".fixed-data")

    elem.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            display_img.style.display = "block"
            display_img.style.backgroundImage = `url(${e.getAttribute("data-img")})`
        })
        e.addEventListener("mouseleave",function(){
            display_img.style.display = "none"
        })
    })
}

function page4Anime(){
    
var text = document.querySelectorAll("#c4-left h1");
var p4_img = document.querySelector(".fixed-img");
var f_text = document.querySelectorAll(".fixed-text h3");
text.forEach((t)=>{
    var tcl = t.getAttribute("class")
    t.addEventListener("click", function(){
        console.log(tcl)
        p4_img.style.backgroundImage = `url(${t.getAttribute("data-img")})`
        // t.style.color = "white"
        f_text.forEach((f) => {
            var fid = f.getAttribute("id")
            if(tcl === fid){
                console.log(fid)
                f.style.display="inline"
            } else {
                f.style.display = "none"
            }
        })
    })
})

}

function swiperAnime(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

loco();
fixedImgAnime();
page4Anime();
swiperAnime();