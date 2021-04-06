import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*.theme-wrapper {
  --color-primary: #5186C5;
  --color-primary-rgb: 81, 134, 197;
  --color-primary-dark: #025BC5;
  --color-primary-dark-rgb: 2, 91, 197;
  --color-primary-dark-2: #001C74;
  --color-primary-dark-2-rgb: 0, 28, 116;
}*/

// let colors = [{'primary': 'red', 'primaryRgb': '255, 0, 0'}, {'primaryDark': 'green', 'primaryDarkRgb': '0, 255, 0'}, {'primaryDark2': 'blue', 'primaryDarkRgb2': '0, 0, 255'}];

export class ThemeService {

  private themeWrapper = document.querySelector('body');

  constructor() { }

  changeTheme(colors) {
    this.themeWrapper.style.setProperty('--color-primary', colors[0].primary);
    this.themeWrapper.style.setProperty('--color-primary-rgb', colors[0].primaryRgb);
    this.themeWrapper.style.setProperty('--color-primary-dark', colors[1].primaryDark);
    this.themeWrapper.style.setProperty('--color-primary-dark-rgb', colors[1].primaryDarkRgb);
    this.themeWrapper.style.setProperty('--color-primary-dark-2', colors[2].primaryDark2);
    this.themeWrapper.style.setProperty('--color-primary-dark-2-rgb', colors[2].primaryDarkRgb2);
  }
}
