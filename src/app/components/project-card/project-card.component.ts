import { Component, Input } from '@angular/core';
import { Project } from '../../_models/Project';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})

export class ProjectCardComponent {
  @Input() project = {} as Project; 
  bsModalRef?: BsModalRef;

  constructor(){

  }
}
