import UserImag from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-4 bg-slate-100'>
            <div className='flex-1 space-y-4'>
                <h1 className="text-5xl font-extrabold">One Step <br />Closer To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn bg-[#9873FF] text-white font-bold">Get Started</button>
            </div>
            <div className="flex-1">
                <img src={UserImag} className=" " />

            </div>
        </div>
    );
};

export default Banner;