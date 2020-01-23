package com.health.web.user;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
	public User login(User param);
	public void signUp(User param);
	public int existId(String userid);
	public void createCenter(HashMap<String, String> paramMap);
 }
