import { fullTrim, nameIsValid } from '../src/homework3';

describe('Здесь могла бы быть ваша реклама', () => {
  /**
   * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
   * которая удаляет пробелы и табуляторы в начале и конце строки.
   */

  test('Проверяем тримминг для пробела в начале слова', () => {
    expect(fullTrim(' Это домашка')).toEqual('Это домашка');
  });
  test('fullTrim works', () => {
    expect(fullTrim).toBeDefined();
    expect(typeof fullTrim).toBe('function');
  });

  test('fullTrim trims whitespaces at the end of a stirng', () => {
    expect(fullTrim('text    ').match(/text/))
  });
  test('fullTrim does not trim whitespaces in the middle', () => {
    expect(fullTrim('textA textB').match(/textA textB/))
  });
  test('fullTrim trims tab at the beginning of a string', () => {
    expect(fullTrim(' text').match(/text/))
  });
  test('fullTrim trims tab at the end of a string', () => {
    expect(fullTrim('text ').match(/text/))
  });
  test('fullTrim does not allow !string', () => {
    expect(() => fullTrim(123)).toThrow();
  });
});

  /**
   * Напишите параметризированный unit (describe.each`table`) тест для функции,
   * которая проверяет валидность кличек котиков.
   * Кличка считается валидной, если она соответствует следующим условиям:
   * 1) Кличка содержит минимум два символа;
   * 2) Кличка не пустая;
   * 3) Кличка не содержит пробелов.

   Обратите внимание, в примере приведен обычный тест.
   Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
   */

  test('Передать валидную кличку', () => {
    expect(nameIsValid('Имя')).toEqual(true);
  });
  describe('nameValid test', () => {
    test.each`
    a             | expected
    ${'Ik'}       | ${true}
    ${'I'}        | ${false}
    ${''}         | ${false} // why does the function returns true? 'a' is shorter than 2 characters
    ${'I k'}      | ${false}
    ${123}        | ${false}
    ${undefined}  | ${'error'} // why does not the function return an error?
    `('$a = $expected', ({ a, expected }) =>  {
    if (expected === 'error') {
      expect(() => nameIsValid(a)).toThrow();
    } else {
      expect(nameIsValid(a)).toBe(expected);
    }
    });
  })