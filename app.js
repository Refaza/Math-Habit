'use strict';

let LV = [[],[]];

function genLv(AS, AE, BS, BE) {
  let lv = [[],[]], lvTemp = [];
  for (let i = AE-AS; i >= 0; i--) {
    for (let ii = BE-BS; ii >= 0 ; ii--) {
      let lvT = [(AE-i),(BE-ii)];
      lvT.sort();
      if(!lvTemp.includes(lvT[0] + "" + lvT[1])) {
        lv[0].push(lvT[0]);
        lv[1].push(lvT[1]);
        lvTemp.push(lvT[0] + "" + lvT[1]);
      }
    }
  }
  return lv;
}

function genLv22(max) {
  let lv22 = [[],[]];
  let lv = genLv(2,9,6,9);
  console.log(LV[0].length);
  console.log(LV[0]);
  for (let i=0;i<lv[0].length;i++) {
    /*console.log("lv");
    console.log(lv);*/
    console.log("LV[0]="+lv[0][i]+" LV[1]="+lv[1][i]+" +="+(lv[0][i]+lv[1][i]));
    if(lv[0][i] + lv[1][i] == max) {
      console.log("LV2+");
      lv22[0].push(lv[0][i]);
      lv22[1].push(lv[1][i]);
    }
  }
  return lv22;
}

function randLv(lv){
  //console.log("randQuiz()");
  let i = lv[0].length, randPos, temp=[];
  TL.innerText = i;
  while(--i > 0){
    randPos = Math.floor(Math.random() * (i+1));
    console.log("randPos = "+randPos);
    temp[0] = lv[0][randPos];
    temp[1] = lv[1][randPos];
    lv[0][randPos] = lv[0][i];
    lv[1][randPos] = lv[1][i];
    lv[0][i] = temp[0];
    lv[1][i] = temp[1];
  }
  return lv;
}

function genLv2(AS, AE, BS, BE) {
  let lv2 = [[],[],[]];
  let lv = randLv(genLv(AS,AE,BS,BE));
  lv2[0] = lv[0];
  for(int i=0;i<lv[1].length;i++) {
    let lv22 = genLv22(lv[1][i]);
    let randPos = Math.floor(Math.random() * (lv22[0].length+1));
    lv2[1].push(lv22[0][randPos)]);
    lv2[3].push(lv22[1][randPos]]);
  }
  return lv2;
}