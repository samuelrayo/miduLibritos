import { useMemo, useState, ChangeEvent } from 'react'
import CardBook from './CardBook'
import data from '../../books.json'
import { DataBook } from '../types'

const books: DataBook[] = data.library.map((data) => data.book)

const genresData: string[] = Array.from(new Set(books.map(book => book.genre)))

function ListBooks () {
  const [genre, setGenre] = useState<string>('')
  /*   const [minPages, maxPages] = useState<number[]>() */
  const [pages, setPages] = useState<number>(1200)

  const match = useMemo(() => {
    if (!genre && !pages && pages !== 0) return books
    return books.filter(book => {
      if (genre && book.genre !== genre) return false
      if (book.pages >= pages) return false
      return true
    })
  }, [genre, pages])

  const handleFilterPages = (e: ChangeEvent<HTMLInputElement>) => {
    const numberPage = parseInt(e.target.value)
    setPages(numberPage)
  }

  /*   useEffect(() => {
    setReadList(JSON.parse(localStorage.getItem('readList') ?? '[]') as DataBook['ISBN'][])
  }, []) */

  return (
    <>
    <div className=' w-fit h-fit flex' >
    <select value={genre} onChange={(e) => setGenre(e.target.value)} className=' text-2xl border-2 border-violet-500 rounded-lg p-1 outline-none'>
          <option value="">Todos</option>
            {genresData.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
        </select>
              <label className='w-80 h-fit p-3 flex items-center justify-between bg-slate-50'>
              <span className='barraRellenable'></span>
              <span>Páginas máx</span>
              <span>{pages}</span>
              <input type="range" min={0} max={1200} step={1} className='bg-transparent cursor-pointer '
                value={pages}
                onChange ={handleFilterPages}

              />

              </label>
    </div>
    <article className= 'w-full h-full  bg-white flex  justify-around mt-4 ' >
          <CardBook data= {match} /* onChange={handleChange} readList ={readList} *//>
    </article>
        </>
  )
}

export default ListBooks
