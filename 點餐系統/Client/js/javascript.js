
let dt = new Date();
// time of first timespan
// document.getElementById("datetime").innerHTML = dt.toLocaleString();
document.getElementById("datetime").innerHTML = dt;

// let tx;
// function returnStoreStatus(){
//   let d = new Date(); // current time
//   let hours = d.getHours();
//   let mins = d.getMinutes();
//   let day = d.getDay();s

//   if(hours >= 16  && hours <= 1){
//     // document.getElementById("open-or-close").innerHTML = "打烊中 下午四點開始營業";
//     tx = "打烊中 下午四點開始營業";
//   }else{
//     // document.getElementById("open-or-close").innerHTML = "營業中";
//     tx = "營業中";
//   }
//   return tx;
// }

// var ele = document.getElementById("open-or-close");
// ele.innerHTML = returnStoreStatus();


// document.getElementById("open-or-close").innerHTML = tx;

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

const container1 = document.getElementById('drinks1-container');
const container2 = document.getElementById('drinks2-container');
const container3 = document.getElementById('drinks3-container');

const drinks1 = [{
    image: '../img/image1.png',
    title: '黑糖珍珠鮮奶',
    content: '$85',
  },
  {
    image: '../img/image2.png',
    title: '黑糖仙草鮮奶',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '黑糖布丁鮮奶',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '黑糖椰果鲜奶',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '黑糖綠豆鲜奶',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '嶴赯鮮奶',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '鲜奶茶/線/膏',
    content: '$85'
  },
  {
    image: '../img/image-3.png',
    title: '冬瓜鲜奶',
    content: '$85'
  },

]

const drinks2 = [{
  image: '../img/image1.png',
  title: '四季春青茶',
  content: '$85',
},
{
  image: '../img/image2.png',
  title: '阿薩姆紅茶',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '茉莉綠茶',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '珍珠椰果四季青',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '珍珠 紅/青/綠',
  content: '$85'
},

]

const drinks3 = [{
  image: '../img/image1.png',
  title: '四季春青茶',
  content: '$85',
},
{
  image: '../img/image2.png',
  title: '阿薩姆紅茶',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '茉莉綠茶',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '珍珠椰果四季青',
  content: '$85'
},
{
  image: '../img/image-3.png',
  title: '珍珠 紅/青/綠',
  content: '$85'
},

]

function returnCards(drinks) {
  return "<div class=\"products-cards\">" + drinks.map(drinks => `
  <div>
    <div class="shop-item"> 
      <h2 class="shop-item-title">${drinks.title} </h2>
    </div> 
    <div class="shop-item-details">
        <span class="shop-item-price cart-column">${drinks.content}</span>
        <button class="btn btn-primary shop-item-button"type="button">加入購物車</button>
    </div> 
  </div>`).join('') + "</div>";
}

container1.innerHTML = returnCards(drinks1);
container2.innerHTML = returnCards(drinks2);
container3.innerHTML = returnCards(drinks3);


let tx;
function returnStoreStatus(){
  let d = new Date(); // current time
  let hours = d.getHours();
  let mins = d.getMinutes();
  let day = d.getDay();

  if(hours >= 16  && hours <= 1){
    // document.getElementById("open-or-close").innerHTML = "打烊中 下午四點開始營業";
    tx = "營業中";
  }else{
    // document.getElementById("open-or-close").innerHTML = "營業中";
    tx = "打烊中 下午四點開始營業";
  }
  return tx;
}

var ele = document.getElementById("store-status");
ele.innerHTML = returnStoreStatus();
