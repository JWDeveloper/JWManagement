const publisher = {
  entity: {
    username: 'Utente',
    profile: {
      firstname: 'Nome',
      lastname: 'Cognome',
      email: 'Email',
      telefon: 'Telefono',
      gender: 'Genere',
      genderValues: {
        m: 'Fratello',
        w: 'Sorella'
      },
      pioneer: 'Privilegio di servizio',
      pioneerValues: {
        publisher: 'Proclamatore',
        auxiliary: 'Pioniere ausiliare',
        regular: 'Pioniere regolare',
        special: 'Pioniere speciale',
        circuit: 'Sorvegliante di circoscrizione',
        bethelite: 'Betelita',
        ldc: 'Servitore delle costruzioni'
      },
      privilege: 'Nomina in congregazione',
      privilegeValues: {
        publisher: 'Proclamatore',
        servant: 'Servitore di ministero',
        elder: 'Anziano',
        coordinator: 'Coordinatore del Corpo degli Anziani',
        secretary: 'Segretario',
        serviceOverseer: 'Sorvegliante del Servizio'
      },
      languages: 'Lingue parlate',
      shortTermCalls: 'Receive understaffed mails',
      shortTermCallsAlways: 'Disponibile a breve',
      availability: {
        new: 'Aggiungi una fascia oraria',
        noElements: 'Nessuna fascia oraria inserita',
        deleteConfirmation: 'Vuoi veramente cancellare questa fascia oraria?',
        mondays: 'Lunedì',
        tuesdays: 'Martedì',
        wednesdays: 'Mercoledì',
        thursdays: 'Giovedì',
        fridays: 'Venerdì',
        saturdays: 'Sabato',
        sundays: 'Domenica',
        start: 'Inizio',
        startDateFormat: 'HH:mm',
        startValues: {
          '0': '00:00',
          '1': '01:00',
          '2': '02:00',
          '3': '03:00',
          '4': '04:00',
          '5': '05:00',
          '6': '06:00',
          '7': '07:00',
          '8': '08:00',
          '9': '09:00',
          '10': '10:00',
          '11': '11:00',
          '12': '12:00',
          '13': '13:00',
          '14': '14:00',
          '15': '15:00',
          '16': '16:00',
          '17': '17:00',
          '18': '18:00',
          '19': '19:00',
          '20': '20:00',
          '21': '21:00',
          '22': '22:00',
          '23': '23:00'
        },
        end: 'Fine',
        endDateFormat: 'HH:mm',
        endValues: {
          '0': '00:00',
          '1': '01:00',
          '2': '02:00',
          '3': '03:00',
          '4': '04:00',
          '5': '05:00',
          '6': '06:00',
          '7': '07:00',
          '8': '08:00',
          '9': '09:00',
          '10': '10:00',
          '11': '11:00',
          '12': '12:00',
          '13': '13:00',
          '14': '14:00',
          '15': '15:00',
          '16': '16:00',
          '17': '17:00',
          '18': '18:00',
          '19': '19:00',
          '20': '20:00',
          '21': '21:00',
          '22': '22:00',
          '23': '23:00'
        },
        wholeDay: 'Giorno intero'
      },
      vacation: {
        start: 'Inizio',
        end: 'Fine',
        new: 'Aggiungi un\'assenza',
        noElements: 'Non ci sono assenze',
        deleteConfirmation: 'Vuoi veramente cancellare questa assenza?',
        startDateFormat: 'DD/MM/YYYY [fino al]',
        endDateFormat: 'DD/MM/YYYY'
      }
    },
    password: {
      change: 'Cambia la password',
      reset: 'Invia la procedura di reset della password tramite email',
      resetConfirmation: 'Vuoi veramente inviare la procedura di reset della password tramite email all\'utente? Attenzione: L\'accesso di questo utente sarà negato fino a che non segua la la procedura di reset della password ricevuta tramite email',
      password: 'Inserisci la nuova password',
      passwordRepeat: 'Conferma la nuova password'
    },
    invite: 'Invia un\'invito al progetto',
    inviteConfirmation: 'Vuoi veramente inviare un\'invito al progetto all\'utente?',
    delete: 'Revoca l\'accesso di questo utente al progetto',
    deleteConfirmation: 'Vuoi veramente revocare l\'accesso di questo utente al progetto?'
  },
  search: {
    placeholder: 'Nome, Cognome, Email, Telefono o Utente'
  },
  details: {
    sections: {
      identification: 'Dati d\'identificazione',
      availability: 'Disponibilità',
      vacations: 'Assenze',
      password: 'Password',
      options: 'Opzioni'
    }
  },
  profile: {
    availability: {
      details: {
        sections: {
          mondays: 'Disponibilità i lunedì',
          tuesdays: 'Disponibilità i martedì',
          wednesdays: 'Disponibilità i mercoledì',
          thursdays: 'Disponibilità i giovedì',
          fridays: 'Disponibilità i venerdì',
          saturdays: 'Disponibilità i sabati',
          sundays: 'Disponibilità le domeniche'
        }
      }
    }
  }
}

export default publisher
