const publisher = {
  entity: {
    username: 'Логин',
    profile: {
      firstname: 'Имя',
      lastname: 'Фамилия',
      email: 'E-Mail',
      telefon: 'Телефон',
      gender: 'Пол',
      genderValues: {
        m: 'Брат',
        w: 'Сестра'
      },
      congregation: 'Собрание',
      pioneer: 'Преимущества в служении',
      pioneerValues: {
        publisher: 'Возвещатель',
        auxiliary: 'Подсобный пионер',
        regular: 'Пионер',
        special: 'Специальный пионер',
        circuit: 'Районный надзиратель',
        bethelite: 'Вефилец',
        ldc: 'Служитель МПСО'
      },
      privilege: 'Назначение в собрании',
      privilegeValues: {
        publisher: 'Возвещатель',
        servant: 'Служебный помощник',
        elder: 'Старейшина',
        coordinator: 'Координатор',
        secretary: 'Секретарь',
        serviceOverseer: 'Служебный надзиратель'
      },
      language: 'Язык аккаунта',
      languageValues: {
        de: 'Немецкий',
        en: 'Английский',
        fi: 'Финский',
        fr: 'Французский (частично)',
        hu: 'Венгерский',
        it: 'Итальянский',
        pl: 'Польский',
        pt: 'Португальский',
        ru: 'Русский',
        'zh-TW': 'Китайский (традиционный) (частично)',
        'zh-CN': 'Китайский (упрощённый) (частично)'
      },
      languages: 'Иностранные языки',
      shortTermCalls: 'Получать сообщения о нехватки участников',
      shortTermCallsAlways: 'Готов служить экспромтом',
      availability: {
        'new': 'Внести время служения',
        noElements: 'Время служения не указано',
        methodConfirmation: 'Хочешь стереть своё время служения?',
        mondays: 'По Понедельникам',
        tuesdays: 'По Вторникам',
        wednesdays: 'По Средам',
        thursdays: 'По Четрвергам',
        fridays: 'По Пятницам',
        saturdays: 'По Субботам',
        sundays: 'По Воскресеньям',
        start: 'Начало',
        startDateFormat: 'Ч -',
        startValues: {
          '0': '0:00 Чс',
          '1': '1:00 Чс',
          '2': '2:00 Чс',
          '3': '3:00 Чс',
          '4': '4:00 Чс',
          '5': '5:00 Чс',
          '6': '6:00 Чс',
          '7': '7:00 Чс',
          '8': '8:00 Чс',
          '9': '9:00 Чс',
          '10': '10:00 Чс',
          '11': '11:00 Чс',
          '12': '12:00 Чс',
          '13': '13:00 Чс',
          '14': '14:00 Чс',
          '15': '15:00 Чс',
          '16': '16:00 Чс',
          '17': '17:00 Чс',
          '18': '18:00 Чс',
          '19': '19:00 Чс',
          '20': '20:00 Чс',
          '21': '21:00 Чс',
          '22': '22:00 Чс',
          '23': '23:00 Чс'
        },
        end: 'Конец',
        endDateFormat: 'Ч [Часов]',
        endValues: {
          '0': '0:00 Чс',
          '1': '1:00 Чс',
          '2': '2:00 Чс',
          '3': '3:00 Чс',
          '4': '4:00 Чс',
          '5': '5:00 Чс',
          '6': '6:00 Чс',
          '7': '7:00 Чс',
          '8': '8:00 Чс',
          '9': '9:00 Чс',
          '10': '10:00 Чс',
          '11': '11:00 Чс',
          '12': '12:00 Чс',
          '13': '13:00 Чс',
          '14': '14:00 Чс',
          '15': '15:00 Чс',
          '16': '16:00 Чс',
          '17': '17:00 Чс',
          '18': '18:00 Чс',
          '19': '19:00 Чс',
          '20': '20:00 Чс',
          '21': '21:00 Чс',
          '22': '22:00 Чс',
          '23': '23:00 Чс'
        },
        wholeDay: 'Весь день'
      },
      vacation: {
        start: 'Начало',
        end: 'Конец',
        'new': 'Внести новый отпуск',
        noElements: 'Даты отпуска не внесены',
        methodConfirmation: 'Подтверди что ты желаешь стереть даты отпуска',
        startDateFormat: 'ДД.ММ.ГГГГ [до]',
        endDateFormat: 'ДД.ММ.ГГГГ'
      }
    },
    password: {
      change: 'Изменить пароль',
      reset: 'Выслать E-Mail по восстановлению пароля',
      resetConfirmation: 'Подтверди что ты хочешь выслать E-Mail по восстановлению пароля',
      password: 'Ввести новый пароль',
      passwordRepeat: 'Повторить новый пароль'
    },
    permissions: {
      permissions: 'Полномочия',
      project: 'Полномочия в этом проекте',
      projectValues: {
        admin: 'Администратор',
        shiftScheduler: 'Распорядитель смен',
        shiftAdmin: 'Планировщик смен',
        storeAdmin: 'Отвественный за литературу',
        member: 'Простой участник проекта'
      },
      tag: {
        tag: 'Тэг',
        role: 'Роль',
        roleValues: {
          teamleader: 'Руководитель группы',
          substituteTeamleader: 'Зам.Рук. группы',
          participant: 'Участник',
          none: 'Не Участник'
        }
      }
    },
    status: {
      lastLogin: {
        date: 'Дата последнего входа в аккаунт'
      }
    },
    invite: 'Выслать приглашение по E-Mail',
    inviteConfirmation: 'Подтверди что хочешь выслать приглашение по E-Mail',
    delete: 'Удалить участника из проекта',
    deleteConfirmation: 'Подтверди что хочешь удалить участника из проекта!'
  },
  search: { placeholder: 'Имя, Фамилия, E-Mail, Телефон или Логин' },
  details: {
    sections: {
      identification: 'Идентификационные данные',
      availability: 'Готовность/Участие',
      vacations: 'Отпуск',
      password: 'Пароль',
      permissions: 'Полномочия',
      options: 'Опции'
    }
  },
  profile: {
    availability: {
      details: {
        sections: {
          mondays: 'Готовность по понедельникам',
          tuesdays: 'Готовность по вторникам',
          wednesdays: 'Готовность по средам',
          thursdays: 'Готовность по четвергам',
          fridays: 'Готовность по пятницам',
          saturdays: 'Готовность по субботам',
          sundays: 'Готовность по воскресеньям'
        }
      }
    },
    permissions: {
      details: {
        sections: {
          permissions: {
            project: 'Полномочия в проекте',
            tags: 'Полномочия в тэге'
          }
        }
      },
      tag: {
        details: {
          sections: {
            permissions: {
              tag: 'Полномочия в тэге'
            }
          }
        }
      }
    }
  }
}

export default publisher
