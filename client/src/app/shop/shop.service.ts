import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';

@Injectable({
  providedIn: 'root' // note pas de besoin de les ajouter d'ajouter dans appmodule providers 
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  constructor(private http: HttpClient){ }

  getProducts() {

    return this.http.get<IPagination>(this.baseUrl + 'products?pageSize=50');
  }
}
