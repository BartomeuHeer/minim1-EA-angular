import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/interfaces/complaint.interface';
import { CompalintService } from 'src/app/services/compalint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
  complaint: Complaint;
  id: string;
  constructor(private compSrv: CompalintService,private aRouter:ActivatedRoute, private router: Router) { 
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.compSrv.getOne(this.id).subscribe(res =>{
      if(res.status == 200){
        this.complaint = res.body!;
      }
    })
  }
  delete(){
    this.compSrv.deleteOne(this.id).subscribe(res =>{
      if(res.status == 200){
        this.router.navigate(['/complaints']);
      }
    })
  }

}
