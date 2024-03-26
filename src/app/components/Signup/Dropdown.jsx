import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react'

function Dropdown(props) {
  const { text, nextIcon, width = 100 } = props
  return (
    <div>
      <Menu>
        <MenuHandler>
          <button className={`text-dark-100 flex w-[${width}px]`}>
            {text}
            {nextIcon && (
              <img
                className="w-[9px] h-[5px] ml-[5px] my-[auto]"
                src={nextIcon}
                alt=""
              />
            )}
          </button>
        </MenuHandler>
        <MenuList
          style={{ boxShadow: 'rgba(25, 25, 25, 0.12) 0px 2px 5px 0.5px' }}
          className="w-[100px] h-[117px] py-[8px] rounded-[8px] px-[0px] outline-0 flex flex-col "
        >
          <MenuItem className="outline-0 flex-1 text-start pl-[1.5rem] text-dark hover:bg-[#EAEAEA]">
            English
          </MenuItem>
          <MenuItem className="outline-0 flex-1 text-start pl-[1.5rem] text-dark hover:bg-[#EAEAEA]">
            Espanol
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  )
}

export default Dropdown
