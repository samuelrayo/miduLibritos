import { DataBook } from '../types'
import { motion } from 'framer-motion'

interface AsideProps{
  data: DataBook[],
}

function AsideList ({ data }: AsideProps) {
  return (
    <aside className={`${data.length === 0 ? 'hidden' : 'static'} bg-slate-300 h-screen w-[300px]`}>
        <section className='mx-3 flex h-full'>
                <div className="  overflow-y-hidden pt-10">
                    <ul className="w-full pt-4 ">
                        {data.map(info => (
                            <motion.li className="h-[50px]  px-2 cursor-pointer " key={info.ISBN}
                                whileHover={{ y: -30 }}
                                transition={{ duration: 0.175 }}
                            >
                                <article className='relative   '>
                                    <img src={info.cover} alt={info.title} className='w-64 rounded-sm   z-50 aspect-auto  ' />
                                </article>

                        </motion.li>

                        ))}

                    </ul>

                </div>
            </section>
    </aside>
  )
}

export default AsideList
