package com.health.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

@Component("/crawler") @Lazy
public class CrawlingProxy {
	@Autowired Box<HashMap<String, String>> box;
	@Autowired Trunk<String> trunk;
	
	public ArrayList<HashMap<String, String>> healthCenterCrawl(int page){
		final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
		String url = "https://map.naver.com/v5/api/search?caller=pcweb&query=%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%97%AC%EC%8A%A4%EC%9E%A5&type=all&searchCoord=126.92406177520753;37.55662179786924&page=1&displayCount=20&isPlaceRecommendationReplace=true&lang=ko";
		JSONObject json = null;
		try {
			Connection.Response html =  Jsoup.connect(url)
					.method(Connection.Method.GET)
					.userAgent(USER_AGENT)
					.ignoreContentType(true)
					.execute();
					json = new JSONObject(html.parse().select("body").text());
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONArray jsonArr = json.getJSONObject("result")
				.getJSONObject("place")
				.getJSONArray("list");
		for(int i=0;i <jsonArr.length()-1; i++) {
			JSONObject j = jsonArr.getJSONObject(i);
			//name, tel, address, reviewCount
			trunk.put("name",j.get("name").toString());
			trunk.put("address", j.get("address").toString());
			trunk.put("phone", j.get("tel").toString());
			trunk.put("review",j.get("reviewCount").toString());
			
		}
		return null;
		
	}
}
