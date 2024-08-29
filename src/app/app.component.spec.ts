import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { AppComponent } from './app.component';
import * as LiveUpdates from '@capacitor/live-updates';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    (LiveUpdates.setConfig as jasmine.Spy).calls.reset();
    (LiveUpdates.sync as jasmine.Spy).calls.reset();
  });

  it('should create the app', async () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('hides the splash screen', async () => {
    spyOn(SplashScreen, 'hide');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(SplashScreen.hide).toHaveBeenCalledOnceWith();
  });

  it('sets the config', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(LiveUpdates.setConfig).toHaveBeenCalledOnceWith({
      appId: 'NOT-REAL',
      channel: 'foo-bar',
    });
  });

  it('does a sync', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(LiveUpdates.sync).toHaveBeenCalledOnceWith();
  });
});
