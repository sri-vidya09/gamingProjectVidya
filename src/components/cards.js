import { useState } from 'react'
import Card from './card'

function Cards(){
    const [items, setItems] = useState([
        { id: 1, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684046647/51seH-SzjuL_f9da7a.jpg', stat: "" },
        { id: 1, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684046647/51seH-SzjuL_f9da7a.jpg', stat: "" },
        { id: 2, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319943/samples/animals/reindeer.jpg', stat: "" },
        { id: 2, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319943/samples/animals/reindeer.jpg', stat: "" },
        { id: 3, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684046434/15743453_r4sulc.jpg', stat: "" },
        { id: 3, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684046434/15743453_r4sulc.jpg', stat: "" },
        { id: 4, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319944/samples/sheep.jpg', stat: "" },
        { id: 4, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319944/samples/sheep.jpg', stat: "" },
        { id: 5, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684045333/1674537340_4_duqxxe.jpg', stat: "" },
        { id: 5, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1684045333/1674537340_4_duqxxe.jpg', stat: "" },
        { id: 6, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319947/samples/animals/three-dogs.jpg', stat: "" },
        { id: 6, img: 'https://res.cloudinary.com/dtuk7apnu/image/upload/v1626319947/samples/animals/three-dogs.jpg', stat: "" },
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)

    function check(current){
        if(items[current].id === items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}


export default Cards;
