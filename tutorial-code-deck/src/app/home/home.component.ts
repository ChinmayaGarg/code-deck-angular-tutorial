import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // name of the component, this is the name we use to call our home component Eg: <app-home></app-home>
  standalone: true,
  imports: [],
  templateUrl: './home.component.html', // html file
  styleUrl: './home.component.scss', // style file for this component only
})
export class HomeComponent {}
