import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = signal<number>(new Date().getFullYear());

  footerLinks = signal([
    {
      title: 'Practice Areas',
      items: [
        { name: 'Corporate Litigation', href: '#' },
        { name: 'White Collar Defense', href: '#' },
        { name: 'Intellectual Property', href: '#' },
        { name: 'Civil Rights Writs', href: '#' }
      ]
    },
    {
      title: 'Ecosystem Modules',
      items: [
        { name: 'Advocate Secure Portal', href: '#' },
        { name: 'Client Case Tracking', href: '#' },
        { name: 'Admin Dashboard Login', href: '#' },
        { name: 'Consultation Pipeline', href: '#' }
      ]
    },
    {
      title: 'Firm Profile',
      items: [
        { name: 'Our Vision Summary', href: '#' },
        { name: 'Senior Partners Directory', href: '#' },
        { name: 'Legal Insights Blog', href: '#' },
        { name: 'Contact Desk', href: '#' }
      ]
    }
  ]);
}
