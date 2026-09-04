function toCase(text) {

	 if (!text || text.trim().length === 0) {
        return "-";
    }
	
    return text.toLowerCase() +"-" +toUpperCase();
}
// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
