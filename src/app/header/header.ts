import { Component, signal, HostListener } from '@angular/core';

interface NavItem {
  label: string;
  link?: string;
  dropdown?: string[];
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal<boolean>(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '#' },
    { label: 'About Us', link: '/about' },
    { label: 'Insights', dropdown: ['Vission & Mission', 'Testimonials', 'Rewards'] },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact', link: '/contact' }
  ];

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => !state);
  }

  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.activeDropdown.update(current => current === label ? null : label);
  }

  // Closes open dropdowns automatically when clicking anywhere else on the document
  @HostListener('document:click')
  closeDropdowns(): void {
    if (this.activeDropdown()) {
      this.activeDropdown.set(null);
    }
  }
}
