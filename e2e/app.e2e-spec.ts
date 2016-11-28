import { InitiatePage } from './app.po';

describe('initiate App', function() {
  let page: InitiatePage;

  beforeEach(() => {
    page = new InitiatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
