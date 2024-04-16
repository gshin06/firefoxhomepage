//Google
function searchGoogle() {
    let query = document.getElementById("search").value;
    window.location.href = "https://www.google.com/search?q=" + query;
}