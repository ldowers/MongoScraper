$(document)
  .ready(function () {
    $(document).on("click", "#scrapeButton", handleScrapeButton);

    function handleScrapeButton() {
      console.log("Scrape Button Clicked");
      $.get("/scrape")
        .then(function (data) {
          $("#scrapeModal").modal();
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    $(document).on("click", ".saveArticleButton", handleSaveArticleButton);

    function handleSaveArticleButton() {
      console.log("Save Article Button Clicked");
    };
  });

// // Grab the articles as a json $.getJSON("/articles", function(data) {   //
// For each one   for (var i = 0; i < data.length; i++) {     // Display the
// apropos information on the page     $("#articles").append("<p data-id='" +
// data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");   }
// });