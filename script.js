const extendHex = (shortHex) => {
  // write your code here
	
	let str = ""
	let flag = false;
	
	for(let i = 0;i<shortHex.length;i++){
		if(shortHex[i]!=='#'){
			if(shortHex[i].toUpperCase()=== shortHex[i])
				flag = true;
			str+=shortHex[i]
			str+=shortHex[i]
		}
	}
	if(flag) str = str.toUpperCase();
	return "#"+str;
	


};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
