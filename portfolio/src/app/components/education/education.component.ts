import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/services/education.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
  
  newForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  dataEducation: Education = new Education;

  editForm = new FormGroup({
    id : new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    person: new FormControl('')

  })
  
  suscription: Subscription = new Subscription; 

  constructor(public educationService: EducationService, private router: Router, private activerouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.educationService.getEducation(1).subscribe(data => this.education = data);
    
    this.suscription = this.educationService.refresh$.subscribe(() =>{
      this.educationService.getEducation(1).subscribe(data => this.education = data);
    })
   
  }

  postForm(form:Education){
    
    this.educationService.postEducation(form, 1).subscribe(data => console.log(data));
    

    
  }

  deleteById(id: any){
    
    this.educationService.deleteEducation(id).subscribe(data => console.log(data));
    
    
  }

  editById(id: any){
    this.educationService.getEducationById(id).subscribe(data => this.dataEducation = data);
    this.editForm.setValue({
      'id': this.dataEducation.id,
      'title': this.dataEducation.title,
      'description': this.dataEducation.description,
      'person': this.dataEducation.person

    })
    console.log(this.editForm.value);
 }

}
  