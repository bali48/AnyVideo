import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAPIClass } from '../class/baseAPI.class';
import {endpointsAPI} from '../class/endpointsAPI';
@Injectable({
  providedIn: 'root'
})
export class DownloderService extends BaseAPIClass{

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.baseUrl = endpointsAPI.API_ENDPOINT_DOWNLOAD;
  }

  downloadVideo(data:any) {
    return this.httpClient.post(`${this.baseUrl}`, data);
    // return this.http.post(this.baseUrl + url, body)
  }

}
