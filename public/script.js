function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function magic() {
    var searchbox = document.getElementById("sbox");
    var str = "All the magic here starts with typing...";
    var text = Array.from(str);
    searchbox.placeholder = "";
    for (var i = 0; i < text.length; i++) {
        await sleep(50);
        searchbox.placeholder += text[i];
    }
    await sleep(1500);
    async function nmagic() {
        var searchbox = document.getElementById("sbox");
        var str = "All the magic here starts with typing...";
        const lng = str.length;
        for (var i = 0; i < lng; i++) {
            await sleep(50);
            str = str.slice(0, -1);
            searchbox.placeholder = str;
        }
        await sleep(1000);
        magic();
    }
    nmagic();
}
function explore() {
    var content = document.getElementById("sbox").value;
    localStorage.search = content;
    alert("This feature is not yet available.\nWait while we create the world.");
    window.location = "search.html";
}