import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

function RadioButtonsGroup({ 
    label, 
    options, 
    value, 
    onChange, 
    name,
    defaultValue,
    labelColour = 'black',
    radioColour = '#7c3aed',
}) {
  return (
    <FormControl>
      {label && 
        <FormLabel 
        id={`${name}-label`}
        sx={{ 
            color: labelColour,
            '&.Mui-focused': { color: labelColour }
        }}
        >
            {label}
        </FormLabel>}
      <RadioGroup
        aria-labelledby={`${name}-label`}
        value={value}
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <FormControlLabel 
            key={option.value} 
            value={option.value} 
            control={
                <Radio
                    sx={{
                        color: radioColour,
                        '&.Mui-checked': {
                        color: radioColour,
                        },
                    }} 
                />} 
            label={option.label} 
            sx={{ 
                color: labelColour,
                '&.Mui-focused': { color: labelColour }
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

RadioButtonsGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
};

export default RadioButtonsGroup;