var auth = auth || {}
auth = (()=>{
	let ctx, img ,css, js ,login_vue_js, cookie_js, main_js
	let main_home_js

	let init =()=>{
		ctx = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		login_vue_js = js + '/vue/user/login_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		main_js = js + '/vue/menu/main.js'
		main_home_js = js + '/cmm/main_home.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(login_vue_js),
			$.getScript(cookie_js),
			$.getScript(main_js),
			$.getScript(main_home_js)
		)
		.done(()=>{
			setContentView()
			gomain()
		})
		.fail(()=>{})
	}	
	let setContentView =()=>{
		$('head').append(login_vue.login_head())
		// $('#wrapper').html(login_vue.login_ui())
		$('.masthead').remove()
		$('.page-footer').empty()
		$('#mainpage').empty()
		$('#mainpage').append(login_vue.login_ui())
		
	}
	let gomain =()=>{
		$('#home').click(function(){
			main_home.onCreate()
		})
	}
	return {onCreate}
})()