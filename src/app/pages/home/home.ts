import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Repos } from '../../models/repos.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Loading } from "../../components/loading/loading";

@Component({
  selector: 'app-home',
  imports: [MatCardModule, MatButtonModule, TranslateModule, MatIconModule, Loading],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  projects: Repos['items'] = [];

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.githubService.getRepos().subscribe({
      next: (repos) => {
        this.projects = repos.items;
      },
      error: (e) => {
        console.error('Error fetching repositories: ', e);
      }
    });
  }

}
