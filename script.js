(function(){
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var t=document.getElementById('typed');
var words=['Aspiring Data Analyst','Power BI Dashboard Builder','SQL and Python Explorer','Excel Problem Solver'];
var wi=0,ci=words[0].length,del=true;
function tick(){var w=words[wi],d;
ci+=del?-1:1;t.textContent=w.slice(0,ci);d=del?45:85;
if(!del&&ci===w.length){del=true;d=1800}
else if(del&&ci===0){del=false;wi=(wi+1)%words.length;d=300}
setTimeout(tick,d)}
setTimeout(tick,2600);
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;io.unobserve(e.target);
var el=e.target,end=+el.dataset.count,dec=+(el.dataset.dec||0),suf=el.dataset.suf||'',s=null;
function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1300,1),v=end*(1-Math.pow(1-p,3));el.textContent=v.toFixed(dec)+suf;if(p<1)requestAnimationFrame(f)}
requestAnimationFrame(f)})},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(function(el){io.observe(el)});
})();
