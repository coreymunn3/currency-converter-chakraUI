import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { useState } from 'react';

const CurrencyInput = (props) => {
  const {
    currencyList,
    currencyType,
    setCurrencyType,
    currencyAmount,
    setCurrencyAmount,
    disabled,
  } = props;

  const handleCurrencyTypeChange = (e) => {
    setCurrencyType(e.target.value);
  };

  const handleCurrencyAmountChange = (e) => {
    const validation = /^[0-9\b]+$/;
    const passedValidation = validation.test(e.target.value);

    if (e.target.value !== '' && passedValidation) {
      setCurrencyAmount(parseInt(e.target.value));
    }

    if (!passedValidation) {
      alert('You may only enter a Number');
    }
  };

  return (
    <InputGroup>
      <InputLeftAddon p={0}>
        <Select
          borderTopRightRadius='0px'
          borderBottomRightRadius='0px'
          onChange={handleCurrencyTypeChange}
          value={currencyType}
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Select>
      </InputLeftAddon>
      <Input
        disabled={disabled}
        outline='none'
        value={currencyAmount}
        onChange={handleCurrencyAmountChange}
      />
    </InputGroup>
  );
};

export default CurrencyInput;
