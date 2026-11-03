/* Signature: Albania timeline — lanes, project filter, play-through, sourced event cards. */
(function(B){
B.mount.timeline=function(root){
  var EV=B.TIMELINE.slice().sort(function(a,b){return a.d<b.d?-1:a.d>b.d?1:0});
  var LN=B.LANES,MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  function fmt(d){var p=d.split('-');return MON[+p[1]-1]+' '+p[0]}
  root.innerHTML='<div class="toolbar" style="padding:14px 16px;border-bottom:1px solid var(--line-dark)">'+
    '<div class="chips" role="group" aria-label="Show storylines" data-r="lanes"></div>'+
    '<div class="chips" role="group" aria-label="Filter by project" data-r="proj"></div>'+
    '<div class="chips"><button type="button" class="btn ghost sm" data-r="prev">← Prev</button><button type="button" class="btn sm" data-r="play">▶ Play</button><button type="button" class="btn ghost sm" data-r="next">Next →</button></div></div>'+
    '<div class="tl-scroll" data-r="scroll"><svg id="tlsvg" role="group" aria-label="Timeline events"></svg></div>'+
    '<div class="tlcard" data-r="card" aria-live="polite"></div>';
  var q=function(r){return root.querySelector('[data-r="'+r+'"]')};
  var svg=root.querySelector('#tlsvg'),LW=150,GAP=44,RH=56,TOP=32,W=LW+EV.length*GAP+30,H=TOP+LN.length*RH+8;
  svg.setAttribute('viewBox','0 0 '+W+' '+H);svg.setAttribute('width',W);svg.setAttribute('height',H);
  LN.forEach(function(l,i){var y=TOP+i*RH;svg.appendChild(B.el('rect',{x:0,y:y+4,width:W,height:RH-8,'class':'lane'}));var t=B.el('text',{x:12,y:y+RH/2+4,'class':'lanelbl'});t.textContent=l.t.toUpperCase();svg.appendChild(t)});
  var now=B.el('line',{x1:0,y1:TOP,x2:0,y2:H-4,'class':'now'});svg.appendChild(now);
  var lastY='',G=[],gEv=B.el('g',{'class':'ev'});svg.appendChild(gEv);
  EV.forEach(function(e,i){var x=LW+i*GAP+GAP/2,yr=e.d.slice(0,4);
    if(yr!==lastY){svg.insertBefore(B.el('line',{x1:x-GAP/2,y1:14,x2:x-GAP/2,y2:H-4,'class':'yrl'}),gEv);var t=B.el('text',{x:x-GAP/2+4,y:20,'class':'yr'});t.textContent=yr;svg.insertBefore(t,gEv);lastY=yr}
    var li=LN.findIndex(function(l){return l.id===e.lane}),y=TOP+li*RH+RH/2;
    var g=B.el('g',{tabindex:'0',role:'button','aria-label':fmt(e.d)+': '+e.t});
    g.appendChild(B.el('circle',{cx:x,cy:y,r:17,fill:'transparent'}));g.appendChild(B.el('circle',{cx:x,cy:y,r:9,'class':'dot ev-'+e.ev}));
    if(e.proj){var pt=B.el('text',{x:x,y:y+3.2,'class':'proj'});pt.textContent=e.proj;g.appendChild(pt)}
    B.activate(g,function(){stop();pick(i,true)});gEv.appendChild(g);G.push({g:g,x:x})});
  var lanesOn={},proj='all';LN.forEach(function(l){lanesOn[l.id]=1});
  function vis(i){var e=EV[i];return lanesOn[e.lane]&&(proj==='all'||(proj==='ctx'?!e.proj:(e.proj===proj||e.proj==='B')))}
  function list(){return EV.map(function(_,i){return vis(i)?i:-1}).filter(function(i){return i>=0})}
  function refresh(){EV.forEach(function(_,i){G[i].g.classList.toggle('off',!vis(i))})}
  var cur=-1,timer=null,sc=q('scroll'),card=q('card');
  function pick(i,scroll){cur=i;var e=EV[i],L=list();G.forEach(function(o,j){o.g.classList.toggle('sel',j===i)});now.setAttribute('x1',G[i].x);now.setAttribute('x2',G[i].x);
    card.innerHTML='<span class="when">'+fmt(e.d)+' · '+B.esc(LN.find(function(l){return l.id===e.lane}).t)+'</span><h3>'+B.esc(e.t)+'</h3><div class="chips">'+B.ev(e.ev)+(e.proj?'<span class="projtag">'+B.PROJ[e.proj]+'</span>':'<span class="projtag">Wider context</span>')+'</div><p class="read">'+B.esc(e.x)+'</p><span class="small muted">Sources '+B.cites(e.s)+'</span><span class="mono small muted">Event '+(L.indexOf(i)+1)+' of '+L.length+'</span>';
    if(scroll){var x=G[i].x,w=sc.clientWidth;if(x<sc.scrollLeft+60||x>sc.scrollLeft+w-60)sc.scrollTo({left:Math.max(0,x-w/2),behavior:'smooth'})}}
  function empty(){card.innerHTML='<p class="muted">No events match these filters. Turn a storyline back on or choose "All".</p>'}
  function step(d){var L=list();if(!L.length){empty();stop();return}var p=L.indexOf(cur);p=p<0?0:p+d;if(p<0)p=0;if(p>=L.length){stop();return}pick(L[p],true)}
  var play=q('play');function stop(){if(timer){clearInterval(timer);timer=null;play.textContent='▶ Play'}}
  play.onclick=function(){if(timer){stop();return}var L=list();if(!L.length){empty();return}if(L.indexOf(cur)===L.length-1||L.indexOf(cur)<0)pick(L[0],true);play.textContent='❚❚ Pause';timer=setInterval(function(){step(1)},3400)};
  q('prev').onclick=function(){stop();step(-1)};q('next').onclick=function(){stop();step(1)};
  var lc=q('lanes');LN.forEach(function(l){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed','true');b.textContent=l.t;
    b.onclick=function(){lanesOn[l.id]=lanesOn[l.id]?0:1;b.setAttribute('aria-pressed',String(!!lanesOn[l.id]));refresh();if(cur>=0&&!vis(cur)){var L=list();if(L.length)pick(L[0],true);else empty()}};lc.appendChild(b)});
  var pc=q('proj');[['all','All'],['S','Sazan'],['Z','Zvërnec'],['ctx','Wider context']].forEach(function(p){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',String(p[0]==='all'));b.textContent=p[1];
    b.onclick=function(){proj=p[0];[].forEach.call(pc.children,function(c){c.setAttribute('aria-pressed',String(c===b))});refresh();var L=list();if(!L.length)empty();else if(!vis(cur))pick(L[0],true)};pc.appendChild(b)});
  var start=EV.findIndex(function(e){return e.d>='2024-12'});pick(start<0?0:start,false);
  requestAnimationFrame(function(){sc.scrollLeft=Math.max(0,G[start<0?0:start].x-120)});
};
})(window.BTB);
