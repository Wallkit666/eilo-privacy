import Layouts from '@layouts/root'

import Contacts from '@domains/contacts'

function ContactsScreen({ ...props }) {
  return (
    <Contacts {...props} />
  )
}

ContactsScreen.getLayout = function getLayout(page) {
  return (
    <Layouts>{page}</Layouts>
  )
}

export default ContactsScreen;