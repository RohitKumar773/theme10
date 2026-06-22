import { Routes } from '@angular/router';
import { Viewport } from './viewport/viewport';
import { Homepage } from './homepage/homepage';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { Achievement } from './achievement/achievement';
import { Vision } from './vision/vision';
import { Testimonials } from './testimonials/testimonials';
import { Rewards } from './rewards/rewards';
import { PracticeArea } from './practice-area/practice-area';

export const routes: Routes = [
    // {
    //     path: '', component: Viewport,
    //     children: [
    //         { path: '', component: Homepage },
    //         { path: 'about', component: About },
    //         { path: 'contact', component: Contact },
    //         { path: 'gallery', component: Gallery },
    //         { path: 'Achievement', component: Achievement },
    //         { path: 'vision', component: Vision },
    //         { path: 'testimonials', component: Testimonials },
    //         { path: 'rewards', component: Rewards },
    //         { path: 'pratice-area', component: PracticeArea }
    //     ]
    // }

    { path: '', component: Homepage }
];
