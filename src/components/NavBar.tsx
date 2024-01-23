import { SearchIcon } from '../utils/icons'

function NavBar () {
  return (
    <nav className="navbarContent w-full  grid place-content-center">
        <div className="image ">
            <img src="/mundosdetinta-log.png" alt="logoMundosdetinta" className="w-80 h-full pl-20 cursor-pointer" />
        </div>
        <div className=" w-fit border-cyan-300 border-2 p-3 mx-auto rounded-2xl ">
                <div className=" flex items-center ">
                <input type="text" placeholder='¿En qué libro piensas?' className=" text-3xl   pl-5 outline-none  "/>
                    <div className="iconSearch cursor-pointer">
                      <SearchIcon />
                    </div>

                </div>

        </div>
    </nav>
  )
}

export default NavBar
