function Categories() {
    return (
        <>
            <div className="bg-slate-900">
                <div className="container mx-auto py-1 flex">

                    <nav className="logosection gap-8 flex items-center w-4/6" >
                        <a href="" className='text-slate-300 text-sm font-light'>Movies</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Stream</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Events</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Plays</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Sports</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Activities</a>
                        <a href="" className='text-slate-300 text-sm font-light'>Buzz
                            <sup className='text-xs'>New</sup>
                        </a>
                    </nav>

                    <nav className="logosection flex items-center justify-end gap-4 w-2/6" >
                        <a href="" className='text-slate-300 text-xs font-light'>ListYourShow</a>
                        <a href="" className='text-slate-300 text-xs font-light'>Corporates</a>
                        <a href="" className='text-slate-300 text-xs font-light'>Offers</a>
                        <a href="" className='text-slate-300 text-xs font-light'>Gift Cards</a>
                    </nav>
                    
                </div>
            </div>
        </>
    )
}
export default Categories