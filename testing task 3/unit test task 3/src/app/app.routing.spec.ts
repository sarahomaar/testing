import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLinkWithHref } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let  htmlPage : DebugElement;
    let location: Location;
    let router: Router;

    beforeEach(async () => {
       await TestBed.configureTestingModule({
            imports: [FormsModule,RouterTestingModule.withRoutes(routes)],
            declarations: [AppComponent],
        }).compileComponents();
    })

    beforeEach(() => {
        router = TestBed.get(Router);
        fixture = TestBed.createComponent(AppComponent);
        htmlPage = fixture.debugElement;
        location = TestBed.get(Location);
        router.initialNavigation();
      });

      it('navigate to login', fakeAsync(() => {
        fixture.detectChanges();
        let link = htmlPage.query(By.directive(RouterLinkWithHref));
        link.nativeElement.click();
        tick();
        expect(location.path()).toBe('/cart');
      }));

})

