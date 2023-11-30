import { expect, test } from '@playwright/test'

test('投稿のストーリー', async ({ page }) => {
  await page.goto('localhost:8080/')

  await expect(page.locator('body')).toContainText('共感しよう')
  await expect(page.locator('body')).toContainText('起業しようか迷っています。')
  await page.getByText('投稿する').click()
  await expect(page.locator('body')).toContainText('投稿画面')
})
