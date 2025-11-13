import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repos } from '../models/repos.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  private user = 'GuilhermeCCunha'
  private reposApiUrl = `https://api.github.com/search/repositories?q=user:${this.user}+stars:>0`;
  constructor(private httpClient: HttpClient) { }

  getRepos(): Observable<Repos> {
    return this.httpClient.get<Repos>(this.reposApiUrl);
  } 
   
}
