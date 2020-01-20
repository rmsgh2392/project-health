function setCookie(name, value) {
    alert('value 값' + value)
    document.cookie = name + '=' + value ;
}
function getCookie(name) {
	var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
}
function deleteCookie() {
    document.cookie = "";
}