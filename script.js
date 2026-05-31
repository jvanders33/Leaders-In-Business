/* mobile menu */
function toggleMenu(){var m=document.getElementById('mm');if(m)m.classList.toggle('open');}

/* rotating speech-bubble portraits (home) */
(function(){
  var slides=document.querySelectorAll('#bubble .slide');
  if(!slides.length)return;
  var who=document.getElementById('bubbleWho');
  var names=(who&&who.dataset.names)?who.dataset.names.split('|'):[];
  var i=0;
  setInterval(function(){
    slides[i].classList.remove('on');
    i=(i+1)%slides.length;
    slides[i].classList.add('on');
    if(who&&names[i])who.textContent=names[i];
  },3500);
})();

/* drag-to-scroll rows */
(function(){
  document.querySelectorAll('.drag-row').forEach(function(row){
    var down=false,startX,scroll;
    row.addEventListener('mousedown',function(e){down=true;row.classList.add('dragging');startX=e.pageX;scroll=row.scrollLeft;});
    window.addEventListener('mouseup',function(){down=false;row.classList.remove('dragging');});
    row.addEventListener('mouseleave',function(){down=false;row.classList.remove('dragging');});
    row.addEventListener('mousemove',function(e){if(!down)return;e.preventDefault();row.scrollLeft=scroll-(e.pageX-startX)*1.4;});
  });
})();

/* FAQ accordion */
(function(){
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.parentElement;
      var ans=item.querySelector('.faq-a');
      var isOpen=item.classList.contains('open');
      if(isOpen){item.classList.remove('open');ans.style.maxHeight=null;}
      else{item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}
    });
  });
})();

/* scroll reveal */
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in');});return;}
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  els.forEach(function(el){io.observe(el);});
})();
