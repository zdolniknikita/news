import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getNews } from '../actions'
import ListItem from './ListItem'

class NewsList extends Component {

    state = {
        limit: 6
    }

    componentDidMount() {
        this.props.getNews()
    }

    onclickHandler = () => {
        const { limit } = this.state

        this.setState({ limit: limit + 6 })
    }
    
    render() {
        
        const { news, loading } = this.props
        const { limit } = this.state
        const { onclickHandler } = this

        return(
            <div className='container'>
                
                <h1> Список новостей </h1>
                <ol>
                    {
                        loading ? (
                            'Загрузка'
                        ) : (
                            news.slice(0, limit).map(( item, index ) => <ListItem key={index} new={item}/>)
                        )
                    }
                </ol>

                {
                    ( limit >= news.length ) ? (
                        null
                    ) : (
                        <div>
                            <button onClick={onclickHandler}> Смотреть еще... </button>
                        </div>
                    )
                }

            </div>
        )
    }
}

/*
    Redux
*/

const mapStateToProps = ( state, ownProps ) => {

    const { data, loading, loaded } = state.news
    return { 
        news: data,
        loading,
        loaded
    }
}

const mapDispatchToProps = {
    getNews
}

export default connect( mapStateToProps, mapDispatchToProps )( NewsList )