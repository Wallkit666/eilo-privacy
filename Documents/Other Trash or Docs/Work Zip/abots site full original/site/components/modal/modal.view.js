import React from "react";

import * as S from "./modal.styled";

const ModalView = ({ children, full, overflow, isOpen, onClose }) => {
  return (
    <S.Modal
      isOpen={isOpen}
      closeTimeoutMS={400}
      full={full}
      contentElement={(props, children) => (
        <S.Container {...props} theme="transparent" isPaddingVertical={false}>
          {children}
        </S.Container>
      )}
      onRequestClose={onClose}
    >
      <S.Body>
        <S.Content full={full} overflow={overflow}>
          <S.Close onClick={onClose}>
            <S.Icon name="close" />
          </S.Close>

          <S.Children>{children}</S.Children>
        </S.Content>
      </S.Body>
    </S.Modal>
  );
};

ModalView.defaultProps = {
  overflow: "none",
};

export default ModalView;
