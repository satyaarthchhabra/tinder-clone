import React,{useEffect,useState} from 'react'
import './TinderCards.css'
import database from '../firebase';
import TinderCard from 'react-tinder-card';
const TinderCards = () => {
    const [people,setPeople]=useState([])
    useEffect(() => {
database.collection('people').onSnapshot(snapshot =>(
    setPeople(snapshot.docs.map(doc=>doc.data()))
))
return ()=>{

};
    },[])
    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person =>(
                <TinderCard key={person.name} className="swipe" preventSwipe={['up','down']}  >
                    <div style={{backgroundImage:`url(${person.url})`,
                }} className="card">
            <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
