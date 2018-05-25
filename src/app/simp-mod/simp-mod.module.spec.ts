import { SimpModModule } from './simp-mod.module';

describe('SimpModModule', () => {
  let simpModModule: SimpModModule;

  beforeEach(() => {
    simpModModule = new SimpModModule();
  });

  it('should create an instance', () => {
    expect(simpModModule).toBeTruthy();
  });
});
