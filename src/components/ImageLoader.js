import React, { Component } from 'react'


class ImageLoader extends Component {

    state = {
        loaded: false
    }

    componentDidMount() {

        const { src } = this.props

        let img = document.createElement('img')
            img.onload = this.onLoad
            img.src = src
    }

    onLoad = () => {

        this.setState({ loaded: true })
    }

    render() {

        const { src, className } = this.props
        const { loaded } = this.state

        return(
            <>
                {
                    loaded ? (
                        <img
                            className={className}
                            src={src}
                        />
                    ) : (
                        'Загрузка...'
                    )
                }

            </>
        )
    }
}

export default ImageLoader
