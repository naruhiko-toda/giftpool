import { expect, test } from "@playwright/test";

test("投稿のストーリー", async ({ page }) => {
  await page.goto("localhost:8080/");

  await expect(page.locator("body")).toContainText("プロジェクトを登録しましょう");
  await expect(page.locator("body")).toContainText("プロジェクト名");
  await expect(page.locator("body")).toContainText("金額");
});
