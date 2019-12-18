import { SpiritconPage } from './app.po';

describe('spiritcon App', function() {
  let page: SpiritconPage;

  beforeEach(() => {
    page = new SpiritconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
