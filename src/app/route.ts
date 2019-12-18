/**
 * Created by ipsita on 7/4/17.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { EditadminComponent } from './editadmin/editadmin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendoraddComponent } from './vendoradd/vendoradd.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendoreditComponent } from './vendoredit/vendoredit.component';
import { HealerlistComponent } from './healerlist/healerlist.component';
import { HealereditComponent } from './healeredit/healeredit.component';
import { HealeraddComponent } from './healeradd/healeradd.component';
import { SpeakeraddComponent } from './speakeradd/speakeradd.component';
import { SpeakerlistComponent } from './speakerlist/speakerlist.component';
import { SpeakereditComponent } from './speakeredit/speakeredit.component';
import { BoothTableComponent } from './boothtable/booth-table.component';
import { ConventionCenterComponent } from './conventioncenter/convention-center.component';
import { IndexComponent } from './index/index.component';
import { PresentersComponent } from './presenters/presenters.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutSpiritconComponent } from './aboutspiritcon/about-spiritcon.component';
import { AgendaComponent } from './agenda/agenda.component';
import { TravellodgingComponent } from './travellodging/travellodging.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ReadersComponent } from './readers/readers.component';
import { PastEvents2019Component } from './pastevents2019/pastevents2019.component';





const appRoutes: Routes = [
    { path: 'addadmin', component: AddadminComponent},
    { path: 'editadmin/:id', component: EditadminComponent},
    { path: 'adminlist', component: AdminlistComponent},
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'vendoradd', component: VendoraddComponent},
    { path: 'vendorlist', component: VendorlistComponent},
    { path: 'vendoredit/:id', component: VendoreditComponent},
    { path: 'healeredit/:id', component: HealereditComponent},
    { path: 'healeradd', component: HealeraddComponent},
    { path: 'healerlist', component: HealerlistComponent},
    { path: 'speakeradd', component: SpeakeraddComponent},
    { path: 'speakerlist', component: SpeakerlistComponent},
    { path: 'speakeredit/:id', component: SpeakereditComponent},
    { path: 'boothtable', component: BoothTableComponent},
    { path: 'conventioncenter', component: ConventionCenterComponent},
    { path: '', component: IndexComponent},
    { path: 'presenters', component: PresentersComponent},
    { path: 'contactus', component: ContactusComponent},
    { path: 'aboutspiritcon', component: AboutSpiritconComponent},
    { path: 'agenda', component: AgendaComponent},
    { path: 'travellodging', component: TravellodgingComponent},
    { path: 'past-events', component: PastEventsComponent},
    { path: 'sponsor', component:SponsorComponent},
    { path: 'readers', component:ReadersComponent},
    { path: 'pastevents2019', component:PastEvents2019Component},

];


export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });