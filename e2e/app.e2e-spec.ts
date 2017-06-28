import { TiendaNgPage } from './app.po';

describe('tienda-ng App', function() {
  let page: TiendaNgPage;

  beforeEach(() => {
    page = new TiendaNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
