package com.health.web.post;

import java.util.Arrays;


import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.health.web.pxy.Trunk;

@RestController
@RequestMapping("/brds")
public class PostCtrl {
	@Autowired PostMapper postMapper;
	@Autowired Trunk<Object> trunk;
	
	@PutMapping("/")
	public Map<?,?> writeBrd(@RequestBody Post param){
		System.out.println("글쓰기 들어옴"+ param.getContent());
		Consumer<Post> c = t -> postMapper.insertBrd(t);
		c.accept(param);
		
		Supplier<String> s =()->  postMapper.countArtseq();
		trunk.put(Arrays.asList("msg","count"),Arrays.asList("SUCCESS",s.get()));
		return trunk.get();
	}
	
	@GetMapping("/list")
	public List<Post> list(){
		System.out.println("리스트 들어옴");
		Supplier<List<Post>> s= ()-> postMapper.selectAll();
		return s.get(); 
	}
	
	@GetMapping("/read/{seq}")
	public Post readBrd(@PathVariable String seq) {
		Supplier<Post> c = ()-> postMapper.selectBrd(seq);
		return c.get();
	}
	
	@PutMapping("/update/{seq}")
	public Post updateBrd(@PathVariable String seq, @RequestBody Post param) {
		System.out.println("수정 들어옴");
		Consumer<Post> c = t -> postMapper.updateBrd(param);
		c.accept(param);
		Supplier<Post> d = ()-> postMapper.selectBrd(seq);
		return d.get();
		
	}
	
	@DeleteMapping("/{seq}")
	public Map<?,?> deleteBrd(@PathVariable String brdseq,@RequestBody Post param){
		Consumer<Post> c = t-> postMapper.deleteBrd(param);
		c.accept(param);
		trunk.put(Arrays.asList("msg"), Arrays.asList("success"));
		return trunk.get();
	}
}
