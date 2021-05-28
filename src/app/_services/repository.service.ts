import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EnvironmentUrlService } from "./environment-url.service";

@Injectable()
export class RepositoryService {
    constructor(
        private httpClient: HttpClient,
        private environmentUrlService: EnvironmentUrlService,
    ) {

    }

    // GET
    public getData(route: string): Observable<any> {
        return this.httpClient.get(
            this.createCompleteRoute(route, this.environmentUrlService.baseUrl),
            this.generateHeaders());
    }

    // POST
    public create(route: string, body: any): Observable<any> {
        return this.httpClient.post(
            this.createCompleteRoute(route, this.environmentUrlService.baseUrl),
            body,
            this.generateHeaders()
        );
    }

    // PUT
    public update(route: string, body: any): Observable<any> {
        return this.httpClient.post(
            this.createCompleteRoute(route, this.environmentUrlService.baseUrl),
            body,
            this.generateHeaders()
        );
    }

    // DELETE
    public delete(route: string): Observable<any> {
        return this.httpClient.delete(
            this.createCompleteRoute(route, this.environmentUrlService.baseUrl),
            this.generateHeaders()
        );
    }

    private createCompleteRoute(route: string, envAddress: string) {
        return `${envAddress}/${route}`;
    }

    private generateHeaders() {
        return {
            headers: new HttpHeaders({
                'Authorization': 'Basic YW5pOmVlZTEyMw=='
            })
        };
    }
}