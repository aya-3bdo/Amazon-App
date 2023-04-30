
   /* Resize select width according to selected text */
    $(document).ready(function() {
      $("#option-width").html($('#select-menu option:selected').text());
      $('#select-menu').width($("#select-width").width());

      $('#select-menu').change(function(){
        $("#option-width").html($('#select-menu option:selected').text());
        $(this).width($("#select-width").width());
      });
    });
  