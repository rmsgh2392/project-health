var routine_vue = routine_vue || {}
routine_vue = {
	routine_style : x=>{
		return `<style>
				.card-img-wrap {
					overflow: hidden;
					position: relative;
				}
				.card-img-wrap:after {
					content: '';
					position: absolute;
					top : 0;left: 0; right: 0; bottom: 0;
					background: rgba(255,255,255,0.3);
					opacity: 0;
					transition: opacity .25s;
					text-align : center;
				}
				.card-img-wrap img {
					transition: transform .25s;
					width: 100%;
				}
				.card-img-wrap:hover img {
					transform: scale(1.2);
				}
				.card-img-wrap:hover:after {
					opacity: 1;
				}
				#routin_page{
					background-image: url(${x.img}/bakimage.jpg);
				}
				</style>`
	},
	routine_page : x=>{
		return `<div id="routin_page" class="content">
					<div class="container" id="routin">
						<div class="card-deck row" style="padding-top : 50px;">
							<div class="col-xs-12 col-sm-6 col-md-4"
								style="padding-top: 15px;
										padding-bottom: 15px;
										margin-left: 0px;
										margin-right: 10px;">
								<div class="card" style="width : 500px;">
									<div id="newRoutine" class="card-img-wrap">
										<img class="card-img-top" src="${x.img}/card2.jpg" alt="Card image cap" style="height : 700px;">
											<a href="#!"><div class="mask rgba-white-slight"></div></a>
									</div>
									<div class="card-body" style="background-color : whitesmoke;">
									<h4 class="card-title">새 루틴 생성</h4>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
				<div class="col-xs-12 col-sm-6 col-md-4"
				style="padding-left: 15px;
						margin-left: 200px;
						padding-top: 15px;
						padding-bottom: 15px;">
				<div class="card" style="width : 500px; height : 825px;">
					<div class="card-img-wrap">
					<img class="card-img-top" src="${x.img}/card3.jpg" alt="Card image cap" style="height : 701px;">
					<a href="#!"><div class="mask rgba-white-slight"></div></a>
					</div>
					<div class="card-body" style="background-color : tomato;">
					<h4 class="card-title">기존 루틴 보러가기</h4>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
				</div>
				</div>
				</div>
				</div>`
	}
}