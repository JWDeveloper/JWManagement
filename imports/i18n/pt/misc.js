const misc = {
  input: {
    username: 'Nome de Usuário',
    firstname: 'Primeiro Nome',
    lastname: 'Sobrenome',
    email: 'Endereço de Email',
    telefon: 'Telefone',
    congregation: 'Congregação',
    languages: 'Linguagens',
    gender: 'Sexo',
    privilegeOfService: 'Privilégio de Serviço',
    privilegeOfMinistry: 'Designação de Congregação',
    password: 'Palavra-passe',
    passwordRepeat: 'Repita Palavra-passe',
    newPassword: 'Nova Palavra-passe',
    newPasswordRepeat: 'Repita nova Palavra-passe'
  },
  role: {
    role: 'Função',
    admin: 'Gerente de Projeto',
    shiftAdmin: 'Gerente de Turno',
    storeAdmin: 'Gerente de Loja',
    member: 'Membro',
    teamleader: 'Lider de Equipe',
    substituteTeamleader: 'Lider de Equipe Substituto',
    participant: 'Participante',
    nothing: 'Nada',
    noPermission: 'Sem Permissão'
  },
  permissions: {
    notAdmin: 'Este usuário não é Gerente de Projeto',
    notShiftAdmin: 'Este usuário não é Gerente de Turno',
    notStoreAdmin: 'Este usuário não é Gerente de Loja',
    notProjectParticipant: 'Este usuário não esta participando neste projeto',
    notTeamleader: 'Este usuário não é Lider de Equipe',
    notTagParticipant: 'Este usuário não esta participando nesta etiqueta'
  },
  time: {
    start: 'Começa',
    end: 'Termina',
    suffix: 'horas',
    years: 'Anos',
    to: 'para'
  },
  scheduling: {
    name: 'Agendamento',
    direct: 'Aceite Imediatamente',
    manual: 'Aceita Manualmente'
  },
  password: {
    tooShort: 'A Palavra-passe deve conter pelo menos 8 caractéres',
    notMatching: 'As Palavras-passe não coincidem!'
  },
  weekdays: {
    mo: 'Segunda-Feira',
    tu: 'Terça-Feira',
    we: 'Quarta-Feira',
    th: 'Quinta-Feira',
    fr: 'Sexta-Feira',
    sa: 'Sábado',
    su: 'Domingo'
  },
  intervals: {
    m: 'Manualmente',
    every: 'Cada Semana',
    even: 'Cada 2. Semanas (pares)',
    odd: 'Semana sim, Semana não (impares)'
  }
}

export default misc
