let new_container=document.getElementById("contain");
let container_right=document.getElementsByClassName("right")[0];
let container_left=document.getElementsByClassName("left")[0];
let startX = 0;
let currentPage = 0; // 0 表示前五个，1 表示后五个
new_container.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});
new_container.addEventListener("touchstart",(event)=>{
    startX = event.touches[0].clientX;
    console.log("喜喜")
})
new_container.addEventListener("touchend",(event)=>{
    const endX = event.changedTouches[0].clientX;
      const deltaX = endX - startX;
      if (deltaX < -50 && currentPage === 0) {
        console.log("endX");
        new_container.style.height=290+"px";
    // 向左滑：切到后五个
    currentPage = 1;
  } else if (deltaX > 50 && currentPage === 1) {
    // 向右滑：回到前五个
    new_container.style.height=176+"px";
    currentPage = 0;
  }
  container_right.style.transform = `translateX(-${currentPage * 100}%)`;
  container_left.style.transform = `translateX(-${currentPage * 100}%)`;
})