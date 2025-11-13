import { Component, output, OnInit, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  navToggle = output<boolean>();
  handleClick() {
    this.navToggle.emit(true);
  }
  languages = [
    { "shortForm": "en", "fullForm": "English" },
    { "shortForm": "pt-BR", "fullForm": "Português" }];
  defaultLanguage = "en";
  currentLanguage = this.defaultLanguage;
  constructor(private translate: TranslateService, @Inject(DOCUMENT) private document: Document) {
    this.translate.addLangs(this.languages.map(l => l.shortForm));
  }

  ngOnInit() {
    try {
      let storedLanguage = JSON.parse(localStorage.getItem('userLanguage')!);
      if (this.languages.some(l => l.shortForm === storedLanguage)) {
        this.translate.setFallbackLang(storedLanguage);
        this.translate.use(storedLanguage);
        this.document.documentElement.lang = storedLanguage
      }
      else {
        this.translate.setFallbackLang(this.defaultLanguage);
        this.translate.use(this.defaultLanguage);
        this.document.documentElement.lang = this.defaultLanguage
      }
    }
    catch (e) {
      this.translate.setFallbackLang(this.defaultLanguage);
      this.translate.use(this.defaultLanguage);
      this.document.documentElement.lang = this.defaultLanguage
    }

    this.currentLanguage = this.translate.getCurrentLang();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
    localStorage.setItem('userLanguage', JSON.stringify(language));
    this.document.documentElement.lang = language
  }

}
