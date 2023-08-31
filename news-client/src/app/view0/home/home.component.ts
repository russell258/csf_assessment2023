import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder){
}

// to retrieve parameterized routes
// const tagName = this.activatedRoute.snapshot.params.tag;

// on select of time, should trigger changes and make http.get request
//


list(){
  console.log("tags clicked")
  //list all posts from the selected tag
}

tagArray: []=[];




}
