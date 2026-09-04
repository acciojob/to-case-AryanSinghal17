function toCase(text) {

	if(text.length == 0) return "";
    let s =  text.toLowerCase();
	let e =  text.toUpperCase();
	let ans = s + "-" + e;

	return ans;
}
// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
