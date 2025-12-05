const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')
    ).toBeVisible()
  })

  test('a single pokemon can be viewed', async ({ page }) => {
    await page.goto('/pokemon/raichu')
    await expect(page.getByText('raichu')).toBeVisible()

    const spAttack = await page.getByText('special attack')
    expect(spAttack).toBeVisible()
    await expect(page.getByText('lightning rod')).toBeVisible()
  })
})
