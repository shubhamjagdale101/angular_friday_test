import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  comp = ""
  data = "Welcome to the page Home"
  str = "Welcome to the page Home"
  userName = ""
  show_selected = ""

  handleClick(str : any){
    this.comp = 'Home'
    if(this.userName !== "") this.str = `Welcome to the page ${str}`
    else this.str = `Welcome to the page ${str}`
    this.data = `Welcome to the page ${str}`
  }

  handleChange(){
    if(this.userName !== "") this.str = `Mr/Mrs ${this.userName} ${this.data}`
  }
}
