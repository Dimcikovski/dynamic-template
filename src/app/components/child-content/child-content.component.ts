import { Component, Input, OnInit } from '@angular/core';
import { TemplateContent } from 'src/app/models/response';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.css']
})
export class ChildContentComponent implements OnInit {
  @Input() fieldContent: TemplateContent

  constructor() { }

  ngOnInit(): void {
  }

}
