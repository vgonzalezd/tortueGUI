
(function() {
  $(document).ready(function() {
    //var base = $('base').text();
    //alert(base);

    $('.moveButton').click(function() {
        /*var movimiento=$(this).data('move');
        $.ajax({
          type: 'post',
          dataType: 'json',
          url: base + '/action',
          data: { move: movimiento },
        })
        .done(function(data) {
          console.log("success");
          console.log(data);
          alert(data.result);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });*/
        Boton.move({value: "Left"});
    });

  });
})();
