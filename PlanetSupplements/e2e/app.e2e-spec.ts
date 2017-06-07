import { PlanetSupplements.UIPage } from './app.po';

describe('planet-supplements.ui App', () => {
  let page: PlanetSupplements.UIPage;

  beforeEach(() => {
    page = new PlanetSupplements.UIPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
