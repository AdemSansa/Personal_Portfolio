import { Component, HostListener } from '@angular/core';
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

  public isMobile = false;
  public isDesktop = true;

  constructor() {
    this.updateDeviceType();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateDeviceType();
  }

  private updateDeviceType() {
    this.isMobile = window.innerWidth < 768;
    this.isDesktop = !this.isMobile;
  }

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
