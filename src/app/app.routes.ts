import { Routes } from '@angular/router';
import { Viewport } from './viewport/viewport';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { Achievement } from './achievement/achievement';

export const routes: Routes = [
    {
        path: '', component: Viewport,
        children: [
            { path: '', component: Homepage },
            { path: 'about', component: About },
            { path: 'contact', component: Contact },
            { path: 'gallery', component: Gallery },
            { path: 'Achievement', component: Achievement }
        ]
    }
];
