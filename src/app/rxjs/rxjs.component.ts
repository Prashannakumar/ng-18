import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit {
  subject: Subject<string> = new Subject();

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.subject.pipe(switchMap(url => this.http.get(url))).subscribe(data => console.log('Api res: ', data));

    setInterval(()=>{
      document.getElementById('btn')?.click()
    }, 10000)
  }

  makeApiCall(){
    this.subject.next('https://jsonplaceholder.typicode.com/photos')
  }

}
