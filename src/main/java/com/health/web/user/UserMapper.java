package com.health.web.user;

import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
	public User login(User param);
	public void signUp(User param);
}
