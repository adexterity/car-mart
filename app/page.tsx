'use client'

import {useState, useEffect} from 'react'; 

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from 'next/image';

export default function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //search states
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  //filter states
  const [fuel, setFuel] = useState('')
const [year, setYear] = useState(2023)

//pagination states
const [limit, setLimit] = useState(10)

/* const isDataEmpty = !Array(allCars) || allCars.length < 1 || !allCars; */

const getCars = async()=>{
  setLoading(true)
  try{
    const result  = await fetchCars({
      manufacturer: manufacturer || '',
      year: year || 2023,
      fuel: fuel || '',
      limit: limit || 10,
      model: model || '',
    });
    setAllCars(result);
  } catch(error){
    console.log(error)
  }finally{
    setLoading(false)
  }
  
}

useEffect(() => {
  console.log(`fuel:${fuel} , year:${year}, limit:${limit}, manufacturer:${manufacturer}, model:${model}`);

  getCars();
}, [fuel, year, limit, manufacturer, model, getCars])


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Discover Your Ideal Cars</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer = {setManufacturer} setModel= {setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options = {fuels} setFilter= {setFuel}  />
            <CustomFilter title="year" options = {yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index)=>(<CarCard car={car} key={index}/>))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image src='/loader.svg' alt='loader' width={50} height={50} className='object-contain' />
              </div>
            )}


            <ShowMore pageNumber={limit / 10} isNext={limit > allCars.length} setLimit={setLimit} />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
