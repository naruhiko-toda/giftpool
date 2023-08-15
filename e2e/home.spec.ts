import { test, expect } from "@playwright/test";

test("レッスン予約のストーリー", async ({ page }) => {
  await page.goto("localhost:8080/");

  // Expect a title "to contain" a substring.
  await expect(page.locator("body")).toHaveText("レッスン予約");
});
