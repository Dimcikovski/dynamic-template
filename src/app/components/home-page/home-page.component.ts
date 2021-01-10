import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiResponse } from 'src/app/models/response';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  private apiData: ApiResponse
  constructor(public apiService: ApiService, public titleService: Title) {}

  ngOnInit(): void {
    this.InitTemplate();
  }

  InitTemplate() {
    this.apiService
      .RetrieveTemplate()
      .subscribe((data: ApiResponse) =>{
        this.apiData = data[0];
        this.titleService.setTitle(this.apiData.homePage)
        console.log(this.apiData)
      });
  }
}
