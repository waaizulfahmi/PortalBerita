import { Link } from "@inertiajs/react";

const NewNews = () => {
    return (
        <div className="container mx-auto">
            <section className="dark:bg-gray-800 dark:text-gray-100">
	
		<a href="#" className="max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover rounded p-2 lg:p-0 md:p-0 w-full h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 md:p-2 md:mt-4 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold md:text-3xl sm:text-4xl lg:mb-6 hover:underline">Dampak Teknologi Informasi Di Bidang Pendidikan</h3>
                <h4 className="lg:text-base text-sm">Freda Widya Artanti |<span className="lg:text-base text-sm dark:text-gray-400">February 19, 2021</span></h4>
				
				<p className="text-gray-500 lg:text-base text-sm lg:mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus esse minima nam odit incidunt sequi suscipit libero, repudiandae dolore rerum beatae consequuntur porro ab magnam? Dolorum, corrupti. Ab, quibusdam odit.</p>
                <a href="#" className="link">Baca Selengkapnya</a>
            </div>
		</a>
</section>
        </div>

// <div className="container mx-auto">
// <div className="carousel w-full h-80">
//     <div id="slide1" className="carousel-item relative w-full">
//         <div
//             className="hero h-80"
//             style={{
//                 backgroundImage: `url("https://dmm0a91a1r04e.cloudfront.net/YvJcHggXOlJLDoXLGoxJvqv5YwU=/1024x683/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2019%2F10%2F17%2F40be1fb2-82b8-4909-97e0-8aefa6faf3cf_jpg.jpg")`,
//             }}
//         >
//             <div className="hero-overlay"></div>
//             <div className="hero-content justify-center text-neutral-content ">
//                 <div className=" text-lg sm:text-3xl md:text-2xl lg:text-4xl font-bold absolute bottom-5">
//                     {/* <h1 className="mb-5 text-5xl font-bold">
//                                     Hello there
//                                 </h1> */}
//                     <h4 className="mb-3 ml-7 sm:ml-10 lg:ml-24">
//                         Eksklusif! Nadiem Jawab Tudingan Soal
//                         Organisasi Bayangan Kemendikbudristek
//                         Eksklusif!
//                     </h4>
//                     <h5 className="ml-7 lg:ml-24 sm:ml-10 text-sm md:text-lg lg:text-xl">
//                         Nasional | 13.01.2023
//                     </h5>
//                 </div>
//             </div>
//         </div>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//                 ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//                 ❯
//             </a>
//         </div>
//     </div>
//     <div id="slide2" className="carousel-item relative w-full">
//         <div
//             className="hero h-80"
//             style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3l8ZW58MHx8MHx8&w=1000&q=80")`,
//             }}
//         >
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content justify-center text-neutral-content ">
//                 <div className=" text-lg sm:text-3xl md:text-2xl lg:text-4xl font-bold absolute bottom-5">
//                     {/* <h1 className="mb-5 text-5xl font-bold">
//                                     Hello there
//                                 </h1> */}
//                     <h4 className="mb-3 ml-7 sm:ml-10 lg:ml-24">
//                         Eksklusif! Nadiem Jawab Tudingan Soal
//                         Organisasi Bayangan Kemendikbudristek
//                         Eksklusif!
//                     </h4>
//                     <h5 className="ml-7 lg:ml-24 sm:ml-10 text-sm md:text-lg lg:text-xl">
//                         Nasional | 13.01.2023
//                     </h5>
//                 </div>
//             </div>
//         </div>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//                 ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//                 ❯
//             </a>
//         </div>
//     </div>
//     <div id="slide3" className="carousel-item relative w-full">
//         <div
//             className="hero h-80"
//             style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3l8ZW58MHx8MHx8&w=1000&q=80")`,
//             }}
//         >
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content justify-center text-neutral-content ">
//                 <div className=" text-lg sm:text-3xl md:text-2xl lg:text-4xl font-bold absolute bottom-5">
//                     {/* <h1 className="mb-5 text-5xl font-bold">
//                                     Hello there
//                                 </h1> */}
//                     <h4 className="mb-3 ml-7 sm:ml-10 lg:ml-24">
//                         Eksklusif! Nadiem Jawab Tudingan Soal
//                         Organisasi Bayangan Kemendikbudristek
//                         Eksklusif!
//                     </h4>
//                     <h5 className="ml-7 lg:ml-24 sm:ml-10 text-sm md:text-lg lg:text-xl">
//                         Nasional | 13.01.2023
//                     </h5>
//                 </div>
//             </div>
//         </div>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">
//                 ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//                 ❯
//             </a>
//         </div>
//     </div>
//     <div id="slide4" className="carousel-item relative w-full">
//         <div
//             className="hero h-80"
//             style={{
//                 backgroundImage: `url("https://images.unsplash.com/photo-1507358522600-9f71e620c44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c3l8ZW58MHx8MHx8&w=1000&q=80")`,
//             }}
//         >
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content justify-center text-neutral-content ">
//                 <div className=" text-lg sm:text-3xl md:text-2xl lg:text-4xl font-bold absolute bottom-5">
//                     {/* <h1 className="mb-5 text-5xl font-bold">
//                                     Hello there
//                                 </h1> */}
//                     <h4 className="mb-3 ml-7 sm:ml-10 lg:ml-24">
//                         Eksklusif! Nadiem Jawab Tudingan Soal
//                         Organisasi Bayangan Kemendikbudristek
//                         Eksklusif!
//                     </h4>
//                     <h5 className="ml-7 lg:ml-24 sm:ml-10 text-sm md:text-lg lg:text-xl">
//                         Nasional | 13.01.2023
//                     </h5>
//                 </div>
//             </div>
//         </div>
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">
//                 ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//                 ❯
//             </a>
//         </div>
//     </div>
// </div>
// </div>
    );
};

export default NewNews;
