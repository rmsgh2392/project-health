var auth = auth || {}
auth = (()=>{
	let context, img ,css, js ,login_vue_js, cookie_js, main_js
	let main_home_js
	let navi_vue_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		login_vue_js = js + '/vue/user/login_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		main_js = js + '/vue/menu/main.js'
		main_home_js = js + '/cmm/main_home.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(login_vue_js),
			$.getScript(cookie_js),
			$.getScript(main_js),
			$.getScript(main_home_js),
			$.getScript(navi_vue_js)
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
			e.preventDefault()
			$.ajax({
				url : context + '/users/login',
				type : 'POST',
				data : JSON.stringify({
					userid : $('input[placeholder="userid"]').val(),
					passwd : $('input[placeholder="password"]').val()}),
				dataType : 'json',
				contentType : 'application/json',
				success : d=>{
					if(d.msg ==='success'){
							$('#wrapper').html(navi_vue.login_toolbar())
							.append(navi_vue.toolbar_sub())
							.append(`<div id="mainpage" class="content" style="margin-top : 50px;"></div>`)
							.append(footer.foot())
							$('#mainpage').append(main.main_vue({ img: img }))
						$.each([{ text: 'Mypage', id: 'mypage' },
								{ text: '루틴프로그램', id: 'routine' },
								{ text: '헬스타그램', id: 'article' },
								{ text: '트레이너/센터 찾기', id: 'center' },
								{text: '로그아웃',id :'logout'}], (i, j) => {
						$('<li class="nav-item"><a id="' + j.id + '" class="nav-link js-scroll-trigger" href="#">' + j.text + '</a></li>')
						.appendTo('#navbarResponsive ul[class="navbar-nav ml-auto"]')})
						main_home.navi_move()
						logout()
						setCookie("userid",d.user.userid)
					}else {$('span[class="duple_userid"]').text('아이디를 다시 확인해주세요').css('color','red')}
				},
				error : e=>{alert(`ajax실패`)}
			})
		}
	)}
	let logout =()=>{
		$('#logout').click(e=>{
			e.preventDefault()
			main_home.onCreate()
			alert('로그아웃')
		})
	}
	return {onCreate, gomain, setContentView }
})()