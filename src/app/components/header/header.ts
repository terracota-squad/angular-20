import { AfterViewChecked, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewChecked {

  constructor(protected router: Router) { }

  ngAfterViewChecked(): void { }


}
