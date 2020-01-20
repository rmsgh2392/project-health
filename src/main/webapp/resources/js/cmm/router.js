function Session(x){
	sessionStorage.setItem('ctx',x)
	sessionStorage.setItem('css',x+'/resources/css')
	sessionStorage.setItem('img',x+'/resources/img')
	sessionStorage.setItem('js',x+'/resources/js')
	

	return {
		ctx : ()=>{return sessionStorage.getItem('ctx')},
		css : ()=>{return sessionStorage.getItem('css')},
		img : ()=>{return sessionStorage.getItem('img')},
		js : ()=>{return sessionStorage.getItem('js')}
	}
}
