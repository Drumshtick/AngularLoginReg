import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable } from 'rxjs';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  
}
