import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { About } from "../about/about";
import { PracticeArea } from "../practice-area/practice-area";
import { Gallery } from "../gallery/gallery";
import { Testimonials } from "../testimonials/testimonials";
import { Vision } from "../vision/vision";
import { Contact } from "../contact/contact";
import { Rewards } from "../rewards/rewards";

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
  selector: 'app-homepage',
  imports: [RouterLink, RouterLinkActive, About, PracticeArea, Gallery, Testimonials, Vision, Contact, Rewards],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
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
