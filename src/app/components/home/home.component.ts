import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthenticationService } from '../../service/authentication.service';  
import { CommonserviceService } from '../../service/commonservice.service';
import { ExcelService } from '../../service/excel.service';
import { PERSONS, Person } from '../../service/model';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
interface jsPDFCustom extends jsPDF {
  autoTable: (options: UserOptions) => void;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  dataResult:any=[];
  persons: Person[]=[];
  constructor(private excelService: ExcelService,private router: Router, private authenticationService: AuthenticationService,private service: CommonserviceService) { 
    this.excelService = excelService;
    this.persons = PERSONS;
  } 
  ngOnInit() {  
    this.getPDF();
  } 
  exportToExcel(event:any) {
    this.excelService.exportAsExcelFile(this.dataResult, 'persons');
  }
  logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  
  /* GET API Calling */
	getPDF() {
		this.service.getApi().subscribe((getListData: any) => {
			this.dataResult = getListData;
      console.log(this.dataResult)
		},
			(error: any) => {
				//	this.noData = true;
			}
		);
	}
  generatePdf() {
    const doc = new jsPDF() as jsPDFCustom;
    let finalY = 0;
    doc.autoTable({
      html: '#imgTable',
      bodyStyles: { minCellHeight: 10 },
      theme: 'grid',
      styles: { valign: 'middle', overflow: 'linebreak', halign: 'center', minCellHeight: 5 },
      pageBreak: 'avoid',
      columnStyles: {
        2: { cellWidth: 100, minCellHeight: 5 },
      },
      headStyles: { fillColor: '#f2f2f2', textColor: '#000', fontStyle: 'bold', lineWidth: 0.5, lineColor: '#ccc' },
      didDrawCell: function (hookData) {
        if (hookData.section === 'body') {
          if (hookData.row.index === 0) {
            console.log(Object.values(hookData.row.cells));
            for (const cell of Object.values(hookData.row.cells)) {
              cell.styles.fontStyle = 'bold';
              cell.styles.fillColor = [211, 211, 211];
            }
            //  doc.text("Page Title", hookData.settings.margin.top, 10);
            doc.setFontSize(10).setFont('undefined', 'bold');
            doc.text(
              "USER DETAILS AND HISTORY",
              85,
              8
            );
          }
        }

      },

    

    });

    doc.deletePage(1)

    doc.save('user_details.pdf');

  }
}
