/* import data from '../../books.json' */
import { DataBook } from '../types'
import { AnimatePresence, motion } from 'framer-motion'
/* const books: DataBook[] = data.library.map((data) => data.book) */
import { BookMark, BookMarkFill } from '../utils/icons'
import AsideList from './AsideList'
import { useState } from 'react'

interface CardProps{
    data: DataBook[],
  }

function CardBook ({ data }: CardProps) {
  const [readList, setReadList] = useState<DataBook[]>([])

  /* Recibe un libro de tipo DataBook ISBN, osea ID */
  const handleChange = (book: DataBook['ISBN']) => {
    /* De la data, es decir, todos los libros, encuentra el libro (item.ID) que sea igual a el libro esperado que tambien es un ID  */
    const findBook = data.find((item) => item.ISBN === book)
    if (findBook) {
      /* Si lo encuentra , creamos una variable que pregunta si readLIst  incluye el item esperado (encontrado) */
      /* si ya lo incluye, entonces filtra el elemento que sea diferente al buscado, sino lo encuentra entonces devuelve la lista de libros y añade el libro buscado */

      const draft = readList.includes(findBook) //* Pregunta si ya lo tiene en el readList */
        ? readList.filter((readBook) => readBook !== findBook)
        : [...readList, findBook] //* Si no lo añade */
      setReadList(draft)
    }
  }

  return (
    <>

      <ul className='grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6    lg:max-w-4xl  ' >
          <AnimatePresence>
        {data.map((book) => (

          <motion.li key={book.ISBN} className='px-5' >
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className='bookImage py-2 px-1 relative w-52'>
              <img
                src={book.cover}
                alt=''
                loading='lazy'
                className='aspect-[9/14] object-cover rounded-lg cursor-pointer  mx-4'

              />
              <button className="absolute top-7 right-3 rounded-3xl bg-black  p-1  text-white z-10 cursor-pointer" onClick={() => handleChange(book.ISBN)}>

                {readList.includes(book) ? <BookMarkFill /> : <BookMark/> }

              </button>

            </motion.div>

            <div className='cardInfo pt-2 text-2xl text-center'>
                <h2 className='font-semibold r'>{book.title}</h2>
              <p>{book.author.name}</p>
              <p>{book.year}</p>
              <p className='font-bold'>
                {book.pages} <span className='text-cyan-500'>págs</span>
              </p>
            </div>
          </motion.li>
        ))}
        </AnimatePresence>
      </ul>

      <div>
         <AsideList data={readList}/>
      </div>
    </>
  )
}

export default CardBook
