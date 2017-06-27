import { Angular2CursoPage } from './app.po';

describe('angular2-curso App', () => {
  let page: Angular2CursoPage;

  beforeEach(() => {
    page = new Angular2CursoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
