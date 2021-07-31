import React, {useState, useEffect} from 'react';
import './FilterButton.css';

const FilterButton = ({value, match, handleForm}) => {
  const [light, setLight] = useState('');

  useEffect(() => {
    if (value === match) {
      setLight('light')
    } else {
      setLight('')
    }
  }, [value, match])

  const handleClick = () => {
    handleForm(value)
  }

  return (
    <button className={`buttonFilter ${light}`} onClick={() => handleClick(value)}>{`${value}`}</button>
  )
}

export default FilterButton;
