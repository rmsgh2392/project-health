<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>HELL CHANG</title>
<!-- bootstrap css -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<!-- My css -->
<link href="<%=application.getContextPath()%>/resources/css/all.css" rel="stylesheet">
<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/grayscale.css">
<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"> 
<!-- bootstrap cdn ajax, js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

<!-- js -->
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/cmm/main_home.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/navi_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/main.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/footer.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/cmm/cookie.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/user/login_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/user/join_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/join.js"></script>
</head>
<body>
<div id="wrapper">
</div>
<script>
app.run('<%=application.getContextPath()%>')
</script>
</body>
</html>