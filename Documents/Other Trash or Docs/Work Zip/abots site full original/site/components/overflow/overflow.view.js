import React, {useRef} from 'react'

import * as S from './overflow.styled'

export default function OverflowView({className, active, children}) {
  const ref = useRef(null);

  return (
    <S.Container show={active} height={ref.current?.clientHeight}>
      <S.Content className={className} ref={ref} show={children && active}>
        {children}
      </S.Content>
    </S.Container>
  )
}
