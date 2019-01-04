import { Injectable } from '@angular/core';
import {Tip} from '../models/tip';

@Injectable()
export class DataStoreService {

  // signup parameters
  signupEmail: string;
  signupPassword: string;

  // cooking tips
  cookingTips: Array<Tip> = [];

  constructor() { }

}
