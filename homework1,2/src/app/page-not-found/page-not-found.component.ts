import { Component, OnInit } from '@angular/core';
import { Title } from '../models/title';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  titlepnf: Title[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.titlepnf = this.backendService.getTitlePNF();
  }

}
