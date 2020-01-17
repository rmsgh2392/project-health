"use strict"
var profile = profile || {}
profile = (()=>{
	let context, js, css, img, profile_vue_js

	let init = ()=>{
		context = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		profile_vue_js = js+'/vue/brd/profile_vue.js'
	}
	let onCreate =()=> {
		init()
		$.when(
			$.getScript(profile_vue_js),
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
		})

	}
	let setContentView =()=> {
		alert('이동 성공')
		$('head').append(profile_vue.profile_head({css : $.css()}))
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').html(profile_vue.profile_body())
	}
	return { onCreate }
})()