var $ = function(selector, node = document){
    return node.querySelector(selector);
}
// ==========================================

var elForm = $('.js-test-form');
var bolalarAdabiyoti = $('.js-bolalar-adabiyoti');
var klassikAdabiyot = $('.js-klassik-adabiyot');
var jahonAdabiyoti = $('.js-hahon-adabiyoti');
var biznesAdabiyoti = $('.js-biznes-adabiyoti');
var result = $('.js-result');
var javon = [
    [
      "Shum bola",
      "O'grigina bolam",
      "Besh bolali yigitcha",
      "Jannatiy odamlar",
      "Sariq devni minib",
      "Sariq devni o'limi",
      "Ikki karra ikki besh",
      "Shirin qovunlar mamlakatida",
    ],
    [
      "O'tkan kunlar",
      "Mehrobdan chayon",
      "Uloqda",
      "Turkiston qayg'usi",
      "Kecha va kunduz",
      "Ikki eshik orasi",
      "Qora ko'zlar",
      "Ufq",
      "Jimjitlik",
    ],
    [
      "Alif",
      "Alkimyogar",
      "Baxtiqaro Kerri",
      "Usta va Margaritta",
      "Yolg'izlikning yuz yili",
      "Telba",
      "Iblislar",
      "Mumu",
    ],
    [
      "Million dollarlik xatolar",
      "Bobilning eng boy odami",
      "Boy ota, kambag'al ota",
      "Boy ona, kambag'al ona",
      "Boy bola, kambag'al bola",
      "Pul oqimining kvadranti",
    ],
  ];
for (var tortma = 0; tortma < javon.length; tortma++) {
    for (var kitob = 0; kitob < javon[tortma].length; kitob++) {
        if (tortma === 0) {
            var item = document.createElement('li');
            item.textContent = javon[tortma][kitob];
            bolalarAdabiyoti.append(item);
        } else if (tortma === 1) {
            var item = document.createElement('li');
            item.textContent = javon[tortma][kitob];
            klassikAdabiyot.append(item);
        } else if (tortma === 2) {
            var item = document.createElement('li');
            item.textContent = javon[tortma][kitob];
            jahonAdabiyoti.append(item);
        } else  {
            var item = document.createElement('li');
            item.textContent = javon[tortma][kitob];
            biznesAdabiyoti.append(item);
        }
    }
}
var x=0;
var y = 0;
var z = 0;
for (var tortma = 0; tortma < javon.length; tortma++) {
    for (var kitob = 0; kitob < javon[tortma].length; kitob++) {
        if (x<javon[tortma][kitob].length) {
            x = javon[tortma][kitob].length;
            y = kitob;
            z = tortma;
        }
    }
}
console.log(javon[z][y]);
result.textContent = javon[z][y];