function toCase(text) {
  // write your code here
	let s = toUpperCase(text);
	let ans = text;
	ans+='-';
	ans+=s;
	return ans;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
