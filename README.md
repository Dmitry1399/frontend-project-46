### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dmitry1399/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dmitry1399/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/561e4a77817e894b9148/maintainability)](https://codeclimate.com/github/Dmitry1399/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/561e4a77817e894b9148/test_coverage)](https://codeclimate.com/github/Dmitry1399/frontend-project-46/test_coverage)

# Вычислитель отличий
## Что это из себя представляет
Это простая консольная программа позволяющая делать сравнения двух файлов JSON или YML и выводить информацию в разных форматах.
#### Доступные форматы и примеры их использования:
+ stylish(по умолчанию) 
+ plain
+ JSON
### Пример работы программы с импользованием различных форматтеров.  
#### Различия между плоскими файлами с использованием форматтера stylish.
[![asciicast](https://asciinema.org/a/UOB5Ym7dqLED8z6aKCiqXSdQA.svg)](https://asciinema.org/a/UOB5Ym7dqLED8z6aKCiqXSdQA)
#### Различия между вложенными файлами с использованием форматтера stylish.
[![asciicast](https://asciinema.org/a/17KbgHUdN0X7Et7RvIHbECI7T.svg)](https://asciinema.org/a/17KbgHUdN0X7Et7RvIHbECI7T)
#### Различия между файлами с использованием форматтера plain.
[![asciicast](https://asciinema.org/a/egYa9QwHxZiCWGuMeKcsDG4zm.svg)](https://asciinema.org/a/egYa9QwHxZiCWGuMeKcsDG4zm)
#### Различия между файлами с использованием форматтера JSON.
[![asciicast](https://asciinema.org/a/ACJK5F46oQXTjIn74Z1cLS2Kp.svg)](https://asciinema.org/a/ACJK5F46oQXTjIn74Z1cLS2Kp)
## Дополнительные команды
Полезные команды, которые доступны для использования в проекте.
`make install`
Установка зависимостей `CI` проекта.
`make link`
Линк проекта.
`make publish`
Публикация проекта с флагом --dry-run
`make lint`
Проверка кода проекта с помощью линтера ESLint.
`make test`
Тестирование проекта посредством Jest.
`make test-coverage`
Вывод покрытия тестами проекта посредством Jest.
