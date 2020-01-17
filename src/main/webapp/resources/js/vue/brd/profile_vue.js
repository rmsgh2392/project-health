var profile_vue = profile_vue || {}
profile_vue = {
	profile_head : x=>{
		return `
		<title>healthtagram</title>
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link rel="stylesheet" href="${x.css}/styles.css">
		`
	},
	profile_body : ()=>{
		return `
		<style>
		.post-number{
 		color: gray;
		}
		</style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
		<nav class="navbar navbar-light sticky-top bg-light">
		<nav class="navbar navbar-light sticky-top bg-light">
        <a class="navbar-brand" href="#"><i class="fab fa-instagram"></i> Healthtagram</a>
            <ul class="nav">
                

            </ul>
        </nav>
        <br/>
		<sec:authorize access="isAuthenticated()">
		<sec:authentication property="principal" var="principal" />
		</sec:authorize>
		<main id="profile">
		<header class="profile__header">
			<div class="avatar__container">
				<form id="frm_profile_img" action="/user/profileUpload" method="post" enctype="multipart/form-data">
					<input type="file" name="profileImage" style="display: none;"/>
				</form>
				<img src="/upload/" onerror="this.onerror=null; this.src='/images/avatar.jpg'" id="profile_image" style="cursor: pointer"/>
			</div>
			
			<div class="profile__info">
				<div class="profile__title">
					<h1> 유저이름 들어감 </h1>
						
				</div>
				
				<ul class="profile__stats">
					<li class="profile__stat"><span class="profile__stat-number"></span> 게시물</li>
					<li class="profile__stat"><span class="profile__stat-number"></span><a href="#">팔로워</a></li>
					<li class="profile__stat"><span class="profile__stat-number"></span><a href="#">팔로우</a></li>
				</ul>
				
				<div class="profile__bio">
					<p class="profile__fullname"></p>					
					<p></p> 
					<p><a href="" class="profile__link"></a></p>
				</div>
			</div>
		</header>
		
		<div class="profile__photo-grid">
				<c:forEach var="image" items="">
					<div class="profile__photo">
						<a href="image-detail.html"> <img src="/upload/"></a>
						<div class="profile__photo-overlay">
							<span class="profile__photo-stat"> <i class="fa fa-heart"></i></span> 
							<span class="profile__photo-stat"> <i class="fa fa-comment"></i>22</span>
						</div>
					</div>									
				</c:forEach>
		</div>
	</main>

	<div class="profile__overlay">
		<i class="fa fa-times"></i>
		<div class="profile__overlay-container">
			<a href="/auth/password" class="profile__overlay-link">Change password</a> 
			<a href="/logout" class="profile__overlay-link" id="logout">Logout</a> 
			<a href="#" class="profile__overlay-link" id="cancel">Cancel</a>
		</div>
	</div>
		`
	}
}