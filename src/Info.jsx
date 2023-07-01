import React, { useEffect, useState } from 'react'
import { json, useLocation } from 'react-router-dom';
import SmallCard from './smallCard';
import { renderIntoDocument } from 'react-dom/test-utils';

const Info = ({ id }) => {
    const [loading, setLoading] = useState(false)
    const [recepie, setRecepi] = useState(null);


    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const getMoreDetail = async () => {
        setLoading(true)
        const id = queryParams.get('id');
        const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '705cf4553cmsh3c31dd4b87e4b49p1f85abjsn7c99ed9faca4',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);

            const result = await response.json();
            localStorage.setItem("cachedInfo", JSON.stringify(result));
            setLoading(false)
            setRecepi(result)
            console.log(result);
        } catch (error) {
            setLoading(false)
            setRecepi([])
            console.error(error);
        }
    }
    useEffect(() => {
        const cachedData = localStorage.getItem("cachedInfo");


        const id = queryParams.get('id');
        console.log(id,)
        if (id === JSON.parse(cachedData).id) {



            setRecepi(JSON.parse(cachedData));
            setLoading(false);


        } else {
            console.log('came in error')
            getMoreDetail()

        }

    }, []);
    return (
        <div>
            {
                loading ? <div className="w-full h-[100vh] flex justify-center items-center">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
                    :

                    recepie && <div >
                        <h4 className='text-2xl text-center font-bold m-4'>{recepie.name}</h4>

                        <div className="space-x-4 px-8 flex justify-center flex-wrap space-y-4">

                            <SmallCard title={Object.keys(recepie.nutrition)[0]} content={recepie.nutrition.calories} />
                            <SmallCard title={Object.keys(recepie.nutrition)[1]} content={recepie.nutrition.sugar} />
                            <SmallCard title={Object.keys(recepie.nutrition)[2]} content={recepie.nutrition.protein} />
                            <SmallCard title={Object.keys(recepie.nutrition)[3]} content={recepie.nutrition.fiber} />
                            <SmallCard title={Object.keys(recepie.nutrition)[4]} content={recepie.nutrition.carbohydrates} />


                        </div>

                        <div className='m-4'>
                            {recepie.description}
                        </div>


                        <div className=''>

                            <div className="hero min-h-screen bg-base-200">
                                <div className="w-full hero-content flex-col lg:flex-row-reverse lg:justify-between lg:items-center">
                                    <img className='mx-auto' src={recepie.thumbnail_url} width={400} height={300} alt="" />
                                    <div>

                                        <p className="py-6">
                                            Time requred: {recepie.total_time_minutes ? recepie.total_time_minutes : "Not Mentioned"}
                                        </p>
                                        <p className="py-6">
                                            Total Cost: {recepie.price.total ? "₹" + recepie.price.total : "Not Mentioned"}
                                        </p>


                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>
                            <h4 className='text-center text-xl'>Instructions</h4>

                            {recepie.instructions && recepie.instructions.map((item, index) => {
                                return <p className='mx-24 my-4'>{item.display_text}</p>
                            })}
                        </div>
                    </div>


            }

        </div>
    )
}

export default Info