package vttp2023.batch3.csf.assessment.cnserver.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.JsonString;
import vttp2023.batch3.csf.assessment.cnserver.models.News;
import vttp2023.batch3.csf.assessment.cnserver.models.TagCount;
import vttp2023.batch3.csf.assessment.cnserver.repositories.ImageRepository;
import vttp2023.batch3.csf.assessment.cnserver.repositories.NewsRepository;

@Service
public class NewsService {
	
	@Autowired
	ImageRepository imageRepo;

	@Autowired
	NewsRepository newsRepo;

	// TODO: Task 1
	// Do not change the method name and the return type
	// You may add any number of parameters
	// Returns the news id
	public String postNews(String title, MultipartFile file, String description, JsonString tags) {

		String newsid = imageRepo.saveImage(file);
		String imageurl = "cloud.digitalocean.com/" + newsid;
		newsRepo.toInsert(newsid, title, description, imageurl, tags);

		return newsid;
	}
	 
	// TODO: Task 2
	// Do not change the method name and the return type
	// You may add any number of parameters
	// Returns a list of tags and their associated count
	public List<TagCount> getTags(/* Any number of parameters */) {
		return new LinkedList<>();
	}

	// TODO: Task 3
	// Do not change the method name and the return type
	// You may add any number of parameters
	// Returns a list of news
	public List<News> getNewsByTag(/* Any number of parameters */) {
		return new LinkedList<>();
	}
	
}
