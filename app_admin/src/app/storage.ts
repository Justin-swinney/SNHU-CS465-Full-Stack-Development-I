import { InjectionToken } from "@angular/core";

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Strage', {
    providedIn: 'root',
    factory: () => localStorage
});