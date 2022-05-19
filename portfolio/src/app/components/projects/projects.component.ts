import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project : Project[] = [];

  newForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    urlImage : new FormControl('')
  })

  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProject(1).subscribe(data => this.project = data);
  }

  postForm(form: Project){
    this.projectService.postProject(form, 1).subscribe(data => console.log(data));
  }

  deleteById(id: any){
    this.projectService.deleteProject(id).subscribe(data => console.log(data));
  }

}
