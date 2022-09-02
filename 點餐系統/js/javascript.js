// AtickyBillboard
function throttle(func, timeout = 250) {
    let last;
    let timer;
   
    return function () {
      const context = this;
      const args = arguments;
      const now = +new Date();
   
      if (last && now < last + timeout) {
        clearTimeout(timer)
        timer = setTimeout(function () {
          last = now
          func.apply(context, args)
        }, timeout)
      } else {
        last = now
        func.apply(context, args)
      }
    };
};

function StickyBillboard(){
    
    if(document.body.scrollTop>30){
        console.log("call");
        document.getElementById("StickyBillboard").style.display = "block";
    }
    else{
        document.getElementById("StickyBillboard").style.display = "none";
    }
};
window.addEventListener('scroll',throttle(StickyBillboard,150));


// 提醒事項的toggle
document.querySelectorAll('.AnnouncementButton').forEach(button => {
    button.addEventListener('click' , () => {
        const toggleContent = document.getElementById('AnnouncementContent');
        button.classList.toggle('AnnouncementButton--active');
        if(button.classList.contains('AnnouncementButton--active')){
            toggleContent.style.maxHeight = toggleContent.scrollHeight + 'px';
        }
        else{
            toggleContent.style.maxHeight = 70+"px";
        }
    });
});
