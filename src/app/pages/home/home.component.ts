import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../../pages/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public currentYear = new Date().getFullYear();
  public selectedSection: 'academic' | 'internships' | 'other' = 'academic';
  public showContactModal = false;

  selectSection(section: 'academic' | 'internships' | 'other') {
    this.selectedSection = section;
  }

  openContactModal() {
    this.showContactModal = true;
  }

  closeContactModal() {
    this.showContactModal = false;
  }
}
