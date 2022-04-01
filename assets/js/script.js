$(".botones ul a").on("click", function (event) {
    event.preventDefault();
  
    // var hash = this.hash;
    const href = $(this).attr("href");
  
    $("html").animate(
      {
        scrollTop: $(href).offset().top - 80,
      },
      1000
    );
  });
 