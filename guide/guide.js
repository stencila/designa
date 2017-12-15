$(document).ready(function() {
  $('.example').each(function() {
    var html = $(this).html()
    var $code = $('<code class="language-markup"></code>')
    $code.text(html)
    Prism.highlightElement($code[0])
    var $inspector = $('<div class="inspector"><pre></pre><div class="label">' + $(this).attr('class') + '</div></div>')
    $inspector.find('pre').append($code)
    $(this).after($inspector)
  })

  $(document).on('click', '.inspector .label', function(event) {
    $(this).prev('pre').toggle(400);
  });

  $(document).on('click', '.inspector pre', function(event) {
    var html = $(this).parent().prev().html();
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(html).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).animate({
      opacity: 0.5
    }, 200).animate({
      opacity: 1
    }, 200);
  });
});
