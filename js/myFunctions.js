//data for cars when user click any car show more detials 
const cars= [
    {
        id:1,
        images:["./images/11.jpg","./images/12.jpg"],
        typeRent:"يومي",
        date:"2018",
        price:180000,
        typeCar:"1-DODGE RAM TRX",
        desc:"كراسي جلد – تحكم بالحرارة – نظام ايو اكس -كراسي الكترونية- نوافذ الكترونية – حساسات موقف امامية وخلفية -كاميرات خلفية وامامية -دفع رباعي -مكابحABS-وسائد هوائية -انوار زينون- نظام قفل العجلات- نظام مساعدة عدم تغيير المسار"
     
    },
    {
        id:2,
        images:["./images/21.jpg","./images/22.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"2 CADLILAC ESCALASE ",
        price:150000,
        desc:"دفع رباعي عائلية تتسع إلى 8 ركاب – سقف بانوراما- حساسات خلفية وامامية- مثبت سرعة- نظام صوت ممتاز – شاشات خلفية – التحكم في ارتفاع السيارة -كراسي خلفية مبردة -تكييف"
     
    },
    {
        id:3,
        images:["../images/31.jpg","../images/32.jpg"],
        typeRent:"يومي",
        date:"2018",
        price:100000,
        typeCar:"3MERCEDES G63 AMG  ",
        desc:"4 ركاب دفع رباعي – تكييف- كراسي مدفئة- حساسات امامية وخلفية- كراسي الكترونية- كاميرات خلفية -تحكم بالحرارة – مثبت سرعة -كراسي جلد- نظام ملاحة  "
     
    },
    {
        id:4,
        images:["../images/41.jpg","../images/42.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"MERCEDES BENZ S500  ",
        price:120000,
        desc:"4 ركاب- نظام امان -كراسي مدفئة -حساسات موقف امامية وخلفية- وضع القيادة- عداد سرعة على الزجاج الامامي -التحكم في ارتقاع السيارة – كاميرات خلفية وامامية – نوافذ الكترونية- تكييف -كراسي مساج   "
     
    },
    {
        id:5,
        images:["../images/51.jpg","../images/52.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"BMW 740  ",
        price:200000,
        desc:"نظام الأمان – تكييف- مثبت سرعة -كراسي مدفئة -تحكم بالحرارة-حساسات امامية وخلفية-كاميرات امامية وخلفية-عداد زجاج على الامامي-غيار سرعة خلف المقود – التحكم في ارتفاع السيارة -مثبت السرعة -سقف بانوراميك   "
     
    },
    {
        id:6,
        images:["../images/61.png","../images/62.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"AVAL JOLION  ",
        price:190000,
        desc:"تكييف-نظام امان – مشغل أقراص- تحكم بالحرارة - اثقال كهربائية-غيار سرعة خلف المقود- كراسي الكترونية – نوافذ الكترونية- كاميرا خلفية -كراسي جلد   "
     
    },
    {
        id:7,
        images:["../images/71.jpg","../images/72.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"RANG ROVER SPORT   ",
        price:165000,
        desc:"تحكم بالحرارة- كراسي امامية مبردة- مثبت سرعة- كراسي جلد – حساسات خلفية وامامية- كراسي الكترونية -فتحة سقف شمسية -نظام ملاحة "
     
    },
    {
        id:8,
        images:["../images/81.jpg","../images/82.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"YUNDAI ACCENT GCC  ",
        price:145000,
        desc:"تحكم بالحرارة- كراسي امامية مبردة- مثبت سرعة- كراسي جلد – حساسات خلفية وامامية  "
     
    },
    {
        id:9,
        images:["../images/91.jpg","../images/92.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"CHEVROLET TAHOE ",
        price:205000,
        desc:"دفع رباعي عائلية -تكييف- كراسي جلد- التحكم في ارتفاع السيارة- شاشات خلفية- وضع القيادة على الطريق -كاميرات خلفية وامامية -غيار سرعة خلف المقود -مثبت سرعة -سقف بانوراما "     
    },
    {
        id:10,
        images:["../images/101.jpg","../images/102.jpg"],
        typeRent:"يومي",
        date:"2018",
        typeCar:"LAMBORGHINI URUS ",
        price:110000,
        desc:"4 ركاب- نظام امان -كراسي مدفئة -حساسات موقف امامية وخلفية- وضع القيادة- عداد سرعة على الزجاج الامامي -التحكم في ارتقاع السيارة – كاميرات خلفية وامامية – نوافذ الكترونية- تكييف -كراسي مساج  "     
    },
   
   
]



function getCar(id){
    localStorage.setItem("id",id)
     window.location.href="detalis.html"
}

//for get information from array when use click image 
let detials=document.getElementById("details-table")  //تحديد جدول الذي سندرج به معلومات السيارة
let id=localStorage.getItem("id") //جلب الرقم التعريفي من ذاكرة المتصفح
let imagesInDetails=document.querySelector(".details .car-images"); //اختيار المكان الذي سنعرض به الصور الإضافية للسيارة

imagesInDetails.innerHTML=`
<img src=${cars[id].images[0]} alt="image1"/>
<img src=${cars[id].images[1]} alt="image2"/>
`

if(detials != null){
    detials.innerHTML+=`
    <td>
     <table>
     <tbody>
     <tr>
     <td>قيمة الايجار</td>
     <td>ضريبة إعادة إعمار </td>
     <td>ضريبة   </td>
     <td>قيمة الايجار اليوم الكلي   </td>
     </tr>
     <tr>
     <td>${cars[id].price}</td>
     <td>${cars[id].price*1/100}</td>
     <td>${cars[id].price*5/100}</td>
     <td>${rentPrice(cars[id].price)}</td>
     </tr>

     </tbody>
     </table>
    </td>
     <td>${cars[id].typeRent}</td>
     <td>${cars[id].date}</td>
     <td>${cars[id].typeCar}</td>
     <td>${cars[id].desc}</td>
     
  `
}




//caluclate rent 
function rentPrice(price){
    return price+price*1/100+price*5/100
}



let checkbox = document.querySelector(".checkbox");
let form = document.querySelector("form");
checkbox.addEventListener("click", () => {
    let show = checkbox.checked;
    if (show) {
        form.style.visibility = "visible";
    } else {
        form.style.visibility = "hidden";
    }
});
form.style.visibility = "hidden";


//when click submit form
function submitForm(event) {
    event.preventDefault();

    var fullName = document.getElementById('fullName').value;
    var nationalID = document.getElementById('nationalID').value;
    var birthdate = document.getElementById('birthdate').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var email = document.getElementById('email').value;
    var duration = document.getElementById('duration').value;
    var textBox = document.getElementById('textBox').value;

    function validateFullName(fullName) {
        if (fullName.search(/^[\u0600-\u06FF\s]+$/) !== 0) {
            alert('الرجاء إدخال اسم صحيح (أحرف هجائية فقط باللغة العربية).');
            return false;
        }
        return true;
    }
    
    function validateNationalID(nationalID) {
        if (nationalID.search(/^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/) !== 0) {
            alert('الرجاء إدخال رقم وطني صحيح (11 خانة) بشكل صحيح مع الانتباه لرمز المحافظة.');
            return false;
        }
        return true;
    }
    
    function isValidBirthdate(birthdate) {
        if (birthdate.search(/^\d{2}-\d{2}-\d{4}$/) !== 0) {
            alert('الرجاء إدخال تاريخ الميلاد بالصيغة التالية 01-10-2000.');
            return false;
        }
        return true;
    }
    
    function isValidMobileNumber(mobileNumber) {
        if (mobileNumber.search(/^(09)(3[0-2]|4[0-9]|5[0-9]|6[0-9]|8[0-9]|9[0-9])\d{6}$|^(09)(6[0-9]|9[0-9])\d{6}$/) !== 0) {
            alert('الرجاء إدخال رقم صحيح.');
            return false;
        }
        return true;
    }
    
    function isValidEmail(email) {
        if (email.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) !== 0) {
            alert('الرجاء إدخال البريد الإلكتروني بشكل صحيح.');
            return false;
        }
        return true;
    }
    
    function isValidDuration(duration)

{
        if (isNaN(duration) || duration <= 0) {
            alert('الرجاء إدخال مدة الإيجار بشكل صحيح.');
            return false;
        }
        return true;
    }
    
    function validateCaptcha(textBox, captchaText) {
        if (textBox.toLowerCase() === captchaText.toLowerCase()) {
            return true;
        } else {
            alert('كلمة التحقق غير صحيحة. الرجاء إعادة المحاولة.');
            return false;
        }
    }

    const captchaText = localStorage.getItem("captcha");
    const isValidCaptcha = validateCaptcha(textBox, captchaText);

    if (fullName && nationalID && birthdate && mobileNumber && email && duration && isValidCaptcha &&
        validateFullName(fullName) && validateNationalID(nationalID) && isValidBirthdate(birthdate) &&
        isValidMobileNumber(mobileNumber) && isValidEmail(email) && isValidDuration(duration)) {
        alert(`تم إرسال طلبك بنجاح التكلفة النهائية لإيجار السيارة ${rentPrice(cars[id].price)*duration}`);
    } else {
        alert('الرجاء إكمال جميع الحقول المطلوبة بشكل صحيح.');
    }
}

// Generate and display the CAPTCHA
function generateCaptcha() {
    const captchaLength = 5;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < captchaLength; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    localStorage.setItem("captcha", captcha);

    const canvas = document.getElementById("captchaCanvas");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = "30px Arial";
    context.fillText(captcha, 120, 30);
}

// Refresh the CAPTCHA for new code
function refreshCaptcha() {
    generateCaptcha();
}

generateCaptcha();
