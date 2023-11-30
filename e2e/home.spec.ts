import { expect, test } from '@playwright/test'

test('レッスン予約のストーリー', async ({ page }) => {
  await page.goto('localhost:8080/')

  await expect(page.locator('body')).toContainText('共感しよう')
  await expect(page.locator('body')).toContainText('起業しようか迷っています。')
})
