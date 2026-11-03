/* Signature: Follow the Money — clickable relationship network with evidence on every edge. */
(function(B){
B.mount.network=function(root){
  var D=B.NET,NW=176,NH=50;
  root.innerHTML='<div class="toolbar"><div class="chips" role="group" aria-label="Show relationship evidence" data-r="ev"></div>'+
    '<div class="chips"><label class="sr" for="netq">Find a person or company</label><input type="search" id="netq" placeholder="Find a name…" autocomplete="off"></div></div>'+
    '<div class="split"><div class="canvas"><svg id="netsvg" role="group" aria-label="Relationship network"></svg><div class="hint">Click a box, or Tab to it and press Enter. Click empty space to reset. Scroll sideways on small screens.</div></div>'+
    '<aside class="panel sticky" data-r="panel" aria-live="polite"></aside></div>';
  var svg=root.querySelector('#netsvg');svg.setAttribute('viewBox','0 0 '+D.w+' '+D.h);
  var by={};D.nodes.forEach(function(n){by[n.id]=n});
  D.clusters.forEach(function(c){svg.appendChild(B.el('rect',{x:c.x,y:c.y,width:c.w,height:c.h,rx:4,'class':'cl'}));var t=B.el('text',{x:c.x+12,y:c.y+18,'class':'cllbl'});t.textContent=c.t;svg.appendChild(t)});
  svg.appendChild(B.el('line',{x1:20,y1:D.wall.y,x2:D.w-20,y2:D.wall.y,'class':'wall'}));
  var wt=B.el('text',{x:D.w/2,y:D.wall.y+15,'text-anchor':'middle','class':'walllbl'});wt.textContent=D.wall.t;svg.appendChild(wt);
  var gE=B.el('g',{}),gN=B.el('g',{});svg.appendChild(gE);svg.appendChild(gN);
  var E=D.edges.map(function(e){var a=by[e[0]],b=by[e[1]],mx=(a.x+b.x)/2,my=(a.y+b.y)/2,c=(Math.abs(a.x-b.x)<4||Math.abs(a.y-b.y)<4)?0:16;
    var p=B.el('path',{d:'M'+a.x+' '+a.y+' Q'+(mx+c)+' '+(my-c)+' '+b.x+' '+b.y,'class':'e '+e[3]});gE.appendChild(p);
    return {a:e[0],b:e[1],rel:e[2],ev:e[3],l:e[4],s:e[5],p:p}});
  D.nodes.forEach(function(n){var g=B.el('g',{'class':'n k-'+n.k,tabindex:'0',role:'button','aria-label':n.l.join(' ')+', '+n.s});
    g.appendChild(B.el('rect',{x:n.x-NW/2,y:n.y-NH/2,width:NW,height:NH,rx:n.k==='person'?22:3}));
    var top=n.y-(n.l.length===2?9:2);n.l.forEach(function(t,j){var tx=B.el('text',{x:n.x,y:top+j*14});tx.textContent=t;g.appendChild(tx)});
    var s=B.el('text',{x:n.x,y:top+n.l.length*14+1,'class':'s'});s.textContent=n.s;g.appendChild(s);
    B.activate(g,function(){select(n.id)});gN.appendChild(g);n._g=g});
  svg.addEventListener('click',function(){select(null)});
  var evOn={off:1,rep:1,ngo:1,alg:1,unv:1},panel=root.querySelector('[data-r="panel"]'),cur=null;
  var evc=root.querySelector('[data-r="ev"]');
  Object.keys(evOn).forEach(function(k){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed','true');
    b.innerHTML='<svg viewBox="0 0 30 8" width="30" height="8" aria-hidden="true"><line x1="0" y1="4" x2="30" y2="4" stroke="var(--st-'+k+')" stroke-width="2" stroke-dasharray="'+({off:'',rep:'7 5',ngo:'12 4',alg:'2 4',unv:'1 5'})[k]+'"/></svg>'+B.EVIDENCE[k].t;
    b.onclick=function(){evOn[k]=evOn[k]?0:1;b.setAttribute('aria-pressed',String(!!evOn[k]));E.forEach(function(e){e.p.classList.toggle('hide',!evOn[e.ev])})};evc.appendChild(b)});
  function select(id){cur=id;var lk={};
    E.forEach(function(e){var o=id&&(e.a===id||e.b===id);e.p.classList.toggle('dim',!!id&&!o);e.p.classList.toggle('lit',!!o);if(o){lk[e.a]=1;lk[e.b]=1}});
    D.nodes.forEach(function(n){n._g.classList.toggle('sel',n.id===id);n._g.classList.toggle('dim',!!id&&!lk[n.id]&&n.id!==id)});
    if(!id){panel.innerHTML='<span class="kicker">How to read the map</span><h3>Every line is a claim</h3><p>Solid lines are official records. Dashed lines are reporting or NGO findings. Dotted lines are allegations or unverified links. The terracotta line separates the coastal projects from the export supply chains: no record connects them.</p><p class="small muted">Start with <button type="button" class="btn ghost sm" data-go="aedp">the Abu Dhabi holding</button> or <button type="button" class="btn ghost sm" data-go="ald">the Vlorë land company</button>.</p>';wire();return}
    var n=by[id],h='<span class="kicker">'+B.esc(({person:"Person",co:"Company",gov:"Government body",project:"Development proposal",probe:"Oversight & monitoring"})[n.k])+'</span><h3>'+B.esc(n.l.join(' '))+'</h3>'+B.ev(n.ev)+'<p>'+B.esc(n.x2)+'</p><span class="small muted">Sources '+B.cites(n.src)+'</span>';
    var mine=E.filter(function(e){return e.a===id||e.b===id});
    h+='<span class="label">Relationships ('+mine.length+')</span><ul class="conn">'+(mine.length?mine.map(function(e){var o=e.a===id?e.b:e.a;return '<li><button type="button" data-go="'+o+'">'+B.esc(by[o].l.join(' '))+'</button><span>'+B.esc(e.l)+'</span><span class="chips">'+B.ev(e.ev)+'<span class="mono small muted">'+B.esc(D.rel[e.rel])+'</span>'+B.cites(e.s)+'</span></li>'}).join(''):'<li>No documented relationship to other entities on this map.</li>')+'</ul>';
    if(n.url)h+='<a class="go" href="'+n.url+'" target="_blank" rel="noopener">Open the record on Sayari Graph ↗</a>';
    panel.innerHTML=h;wire()}
  function wire(){panel.querySelectorAll('[data-go]').forEach(function(b){b.onclick=function(e){e.stopPropagation();select(b.getAttribute('data-go'));var g=by[b.getAttribute('data-go')]._g;if(g)g.focus({preventScroll:true})}})}
  var qi=root.querySelector('#netq');qi.addEventListener('input',function(){var v=qi.value.trim().toLowerCase();D.nodes.forEach(function(n){n._g.classList.toggle('match',!!v&&(n.l.join(' ')+' '+n.s).toLowerCase().indexOf(v)>=0)})});
  qi.addEventListener('keydown',function(e){if(e.key==='Enter'){var v=qi.value.trim().toLowerCase();var m=D.nodes.find(function(n){return v&&(n.l.join(' ')+' '+n.s).toLowerCase().indexOf(v)>=0});if(m)select(m.id)}});
  select(null);
};
})(window.BTB);
