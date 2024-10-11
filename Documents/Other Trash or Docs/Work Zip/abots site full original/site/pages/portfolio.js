import Layouts from '@layouts/root'

import Portfolio from '@domains/portfolio'

function PortfolioScreen({ ...props }) {
  return (
    <Portfolio {...props} />
  )
}

PortfolioScreen.getLayout = function getLayout(page) {
  return (
    <Layouts>{page}</Layouts>
  )
}

export default PortfolioScreen;