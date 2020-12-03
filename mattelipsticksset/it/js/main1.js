
      $(".callback-btn").click(function() {
        $(".callback-form").toggleClass("hide");
      });
  
      $(".show-callback").click(function() {
        $(".callback-form").removeClass("hide");
      });
  
      $(document).click(function(e) {
        if (
          $(e.target).closest(
            $(".callback-form, .callback-btn, .show-callback")
          ).length > 0
        ) {
          return;
        }
        $(".callback-form").addClass("hide");
      });
  
      $('img[src="img/i-cross.svg"]').click(function() {
        $(".callback-form").addClass("hide");
      });
    