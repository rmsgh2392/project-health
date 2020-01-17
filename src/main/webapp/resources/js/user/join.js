var join = join || {}
join = (()=>{
	let context,img,js
	let join_vue_js //회원가입 화면
	let auth_js

	//아이디 정규식
	var idJ = /^[a-z0-9]{2,12}$/;
	// 비밀번호 정규식
	var pwJ = /^[A-Za-z0-9]{2,12}$/;

	let init =()=>{
		context = $.ctx()
		img = $.img()
		js = $.js()
		join_vue_js = js + '/vue/user/join_vue.js'
		auth_js = js + '/user/auth.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(join_vue_js),
			$.getScript(auth_js)
		)
		.done(()=>{
			setContentView()
			signUp()
			gohome()
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
	let signUp =()=>{
		$('<a/>',{
			text : 'Login Go',
			href : '#'
		})
		.addClass('loginhere-link')
		.appendTo('p[class="loginhere"]')
		.click(e=>{
			auth.setContentView()
		})
		$('input[class="form-submit"]').click(e=>{
			e.preventDefault()
			$.ajax({
				url : context + '/users/join',
				type : 'POST'
			})
		})
	}
	let gohome =()=>{
		auth.gomain()
	}
	let existId =()=>{
		$('#userid').keyup(()=>{
			if($('#userid').val().length >= 5){
				$.getJSON(context + '/')
			}
		})
	}
	return { onCreate }
})()