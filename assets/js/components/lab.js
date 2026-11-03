/* Signature: Evidence Laboratory — case files with real documents, and what-can-this-prove exercises. */
(function(B){
B.mount.casefiles=function(root){
  var C=B.CASEFILES,V=B.VERDICTS,i=0,res={};
  try{res=JSON.parse(B.store('bti-cases')||'{}')||{}}catch(e){res={}}
  root.innerHTML='<div class="toolbar"><div class="chips" role="tablist" aria-label="Case files" data-r="list"></div><span class="mono small muted" data-r="score"></span></div><div class="quiz" data-r="body" aria-live="polite"></div>';
  var list=root.querySelector('[data-r="list"]'),body=root.querySelector('[data-r="body"]');
  C.forEach(function(c,j){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('role','tab');b.textContent='File '+String(j+1).padStart(2,'0');list.appendChild(b)});
  var setT=B.tabs(list.children,function(j){i=j;draw()});
  function score(){var n=0,ok=0;C.forEach(function(c){if(res[c.id]){n++;if(res[c.id]===c.answer)ok++}});root.querySelector('[data-r="score"]').textContent=n?ok+' of '+n+' matched our assessment':'8 case files · pick a verdict for each';
    [].forEach.call(list.children,function(b,j){var r=res[C[j].id];b.textContent='File '+String(j+1).padStart(2,'0')+(r?(r===C[j].answer?' ✓':' ✗'):'')})}
  function draw(){setT(i);var c=C[i],pick=res[c.id];
    var h='<span class="kicker">Case file '+String(i+1).padStart(2,'0')+' of '+C.length+' · The claim</span><p class="claim">“'+B.esc(c.claim)+'”</p>'+
      '<span class="label">Inspect the documents ('+c.docs.length+')</span><div class="cols-2" style="gap:12px">'+c.docs.map(function(d){return '<div class="card" style="background:rgba(241,237,228,.04)"><div class="chips">'+B.ev(d[1])+B.cites([d[3]])+'</div><b>'+B.esc(d[0])+'</b><span class="small">'+B.esc(d[2])+'</span></div>'}).join('')+'</div>'+
      '<span class="label">Your verdict: what does the evidence establish?</span><div class="opts">'+Object.keys(V).map(function(k,j){var cls='';if(pick){if(k===c.answer)cls=' right';else if(k===pick)cls=' wrong'}
        return '<button type="button" class="opt'+cls+'" data-v="'+k+'"'+(pick?' disabled':'')+'><span class="k">'+'ABCD'[j]+'</span><span><b>'+V[k][0]+'</b><br><span class="small muted">'+V[k][1]+'</span></span></button>'}).join('')+'</div>';
    if(pick){h+='<div class="verdictbox"><b>'+(pick===c.answer?'✓ Matches our assessment: ':'Our assessment: ')+V[c.answer][0]+'</b><span>'+B.esc(c.why)+'</span></div><div class="chips"><button type="button" class="btn ghost sm" data-r="redo">Try this file again</button>'+(i<C.length-1?'<button type="button" class="btn sm" data-r="nx">Next case file →</button>':'<a class="btn sm" href="#evtypes">Next exercise →</a>')+'</div>'}
    body.innerHTML=h;
    body.querySelectorAll('.opt').forEach(function(b){b.onclick=function(){res[c.id]=b.getAttribute('data-v');B.store('bti-cases',JSON.stringify(res));draw();score();var n=body.querySelector('[data-r="nx"]')||body.querySelector('[data-r="redo"]');if(n)n.focus()}});
    var r=body.querySelector('[data-r="redo"]');if(r)r.onclick=function(){delete res[c.id];B.store('bti-cases',JSON.stringify(res));draw();score();var f=body.querySelector('.opt');if(f)f.focus()};
    var n=body.querySelector('[data-r="nx"]');if(n)n.onclick=function(){i++;draw();list.children[i].focus()}}
  draw();score();
};
B.mount.evtypes=function(root){
  var T=B.EVTYPES,i=0,ans={};
  root.innerHTML='<div class="evcards" role="tablist" aria-label="Evidence sources" data-r="cards"></div><div style="display:grid;gap:14px" data-r="body" aria-live="polite"></div>';
  var cards=root.querySelector('[data-r="cards"]'),body=root.querySelector('[data-r="body"]');
  T.forEach(function(t){var b=document.createElement('button');b.type='button';b.className='evcard';b.setAttribute('role','tab');b.innerHTML='<span class="ic">'+B.esc(t.ic)+'</span><b>'+B.esc(t.t)+'</b><span class="done"></span>';cards.appendChild(b)});
  var setC=B.tabs(cards.children,function(j){i=j;draw()});
  function draw(){setC(i);var t=T[i],a=ans[t.id]||(ans[t.id]={picks:{},checked:false});
    body.innerHTML='<h3 style="font-family:var(--f-serif);font-weight:400;font-size:2rem">'+B.esc(t.t)+': what can it establish?</h3><p class="muted">Mark each statement, then check your answers.</p><div class="stmts">'+t.stmts.map(function(s,j){var p=a.picks[j],cls='';if(a.checked&&p!==undefined)cls=(p===s[1])?' ok':' no';
      return '<div class="stmt'+cls+'"><p>'+B.esc(s[0])+'</p><span class="seg" role="group" aria-label="Can this evidence establish it?"><button type="button" data-j="'+j+'" data-v="1" aria-pressed="'+(p===true)+'">Can</button><button type="button" data-j="'+j+'" data-v="0" aria-pressed="'+(p===false)+'">Cannot</button></span>'+
        (a.checked?'<div class="why"><span class="verdict">'+(p===undefined?'Not answered':p===s[1]?'Correct':'Not quite')+' · it '+(s[1]?'can':'cannot')+'</span><br>'+B.esc(s[2])+'</div>':'')+'</div>'}).join('')+'</div>'+
      '<div class="chips"><button type="button" class="btn sm" data-r="check">Check answers</button><button type="button" class="btn ghost sm" data-r="reset">Reset</button>'+(i<T.length-1?'<button type="button" class="btn ghost sm" data-r="nx">Next source →</button>':'')+'</div>';
    body.querySelectorAll('.seg button').forEach(function(b){b.onclick=function(){a.picks[+b.getAttribute('data-j')]=b.getAttribute('data-v')==='1';a.checked=false;draw()}});
    body.querySelector('[data-r="check"]').onclick=function(){a.checked=true;draw();mark();body.querySelector('[data-r="check"]').focus()};
    body.querySelector('[data-r="reset"]').onclick=function(){ans[t.id]={picks:{},checked:false};draw();mark()};
    var n=body.querySelector('[data-r="nx"]');if(n)n.onclick=function(){i++;draw();cards.children[i].focus()}}
  function mark(){[].forEach.call(cards.children,function(b,j){var a=ans[T[j].id];var ok=a&&a.checked&&T[j].stmts.every(function(s,k){return a.picks[k]===s[1]});b.querySelector('.done').textContent=a&&a.checked?(ok?'✓ all correct':'checked'):''})}
  draw();
};
})(window.BTB);
