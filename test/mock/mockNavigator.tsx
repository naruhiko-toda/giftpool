export class MockNavigator {
  shareCallCount: number;
  shareCallParams: { title: string; url: string };

  constructor() {
    this.shareCallCount = 0;
    this.shareCallParams = { title: "", url: "" };
  }

  share(shareData: { title: string; url: string }) {
    this.shareCallCount++;
    this.shareCallParams = shareData;
  }
}
