import { TextField } from "@mui/material";

type InputProps = {
    id: string;
    label: string;
    value: string;
    onChange: any;
    rows: number;
    isSmallScreen?: boolean;
};

export default function Input ({ id, label, value, onChange, rows, isSmallScreen}: InputProps) {
    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            margin="normal"
            value={value}
            multiline
            onChange={onChange}
            rows={rows}
            sx={{
                width: isSmallScreen ? '100%' : '558px', // Change width based on screen size
            }}
            InputLabelProps={{
                sx: {
                    color: '#004a8c',
                    fontWeight: 'bold',
                },
            }}
            InputProps={{
                sx: {
                    '& input::placeholder': {
                        color: '#004a8c',
                        fontWeight: 'bold',
                    },
                    '& fieldset': {
                        borderColor: '#004a8c !important',
                    },
                },
            }}
        />
    );
}
