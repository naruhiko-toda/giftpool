import { expect, test } from '@playwright/test'

test('レッスン予約のストーリー', async ({ page }) => {
  await page.goto('localhost:8080/')

  await expect(page.locator('body')).toContainText('共感しよう')
  await expect(page.getByTestId('lessonCard_coaching')).toContainText('コーチングレッスン')
  await expect(page.getByTestId('lessonCard_coaching')).toContainText('90分/1回')
  await expect(page.getByTestId('lessonCard_coaching')).toContainText('￥6,000~')
  await expect(page.getByTestId('lessonCard_entrySheet')).toContainText('ES添削レッスン')
  await expect(page.getByTestId('lessonCard_entrySheet')).toContainText('60分/1回')
  await expect(page.getByTestId('lessonCard_entrySheet')).toContainText('￥5,000~')
})
