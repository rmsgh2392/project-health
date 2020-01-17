var routine = routine || {}
routine = (()=>{
	let context,img,css,js
	let routine_vue_js //루틴화면
	let auth_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		routine_vue_js = js + '/vue/routine/routine_vue.js'
		auth_js = js + '/user/auth.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(routine_vue_js),
			$.getScript(auth_js)
		)
		.done(()=>{
			setContentView() 
			createRoutine()
			gohome() 
		})
		.fail(()=>{alert(`실패`)})
	}
	let setContentView =()=>{
		$('.masthead').remove()
		$('.page-footer').remove()
		$('head').append(routine_vue.routine_style({img :img}))
		$('#mainpage').html(routine_vue.routine_page({img : img}))

	}
	let createRoutine =()=>{
		$('#newRoutine').click(function(){
			alert('루틴생성하러가기')
			
		})
	}
	let gohome =()=>{
		auth.gomain()
	}
	return { onCreate }
})()