import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  http = inject(HttpClient);

  upload(title: string, photo: File, description: string, splitTags: string[]){

    //create multipart

    const form = new FormData();
    form.set("title", title);
    form.set("photo", photo);
    form.set("description",description);
    form.set("splitTags", splitTags);

    return firstValueFrom(
      this.http.post<any>('upload',form)
    )

  }

}
