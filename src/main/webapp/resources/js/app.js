"use strict"
var app = (()=>{
	const MSG = "ERROR ERROR"
	let ctx,img,css,js,navi_vue_js,main_js,footer_js

	let init =()=>{
		ctx = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		navi_vue_js = js +'/vue/menu/navi_vue.js'
		main_js = js + '/vue/menu/main.js'
		footer_js = js +'/vue/menu/footer.js'
	}
	let run =x=>{
		$.getScript(x+'/resources/js/cmm/router.js',()=>{
			$.extend(new Session(x))
			onCreate()
		})
	}
	let onCreate =()=>{
		init()
		alert(`네비주소 : ${navi_vue_js} / main 주소 : ${main_js}`)
		$.when(
			$.getScript(navi_vue_js),
			$.getScript(main_js),
			$.getScript(footer_js)
		)
		.done(()=>{
			setContentView()

		})
		.fail(()=>{MSG})
	}
	let setContentView =()=>{
		$('#wrapper').html(navi_vue.toolbar())
		.append(main.main_vue({ img : img }))
		.append(footer.foot())

		$.each(['회원가입','로그인','Mypage','루틴프로그램','헬스타그램','트레이너/센터 찾기'],(i,j)=>{
			$('<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">'+j+'</a></li>')
			.appendTo('#navbarResponsive ul[class="navbar-nav ml-auto"]')
		})
		$('<a/>')
		.text('시작하기')
		.addClass('btn btn-primary js-scroll-trigger')
		.appendTo('#getStart h2[class="text-white-50 mx-auto mt-2 mb-5"]')
		.click(()=>{alert('시작시작')})
	}
	return {run}
})()