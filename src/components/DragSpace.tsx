import { DragIcon } from '../utils/icons'

function DragSpace () {
  return (
    <aside className="drag w-96 h-52 mt-10 border-dashed border-2 border-green-700 grid place-items-center p-5 ">
        <h2 className='text-3xl'>Lista de Lectura </h2>
            <div className="logo ">
                <DragIcon />
            </div>

            <div className="text">
                <h4>Arrastra aquí los libros que quieras agregar a tu lista de lectura.</h4>
            </div>
    </aside>
  )
}

export default DragSpace
