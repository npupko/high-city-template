
jQuery( document ).ready(function( $ ) {
	$(".qlform_question input#jform_name").attr("placeholder", $(".qlform_question label#jform_name-lbl").text().replace(/(^\s+|\s+$)/g,''));
	$(".qlform_question input#jform_tel").attr("placeholder", $(".qlform_question label#jform_tel-lbl").text().replace(/(^\s+|\s+$)/g,''));
	$(".qlform_question input#jform_email").attr("placeholder", $(".qlform_question label#jform_email-lbl").text().replace(/(^\s+|\s+$)/g,''));

  $(".moduletable_question--catalog h3").text("Не нашли нужный продукт? Закажите звонок оператора!");
  $("#fieldset3").after('<div class="custom_form_text">Поля отмеченные звёздочкой (*) обязательны для заполнения</div>')
  $(".search_button").click(function (){
    $(".moduletable_main_search").toggleClass("visible");
  });

  $(".header-contacts__button, .popup-form-bg, .custom_product_popup_button_wrapper").click(function (){
    $(".popup-form").toggleClass("visible");
  });
});
