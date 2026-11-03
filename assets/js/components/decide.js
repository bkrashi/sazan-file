/* Chapter 07: policy spectrum + comparison, gaps, stakeholders, recommendations, decision simulation. */
(function(B){
var RL={y:"Applies",p:"Partly",n:"No"},PART={land:"Coastal projects",chrome:"Chrome",garments:"Garments & shoes"};
function reach(r){return '<div class="reach">'+Object.keys(PART).map(function(k){return '<span class="'+r[k]+'">'+PART[k]+': '+RL[r[k]]+'</span>'}).join('')+'</div>'}
B.mount.policy=function(root){
  var sel=['sil','csddd','flr'],filt='all',fc;
  root.innerHTML='<div class="spectrum" data-r="spec"><div class="axis"><span>← Voluntary</span><span>Disclosure</span><span>Duty of care</span><span>Binding at the border →</span></div><div class="track" data-r="track"></div></div>'+
    '<div class="chips" role="group" aria-label="Filter by type" data-r="filt"></div><div class="pols" data-r="cards"></div>'+
    '<div style="display:grid;gap:10px"><span class="kicker" style="color:var(--terra-text-light)">Compare side by side</span><p class="small muted" data-r="msg"></p><div class="cmp" data-r="cmp"></div></div>';
  var track=root.querySelector('[data-r="track"]');
  var rows={albania:12,framework:40,process:70,enacted:100};
  var order=B.POLICIES.map(function(p,i){return i}).sort(function(a,b){return B.POLICIES[a].pos-B.POLICIES[b].pos}),rowOf={};order.forEach(function(i,k){rowOf[i]=k%5});
  B.POLICIES.forEach(function(p,i){var b=document.createElement('button');b.type='button';b.className='spt '+(p.type==='process'?'framework':p.type);b.style.left=p.pos+'%';b.style.top=(12+rowOf[i]*28)+'px';b.setAttribute('aria-pressed','false');b.setAttribute('aria-label',p.t+' — '+B.PTYPE[p.type]);
    b.innerHTML='<i></i><span>'+B.esc(p.short||p.t)+'</span>';b.onclick=function(){if(sel.indexOf(p.id)<0){if(sel.length>=4)sel.shift();sel.push(p.id)}if(filt!=='all'&&p.type!==filt){filt='all';[].forEach.call(fc.children,function(c,k){c.setAttribute('aria-pressed',String(k===0))})}cards();cmp();msg('Added '+p.t+' to the comparison.');var c=document.getElementById('pol-'+p.id);if(c){c.scrollIntoView({block:'center',behavior:'smooth'});c.querySelector('input').focus({preventScroll:true})}};track.appendChild(b)});
  fc=root.querySelector('[data-r="filt"]');[["all","All"]].concat(Object.keys(B.PTYPE).map(function(k){return[k,B.PTYPE[k]]})).forEach(function(f){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',String(f[0]==='all'));b.textContent=f[1];
    b.onclick=function(){filt=f[0];[].forEach.call(fc.children,function(c){c.setAttribute('aria-pressed',String(c===b))});cards()};fc.appendChild(b)});
  function cards(){root.querySelector('[data-r="cards"]').innerHTML=B.POLICIES.filter(function(p){return filt==='all'||p.type===filt}).map(function(p){
    return '<div class="pol" id="pol-'+p.id+'"><div class="top"><span class="stype '+p.type+'">'+B.PTYPE[p.type]+'</span><span class="mono small muted">'+B.esc(p.j)+'</span></div><h4>'+B.esc(p.t)+'</h4><span class="st"><b>Status:</b> '+B.esc(p.status)+'</span>'+reach(p.reach)+'<span class="small muted">Sources '+B.cites(p.src)+'</span><label><input type="checkbox" data-id="'+p.id+'"'+(sel.indexOf(p.id)>=0?' checked':'')+'> Compare</label></div>'}).join('');
    root.querySelectorAll('[data-r="cards"] input').forEach(function(c){c.onchange=function(){var id=c.getAttribute('data-id'),k=sel.indexOf(id);
      if(c.checked){if(sel.length>=4){c.checked=false;msg('Compare up to four at a time.');return}sel.push(id)}else{if(sel.length<=1){c.checked=true;msg('Keep at least one selected.');return}sel.splice(k,1)}cmp();msg('Comparing '+sel.length+'.')}})}
  function msg(m){root.querySelector('[data-r="msg"]').textContent=m}
  function cmp(){
    root.querySelectorAll('.spt').forEach(function(b,i){b.setAttribute('aria-pressed',String(sel.indexOf(B.POLICIES[i].id)>=0))});
    var P=sel.map(function(id){return B.POLICIES.find(function(p){return p.id===id})});
    var R=[["Type",function(p){return '<span class="stype '+p.type+'">'+B.PTYPE[p.type]+'</span>'}],["Jurisdiction",function(p){return B.esc(p.j)}],["Legal status",function(p){return B.esc(p.status)}],["Who it binds",function(p){return B.esc(p.binds)}],["What it requires",function(p){return B.esc(p.req)}],["Enforcement",function(p){return B.esc(p.enf)}],["Reaches the Albania case?",function(p){return reach(p.reach)}],["Sources",function(p){return B.cites(p.src)}]];
    root.querySelector('[data-r="cmp"]').innerHTML='<table><thead><tr><th scope="col"><span class="sr">Attribute</span></th>'+P.map(function(p){return '<th scope="col">'+B.esc(p.t)+'</th>'}).join('')+'</tr></thead><tbody>'+R.map(function(r){return '<tr><th scope="row">'+r[0]+'</th>'+P.map(function(p){return '<td>'+r[1](p)+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'}
  cards();cmp();msg('Comparing three. Click a dot on the spectrum or tick "Compare" on a card to add more (up to four).');
};
B.mount.gaps=function(root){root.innerHTML='<div class="gaps">'+B.GAPS.map(function(g){return '<div class="card"><span class="kicker">Policy gap</span><h3>'+B.esc(g[0])+'</h3><p class="small">'+B.esc(g[1])+'</p><span class="small muted">'+B.cites(g[2])+'</span></div>'}).join('')+'</div>'};
B.mount.stakeholders=function(root){
  root.innerHTML='<div class="split"><div class="canvas" style="padding:16px"><svg data-r="svg" role="group" aria-label="Who decides: stakeholders by power over decisions"></svg></div><aside class="panel sticky" data-r="panel" aria-live="polite"></aside></div>';
  var svg=root.querySelector('[data-r="svg"]'),S=B.STAKEHOLDERS,W=560,H=420;svg.setAttribute('viewBox','0 0 '+W+' '+H);
  [0,1,2,3].forEach(function(k){var y=H-40-k*110;svg.appendChild(B.el('line',{x1:40,y1:y,x2:W-10,y2:y,stroke:'rgba(241,237,228,.16)'}));var t=B.el('text',{x:4,y:y+4,fill:'#AEB9BF','font-family':'IBM Plex Mono, monospace','font-size':'10'});t.textContent=['None','Low','Some','High'][k];svg.appendChild(t)});
  var ax=B.el('text',{x:44,y:16,fill:'#D3B58C','font-family':'IBM Plex Mono, monospace','font-size':'10','letter-spacing':'1.2'});ax.textContent='SAY OVER THE DECISIONS →';svg.appendChild(ax);
  var col=(W-80)/S.length,gs=[];
  S.forEach(function(s,i){var x=60+i*col+col/2,y=H-40-s.say*110,g=B.el('g',{tabindex:'0',role:'button','aria-label':s.t,style:'cursor:pointer'});
    g.appendChild(B.el('line',{x1:x,y1:H-40,x2:x,y2:y,stroke:'#D3B58C','stroke-width':'2'}));g.appendChild(B.el('circle',{cx:x,cy:y,r:11,fill:s.say>=3?'#B75E4C':'#D3B58C',stroke:'#172736','stroke-width':'3'}));
    var lines=s.t.split(' ');var t=B.el('text',{x:x,y:H-18,'text-anchor':'middle',fill:'#F1EDE4','font-family':'IBM Plex Sans, sans-serif','font-size':'10.5'});t.textContent=lines.slice(0,2).join(' ');g.appendChild(t);
    if(lines.length>2){var t2=B.el('text',{x:x,y:H-5,'text-anchor':'middle',fill:'#AEB9BF','font-family':'IBM Plex Sans, sans-serif','font-size':'10'});t2.textContent=lines.slice(2).join(' ');g.appendChild(t2)}
    B.activate(g,function(){show(i)});svg.appendChild(g);gs.push(g)});
  function show(i){var s=S[i];gs.forEach(function(g,j){g.style.opacity=j===i?1:.45});
    root.querySelector('[data-r="panel"]').innerHTML='<span class="kicker">Stakeholder</span><h3>'+B.esc(s.t)+'</h3><dl><div><dt>What they gain</dt><dd>'+B.esc(s.gain)+'</dd></div><div><dt>What they bear</dt><dd>'+B.esc(s.cost)+'</dd></div><div><dt>Say over decisions</dt><dd>'+['None','Low','Some','High'][s.say]+' (authors\' assessment)</dd></div></dl><span class="small muted">Sources '+B.cites(s.src)+'</span>'}
  show(2);
};
B.mount.recs=function(root){
  var who='all',groups=[];B.RECS.forEach(function(r){if(groups.indexOf(r[0])<0)groups.push(r[0])});
  root.innerHTML='<div class="chips" role="group" aria-label="Filter by who must act" data-r="f"></div><div class="recs" data-r="list" aria-live="polite"></div>';
  var f=root.querySelector('[data-r="f"]');['all'].concat(groups).forEach(function(g){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',String(g==='all'));b.textContent=g==='all'?'Everyone':g;
    b.onclick=function(){who=g;[].forEach.call(f.children,function(c){c.setAttribute('aria-pressed',String(c===b))});draw()};f.appendChild(b)});
  function draw(){root.querySelector('[data-r="list"]').innerHTML=B.RECS.map(function(r,i){if(who!=='all'&&r[0]!==who)return'';
    return '<article class="rec"><div class="rh"><span class="rn">R'+String(i+1).padStart(2,'0')+'</span><h3>'+B.esc(r[2])+'</h3><span class="prio '+r[1]+'">'+B.PRIO[r[1]]+'</span></div><span class="label">'+B.esc(r[0])+'</span><p>'+B.esc(r[3])+' '+B.cites(r[7])+'</p>'+
      '<details class="more"><summary>Actions, technology and risks</summary><div class="cols"><div><span class="label">Specific actions</span><ul>'+r[4].map(function(a){return '<li>'+B.esc(a)+'</li>'}).join('')+'</ul></div>'+
      '<div><span class="label">Technology</span><div class="chips">'+r[5].map(function(t){var x=B.TECH.find(function(y){return y.id===t});return '<a class="chip" href="06-technology.html#'+t+'">'+B.esc(x?x.t:t)+'</a>'}).join('')+'</div></div>'+
      '<div class="lim"><span class="label">Unintended consequences</span><br>'+B.esc(r[6])+'</div></div></details></article>'}).join('')}
  draw();
};
B.mount.sim=function(root){
  var S=B.SIM,role=null,step=0,score={},log=[];
  root.innerHTML='<div class="sim"><div class="roles" role="group" aria-label="Choose a role" data-r="roles"></div><div class="simbody" data-r="body" aria-live="polite"></div></div>';
  var rc=root.querySelector('[data-r="roles"]'),body=root.querySelector('[data-r="body"]');
  S.roles.forEach(function(r){var b=document.createElement('button');b.type='button';b.className='role';b.innerHTML='<span class="k">'+r.k+'</span><b>'+B.esc(r.t)+'</b><span>'+B.esc(r.d)+'</span>';b.onclick=function(){start(r)};rc.appendChild(b)});
  function start(r){role=r;step=0;log=[];score={};Object.keys(S.dims).forEach(function(k){score[k]=0});draw();body.querySelector('.opt')&&body.querySelector('.opt').focus()}
  function meters(){return '<div class="meters">'+Object.keys(S.dims).map(function(k){var v=score[k],c=v>0?'up':v<0?'down':'flat';return '<div class="meter"><span class="mt">'+S.dims[k]+'</span><span class="mv '+c+'">'+(v>0?'▲ +':v<0?'▼ ':'● ')+v+'</span></div>'}).join('')+'</div>'}
  function draw(){if(!role){body.innerHTML='<p class="sc">Choose a role above to begin.</p><p class="muted small">An illustrative simulation. The meters show the direction of trade-offs, not forecasts. Where a choice matches what actually happened in Albania, the evidence is shown.</p>';return}
    var R=role.rounds;
    if(step>=R.length){body.innerHTML='<span class="kicker">'+B.esc(role.t)+' · Outcome</span><p class="sc">Your balance sheet</p>'+meters()+'<div style="display:grid;gap:10px">'+log.map(function(l,i){return '<div class="conseq"><span class="label">Decision '+(i+1)+'</span><b>'+B.esc(l.c)+'</b><span class="small">'+B.esc(l.x)+'</span>'+(l.real?'<span class="small"><span class="ev off">What happened</span> '+B.esc(l.real)+'</span>':'')+'</div>'}).join('')+'</div><p class="small muted">No choice maximises everything. The question is who decides the trade-offs, and whether they can be held to account for them.</p><div class="chips"><button type="button" class="btn sm" data-r="again">Play again</button><button type="button" class="btn ghost sm" data-r="other">Try the other role</button></div>';
      body.querySelector('[data-r="again"]').onclick=function(){start(role)};body.querySelector('[data-r="other"]').onclick=function(){start(S.roles.find(function(r){return r!==role}))};return}
    var rd=R[step];
    body.innerHTML='<span class="kicker">'+B.esc(role.t)+' · Decision '+(step+1)+' of '+R.length+'</span><p class="sc">'+B.esc(rd.q)+'</p>'+meters()+'<div class="opts">'+rd.o.map(function(o,j){return '<button type="button" class="opt" data-j="'+j+'"><span class="k">'+'ABC'[j]+'</span><span>'+B.esc(o[0])+'</span></button>'}).join('')+'</div>';
    body.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){var o=rd.o[+b.getAttribute('data-j')];Object.keys(o[1]).forEach(function(k){score[k]+=o[1][k]});log.push({c:o[0],x:o[2],real:o[3]});
      body.innerHTML='<span class="kicker">'+B.esc(role.t)+' · Decision '+(step+1)+' of '+R.length+'</span><p class="sc">'+B.esc(o[0])+'</p>'+meters()+'<div class="conseq"><span class="label">Consequence (illustrative)</span><span>'+B.esc(o[2])+'</span>'+(o[3]?'<span class="small"><span class="ev off">What happened in Albania</span> '+B.esc(o[3])+'</span>':'')+'</div><div class="chips"><button type="button" class="btn sm" data-r="cont">'+(step<R.length-1?'Next decision →':'See the outcome →')+'</button></div>';
      var c=body.querySelector('[data-r="cont"]');c.onclick=function(){step++;draw();var f=body.querySelector('.opt')||body.querySelector('.btn');if(f)f.focus()};c.focus()}})}
  draw();
};
})(window.BTB);
