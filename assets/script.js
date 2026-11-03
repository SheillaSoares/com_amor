const BASE='https://wa.me/5524999322402?text=';
const generic='Olá! Conheci suas bolsas pelo site e gostaria de saber mais sobre os modelos disponíveis. ❤️';
document.querySelectorAll('[data-wa]').forEach(a=>{
  const m=a.dataset.m;
  const msg=m?`Olá! Conheci suas bolsas pelo site e tenho interesse no modelo ${m}. Poderia me passar mais informações? ❤️`:generic;
  a.href=BASE+encodeURIComponent(msg);
});
const hd=document.getElementById('top');
const onScroll=()=>hd.classList.toggle('solid',scrollY>40);
addEventListener('scroll',onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
