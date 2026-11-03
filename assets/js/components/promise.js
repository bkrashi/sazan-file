/* Chapter 01–02 components: permission ladder, Sazan vs Zvërnec, profiles, unresolved questions. */
(function(B){
B.mount.ladder=function(root){
  var L=B.LADDER,lab={done:"Happened",none:"Not done / not found",rq:"Not established"};
  var h='<div class="tbl" style="background:transparent;border-color:var(--line-dark)"><table style="min-width:760px"><thead><tr><th style="color:var(--on-dark-muted)">Project</th>'+L.steps.map(function(s,i){return '<th style="color:var(--on-dark-muted)">'+(i+1)+' · '+B.esc(s)+'</th>'}).join('')+'</tr></thead><tbody>';
  [["sazan","Sazan Island"],["zvernec","Zvërnec coast"]].forEach(function(r){h+='<tr><th scope="row" style="color:var(--on-dark);font-family:var(--f-serif);font-size:1.4rem;text-transform:none;letter-spacing:0">'+r[1]+'</th>'+
    L[r[0]].map(function(c){var col=c[0]==='done'?'var(--ev-off)':c[0]==='none'?'var(--ev-alg)':'var(--sand)';return '<td style="border-color:var(--line-dark)"><div style="display:grid;gap:6px"><span class="mono small" style="color:'+col+'">'+(c[0]==='done'?'● ':c[0]==='none'?'○ ':'? ')+lab[c[0]]+'</span><span class="small">'+B.esc(c[2])+'</span><span>'+B.ev(c[1])+B.cites(c[3])+'</span></div></td>'}).join('')+'</tr>'});
  root.innerHTML=h+'</tbody></table></div>';
};
B.mount.versus=function(root){
  var h='<div class="versus" role="table" aria-label="Sazan Island and Zvërnec compared"><div class="rh" role="columnheader"></div><div class="ch" role="columnheader">Sazan Island</div><div class="ch c2" role="columnheader">Zvërnec coast</div>';
  B.VERSUS.forEach(function(r,i){h+='<div class="rh" role="rowheader">'+B.esc(r[0])+'</div><div role="cell">'+B.esc(r[1])+'</div><div class="c2" role="cell">'+B.esc(r[2])+'</div>'});
  h+='</div><p class="small muted" style="margin-top:10px">Sources by row: '+B.VERSUS.map(function(r,i){return B.esc(r[0])+' '+B.cites(B.VERSUS_SRC[i])}).join(' · ')+'</p>';
  root.innerHTML=h;
};
B.mount.profiles=function(root){
  root.innerHTML='<div class="split"><div class="profiles" role="group" aria-label="People and organisations"></div><aside class="panel sticky" aria-live="polite"></aside></div>';
  var grid=root.querySelector('.profiles'),panel=root.querySelector('aside');
  B.PROFILES.forEach(function(p,i){var b=document.createElement('button');b.type='button';b.className='prof';b.setAttribute('aria-pressed','false');b.innerHTML='<span class="k">'+B.esc(p.k)+'</span><span class="nm">'+B.esc(p.n)+'</span><span class="r">'+B.esc(p.r)+'</span>';
    b.onclick=function(){show(i)};grid.appendChild(b)});
  function show(i){var p=B.PROFILES[i];[].forEach.call(grid.children,function(b,j){b.setAttribute('aria-pressed',String(i===j))});
    panel.innerHTML='<span class="kicker">'+B.esc(p.k)+'</span><h3>'+B.esc(p.n)+'</h3><span class="muted small">'+B.esc(p.r)+'</span>'+B.ev(p.ev)+'<p>'+B.esc(p.x)+'</p><span class="small muted">Sources '+B.cites(p.s)+'</span>'+(p.q?'<div class="note"><span class="label">Open question</span><br>'+B.esc(p.q)+'</div>':'')}
  show(0);
};
/* ownership onion: peel from public story to registry records to open allegations */
B.mount.layers=function(root){
  var L=[
   ["What the public sees","rep","A fence, bulldozers and a brand name, \"Sazan Real Estate Development\", named in a PR statement. AFP found no legal trace of a company with that name.",["S31"],"Due diligence begins here; it shouldn't end here."],
   ["What the government says","rep","The Zvërnec investors are \"the two co-owners of Power International Holding W.L.L from Qatar\", and the land is private property.",["S31"],"A claim, not a record. It needs a matching document."],
   ["The legal shareholder","off","Albania Land Development shpk (Vlorë, NIPT M56727208I, registered 21 May 2025) lists one local individual as 100% shareholder and administrator.",["S02"],"Most screening stops at this layer, which is why nominees are used."],
   ["The beneficial owners","off","Albania's beneficial-owner register names two Alkhayyat brothers, 50% each, with ties to Albania and Qatar.",["S02"],"Paper owner and real owners differ. Nothing links this company to the project on record."],
   ["What is under investigation","alg","A single outlet reports prosecutors froze the company's accounts over allegedly fraudulent titles; investigative reporting describes a Dutch trust structure. Not proven.",["S42","S34"],"Here the records stop and the allegations begin."]];
  var d=0;
  root.innerHTML='<div class="split"><div data-r="stack" style="display:grid;gap:8px"></div><aside class="panel sticky" data-r="panel" aria-live="polite"></aside></div><div class="chips"><button type="button" class="btn sm" data-r="peel">Peel the next layer ↓</button><button type="button" class="btn ghost sm" data-r="reset">Start again</button></div>';
  var st=root.querySelector('[data-r="stack"]'),pn=root.querySelector('[data-r="panel"]'),pe=root.querySelector('[data-r="peel"]');
  function draw(){st.innerHTML=L.map(function(l,i){var open=i<=d;return '<div class="card" style="margin-left:'+(i*18)+'px;'+(open?'':'opacity:.35;')+(i===d?'border-color:var(--terra);':'')+'"><div class="chips"><span class="mono small" style="color:var(--sand)">Layer '+(i+1)+'</span>'+(open?B.ev(l[1]):'<span class="ev unv">Locked</span>')+'</div><b>'+B.esc(l[0])+'</b>'+(open?'<span class="small">'+B.esc(l[2])+' '+B.cites(l[3])+'</span>':'<span class="small muted">Peel to reveal.</span>')+'</div>'}).join('');
    pn.innerHTML='<span class="kicker">Layer '+(d+1)+' of '+L.length+'</span><h3>'+B.esc(L[d][0])+'</h3><p>'+B.esc(L[d][4])+'</p>'+(d===L.length-1?'<a class="go" href="05-evidence.html">Test this evidence in the lab →</a>':'');
    pe.disabled=d>=L.length-1}
  pe.onclick=function(){if(d<L.length-1){d++;draw()}};root.querySelector('[data-r="reset"]').onclick=function(){d=0;draw()};draw();
};
B.mount.unresolved=function(root){
  root.innerHTML='<div class="cols-3">'+B.UNRESOLVED.map(function(u){return '<div class="card"><span class="ev rq">Research question</span><h3>'+B.esc(u[0])+'</h3><p class="small">'+B.esc(u[1])+'</p><span class="small muted">'+B.cites(u[2])+'</span></div>'}).join('')+'</div>';
};
})(window.BTB);
