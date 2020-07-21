import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordDemo} from './passworddemo';
import {PasswordDemoRoutingModule} from './passworddemo-routing.module';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordDemoRoutingModule,
        PasswordModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule,
        CodeHighlighterModule
	],
	declarations: [
		PasswordDemo
	]
})
export class PasswordDemoModule {}
