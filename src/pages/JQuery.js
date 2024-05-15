/*  -------------------------- Resize select width div according to selected text  -------------------------- */

  $(function () {
    $("#option-width").html($("#select-menu option:selected").text());
    $("#select-menu").width($("#select-width").width());


    $("#select-menu").on( 'change', function () {
      $("#option-width").html($("#select-menu option:selected").text());
      $(this).width($("#select-width").width()
      );
    });
  })
  




