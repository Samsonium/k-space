> на данный момен продукт находится в разработке

<!-- TOC -->
* [K-Space](#k-space)
    * [Какие сервисы будут входить в экосистему](#какие-сервисы-будут-входить-в-экосистему)
  * [Планы развития](#планы-развития)
    * [Q4 2023](#q4-2023)
<!-- TOC -->

# K-Space
Open-source экосистема для компаний. Это крайне большой челледж и пет-проект для меня,
как для специалиста, а также проверка своих навыков, знаний и усидчивости.

### Какие сервисы будут входить в экосистему
| Сервис | Версия   | Статус | Описание                                  |
|--------|----------|--------|-------------------------------------------|
| `Self` | &horbar; | InDev  | Авторизация и аутентификация пользователя |
| `Boss` | &horbar; | InDev  | Администрирование                         |
| `Task` | &horbar; | InDev  | Таск-менеджер                             |
| `Link` | &horbar; | InDev  | Мессенджер                                |
| `Call` | &horbar; | InDev  | Сервис для созвонов                       |
| `Plan` | &horbar; | InDev  | Календарь с событиями                     |
| `Docs` | &horbar; | InDev  | Документы и текстовые файлы               |
| `Grid` | &horbar; | InDev  | Таблицы                                   |
| `Show` | &horbar; | InDev  | Презентации                               |
| `Disk` | &horbar; | InDev  | Хранилище файлов                          |


## Планы развития

### Q4 2023
- **Self** `1.0.0`
    - Веб-страницы
        - Авторизация
        - Регистрация
        - Ввод OTP (одноразового пароля по почте)
    - Поддержка авторизации с помощью:
        - Логина и пароля
        - Почты и OTP
    - Генерация JWT и запись сессии в куки и БД
    - Ролевая система
- **Task** `1.0.0`
    - Фронтенд
        - Список задач
        - Колонки
        - Создание или редактирование задачи
        - Управление тегами
    - Бекенд
        - Ролевая система
        - Теги
        - Типы задач (фича, баг, ресёрч)
        - Размерности задач (`эпик` ▸ `задача` ▸ `подзадача` ▸ `чек-лист`)
        - Приоритетность задач (`критический`, `высокий`, `обычный`, `низкий`)
        - Статусы задач (`беклог`, `открыто`, `в работе`, `тестируется`, `готово`)
- **Link** `1.0.0`
    - Фронтенд
        - Чаты
        - Просмотр чата
        - Создание чата
        - Редактирование чата
        - `Markdown` или `Rich text`
    - Бекенд
        - История чатов
        - Личные чаты
        - Групповые чаты
        - Тип сообщений (`обычное`, `важное`)
