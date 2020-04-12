export const NEWS_LOADING = 'NEWS_LOADING'
export const NEWS_LOADED = 'NEWS_LOADED'
//899ef09320af40e785cad3393b01c30b
export const getNews = () => ( dispatch, getState ) => {
    
    dispatch({ type: NEWS_LOADING })

    fetch('https://newsapi.org/v2/top-headlines?country=ua&apiKey=899ef09320af40e785cad3393b01c30b&pagesize=100')
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: NEWS_LOADED,
                payload: res.articles 
            })
        })
        .catch(err => console.log(err))
}