import PropTypes from 'prop-types';

import React, { useCallback } from 'react'

import ButtonView from "./button.view"

import { useRouter } from 'next/router'

function ButtonContainer({ to, scroll, target, onClick, ...props }) {
  const router = useRouter()

  const handferClick = useCallback(() => {
    if (props.disabled) {
      return;
    }

    if (to) {
      if (target === "_blank") {
        window.open(to, '_blank')
      } else {
        router.push(to)
      }
    } else if (onClick) {
      onClick()
    }
  }, [props.disabled, to])

  return (
    <ButtonView {...props} onClick={handferClick} />
  )
}

ButtonContainer.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonContainer.defaultProps = {
  scroll: true
}

export default ButtonContainer;