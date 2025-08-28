import { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import Filters from './Filters';
import fruitAction from '../../store/fruits/fruitsActions';

const FiltersContainer = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [inSeason, setInSeason] = useState<string>('');

  const noFilters = useMemo(() => !name && !color && !inSeason, [name, color, inSeason]);

  const searchFruits = () => {
    noFilters ?
      dispatch(fruitAction.fetchAll()) :
      dispatch(fruitAction.fetch({ name, color, inSeason }));
  }

  const clearFilters = () => {
    setName('');
    setColor('');
    setInSeason('');
  }

  return (
    <Filters
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      inSeason={inSeason}
      setInSeason={setInSeason}
      onSearch={searchFruits}
      onClear={clearFilters}
      noFilters={noFilters}
    />
  );
}

export default FiltersContainer;