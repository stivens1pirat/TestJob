let usersIn = JSON.parse(users),
    numb="",
    mail="",
    rate="";

window.onload=function(){
  newsFunc();
  let md = document.getElementById('newUser'),
      cl = document.getElementById('close'),
      cncl = document.getElementById('cancel');
  md.addEventListener("click", modalWindow);
  cl.addEventListener("click", closeModalWindow);
  cncl.addEventListener("click", closeModalWindow);
}

function modalWindow(){
  document.getElementById('modal').style.marginLeft="67px";
  document.getElementById('modalBackground').style.marginLeft="67px";
}
function closeModalWindow(){
  document.getElementById('modal').style.marginLeft="100%";
  document.getElementById('modalBackground').style.marginLeft="100%";
}

function newsFunc(){
  let t = document.getElementById('wall');
  t.innerHTML='\
  <div class="heading">\
    <div class="left">\
      <div class="headText">Ваши соискатели</div>\
      <span class="comment">Всего соискателей: '+usersIn.length+'</span>\
    </div>\
    <div class="right">\
      <button><img src="img/flag.png">ИЗБРАННЫЕ</button>\
      <button id="newUser">+ ДОБАВИТЬ СОИСКАТЕЛЯ</button>\
    </div>\
  </div>\
  <div class="content">\
    <div class="user">СОИСКАТЕЛЬ</div>\
    <div class="number">ТЕЛЕФОН</div>\
    <div class="mail">E-MAIL</div>\
    <div class="rate">ОЦЕНКА СОИСКАТЕЛЯ</div>\
    <div class="action"></div>\
  </div>\
  ';
  for (let i=0; i<usersIn.length; i++){
    if (usersIn[i].number!=""){
      numb ='\
      <div class="photo"><img src="img/number.png"></div>\
      <div class="text">\
        <div class="headText">'+usersIn[i].number+'</div>\
      </div>';
    } else {
      numb ='\
      <div class="photo"><img src="img/number.png" style="opacity:0.3"></div>\
      <div class="text">\
        <div class="headText" style="color: grey">Телефон не указан</div>\
      </div>';
    }
    if (usersIn[i].mail!=""){
      mail ='\
      <div class="photo"><img src="img/mail.png"></div>\
      <div class="text">\
        <div class="headText">'+usersIn[i].mail+'</div>\
      </div>';
    } else {
      mail ='\
      <div class="photo"><img src="img/mail.png" style="opacity:0.3"></div>\
      <div class="text">\
        <div class="headText" style="color: grey">E-mail не указан</div>\
      </div>';
    }
    switch (usersIn[i].rate) {
      case "1": rate='<div class="text"><div class="headText" style="color: red; font-size: 1.5em">★☆☆☆☆</div><span class="comment">Средний балл:<b>1.0</b></span></div>'; break;
      case "2": rate='<div class="text"><div class="headText" style="color: orange; font-size: 1.5em">★★☆☆☆</div><span class="comment">Средний балл:<b>2.0</b></span></div>';break;
      case "3": rate='<div class="text"><div class="headText" style="color: yellow; font-size: 1.5em">★★★☆☆</div><span class="comment">Средний балл:<b>3.0</b></span></div>';break;
      case "4": rate='<div class="text"><div class="headText" style="color: #a7cc23; font-size: 1.5em">★★★★☆</div><span class="comment">Средний балл:<b>4.0</b></span></div>';break;
      case "5": rate='<div class="text"><div class="headText" style="color: #56bf00; font-size: 1.5em">★★★★★</div><span class="comment">Средний балл:<b>5.0</b></span></div>';break;
    }
  t.innerHTML+='\
  <div class="content">\
  <div class="user">\
    <div class="photo"><img src="'+usersIn[i].image+'"></div>\
    <div class="text">\
      <div class="headText">'+usersIn[i].name+'</div>\
      <span class="comment">Ваканся: '+usersIn[i].vacancy+'</span>\
    </div>\
  </div>\
  <div class="number">'+numb+'</div>\
  <div class="mail">'+mail+'</div>\
  <div class="rate">'+rate+'</div>\
  <div class="action">\
    <div class="photo"><img src="img/doc.png"></div>\
    <div class="photo"><img src="img/download.png"></div>\
    <div class="photo"><img src="img/flag.png"></div>\
  </div>\
  </div>';
  }
  t.innerHTML+='<div class="content"><div class="all">ПОКАЗАТЬ ЕЩЕ</div></div>';
};
