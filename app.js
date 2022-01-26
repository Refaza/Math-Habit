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
  LV = lv;
}