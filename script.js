function toCase(text) {
    let s = text.toUpperCase();
    let n = text.toLowerCase();

    let ans = n;
    ans += "-";
    ans += s;

    return ans;
}

// DO not change the code below

// const text = prompt("Enter text:");
alert(toCase(text));
