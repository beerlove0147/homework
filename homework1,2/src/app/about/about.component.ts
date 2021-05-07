import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '../models/title';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private backendService: BackendService) { }
  titleabout: Title[];
  ngOnInit(): void {
    this.titleabout = this.backendService.getTitleAbout();
  }

}
