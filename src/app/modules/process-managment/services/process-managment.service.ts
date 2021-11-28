import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Document } from '../interfaces/document.interface';
import { Indicator } from '../interfaces/indicator.interface';
import { Process } from '../interfaces/process.interface';
import { Sheet } from '../interfaces/sheet.interface';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagmentService {
  baseUrl = environment.hostApi;

  constructor(private http:HttpClient) { }


  createProcessMap(data:any){
    return this.http.post(this.baseUrl + 'process/bulk',data)
  }

  createProcess(process:Process){
    return this.http.post(this.baseUrl + 'process', process);
  }

  getProcess(){
    return this.http.get<Process[]>(this.baseUrl +'process')
  }

  getProcessById(id:number){
    return this.http.get<Process>(this.baseUrl + `process/${id}` );
  }

  createOrUpdateSheet(sheet:Sheet){
    return this.http.post(this.baseUrl+ 'sheet', sheet);
  }

  getSheetById(id:number){
    return this.http.get(this.baseUrl+ `sheet/${id}`);
  }

  createOrUpdateFlowDiagram( process:Process ){
    return this.http.patch(this.baseUrl + `process/${process.id}`, process )

  }

  createOrUpdateDocument(document:Document){
    return this.http.post(this.baseUrl + 'document',document)
  }

  deleteDocument(document:Document){
    return this.http.delete(this.baseUrl + `document/${document.id}`)
  }


  createOrUpdateIndicator(indicator:Indicator){
    return this.http.post(this.baseUrl + 'indicator',indicator)
  }

   deleteIndicator(indicator:Indicator){
    return this.http.delete(this.baseUrl + `indicator/${indicator.id}`)
  }



}
