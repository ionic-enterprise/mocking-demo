const setConfig = jasmine.createSpy().and.callFake(() => Promise.resolve());
const sync = jasmine.createSpy().and.callFake(() => Promise.resolve());
const reload = jasmine.createSpy().and.callFake(() => Promise.resolve());

export { setConfig, sync, reload };
