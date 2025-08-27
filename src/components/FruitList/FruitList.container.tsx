import { useState } from 'react';
import { useSelector } from 'react-redux';

import FruitList from './FruitList';
import fruitsSelector from '../../store/fruits/fruitsSelector';

const FruitListContainer = () => {

    const fetchedFruits = useSelector(fruitsSelector.fetchedFruits);

    // use state when adding or removing fruits
    // const [fruits, setFruits] = useState<iFruit[]>(fetchedFruits);

    // const addFruit(name: string, colors: string[], inSeason: boolean){}

    // const deleteFruit(name: string){}


    return <FruitList fruits={fetchedFruits}/>
}
export default FruitListContainer ;