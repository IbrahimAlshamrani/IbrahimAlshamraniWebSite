document.addEventListener('DOMContentLoaded',function(){
var b=document.getElementById('heroBtn');
if(b){b.addEventListener('click',function(){alert('تم الضغط على الزر');});}
var f=document.getElementById('contactForm');
if(f){f.addEventListener('submit',function(e){
e.preventDefault();
var n=document.getElementById('name').value.trim();
var em=document.getElementById('email').value.trim();
var m=document.getElementById('message').value.trim();
var r=document.getElementById('formResult');
if(!n||!em||!m){r.textContent='يرجى تعبئة جميع الحقول';r.style.color='red';return;}
var p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!p.test(em)){r.textContent='بريد غير صحيح';r.style.color='red';return;}
r.textContent='تم الإرسال بنجاح';r.style.color='green';
f.reset();
});}});