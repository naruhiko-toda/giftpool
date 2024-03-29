import { expect, test } from "playwright-test-coverage";
test("投稿のストーリー", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("body")).toContainText("プロジェクトを登録しましょう");
  await expect(page.locator("body")).toContainText("プロジェクト名");
  await expect(page.locator("body")).toContainText("金額");
  await page.getByPlaceholder("例）誕生日プレゼント").type("MacbookPro");
  await page.getByPlaceholder("金額を入力してください").type("10000");
  await page.getByText("登録する").click();
  await expect(page.locator("body")).toContainText("送信中...");
  await page.waitForURL("**/projects/*");
  expect(page.url()).toContain("/projects");
  await expect(page.locator("body")).toContainText("MacbookPro");
  await expect(page.locator("body")).toContainText("10000");
  await page.getByText("シェア").click();
  await expect(page.locator("body")).toContainText("あなたの欲しいものを友達に知らせよう");
  await page.getByTestId("copyLink").click();
});
