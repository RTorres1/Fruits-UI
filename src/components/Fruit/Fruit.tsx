import { iFiltersProps } from '../../constants/interfaces';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Fruit = ({
    name,
    setName,
    color,
    setColor,
    inSeason,
    setInSeason,
}: iFiltersProps) => (
    <div className='Fruit-container'>
        <TextField style={{ padding: 10, width: 150 }} label="Name" value={name} onChange={({ target: { value }}) => setName(value)}/>
        <TextField style={{ padding: 10, width: 150 }} label="Color" value={color} onChange={({ target: { value }}) => setColor(value)}/>
        <FormControl style={{ padding: 10, width: 200 }}>
            <InputLabel>In Season</InputLabel>
            <Select
                value={inSeason}
                label="In Season"
                onChange={({ target: { value }}) => setInSeason(value)}
            >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'in'}>In Season</MenuItem>
                <MenuItem value={'out'}>Out of Season</MenuItem>
            </Select>
        </FormControl>
    </div>
);
export default Fruit;