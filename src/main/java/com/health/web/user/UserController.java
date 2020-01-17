package com.health.web.user;
import java.util.Arrays;
import java.util.Map;

import java.util.function.Consumer;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Box;
import com.health.web.pxy.Trunk;
import com.health.web.util.Printer;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired User user; @Autowired UserMapper userMapper; @Autowired Printer print; 
	@Autowired Trunk<Object> trunk; @Autowired Box<Object> box;
	
	
	@PostMapping("/join")
	public void signUp(@RequestBody User param) {
		print.accept("회원가입 진입");
		print.accept("ajax에서 넘어온 데이터 : " + param);
		Consumer<User> consumer = t-> userMapper.signUp(t);
		consumer.accept(param);
	}
	@PostMapping("/login")
	public Map<?, ?> signIn(@RequestBody User param){
		print.accept("로그인 진입");
		print.accept("ajax에서 넘어온 아이디 & 비번 :" +param.getUserid() +'\t'+ param.getPasswd());
		Function<User, User> function = t-> userMapper.login(t);
		user = function.apply(param);
		String result = (user != null) ? "success" : "fail" ;
		print.accept("성공여부 : "+result +"\n" + user);
		trunk.clear();
		trunk.put("msg", result);
		trunk.put("user", user);
//		trunk.put(Arrays.asList("msg","user"), Arrays.asList(result,user));
		print.accept("보내는 값 : "+ trunk.get());
		return trunk.get();
	}
	@GetMapping("/exist/{userid}")
	public Map<?,?> dupleCheck(@PathVariable String userid){
		return null;
	}
}
