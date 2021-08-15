import React from 'react'
import {
  Logo,
  Eyes,
  Facebook,
  Instagram,
  Close,
  VerticalEyes,
  VerticalThykjo,
  VerticalVerkefni,
  Burger,
  BurgerEx,
  Kall,
  Line,
  DotNoFill,
  DotFill,
  AndraLogo,
} from './svg'
import cn from 'classnames'

export type IconType =
  | 'logo'
  | 'eyes'
  | 'facebook'
  | 'instagram'
  | 'close'
  | 'verticalEyes'
  | 'verticalThykjo'
  | 'verticalVerkefni'
  | 'burger'
  | 'burgerEx'
  | 'kall'
  | 'line'
  | 'dotNoFill'
  | 'dotFill'
  | 'andraLogo'
interface Props {
  type: IconType
  className?: string
}

const Icon = ({ type, className }: Props) => {
  const icons: { [key in IconType]: React.ElementType } = {
    logo: Logo,
    eyes: Eyes,
    facebook: Facebook,
    instagram: Instagram,
    close: Close,
    verticalEyes: VerticalEyes,
    verticalThykjo: VerticalThykjo,
    verticalVerkefni: VerticalVerkefni,
    burger: Burger,
    burgerEx: BurgerEx,
    kall: Kall,
    line: Line,
    dotNoFill: DotNoFill,
    dotFill: DotFill,
    andraLogo: AndraLogo,
  }

  const IconSvg = icons[type]

  return <IconSvg className={cn('icon', className)} />
}

export default Icon
