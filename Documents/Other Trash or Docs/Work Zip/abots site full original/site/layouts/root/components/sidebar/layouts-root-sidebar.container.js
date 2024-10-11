import React, { useMemo } from 'react'

import SidebarView from "./layouts-root-sidebar.view"

import { useRouter } from 'next/router'

// import {sections, adminSections} from "./sidebar.data"

export default function LayoutsRootSidebarContainer({ ...props }) {
  const router = useRouter();

  // const sectionsRender = useMemo(() => {
  //   // let res = [...sections];

  //   // if (props.user?.role === "admin") res.push(adminSections);

  //   return sections?.filter(item => !item.isAdmin || props.user?.role === "admin");
  // }, [props.user])

  // const activeRoute = useMemo(() => {
  //   return router.asPath
  //   // return router.asPath.split("/").slice(0, 2).join('/');
  // }, [router.asPath])

  return (
    <SidebarView {...props} pathname={router.pathname} />
  )
}
