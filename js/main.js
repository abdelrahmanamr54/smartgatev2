let newmem=document.querySelector(".btn-primary")
let modal=document.querySelector(".modal-body")
let modal2=document.querySelector("#modal2")
let logbutt=document.querySelector(".logbutt")


// 
// let display=()=>{
//     let trs=""

//     trs+=` <button type="button" class="  btn btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal">
//     عضو جديد
//   </button>`

//   newmem.innerHTML=trs
// }
// // display()


let open=()=>{
  modal.innerHTML=`<div class="reg">
  <div class="postreg">
      <img src="img/Group 11345@2x.png" alt="">
  </div>
  <div class="reginfo">
      <h1>التسجيل في الندوة</h1>
      <p>من فضلك قم بإدخال البيانات المطلوبة منك وسوف يتم إرسال تفاصيل الندوة لك وموعدها علي بريدك الإلكتروني ورقم تذكرة الحضور الخاصة بك</p>
      <div>
          <input type="text" name="" id="" placeholder="الاسم بالكامل">
      </div>
      <div>
          <input type="text" name="" id="" placeholder="رقم الهاتف">
      </div>
      <div>
          <input type="text" name="" id="" placeholder="بريدك الإلكتروني">
      </div>

  </div>

</div>`
}
open()
logbutt.addEventListener("click",function(){
    modal2.innerHTML=` <div class="log">
    <div class="postlog">
        <img src="img/Group 11344@2x.png" alt="">
    </div>
    <div class="loginfo">
        <h1>تسجيل الدخول</h1>
        <p>من فضلك قم بإدخال البيانات المطلوبة منك لإستكمال تسجيل الدخول ومعرفة الدرجات والتقديرات الخاصة بك في الجامعة</p>
        <div>
            <input type="text" name="" id="" placeholder="الرقم القومي">
        </div>
        <div>
            <input type="text" name="" id="" placeholder="الرقم الجامعي">
        </div>
        <button>تسجيل الآن</button>
    </div>
  </div>`
})

// newmem.addEventListener("click",function(){
//     modal.innerHTML=`<div class="reg">
//     <div class="postreg">
//         <img src="img/Group 11345@2x.png" alt="">
//     </div>
//     <div class="reginfo">
//         <h1>التسجيل في الندوة</h1>
//         <p>من فضلك قم بإدخال البيانات المطلوبة منك وسوف يتم إرسال تفاصيل الندوة لك وموعدها علي بريدك الإلكتروني ورقم تذكرة الحضور الخاصة بك</p>
//         <div>
//             <input type="text" name="" id="" placeholder="الاسم بالكامل">
//         </div>
//         <div>
//             <input type="text" name="" id="" placeholder="رقم الهاتف">
//         </div>
//         <div>
//             <input type="text" name="" id="" placeholder="بريدك الإلكتروني">
//         </div>
  
//     </div>
  
//   </div>`

// })
// logbutt.addEventListener("click",function(){
//     modal2.innerHTML= ` <div class="log">
//        <div class="postlog">
//           <img src="img/Group 11344@2x.png" alt="">
//         </div>
//         <div class="loginfo">
//             <h1>تسجيل الدخول</h1>
//             <p>من فضلك قم بإدخال البيانات المطلوبة منك لإستكمال تسجيل الدخول ومعرفة الدرجات والتقديرات الخاصة بك في الجامعة</p>
//             <div>
//                 <input type="text" name="" id="" placeholder="الرقم القومي">
//             </div>
//             <div>
//                 <input type="text" name="" id="" placeholder="الرقم الجامعي">
//             </div>
//             <button>تسجيل الآن</button>
//         </div>
//       </div>`

// })