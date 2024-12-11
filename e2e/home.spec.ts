import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
    await page.goto('https://www.qahalsys.com.br/app/signin/')
    await expect(page).toHaveTitle('QahalSys - Sistema de Gestão de Igrejas')
})
