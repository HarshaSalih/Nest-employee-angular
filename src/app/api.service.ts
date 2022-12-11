import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  employeeLogin=(datatoSend:any)=>
  {
    return this.http.post("http://localhost:8080/userLogin",datatoSend)
  }

  addEmployee=(datatoSend:any)=>
  {
    return this.http.post("http://localhost:8080/addEmployee",datatoSend)
  }

  addTask=(datatoSend:any)=>
  {
    return this.http.post("",datatoSend)
  }

  viewMyTask=(datatoSend:any)=>
  {
    return this.http.post("",datatoSend)
  }

  viewTaskStatus=(datatoSend:any)=>
  {
    return this.http.post("",datatoSend)
  }

}
