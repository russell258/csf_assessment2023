package vttp2023.batch3.csf.assessment.cnserver.repositories;


import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import jakarta.json.JsonString;

@Repository
public class NewsRepository {

	@Autowired
	private MongoTemplate mongo;

	// TODO: Task 1 
	// native query: 
	// db.tags.insert({
	// 	<name> : <data>
	// })
	// Write the native Mongo query in the comment above the method
	public String toInsert (String newsid, String title, String description, String imageurl, JsonString splitTags){
		Document form = new Document();
		form.put("_id", newsid);
		form.put("title",title);
		form.put("postDate", System.currentTimeMillis());
		form.put("description",description);
		form.put("image", imageurl);
		form.put("tags", splitTags);

		Document newDoc = mongo.insert(form, "tags");
		String id = newDoc.getObjectId(newDoc).toString();
		return id;
	}

	// TODO: Task 2  >>>> Commenting as unable to get the query
	// 
	// db.getCollection("tags").aggregate( [
	//{ $group: { _id: null, uniqueCount: {$addToSet:"$tags"}}}
	//] )
	// Write the native Mongo query in the comment above the method
	// public String[] listTopTenTags(String tag){

		//Aggregation pipeline
	// 	return mongo.aggregate()
	// }

	// TODO: Task 3
	// Write the native Mongo query in the comment above the method
	// query 
	// use postDate in parameters to find by minutes.
	//
}
