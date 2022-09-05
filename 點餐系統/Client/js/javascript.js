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
  const scrollheight=document.getElementById("restaurant-discription").clientHeight;
  document.querySelectorAll('.AnnouncementButton').forEach(button => {

      if(window.scrollY>scrollheight-80){
        document.getElementById("StickyBillboard").style.opacity = 100;
      }
      else{
        document.getElementById("StickyBillboard").style.opacity = 0;
      }
  });
};
window.addEventListener('scroll',throttle(StickyBillboard,150));


// 提醒事項的toggle
document.querySelectorAll('.AnnouncementButton').forEach(button => {

  document.getElementById('AnnouncementButton-Upward-Icon').style.display='none';
  
  

  const toggleContent = document.getElementById('AnnouncementContent');
  toggleContent.innerHTML="*歡迎光臨 福米早午餐* <br> 假日餐點備餐時間會比較長，也煩請您耐心稍後，或是提早訂餐，感謝各位~...";
  button.addEventListener('click' , () => {
      button.classList.toggle('AnnouncementButton--active');
      if(button.classList.contains('AnnouncementButton--active')){
        document.getElementById('AnnouncementButton-Downward-Icon').style.display='none';
        document.getElementById('AnnouncementButton-Upward-Icon').style.display='block';
        toggleContent.innerHTML="*歡迎光臨 福米早午餐* <br> 假日餐點備餐時間會比較長，也煩請您耐心稍後，或是提早訂餐，感謝各位~<br> <br>*目前福米無提供線上支付功能唷*<br>請幫我們選擇\u0022取餐時付款!!\u0022<br>謝謝您!!!";
      }
      else{
        document.getElementById('AnnouncementButton-Downward-Icon').style.display='block';
        document.getElementById('AnnouncementButton-Upward-Icon').style.display='none';
        toggleContent.innerHTML="*歡迎光臨 福米早午餐* <br> 假日餐點備餐時間會比較長，也煩請您耐心稍後，或是提早訂餐，感謝各位~...";
      }
  });
});
