import { LinkProps } from './Link/types'

export type NavProps = {
  links: LinkProps[]
  exact?: boolean
  isOpen?: boolean
  };


export type NavStyledProps = {
  isOpen?: boolean;
}