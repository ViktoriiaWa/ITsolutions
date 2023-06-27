function updateText() {
  $("[data-i18n]").each(function () {
    const key = $(this).data("i18n")
    const text = $.i18n(key)
    $(this).html(text)
  })
}
function updateText() {
  $("[data-i18n]").each(function () {
    const key = $(this).data("i18n")
    const text = $.i18n(key)
    $(this).html(text)
  })
}

$(document).ready(function () {
  const translations = {
    // На английском
    en: {
      About: "About us",
      Services: "Services",
      Contacts: "Contacts",
      titleHeader: "IT solutions <br> for film business <br> and beyond",
      textHeader:
        "TREND-SOFT LLC is an IT company established in 2014 that develops its own services for the media industry: <br> <br> FilmToolz.ru - automation of film production and small business (DocToolz.ru - automation of document flow), as well as developing custom software .",
      storyTitle:
        "<span>Filmtoolz.ru</span> - film production automation service",
      storyText:
        "Created in 2015, it has become an indispensable tool in the daily work of hundreds of Russian film companies and is currently the standard for the entire industry.",
      story__box1: "Users",
      story__box2: "Projects",
      story__box3: "Years on the market",
      modulsTitle: "Planning Module",
      modulsText:
        "FilmToolz allows you to systematize filming planning, automatically generate and configure all the necessary documentation during the filming process, provides a wide range of production reports and makes it possible to organize team work on a project online.",
      modulsTitle2: "Budgeting module",
      modulsText2:
        "The budgeting module is designed to work on the budget of the project and then take into account the actual costs of film production. FilmToolz allows you to quickly create an estimate using a standard template or create your own.",
      modulsTitle3: "Pre-production module",
      modulsText3:
        "The largest casting database in Russia (20,000+ actors) and the pre-production module allow you to automate the processes of selecting actors for roles, storing and organizing project video samples, as well as selecting locations and working with script versions.",
      castingTitle: "Casting base",
      castingText:
        "The largest casting database in Russia (20,000+ actors) and the pre-production module allow you to automate the processes of selecting actors for roles, storing and organizing project video samples, as well as selecting locations and working with script versions.",
      castingBox1: "Actors",
      castingBox2: "Videos",
      castingBox3: "Photos",
      databaseTitle:
        "Doctoolz.ru - cloud <br> solution for <br> document management",
      databaseTextTitle: "The largest casting base in Russia",
      databaseText:
        "The largest casting database in Russia (20,000+ actors) and the pre-production module allow you to automate the processes of selecting actors for roles, storing and organizing project video samples, as well as selecting locations and working with script versions.",
      databaseItemTitle1: "Documentation",
      databaseItemText1: "Setting up contract approval chains within companies",
      databaseItemTitle2: "sighting",
      databaseItemText2: "Control of sighting processes",
      databaseItemTitle3: "storage",
      databaseItemText3: "Scan Storage Tools",
      databaseItemTitle4: "online archive",
      databaseItemText4: "Organization of an online archive of documents",
      developmentTitle: "Custom development",
      developmentText:
        "Trendsoft is a developer of solutions for SMART-TV (Samsung, LG, etc.) and offers complex products for launching OTT platforms.",
      cardFrontTitle1: "Developments <br> for SMART-TV",
      cardBackText1:
        "Development of applications for Samsung and LG TVs with Smart TV function, as well as for Android TV and Apple TV devices. Smart TV is a young and growing platform for user applications, mostly for playing multimedia content.",
      cardFrontTitle2: "Solutions <br> for E-Commerce",
      cardBackText2:
        "Development of mobile applications for smartphones and tablet computers based on Android, IOS, Windows Mobile platforms",
      cardFrontTitle3: "Business process automation",
      cardBackText3:
        "Development of online stores based on modern technologies and the latest trends in design",
      cardFrontTitle4: "Mobile development",
      cardBackText4:
        "Design, development and implementation of business process automation systems. Individual projects for any industry, allowing you to manage your business from anywhere in the world",
      feedbackLeftTitle: "Do you have any questions?",
      feedbackLeftText: "Contact us:",
      feedbackRightTitle: "Contacts",
      feedbackRightText: "Moscow, st. Pravdy 24, p. 2",
      footerText:
        'OOO "TREND-SOFT", OGRNIP 3323523523, TIN 234234234 <br> Russia, Moscow, st. Pravdy, 24, building 2',
      btnFeedback: "submit your application",
      btn: "Read more",
    },
    // На русском
    ru: {
      About: "О нас",
      Services: "Услуги",
      Contacts: "Контакты",
      titleHeader: "IT решения <br> для кино-бизнеса <br> и не только",
      textHeader:
        "ООО “ТРЕНД-СОФТ” - созданная в 2014 году IT-компания, занимающаяся разработкой собственных сервисов для медиа-индустрии: <br> <br> FilmToolz.ru - автоматизация кинопроизводства и малого бизнеса (DocToolz.ru - автоматизация документооборота), а также осуществляющей разработку программного обеспечения под заказ.",
      storyTitle:
        "<span>Filmtoolz.ru</span> - сервис автоматизации кинопроизводства",
      storyText:
        "Созданный в В 2015 году он стал незаменимым инструментом в каждодневной работе сотен российских кинокомпаний и в настоящее время является стандартом работы для всей отрасли.",
      story__box1: "Пользователей",
      story__box2: "Проектов",
      story__box3: "Лет на рынке",
      modulsTitle: "Модуль планирования",
      modulsText:
        "FilmToolz позволяет систематизировать планирование съемок, автоматически формировать и настраивать всю необходимую в процессе съемок документацию, предоставляет широкий спектр производственных отчетов и дает возможность организовать командную работу над проектом в режиме онлайн.",
      modulsTitle2: "Модуль бюджетирования",
      modulsText2:
        "Модуль бюджетирования предназначен для работы над бюджетом проекта и последующего учета фактических затрат кинопроизводства. FilmToolz позволяет быстро сформировать смету по типовому шаблону или создать собственный.",
      modulsTitle3: "Модуль препродакшн",
      modulsText3:
        "Крупнейшая в России кастинг-база (20 000+ актеров) и модуль препродакшн позволяют автоматизировать процессы подбора актеров на роли, хранения и систематизации видеопроб проекта, а также осуществлять подбор локаций и вести работу с версиями сценариев.",
      castingTitle: "Кастинг-база",
      castingText:
        "Крупнейшая в России кастинг-база (20 000+ актеров) и модуль препродакшн позволяют автоматизировать процессы подбора актеров на роли, хранения и систематизации видеопроб проекта, а также осуществлять подбор локаций и вести работу с версиями сценариев.",
      castingBox1: "Актеров",
      castingBox2: "Видео",
      castingBox3: "Фото",
      databaseTitle:
        "Doctoolz.ru - облачное <br> решение по организации <br> документооборота",
      databaseTextTitle: "Крупнейшая в России кастинг-база",
      databaseText:
        "Крупнейшая в России кастинг-база (20 000+ актеров) и модуль препродакшн позволяют автоматизировать процессы подбора актеров на роли, хранения и систематизации видеопроб проекта, а также осуществлять подбор локаций и вести работу с версиями сценариев.",
      databaseItemTitle1: "Документы",
      databaseItemText1:
        "Настройка цепочек согласования договоров внутри компаний",
      databaseItemTitle2: "визирование",
      databaseItemText2: "Контроль процессов визирования",
      databaseItemTitle3: "хранение",
      databaseItemText3: "Инструменты для хранения сканов",
      databaseItemTitle4: "онлайн-архив",
      databaseItemText4: "Организация онлайн-архива документов",
      developmentTitle: "Заказная разработка",
      developmentText:
        "Трендсофт является разработчиком решений для SMART-TV (Samsung, LG и др) и предлагает комплексные продукты для запуска OTT- платформ.",
      cardFrontTitle1: "Разработки <br> для SMART-TV",
      cardBackText1:
        "Разработка приложений для телевизоров Samsung и LG с функцией Smart TV, а также для устройств Android TV и Apple TV. Smart TV является молодой и развивающейся площадкой для пользовательских приложений в большей части для воспроизведения мультимедийного контента",
      cardFrontTitle2: "Решения <br> для E-Commerce",
      cardBackText2:
        "Разработка мобильных приложений для смартфонов и планшетных компьютеров на базе платформ Android, IOS, Windows Mobile",
      cardFrontTitle3: "Автоматизация бизнес-процессов",
      cardBackText3:
        "Разработка интернет-магазинов на базе современных технологий и новейших тенденций в дизайне",
      cardFrontTitle4: "Mobile разработка",
      cardBackText4:
        "Проектирование, разработка и внедрение систем автоматизации бизнесс-процессов. Индивидуальные проекты для любых отраслей, позволяющие управлять предприятием из любой точки мира",
      feedbackLeftTitle: "Остались вопросы?",
      feedbackLeftText: "Свяжитесь с нами:",
      feedbackRightTitle: "Контакты",
      feedbackRightText: "Москва, ул. Правды 24, стр. 2",
      footerText:
        'ООО "ТРЕНД-СОФТ", ОГРНИП 3323523523, ИНН 234234234 <br> Россия, Москва, ул. Правды, 24, стр 2',
      btnFeedback: "оставить заявку",
      btn: "Подробнее",
    },
  }

  $.i18n({ locale: "ru" }).load(translations)
  updateText()

  $(".nav__translate__btn").click(function () {
    const lang = $(this).data("lang")
    $.i18n().locale = lang
    updateText()
  })
})

document.querySelectorAll(".nav__translate__btn").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    document
      .querySelectorAll(".nav__translate__btn")
      .forEach(function (otherBtn) {
        otherBtn.classList.remove("active")
      })

    e.currentTarget.classList.add("active")
  })
})
