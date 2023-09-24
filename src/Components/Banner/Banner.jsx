

const Banner = () => {
    return (
        <div className="mt-3">
           <div className="banner-img overflow-visible bg-slate-500">
          <div className="flex items-center">
          <input type="text" placeholder="Search here" className="input input-bordered input-md w-40 md:w-full  max-w-xs mt-80  ml-16  md:ml-44 lg:ml-96" />
         <button className="bg-[#FF444A] text-white mt-80 px-5 py-3 rounded-e-lg">Search</button>
          </div>
           </div>
           <h1 className="text-5xl font-bold text-center -mt-96 text-black bg-opacity-0">I Grow By Helping People In Need</h1>
          
        </div>
    );
};

export default Banner;