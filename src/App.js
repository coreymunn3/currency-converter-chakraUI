import { useState, useEffect } from 'react';
import { Stack, Heading, Divider, Box, Flex } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Layout, ThemeToggle, CurrencyInput } from './components';
import { IconButton } from '@chakra-ui/button';
import { UpDownIcon } from '@chakra-ui/icons';
import { useQuery } from 'react-query';
import { getRates } from './api';

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState('EUR');
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);

  const ratesQuery = useQuery(['rates', fromCurrency], getRates);

  const swap = () => {
    let temp = toCurrency;
    setToCurrency(fromCurrency);
    setFromCurrency(temp);
  };

  // create currencyList
  useEffect(() => {
    if (ratesQuery.data) {
      const currencyOptions = Object.keys(ratesQuery.data.conversion_rates);
      // console.log(currencyOptions);
      setCurrencyList(currencyOptions);
    }
  }, [ratesQuery.data]);

  // update amounts on change
  useEffect(() => {
    if (ratesQuery.data) {
      const conversion = ratesQuery.data.conversion_rates[toCurrency];
      let result = fromCurrencyAmount * conversion;
      result = +result.toFixed(2);
      setToCurrencyAmount(result);
    }
  }, [fromCurrencyAmount, toCurrency, ratesQuery.data]);

  return (
    <Layout>
      <Stack>
        <Flex alignItems='center'>
          <Heading flex={1} align='center' fontSize={['xl', '3xl']}>
            Currency Exchange
          </Heading>
          <ThemeToggle />
        </Flex>

        <Divider />

        <Skeleton isLoaded={!ratesQuery.isLoading} borderRadius='5px'>
          <CurrencyInput
            currencyList={currencyList}
            currencyType={fromCurrency}
            setCurrencyType={setFromCurrency}
            currencyAmount={fromCurrencyAmount}
            setCurrencyAmount={setFromCurrencyAmount}
          />
        </Skeleton>

        <Flex justifyContent='center'>
          <IconButton icon={<UpDownIcon />} onClick={swap} />
        </Flex>

        <Skeleton isLoaded={!ratesQuery.isLoading} borderRadius='5px'>
          <CurrencyInput
            currencyList={currencyList}
            currencyType={toCurrency}
            setCurrencyType={setToCurrency}
            currencyAmount={toCurrencyAmount}
            setCurrencyAmount={setToCurrencyAmount}
            disabled={true}
          />
        </Skeleton>
      </Stack>
    </Layout>
  );
}

export default App;
