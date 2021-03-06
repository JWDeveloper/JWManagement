const swal = {
  error: 'Λάθος',
  publisherInOtherTeam: 'Ένας ευαγγελιζόμενος είναι ήδη αποδεκτός σε άλλη ομάδα. Παρακαλώ να τον απορρίψεις πρώτα εκεί.',
  onlyTeam: 'Δεν μπορείς να διαγράψεις αυτήν την ομάδα. Είναι η μόνη ομάδα σε αυτή τη βάρδια. Κάθε βάρδια χρειάζεται τουλάχιστον μία ομάδα.',
  noTeamleader: 'Κάθε ομάδα απαιτεί αρχηγό ομάδας. Δυστυχώς αυτός ο ευαγγελιζόμενος δεν έχει άδεια να υπηρετήσει ως αρχηγός ομάδας.',
  ownPermission: 'Δεν μπορείτε να αποσύρετε τα δικαιώματά σας. Αυτό πρέπει να γίνει από άλλο διαχειριστή του έργου.',
  approvalInformed: 'Αυτός ο συμμετέχων έχει ήδη ενημερωθεί για την εγκεκριμένη αίτησή του.',
  declinementInformed: 'Αυτός ο συμμετέχων έχει ήδη ενημερωθεί για την ακύρωση της αίτησή του.',
  vacationEndInPast: 'Η ημερομηνία λήξης δεν μπορεί να είναι στο παρελθόν.',
  missingTag: 'Δεν έχει οριστεί ετικέτα. Δημιουργήστε πρώτα μια ετικέτα. Διαχείριση > Ρυθμίσεις.',
  logout: {
    title: 'Υπαινιγμός',
    text: 'Δεν χρειάζεται να αποσυνδεθείτε. Η σύνδεσή σας είναι κρυπτογραφημένη και αποθηκεύουμε τις πληροφορίες της περιόδου σύνδεσης μόνο στο αποθηκευτικό χώρο του τοπικού προγράμματος περιήγησης. Κανείς δεν μπορεί να σπάσει τη συνεδρία σου.',
    confirm: 'Αποσύνδεση',
    cancel: 'Ακύρωση'
  },
  invite: {
    user: {
      title: 'Πρόσκληση ευαγγελιζομένου;',
      text: 'Εφόσον ο ευαγγελιζόμενος <b>έχει ήδη λογαριασμό</b>, δεν χρειάζεται να δημιουργηθεί άλλος λογαριασμός για αυτόν. Αντίθετα, <b>παίρνει απλώς πρόσβαση σε αυτό το έργο</b>. <br> Φυσικά, <b>τον ενημερώνουμε</b> για αυτό. <br><p>Εάν υπάρχουν περισσότερή ευαγγελιζόμενη με αυτήν τη email, παρακαλώ επιλέξτε το σωστό: </p>'
    },
    users: {
      title: 'Είστε σίγουροι;',
      text: 'Θα αποσταλούν email σε όλους τους επιλεγμένους ευαγγελιζομένους.',
      confirm: 'Αποστολή πρόσκληση',
      cancel: 'Ακύρωση'
    }
  },
  sendMail: {
    confirmWeek: {
      title: 'Είστε σίγουροι;',
      text: 'Όλοι οι εγκεκριμένοι ευαγγελιζόμενοι θα λάβουν μια επιβεβαίωση και όλοι οι  που απορρίφτηκαν θα λάβουν απόρριψη μέσω email.',
      confirm: 'Ναί',
      cancel: 'Ακύρωση'
    },
    confirmation: {
      title: 'Ενημέρωση των ευαγγελιζομένων;',
      text: 'Ο ευαγγελιζόμενος θα ενημερωθεί με email για την κατανομή του.',
      confirm: 'Ναί',
      cancel: 'Ακύρωση'
    },
    declined: {
      title: 'Ενημέρωση των ευαγγελιζομένων;',
      text: 'Ο ευαγγελιζόμενος θα ενημερωθεί με email ότι η αίτησή του απορρίφθηκε.',
      confirm: 'Ναί',
      cancel: 'Ακύρωση'
    },
    selectTag: {
      title: 'Ποια κατηγορία;',
      text: 'Επιλέξτε την κατηγορία που θέλετε να στείλετε:',
      confirm: 'OK',
      cancel: 'Ακύρωση'
    },
    teamUpdate: {
      user: {
        title: 'Ο αρχηγός της ομάδας έχει ήδη ενημερωθεί',
        text: 'Ο αρχηγός της ομάδας έχει ήδη ενημερωθεί. Θέλετε να στείλετε ένα email με αυτήν την ενημέρωση σε αυτόν;',
        confirm: 'Ναί',
        cancel: 'Όχι'
      },
      general: {
        title: 'Είστε σίγουροι;',
        text: 'Όλοι οι ήδη ενημερωμένοι ευαγγελιζομένοι θα λάβουν ένα email με τα ενημερωμένα στοιχεία της ομάδας.',
        confirm: 'Ναί',
        cancel: 'Όχι'
      }
    },
    understaffed: {
      title: 'Ενημέρωση των ευαγγελιζομένων;',
      text: 'Να ενημερωθούν όλοι οι ευαγγελιζόμενοι σχετικά με αυτή την ομάδα; ',
      confirm: 'Ναί',
      cancel: 'Όχι',
      teamleader: {
        title: 'Ενημέρωση των αρχηγών τον ομάδον;',
        text: 'Να ενημερωθούν όλοι οι αρχηγοί των ομάδων για αυτή την ομάδα;',
        confirm: 'Ναί',
        cancel: 'Όχι'
      }
    }
  },
  add: {
    meeting: {
      title: 'Δημιουργία νέου τόπου συνάντησης',
      text: '',
      placeholder: 'Όνομα',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    question: {
      title: 'Δημιουργία ερώτηση/τίτλου',
      text: '',
      placeholder: 'Ερώτηση/Τίτλος',
      inputError: 'Πρέπει να πληκτρολογήσεις κάτι!',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    tab: {
      title: 'Δημιουργία νέας καρτέλας',
      text: '',
      placeholder: 'Τίτλος',
      inputError: 'Μη έγκυρο όνομα για καρτέλα!',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    tag: {
      title: 'Δημιουργία νέας ετικέτας',
      text: '',
      placeholder: 'Όνομα',
      inputError: 'Μη έγκυρο όνομα για ετικέτα!',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    team: {
      title: 'Δημιουργία νέας ομάδας',
      text: '',
      placeholder: 'Όνομα',
      inputError: 'Μη έγκυρο όνομα για μια ομαδα!',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    template: {
      title: 'Δημιουργία εβδομάδας προτύπου',
      text: '',
      placeholder: 'Όνομα',
      inputError: 'Μη έγκυρο όνομα για μια εβδομάδα προτύπου!',
      confirm: 'Δημιουργία',
      cancel: 'Ακύρωση'
    },
    user: {
      title: 'Δημιουργήθηκε!',
      text: 'Ο χρήστης δημιουργήθηκε.'
    },
    users: {
      title: 'Είστε σίγουροι;',
      text: 'Όλοι οι εκδοθέντες ευαγγελιζομένοι θα προστεθούν στο έργο.',
      confirm: 'Προσθήκη',
      cancel: 'Ακύρωση'
    }
  },
  update: {
    file: {
      title: 'Αλλαγή ονόματος αρχείου',
      text: '',
      placeholder: 'Όνομα αρχείου',
      inputError: 'Μη έγκυρο όνομα αρχείου!',
      confirm: 'Αλλαγή',
      cancel: 'Ακύρωση'
    },
    password: {
      title: 'Αλλαγή κωδικόυ πρόσβασης',
      passwordOld: 'Παλιός κώδικας πρόσβασης',
      passwordNew1: 'Νέος κωδικός πρόσβασης',
      passwordNew2: 'Επανάληψη νέου κωδικόυ πρόσβασης',
      confirm: 'Αλλαγή',
      cancel: 'Ακύρωση',
      passwordChanged: 'Ο κωδικός πρόσβασης έχει αλλάξει'
    },
    question: {
      title: 'Αλλαγή ερώτηση/τίτλος',
      text: '',
      placeholder: 'Ερώτηση/Τίτλος',
      confirm: 'Αλλαγή',
      cancel: 'Ακύρωση'
    },
    template: {
      title: 'Αλλαγή ονόματος',
      text: '',
      placeholder: 'Όνομα',
      confirm: 'Αλλαγή',
      cancel: 'Ακύρωση'
    }
  },
  delete: {
    account: {
      title: 'Θέλεις πραγματικά να διαγράψεις το λογαριασμό σου;',
      text: 'Ο λογαριασμός θα διαγραφεί ανεπανόρθωτα και δεν θα μπορεί να αποκατασταθεί!',
      confirm: 'Διαγραφή του λογαριασμού μού',
      cancel: 'Ακύρωση'
    },
    allShifts: {
      title: 'Είσαι σίγουρος;',
      text: 'Όλες οι βάρδιες αυτής της ημέρας και ότι συνάγεται με αυτές θα διαγραφούν αμετάκλητα.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    file: {
      title: 'Θέλεις πραγματικά να διαγράψεις το αρχείο;',
      text: 'Το αρχείο θα διαγραφεί ανεπανόρθωτα',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    language: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτή τη γλώσσα;',
      text: 'Αυτό θα διαγράψει τη γλώσσα, συμπεριλαμβανομένου του αποθέματος.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    meeting: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτό το σημείο συνάντησης;',
      text: 'Τα σημεία συνάντησης διαγράφονται επίσης από τις υπάρχουσες βάρδιες.',
      checkInput: 'Διαγραφή',
      placeholder: 'Για επιβεβαίωση εισάγετε "{{0}}"',
      inputError: 'Η είσοδος δεν ταιριάζει με "{{0}}"',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    note: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτή την σημείωση;',
      text: 'Η σημείωση θα διαγραφεί αμετάκλητα.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    project: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτό το πρότζεκτ;',
      text: 'Ως αποτέλεσμα, όλα τα εξαρτώμενα άμεσα και διαφανώς (όπως βάρδιες, αναφορές, αιτήσεις, δημοσιεύσεις κ.λπ.) διαγράφονται. Μόνο οι λογαριασμοί χρηστών παραμένουν.',
      checkInput: 'Διαγραφή αυτού του έργου',
      placeholder: 'Για επιβεβαίωση εισάγετε "{{0}}"',
      inputError: 'Η είσοδος δεν ταιριάζει με "{{0}}"',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    publication: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτό το έντυπο;',
      text: 'Αυτό θα προκαλέσει την διαγραφή όλων των στοιχείων αυτού του εντύπου.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    question: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτή την ερώτηση;',
      text: 'Αυτό θα διαγράψει αμετάκλητα την ερώτηση και την απάντηση',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    shift: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτη τη βάρδια;',
      text: 'Όλες οι αιτήσεις για αυτή τη βάρδια θα χαθούν.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    store: {
      title: 'Θέλεις πραγματικά να επαναφέρεις την αποθήκη;',
      text: 'Αυτό διαγράψει όλα τα δημιουργημένα έντυπα.',
      confirm: 'Επαναφορά',
      cancel: 'Ακύρωση'
    },
    tab: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτη τη καρτέλα;',
      text: 'Ολόκληρη η καρτέλα με όλες τις ερωτήσεις της θα διαγραφεί.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    tag: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτη τη κατηγορία;',
      text: 'Όλες οι βάρδιες που ανήκουν σε αυτήν την κατηγορία θα διαγραφούν. Ομοίως, όλες οι αιτήσεις θα διαγραφούν σε αυτές της βάρδιες. <br> <br> Παρακαλούμε εισάγετε "Διαγραφή" για επιβεβαίωση.',
      checkInput: 'Διαγραφή',
      placeholder: 'Παρακαλούμε εισάγετε "{{0}}" για επιβεβαίωση.',
      inputError: 'Η είσοδος δεν ταιριάζει με "{{0}}"',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    team: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτή την ομάδα;',
      text: 'Οι ομάδες διαγράφονται επίσης από τις υπάρχουσες βάρδιες. Οι αποδεκτές αιτήσεις σε αυτές τις ομάδες θα διανεμηθούν μεταξύ των άλλων ομάδων. <br> <br> Για επιβεβαίωση εισάγετε "Διαγραφή".',
      checkInput: 'Διαγραφή',
      placeholder: 'Για επιβεβαίωση εισάγετε "{{0}}"',
      inputError: 'Η είσοδος δεν ταιριάζει με "{{0}}"',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    template: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτό το πρότυπο;',
      text: '',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    user: {
      title: 'Θέλεις πραγματικά να διαγράψεις αυτόν τον χρήστη;',
      text: 'Ο χρήστης θα χάσει όλα τα δικαιώματα σε αυτό το έργο.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    },
    wholeWeek: {
      title: 'Θέλεις πραγματικά να διαγράψεις ολόκληροί την εβδομάδα;',
      text: 'Επίσης, όλες οι βάρδιες αυτής της εβδομάδα θα διαγραφούν.',
      confirm: 'Διαγραφή',
      cancel: 'Ακύρωση'
    }
  },
  request: {
    approve: {
      title: 'Έγκριση ευαγγελιζόμενου;',
      text: 'Αυτός ο ευαγγελιζόμενος έχει ήδη απορριφθεί. Βεβαιωθείτε ότι εξακολουθεί να επιθυμεί και είναι σε θέση να συμμετάσχει.',
      confirm: 'Ναί',
      cancel: 'Όχι'
    },
    cancel: {
      title: 'Θέλεις πραγματικά να υποχώρησης την αίτηση;',
      text: 'Αυτό μπορεί να απαιτήσει τη διάλυση ολόκληρης της ομάδας.',
      confirm: 'Υποχώρηση αίτησης',
      cancel: 'Ακύρωση'
    },
    decline: {
      title: 'Είσαι σίγουρος πως θέλεις να απορρίψεις τον συμμετέχοντα;',
      text: 'Εάν ο συμμετέχων έχει ήδη λάβει ένα email, θα λάβει μια επιβεβαίωση της απόδοσης.',
      confirm: 'Ναί',
      cancel: 'Όχι'
    },
    maxReached: {
      title: 'Έχουν επιλεχτεί πάρα πολλοί αιτούντες',
      text: 'Αλλαγή ώριου από {{0}} σε {{1}} και αποδοχή όλων τον επιλεγμένων;',
      confirm: 'Αποδοχή επιλεγμένων',
      cancel: 'Ακύρωση'
    },
    minNotReached: {
      title: 'Δεν έχουν επιλεχθεί αρκετοί αιτούντες',
      text: 'Αλλαγή ώριου από {{0}} σε {{1}} και αποδοχή όλων τον επιλεγμένων;',
      confirm: 'Αποδοχή επιλεγμένων',
      cancel: 'Ακύρωση'
    },
    minReached: {
      title: 'Είσαι σίγουρος πως θέλεις να απορρίψεις τον συμμετέχοντα;',
      text: 'Το ελάχιστο όριο της ομάδας έχει επιτευχθεί. Εάν απορρίψεις αυτόν τον συμμετέχοντα, το σύστημα θα ακυρώσει ολόκληρη την ομάδα.',
      confirm: 'Ακύρωση ολόκληρης ομάδας',
      cancel: 'Όχι'
    },
    noNewTeamleader: {
      title: 'Είσαι σίγουρος πως θέλεις να απορρίψεις τον συμμετέχοντα;',
      text: 'Δυστυχώς, δεν υπάρχει άλλος πιθανός αρχηγός ομάδας. Εάν απορρίψεις αυτόν τον συμμετέχοντα, το σύστημα θα ακυρώσει ολόκληρη την ομάδα.',
      confirm: 'Ακύρωση ολόκληρης ομάδας',
      cancel: 'Όχι'
    }
  }
}

export default swal
