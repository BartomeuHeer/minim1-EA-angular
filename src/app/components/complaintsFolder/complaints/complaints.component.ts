import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Complaint } from 'src/app/interfaces/complaint.interface';
import { CompalintService } from 'src/app/services/compalint.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaints: Complaint[];
  constructor(private compSrv: CompalintService, private router: Router) { }

  rowData$!: any;

  colDef: ColDef[] = [
    {field: '_id'},
    {field: 'dayOfCreation'},
    {field: 'userComplainted'}
  ];
  
  onCellClicked( e: CellClickedEvent): void {
    this.router.navigate(['/complaints/', e.data._id]);
  }
  ngOnInit(): void {
    this.compSrv.getAll().subscribe(res => {
      if(res.status == 200){
        this.complaints = res.body!;
        this.rowData$ = this.complaints.map(({ _id, dayOfCreation, userComplainted }) => (
          { _id, dayOfCreation, userComplainted }))
      }
    })
  }

}
