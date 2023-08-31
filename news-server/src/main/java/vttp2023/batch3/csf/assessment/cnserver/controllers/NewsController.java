package vttp2023.batch3.csf.assessment.cnserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.json.Json;
import jakarta.json.JsonString;
import vttp2023.batch3.csf.assessment.cnserver.repositories.ImageRepository;
import vttp2023.batch3.csf.assessment.cnserver.repositories.NewsRepository;
import vttp2023.batch3.csf.assessment.cnserver.services.NewsService;

@RestController
@RequestMapping()
public class NewsController {

	@Autowired
	NewsService newsSvc;

	// TODO: Task 1
	@PostMapping(path="/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<jakarta.json.JsonObject> postUpload(@RequestPart String title, @RequestPart MultipartFile file, 
							@RequestPart String description, @RequestPart JsonString tags){

		String newsid = newsSvc.postNews(title, file, description, tags);

		//return to frontend in JSON Payload
		jakarta.json.JsonObject payload = Json.createObjectBuilder().add("newsId",newsid).build();

		return ResponseEntity.ok(payload);
	}

	// TODO: Task 2


	// TODO: Task 3

}
