var auth = auth || {}
auth = (()=>{
	let context, img ,css, js ,login_vue_js, cookie_js, main_js
	let main_home_js

	let init =()=>{
		context = $.ctx()
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
			signIn()
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
	let signIn =()=>{
		$('#login_btn')
		.click(e=>{
			alert(`로그인 해볼까`)
			e.preventDefault()
			alert(context)
			$.ajax({
				url : context + '/users/login',
				type : 'POST',
				data : JSON.stringify({
					userid : $('input[placeholder="userid"]').val(),
					passwd : $('input[placeholder="password"]').val()}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					alert(d.user.uname)
					if(d.msg ==='success'){
						alert(`로그인 성공 `)
					}else {$('span[class="duple_userid"]').text('아이디를 다시 확인해주세요').css('color','red')}
				},
				error : e=>{alert(`ajax실패`)}
			})
		}
	)}
	return {onCreate, gomain, setContentView }
})()