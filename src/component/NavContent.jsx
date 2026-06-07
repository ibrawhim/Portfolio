import { CgProfile } from 'react-icons/cg'
import { MdOutlineContactPhone } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { BiCodeAlt } from 'react-icons/bi'
import { MdMiscellaneousServices } from 'react-icons/md'

export const navObj = [
  { title: 'About',    link: 'about',     icon: <CgProfile /> },
  { title: 'Skills',   link: 'skills',    icon: <GiSkills /> },
  { title: 'Portfolio',link: 'portfolio', icon: <BiCodeAlt /> },
  { title: 'Services', link: 'services',  icon: <MdMiscellaneousServices /> },
  { title: 'Contact',  link: 'contact',   icon: <MdOutlineContactPhone /> },
]