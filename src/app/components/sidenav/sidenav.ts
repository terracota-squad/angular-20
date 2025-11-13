import { Component } from '@angular/core';
import { Menu } from "../menu/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-sidenav',
  imports: [Menu, MatSidenavModule, MatListModule,
    RouterLink, RouterLinkActive, TranslateModule, MatIconModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav {

}
