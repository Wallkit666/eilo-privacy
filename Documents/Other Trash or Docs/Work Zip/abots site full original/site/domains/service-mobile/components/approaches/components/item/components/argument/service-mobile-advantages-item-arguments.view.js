import React from 'react'

import * as S from './service-mobile-advantages-item-arguments.styled'

function ServicesAdvantagesItemArgumentsView({ className, data, type }) {
  return (
    <S.Container className={className}>
      <S.Icon name={type} size={18} />

      <S.Title>{data?.title}</S.Title>
    </S.Container>
  )
}

// ServicesAdvantagesItemArgumentsView.defaultProps = {
//   type: "plus"
// }

export default ServicesAdvantagesItemArgumentsView;
