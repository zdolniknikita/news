import React from 'react'

import ImageLoader from './ImageLoader'

const ListItem = ( props ) => {

    const { title, urlToImage, author, publishedAt } = props.new

    let date = new Date( publishedAt )

        date = `${date.toLocaleTimeString()}, ${date.toLocaleDateString()}`
        
    return(
        <li>
            <div className='li-container'>
                <div className='image-container'>
                    <ImageLoader 
                        src={urlToImage}
                        className={'new-image'}
                    />
                </div>

                <div className='new-title-container'>
                    <h3> { title } </h3>

                    {
                        author ? (
                            <span>
                                <b>Автор:</b> {author}   
                            </span>
                        ) : (
                            null
                        )
                    }
                    <br></br>
                    <span> 
                        <b> Дата: </b> { date } 
                    </span>

                </div>

            </div>
            <hr></hr>
        </li>
    )
}

export default ListItem