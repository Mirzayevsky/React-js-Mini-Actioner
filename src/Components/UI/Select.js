import React from "react";

const Select = ({options, defaultValue,onChange,value}) => {
    return (
        <select
            className={'sort-select'}
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value={'val'}>{defaultValue}</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}
        </select>
    )
}
export default Select;