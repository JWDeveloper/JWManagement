const swal = {
  error: 'Erro',
  publisherInOtherTeam: 'Um dos Publicadores já faz parte de outra equipa. Por favor remova-o da outra equipa primeiro.',
  onlyTeam: 'Você não pode apagar esta equipa. É a única equipa neste turno. Cada turno tem que ter pelo menos uma equipa.',
  noTeamleader: 'Cada equipa tem que ter um Lider de Equipa. Este publicador não tem permissão para ser Lider de Equipa.',
  ownPermission: 'Você não pode remover seus próprios privilégios. Outro Administrador tem que fazer isso.',
  acceptionInformed: 'Este participante foi notificado da aceitação do seu pedido.',
  declinementInformed: 'Este participante foi notificado da negação do seu pedido.',
  logout: {
    title: 'Ajuda',
    text: 'Não tem que desligar sua conta. A sua conecção está codificada e a informação desta sessão fica salva no seu browser. Ninguém pode ver ou roubar sua sessão.',
    confirm: 'Desconectar',
    cancel: 'Cancelar'
  },
  invite: {
    user: {
      title: 'Convidar Publicador?',
      text: 'Este Publicador <b>já tem uma conta</b>, portanto mais nenhuma pode ser criada. Mas o publicador irá <b>ter a permissão de aceder a este projeto</b>.<br>Claro <b>que o iremos informar</b> desta mudança. <br><p>Em caso de haver mais do que um publicador com o mesmo email, escolha o correto:</p>'
    },
    users: {
      title: 'Tem a certeza?',
      text: 'Iremos enviar um email a todos os publicadores selecionados.',
      confirm: 'Convidar',
      cancel: 'Cancelar'
    }
  },
  sendMail: {
    confirmWeek: {
      title: 'Tem a certeza?',
      text: 'Todos os publicadores aceites irão receber um email de confirmação, assim como todos os publicadores não aceites.',
      confirm: 'Sim',
      cancel: 'Cancelar'
    },
    confirmation: {
      title: 'Informar Publicador?',
      text: 'O publicador irá ser informado através de email que foi aceite para este turno.',
      confirm: 'Sim',
      cancel: 'Cancelar'
    },
    declined: {
      title: 'Informar Publicador?',
      text: 'O publicador irá ser informado através de email que não foi aceite para este turno.',
      confirm: 'Sim',
      cancel: 'Cancelar'
    },
    selectTag: {
      title: 'Qual Etiqueta?',
      text: 'Por favor seleciona para que etiquetas você deseja enviar emails de confirmação:',
      confirm: 'OK',
      cancel: 'Cancelar'
    },
    teamUpdate: {
      user: {
        title: 'O Lider de Equipa já foi notificado',
        text: 'O Lider de Equipa já foi notificado. Deseja enviar este email com nova informação?',
        confirm: 'Sim',
        cancel: 'Não'
      },
      general: {
        title: 'Tem a certeza?',
        text: 'Publicadores previamente notificados irão receber esta nova informação acerca da equipa por email.',
        confirm: 'Sim',
        cancel: 'Não'
      }
    },
    understaffed: {
      title: 'Notificar Publicadores?',
      text: 'Informar todos os publicadores acerca desta equipa com falta de pessoal?',
      confirm: 'Sim',
      cancel: 'Não',
      teamleader: {
        title: 'Informar Lideres de Equipa?',
        text: 'InformInformar todos os Lideres de Equipa acerca desta equipa?',
        confirm: 'Sim',
        cancel: 'Não'
      }
    }
  },
  add: {
    meeting: {
      title: 'Adicionar novo ponto de encontro',
      text: '',
      placeholder: 'Nome',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    },
    question: {
      title: 'Adicionar uma nova questão/titulo',
      text: '',
      placeholder: 'Questão/Titulo',
      inputError: 'Você precisa de escrever algo!',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    },
    tab: {
      title: 'Adicionar nova tabela',
      text: '',
      placeholder: 'Titulo',
      inputError: 'Nome de tabela inválido!',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    },
    tag: {
      title: 'Adicionar nova etiqueta',
      text: '',
      placeholder: 'Nome',
      inputError: 'Nome de etiqueta inválido!',
      confirm: 'Criar',
      cancel: 'Cancelar'
    },
    team: {
      title: 'Adicionar nova equipa',
      text: '',
      placeholder: 'Nome',
      inputError: 'Nome de equipa inválido!',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    },
    template: {
      title: 'Adicionar modelo',
      text: '',
      placeholder: 'Nome',
      inputError: 'Nome de modelo inválido!',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    },
    user: {
      title: 'Criado!',
      text: 'Este usuário foi criado.'
    },
    users: {
      title: 'Tem a certeza?',
      text: 'Todos os publicadores aqui mencionados irão ser adicionados ao projeto.',
      confirm: 'Adicionar',
      cancel: 'Cancelar'
    }
  },
  update: {
    file: {
      title: 'Mudar nome de ficheiro',
      text: '',
      placeholder: 'Nome de ficheiro',
      inputError: 'Nome de ficheiro Inválido!',
      confirm: 'Mudar',
      cancel: 'Cancelar'
    },
    password: {
      title: 'Mudar Palavra-passe',
      passwordOld: 'Palavra-passe antiga',
      passwordNew1: 'Palavra-passe nova',
      passwordNew2: 'Repita a Palavra-passe',
      confirm: 'Mudar',
      cancel: 'Cancelar',
      passwordChanged: 'Palavra-passe mudada'
    },
    question: {
      title: 'Mudar Pergunta',
      text: '',
      placeholder: 'Pergunta Titulo',
      confirm: 'Mudar',
      cancel: 'Cancelar'
    },
    template: {
      title: 'Editar nome',
      text: '',
      placeholder: 'Nome',
      confirm: 'Mudar',
      cancel: 'Cancelar'
    }
  },
  delete: {
    account: {
      title: 'Apagar esta conta?',
      text: 'Quando apagada, a conta não podera ser reestabelecida!',
      confirm: 'Apagar minha conta!',
      cancel: 'Cancelar'
    },
    allShifts: {
      title: 'Tem a certeza?',
      text: 'Todos os turnos para este dia e todos os pedidos para estes turnos irão ser apagados definitivamente.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    file: {
      title: 'Tem a certeza?',
      text: 'Este ficheiro irá ser permanentemente apagado.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    language: {
      title: 'Realmente apagar esta linguagem?',
      text: 'Isto irá apagar a linguagem com seu stock.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    meeting: {
      title: 'Realmente pagar este ponto de encontro?',
      text: 'Este ponto de encontro também irá ser removido de todos os turnos existentes que já estejam planeados.',
      checkInput: 'Apagar',
      placeholder: 'Por favor insira "{{0}}" para aprovar',
      inputError: 'O que inseriu não corresponde a "{{0}}"',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    note: {
      title: 'Realmente apagar esta nota?',
      text: 'A nota irá ser definitivamente apagada.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    project: {
      title: 'Realmente apagar este projeto?',
      text: 'Isto irá definitivamente apagar todos as configurações associadas a este projeto, ex: turnos, relatórios, aplicações, literatura, etc. Apenar as contas de usuário irão permanecer.',
      checkInput: 'Apagar este projeto',
      placeholder: 'Por favor insira "{{0}}" para aprovar',
      inputError: 'O que inseriu não corresponde a "{{0}}"',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    publication: {
      title: 'Remover esta publicação de seu armazenamento?',
      text: 'Irá perder toda a informação armazenada para esta publicação.',
      confirm: 'Remover',
      cancel: 'Cancelar'
    },
    question: {
      title: 'Tem a certeza?',
      text: 'Isto irá definitivamente apagar a pergunta e sua resposta.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    shift: {
      title: 'Realmente apagar este turno?',
      text: 'Todos os pedidos para este turno irão ser removidos.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    store: {
      title: 'Realmente reestabelecer a Sala de armazenamento?',
      text: 'Isto irá apagar todas as publicações.',
      confirm: 'Reestabelecer',
      cancel: 'Cancelar'
    },
    tab: {
      title: 'Tem a certeza?',
      text: 'A tabela com todas as perguntas irá ser apagada.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    tag: {
      title: 'Realmente apagar etiqueta?',
      text: 'Todos os turnos pertencentes a esta etiqueta também irão ser apagados. Isto inclui todos os pedidos para estes turnos <br><br> Para confirmar insira "Apagar".',
      checkInput: 'Apagar',
      placeholder: 'Por favor insira "{{0}}" para aprovar',
      inputError: 'O que inseriu não corresponde a "{{0}}"',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    team: {
      title: 'Realmente apagar esta equipa?',
      text: 'Esta equipa irá ser removida de todos os turnos existentes já planeados. Pedidos aceites para este turno irão ser colocados em outras equipas. <br><br> Para confirmar insira "apagar".',
      checkInput: 'Apagar',
      placeholder: 'Por favor insira "{{0}}" para aprovar',
      inputError: 'O que inseriu não corresponde a "{{0}}"',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    template: {
      title: 'Realmente apagar modelo?',
      text: '',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    },
    user: {
      title: 'Realmente apagar este usuário?',
      text: 'Todas as permissões de projeto irão ser revocadas.',
      confirm: 'Apagar',
      cancel: 'Cancelar'
    }
  },
  request: {
    accept: {
      title: 'Aceitar publicador?',
      text: 'Este publicador foi anteriormente negado. Por favor confirme que o publicador ainda pode e quer participar.',
      confirm: 'Sim',
      cancel: 'Não'
    },
    cancel: {
      title: 'Tem a certeza?',
      text: 'A equipa irá ser removida se você for o último participante.',
      confirm: 'Sim, cancelar minha participação.',
      cancel: 'Não'
    },
    decline: {
      title: 'Realmente declinar participante?',
      text: 'Se o participante já foi informado, ele irá receber um email a notificar do contrário.',
      confirm: 'Sim',
      cancel: 'Não'
    },
    maxReached: {
      title: 'Demasiados usuários selecionados',
      text: 'Definir limite máximo de equipa de {{0}} a {{1}} e aceitar a selecção?',
      confirm: 'Aceitar a selecção',
      cancel: 'Cancelar'
    },
    minNotReached: {
      title: 'Número de usuários selecionados não suficiente',
      text: 'Definir limite minimo de equipa de {{0}} a {{1}} e aceitar a seleção?',
      confirm: 'Aceitar a seleção',
      cancel: 'Cancelar'
    },
    minReached: {
      title: 'Realmente declinar participante?',
      text: 'O limite minimo desta equipa foi alcançado. Se você declinar este usuário, o sistema irá remover esta equipa.',
      confirm: 'Remover equipa',
      cancel: 'Não'
    },
    noNewTeamleader: {
      title: 'Realmente declinar participante?',
      text: 'Infelizmente não existe mais nenhum Lider de equipa disponivel nesta equipa. Se declinar este usuário, o sistema irá remover a equipa.',
      confirm: 'Remover equipa',
      cancel: 'Não'
    }
  }
}

export default swal
