import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
//import {jsPDF} from 'jspdf';
import { LogsService } from 'src/app/services/logs.service';
import { Value } from 'src/app/models/value';
import { Router, ActivatedRoute } from '@angular/router';
import { ViajeService } from 'src/app/services/viaje.service';
import { ViajeI } from 'src/app/models/viaje';
declare var jsPDF: any;

@Component({
  selector: 'app-exportpdf',
  templateUrl: './exportpdf.component.html',
  styleUrls: ['./exportpdf.component.css']
})
export class ExportpdfComponent implements OnInit {

  name = 'Angular Html To Pdf ';
  values:Value[]=[];
  idViaje:string;
  count:number;
  t_begin:Date;
  t_end:Date;
  reportCreated:boolean=false;
  id_user:string;

  viaje:ViajeI;

  constructor( private _logsService:LogsService,
                  private _viajeService:ViajeService,
                  private router:ActivatedRoute,
                private _router:Router ) { 

    this.idViaje = this.router.snapshot.paramMap.get('id');
    this.reportCreated=false;
  }

  ngOnInit(): void {

    this._logsService.getValues( Number(this.idViaje) )
    .subscribe(
      (res)=>{
        this.values=res;
        console.log(res);
        
        if(this.values.length>=1){
          this.count = this.values.length -1;
        console.log(this.count);
        this.t_begin=this.values[0].time_transmision;
        this.t_end=this.values[this.count].time_transmision;
        
        this.id_user=localStorage.getItem('id_user');
        }
      }
    );


    this._viajeService.getViajesByidViaje(Number(this.idViaje))
    .subscribe(
    (res)=>{
      this.viaje=res;
      console.log(res);
      this.reportCreated=true;
    })

  }


  title = 'exports-pdf';
  @ViewChild('exports') exports: ElementRef;

  public print(): void {

    //const doc = new jsPDF('p', 'pt', 'a4');
    const doc = new jsPDF('p', 'pt', 'a4',true);

    const content = this.exports.nativeElement;

    const margins = {
      top: 60,
      bottom: 40,
      left: 40,
      width: 552
    };
    console.log(doc);
      doc.fromHTML(content.innerHTML, margins.left, margins.top, {}, function () {
        doc.save("export.pdf");
      }, margins);
  }

  /*
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;


  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML, 15, 15, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save("tableToPdf.pdf");
  }
  */

}