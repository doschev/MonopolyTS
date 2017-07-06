import { MonopolyTSPage } from './app.po';

describe('monopoly-ts App', () => {
  let page: MonopolyTSPage;

  beforeEach(() => {
    page = new MonopolyTSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
