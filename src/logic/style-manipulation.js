$(function () {
   $(' .lang-slice').on('mouseover', () => {
    $('#lang-dropdown').show();
    }),
 
      $(' .lang-slice').on('mouseleave', () => {
    $('#lang-dropdown').hide();
    })
})