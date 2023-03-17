import { Injectable } from '@angular/core';

export interface Freelancer{
  id: number,
  name: string,
  surname: string,
  email: string,
  role: string,
  created_at: string
}

export interface Company{
  id: number,
  name: string,
  email: string,
  created_at: string
}

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor() { }
}
