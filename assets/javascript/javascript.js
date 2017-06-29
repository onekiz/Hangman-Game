
//OBJECT HANGMAN - HOLDING ALL COUNTRIES PLAYER LIVES WIN LOSS AND TWO FUNCTIONS RANDOM COUNTRY GENERATOR, PLAY AGAIN FUNCTIONS//
var hangman = {
 
 countryList: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Antartica", "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","North Korea","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands"
		,"Yemen","Zambia","Zimbabwe"],
flag: ["assets/images/flags/af.svg","assets/images/flags/al.svg","assets/images/flags/dz.svg","assets/images/flags/ad.svg",
"assets/images/flags/ao.svg","assets/images/flags/ai.svg","assets/images/flags/ag.svg","assets/images/flags/aq.svg","assets/images/flags/ar.svg","assets/images/flags/am.svg","assets/images/flags/aw.svg","assets/images/flags/au.svg","assets/images/flags/at.svg","assets/images/flags/az.svg",
"assets/images/flags/bs.svg","assets/images/flags/bh.svg","assets/images/flags/bd.svg","assets/images/flags/bb.svg","assets/images/flags/by.svg","assets/images/flags/be.svg","assets/images/flags/bz.svg","assets/images/flags/bj.svg",
"assets/images/flags/bm.svg","assets/images/flags/bt.svg","assets/images/flags/bo.svg","assets/images/flags/ba.svg","assets/images/flags/bw.svg","assets/images/flags/br.svg","assets/images/flags/vg.svg","assets/images/flags/bn.svg",
"assets/images/flags/bg.svg","assets/images/flags/bf.svg","assets/images/flags/bi.svg","assets/images/flags/kh.svg","assets/images/flags/cm.svg","assets/images/flags/ca.svg","assets/images/flags/cv.svg","assets/images/flags/ky.svg",
"assets/images/flags/ro.svg","assets/images/flags/cl.svg","assets/images/flags/cn.svg","assets/images/flags/co.svg","assets/images/flags/cd.svg","assets/images/flags/ck.svg","assets/images/flags/cr.svg","assets/images/flags/ci.svg",
"assets/images/flags/hr.svg","assets/images/flags/cu.svg","assets/images/flags/cy.svg","assets/images/flags/cz.svg","assets/images/flags/dk.svg","assets/images/flags/dj.svg","assets/images/flags/dm.svg","assets/images/flags/do.svg",
"assets/images/flags/ec.svg","assets/images/flags/eg.svg","assets/images/flags/sv.svg","assets/images/flags/gq.svg","assets/images/flags/ee.svg","assets/images/flags/et.svg","assets/images/flags/fk.svg","assets/images/flags/fo.svg",
"assets/images/flags/fj.svg","assets/images/flags/fi.svg","assets/images/flags/fr.svg","assets/images/flags/pf.svg","assets/images/flags/mq.svg","assets/images/flags/ga.svg","assets/images/flags/gm.svg","assets/images/flags/ge.svg",
"assets/images/flags/ge.svg","assets/images/flags/gh.svg","assets/images/flags/gi.svg","assets/images/flags/gr.svg","assets/images/flags/gl.svg","assets/images/flags/gd.svg","assets/images/flags/gu.svg","assets/images/flags/gt.svg",
"assets/images/flags/gg.svg","assets/images/flags/gn.svg","assets/images/flags/gw.svg","assets/images/flags/gy.svg","assets/images/flags/ht.svg","assets/images/flags/hn.svg","assets/images/flags/hk.svg","assets/images/flags/hu.svg",
"assets/images/flags/is.svg","assets/images/flags/in.svg","assets/images/flags/id.svg","assets/images/flags/ir.svg","assets/images/flags/iq.svg","assets/images/flags/ie.svg","assets/images/flags/im.svg","assets/images/flags/il.svg",
"assets/images/flags/it.svg","assets/images/flags/jm.svg","assets/images/flags/jp.svg","assets/images/flags/je.svg","assets/images/flags/jo.svg","assets/images/flags/kz.svg","assets/images/flags/ke.svg","assets/images/flags/kw.svg",
"assets/images/flags/kg.svg","assets/images/flags/la.svg","assets/images/flags/lv.svg","assets/images/flags/lb.svg","assets/images/flags/ls.svg","assets/images/flags/lr.svg","assets/images/flags/ly.svg","assets/images/flags/li.svg",
"assets/images/flags/lt.svg","assets/images/flags/lu.svg","assets/images/flags/mo.svg","assets/images/flags/mk.svg","assets/images/flags/mg.svg","assets/images/flags/mw.svg","assets/images/flags/my.svg","assets/images/flags/mv.svg",
"assets/images/flags/ml.svg","assets/images/flags/mt.svg","assets/images/flags/mr.svg","assets/images/flags/mu.svg","assets/images/flags/mx.svg","assets/images/flags/md.svg","assets/images/flags/mc.svg","assets/images/flags/mn.svg",
"assets/images/flags/me.svg","assets/images/flags/ms.svg","assets/images/flags/ma.svg","assets/images/flags/mz.svg","assets/images/flags/na.svg","assets/images/flags/np.svg","assets/images/flags/nl.svg","assets/images/flags/nas.svg",
"assets/images/flags/nc.svg","assets/images/flags/nz.svg","assets/images/flags/ni.svg","assets/images/flags/ne.svg","assets/images/flags/ng.svg","assets/images/flags/no.svg","assets/images/flags/om.svg","assets/images/flags/pk.svg",
"assets/images/flags/ps.svg","assets/images/flags/pa.svg","assets/images/flags/pg.svg","assets/images/flags/py.svg","assets/images/flags/pe.svg","assets/images/flags/ph.svg","assets/images/flags/pl.svg","assets/images/flags/pt.svg",
"assets/images/flags/pr.svg","assets/images/flags/qa.svg","assets/images/flags/re.svg","assets/images/flags/ro.svg","assets/images/flags/ru.svg","assets/images/flags/rw.svg","assets/images/flags/pm.svg","assets/images/flags/ws.svg",
"assets/images/flags/sm.svg","assets/images/flags/sa.svg","assets/images/flags/sn.svg","assets/images/flags/rs.svg","assets/images/flags/sc.svg","assets/images/flags/sl.svg","assets/images/flags/sg.svg","assets/images/flags/sk.svg",
"assets/images/flags/si.svg","assets/images/flags/za.svg","assets/images/flags/kp.svg","assets/images/flags/kr.svg","assets/images/flags/es.svg","assets/images/flags/lk.svg","assets/images/flags/kn.svg","assets/images/flags/lc.svg","assets/images/flags/vc.svg",
"assets/images/flags/sd.svg","assets/images/flags/sr.svg","assets/images/flags/sz.svg","assets/images/flags/se.svg","assets/images/flags/sw.svg","assets/images/flags/sy.svg","assets/images/flags/tw.svg","assets/images/flags/tj.svg",
"assets/images/flags/tz.svg","assets/images/flags/th.svg","assets/images/flags/tl.svg","assets/images/flags/tg.svg","assets/images/flags/to.svg","assets/images/flags/tt.svg","assets/images/flags/tn.svg","assets/images/flags/tr.svg",
"assets/images/flags/tm.svg","assets/images/flags/tc.svg","assets/images/flags/ug.svg","assets/images/flags/ua.svg","assets/images/flags/ae.svg","assets/images/flags/gb.svg","assets/images/flags/us.svg","assets/images/flags/um.svg",
"assets/images/flags/uy.svg","assets/images/flags/uz.svg","assets/images/flags/ve.svg","assets/images/flags/vn.svg","assets/images/flags/vi.svg","assets/images/flags/ye.svg","assets/images/flags/zm.svg","assets/images/flags/zw.svg"],
 
 win: 0,	//NUMBER OF WINS
 randomNumber: 0,
 loss: 0,	//NUMBER OF LOSS
 numGuess: 0, //NUMBER OF GUESS
 lives: 10,	  //NUMBER IF LIVES PLAYER HAS = NUMBER OF WRONG INPUT LETTERS
 numHint: 3,  //NUMBER OF HINTS PLAYER CAN USE
 endofGame: false, //TELL YOU END OF GAME OR NOT
 guessLetter: [],  //HOLDING ENTERED LETTERS//
 wrongLetter: [],  //HOLDING WRONG LETTERS//

 //COUNTRY SELECTOR FUNCTION//
 randomCountryGenerator: function(){
	 this.randomNumber = Math.floor(Math.random()*this.countryList.length);
	 console.log("random number "+this.randomNumber);
	 return this.countryList[this.randomNumber];

},

// RESETS GAME VARIABLES AND STARTS A NEW GAME KEEPING WIN AND LOSS DATA UPDATED//
 endGame: function(){

 		if(confirm("Do you wanna play again?")){
 			this.lives = 10;
 			this.numGuess = 0;
 			this.numHint = 3;
 			this.wrongLetter = [];
 			this.guessLetter = [];
 			word = this.randomCountryGenerator().toUpperCase();
 			numLetter = word.length;
 			document.getElementById("lives").innerHTML =this.lives;
 			for (var i=0; i<numLetter; i++){
 				if (word.charAt(i)=== " "){
 					hangman.guessLetter.push("\xa0");
 					word = word.replace(" ","\xa0");
 				}
 				else {
				hangman.guessLetter.push("_");
				}
			}
			document.getElementById("letter").innerHTML = this.guessLetter.join(" ");
			document.getElementById("usedLetter").innerHTML = this.wrongLetter;
			document.getElementById("country").innerHTML = word;
 		}
 		else {
 			alert("THANKS FOR PLAYING")
 		}	
 		return word;
 }

};

	//GLOBAL VARIABLES//
		var word = hangman.randomCountryGenerator().toUpperCase();
		var numLetter = word.length;
		var keyboard = ["abcdefghijklmnoprstuvwxyz"];
		country.style.display = "none";
		image.style.display = 'none';

 	//DISPLAYING SELECTED COUNTRY - GAME FORMAT "_ _ _ _ _ "//
		for (var i=0; i<numLetter; i++){
			if (word.charAt(i)=== " "){
				hangman.guessLetter.push("\xa0");
				word = word.replace(" ","\xa0");
 			}

 			else {
 				hangman.guessLetter.push("_");
 			}
		}

		//PRINTING ALL VARIABLES THAT PLAYER HAS///
		document.getElementById("letter").innerHTML = hangman.guessLetter.join(" ");
		document.getElementById("win").innerHTML = hangman.win;
		document.getElementById("loss").innerHTML = hangman.loss;
		document.getElementById("lives").innerHTML =hangman.lives;
		document.getElementById("country").innerHTML = word;
		document.getElementById("btn2").innerHTML = "Hint: "+hangman.numHint;

console.log(word+" flag "+hangman.flag.length + " countryList "+ hangman.countryList.length);

//SHOWING SELECTED COUNTRY IF PLAYER WANTS//
function showHide(){
	var div = document.getElementById("country");
    if (div.style.display === 'none') {
        div.style.display = 'block';
        document.getElementById("btn1").innerHTML = document.getElementById("btn1").value = "Hide";
    } else {
        div.style.display = 'none';
        document.getElementById("btn1").innerHTML = document.getElementById("btn1").value = "Show";
    }
}

//DISPLAYS ONE RANDOM LETTER TO HELP PLAYER//
function hint(){
	hangman.numHint--;
	if(hangman.numHint >-1){
	var num = Math.floor(Math.random()*numLetter);
	while (hangman.guessLetter[num] != "_"){
		num = Math.floor(Math.random()*numLetter);	
	}
		hangman.guessLetter.splice(num,1,word.charAt(num).toUpperCase());
		document.getElementById("letter").innerHTML = hangman.guessLetter.join(" ");
		document.getElementById("btn2").innerHTML = "Hint: "+hangman.numHint;
	}

}

//SETS NEW GAME ANYTIME//
function newGame(){
	word = hangman.endGame();
  	numLetter = word.length;
  	hangman.endofGame = false;
	image.style.display = 'none';
	worldimg.style.display = "block";
}

//WHEN PLAYER INPUTS A LETTER. ALL THE CALCULATIONS (HOW MANY LIVES WINS LOSS) DISPLAYING HIT AND MISS LETTERS, CONDITIONALS// 
document.onkeyup = function (event){

	//CONTROLING GAME FLOW WETHER GAME IS OVER OR NOT//
	if(!hangman.endofGame){
		var match = false;
		var repeat = false;

		//INPUT LETTER CHECKING - HIT CONDITION//
  		for (var i=0; i<numLetter; i++) {
  			if (word.charAt(i)=== event.key.toUpperCase()){
  				hangman.guessLetter.splice(i,1,event.key.toUpperCase());
  				hangman.numGuess++;
  	 			match = true;
  				document.getElementById("letter").innerHTML = hangman.guessLetter.join(" ");
  				var x = document.getElementById("hitAudio"); 
  				x.play();
  			}
  		}

  		//INPUT LETTER CHECKING - MISS CONDITION//
  		if (!match){
  			for (var i=0; i<hangman.wrongLetter.length; i++){
  				if (hangman.wrongLetter[i] === event.key.toUpperCase()){
  					repeat = true;
  				}
  			}
  			if(!repeat) {
  				hangman.wrongLetter.push(event.key.toUpperCase());
  				hangman.numGuess++;
  				hangman.lives--;
  				document.getElementById("usedLetter").innerHTML = hangman.wrongLetter.join(" ");
  				document.getElementById("lives").innerHTML = hangman.lives;	
  			}
  			var x = document.getElementById("missAudio"); 
  			x.play();
 		}

 		//WIN CONDITION//
 		if (word === hangman.guessLetter.join("")){
 			var img = document.getElementById("image");
    		document.getElementById("image").src=hangman.flag[hangman.randomNumber];
    		img.style.display = "block";
    		worldimg.style.display = "none";
    		hangman.win++;
  			document.getElementById("win").innerHTML = hangman.win;
  			var winAudio = document.getElementById("winAudio"); 
  			winAudio.play();
  			hangman.endofGame = true;
        }

        //LOSS CONDITION//
  		if (hangman.lives===0){
  			var lossAudio = document.getElementById("lossAudio"); 
  			lossAudio.play(); 
  			hangman.loss++;
  			document.getElementById("letter").innerHTML = word;
  			document.getElementById("loss").innerHTML = hangman.loss;
  			hangman.endofGame = true;
  		}
	}

}

//DISPLAYS CREATED OBJECT//
console.log(hangman);