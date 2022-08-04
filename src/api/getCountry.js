async function getCountry(countryCode) {
  console.log("[getCountry]")
  const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
  const response = await fetch(url, { mode: "cors" })
  return response.json()
}

export default getCountry
