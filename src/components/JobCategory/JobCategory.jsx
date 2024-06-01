 import account from '../../assets/icons/accounts.png'
 import creative from '../../assets/icons/creative.png'
 import marketing from '../../assets/icons/marketing.png'
 import engineering from '../../assets/icons/chip.png'
const JobCategory = () => {
    return (
        <div className="space-y-3 my-16">
            <h2 className="text-5xl font-bold text-center ">Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid grid-cols-4 gap-5'>
                <div className='bg-gray-200 p-6 rounded-2xl mt-5'>
                    <img src={account} alt="" />
                    <h2 className="text-2xl">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className='bg-gray-200 p-6 rounded-2xl mt-5'>
                    <img src={creative} alt="" />
                    <h2 className="text-2xl">Creative Design</h2>
                    <p>100+ Jobs Available</p>
                </div>
                <div className='bg-gray-200 p-6 rounded-2xl mt-5'>
                    <img src={marketing} alt="" />
                    <h2 className="text-2xl">Marketing & Sales</h2>
                    <p>150 Jobs Available</p>
                </div>
                <div className='bg-gray-200 p-6 rounded-2xl mt-5'>
                    <img src={engineering} alt="" />
                    <h2 className="text-2xl">Engineering Job</h2>
                    <p>224 Jobs Available</p>
                </div>
            </div>

        </div>
    );
};

export default JobCategory;