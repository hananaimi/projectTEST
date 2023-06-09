import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Feedbacks } from '../models/feedbacks.models';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  feedbacks: Feedbacks[]=[]

  constructor(private http: HttpClient) {}

  getAllFeedbacks(): Observable<Feedbacks[]>{
    return this.http.get<Feedbacks[]>(`${environment.apiUrl}/feedbacks?_sort=id&_order=desc`)
  }
  
  getFeedbacksByIdMeal(idMeal: string): Observable<Feedbacks[]> {
    return this.http.get<Feedbacks[]>(`${environment.apiUrl}/feedbacks?idMeal=${idMeal}&_sort=id&_order=desc`);
  }

 postFeedback(body: any){
  return this.http.post(`${environment.apiUrl}/feedbacks`, body)
 }
}
