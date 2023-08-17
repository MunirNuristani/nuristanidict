import { RiBook3Line, RiPenNibLine } from "react-icons/ri"
import { BiBook } from 'react-icons/bi' 
import { BsCardImage } from 'react-icons/bs'
import { MdOutlineHistoryEdu } from 'react-icons/md'
import { TiSortAlphabetically } from "react-icons/ti"
import { phrases } from "../utils/i18n"

const { alphabet, dictionary, articles, books, menuItemAlphabet, menuItemDictionary, menuItemBooks, menuItemArticles, landscapeImages, historicalImages, menuItemLandScape, menuItemHistorical, visit } = phrases

export const litratureMenuItems = (lan, iconCSS) => {
  return ([
    {
      name: alphabet[lan],
      icon: <TiSortAlphabetically size={24} className={iconCSS} />,
      pathName: "/alphabets",
      info: menuItemAlphabet[lan]
    },
    {
      name: dictionary[lan],
      icon: <RiBook3Line size={24} className={iconCSS} />,
      pathName: "/dictionary/dictionary",
      info: menuItemDictionary[lan]
    },
    {
      name: articles[lan],
      icon: < RiPenNibLine size={24} className={iconCSS} />,
      pathName: "/listArticles",
      info: menuItemArticles[lan]
    },
    {
      name: books[lan],
      icon: <BiBook size={24} className={iconCSS} />,
      pathName: "/bookList",
      info: menuItemBooks[lan]
    },
  ]
  )
}
export const imageMenuItem = (lan, iconCSS) => {
  return ([
    {
      name: landscapeImages[lan],
      icon: <BsCardImage size={24} className={iconCSS} />,
      pathName: "/landscapeImages",
      info: menuItemLandScape[lan]
    },
    {
      name: historicalImages[lan],
      icon: <MdOutlineHistoryEdu size={24} className={iconCSS} />,
      pathName: "/historicalImages",
      info: menuItemHistorical[lan]
    }
  ]
  )
}
