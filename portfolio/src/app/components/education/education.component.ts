import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  
  

  constructor(public educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducation(1).subscribe(data => this.education = data);
  }

}
  