import Layouts from '@layouts/root'

import Thank from '@domains/thank'

function ThankScreen({ ...props }) {
  return (
    <Thank {...props} />
  )
}

ThankScreen.getLayout = function getLayout(page) {
  return (
    <Layouts isFooter={false}>{page}</Layouts>
  )
}

export default ThankScreen;