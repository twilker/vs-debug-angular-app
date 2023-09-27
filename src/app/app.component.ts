import { Component, OnInit } from '@angular/core';
import { LibraryComponent } from 'library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const component = new LibraryComponent();
    component.init();
  }
  title = 'app';
}
