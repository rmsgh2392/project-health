var mypage_vue = mypage_vue || {}
mypage_vue ={
	mypage_main:()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageMain.css"/>
<!------ Include the above in your HEAD tag ---------->
    <h1 class="text-center">어서오세요 User님</h1>
	<div class="container">
		<div class="row">
	
		<!--team-1-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/9c27b0/fff?text=Dilip" class="img-fluid" />
	<h3>회원정보 수정</h3>
	<p>Modifying member information</p>
	</div>
	
	<div class="team-back">
	<span>
		비밀번호, 전화번호 등</br>
		개인정보 수정을 원하신다면</br>
		이 쪽으로 들어와 주세요!</br>
	</span>
	</div>
	</div>
	</div>
	
	<!--team-2-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/336699/fff?text=Dilip" class="img-fluid" />
	<h3>회원 그래프 보기</h3>
	<p>View Member Graphs</p>
	</div>
	
	<div class="team-back">
	<a href="#">
		<span>
		부위 별 운동횟수,</br>
		단백질 섭취 패턴 등</br>
		자신만의 운동법과</br>
		식이요법을 확인해보세요!
		</span>
	</a>
</div></div></div>
	
	<!--team-3-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/607d8b/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque.
	</span>
	</div>
	
	</div>
	</div>
	<!--team-3-->
	
	<!--team-4-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/4caf50/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque.
	</span>
	</div>
	
	</div>
	</div>
	<!--team-4-->
	
	<!--team-5-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/e91e63/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque.
	</span>
	</div>
	
	</div>
	</div>
	<!--team-5-->
	
	<!--team-6-->
	<div class="col-lg-4">
	<div class="our-team-main">
	
	<div class="team-front">
	<img src="http://placehold.it/110x110/2196f3/fff?text=Dilip" class="img-fluid" />
	<h3>Dilip Kevat</h3>
	<p>Web Designer</p>
	</div>
	
	<div class="team-back">
	<span>
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque penatibus et magnis dis parturient montes,
	Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
	natoque.
	</span>
	</div>
	</div>
	</div>
	<!--team-6-->
	</div>
	</div>`
	},
	mypage_graph: ()=>{
		return `
		<link rel="stylesheet" href="/web/resources/css/mypageGraph.css"/>
		<!--가로막대그래프-->
<div class="graphs">
/*테이블로 나눠볼것*/
		<div class="countEx">부위 별 운동 횟수
			<div class="graph stack1">
				<span style="width: 75%">가슴 75회</span>
			</div>
			<div class="graph stack2">
				<span style="width: 25%">등 25회</span> 
			</div>
			<div class="graph stack3">
				<span style="width: 33%">어깨 33회</span>
			</div>
			<div class="graph stack4">
				<span style="width: 45%">이두 45회</span>
			</div>
			<div class="graph stack5">
				<span style="width: 51%">삼두 51회</span>
			</div>
			<div class="graph stack6">
				<span style="width: 34%">하체 34회</span>
			</div>
			<div class="graph stack7">
				<span style="width: 85%">코어 85회</span>
			</div>
		</div>
	<!--프로그래스 바-->
		<div id="rateEx" class="container" style="width : 350px; height : 100px; text-align:center; font-size : 20px; font-weight:bold;">월 운동량 달성률
		<div class="row">
			<div class="col-md-3 col-sm-6">
				<div class="progress blue">
					<span class="progress-left">
						<span class="progress-bar"></span>
					</span>
					<span class="progress-right">
						<span class="progress-bar"></span>
					</span>
					<div class="progress-value">90%</div>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="progress yellow">
					<span class="progress-left">
						<span class="progress-bar"></span>
					</span>
					<span class="progress-right">
						<span class="progress-bar"></span>
					</span>
					<div class="progress-value">75%</div>
				</div>
			</div>
		</div>
	</div>
</div>
		`
	}
}