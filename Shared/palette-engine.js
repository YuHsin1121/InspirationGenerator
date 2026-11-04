'use strict';
const STYLES = ['柔和 Pastel','復古 Vintage','鮮豔 Vivid','暗色 Dark','清冷 Cool','自然 Earthy','夕陽 Sunset','海洋 Ocean','夏日 Summer','寶石 Jewel','賽博龐克 Cyberpunk','糖果 Candy'];
const SCHEMES = ['單色 Monochromatic','類似色 Analogous','互補色 Complementary','分裂互補色 Split Complementary'];
const ROLES = ['淺色','主色','輔色','點綴色','深色'];
const STYLE_THEMES = {
'柔和 Pastel':[[345,25,55,170,210],[210,250,290,345,45]],
'復古 Vintage':[[25,45,70,165,205],[350,25,55,190,225]],
'鮮豔 Vivid':[[15,45,190,215,345],[290,330,35,175,220]],
'暗色 Dark':[[225,255,295,345,25],[160,195,230,315,15]],
'清冷 Cool':[[185,205,225,265,300],[170,205,245,285,330]],
'自然 Earthy':[[30,55,85,135,195],[15,40,75,110,175]],
'夕陽 Sunset':[[15,30,50,345,210],[350,20,45,190,225]],
'海洋 Ocean':[[185,200,220,245,35],[165,195,215,260,45]],
'夏日 Summer':[[35,55,350,185,215],[45,20,330,175,230]],
'寶石 Jewel':[[215,260,305,355,165],[175,215,270,330,30]],
'賽博龐克 Cyberpunk':[[195,215,285,320,45],[170,205,275,340,55]],
'糖果 Candy':[[345,25,55,180,275],[330,15,45,195,255]]
};
const LIGHT_PROFILES = {
balanced:[.84,.62,.71,.57,.34],bright:[.88,.75,.67,.79,.52],mid:[.76,.59,.66,.70,.43],
dramatic:[.89,.49,.73,.62,.23],deep:[.68,.43,.54,.62,.20],airy:[.94,.83,.88,.79,.69]
};
const STYLE_PROFILES = {
'柔和 Pastel':['bright','mid','balanced'],'復古 Vintage':['mid','balanced','deep'],
'鮮豔 Vivid':['balanced','dramatic','bright'],'暗色 Dark':['deep','dramatic'],
'清冷 Cool':['mid','balanced','deep'],'自然 Earthy':['mid','balanced'],
'夕陽 Sunset':['dramatic','balanced','mid'],'海洋 Ocean':['dramatic','balanced','deep'],
'夏日 Summer':['bright','balanced','dramatic'],'寶石 Jewel':['deep','dramatic','balanced'],
'賽博龐克 Cyberpunk':['deep','dramatic'],'糖果 Candy':['bright','mid']
};
const STYLE_ANCHORS = {
'柔和 Pastel':[20,45,175,215,300,345],'復古 Vintage':[20,45,65,175,205],
'鮮豔 Vivid':[20,45,190,220,320],'暗色 Dark':[190,225,260,300],
'清冷 Cool':[185,205,225,255],'自然 Earthy':[35,60,90,135],
'夕陽 Sunset':[15,30,45,350],'海洋 Ocean':[180,195,210,230],
'夏日 Summer':[25,45,55,185,205],'寶石 Jewel':[170,215,260,295,330],
'賽博龐克 Cyberpunk':[190,215,285,320],'糖果 Candy':[15,45,185,290,340]
};
const AIRY_PROBABILITY = {
'柔和 Pastel':.65,'糖果 Candy':.48,'夏日 Summer':.34,'清冷 Cool':.28,
'海洋 Ocean':.22,'夕陽 Sunset':.22,'自然 Earthy':.20,'復古 Vintage':.18,
'鮮豔 Vivid':.16,'寶石 Jewel':.10,'暗色 Dark':.06,'賽博龐克 Cyberpunk':.07
};
const CHROMA_LIMITS = {
'柔和 Pastel':[.045,.105],'復古 Vintage':[.045,.115],
'鮮豔 Vivid':[.12,.21],'暗色 Dark':[.07,.15],
'清冷 Cool':[.055,.13],'自然 Earthy':[.045,.105],
'夕陽 Sunset':[.095,.19],'海洋 Ocean':[.075,.17],
'夏日 Summer':[.11,.19],'寶石 Jewel':[.11,.20],
'賽博龐克 Cyberpunk':[.14,.23],'糖果 Candy':[.09,.16]
};
const uniform=(a,b)=>a+Math.random()*(b-a);
const choice=a=>a[Math.floor(Math.random()*a.length)];
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const mod360=x=>((x%360)+360)%360;
const hueGap=(a,b)=>{const d=Math.abs(mod360(a-b));return Math.min(d,360-d);};

// 將 OKLCH 轉成 sRGB，超出色域時回傳 null
function oklchToRgb(L,C,h){
 const a=C*Math.cos(h*Math.PI/180),b=C*Math.sin(h*Math.PI/180);
 const l=(L+.3963377774*a+.2158037573*b)**3;
 const m=(L-.1055613458*a-.0638541728*b)**3;
 const s=(L-.0894841775*a-1.2914855480*b)**3;
 const linear=[4.0767416621*l-3.3077115913*m+.2309699292*s,
 -1.2684380046*l+2.6097574011*m-.3413193965*s,
 -.0041960863*l-.7034186147*m+1.7076147010*s];
 if(linear.some(x=>x<-.000001||x>1.000001))return null;
 return linear.map(x=>{x=clamp(x,0,1);return Math.round((x<=.0031308?12.92*x:1.055*x**(1/2.4)-.055)*255);});
}
function colorHex(L,C,h){
 let lo=0,hi=C,rgb=oklchToRgb(L,0,h);
 for(let i=0;i<20;i++){
  const mid=(lo+hi)/2,candidate=oklchToRgb(L,mid,h);
  if(candidate===null)hi=mid;else{lo=mid;rgb=candidate;}
 }
 return '#'+rgb.map(x=>x.toString(16).padStart(2,'0').toUpperCase()).join('');
}
function paletteCandidate(style,scheme){
 const theme=choice(STYLE_THEMES[style]);
 const anchor=choice(STYLE_ANCHORS[style]);
 const rotation=uniform(-9,9);
 let hues;
 if(scheme===SCHEMES[0]){
  hues=Array.from({length:5},()=>mod360(anchor+rotation+uniform(-8,8)));
 }else if(scheme===SCHEMES[1]){
  const spread=uniform(16,32);
  hues=[-1.5,-.5,.5,1.5,0].map(x=>mod360(anchor+rotation+x*spread+uniform(-5,5)));
 }else if(scheme===SCHEMES[2]){
  hues=[0,0,0,180,180].map(x=>mod360(anchor+rotation+x+uniform(-9,9)));
 }else{
  const split=uniform(24,42);
  hues=[0,0,180-split,180+split,0].map(x=>mod360(anchor+rotation+x+uniform(-8,8)));
 }
 // 非單色系偶爾以風格色相家族微調候選色
 if(scheme!==SCHEMES[0]&&Math.random()<.25){
  for(const i of [2,3]){
   const target=theme.reduce((best,h)=>hueGap(h,hues[i])<hueGap(best,hues[i])?h:best);
   if(hueGap(target,hues[i])<35&&Math.random()<.5)hues[i]=mod360(target+rotation+uniform(-7,7));
  }
 }
 const profileName=Math.random()<AIRY_PROBABILITY[style]?'airy':choice(STYLE_PROFILES[style]);
 const overallShift=profileName==='airy'?uniform(-.025,.025):uniform(-.045,.045);
 const lightness=LIGHT_PROFILES[profileName].map(L=>clamp(L+overallShift+uniform(-.055,.055),.13,.94));
 lightness[0]=Math.min(.96,Math.max(lightness[0],Math.max(...lightness.slice(1))+.035));
 lightness[4]=Math.max(.10,Math.min(lightness[4],Math.min(...lightness.slice(0,4))-.035));
 const [low,high]=CHROMA_LIMITS[style];
 let baseC=uniform(low,high);
 let factors=[.45,1.05,.70,1.12,.70];
 if(['鮮豔 Vivid','夏日 Summer','寶石 Jewel','賽博龐克 Cyberpunk'].includes(style))factors[0]=uniform(.65,1.05);
 if(['柔和 Pastel','復古 Vintage','自然 Earthy'].includes(style))factors[3]=.85;
 if(Math.random()<.35)factors[choice([0,2])]=.18;
 if(profileName==='airy'){
  baseC=uniform(.035,.095);
  factors=[uniform(.35,.65),.85,.70,.95,.65];
 }
 const chromas=factors.map(f=>Math.max(.012,baseC*f*uniform(.86,1.12)));
 return lightness.map((L,i)=>colorHex(L,chromas[i],hues[i]));
}
function paletteScore(colors){
 const rgbs=colors.map(c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)/255));
 const distances=[];
 for(let i=0;i<5;i++)for(let j=i+1;j<5;j++){
  distances.push(Math.sqrt(rgbs[i].reduce((sum,x,k)=>sum+(x-rgbs[j][k])**2,0)));
 }
 const duplicates=distances.reduce((s,d)=>s+Math.max(0,.17-d)*8,0);
 const harsh=distances.reduce((s,d)=>s+Math.max(0,d-.82)*1.1,0);
 const variety=distances.reduce((s,d)=>s+Math.min(d,.55),0)/distances.length;
 return variety*1.5-duplicates-harsh;
}
function makePalette(style,scheme){
 if(style==='隨機')style=choice(STYLES);
 if(scheme==='隨機')scheme=choice(SCHEMES);
 const candidates=Array.from({length:32},()=>paletteCandidate(style,scheme));
 const target=choice(candidates);
 const brightnessGroup=palette=>palette.reduce((sum,c)=>sum+[1,3,5].reduce((s,i)=>s+parseInt(c.slice(i,i+2),16),0)/3,0)/5>175;
 const group=brightnessGroup(target);
 const matching=candidates.filter(c=>brightnessGroup(c)===group);
 const colors=matching.reduce((best,c)=>paletteScore(c)>paletteScore(best)?c:best);
 return {style,scheme,colors};
}

// 提供其他頁面共用色盤產生功能
window.PaletteEngine = Object.freeze({
    STYLES,
    SCHEMES,
    ROLES,
    makePalette,

    // 完全隨機 RGB，不使用 OKLCH 配色規則
    makeRandomPalette() {
        return {
            style: '完全隨機',
            scheme: 'Random RGB',
            colors: Array.from({ length: 5 }, () =>
                '#' + Math.floor(Math.random() * 0x1000000)
                    .toString(16)
                    .padStart(6, '0')
                    .toUpperCase()
            )
        };
    }
});
