/* Chapter 04: supply-chain explorer, export charts, wages chart. */
(function(B){
var TECHNAME=function(id){var t=B.TECH.find(function(x){return x.id===id});return t?t.t:id};
B.mount.product=function(root){
  root.innerHTML='<div class="chips" role="tablist" aria-label="Choose a product" data-r="prods"></div>'+
    '<div class="stages" role="tablist" aria-label="Supply-chain stage" data-r="stages"></div>'+
    '<div class="panel" data-r="body" aria-live="polite" style="gap:18px"></div>'+
    '<div class="chips"><button type="button" class="btn ghost sm" data-r="prev">← Previous stage</button><button type="button" class="btn sm" data-r="play">▶ Follow the journey</button><button type="button" class="btn ghost sm" data-r="next">Next stage →</button></div>';
  var q=function(r){return root.querySelector('[data-r="'+r+'"]')},P=0,S=0,timer=null;
  var pc=q('prods');B.PRODUCTS.forEach(function(p){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('role','tab');b.innerHTML=B.esc(p.t)+' <span class="muted small">· '+B.esc(p.sub)+'</span>';pc.appendChild(b)});
  var setP=B.tabs(pc.children,function(i){halt();P=i;setP(i);show(0)});
  var sc=q('stages');B.STAGES.forEach(function(s,i){var b=document.createElement('button');b.type='button';b.className='stage';b.setAttribute('role','tab');b.innerHTML='<span class="n">STAGE '+(i+1)+' · '+B.esc(s.toUpperCase())+'</span><b></b><span class="w"></span><span class="bar"></span>';sc.appendChild(b)});
  var setS=B.tabs(sc.children,function(i){halt();show(i)});
  function show(i){S=i;setS(i);var p=B.PRODUCTS[P];
    [].forEach.call(sc.children,function(b,j){var st=p.stages[j];b.querySelector('b').textContent=st.n;b.querySelector('.w').textContent=st.w;b.classList.toggle('past',j<i)});
    var st=p.stages[i];
    q('body').innerHTML='<div style="display:grid;gap:6px"><span class="kicker">'+B.esc(p.t)+' · Stage '+(i+1)+' of 5 · '+B.esc(st.w)+'</span><h3>'+B.esc(st.n)+'</h3><p class="read">'+B.esc(st.what)+'</p></div>'+
      '<div class="facets">'+
      '<div class="facet risk"><h4>Potential risks</h4><ul>'+st.risks.map(function(r){return '<li>'+B.esc(r)+'</li>'}).join('')+'</ul></div>'+
      '<div class="facet"><h4>Questions a buyer should ask</h4><ul>'+st.q.map(function(r){return '<li>'+B.esc(r)+'</li>'}).join('')+'</ul></div>'+
      '<div class="facet"><h4>Available evidence</h4><ul>'+st.evidence.map(function(e){return '<li>'+B.esc(e[0])+' '+B.ev(e[1])+B.cites(e[2])+'</li>'}).join('')+'</ul></div>'+
      '<div class="facet"><h4>Relevant rules</h4><ul>'+st.rules.map(function(r){return '<li>'+B.esc(r[0])+(r[1]?B.cites([r[1]]):'')+'</li>'}).join('')+'</ul></div>'+
      '<div class="facet"><h4>Technology that could help</h4><div class="techchips">'+st.tech.map(function(t){return '<a href="06-technology.html#'+t+'">'+B.esc(TECHNAME(t))+'</a>'}).join('')+'</div><p class="small muted">Each opens in the Technology Laboratory, with its limits.</p></div>'+
      '</div>'}
  function halt(){if(timer){clearInterval(timer);timer=null;q('play').textContent='▶ Follow the journey'}}
  q('play').onclick=function(){if(timer){halt();return}show(0);this.textContent='❚❚ Pause';timer=setInterval(function(){if(S>=4){halt();return}show(S+1)},3600)};
  q('prev').onclick=function(){halt();if(S>0)show(S-1)};q('next').onclick=function(){halt();if(S<4)show(S+1)};
  setP(0);show(0);
};
function bars(svg,rows,o){var lw=o.lw,rh=o.rh||26,w=540,top=6,H=top+rows.length*rh+22,pw=w-lw-62;
  svg.setAttribute('viewBox','0 0 '+w+' '+H);svg.innerHTML='';
  o.ticks.forEach(function(t){var x=lw+t/o.max*pw;svg.appendChild(B.el('line',{x1:x,y1:top,x2:x,y2:H-20,'class':'gr'}));var tx=B.el('text',{x:x,y:H-5,'text-anchor':'middle','class':'ax'});tx.textContent=(o.pre||'')+t.toLocaleString('en-US');svg.appendChild(tx)});
  rows.forEach(function(r,i){var y=top+i*rh,g=B.el('g',{'class':'br'});g.dataset.cat=r.cat||'';
    var lb=B.el('text',{x:lw-8,y:y+rh/2+4,'text-anchor':'end','class':'ax'});lb.textContent=r.label;g.appendChild(lb);
    var bw=Math.max(2,r.v/o.max*pw);g.appendChild(B.el('rect',{x:lw,y:y+5,width:bw,height:rh-10,rx:3,fill:r.col}));
    var vt=B.el('text',{x:lw+bw+6,y:y+rh/2+4,'class':'vl'});vt.textContent=(o.pre||'')+r.v.toLocaleString('en-US');g.appendChild(vt);
    g.appendChild(B.el('rect',{x:0,y:y,width:w,height:rh,fill:'transparent'}));
    g.addEventListener('mousemove',function(ev){B.tip(ev,r.tip)});g.addEventListener('mouseleave',function(){B.tip()});svg.appendChild(g)})}
function table(rows,head){return '<table><tr>'+head.map(function(h){return '<th>'+h+'</th>'}).join('')+'</tr>'+rows.map(function(r){return '<tr>'+r.map(function(c,j){return '<td'+(j===r.length-1?' class="n"':'')+'>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</table>'}
B.mount.exports=function(root){
  var X=B.EXPORTS,COL={chrome:'#A7B7D8',shoe:'#D3B58C',cloth:'#86C0B3',other:'#7C8790'};
  root.innerHTML='<div class="chips" role="group" aria-label="Highlight a product group" data-r="cats"></div><div class="cols-2">'+
    '<figure class="chart"><span class="label">Shipment records leaving Albania, by product code</span><svg data-r="hs" role="img" aria-label="Bar chart of shipment records by product"></svg><details><summary>Show as table</summary>'+table(X.hs.map(function(h){return['<span class="mono">'+h[0]+'</span>',B.esc(h[1]),X.cats[h[2]],h[3].toLocaleString('en-US')]}),['HS','Product','Group','Records'])+'</details></figure>'+
    '<figure class="chart"><span class="label">Shipment records from Albania, by arrival country</span><svg data-r="dest" role="img" aria-label="Bar chart of shipment records by arrival country"></svg><details><summary>Show as table</summary>'+table(X.dest.map(function(d){return[d[0],d[1].toLocaleString('en-US')]}),['Arrival country','Records'])+'</details></figure></div>';
  bars(root.querySelector('[data-r="hs"]'),X.hs.map(function(h){return{label:h[1],v:h[3],col:COL[h[2]],cat:h[2],tip:'<b>'+B.esc(h[1])+'</b><br>HS '+h[0]+' · '+X.cats[h[2]]+'<br>'+h[3].toLocaleString('en-US')+' shipment records'}}),{lw:200,max:6000,ticks:[0,2000,4000,6000]});
  bars(root.querySelector('[data-r="dest"]'),X.dest.map(function(d){return{label:d[0],v:d[1],col:'#7C8790',tip:'<b>'+d[0]+'</b><br>'+d[1].toLocaleString('en-US')+' shipment records'}}),{lw:90,max:12000,ticks:[0,4000,8000,12000]});
  var on=null,cc=root.querySelector('[data-r="cats"]');Object.keys(X.cats).forEach(function(k){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed','false');
    b.innerHTML='<span aria-hidden="true" style="width:10px;height:10px;border-radius:50%;display:inline-block;background:'+COL[k]+'"></span>'+X.cats[k];
    b.onclick=function(){on=on===k?null:k;[].forEach.call(cc.children,function(c){c.setAttribute('aria-pressed',String(c===b&&on===k))});root.querySelectorAll('[data-r="hs"] .br').forEach(function(g){g.style.opacity=(on&&g.dataset.cat!==on)?.2:1})};cc.appendChild(b)});
};
B.mount.wages=function(root){
  root.innerHTML='<figure class="chart"><span class="label">Monthly amounts, euros, 2026</span><svg role="img" aria-label="Bar chart: minimum wage, rent cited by protesters, average gross wage"></svg><details><summary>Show as table</summary>'+table(B.WAGES.map(function(w){return[B.esc(w[0]),B.esc(w[2]),'€'+w[1]]}),['Measure','Basis','€ / month'])+'</details><p class="small muted">Sources '+B.cites(['S20','S21','S39'])+'. Euro values are approximate conversions from lek.</p></figure>';
  bars(root.querySelector('svg'),B.WAGES.map(function(w,i){return{label:w[0],v:w[1],col:i===0?'#B75E4C':'#7C8790',tip:'<b>'+B.esc(w[0])+'</b><br>€'+w[1]+' a month<br>'+B.esc(w[2])}}),{lw:170,rh:38,max:1000,ticks:[0,250,500,750,1000],pre:'€'});
};
})(window.BTB);
