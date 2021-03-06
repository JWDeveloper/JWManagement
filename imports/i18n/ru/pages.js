const pages = {
  profile: {
    name: 'Мой профиль',
    personalData: 'Мои данные',
    changePicture: 'Изменить мою фотку...',
    options: {
      title: 'Дополнительные возможности',
      helpText: {
        mergeAccounts: 'В JW Management тебе нужна всего лишь одна учетная запись, даже чтобы участвовать в разных проектах.  Если у тебя есть несколько учетных записей, нажми "передать разрешения" и введите учетные данные твоего второго аккаунта. Разрешения этой учетной записи затем передаются в указанную учетную запись.'
      }
    },
    availability: {
      title: 'Доступность',
      helpText: 'Пожалуйста, отметь часы, когда ты обычно доступный для служения.',
      shortTermCalls: 'В указанное время я могу поддержать служение экспромтом',
      shortTermCallsAlways: 'Я могу поддержать служение экспромтом даже если не указал выше время.'
    },
    speaks: 'Говорит по',
    telefon: 'Телефон',
    congregation: 'Собрание',
    languages: 'Владею иностранными языками:',
    gender: 'Пол',
    _gender: {
      brother: 'Брат',
      sister: 'Сестра'
    },
    publisher: 'Возвещатель',
    privilegeOfService: 'НАЗНАЧЕНИЯ',
    _privilegeOfService: {
      auxiliaryPioneer: 'Подсобный пионер',
      pioneer: 'Пионер',
      specialPioneer: 'Специальный пионер',
      circuitOverseer: 'Районный надзиратель',
      bethelite: 'Вефилец',
      fulltimeConstructionServant: 'Стр-Служитель в МПСО'
    },
    ministryPrivilege: 'Обязанность/Назначениe в собрании',
    _ministryPrivilege: {
      ministerialServant: 'Служебный помощник',
      elder: 'Старейшина',
      coordinator: 'КСС',
      secretary: 'Секр.',
      serviceOverseer: 'СН'
    },
    placeholder: {
      telefon: '(например: +49 177 1234567)',
      congregation: 'например Berlin-Süd',
      languages: 'например Deutsch, Französisch, Englisch, Russisch'
    },
    changePassword: 'Изменить пароль',
    deleteAccount: 'Удалить мой аккаунт (безвозвратно!)',
    mergeAccounts: 'Объединить аккаунты',
    vacation: {
      title: 'Отпуск',
      helpText: 'Внеси данные когда ты не доступен для участия.'
    },
    until: 'до',
    addVacation: 'Добавить отпуск',
    deleteVacation: 'Удалить данные отпуска',
    usernameTaken: 'Этот Логин уже используется, придумай другой.'
  },
  wiki: {
    name: 'Сведения',
    nameShort: 'Инфо',
    files: 'Файлы',
    addQuestion: 'Добавить Тему',
    edit: 'Обработать',
    delete: 'Удалить',
    noFiles: 'Нет доступных файлов',
    addTab: 'Добавить новую вкладку',
    editQuestion: 'Обработать заголовок',
    removeFaq: 'Удалить заголовок',
    editFaq: 'Обработать ответ',
    changeFaq: 'Сохранить изменения',
    cancelFaq: 'Удалить изменения'
  },
  shifts: {
    name: 'Смены',
    route: 'Маршрут',
    addShift: 'Добавить новую смену',
    addWeek: 'Добавить новую неделю',
    requests: 'Заявки',
    openRequests: 'Заявки на смены',
    automation: 'Автоматизм',
    template: 'Шаблон',
    noVisibleShifts: 'Смены этого тега ещё не создали',
    start: 'Начало',
    end: 'Конец',
    visibility: 'Видимость:',
    helpText: {
      start: 'Это будет первая неделя, которую создаст система.',
      end: 'Это будет последняя неделя, которую создаст система.',
      visibility: 'Этим ты определяешь, сколько недель вперёд, братья могут подаватъ заявки. Система создает для этого необходимые смены с учетом начальной и конечной недели.'
    },
    weeks: 'Недели',
    sendWeek: 'Отправить назначения этой недели по E-Mail',
    hideNames: 'Скрыть участников смены',
    showNames: 'Показать участников смены',
    editShifts: 'Обработать смены',
    prevWeek: 'Перейти к предыдущей недели',
    nextWeek: 'Перейти к следующей недели',
    shownTag: 'Показываются смены этого Тега',
    hiddenTag: 'Смены этого Тега скрыты.',
    shift: {
      tag: 'Тег',
      schedule: 'Назначение',
      teamleader: 'Руководитель группы',
      teams: 'Группы',
      noTeams: 'Групп нет',
      participants: 'Участники',
      start: 'Начало',
      end: 'Конец',
      requests: 'Заявка',
      requests_plural: 'Заявки',
      requestsOf: 'Заявка от',
      requestsOf_plural: 'Заявки от',
      teamleaders: 'РГ',
      noPermission: 'Обрабатывать смены может только админ или планировщик смен'
    }
  },
  day: {
    removeAll: 'Удалить все'
  },
  project: {
    name: 'Управление',
    nameShort: 'Управление'
  },
  reports: {
    export: 'Экспорт в csv'
  },
  settings: {
    main: {
      title: 'Настройки проекта',
      id: 'ID',
      name: {
        text: 'Название',
        placeholder: 'Название проекта',
        helpText: 'В большинстве случаев название проекта это название собрания. В крупных проектах он описывает название города, в котором проводится проект. Если проект не имеет прямого отношения к службе со стендами, тип службы можно включить в название проекта.'
      },
      news: {
        text: 'Новости',
        placeholder: 'нет новостей/объявлений',
        helpText: 'Новости будут отображаются для всех участников в верхней части обзора проекта, под названием проекта.'
      },
      email: {
        text: 'E-Mail',
        placeholder: 'E-Mail проекта',
        helpText: 'В сообщениях о подтверждённых заявках, обновления в сменах и т. д. этот E-Mail адрес будет внесён как replyTo адрес. Ответы посылаемие на эти сообщения, будут пересылаться на этот E-Mail. Кроме того, на этот адрес будет посылаться сообщение в случае краткосрочного отказа от участия.'
      },
      language: {
        text: 'Язык проекта',
        helpText: 'Все уведомления которые будет отправлять система, будут на том языке, который тут указан.'
      },
      deleteProject: 'Удалить проект'
    },
    tags: {
      title: 'Теги',
      helpText: '<p>Теги отображают различные виды служения (например переносные стенды, информационная стойка, служба распорядителей, служба парковки и т.д.)</p><p>Особенно если смены пересекаются по времени, то деление служения на Теги может особенно подходить. Все смены группируются на основе Тега. Для каждого Тега возможно создать целый ряд различных шаблонов по которым позднее возможно будет создавать недели со сменами (на данное время от руки, но вскоре даже автоматически). Каждый участник должен сначала получить право/роль для этого Тега чтобы видеть и подавать заявки на смены этого Тега.</p>',
      id: 'ID',
      name: 'Название',
      img: {
        name: 'Значок/Картинка',
        helpText: 'Это изображение для Тега будет видно в обзоре при нажатии на \'Смены\'. Оно должно показывать служение, для чего предназначены смены этого Тега. Если ты хочешь добавить собственное изображение, пожалуйста, отправь нам письмо support@jwmanagement.org с твоим предложением.'
      },
      templates: 'Шаблоны смен',
      showTemplate: 'Обработать',
      editTemplate: 'Переименовать',
      removeTemplate: 'Удалить',
      addTemplate: 'Создать новый шаблон',
      action: 'Процесс',
      none: 'Теги еще не созданы',
      add: 'Создать новый Тег',
      remove: 'Удалить этот Тег'
    },
    teams: {
      title: 'Группы',
      helpText: {
        main: 'В одной смене может быть одна или несколько групп. К каждой группе относится один маршрут. Участник подаёт заявку на участие в группе. Если в соответствующей смене разрешено, то он может подать заявку на участие в определённой группе, а не только на всю смену.',
        picture: 'Этот значок / эту картинку можно будет просмотреть. В ней должны быть ясно видны задания для группы.  Например, ты мог бы создать маршрут служения со стендами на \'Google Мои карты\', сделать скриншот и загрузить его сюда.',
        link: 'Эта ссылка на которую будет перенаправлен пользователь когда он нажмёт на значок/картинку. Например, ты можешь создать маршрут для служения со стендами на \'Google Мои карты\' и указать здесь ссылку на неё.',
        description: 'Здесь можно указать дополнительные указания для участников этой группы. Например, можно объяснить некоторые особенности этого маршрута.'
      },
      id: 'ID',
      name: 'Название',
      icon: 'Значок',
      picture: 'Картинка',
      editPicture: 'Загрузить значок/картинку для этой группы',
      noPicture: 'Значок/Картинка ещё не загружена',
      link: 'Ссылка',
      description: 'Описание',
      action: 'Процесс',
      none: 'Группы еще не созданы',
      add: 'Создать новую группу',
      remove: 'Удалить эту группу'
    },
    meetings: {
      title: 'Место встречи/ВПС',
      helpText: {
        main: 'Каждой группе можно указать место встречи/место для ВПС. Таким образом, каждая группа может встречаться отдельно от других групп одной смены. Это может быть полезно, если маршруты групп находятся так далеко друг от друга, что общее место встречи не удобно для всей смены. Места встречи определяются адресом/координатами.',
        picture: 'Этот значок / эту картинку можно будет просмотреть. Например, ты мог бы пометить место встречи на \'Google карты\', сделать скриншот и загрузить его сюда.'
      },
      id: 'ID',
      name: 'Название',
      picture: 'Значок/Картинка',
      editPicture: 'Загрузить значок/картинку для места встречи/ВПС',
      noPicture: 'Значок/Картинка ещё не загружена',
      action: 'Процесс',
      none: 'Место встреч/ВПС еще не создано',
      add: 'Создать место встречи/ВПС',
      remove: 'Удалить место встречи/ВПС'
    }
  },
  vessel: {
    nameShort: 'Корабли/судна',
    entity: {
      name: 'Название корабля/судна',
      flag: 'Флаг',
      type: 'Тип',
      typeValues: {
        c: 'Контейнеровоз',
        cr: 'Круизный',
        mf: 'Грузоперевозчик',
        mt: 'Танкер',
        p: 'Пассажирский корабль',
        pt: 'Катер',
        rc: 'Корабль круиза по реки',
        f: 'Паром',
        ro: 'Ролкер',
        t: 'Буксир',
        unknown: 'Неизвестный',
        placeholder: 'Выбери тип судна'
      },
      callsign: 'Позывной',
      eni: 'ENI',
      imo: 'IMO',
      mmsi: 'MMSI',
      visit: {
        new: 'Neuen Besuch erfassen',
        noElements: 'Dieses Schiff wurde noch nicht besucht',
        delete: 'Diesen Besuch löschen',
        deleteConfirmation: 'Möchtest du wirklich diesen Besuch löschen?',
        person: 'Verkündiger',
        email: 'Verkündiger E-Mail',
        phone: 'Verkündiger Telefon',
        isUserVisible: 'Deine Kontaktdaten für andere Verkündiger sichtbar machen?',
        date: 'Datum',
        dateNext: 'Nächster Besuch frühestens',
        harbor: 'Hafen',
        harborId: 'Hafen',
        harborIdValues: {
          placeholder: 'Wähle einen Hafen'
        },
        country: 'Land',
        languageId: {
          noElements: 'Noch keine Sprachen hinzugefügt',
          deleteConfirmation: 'Möchtest du wirklich diese Sprache löschen?'
        },
        language: {
          new: 'Eine Sprache hinzufügen',
          languageId: 'Sprache',
          languageIdValues: {
            placeholder: 'Wähle eine Sprache'
          }
        },
        languages: 'Sprachen an Board'
      }
    },
    search: {
      placeholder: 'Schiffsname, Rufzeichen, ENI, IMO oder MMSI'
    },
    details: {
      sections: {
        identification: 'Identifikationsdaten',
        visit: 'Besuchsdaten'
      },
      dateFormat: 'DD.MM.YYYY'
    },
    visit: {
      details: {
        sections: {
          main: 'Besuchsdaten',
          language: 'Sprachen an Board',
          option: 'Optionen'
        },
        dateFormat: 'DD.MM.YYYY'
      }
    }
  },
  notes: {
    description: 'Здесь можно создавать простые заметки. Любой администратор, планировщик смен и служитель литературы этого проекта может видеть эти заметки. Таким образом, вы вместе как команда можете держать эти заметки в виду.',
    createNote: 'Создать заметку',
    title: 'Название',
    text: 'Текст',
    deleteNote: 'Удалить заметку'
  }
}

export default pages
