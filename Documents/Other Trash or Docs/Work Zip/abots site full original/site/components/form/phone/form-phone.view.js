import React from "react";

import FormItem from "@components/form/item";

import * as S from "./form-phone.styled";

export default function FormPhoneView({ className, ...props }) {
  return (
    <FormItem className={className} title="Phone">
      <S.Input
        {...props}
        // country={"us"}
        enableSearch
        autocomplete="off"
        searchPlaceholder="Search"
      />
    </FormItem>
  );
}
