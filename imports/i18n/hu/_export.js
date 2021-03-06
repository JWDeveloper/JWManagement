import authentication from './authentication'
import dashboard from './dashboard'
import language from './language'
import mail from './mail'
import misc from './misc'
import modal from './modals'
import navigation from './navigation'
import pages from './pages'
import store from './store'
import swal from './swals'

const hu = {
  ...authentication,
  dashboard,
  language,
  mail,
  ...misc,
  modal,
  navigation,
  ...pages,
  store,
  swal
}

export default hu
