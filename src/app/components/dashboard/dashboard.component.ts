import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonserviceService } from '../../service/commonservice.service';
import { SelectionModel } from '@angular/cdk/collections';



@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	customLoader: boolean = false;
	userSelect:any[] = [];
	documenttypes :any[] = [];
	documenttypes1 :any[] =[];
	getDataForm: FormGroup;
	jobForm = {"value":null}
	constructor(private service: CommonserviceService, private fb: FormBuilder) {
		this.getDataForm = this.fb.group({
			month1: new FormControl(null),
			year1: new FormControl(null),
		})
	}
	ngOnInit() {
	this.getfilterData();
	this.getMyData();
	
	}
getMyData(){
	this.service.expensedoclist().subscribe((getListData: any) => {
	
		console.log(getListData.expenses)
		this.documenttypes = getListData.expenses
	
	},
		(error: any) => {
			//	this.noData = true;
		}
	);
}

	submitExpired(){
		
		this.service.expensedoclist().subscribe((getListData: any) => {
			this.documenttypes = getListData.expenses
			const requestVal = this.documenttypes.map(({ docName, ...item }) => item);
			console.log(requestVal)
		this.service.submitexpense(requestVal).subscribe((data: any) => {
			this.customLoader = false;

		},
			(error) => {

			}
		)
		
		},
			(error: any) => {
				//	this.noData = true;
			}
		);
		
	
	}
	/* GET API Calling */
	getfilterData() {
		this.customLoader = true;
		const monthVal:string = 'JANUARY';
		const yearVal:number = 2022;
		this.service.getsampleprojectFilterDetailsData(monthVal, yearVal).subscribe((getListData: any) => {
			console.log(getListData.expenses)
		},
			(error: any) => {
				//	this.noData = true;
			}
		);
	}
	
	/* POST API Calling */
	postsampleprojectDataData() {
		this.customLoader = true;
		this.jobForm.value = null;
		let requestVal = JSON.stringify(this.jobForm.value);
		this.service.entersampleprojectData(requestVal).subscribe((data: any) => {
			this.customLoader = false;
		},
			(error) => {


			}
		)
	}

}



