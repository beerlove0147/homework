import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Title } from '../models/title';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  titlecontact: Title[];
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.titlecontact = this.backendService.getTitleContact();
  }

}
