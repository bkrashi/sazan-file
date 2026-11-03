/* Method & sources page: evidence key, source list with filter, image credits, glossary. */
(function(B){
B.mount.evkey=function(root){root.innerHTML='<div class="evkey">'+Object.keys(B.EVIDENCE).map(function(k){return '<div>'+B.ev(k)+B.esc(B.EVIDENCE[k].d)+'</div>'}).join('')+'</div>'};
B.mount.sourcelist=function(root){
  var f='all',ids=Object.keys(B.SOURCES).sort(function(a,b){return parseInt(a.slice(1))-parseInt(b.slice(1))});
  root.innerHTML='<div class="chips" role="group" aria-label="Filter sources by type" data-r="f"></div><p class="small muted" data-r="n"></p><ol class="srclist" data-r="l"></ol>';
  var fc=root.querySelector('[data-r="f"]');[['all','All']].concat(['off','rep','ngo'].map(function(k){return[k,B.EVIDENCE[k].t]})).forEach(function(x){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed',String(x[0]==='all'));b.textContent=x[1];
    b.onclick=function(){f=x[0];[].forEach.call(fc.children,function(c){c.setAttribute('aria-pressed',String(c===b))});draw()};fc.appendChild(b)});
  function draw(){var L=ids.filter(function(i){return f==='all'||B.SOURCES[i][3]===f});root.querySelector('[data-r="n"]').textContent=L.length+' sources';
    root.querySelector('[data-r="l"]').innerHTML=L.map(function(i){var s=B.SOURCES[i];return '<li id="'+i+'"><span class="id">'+i+'</span><span><a href="'+s[2]+'" target="_blank" rel="noopener">'+B.esc(s[0])+'</a> · '+B.esc(s[1])+(s[4]?' · '+B.esc(s[4]):'')+' '+B.ev(s[3])+(s[5]?'<br><span class="small muted">'+B.esc(s[5])+'</span>':'')+'</span></li>'}).join('');
    if(location.hash&&/^#S\d+$/.test(location.hash)){var t=document.getElementById(location.hash.slice(1));if(t)t.scrollIntoView({block:'center'})}}
  draw();
};
B.mount.credits=function(root){root.innerHTML='<div class="cols-3">'+Object.keys(B.IMAGES).map(function(k){var c=B.IMAGES[k];return '<figure class="fig"><img src="'+B.img(k)+'" alt="'+B.esc(c[0])+'" loading="lazy" style="aspect-ratio:4/3;object-fit:cover"><figcaption>'+B.esc(c[0])+'<br>'+B.esc(c[1])+' · <a href="'+c[3]+'" target="_blank" rel="noopener">'+B.esc(c[2])+'</a> · <a href="'+c[4]+'" target="_blank" rel="noopener">Source file</a></figcaption></figure>'}).join('')+'</div>'};
B.mount.glossary=function(root){var k=Object.keys(B.GLOSSARY).sort(function(a,b){return B.GLOSSARY[a][0].localeCompare(B.GLOSSARY[b][0])});root.innerHTML='<div class="gloss">'+k.map(function(x){var g=B.GLOSSARY[x];return '<div id="g-'+x+'"><b>'+B.esc(g[0])+'</b><span class="small">'+B.esc(g[1])+'</span></div>'}).join('')+'</div>'};
})(window.BTB);
