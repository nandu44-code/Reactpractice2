import React, { useState, useEffect } from "react";
import axios from 'axios';

function Userdisplay() {

    const [Count, setCount] = useState(0)
    const [Person, setPerson] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [Error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => { 
            setError(null);
            setLoading(true);

            try {
                const personData = await axios.get(`https://jsonplaceholder.typicode.com/users/${Count}`);
                setPerson(personData.data);

            } catch (error) {
                setError('Sorry, something went wrong!!');
            }

            finally {
                setLoading(false);
            }
        }

        fetchData()

    }, [Count]);


    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDecrement = () => {
        setCount((count) => count - 1);
    }

    return (
        <div className="container">
            <div className="counter-container">
                {Loading && <p>Loading....</p>}
                {Error && <p className="error">{Error}</p>}

                {Person && (
                    <div>
                        <h2>Name:{Person.name}</h2>
                        <h2>Email:{Person.email}</h2>
                    </div>
                )
                }
                <button className='plus' onClick={handleIncrement}>+</button>
                <button className='minus' onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

export default Userdisplay;