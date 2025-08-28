import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FruitList from './FruitList';
import fruitsSelector from '../../store/fruits/fruitsSelector';
import fruitAction from '../../store/fruits/fruitsActions';

const FruitListContainer = () => {
    const dispatch = useDispatch();

    const fetchedFruits = useSelector(fruitsSelector.fetchedFruits);

    useEffect(() => {
        dispatch(fruitAction.fetchAll());
    }, [dispatch]);

    return (
        <FruitList
            fruits={fetchedFruits}
        />
    );
}

export default FruitListContainer ;