import React from 'react'

import * as S from './layouts-root-footer.styled'

import FacebookSVG from './images/facebook'
import InstagramSVG from './images/instagram'
import TelegramSVG from './images/telegram'
import WhatsappSVG from './images/whatsapp'

import { useMediaQuery } from 'react-responsive'

const items = [
  {
    title: 'Main pages',
    items: [
      {
        label: 'Home',
        route: "/"
      },
      {
        label: 'Services',
        route: "/services"
      },
      {
        label: 'Contacts',
        route: "/contacts"
      }
    ]
  },
  {
    title: 'Services',
    items: [
      {
        label: 'Strategy & Product Definition',
        route: "/services/strategy"
      },
      {
        label: 'Mobile development',
        route: "/services/mobile"
      },
      {
        label: 'Web development',
        route: "/services/web"
      },
      {
        label: 'Chat bot development',
        route: "/services/chatbot"
      }
    ]
  },
  {
    title: 'Social media',
    type: "social",
    items: [
      {
        label: 'LinkedIn',
        icon: "/images/social/linkedin.png",
        route: "https://www.linkedin.com/company/a-bots/",
        target: "_blank"
      },
      {
        label: 'Twitter',
        icon: "/images/social/twitter.png",
        route: "https://twitter.com/AlphaBots_IT",
        target: "_blank"
      }, {
        label: 'YouTube',
        icon: "/images/social/youtube.png",
        route: "https://youtube.com/@alphabots3139",
        target: "_blank"
      },
    ]
  },
]

export default function LayoutsRootFooterView({ onSelect, onOpenModal }) {
  // const isMobile = useMediaQuery({
  //   query: '(max-width: 767.98px)'
  // })

  return (
    <S.Section theme="dark" offsetTopSize="extra-small" offsetBottomSize="extra-small">
      <S.Container>
        <S.Info>
          <S.IconContent>
            <S.Logo src="/images/logo-white.svg" />

            {/* {isMobile && <S.Button mobile title='Estimate project'/>} */}
            <S.Button mobile title='Estimate project' onClick={() => onOpenModal("contacts")} />
          </S.IconContent>

          <S.Description>{`Keep up with the times and automate\nyour business processes with bots.`}</S.Description>

          {/* {!isMobile && <S.Button mobile title='Estimate project'/>} */}
          <S.Button title='Estimate project' onClick={() => onOpenModal("contacts")} />
        </S.Info>

        <S.Content>
          {items.map((item, index) => (
            <S.Item data={item} key={index} onSelect={onSelect} />
          ))}
        </S.Content>
      </S.Container>
    </S.Section>
  )
}
