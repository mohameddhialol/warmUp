$('button').on('click',function(){
	var $input = $('<li id = "input"></li>')
	var $list = $("ul")
	$('li#input').text($('input').val())
	$list.append($input)
})