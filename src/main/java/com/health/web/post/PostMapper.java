package com.health.web.post;

import java.util.List;


import org.springframework.stereotype.Repository;

@Repository
public interface PostMapper {
	public void insertBrd(Post param);
	public List<Post> selectAll();
	public String countArtseq();
	public Post selectBrd(String brdseq);
	public void updateBrd(Post param);
	public void deleteBrd(Post param);
}
