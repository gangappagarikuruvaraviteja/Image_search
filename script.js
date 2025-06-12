var accessKey = "zCUfOxio6ugZhJyMqUXg4HQkOq-r-ZSbqSMT0Y7MdBc";
var searchBox = document.getElementById("search-box");
var searchResult = document.getElementById("search-result");
var showMoreBtn = document.getElementById("show-more-btn");
var keyword = "";
var page = 1;

function searchImages() {
    keyword = searchBox.value;
    var url = "https://api.unsplash.com/search/photos?page=" + page +

        "&query=" + keyword + "&client_id=" + accessKey + "&per_page=12";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(x) {
            if (page == 1) {

                searchResult.innerHTML = "";
            }
            var results = x.results;
            for (var i = 0; i < results.length; i++) {
                var result = results[i];
                var image = document.createElement("img");
                image.src = result.urls.small;
                var imageLink = document.createElement("a");
                imageLink.href = result.links.html;
                imageLink.appendChild(image);
                searchResult.appendChild(imageLink);
            }
            showMoreBtn.style.display = "block";
        });
}