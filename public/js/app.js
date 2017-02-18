$(document)
  .ready(function () {
    $(document).on("click", "#scrapeButton", handleScrapeButton);

    function handleScrapeButton() {
      console.log("Scrape Button Clicked");
      $
        .get("/scrape")
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
      var route = "/save/"  + $(this).val();
      $
        .post(route)
        .then(function (data) {
          console.log("Article saved");
          window.location.reload();
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    $(document).on("click", ".deleteArticleButton", handleDeleteArticleButton);

    function handleDeleteArticleButton() {
      console.log("Delete Article Button Clicked");
      var route = "/delete/"  + $(this).val();
      $
        .post(route)
        .then(function (data) {
          console.log("Article deleted");
          window.location.reload();
        })
        .catch(function (err) {
          console.log(err);
        });
    };
  });