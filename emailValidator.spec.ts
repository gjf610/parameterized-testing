import { it, expect, describe } from 'vitest'
import { emailValidator } from "./emailValidator";

describe('emailValidator', () => {
  // it.each([
  //   ["valid-email@example.com", true],
  //   ["invalid.email@example", false],
  //   ["another.invalid.email@example.", false],
  //   ["yet.another.invalid.email.example.com", false]
  // ])("should return %s when email is %s", (email, expected) => {
  //   expect(emailValidator(email)).toBe(expected)
  // })

  // it.each([{ email: "valid-email@example.com", expected: true }])(
  //   "should return $email when email is $expected", ({ email, expected }) => {
  //     expect(emailValidator(email)).toBe(expected)
  //   })

  it.each`
    email                        | expected
    ${"valid-email@example.com"} | ${true}
    ${"invalid.email@example"}   | ${false}
  `("should return $email when email is $expected", ({ email, expected }) => {
    expect(emailValidator(email)).toBe(expected)
  })
})
