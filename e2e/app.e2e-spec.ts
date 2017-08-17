import { TafgeetDemoPage } from './app.po';

describe('tafgeet-demo App', () => {
  let page: TafgeetDemoPage;

  beforeEach(() => {
    page = new TafgeetDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
