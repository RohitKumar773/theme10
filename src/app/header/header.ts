import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DropdownItem {
  name: string;
  route: string;
}

interface NavItem {
  label: string;
  link?: string;
  dropdown?: DropdownItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  // Add RouterLink and RouterLinkActive so template routing directives work perfectly
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal<boolean>(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about' },
    { label: 'Practice Area', link: '/pratice-area' },
    {
      label: 'Insights', 
      dropdown: [
        { name: 'Vision & Mission', route: '/vision' },
        { name: 'Testimonials', route: '/testimonials' },
        { name: 'Rewards', route: '/rewards' }
      ]
    },
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

  @HostListener('document:click')
  closeDropdowns(): void {
    if (this.activeDropdown()) {
      this.activeDropdown.set(null);
    }
  }
}