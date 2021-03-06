import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyFilterDemo} from './keyfilterdemo';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng/message';
import {KeyFilterDemoRoutingModule} from './keyfilterdemo-routing.module';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {AppInputStyleSwitchModule} from '../../app.inputstyleswitch.component';
import {AppCodeModule} from '../../app.code.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		KeyFilterDemoRoutingModule,
		KeyFilterModule,
		InputTextModule,
		MessageModule,
		TabViewModule,
		AppInputStyleSwitchModule,
		AppCodeModule,
        CodeHighlighterModule
	],
	declarations: [
		KeyFilterDemo
	]
})
export class KeyFilterDemoModule {}
