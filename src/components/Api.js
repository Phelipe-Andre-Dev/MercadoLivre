const Api = async(query) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    const dados = await response.json();
    return dados.results;

}
export default Api;