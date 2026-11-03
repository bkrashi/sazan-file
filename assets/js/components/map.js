/* Signature: interactive map of Albania with selectable evidence layers and a Bay of Vlorë zoom.
   Projection: equirectangular with cos(lat) correction. The outline is schematic; points are
   approximate feature locations; no project or park boundaries are drawn. */
(function(B){
var VIEWS={
  all:{lon0:18.85,lat0:42.75,k:230,w:410,h:740},
  bay:{lon0:19.18,lat0:40.62,k:1430,w:410,h:372}
};
var COL={dev:'--terra',env:'--sand',mine:'--ev-rep',trade:'--ev-rep',gov:'--ev-off'};
B.mount.map=function(root){
  var only=root.getAttribute('data-layers');
  var layers=B.LAYERS.filter(function(l){return !only||only.split(' ').indexOf(l.id)>=0});
  var on={};layers.forEach(function(l){on[l.id]=1});
  var pins=B.PINS.filter(function(p){return on.hasOwnProperty(p.layer)});
  root.innerHTML='<div class="mapgrid"><div class="canvas"><div class="toolbar" style="padding:10px 12px;border-bottom:1px solid var(--line-dark)"><span class="mono small muted" data-r="vlabel"></span><button type="button" class="chip" data-r="zoom"></button></div>'+
    '<svg data-r="svg" role="group" aria-label="Map of Albania with places in the investigation" style="width:100%;max-height:660px;display:block"></svg>'+
    '<div class="hint" data-r="hint"></div></div>'+
    '<div style="display:grid;gap:14px;align-content:start"><div class="chips" role="group" aria-label="Map layers" data-r="layers"></div><aside class="panel" data-r="panel" aria-live="polite"></aside></div></div>';
  var svg=root.querySelector('[data-r="svg"]'),panel=root.querySelector('[data-r="panel"]'),zoomBtn=root.querySelector('[data-r="zoom"]'),view='all',sel=root.getAttribute('data-start')||pins[0].id;
  function P(lon,lat){var v=VIEWS[view];return[(lon-v.lon0)*0.755*v.k,(v.lat0-lat)*v.k]}
  function layerName(id){var l=B.LAYERS.find(function(x){return x.id===id});return l?l.t:''}
  function draw(){var v=VIEWS[view];svg.innerHTML='';svg.setAttribute('viewBox','0 0 '+v.w+' '+v.h);svg.id='albmap';
    svg.appendChild(B.el('rect',{x:0,y:0,width:v.w,height:v.h,'class':'sea'}));
    if(view==='bay'){for(var g=19.2;g<19.56;g+=0.1){var a=P(g,40.62),t=B.el('line',{x1:a[0],y1:0,x2:a[0],y2:v.h,stroke:'rgba(241,237,228,.08)'});svg.appendChild(t);var tx=B.el('text',{x:a[0]+3,y:v.h-6,'class':'nb'});tx.textContent=g.toFixed(1)+'°E';svg.appendChild(tx)}
      for(var h=40.4;h<40.58;h+=0.1){var b=P(19.18,h),l=B.el('line',{x1:0,y1:b[1],x2:v.w,y2:b[1],stroke:'rgba(241,237,228,.08)'});svg.appendChild(l);var ty=B.el('text',{x:v.w-6,y:b[1]-4,'text-anchor':'end','class':'nb'});ty.textContent=h.toFixed(1)+'°N';svg.appendChild(ty)}}
    if(view==='all'){svg.appendChild(B.el('polygon',{points:B.OUTLINE.map(function(p){return P(p[0],p[1]).join(',')}).join(' '),'class':'landp'}));
      var sz=P(19.28,40.50);svg.appendChild(B.el('ellipse',{cx:sz[0],cy:sz[1],rx:5,ry:9,'class':'landp'}))}
    if(view==='all'){[["MONTENEGRO",19.0,42.66],["KOSOVO",20.66,42.66],["N. MACEDONIA",20.72,41.62],["GREECE",20.5,39.7],["ADRIATIC SEA",18.9,41.6],["IONIAN SEA",18.9,40.0]].forEach(function(n){var p=P(n[1],n[2]),t=B.el('text',{x:p[0],y:p[1],'class':'nb'});t.textContent=n[0];svg.appendChild(t)})}
    else{var t1=B.el('text',{x:v.w-12,y:20,'text-anchor':'end','class':'nb'});t1.textContent='BAY OF VLORË · NO COASTLINE DRAWN';svg.appendChild(t1)}
    var visible=pins.filter(function(p){return on[p.layer]});
    if(view==='all'){var bay=visible.filter(function(p){return p.bay});
      visible.filter(function(p){return !p.bay}).forEach(function(p){pin(p,p.t,p.side)});
      if(bay.length){var c=P(19.39,40.49),g2=B.el('g',{'class':'pin k-sazan',tabindex:'0',role:'button','aria-label':'Bay of Vlorë: '+bay.length+' places. Zoom in.'});
        g2.appendChild(B.el('circle',{cx:c[0],cy:c[1],r:16,'class':'ring',style:'opacity:1;stroke:var(--sand);stroke-dasharray:3 3'}));g2.appendChild(B.el('circle',{cx:c[0],cy:c[1],r:10,'class':'pt',style:'fill:var(--sand)'}));
        var n=B.el('text',{x:c[0],y:c[1]+4,'text-anchor':'middle',style:'fill:var(--navy);font-family:var(--f-mono);font-size:11px'});n.textContent=bay.length;g2.appendChild(n);
        var lb=B.el('text',{x:c[0]+20,y:c[1]+28});lb.textContent='Bay of Vlorë ⊕';g2.appendChild(lb);
        B.activate(g2,function(){setView('bay')});svg.appendChild(g2)}}
    else visible.filter(function(p){return p.bay}).forEach(function(p){pin(p,p.short||p.t,p.bside||p.side)});
    var lab=root.querySelector('[data-r="vlabel"]');lab.textContent=view==='all'?'Albania · schematic':'Zoom · Bay of Vlorë (approx. 30 × 30 km)';
    zoomBtn.textContent=view==='all'?'Zoom to Bay of Vlorë ⊕':'← Back to all of Albania';
    root.querySelector('[data-r="hint"]').textContent=view==='all'?'Schematic outline. Points are approximate locations of documented places; no project or park boundaries are drawn. Five places in the Bay of Vlorë are grouped; zoom in to separate them.':'No coastline is drawn at this scale: only the approximate positions of documented places, on a 0.1° grid. Sazan Island and the Zvërnec coast are about 10 km apart.'}
  function pin(p,label,side){var xy=P(p.lon,p.lat),g=B.el('g',{'class':'pin '+({dev:'k-sazan',env:'k-zvernec',mine:'k-goods',trade:'k-goods',gov:'k-power'})[p.layer]+(p.id===sel?' sel':''),tabindex:'0',role:'button','aria-label':p.t});
    g.appendChild(B.el('circle',{cx:xy[0],cy:xy[1],r:13,'class':'ring'}));g.appendChild(B.el('circle',{cx:xy[0],cy:xy[1],r:6.5,'class':'pt'}));
    var t=B.el('text',{x:side==='l'?xy[0]-15:xy[0]+15,y:xy[1]+4,'text-anchor':side==='l'?'end':'start'});t.textContent=label;g.appendChild(t);
    B.activate(g,function(){pick(p.id)});svg.appendChild(g);p._g=g}
  function pick(id){sel=id;var p=B.PINS.find(function(x){return x.id===id});pins.forEach(function(x){if(x._g)x._g.classList.toggle('sel',x.id===id)});
    panel.innerHTML='<span class="kicker">'+B.esc(layerName(p.layer))+'</span><h3>'+B.esc(p.t)+'</h3>'+B.ev(p.ev)+'<p>'+B.esc(p.body)+'</p><span class="small muted">Sources '+B.cites(p.s)+'</span><span class="mono small muted">Approx. '+p.lat.toFixed(2)+'°N, '+p.lon.toFixed(2)+'°E</span><a class="go" href="'+B.chap(p.link)+'">Go to the evidence →</a>'}
  function setView(v){view=v;pins.forEach(function(p){p._g=null});draw();var p=B.PINS.find(function(x){return x.id===sel});if(v==='bay'&&!(p&&p.bay)){var f=pins.find(function(x){return x.bay&&on[x.layer]});if(f)pick(f.id)}else if(p)pick(p.id)}
  zoomBtn.onclick=function(){setView(view==='all'?'bay':'all')};
  var lc=root.querySelector('[data-r="layers"]');layers.forEach(function(l){var b=document.createElement('button');b.type='button';b.className='chip';b.setAttribute('aria-pressed','true');
    b.innerHTML='<span aria-hidden="true" style="width:10px;height:10px;border-radius:50%;display:inline-block;box-shadow:0 0 0 1.5px var(--navy);background:var('+COL[l.id]+')"></span>'+B.esc(l.t);
    b.onclick=function(){on[l.id]=on[l.id]?0:1;b.setAttribute('aria-pressed',String(!!on[l.id]));draw()};lc.appendChild(b)});
  var start=B.PINS.find(function(x){return x.id===sel});view=(start&&start.bay&&root.getAttribute('data-zoom')==='1')?'bay':'all';draw();pick(sel);
};
})(window.BTB);
