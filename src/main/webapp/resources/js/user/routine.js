var routine = routine || {}
routine = (()=>{
	let context,img,css,js
	let routine_vue_js //루틴화면
	let app_js,navi_vue_js
	let existing_routine_js

	let init =()=>{
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		routine_vue_js = js + '/vue/routine/routine_vue.js'
		app_js = js + '/app.js'
		existing_routine_js = js + '/user/existing_routine.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(routine_vue_js),
			$.getScript(app_js),
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
		$('.masthead').remove()
		$('.page-footer').remove()
		$('head').append(routine_vue.routine_style({img :img}))
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
			app.run(context)
		})
	}
	return { onCreate }
})()