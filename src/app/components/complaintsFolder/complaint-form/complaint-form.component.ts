import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/interfaces/complaint.interface';
import { CompalintService } from 'src/app/services/compalint.service';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent implements OnInit {

  constructor(private compSrv: CompalintService, private router: Router) { }

  complaintForm = new FormGroup({
    creator: new FormControl('', Validators.required),
    userComplinted: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  onSubmit(){
    const newComplaint: Complaint = <Complaint><unknown>this.complaintForm.value
    this.compSrv.addOne(newComplaint).subscribe(res=>{
      if(res.status == 200){
        this.router.navigate(['/complaints/']);
      }
    })
    
  }
}
