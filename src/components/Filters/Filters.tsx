import Button from '@mui/material/Button';

import Fruit from '../Fruit/Fruit';
import Title from '../Title/Title';

import { iFiltersProps } from '../../constants/interfaces';

interface iFilterProps extends iFiltersProps {
  onSearch: (event: any) => void;
  onClear: (event: any) => void;
  noFilters: boolean,
}

const Filters = ({
  name,
  setName,
  color,
  setColor,
  inSeason,
  setInSeason,
  onSearch,
  onClear,
  noFilters,
}: iFilterProps) => (
  <div className='Display-panel Blue-border' style={{ maxHeight: 200 }}>
    <Title message='Filters'/>
    <div style={{ display: 'flex' }}>
      <Fruit
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
          inSeason={inSeason}
          setInSeason={setInSeason}
      />
     <div style={{ margin: 'auto' }}>
        <Button variant="contained" size="small" onClick={onSearch}>{noFilters ? 'All Fruit' : 'Search'}</Button>
     </div>
     { !noFilters && (
      <div style={{ margin: 'auto' }}>
        <Button variant="outlined" size="small" onClick={onClear}>Clear</Button>
     </div>
     )}
    </div>
  </div>
);
export default Filters;