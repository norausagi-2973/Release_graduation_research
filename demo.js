const GYOSYU = {
  tai : {
    aa : [[74,211],[0,0],[-1,-23],[13,47],[28,-40],[46,101],[59,-45],[87,150],[87,-51],[111,171],[120,-60],[149,196],[146,-64],[193,221],[198,-70],[245,240],[250,-75],[327,237],[340,-64],[408,220],[405,-63],[464,203],[471,-55],[534,167],[552,-16],[589,130],[592,17],[631,109],[635,32],[680,112],[676,21],[216,229],[229,291],[352,296],[482,254],[439,205],[439,205],[472,256],[579,209],[651,123],[587,123],[770,128],[875,139],[822,90],[780,35],[794,-22],[812,-86],[730,-32],[453,-50],[528,-80],[600,-27],[635,49],[576,15],[255,-57],[298,-103],[370,-129],[364,-89],[358,-52],[230,53],[308,101],[419,174],[331,54],[259,3],[40,-4],[83,85],[83,115]],
    // aa : [[0,0],[0,0],[4,-21],[8,29],[14,-31],[30,66],[31,-34],[47,90],[46,-37],[84,131],[79,-47],[130,166],[121,-57],[163,177],[162,-61],[215,190],[201,-61],[268,186],[263,-49],[313,175],[315,-56],[371,155],[370,-44],[420,132],[420,-24],[468,108],[464,2],[518,85],[515,22],[547,90],[540,6],[180,177],[222,274],[287,217],[372,201],[354,154],[354,154],[375,206],[441,155],[522,137],[480,86],[609,99],[698,110],[655,67],[623,30],[634,-13],[642,-71],[582,-27],[361,-47],[433,-83],[463,-32],[519,20],[462,22],[203,-50],[246,-99],[298,-119],[286,-81],[295,-47],[188,36],[254,87],[334,135],[268,40],[203,-4],[28,-6],[71,78],[69,93]],
    name : 'タイ型',
    frontcurve_x : 420,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.000000039120872479937* Math.pow(frontcurve_x,4) + 0.0000346620165122512* Math.pow(frontcurve_x,3) - 0.0114587300927744* Math.pow(frontcurve_x,2) + 1.5545333840719*frontcurve_x + 20.3426388580679)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/420;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      var frontcurve = (-0.000000039120872479937* Math.pow(frontcurve_x,4) + 0.0000346620165122512* Math.pow(frontcurve_x,3) - 0.0114587300927744* Math.pow(frontcurve_x,2) + 1.5545333840719*frontcurve_x + 20.3426388580679)*bairitu;
      return frontcurve;
    }
  },
  maguro : {
    aa :  [[96,216],[0,0],[-12,-42],[20,10],[24,-63],[37,19],[39,-70],[52,27],[54,-76],[74,36],[72,-83],[105,46],[107,-92],[147,55],[147,-100],[187,63],[186,-100],[235,63],[245,-102],[287,61],[290,-100],[338,49],[346,-83],[380,33],[381,-67],[416,15],[419,-55],[449,3],[449,-41],[490,-11],[490,-27],[182,55],[207,83],[228,98],[266,74],[305,57],[317,53],[344,75],[370,90],[355,69],[349,39],[533,19],[587,58],[565,23],[548,-18],[558,-60],[581,-105],[530,-72],[345,-77],[367,-104],[387,-122],[378,-91],[383,-54],[178,-93],[196,-114],[219,-133],[220,-113],[215,-93],[162,-14],[220,0],[289,0],[232,-20],[194,-35],[29,-32],[53,-8],[53,3]],
    name : 'マグロ型',
    frontcurve_x : 1200,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.00000000204866590725145* Math.pow(frontcurve_x,4) + 0.00000510264781505105* Math.pow(frontcurve_x,3) - 0.0052448539047949* Math.pow(frontcurve_x,2) + 2.48663173938291*frontcurve_x + 27.2318794780676)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/1200;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.00000000204866590725145* Math.pow(frontcurve_x,4) + 0.00000510264781505105* Math.pow(frontcurve_x,3) - 0.0052448539047949* Math.pow(frontcurve_x,2) + 2.48663173938291*frontcurve_x + 27.2318794780676)*bairitu;
      return frontcurve;
    }
  },
  sake : {
    aa :  [[0,0],[0,0],[-7,-39],[21,14],[24,-72],[48,20],[42,-81],[60,21],[59,-88],[99,33],[100,-103],[144,45],[149,-113],[196,56],[197,-121],[319,74],[321,-137],[423,79],[423,-131],[560,49],[563,-120],[619,33],[627,-112],[676,21],[684,-88],[725,7],[726,-71],[770,-6],[766,-68],[805,-10],[799,-80],[429,64],[505,102],[556,113],[556,63],[559,33],[702,1],[729,15],[747,23],[758,8],[762,-13],[885,24],[963,57],[935,-13],[910,-59],[928,-124],[947,-192],[855,-134],[623,-115],[679,-163],[717,-115],[733,-80],[709,-72],[484,-123],[530,-125],[584,-122],[548,-108],[496,-106],[224,-94],[314,-97],[361,-109],[313,-138],[226,-121],[61,-51],[69,-16],[69,-6]],
    name : 'サケ型',
    frontcurve_x : 365,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.000000102779377637582* Math.pow(frontcurve_x,4) + 0.0000750454503487506* Math.pow(frontcurve_x,3) - 0.0198085816058562* Math.pow(frontcurve_x,2) + 2.25010272259743*frontcurve_x)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/365;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.000000102779377637582* Math.pow(frontcurve_x,4) + 0.0000750454503487506* Math.pow(frontcurve_x,3) - 0.0198085816058562* Math.pow(frontcurve_x,2) + 2.25010272259743*frontcurve_x)*bairitu;
      return frontcurve;
    }
  },
  buri : {
    aa : [[0,0],[0,0],[-4,-15],[19,17],[20,-41],[40,28],[39,-51],[56,40],[57,-59],[103,60],[108,-82],[146,76],[154,-96],[189,87],[189,-102],[268,96],[263,-115],[354,103],[372,-125],[453,91],[473,-113],[526,74],[540,-95],[598,52],[616,-73],[659,32],[663,-52],[714,7],[715,-35],[761,-2],[763,-31],[318,94],[346,106],[368,107],[368,101],[363,92],[383,98],[416,134],[446,159],[497,105],[738,-5],[838,42],[933,89],[884,23],[852,-27],[880,-81],[918,-131],[825,-83],[541,-92],[568,-112],[596,-129],[612,-88],[732,-19],[224,-104],[264,-140],[321,-183],[310,-147],[291,-111],[207,2],[274,15],[331,4],[281,-23],[227,-31],[15,-11],[75,5],[72,18]],
    name : 'ブリ型',
    frontcurve_x : 520,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.0000000264249445808877* Math.pow(frontcurve_x,4) + 0.0000291697370224039* Math.pow(frontcurve_x,3) - 0.0124959880924456* Math.pow(frontcurve_x,2) + 2.3200040140845*frontcurve_x)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/520;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.0000000264249445808877* Math.pow(frontcurve_x,4) + 0.0000291697370224039* Math.pow(frontcurve_x,3) - 0.0124959880924456* Math.pow(frontcurve_x,2) + 2.3200040140845*frontcurve_x)*bairitu;
      return frontcurve;
    }
  },
  aji : {
    aa : [[0,0],[0,0],[-13,-16],[17,21],[19,-46],[35,30],[44,-63],[56,39],[60,-71],[97,58],[109,-91],[153,79],[156,-101],[199,89],[204,-110],[262,101],[262,-109],[328,104],[334,-111],[391,97],[390,-112],[443,93],[445,-109],[528,79],[523,-93],[603,57],[605,-76],[664,34],[668,-54],[754,5],[757,-38],[262,87],[322,144],[366,188],[377,136],[394,70],[406,76],[445,122],[479,160],[525,99],[713,2],[842,32],[934,78],[887,13],[840,-27],[875,-72],[912,-128],[820,-80],[440,-109],[553,-121],[679,-71],[719,-35],[678,-31],[379,-110],[412,-134],[430,-138],[437,-121],[432,-107],[214,-21],[328,-6],[430,-24],[316,-53],[229,-47],[9,-15],[90,7],[87,34]],
    name : 'アジ型',
    frontcurve_x : 240,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.000000161271347462932* Math.pow(frontcurve_x,4) + 0.0000641171430162124* Math.pow(frontcurve_x,3) - 0.0108015502380612* Math.pow(frontcurve_x,2) + 1.12130438253234*frontcurve_x + 5.65382362532387)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/240;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.000000161271347462932* Math.pow(frontcurve_x,4) + 0.0000641171430162124* Math.pow(frontcurve_x,3) - 0.0108015502380612* Math.pow(frontcurve_x,2) + 1.12130438253234*frontcurve_x + 5.65382362532387)*bairitu;
      return frontcurve;
    }
  },
  kawahagi : {
    aa :   [[96,224],[0,0],[-2,-28],[59,34],[61,-111],[130,73],[107,-169],[167,94],[131,-190],[190,109],[158,-214],[212,130],[180,-228],[234,142],[208,-245],[285,145],[268,-284],[333,151],[342,-297],[373,156],[400,-260],[401,161],[438,-241],[514,149],[526,-224],[602,85],[611,-190],[689,-18],[690,-132],[746,-34],[752,-134],[225,131],[234,180],[253,234],[245,176],[271,142],[455,168],[545,235],[642,164],[692,60],[689,-29],[838,-5],[905,-16],[911,-47],[924,-83],[911,-122],[901,-140],[813,-148],[439,-241],[560,-308],[665,-264],[698,-181],[683,-123],[406,-114],[406,-114],[406,-114],[406,-114],[406,-114],[221,-63],[296,24],[307,-36],[289,-96],[227,-106],[13,-14],[193,68],[193,87]],
    name : 'カワハギ型',
    frontcurve_x : 590,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.00000000995820071487198* Math.pow(frontcurve_x,4) + 0.0000128144737662488* Math.pow(frontcurve_x,3) - 0.00616096791264453* Math.pow(frontcurve_x,2) + 1.20576648374848*frontcurve_x + 9.09464932522224)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/590;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.00000000995820071487198* Math.pow(frontcurve_x,4) + 0.0000128144737662488* Math.pow(frontcurve_x,3) - 0.00616096791264453* Math.pow(frontcurve_x,2) + 1.20576648374848*frontcurve_x + 9.09464932522224)*bairitu;
      return frontcurve;
    }
  },
  chigodara : {
    aa : [[0,0],[0,0],[11,-54],[14,15],[25,-69],[31,27],[40,-72],[40,36],[49,-79],[85,59],[95,-87],[141,75],[143,-91],[197,90],[197,-100],[233,91],[230,-100],[259,91],[255,-100],[289,88],[288,-101],[328,87],[322,-105],[431,78],[438,-82],[551,63],[561,-67],[675,47],[688,-51],[869,14],[873,-7],[258,84],[300,120],[342,152],[328,113],[320,78],[315,72],[394,162],[654,124],[887,71],[869,10],[928,28],[977,40],[995,19],[1001,-2],[993,-14],[971,-25],[922,-19],[319,-94],[496,-135],[730,-85],[883,-44],[871,-4],[502,-30],[502,-30],[502,-30],[502,-30],[502,-30],[222,7],[323,34],[407,37],[330,-6],[243,-31],[49,-36],[66,20],[64,46]],
    name : 'チゴダラ型',
    frontcurve_x : 340,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.000000186752382807594* Math.pow(frontcurve_x,4) + 0.000131227507813407* Math.pow(frontcurve_x,3) - 0.0336354802292469* Math.pow(frontcurve_x,2) + 3.60710599781572*frontcurve_x + 17.9311549573431)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/340;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.000000186752382807594* Math.pow(frontcurve_x,4) + 0.000131227507813407* Math.pow(frontcurve_x,3) - 0.0336354802292469* Math.pow(frontcurve_x,2) + 3.60710599781572*frontcurve_x + 17.9311549573431)*bairitu;
      return frontcurve;
    }
  },
  tara : {
    aa : [[0,0],[0,0],[-15,-35],[24,12],[26,-58],[49,20],[51,-64],[65,22],[67,-68],[102,30],[108,-82],[149,42],[148,-91],[194,50],[198,-98],[259,59],[259,-103],[307,63],[314,-106],[364,60],[374,-100],[415,62],[429,-88],[504,49],[513,-64],[595,41],[604,-48],[725,12],[732,-37],[841,-2],[843,-44],[290,55],[326,72],[377,89],[409,73],[442,47],[630,24],[703,39],[740,48],[763,25],[787,-7],[907,33],[961,63],[976,17],[979,-22],[981,-74],[972,-117],[913,-91],[646,-49],[689,-78],[727,-106],[770,-71],[808,-24],[181,-73],[193,-120],[220,-172],[203,-120],[197,-83],[245,-1],[377,-42],[367,-64],[329,-72],[244,-36],[34,-25],[80,5],[80,19]],
    name : 'タラ型',
    frontcurve_x : 835,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.0000000142029293057613* Math.pow(frontcurve_x,4) + 0.0000250928211986039* Math.pow(frontcurve_x,3) - 0.0159528215833191* Math.pow(frontcurve_x,2) + 4.08526605947822*frontcurve_x + 15.6636818207407)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/835;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.0000000142029293057613* Math.pow(frontcurve_x,4) + 0.0000250928211986039* Math.pow(frontcurve_x,3) - 0.0159528215833191* Math.pow(frontcurve_x,2) + 4.08526605947822*frontcurve_x + 15.6636818207407)*bairitu;
      return frontcurve;
    }
  },
  fugu : {
    aa : [[957,64],[0,0],[4,-7],[16,25],[22,-41],[38,41],[39,-56],[56,50],[55,-58],[98,72],[100,-66],[147,83],[148,-72],[198,91],[201,-86],[261,87],[267,-89],[322,85],[316,-81],[378,77],[383,-73],[433,62],[434,-57],[490,51],[497,-45],[537,42],[541,-30],[581,34],[589,-22],[630,36],[631,-17],[413,60],[537,113],[562,105],[562,87],[525,40],[513,21],[513,21],[513,21],[513,21],[513,21],[711,54],[775,64],[777,31],[774,6],[774,-20],[765,-52],[700,-34],[421,-46],[511,-106],[536,-112],[540,-85],[502,-36],[331,-29],[331,-29],[331,-29],[331,-29],[331,-29],[207,-13],[275,38],[293,13],[292,-20],[224,-51],[13,-7],[84,29],[87,59]],
    name : 'フグ型',
    frontcurve_x : 430,
    frontcurve : function(frontcurve_x, bairitu) {
      return (-0.000000109421154571319* Math.pow(frontcurve_x,4) + 0.000102325665052916* Math.pow(frontcurve_x,3) - 0.0345349761097138* Math.pow(frontcurve_x,2) + 4.69433149646301*frontcurve_x + 13.8605679165521)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/430;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.000000109421154571319* Math.pow(frontcurve_x,4) + 0.000102325665052916* Math.pow(frontcurve_x,3) - 0.0345349761097138* Math.pow(frontcurve_x,2) + 4.69433149646301*frontcurve_x + 13.8605679165521)*bairitu;
      return frontcurve;
    }
  },
  kinme : {
    aa : [[0,0],[0,0],[2,-3],[19,27],[29,-46],[49,55],[52,-78],[67,67],[74,-90],[127,102],[131,-123],[194,124],[189,-137],[271,144],[277,-146],[341,143],[336,-145],[404,141],[402,-141],[476,135],[490,-128],[540,122],[534,-118],[611,114],[613,-60],[653,111],[656,-19],[683,112],[686,21],[744,125],[758,41],[341,136],[434,187],[532,208],[516,166],[549,124],[477,61],[477,61],[477,61],[477,61],[477,61],[832,160],[961,204],[869,129],[810,76],[885,43],[989,-8],[848,15],[510,-122],[622,-112],[681,-40],[724,29],[675,19],[317,-141],[423,-142],[513,-130],[475,-121],[451,-115],[256,-42],[345,30],[452,99],[408,11],[336,-62],[9,-10],[107,31],[110,65]],
    name : 'キンメ型',
    frontcurve_x : 1025,
    frontcurve : function(frontcurve_x, bairitu) {
      return  (-0.00000000321810318452502* Math.pow(frontcurve_x,4) + 0.00000605529637123532* Math.pow(frontcurve_x,3) - 0.00437844007079891* Math.pow(frontcurve_x,2) + 1.58064441683297*frontcurve_x + + 36.4750554655247)*bairitu;
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
      var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/1025;
      var frontcurve_x = Math.sqrt( Math.pow( hire_y - sita_y, 2 ))/bairitu
      frontcurve = (-0.00000000321810318452502* Math.pow(frontcurve_x,4) + 0.00000605529637123532* Math.pow(frontcurve_x,3) - 0.00437844007079891* Math.pow(frontcurve_x,2) + 1.58064441683297*frontcurve_x + + 36.4750554655247)*bairitu;
      return frontcurve;
    }
  },
  kochi : {
    aa :   [[69,180],[0,0],[4,-5],[19,14],[24,-17],[53,23],[57,-18],[89,35],[90,-20],[141,44],[141,-21],[190,58],[192,-22],[262,70],[262,-24],[307,69],[308,-24],[357,71],[358,-25],[415,65],[415,-26],[497,67],[503,-28],[578,61],[584,-25],[689,48],[696,-25],[802,36],[809,-23],[946,16],[950,-23],[335,68],[435,91],[502,99],[509,82],[525,60],[551,62],[617,70],[674,76],[688,60],[724,43],[1049,14],[1115,-1],[1120,-8],[1128,-18],[1114,-25],[1097,-25],[1037,-26],[772,-22],[831,-26],[883,-26],[925,-24],[947,-15],[467,-10],[467,-10],[467,-10],[467,-10],[274,32],[339,28],[409,-8],[371,-21],[349,-37],[292,-23]],
    name : 'コチ型',
    frontcurve : function(frontcurve_x, bairitu) {
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
    }
  },
  saba : {
    aa : [[0,0],[0,0],[-1,-8],[19,11],[17,-32],[43,21],[42,-53],[65,27],[67,-70],[113,38],[111,-92],[163,48],[162,-105],[206,54],[200,-118],[321,66],[313,-130],[415,63],[399,-137],[498,59],[489,-129],[575,52],[586,-118],[649,35],[655,-99],[702,19],[707,-78],[770,1],[771,-59],[831,-13],[832,-42],[290,58],[315,111],[346,168],[372,111],[415,56],[561,51],[579,70],[595,89],[633,59],[682,25],[883,29],[976,81],[933,23],[907,-23],[941,-74],[972,-123],[890,-86],[586,-113],[607,-137],[629,-151],[644,-120],[691,-82],[256,-126],[296,-157],[347,-171],[331,-144],[316,-126],[213,-16],[264,-13],[318,-24],[283,-44],[240,-41],[46,-41],[87,-5],[88,14],[1588,-1843]],
    name : 'サバ型',
    frontcurve : function(frontcurve_x, bairitu) {
    },
    pectoral_fin : function(ue_y, sita_y, hire_x, hire_y) {
    }
  }
};

var aa = [];

// クリックで座標を取得するやつ
function zahyou(){
  document.getElementById("aaa").onclick = handleMouseMove;
  $('#closeModal , #modalBg').click(function(){
    $('#zahyouModal').fadeOut();
  });
  $('#close-taikei-Modal , #modalBg').click(function(){
    $('#taikeiModal').fadeOut();
  });
}

function handleMouseMove(event) {
  event = event || window.event; // IE対応
  if (aa.length == 0 || aa.length == 1){
    var x = event.pageX;
    var y = event.pageY;
  }else{
    var x = event.pageX-aa[1][0];
    var y = -(event.pageY-aa[1][1]);
  }
  aa.push([x,y]);
  mojihenkou();
}
let startTime = Date.now();
let endTime = Date.now();
function mojihenkou() {
  console.log(aa)
  if (aa.length == 1) {
    startTime = Date.now();
    document.getElementById("area3").innerText = "上顎の先端";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 2){
    document.getElementById("area3").innerText = "下顎の先端";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 3){
    document.getElementById("area3").innerText = "1から青線までの間の1/3";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 4 || aa.length == 6 || aa.length == 10 || aa.length == 12 || aa.length == 16 || aa.length == 18 || aa.length == 20 || aa.length == 24 || aa.length == 26 || aa.length == 28){
    document.getElementById("area3").innerText = `${aa.length-1}の真下`;
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 5){
    document.getElementById("area3").innerText = "1から青線までの間の2/3";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 7　|| aa.length == 8 || aa.length == 13 || aa.length == 14 || aa.length == 21 || aa.length == 22 || aa.length == 29 || aa.length == 30){
    document.getElementById("area3").innerText = "青線上";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 9){
    document.getElementById("area3").innerText = "青線の間の1/3";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 11){
    document.getElementById("area4").innerText = "";
    document.getElementById("area3").innerText = "青線の間の2/3";
  }else if(aa.length == 15 || aa.length == 23){
    document.getElementById("area4").innerText = "";
    document.getElementById("area3").innerText = "青線の間の1/4";
  }else if(aa.length == 17 || aa.length == 25){
    document.getElementById("area4").innerText = "";
    document.getElementById("area3").innerText = "青線の間の真ん中";
  }else if(aa.length == 19 || aa.length == 27){
    document.getElementById("area4").innerText = "";
    document.getElementById("area3").innerText = "青線の間の3/4";
  }else if(aa.length <= 40){
    document.getElementById("area2").innerText = "三角形の場合、付け根、付け根と頂点の間、頂点、付け根と頂点の間、付け根";
    document.getElementById("area3").innerText = "四角形の場合、付け根、1番近い頂点、もう一つの頂点との間、頂点、付け根";
    document.getElementById("area4").innerText = "第二背鰭がない場合はスキップをおす";
  }else if(aa.length <= 47){
    document.getElementById("area2").innerText = "台形、V字型、円形、それぞれ図のようにとる";
    document.getElementById("area3").innerText = "";
    document.getElementById("area4").innerText = "";
  }else if(aa.length <= 57){
    document.getElementById("area2").innerText = "臀鰭、腹鰭の順に、左からとる。ない場合はスキップをおす";
    document.getElementById("area3").innerText = "三角形の場合、付け根、付け根と頂点の間、頂点、付け根と頂点の間、付け根";
    document.getElementById("area4").innerText = "四角形の場合、付け根、1番近い頂点、もう一つの頂点との間、頂点、付け根";
  }else if(aa.length <= 62){
    document.getElementById("area2").innerText = "三角形の場合、付け根、付け根と頂点の間、頂点、付け根と頂点の間、付け根";
    document.getElementById("area3").innerText = "四角形の場合、付け根、1番近い頂点、もう一つの頂点との間、頂点、付け根";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 63){
    document.getElementById("area2").innerText = "口の後端";
    document.getElementById("area3").innerText = "";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 64){
    document.getElementById("area2").innerText = "目の中央";
    document.getElementById("area3").innerText = "";
    document.getElementById("area4").innerText = "";
  }else if(aa.length == 65){
    document.getElementById("area2").innerText = "目の縁";
    document.getElementById("area3").innerText = "";
    document.getElementById("area4").innerText = "";
  }
  if(aa.length <= 8){
    document.getElementById("area2").innerText = "青線は目の前縁";
  }else if(aa.length <= 14){
    document.getElementById("area2").innerText = "青線はエラの後端";
  }else if(aa.length <= 22){
    document.getElementById("area2").innerText = "青線は臀鰭の付け根または肛門";
  }else if(aa.length <= 30){
    document.getElementById("area2").innerText = "青線は尾鰭の付け根";
  }
  if(aa.length <= 30){
    document.getElementById("kaisetu").src = "photo/kaisetu1.png";
  }else if(aa.length <= 40){
    document.getElementById("kaisetu").src = "photo/kaisetu3.png";
  }else if(aa.length <= 47){
    document.getElementById("kaisetu").src = "photo/kaisetu4.png";
  }else if(aa.length <= 57){
    document.getElementById("kaisetu").src = "photo/kaisetu5.png";
  }else if(aa.length <= 65){
    document.getElementById("kaisetu").src = "photo/kaisetu2.png";
  }else if(aa.length == 66){
    endTime = Date.now();
    alert("タイムは、"+(endTime - startTime)/1000 + "秒です");
    aa[1][0] = 0;
    aa[1][1] = 0;
    console.log("目完了!");
    console.log(JSON.stringify(aa));
    $('#zahyouModal').fadeOut();
    $('#taikeiModal').fadeIn();
    var fishtype = document.getElementById('fishtype').options.value;
    createmodel(GYOSYU[fishtype],aa,4);
  }
  document.getElementById("area1").innerText = `${aa.length}`;
}

// 最初に表示される何もない黒のキャンバス
function first_canvas() {
  const width = 1000;
  const height = 600;
  const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#canvas4'),
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);
};

// 画像読み込み処理
$(function() {
  var file = null; // 選択されるファイル
  var blob = null; // 画像(BLOBデータ)
  const THUMBNAIL_WIDTH = 800; // 画像リサイズ後の横の長さの最大値
  const THUMBNAIL_HEIGHT = 450; // 画像リサイズ後の縦の長さの最大値

  $('#target1').change(function(e){
    aa = [[0,0]];
    mojihenkou();
    file = $(this).prop('files')[0];
    // 選択されたファイルが画像かどうか判定
    if (file.type != 'image/jpeg' && file.type != 'image/png') {
      // 画像でない場合は終了
      file = null;
      blob = null;
      return;
    }
    // 画像リサイズ
    var image = new Image();
    var reader = new FileReader();
    reader.onload = function(e) {
      image.onload = function() {
        var width, height;
        if(image.width/image.height > 1.8){
          console.log(image.height,image.width)
          // 横長の画像は横のサイズを指定値にあわせる
          var ratio = image.height/image.width;
          width = THUMBNAIL_WIDTH;
          height = THUMBNAIL_WIDTH * ratio;
        } else {
          // 縦長の画像は縦のサイズを指定値にあわせる
          console.log(image.height,image.width)
          var ratio = image.width/image.height;
          width = THUMBNAIL_HEIGHT * ratio;
          height = THUMBNAIL_HEIGHT;
        }
        // サムネ描画用canvasのサイズを上で算出した値に変更
        $('#target')
                     .attr('width', width)
                     .attr('height', height)
                     .attr("src", e.target.result);
        $('#preview')
                     .attr("src", e.target.result);
      }
      image.src = e.target.result;
    }
    document.getElementById("area1").innerText = "1";
    document.getElementById("kaisetu").src = "photo/kaisetu1.png";
    $('#zahyouModal').fadeIn();
    reader.readAsDataURL(file);
  });
});

// 座標読み込み処理
$(function() {
  var result = null;
  $('#zahyouyomikomi').change(function(e){
      result = e.target.files[0];
      var reader = new FileReader();
      reader.readAsText(result);
      reader.addEventListener("load", () => {
        originalData = JSON.parse(reader.result);
        createmodel(GYOSYU[originalData.type],originalData.aa,originalData.finlet,4);
      });
  });
});

// 魚種選択ボタンを押した場合
function typeclick() {
  $('#taikeiModal').fadeOut();
  var fishtype = document.getElementById('fishtype').options.value;
  var finlet = document.getElementById('finlet').checked;
  // if (aa.length >= 65) {
    createmodel(GYOSYU[fishtype],aa,finlet,4);
  // }else{
  //   createmodel(GYOSYU[fishtype],GYOSYU[fishtype].aa,finlet,4);
  // }
}

function typeclick2() {
  $('#taikeiModal').fadeOut();
  var fishtype = document.getElementById('fishtype2').options.value;
  const type = ["maguro", "tai", "aji", "buri","fugu","tara","chigodara","sake","kinme","kawahagi"];
  var num = type.indexOf(fishtype);
  document.getElementById('fishtype').options[num].checked=true;
  document.getElementById('fishtype2').options[num].checked=false;
  var finlet = document.getElementById('finlet').checked;
  createmodel(GYOSYU[fishtype],aa,finlet,4);
}

// 本体　ここで３dモデルを作る
function createmodel(gyosyu,aa,finlet,canvas_num) {
  console.log("koreda!")
  const width = 1000;
  const height = 600;

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(`#canvas${canvas_num}`),
    alpha: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);

  var geometry = new THREE.Geometry();

  var point = [];

  console.log(aa.length);

  for( var i = 0 ; i < 65 ; i++ ){
    point_p = [aa[i+1][0], aa[i+1][1]]
    point.push(point_p)
  }

  var x = (point[0][0] + point[1][0])/2
  var xx = (point[28][0] + point[29][0])/2
  naga = xx-x;

  var zenbunopoint = [];
  for( var i = 0 ; i < 30 ; i++ ){

    var ue_x = point[i][0];
    var ue_y =  point[i][1];
    var sita_x = point[i+1][0];
    var sita_y = point[i+1][1];
    var zoufuku_x_ue = (point[i][0]+point[i+2][0])/2;
    var zoufuku_x_sita = (point[i+1][0]+point[i+3][0])/2;
    var zoufuku_y_ue = (point[i][1]+point[i+2][1])/2;
    var zoufuku_y_sita = (point[i+1][1]+point[i+3][1])/2;

    pointwotukuru(ue_x, ue_y, sita_x, sita_y, i, zenbunopoint, gyosyu);
    pointwotukuru(zoufuku_x_ue, zoufuku_y_ue, zoufuku_x_sita, zoufuku_y_sita, 2, zenbunopoint, gyosyu);
    
    var hire = pectoral(gyosyu);
    var hire_57 = hire[0];
    var hire_61 = hire[1];
    i += 1
  }

  //胸ビレ
  function pectoral(gyosyu) {
    point_ue = [];
    point_sita = [];

    for( var i = 0 ; i < 30 ; i++ ){
      if(i%2 == 0){
        if(point[i][0] >= point[57][0]){
          point_ue.push(i);
        }
      }else{
        if(point[i][0] >= point[57][0]){
          point_sita.push(i);
        }
      }
    }

    var ue_xy = tyokusen(point[point_ue[0]-2][0],point[point_ue[0]-2][1],point[point_ue[0]][0],point[point_ue[0]][1],57);
    var aaaa2 = tyokusen(point[point_sita[0]-2][0],point[point_sita[0]-2][1],point[point_sita[0]][0],point[point_sita[0]][1],57);
    var hire = gyosyu.pectoral_fin(ue_xy[1],aaaa2[1],point[57][0],point[57][1]);

    point_ue = [];
    point_sita = [];

    for( var i = 0 ; i < 30 ; i++ ){
      if(i%2 == 0){
        if(point[i][0] >= point[61][0]){
          point_ue.push(i);
        }
      }else{
        if(point[i][0] >= point[61][0]){
          point_sita.push(i);
        }
      }
    }

    // 両端の点を入れて、直線上の求めたい場所をnumでおく
    var aaaa1 = tyokusen(point[point_ue[0]-2][0],point[point_ue[0]-2][1],point[point_ue[0]][0],point[point_ue[0]][1],61);
    var aaaa2 = tyokusen(point[point_sita[0]-2][0],point[point_sita[0]-2][1],point[point_sita[0]][0],point[point_sita[0]][1],61);
    var hire1 = gyosyu.pectoral_fin(aaaa1[1],aaaa2[1],point[61][0],point[61][1]);

    return [hire,hire1];
  }

  function tyokusen(x1,y1,x2,y2,num) {
    a = (y1 - y2) / (x1 - x2)
    b = y1 - a * x1
    return [point[num][0],a*point[num][0]+b];
  }

  var geometry = new THREE.Geometry();
  zenbunopoint.forEach(point1 => geometry.vertices.push(new THREE.Vector3(point1[0] ,point1[1] ,point1[2])));
  
  for( var i = 0 ; i < 32; i++ ){
    if(i < 22){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],3))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-3))
    }else if(i == 22 || i ==26){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],3))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-3))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],3))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-3))
    }else if(i == 24){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],20))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],14))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-20))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-14))
    }else if(i == 23){
      if(point[52][1] <= point[i+30][1] & point[i+30][1] <= point[54][1] || point[52][1] >= point[i+30][1] &  point[i+30][1] >= point[54][1]){
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[52][1],3,point[54][1],20,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[52][1],-3,point[54][1],14,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[52][1],-3,point[54][1],-20,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[52][1],3,point[54][1],-14,point[i+30][1])))
      }else{
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],10))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],4))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-10))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-4))
      }
    }else if(i ==25){
      if (point[56][1] <= point[i+30][1] & point[i+30][1] <= point[54][1] || point[56][1] >= point[i+30][1] & point[i+30][1] >= point[54][1]){
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[56][1],3,point[54][1],20,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[56][1],-3,point[54][1],14,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[56][1],-3,point[54][1],-20,point[i+30][1])))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],tyokuse(point[56][1],3,point[54][1],-14,point[i+30][1])))
      }else{
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],10))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],4))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-10))
        geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-4))
      }      
    }else if(i == 27){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57-8))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57+8))
    }else if(i == 31){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_61))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_61-8))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_61))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_61+8))
    }else if(i == 29){
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57+40))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57+32))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57-40))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57-32))
    }else{
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57+28))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],hire_57+20))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57-28))
      geometry.vertices.push(new THREE.Vector3(point[i+30][0],point[i+30][1],-hire_57-20))
    }
  }

  //尾びれの付け根の点
  geometry.vertices.push(new THREE.Vector3(point[28][0],point[28][1],3))//954
  geometry.vertices.push(new THREE.Vector3(point[28][0],point[28][1],-3))//955
  geometry.vertices.push(new THREE.Vector3(point[29][0],point[29][1],3))//956
  geometry.vertices.push(new THREE.Vector3(point[29][0],point[29][1],-3))//957

  //胴体の面を作る
  var UV_DIV_NUM = 28;
  for (var iv = 0; iv < UV_DIV_NUM; iv++) {
    for (var iu = 0; iu < UV_DIV_NUM; iu++) {
        var face0 = new THREE.Face3(iv * (UV_DIV_NUM + 1) + iu, iv * (UV_DIV_NUM + 1) + iu + 1, (iv + 1) * (UV_DIV_NUM+1) + iu);
        var face1 = new THREE.Face3(iv * (UV_DIV_NUM + 1) + iu + 1, (iv + 1) * (UV_DIV_NUM + 1) + iu + 1, (iv + 1) * (UV_DIV_NUM + 1) + iu);    
        geometry.faces.push(face0);
        geometry.faces.push(face1);
    };
  };

  //目
  var z = eyes(gyosyu);

  function eyes(gyosyu) {
    point_ue = [];
    point_sita = [];
    for( var i = 0 ; i < 30 ; i++ ){
      if(i%2 == 0){
        if(point[i][0] >= point[63][0]){
          point_ue.push(i);
        }
      }else{
        if(point[i][0] >= point[63][0]){
          point_sita.push(i);
        }
      }
    }

    var ue_xy = tyokusen(point[point_ue[0]-2][0],point[point_ue[0]-2][1],point[point_ue[0]][0],point[point_ue[0]][1],63);
    var aaaa2 = tyokusen(point[point_sita[0]-2][0],point[point_sita[0]-2][1],point[point_sita[0]][0],point[point_sita[0]][1],63);
    var z = gyosyu.pectoral_fin(ue_xy[1],aaaa2[1],point[63][0],point[63][1]);
    return z
  }

  var radius = Math.sqrt( Math.pow( point[63][0]-point[64][0], 2 ) + Math.pow( point[63][1]-point[64][1], 2 ) ) ;
  const sphere = new THREE.Mesh(
    new THREE.ParametricGeometry(function(u,v,target){
        u = u * Math.PI;
        v = v * 2 * Math.PI;
        var x = radius * Math.sin(u) * Math.cos(v);
        var y = radius * Math.sin(u) * Math.sin(v); 
        var z = radius/1.8 * Math.cos(u);
        target.set( x, y, z );
    }, 64, 64, true),
    new THREE.MeshNormalMaterial()
  );
  sphere.position.set(point[63][0],point[63][1],z);
  sphere.rotation.set(Math.PI*11/12,Math.PI*1/12,0); 

  const sphere2 = new THREE.Mesh(
    new THREE.ParametricGeometry(function(u,v,target){
        u = u * Math.PI;
        v = v * 2 * Math.PI;
        var x = radius * Math.sin(u) * Math.cos(v);
        var y = radius * Math.sin(u) * Math.sin(v); 
        var z = radius/1.8 * Math.cos(u);
        target.set( x, y, z );
    }, 64, 64, true),
    new THREE.MeshNormalMaterial()
  );
  sphere2.position.set(point[63][0],point[63][1],-z);
  sphere2.rotation.set(Math.PI*1/12,Math.PI*1/12,0); 

  //ヒレのポイントの始まり
  var D1 = 870;
  // 直線を作ってそこに真ん中のxの値を代入し、yを求め、yの値で分岐
  //背びれ1
  if (hantei(D1+2,D1+6,D1+4)){
    geometry.faces.push(
      new THREE.Face3(D1,D1+8,D1+2),
      new THREE.Face3(D1+2,D1+8,D1+6),
      new THREE.Face3(D1+2,D1+6,D1+4),

      new THREE.Face3(D1+1,D1+3,D1+9),
      new THREE.Face3(D1+3,D1+7,D1+9),
      new THREE.Face3(D1+3,D1+5,D1+7),
    );
  }else{
    geometry.faces.push(
      new THREE.Face3(D1,D1+8,D1+4),
      new THREE.Face3(D1,D1+4,D1+2),
      new THREE.Face3(D1+8,D1+6,D1+4),
  
      new THREE.Face3(D1+1,D1+5,D1+9),
      new THREE.Face3(D1+1,D1+3,D1+5),
      new THREE.Face3(D1+9,D1+5,D1+7),
    );
  };

  //背びれ2
  if (hantei(D1+12,D1+16,D1+14)){
    geometry.faces.push(
      new THREE.Face3(D1+12,D1+10,D1+18),
      new THREE.Face3(D1+12,D1+18,D1+16),
      new THREE.Face3(D1+12,D1+16,D1+14),

      new THREE.Face3(D1+13,D1+19,D1+11),
      new THREE.Face3(D1+13,D1+17,D1+19),
      new THREE.Face3(D1+13,D1+15,D1+17),
    );
  }else{
    geometry.faces.push(
      new THREE.Face3(D1+14,D1+10,D1+18),
      new THREE.Face3(D1+10,D1+14,D1+12),
      new THREE.Face3(D1+18,D1+16,D1+14),

      new THREE.Face3(D1+11,D1+15,D1+19),
      new THREE.Face3(D1+13,D1+15,D1+11),
      new THREE.Face3(D1+19,D1+15,D1+17),
    );
  };
  
  geometry.faces.push(
    //背びれ1側面
    new THREE.Face3(D1+3,D1,D1+2),
    new THREE.Face3(D1+3,D1+1,D1),
    new THREE.Face3(D1+5,D1+2,D1+4),
    new THREE.Face3(D1+5,D1+3,D1+2),
    new THREE.Face3(D1+5,D1+4,D1+6),
    new THREE.Face3(D1+5,D1+6,D1+7),
    new THREE.Face3(D1+6,D1+8,D1+7),
    new THREE.Face3(D1+7,D1+8,D1+9),
    //背びれ2側面
    new THREE.Face3(D1+13,D1+11,D1+10),
    new THREE.Face3(D1+13,D1+10,D1+12),
    new THREE.Face3(D1+13,D1+12,D1+15),
    new THREE.Face3(D1+12,D1+14,D1+15),
    new THREE.Face3(D1+15,D1+14,D1+16),
    new THREE.Face3(D1+15,D1+16,D1+17),
    new THREE.Face3(D1+16,D1+18,D1+17),
    new THREE.Face3(D1+18,D1+19,D1+17),
    //尾びれ
    new THREE.Face3(954,956,D1+26),
    new THREE.Face3(954,D1+26,D1+20),
    new THREE.Face3(D1+20,D1+26,D1+24),
    new THREE.Face3(D1+20,D1+24,D1+22),
    new THREE.Face3(956,D1+32,D1+26),
    new THREE.Face3(D1+26,D1+32,D1+28),
    new THREE.Face3(D1+28,D1+32,D1+30),

    new THREE.Face3(957,955,D1+27),
    new THREE.Face3(957,D1+27,D1+33),
    new THREE.Face3(D1+21,D1+27,955),
    new THREE.Face3(D1+21,D1+25,D1+27),
    new THREE.Face3(D1+21,D1+23,D1+25),
    new THREE.Face3(D1+27,D1+29,D1+33),
    new THREE.Face3(D1+29,D1+31,D1+33),
    //尾びれ側面
    new THREE.Face3(955,D1+20,D1+21),
    new THREE.Face3(955,954,D1+20),
    new THREE.Face3(D1+20,D1+23,D1+21),
    new THREE.Face3(D1+23,D1+20,D1+22),
    new THREE.Face3(D1+23,D1+22,D1+24),
    new THREE.Face3(D1+24,D1+25,D1+23),
    new THREE.Face3(D1+24,D1+26,D1+25),
    new THREE.Face3(D1+26,D1+27,D1+25),
    new THREE.Face3(D1+26,D1+28,D1+27),
    new THREE.Face3(D1+27,D1+28,D1+29),
    new THREE.Face3(D1+29,D1+28,D1+30),
    new THREE.Face3(D1+30,D1+31,D1+29),
    new THREE.Face3(D1+30,D1+32,D1+31),
    new THREE.Face3(D1+31,D1+32,D1+33),
    new THREE.Face3(957,D1+33,D1+32),
    new THREE.Face3(957,D1+32,956),
    new THREE.Face3(955,957,956),
    new THREE.Face3(955,956,954),
  );
  //臀鰭
  if (hantei(D1+2,D1+6,D1+4)){
    geometry.faces.push(
      new THREE.Face3(D1+34,D1+36,D1+40),
      new THREE.Face3(D1+34,D1+40,D1+42),
      new THREE.Face3(D1+36,D1+38,D1+40),

      new THREE.Face3(D1+35,D1+41,D1+37),
      new THREE.Face3(D1+35,D1+43,D1+41),
      new THREE.Face3(D1+37,D1+41,D1+39),
    );
  }else{
    geometry.faces.push(
      new THREE.Face3(D1+34,D1+36,D1+38),
      new THREE.Face3(D1+34,D1+38,D1+42),
      new THREE.Face3(D1+42,D1+38,D1+40),

      new THREE.Face3(D1+35,D1+39,D1+37),
      new THREE.Face3(D1+35,D1+43,D1+39),
      new THREE.Face3(D1+39,D1+43,D1+41),
    );
  }
  geometry.faces.push(
    //臀鰭側面
    new THREE.Face3(D1+34,D1+35,D1+37),
    new THREE.Face3(D1+34,D1+37,D1+36),
    new THREE.Face3(D1+37,D1+38,D1+36),
    new THREE.Face3(D1+37,D1+39,D1+38),
    new THREE.Face3(D1+38,D1+39,D1+40),
    new THREE.Face3(D1+40,D1+39,D1+41),
    new THREE.Face3(D1+42,D1+40,D1+43),
    new THREE.Face3(D1+43,D1+40,D1+41),
    //腹ビレ
    new THREE.Face3(D1+44,D1+48,D1+60),
    new THREE.Face3(D1+60,D1+48,D1+56),
    new THREE.Face3(D1+56,D1+48,D1+52),

    new THREE.Face3(D1+61,D1+49,D1+45),
    new THREE.Face3(D1+61,D1+57,D1+49),
    new THREE.Face3(D1+57,D1+53,D1+49),

    new THREE.Face3(D1+63,D1+50,D1+47),
    new THREE.Face3(D1+63,D1+58,D1+50),
    new THREE.Face3(D1+58,D1+54,D1+50),

    new THREE.Face3(D1+63,D1+47,D1+51),
    new THREE.Face3(D1+63,D1+51,D1+59),
    new THREE.Face3(D1+59,D1+51,D1+55),
    //腹ビレ側面
    new THREE.Face3(D1+60,D1+56,D1+57),
    new THREE.Face3(D1+60,D1+57,D1+61),
    new THREE.Face3(D1+56,D1+52,D1+53),
    new THREE.Face3(D1+56,D1+53,D1+57),
    new THREE.Face3(D1+52,D1+48,D1+49),
    new THREE.Face3(D1+52,D1+49,D1+53),
    new THREE.Face3(D1+48,D1+44,D1+45),
    new THREE.Face3(D1+48,D1+45,D1+49),
    new THREE.Face3(D1+60,D1+45,D1+44),
    new THREE.Face3(D1+60,D1+61,D1+45),

    new THREE.Face3(D1+62,D1+59,D1+63),
    new THREE.Face3(D1+63,D1+59,D1+58),
    new THREE.Face3(D1+58,D1+59,D1+55),
    new THREE.Face3(D1+58,D1+55,D1+54),
    new THREE.Face3(D1+54,D1+51,D1+50),
    new THREE.Face3(D1+54,D1+55,D1+51),
    new THREE.Face3(D1+51,D1+46,D1+47),
    new THREE.Face3(D1+50,D1+51,D1+47),
    new THREE.Face3(D1+62,D1+46,D1+47),
    new THREE.Face3(D1+62,D1+47,D1+63),
    //胸ビレ　
    //手前表面
    new THREE.Face3(934,950,946),
    new THREE.Face3(934,946,938),
    new THREE.Face3(938,946,942),

    //手前裏面
    new THREE.Face3(935,947,951),
    new THREE.Face3(935,939,947),
    new THREE.Face3(939,943,947),

    new THREE.Face3(936,948,952),
    new THREE.Face3(936,940,948),
    new THREE.Face3(940,944,948),

    new THREE.Face3(937,953,949),
    new THREE.Face3(937,949,941),
    new THREE.Face3(941,949,945),

    //胸ビレ側面
    new THREE.Face3(934,938,935),
    new THREE.Face3(935,938,939),
    new THREE.Face3(939,938,942),
    new THREE.Face3(939,942,943),
    new THREE.Face3(942,946,947),
    new THREE.Face3(942,947,943),
    new THREE.Face3(946,950,951),
    new THREE.Face3(946,951,947),
    new THREE.Face3(935,951,950),
    new THREE.Face3(935,950,934),

    new THREE.Face3(937,940,936),
    new THREE.Face3(937,941,940),
    new THREE.Face3(941,944,940),
    new THREE.Face3(941,945,944),
    new THREE.Face3(944,949,948),
    new THREE.Face3(945,949,944),
    new THREE.Face3(948,949,953),
    new THREE.Face3(948,953,952),
    new THREE.Face3(936,953,937),
    new THREE.Face3(952,953,936),
  );

  // 判定する関数
  function hantei(num1,num2,num3) {
    x1 = geometry.vertices[num1].x
    y1 = geometry.vertices[num1].y
    x2 = geometry.vertices[num2].x
    y2 = geometry.vertices[num2].y
    x3 = geometry.vertices[num3].x
    y3 = geometry.vertices[num3].y

    a = (y1 - y2) / (x1 - x2)
    b = y1 - a * x1
    y = a*x3+b;

    if (y3 > y){
      return true;
    }
    return false;
  }

  //小離鰭
  if (finlet){
    var kyori = Math.sqrt( Math.pow( point[39][0]-point[28][0], 2 ) + Math.pow( point[39][1]-point[28][1], 2 ) ) ;
    var kyori2 = Math.sqrt( Math.pow( point[51][0]-point[29][0], 2 ) + Math.pow( point[51][1]-point[29][1], 2 ) ) ;

    var kijyu = point[39][0]
    var kake = kyori/26
    for( var ii = 0 ; ii < 24 ; ii++ ){
      pulay = 0;
      if (ii%3 == 0){
        kijyu += kake
      }else if (ii%3 == 1){
        kijyu += kake
        pulay = kake*1.3;
      }else{
        kijyu += kake
      }
      point_ue = [];
      point_sita = [];
      for( var i = 0 ; i < 30 ; i++ ){
        if(i%2 == 0){
          if(point[i][0] >= kijyu){
            point_ue.push(i);
          }
        }else{
          if(point[i][0] >= kijyu){
            point_sita.push(i);
          }
        }
      }
      var y = tyokuse(point[point_ue[0]-2][0],point[point_ue[0]-2][1],point[point_ue[0]][0],point[point_ue[0]][1],kijyu);
      geometry.vertices.push(new THREE.Vector3(kijyu,y+pulay,3));
      geometry.vertices.push(new THREE.Vector3(kijyu,y+pulay,-3));
    }

    var kijyu = point[51][0]
    var kake = kyori2/26
    for( var ii = 0 ; ii < 24 ; ii++ ){
      pulay = 0;
      if (ii%3 == 0){
        kijyu += kake
      }else if (ii%3 == 1){
        kijyu += kake
        pulay = kake*1.3;
      }else{
        kijyu += kake
      }
      point_ue = [];
      point_sita = [];
      for( var i = 0 ; i < 30 ; i++ ){
        if(i%2 == 0){
          if(point[i][0] >= kijyu){
            point_ue.push(i);
          }
        }else{
          if(point[i][0] >= kijyu){
            point_sita.push(i);
          }
        }
      }
      var y = tyokuse(point[point_sita[0]-2][0],point[point_sita[0]-2][1],point[point_sita[0]][0],point[point_sita[0]][1],kijyu);
      geometry.vertices.push(new THREE.Vector3(kijyu,y-pulay,-3));
      geometry.vertices.push(new THREE.Vector3(kijyu,y-pulay,3));
      function tyokuse(x1,y1,x2,y2,x3) {
        a = (y1 - y2) / (x1 - x2)
        b = y1 - a * x1
        y = a*x3+b;
        return y;
      }
    }

    var f1 = 958;
    // 上側表面
    finletface(0,4,2);
    finletface(1,3,5);
    // 下側表面
    finletface(48,52,50);
    finletface(49,51,53);
    // 側面
    finletface2(0);
    finletface2(48);

    function finletface (x,y,z){
      for( var i = 0 ; i < 8 ; i++ ){
        geometry.faces.push(new THREE.Face3(f1+x,f1+y,f1+z));
        x += 6; y += 6; z += 6
      }
    }
    function finletface2 (s){
      for( var i = 0 ; i < 8 ; i++ ){
        for( var i1 = 0 ; i1 < 2 ; i1++ ){
          geometry.faces.push(
            new THREE.Face3(f1+s,f1+s+2,f1+s+1),
            new THREE.Face3(f1+s+1,f1+s+2,f1+s+3)
          );
          s += 2
        }
      s += 2
      }
    }
  }

  function tyokuse(x1,y1,x2,y2,x3) {
    a = (y1 - y2) / (x1 - x2)
    b = y1 - a * x1
    y = a*x3+b;
    return y;
  }


  geometry.computeFaceNormals();
  var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geometry, material);
  // scene.add(mesh);


  //口のところ
  var geometry_mouth = new THREE.Geometry();

  geometry_mouth.vertices.push(new THREE.Vector3(point[0][0],point[0][1],50));
  geometry_mouth.vertices.push(new THREE.Vector3(point[1][0],point[1][1],50));
  geometry_mouth.vertices.push(new THREE.Vector3(point[0][0],point[0][1],-50));
  geometry_mouth.vertices.push(new THREE.Vector3(point[1][0],point[1][1],-50));
  geometry_mouth.vertices.push(new THREE.Vector3(point[62][0],point[62][1],100));
  geometry_mouth.vertices.push(new THREE.Vector3(point[62][0],point[62][1],-100));

  geometry_mouth.faces.push(new THREE.Face3(0,2,1));
  geometry_mouth.faces.push(new THREE.Face3(2,3,1));
  geometry_mouth.faces.push(new THREE.Face3(2,5,3));
  geometry_mouth.faces.push(new THREE.Face3(0,1,4));
  geometry_mouth.faces.push(new THREE.Face3(5,2,0));
  geometry_mouth.faces.push(new THREE.Face3(5,0,4));
  geometry_mouth.faces.push(new THREE.Face3(3,5,4));
  geometry_mouth.faces.push(new THREE.Face3(3,4,1));

  geometry_mouth.computeFaceNormals();
  var material = new THREE.MeshNormalMaterial();
  var mesh1 = new THREE.Mesh(geometry_mouth, material);
  // scene.add(mesh1);
  

  //口の面のジオメトリー
  var geometry_mouth_umeru = new THREE.Geometry();
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[0][0]-0.001,point[0][1],50));
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[1][0]-0.001,point[1][1],50));
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[0][0]-0.001,point[0][1],-50));
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[1][0]-0.001,point[1][1],-50));
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[62][0],point[62][1],100));
  geometry_mouth_umeru.vertices.push(new THREE.Vector3(point[62][0],point[62][1],-100));

  geometry_mouth_umeru.faces.push(new THREE.Face3(0,2,5));
  geometry_mouth_umeru.faces.push(new THREE.Face3(4,0,5));
  geometry_mouth_umeru.faces.push(new THREE.Face3(4,5,3));
  geometry_mouth_umeru.faces.push(new THREE.Face3(1,4,3));
  
  geometry_mouth_umeru.computeFaceNormals();
  var material = new THREE.MeshNormalMaterial();
  var mesh2 = new THREE.Mesh(geometry_mouth_umeru, material);
  // scene.add(mesh2);

  //魚の口の切り取ったほう
  var sphere1BSP = new ThreeBSP(mesh);
  var sphere2BSP = new ThreeBSP(mesh1);
  resultBSP = sphere1BSP.intersect(sphere2BSP);
  result = resultBSP.toMesh();
  result.geometry.computeFaceNormals();
  result.geometry.computeVertexNormals();
  // scene.add(result);

  //魚の口の切り取った方で埋める面を切り取る
  var sphere1BSP = new ThreeBSP(result);
  var sphere2BSP = new ThreeBSP(mesh2);
  resultBSP = sphere1BSP.intersect(sphere2BSP);
  result2 = resultBSP.toMesh();
  result2.geometry.computeFaceNormals();
  result2.geometry.computeVertexNormals();
  // scene.add(result2);

  //魚本体から口を切り取ったやつ
  var sphere1BSP = new ThreeBSP(mesh);
  var sphere2BSP = new ThreeBSP(mesh1);
  resultBSP = sphere1BSP.subtract(sphere2BSP);
  result3 = resultBSP.toMesh();
  result3.geometry.computeFaceNormals();
  result3.geometry.computeVertexNormals();
  // scene.add(result3);
  // scene.add(mesh1);

  var boxes = new THREE.Group();
  boxes.add(result2);
  boxes.add(result3);
  boxes.add(sphere);
  boxes.add(sphere2);
  // sceneに追加
  boxes.position.set(-point[45][0]/2,0,0);
  scene.add(boxes);
  
  //obj変換
  document.getElementById("download1").onclick = function() {
    const objData = parse(boxes);
    let blob = new Blob([objData], { "type": "application/x-msdownload" });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'sakana.obj';
    link.click();
    console.log("daunnro-do");
  };
  
  //デバッグ用
  function add_sphere(x,y,z) {
    var s_mate = new THREE.MeshBasicMaterial( {color: "#FFFF00" } );
    var s_geo = new THREE.SphereGeometry( 3, 3, 3 );
    var sphere1  = new THREE.Mesh( s_geo, s_mate );
    sphere1.position.set(x,y,z)
    scene.add(sphere1);
  }

  tick();

  var controls = new THREE.OrbitControls(camera, document.querySelector(`#canvas${canvas_num}`));

  function tick() {
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }

  //ファイル書き出し
  document.getElementById("zahyou").onclick = function() {
    file = document.querySelector('#target1').files[0]
    name_num = file.name
    num = name_num.split('.');
    var fishtype = document.getElementById('fishtype').options.value;
    var finlet = document.getElementById('finlet').checked;
    Data = {
      aa: aa,
      type: fishtype,
      finlet: finlet
    }
    const fileName = num[0]+".json";
    const data = JSON.stringify(Data);
    const link = document.createElement("a");
    link.href = "data:text/plain," + encodeURIComponent(data);
    link.download = fileName;
    link.click();
  };
}

function pointwotukuru(ue_x,ue_y,sita_x,sita_y,i,zenbunopoint,gyosyu) {
  //プラス側の配列
  var plus_arr = [];
  //マイナス側の配列
  var minus_arr = [];

  //上下yの差分　13点で割って求める
  var fish_x_distance = Math.sqrt( Math.pow( ue_x - sita_x, 2 ));
  var fish_x_difference = fish_x_distance/14;
  //yは、13点あるので、全体の0.07142857ずつ　xは式に入れて求める
  var fish_y_difference = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))*0.07142857;
  var fish_x = ue_x;
  var fish_y = ue_y;
  //手で取った曲線の端から端まで
  frontcurve_x = gyosyu.frontcurve_x;

  //幅の倍率　今回取った魚とすでに作ってある曲線との比率
  var bairitu = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/frontcurve_x;
  
  if (ue_x < sita_x){
    for( var ii = 0 ; ii < 13 ; ii++ ){
      fish_x += fish_x_difference;
      fish_y -= fish_y_difference;
      frontcurve_x -= fish_y_difference/bairitu;

      frontcurve = gyosyu.frontcurve(frontcurve_x, bairitu);
      
      if(i == 0){
        plus_arr.push([fish_x,fish_y,0]);
        minus_arr.push([fish_x,fish_y,0]);
      }else if(i==28){
        var bairitu_tail = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/50;
        var frontcurve_x1 = frontcurve_x*bairitu/bairitu_tail;

        tailcurve = -0.0268 * Math.pow(frontcurve_x1,2) + 1.357 * frontcurve_x1
        plus_arr.push([fish_x + tailcurve,fish_y,0]);
        minus_arr.push([fish_x + tailcurve,fish_y,0]);
      }else{
        plus_arr.push([fish_x,fish_y,frontcurve]);
        minus_arr.push([fish_x,fish_y,-frontcurve]);
      }
    }
  }else{
    for( var ii = 0 ; ii < 13 ; ii++ ){
      fish_x -= fish_x_difference;
      fish_y -= fish_y_difference;
      frontcurve_x -= fish_y_difference/bairitu;

      frontcurve = gyosyu.frontcurve(frontcurve_x, bairitu);

      if(i == 0){
        plus_arr.push([fish_x,fish_y,0]);
        minus_arr.push([fish_x,fish_y,0]);
      }else if(i==28){
        var bairitu_tail = Math.sqrt( Math.pow( ue_y - sita_y, 2 ))/50;
        var frontcurve_x1 = frontcurve_x*bairitu/bairitu_tail

        tailcurve = -0.0268 * Math.pow(frontcurve_x1,2) + 1.357 * frontcurve_x1
        plus_arr.push([fish_x + tailcurve,fish_y,0]);
        minus_arr.push([fish_x + tailcurve,fish_y,0]);
      }else{
        plus_arr.push([fish_x,fish_y,frontcurve]);
        minus_arr.push([fish_x,fish_y,-frontcurve]);
      }
    }
  }

  //zenbunopointに1番上、プラス側、1番下、マイナス側、1番上の順にpushしていく
  zenbunopoint.push([ue_x,ue_y,0]);
  plus_arr.forEach(point => zenbunopoint.push(point));
  zenbunopoint.push([sita_x,sita_y,0]);
  //minusを逆順にする
  var minus_arr_r = minus_arr.reverse();
  minus_arr_r.forEach(point => zenbunopoint.push(point));
  zenbunopoint.push([ue_x,ue_y,0]);  
}

function modoru() {
  aa.pop();
  mojihenkou();
}

function skip() {
  var x = (aa[16][0]+aa[17][0])/2
  var y = (aa[16][1]+aa[17][1])/2
  console.log(x,y)
  if (aa.length >= 30 && aa.length <= 35 ){
    while (aa.length <= 35) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }else if (aa.length >= 35 && aa.length <= 40 ){
    while (aa.length <= 40) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }else if (aa.length >= 47 && aa.length <= 52 ){
    while (aa.length <= 52) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }else if (aa.length >= 52 && aa.length <= 57 ){
    while (aa.length <= 57) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }else if (aa.length >= 57 && aa.length < 62 ){
    while (aa.length <= 62) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }else if (aa.length == 62){
    // aa.push([0,0]);
    aa.push([x,y]);
  }else if (aa.length >= 63 && aa.length < 65 ){
    while (aa.length < 64) {
      // aa.push([0,0]);
      aa.push([x,y]);
    }
  }
  mojihenkou();
}