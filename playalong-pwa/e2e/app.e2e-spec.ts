import { PlayalongPwaPage } from './app.po';

describe('playalong-pwa App', function() {
  let page: PlayalongPwaPage;

  beforeEach(() => {
    page = new PlayalongPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
