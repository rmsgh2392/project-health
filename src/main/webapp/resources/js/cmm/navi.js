/* "use strict"
var navi = navi || {}
navi = (()=>{
	let ctx,img,css,js,navi_vue_js
	let init =()=>{
		ctx = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		navi_vue_js = js + '/vue/menu/navi_vue.js'
		alert('img경로'+img)
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{})
	}
	let setContentView =()=>{
		$('#page-top').html(navi_vue.menubar())
		$(navi_vue.mainpage({img : img})).appendTo('#page-top')
		
	}
	return {onCreate}
})() */