import { iFruit } from '../../constants/interfaces';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import styled from '@emotion/styled';

interface SquareColorProps {
  squareColor: string;
}

const ColoredSquare = styled.div<SquareColorProps>`
    background-color: ${({ squareColor }) => squareColor};
`;

const FruitReadOnly = ({ name, colors, inSeason }: iFruit) => (
    <div style={{ padding: 10, display: 'flex' }}>
        <TextField style={{ padding: 10 }} label="Name" value={name} disabled/>
        <TextField
            style={{ padding: 10, width: 200 }}
            label="Colors"
            disabled
            slotProps={{
            input: {
                startAdornment: (
                <InputAdornment position="start">
                    {(colors || []).map(color => <ColoredSquare key={color} squareColor={color} className="colored-square" />)}
                </InputAdornment>)},
            }}
            variant="standard"
        />
        <FormControlLabel style={{ padding: 10 }} control={<Checkbox checked={inSeason}/>} label="In Season" disabled/>
    </div>
);

export default FruitReadOnly;