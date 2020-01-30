var routine = routine || {}
routine = (()=>{
	let context,img,css,js
	let routine_vue_js //루틴화면
	let navi_vue_js, auth_js
	let existing_routine_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		routine_vue_js = js + '/vue/routine/routine_vue.js'
		auth_js = js + '/user/auth.js'
		existing_routine_js = js + '/user/existing_routine.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(routine_vue_js),
			$.getScript(auth_js),
			$.getScript(existing_routine_js),
			$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView() 
			createRoutine()
			existRoutine()
			gohome() 
		})
		.fail(()=>{alert(`실패`)})
	}
	let setContentView =()=>{
		$('head').append(routine_vue.routine_style({img :img}))
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').html(routine_vue.routine_page({img : img}))

	}
	let createRoutine =()=>{
		$('#newRoutine').click(function(){
			$('#fullHeightModalRight').modal('show')
		})
	}
	let existRoutine =()=>{
		$('#existRoutine').click(()=>{
			existing_routine.onCreate()
		})
	}
	let gohome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			auth.login_home()
		})
	}
	return { onCreate }
})()