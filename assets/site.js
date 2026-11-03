/* The Sazan File — shared helpers */
var SF=(function(){
  var NS="http://www.w3.org/2000/svg";
  function el(t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);return e}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  var KIND={reg:"Official record",press:"Press / NGO report",alleg:"Allegation"};
  /* the five ties used across the site */
  var TIES=[
    {id:"T1",t:"Hidden ownership",q:"Can you see who really owns or controls it?"},
    {id:"T2",t:"Bent rules",q:"Are laws changed, skipped or left unenforced?"},
    {id:"T3",t:"Cheap land and labour",q:"Is value taken from public land or low-paid work?"},
    {id:"T4",t:"Evidence gap",q:"Where do the records stop?"},
    {id:"T5",t:"Outside pressure",q:"Who has leverage to change it?"}
  ];
  function tag(k){return '<span class="tag t-'+k+'">'+KIND[k]+'</span>'}
  var tipEl=null;
  function tip(ev,html){
    if(!tipEl){tipEl=document.createElement('div');tipEl.className='tip';tipEl.hidden=true;document.body.appendChild(tipEl)}
    if(!html){tipEl.hidden=true;return}
    tipEl.innerHTML=html;tipEl.hidden=false;
    var x=ev.clientX+14,y=ev.clientY+14;if(x+270>innerWidth)x=ev.clientX-270;tipEl.style.left=x+'px';tipEl.style.top=y+'px';
  }
  /* mark the current page in the nav */
  var page=document.body.getAttribute('data-page');
  document.querySelectorAll('nav.top a[data-p]').forEach(function(a){if(a.getAttribute('data-p')===page)a.setAttribute('aria-current','page')});
  /* roving tablist helper: buttons inside container, fn(i) shows tab i */
  function tabs(container,count,show){
    var btns=container.querySelectorAll('[role="tab"]');
    btns.forEach(function(b,i){
      b.addEventListener('click',function(){show(i)});
      b.addEventListener('keydown',function(e){
        var n=-1;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=Math.min(i+1,count-1);if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=Math.max(i-1,0);
        if(n>=0){e.preventDefault();show(n);btns[n].focus()}
      });
    });
    return function(i){btns.forEach(function(b,j){b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1})};
  }
  return {el:el,esc:esc,store:store,KIND:KIND,TIES:TIES,tag:tag,tip:tip,tabs:tabs};
})();
