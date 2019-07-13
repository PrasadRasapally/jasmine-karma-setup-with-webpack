import {
    TestBed
} from '@angular/core/testing';

import 'jasmine';

import { HomeComponent } from './home.component';

describe('Component: HomeComponent', () => {
    let component: HomeComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        });

        const fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('should have a defined component', () => {
        expect(component).toBeDefined();
    });

});