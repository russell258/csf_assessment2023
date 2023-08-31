import { Component, ElementRef, Input, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UploadService } from 'src/app/upload.service';

//View 2 Task 1 Post News

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  uploadSvc = inject(UploadService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  success: boolean = false;

  @ViewChild('file') imageFile: ElementRef;

  @Input()
  splitTags: string[] = [];

  //declare formgroup to hold title, photo (upload), description, tags
  postForm : FormGroup = this.fb.group({
    title: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
    'photo': this.fb.control<''>,
    description: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
    tags: this.fb.control<string[]>(this.splitTags)
  });

  //declare formBuilder
  constructor(private fb: FormBuilder){}

  ngOninit():void{
    this.postForm;
  }

  submit(){
    console.log("Submit function clicked");
    const value = this.postForm.value;
    this.uploadSvc.upload(value['title'],this.imageFile,value['description'],value['tags'])
                  .then(response=>{
                    console.info('>>> response: ' + response);
                    //call function to turn boolean to true and activate ngIf
                    this.alert(true, response);
                    this.router.navigate(['/upload'],{relativeTo: this.route});
                  })
                  .catch(
                    error => {
                      console.error('error',error);
                      //call function to turn boolean to false and activate ngIf
                      this.alert(false, error);

                  })
  }

  alert(success: boolean, message: string){
    this.success=success;
    if (success){
      //go back to View 0 home component
      this.router.navigate(['/home']);
    }
    return message;
  }

  addTag(tagshtml:string){
    // pass in tagshtml local reference and remove duplicates
    this.splitTags = tagshtml.split(" ");
    this.splitTags = this.unique(this.splitTags);
    console.log("addTag clicked, split Tags are: " + this.splitTags);
  }

  //function to remove duplicates from string array
  unique(splittag: string[]) {
    return splittag.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

  removeTag(idx:number){
    this.splitTags.splice(idx,1);
    console.log("removeTag clicked "+ idx);
    console.log("splitTags are now: " + this.splitTags);
  }

}
