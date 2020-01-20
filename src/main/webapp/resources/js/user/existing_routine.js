var existing_routine = existing_routine || {}
existing_routine = (()=>{
	let context,img,css,js
	let routine_vue_js
	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		routine_vue_js = js + '/vue/routine/routine_vue.js'
	}
	let onCreate =()=>{
		$.when(
			$.getScript(routine_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{})
	}
	let setContentView =()=>{
		$('head').append(routine_vue.exist_style({css : $.css()}))
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').html(routine_vue.existRoutine({img : $.img()}))
	}
	return { onCreate }
})()