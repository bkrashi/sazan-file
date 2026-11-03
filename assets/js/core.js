/* BEYOND THE INVESTMENT — core: navigation, progress, citations, glossary, helpers, mounting.
   Pages set <body data-root="" | "../" data-chapter="01".."07" | "">.
   Interactive blocks are declared as <div data-mount="name"> and mounted by BTB.mount[name]. */
window.BTB = window.BTB || {};
(function(B){
  var NS="http://www.w3.org/2000/svg";
  B.mount = B.mount || {};
  B.el=function(t,a){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);return e};
  B.esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  B.store=function(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}};
  B.root=document.body.getAttribute('data-root')||'';
  B.chap=function(rel){return B.root+'chapters/'+rel};
  B.page=function(file){return B.root+file};
  /* evidence chip */
  B.ev=function(k){var e=B.EVIDENCE[k];return e?'<span class="ev '+k+'">'+e.t+'</span>':''};
  /* citation buttons for a list of source IDs */
  B.cites=function(ids){return (ids||[]).filter(function(i){return B.SOURCES[i]}).map(function(i){return '<button type="button" class="cite" data-s="'+i+'" aria-label="Source '+i+'">'+i.replace('S','')+'</button>'}).join('')};
  B.img=function(id){return B.root+'assets/img/'+id+'.jpg'};
  B.credit=function(id){var c=B.IMAGES[id];if(!c)return'';return 'Photo: '+B.esc(c[0])+' · '+B.esc(c[1])+' · <a href="'+c[4]+'" target="_blank" rel="noopener">'+B.esc(c[2])+'</a>'};
  /* roving tabs */
  B.tabs=function(btns,show){btns=[].slice.call(btns);btns.forEach(function(b,i){
      b.addEventListener('click',function(){show(i)});
      b.addEventListener('keydown',function(e){var n=-1;if(e.key==='ArrowRight'||e.key==='ArrowDown')n=Math.min(i+1,btns.length-1);if(e.key==='ArrowLeft'||e.key==='ArrowUp')n=Math.max(i-1,0);if(n>=0){e.preventDefault();show(n);btns[n].focus()}})});
    return function(i){btns.forEach(function(b,j){b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1})}};
  /* enter/space activation for svg groups */
  B.activate=function(g,fn){g.addEventListener('click',function(e){e.stopPropagation();fn()});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();fn()}})};
  var tipEl;B.tip=function(ev,html){if(!tipEl){tipEl=document.createElement('div');tipEl.className='tip';tipEl.hidden=true;document.body.appendChild(tipEl)}
    if(!html){tipEl.hidden=true;return}tipEl.innerHTML=html;tipEl.hidden=false;var x=ev.clientX+14,y=ev.clientY+14;if(x+270>innerWidth)x=ev.clientX-270;tipEl.style.left=x+'px';tipEl.style.top=y+'px'};

  /* ---------- header ---------- */
  var cur=document.body.getAttribute('data-chapter')||'';
  var seen={};try{seen=JSON.parse(B.store('bti-seen')||'{}')||{}}catch(e){seen={}}
  if(cur){seen[cur]=1;B.store('bti-seen',JSON.stringify(seen))}
  B.seen=seen;
  function buildHeader(){
    var prog=document.createElement('div');prog.className='prog';prog.setAttribute('aria-hidden','true');document.body.prepend(prog);
    var h=document.createElement('header');h.className='site';
    var c=B.CHAPTERS.find(function(x){return x.n===cur});
    h.innerHTML='<div class="bar"><a class="brand" href="'+B.page('index.html')+'">Albania <b>·</b> <span class="full">Beyond the Investment</span></a>'+
      '<div class="where"><div class="segs" aria-label="Chapter progress">'+B.CHAPTERS.map(function(x){return '<a href="'+B.chap(x.slug+'.html')+'" class="'+(x.n===cur?'cur':seen[x.n]?'seen':'')+'" title="Chapter '+x.n+': '+B.esc(x.t)+(seen[x.n]?' (visited)':'')+'"'+(x.n===cur?' aria-current="page"':'')+'><span class="sr">Chapter '+x.n+'</span></a>'}).join('')+'</div>'+
      '<span class="ch">'+(c?'Chapter '+c.n+' of 07 · '+B.esc(c.t):'An investigation in seven chapters')+'</span></div>'+
      '<button type="button" class="navbtn" id="glbtn" aria-haspopup="dialog">Glossary</button>'+
      '<button type="button" class="navbtn" id="menubtn" aria-haspopup="dialog" aria-expanded="false">Chapters</button></div>';
    document.body.insertBefore(h,prog.nextSibling);
    var menu=document.createElement('div');menu.className='menu';menu.hidden=true;menu.setAttribute('role','dialog');menu.setAttribute('aria-label','Chapters');
    menu.innerHTML='<div class="sheet"><div class="top"><span class="kicker">The investigation</span><button type="button" class="navbtn" id="menuclose">Close</button></div><ol>'+
      '<li><a href="'+B.page('index.html')+'"'+(document.body.getAttribute('data-page')==='home'?' aria-current="page"':'')+'><span class="n">00</span><span class="t">Overview<span class="q">The questions, the evidence, the map</span></span><span></span></a></li>'+
      B.CHAPTERS.map(function(x){return '<li><a href="'+B.chap(x.slug+'.html')+'"'+(x.n===cur?' aria-current="page"':'')+'><span class="n">'+x.n+'</span><span class="t">'+B.esc(x.t)+'<span class="q">'+B.esc(x.q)+'</span></span><span class="ok">'+(seen[x.n]?'✓ seen':'')+'</span></a></li>'}).join('')+
      '<li><a href="'+B.page('sources.html')+'"'+(document.body.getAttribute('data-page')==='sources'?' aria-current="page"':'')+'><span class="n">§</span><span class="t">Method & sources<span class="q">How we know, every citation, image credits</span></span><span></span></a></li>'+
      '<li><a href="'+B.page('sources.html#glossary')+'"><span class="n">A–Z</span><span class="t">Glossary<span class="q">Every technical term, explained</span></span><span></span></a></li></ol></div>';
    document.body.appendChild(menu);
    var mb=document.getElementById('menubtn');
    function openMenu(){menu.hidden=false;mb.setAttribute('aria-expanded','true');document.getElementById('menuclose').focus()}
    function closeMenu(){menu.hidden=true;mb.setAttribute('aria-expanded','false');mb.focus()}
    mb.onclick=openMenu;document.getElementById('menuclose').onclick=closeMenu;
    menu.addEventListener('click',function(e){if(e.target===menu)closeMenu()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!menu.hidden)closeMenu()});
    document.getElementById('glbtn').onclick=function(){openGlossary(this)};
    /* reading progress */
    function onScroll(){var d=document.documentElement,max=d.scrollHeight-d.clientHeight;prog.style.width=(max>0?Math.min(100,d.scrollTop/max*100):0)+'%'}
    addEventListener('scroll',onScroll,{passive:true});onScroll();
  }

  /* ---------- chapter footer nav ---------- */
  function buildFooter(){
    var i=B.CHAPTERS.findIndex(function(x){return x.n===cur});
    var f=document.createElement('footer');
    var html='';
    if(cur){var p=i>0?B.CHAPTERS[i-1]:null,n=i<B.CHAPTERS.length-1?B.CHAPTERS[i+1]:null;
      html+='<nav class="chnav" aria-label="Chapter navigation">'+
        (p?'<a href="'+B.chap(p.slug+'.html')+'"><span class="label">← Chapter '+p.n+'</span><b>'+B.esc(p.t)+'</b></a>':'<a href="'+B.page('index.html')+'"><span class="label">← Overview</span><b>The investigation</b></a>')+
        (n?'<a class="next" href="'+B.chap(n.slug+'.html')+'"><span class="label">Chapter '+n.n+' →</span><b>'+B.esc(n.t)+'</b></a>':'<a class="next" href="'+B.page('sources.html')+'"><span class="label">Method & sources →</span><b>How we know</b></a>')+'</nav>'}
    html+='<div class="foot"><div class="in"><span>Albania: Beyond the Investment is an educational investigation built from public registers, customs data, official statistics, NGO findings and published reporting. Nothing here is a legal finding. Everyone named is presumed innocent unless a court rules otherwise.</span><span><a href="'+B.page('sources.html')+'">Method & sources</a> · <a href="'+B.page('sources.html#credits')+'">Image credits</a> · <a href="'+B.page('sources.html#glossary')+'">Glossary</a> · Research retrieved 2 November 2026</span></div></div>';
    f.innerHTML=html;document.body.appendChild(f);
  }

  /* ---------- popovers (citations + glossary) ---------- */
  var pop=null,popFor=null;
  function closePop(){if(pop){pop.remove();pop=null;if(popFor){popFor.setAttribute('aria-expanded','false');popFor.focus();popFor=null}}}
  function showPop(btn,html){closePop();pop=document.createElement('div');pop.className='pop';pop.setAttribute('role','dialog');
    pop.innerHTML='<button type="button" class="x" aria-label="Close">×</button>'+html;document.body.appendChild(pop);
    var r=btn.getBoundingClientRect(),w=pop.offsetWidth,x=Math.min(Math.max(16,r.left+scrollX-20),scrollX+document.documentElement.clientWidth-w-16),y=r.bottom+scrollY+8;
    pop.style.left=x+'px';pop.style.top=y+'px';popFor=btn;btn.setAttribute('aria-expanded','true');
    pop.querySelector('.x').onclick=closePop;pop.querySelector('.x').focus()}
  B.sourceHTML=function(id){var s=B.SOURCES[id];if(!s)return'';
    return '<span class="label">Source '+id+'</span><span class="t">'+B.esc(s[0])+'</span><span>'+B.esc(s[1])+(s[4]?' · '+B.esc(s[4]):'')+'</span>'+B.ev(s[3])+(s[5]?'<span class="small">'+B.esc(s[5])+'</span>':'')+
      '<span><a href="'+s[2]+'" target="_blank" rel="noopener">Open source ↗</a> · <a href="'+B.page('sources.html#'+id)+'">In the source list</a></span>'};
  document.addEventListener('click',function(e){
    var c=e.target.closest('.cite');if(c){e.preventDefault();e.stopPropagation();if(popFor===c){closePop();return}showPop(c,B.sourceHTML(c.getAttribute('data-s')));return}
    var g=e.target.closest('.gl');if(g){e.preventDefault();e.stopPropagation();if(popFor===g){closePop();return}var t=B.GLOSSARY[g.getAttribute('data-term')];if(t)showPop(g,'<span class="label">Glossary</span><span class="t">'+B.esc(t[0])+'</span><span>'+B.esc(t[1])+'</span><a href="'+B.page('sources.html#glossary')+'">Full glossary</a>');return}
    if(pop&&!e.target.closest('.pop'))closePop();
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&pop)closePop()});
  function openGlossary(btn){var keys=Object.keys(B.GLOSSARY).sort(function(a,b){return B.GLOSSARY[a][0].localeCompare(B.GLOSSARY[b][0])});
    showPop(btn,'<span class="label">Glossary</span><div style="max-height:60vh;overflow:auto;display:grid;gap:10px">'+keys.map(function(k){var t=B.GLOSSARY[k];return '<div><b>'+B.esc(t[0])+'</b><br><span class="small">'+B.esc(t[1])+'</span></div>'}).join('')+'</div>');
    pop.style.position='fixed';pop.style.top='70px';pop.style.right='16px';pop.style.left='auto'}
  /* decorate glossary buttons with ARIA */
  function decorate(root){(root||document).querySelectorAll('.gl:not([aria-haspopup])').forEach(function(b){b.setAttribute('aria-haspopup','dialog');b.setAttribute('aria-expanded','false');b.type='button'})}
  B.decorate=decorate;

  /* ---------- boot ---------- */
  B.boot=function(){
    if(document.body.getAttribute('data-nochrome')!=='1'){buildHeader();buildFooter()}
    document.querySelectorAll('[data-cites]').forEach(function(n){n.insertAdjacentHTML('beforeend',B.cites(n.getAttribute('data-cites').split(/\s+/)))});
    document.querySelectorAll('[data-bg]').forEach(function(n){n.style.backgroundImage='url("'+B.img(n.getAttribute('data-bg'))+'")'});
    document.querySelectorAll('[data-credit]').forEach(function(n){n.innerHTML=B.credit(n.getAttribute('data-credit'))});
    document.querySelectorAll('[data-mount]').forEach(function(n){var f=B.mount[n.getAttribute('data-mount')];if(f){try{f(n)}catch(err){(window.__errs=window.__errs||[]).push(String(err));console.error(err)}}});
    decorate();
  };
})(window.BTB);
