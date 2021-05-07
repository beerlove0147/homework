import { Injectable } from '@angular/core';
import { Title } from './models/title';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  getTitleAbout(): Title[]{
    return [{
      name: 'About Me'
    }]
  }

  getTitleContact(): Title[]{
    return [{
      name: 'Contact Me'
    }]
  }

  getTitlePNF(): Title[]{
    return [{
      name: 'Page Not Found !!!'
    }]
  }

  getTitleSkills(): Title[]{
    return [{
      name: 'Skills'
    }]
  }

  getSkills(): Title[]{
    return [{
      name: 'วาดรูป'
      },
      {
        name: 'เล่นเกม'
      },
      {
        name: 'กระบี่กระบอง'
      },
      {
        name: 'ทำอาหาร'
      },
      {
        name: 'บิน'
      },
      {
        name: 'Chaos Magic'
      },
      {
        name: 'Hecate'
    }]
  }
}

