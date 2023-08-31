package vttp2023.batch3.csf.assessment.cnserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.JsonString;
import vttp2023.batch3.csf.assessment.cnserver.repositories.ImageRepository;
import vttp2023.batch3.csf.assessment.cnserver.repositories.NewsRepository;

@RestController
@RequestMapping()
public class NewsController {

	@Autowired
	NewsRepository newsRepo;

	@Autowired
	ImageRepository imageRepo;

	// TODO: Task 1
	@PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA)
	public ResponseEntity<String> postUpload(@RequestPart String title, @RequestPart MultipartFile file, 
							@RequestPart String description, @RequestPart JsonString tags ){
		String newsid = imageRepo.saveImage(file);
		newsRepo.toInsert(newsid, title, description, imageurl, tags);

		//return object id
	}

	// TODO: Task 2


	// TODO: Task 3

}
