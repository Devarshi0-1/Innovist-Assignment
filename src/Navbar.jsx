import { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Logo2 from './assets/bareAnatomyLogo.webp'
import Logo3 from './assets/chemistAtPlayLogo.webp'
import Logo1 from './assets/logo.png'
import Logo4 from './assets/sunScoopLogo.webp'

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

    return (
        <nav className='w-full overflow-hidden bg-slate-950 px-6 py-2 sm:px-2'>
            <div className='flex items-center sm:flex-col'>
                <div className='flex flex-[5] items-center gap-20 sm:w-full sm:justify-between sm:gap-0 sm:px-3 md:flex-[2] lg:gap-5'>
                    <button
                        className='hidden sm:flex sm:flex-1 sm:flex-col sm:gap-2'
                        onClick={() => setHamburgerMenuOpen((prev) => !prev)}>
                        <div
                            className={`h-[1px] w-6 bg-white ${hamburgerMenuOpen ? 'origin-center translate-x-[2px] translate-y-[1px] rotate-[45deg] transition-all' : ''}`}></div>
                        <div
                            className={`h-[1px] w-5 bg-white ${hamburgerMenuOpen ? 'hidden' : ''}`}></div>
                        <div
                            className={`h-[1px] w-6 bg-white ${hamburgerMenuOpen ? 'origin-center translate-x-[2px] translate-y-[-7px] rotate-[-45deg] transition-all' : ''}`}></div>
                    </button>
                    <div className='justify-self-center sm:flex-[8]'>
                        <a href='#' className='flex items-center justify-center'>
                            <img
                                src={Logo1}
                                alt=''
                                className='min-w-[150px] object-contain sm:my-2 sm:min-w-[200px]'
                            />
                        </a>
                    </div>
                    <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-center sm:gap-2 sm:text-2xl'>
                        <a href='#'>
                            <MdOutlineShoppingCart className='text-white' />
                        </a>
                        <a href='#'>
                            <CiUser className='text-white' />
                        </a>
                    </div>
                    <div className='flex items-center gap-8 md:hidden'>
                        <a href='#'>
                            <img
                                src={Logo2}
                                alt=''
                                className='aspect-[3/2] w-1/2 min-w-20 object-contain'
                            />
                        </a>
                        <a href='#'>
                            <img
                                src={Logo3}
                                alt=''
                                className='aspect-[3/2] w-1/2 min-w-20 object-contain'
                            />
                        </a>
                        <a href='#'>
                            <img
                                src={Logo4}
                                alt=''
                                className='aspect-[3/2] w-1/2 min-w-20 object-contain'
                            />
                        </a>
                    </div>
                </div>
                <div className='flex flex-[6]  sm:w-full sm:px-7 md:flex-[6]'>
                    <div className='flex w-11/12 items-center border border-zinc-500 text-white sm:w-full sm:border-white'>
                        <input
                            type='search'
                            name='search'
                            value={searchQuery}
                            placeholder='Search'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='max-w-11/12 max-w-full flex-[9] bg-transparent px-3 py-1 outline-none'
                        />
                        <CiSearch className='flex-[1] text-3xl' />
                    </div>
                    <div className='flex w-3/12 items-center justify-center gap-4 text-3xl sm:hidden'>
                        <a href='#'>
                            <MdOutlineShoppingCart className='text-white' />
                        </a>
                        <a href='#'>
                            <CiUser className='text-white' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-4 text-sm text-white md:hidden'>
                <ul className='flex flex-wrap gap-6 uppercase [&>li]:after:block [&>li]:after:h-[2px] [&>li]:after:w-full [&>li]:after:origin-right [&>li]:after:scale-x-0 [&>li]:after:rounded [&>li]:after:bg-white [&>li]:after:transition-[transform]'>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>BestSeller</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Brands</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Concerns</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Hair Care</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Skin Care</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Sun Care</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Ingredients</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Know us Better</a>
                    </li>
                    <li className='hover:after:origin-left hover:after:scale-x-100'>
                        <a href=''>Innovist Insider</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
