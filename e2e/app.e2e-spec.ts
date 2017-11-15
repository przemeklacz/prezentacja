import { KrystianPage } from './app.po';

describe('krystian App', () => {
  let page: KrystianPage;

  beforeEach(() => {
    page = new KrystianPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
