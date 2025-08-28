import Fruit from '../Fruit/FruitReadOnly';
import Title from '../Title/Title';

import { iFruit } from '../../constants/interfaces';

interface FruitListProps {
  fruits: iFruit[];
}

const FruitList = ({ fruits }: FruitListProps) => (
  <div className='Display-panel Blue-border'>
    <Title message={!!fruits?.length ? 'Fruit List': 'No Fruits'}/>
    <ul>
      {(fruits || []).map(({ name, colors, inSeason }) => (
      <Fruit
          key={name}
          name={name}
          colors={colors}
          inSeason={inSeason}
      />))}
    </ul>
  </div>
);

export default FruitList;