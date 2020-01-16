var join = join || {}
join = (()=>{
	let context,img,js
	let join_vue_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		js = $.js()
		join_vue_js = js + '/vue/user/join_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(join_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{})
	}
	let setContentView =()=>{
		$('head').append(join_vue.join_head())
		// $('#mainNav').remove()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').html(join_vue.join_ui({img : img}))
	}
	return { onCreate }
})()