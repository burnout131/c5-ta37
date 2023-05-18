import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/database.json').subscribe(data => {
      this.characters = data.characters;
    }),
      () => {
        console.log("Something went wrong");
      };
  }

}
