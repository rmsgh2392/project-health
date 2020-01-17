var mypage = mypage || {}
mypage =(()=>{
	let ctx, img, css, js
	let mypage_vue_js

	let init=()=>{
		ctx=$.ctx()
		img=$.img()
		css=$.css()
		js=$.js()
		mypage_vue_js=js+'/vue/user/mypage_vue.js'
	}
	let onCreate=()=>{
		init()
			$.when(
				$.getScript(mypage_vue_js)
			).done(()=>{
				setContentView()
				gogrape()
			}).fail(()=>{
				alert('조졌다')
			})
	}
	let setContentView=()=>{
		$('head').append(login_vue.login_head())
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_main())
	}
	let gogrape =()=>{
		$('div[class="team-back"] a span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('#mainpage').append(mypage_vue.mypage_graph())
		})
	}
	return{onCreate}
})()