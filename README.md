# Currency Converter

[Live Site](https://currency-converter-chakra-ui.vercel.app/)
![Imgur](https://imgur.com/a/ScWJ0Vt)

This application allows a user to convert an amount of one currency into another currency. When the Source currency amount, the source currency type or the destination currency type is changed, the application will update with a new calculation. Please note, only numbers are allowed in the inputs.

## Libraries

- React
- Chakra UI
- react-query
- axios
- react-icons
- ...and their dependencies

## API Data Source

I used [exchange rates api](https://www.exchangerate-api.com/) which is a free exchange rate API data source that limits to 1500 requests per month. If you are getting an error in the app it is likely because the app has been throttled due to rate limiting.
