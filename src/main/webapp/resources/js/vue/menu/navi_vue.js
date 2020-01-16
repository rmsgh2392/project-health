"use strict"
var navi_vue = navi_vue || {}
navi_vue = {
	toolbar: () => {
		return `<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
				<div class="container">
				<a id="home" class="navbar-brand js-scroll-trigger" href="#"><strong>Hell Chang</strong></a>
				<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
				</ul>
				</div>
				</div>
				</nav>
				`
	},
	toolbar_sub : ()=>{
		return `<header class="masthead">
    			<div id="getStart" class="container d-flex h-100 align-items-center">
      			<div class="mx-auto text-center">
        		<h1 class="mx-auto my-0 text-uppercase">HELL Chang Gram</h1>
        		<h2 class="text-white-50 mx-auto mt-2 mb-5">A free, responsive, one page Bootstrap theme created by Start Bootstrap.</h2>
      			</div>
    			</div>
  				</header>`
	}
}