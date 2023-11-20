import { useEffect, useState } from "react";
import axios from 'axios'

const Card = ({ author, quote }) => {
    return (
        <div className="card">
            <h4 style={{ marginBottom: '10px' }}><b>{author}</b></h4>
            <p><i>{quote}</i></p>
        </div>
    )
}
export default function Quotes() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            try {
                let response = await axios.get('https://dummyjson.com/quote')
                console.log({ response })
                setData(response.data.quotes)
            }
            catch (error) {
                alert(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData();

    }, []);
    let cards;
    if (data ) {

        cards = data?.map((item) => {
            return (
                <Card key={item.id} author={item.author} quote={item.quote} />
            )
        })
    }else {
        cards = <h1>NO DATA FOUND </h1>
    }


    return (
        <>

            {isLoading === true ?
                (
                    'loading data'
                ) :
                (
                    cards
                )

            }

        </>
    )
}