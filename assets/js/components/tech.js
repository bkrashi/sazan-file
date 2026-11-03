/* Signature: Technology Laboratory — expandable library and comparison tool. */
(function(B){
var TABS=[["what","What it is"],["albania","In Albania"],["can","Can verify"],["cannot","Cannot verify"],["risk","Privacy & misuse"],["challenge","Cost & challenges"]];
function list(a){return '<ul>'+a.map(function(x){return '<li>'+B.esc(x)+'</li>'}).join('')+'</ul>'}
function lvl(n){return '<span class="lvl" aria-hidden="true">'+[1,2,3].map(function(k){return '<i class="'+(k<=n?'on':'')+'"></i>'}).join('')+'</span>'}
function tabBody(t,k){
  if(k==='what')return '<p>'+B.esc(t.what)+'</p><p><b>How it works.</b> '+B.esc(t.how)+'</p><p><b>The problem it addresses.</b> '+B.esc(t.problem)+'</p>';
  if(k==='albania')return '<p>'+B.esc(t.albania)+'</p><span class="small muted">Sources '+B.cites(t.src)+'</span>';
  if(k==='can')return list(t.can);
  if(k==='cannot')return list(t.cannot);
  if(k==='risk')return '<p><b>Privacy and human rights.</b> '+B.esc(t.privacy)+'</p><p><b>Risk of misuse.</b> '+B.esc(t.misuse)+'</p>';
  return '<p>'+B.esc(t.challenge)+'</p><p class="small muted">Qualitative ratings (authors\' assessment): '+Object.keys(B.TECH_ATTR).map(function(a){return B.TECH_ATTR[a]+' '+lvl(t.r[a])}).join(' · ')+'</p>';
}
B.mount.techlab=function(root){
  root.innerHTML='<div class="techgrid" data-r="grid"></div>';
  var grid=root.querySelector('[data-r="grid"]');
  B.TECH.forEach(function(t){var d=document.createElement('div');d.className='tech';d.id=t.id;d.setAttribute('data-open','false');
    d.innerHTML='<button type="button" aria-expanded="false" aria-controls="tb-'+t.id+'"><span class="code">'+t.code+'</span><span class="nm">'+B.esc(t.t)+'</span><span class="one">'+B.esc(t.one)+'</span></button><div class="techbody" id="tb-'+t.id+'" hidden></div>';
    grid.appendChild(d);var btn=d.querySelector('button'),body=d.querySelector('.techbody');
    btn.onclick=function(){toggle(d,t,btn,body)}});
  function toggle(d,t,btn,body,force){var open=force!==undefined?force:d.getAttribute('data-open')!=='true';
    d.setAttribute('data-open',String(open));btn.setAttribute('aria-expanded',String(open));body.hidden=!open;
    if(open&&!body.firstChild){body.innerHTML='<div class="ttabs chips" role="tablist" aria-label="'+B.esc(t.t)+'">'+TABS.map(function(x){return '<button type="button" class="chip" role="tab">'+x[1]+'</button>'}).join('')+'</div><div class="tpanel" role="tabpanel" aria-live="polite"></div>';
      var panel=body.querySelector('.tpanel');var set=B.tabs(body.querySelectorAll('[role="tab"]'),function(i){set(i);panel.innerHTML=tabBody(t,TABS[i][0])});set(0);panel.innerHTML=tabBody(t,'what')}}
  function fromHash(){var id=location.hash.slice(1),d=document.getElementById(id),t=B.TECH.find(function(x){return x.id===id});if(d&&t){toggle(d,t,d.querySelector('button'),d.querySelector('.techbody'),true);d.scrollIntoView({block:'start'})}}
  addEventListener('hashchange',fromHash);fromHash();
};
B.mount.techcompare=function(root){
  var sel=['satellite','ai','blockchain'];
  root.innerHTML='<div class="cmpbar" role="group" aria-label="Choose technologies to compare" data-r="pick"></div><p class="small muted" data-r="msg"></p><div class="cmp" data-r="tbl"></div>';
  var pick=root.querySelector('[data-r="pick"]');
  B.TECH.forEach(function(t){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',String(sel.indexOf(t.id)>=0));b.textContent=t.t;
    b.onclick=function(){var k=sel.indexOf(t.id);if(k>=0){if(sel.length<=2){msg('Keep at least two technologies selected.');return}sel.splice(k,1)}else{if(sel.length>=4){msg('Compare up to four at a time. Deselect one first.');return}sel.push(t.id)}b.setAttribute('aria-pressed',String(sel.indexOf(t.id)>=0));draw()};pick.appendChild(b)});
  function msg(m){root.querySelector('[data-r="msg"]').textContent=m}
  function draw(){msg('Comparing '+sel.length+' technologies. Select two to four.');var T=sel.map(function(id){return B.TECH.find(function(t){return t.id===id})});
    var rows=[["Application in Albania",function(t){return B.esc(t.albania)}],["What it verifies",function(t){return B.esc(t.verifies)}],["Can verify",function(t){return list(t.can)}],["Cannot verify",function(t){return list(t.cannot)}],["Privacy risk",function(t){return lvl(t.r.privacy)+B.esc(t.privacy)}],["Misuse",function(t){return B.esc(t.misuse)}],["Implementation",function(t){return lvl(t.r.cost)+'cost · '+B.esc(t.challenge)}],["Maturity",function(t){return lvl(t.r.maturity)}],["Independence from self-reported data",function(t){return lvl(t.r.trust)}]];
    root.querySelector('[data-r="tbl"]').innerHTML='<table><thead><tr><th scope="col"><span class="sr">Attribute</span></th>'+T.map(function(t){return '<th scope="col">'+B.esc(t.t)+'</th>'}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr><th scope="row">'+r[0]+'</th>'+T.map(function(t){return '<td>'+r[1](t)+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table>'}
  draw();
};
})(window.BTB);
