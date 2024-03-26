import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react'

function Dropdown(props) {
  const { text, nextIcon, width = 100 } = props
  return (
    <div>
      <Menu>
        <MenuHandler>
          <button className={`text-dark-100 flex w-[${width}px]`}>
            {text}
            {nextIcon && <img className='w-[9px] h-[5px] ml-[5px] my-[auto]' src={nextIcon} alt="" />}
          </button>
        </MenuHandler>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default Dropdown
