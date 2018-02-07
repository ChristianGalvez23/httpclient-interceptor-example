import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { log } from "util";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CountriesService {
  url = "https://restcountries.eu/rest/v2/all";

  constructor(private _http: HttpClient) {}

  getCountries(): Observable<any> {
    return this._http.get(this.url);
  }
}
