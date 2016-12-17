import React, { Component, PropTypes } from 'react'

export default class LazyImage extends Component {

  static propTypes = {
    alt: PropTypes.string,
    color: PropTypes.string,
    small: PropTypes.string,
    image: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    keepAspect: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      largeImage: null
    }
    this.timeout = null
  }

  loadLargeImage = (image) => {
    const largeImage = new Image()
    largeImage.onload = () => {
      this.timeout = setTimeout(() => {
        this.setState({ largeImage })
      })
    }
    largeImage.src = image
    // fetch(image)
    //   .then(res => res.blob())
    //   .then(blob => URL.createObjectURL(blob))
    //   .then(objectUrl => {
    //     this.timeout = setTimeout(() => {
    //       this.setState({ largeImage: objectUrl })
    //     })
    //   })
  }

  componentWillMount() {
    const image = this.props.image
    if (typeof image === 'string' && image !== '') {
      this.loadLargeImage(image)
    }
  }

  componentWillUnmount() {
    if (typeof this.timeout === 'number') {
      clearTimeout(this.timeout)
    }
  }

  componentWillReceiveProps(props) {
    if (typeof props.image === 'string' && props.image !== '') {
      this.loadLargeImage(props.image)
    }
  }

  render() {
    const { alt, color, small, style, keepAspect, image, width, height, below } = this.props

    const imageVisible = !!this.state.largeImage

    const placeholderStyle = Object.assign({
      width,
      height,
      backgroundColor: color,
      backgroundImage: `url(${small})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: 0,
      overflow: 'hidden',
      position: 'relative',
      zIndex: below ? -1 : 0
    }, style || {})

    const imageStyle = {
      opacity: imageVisible ? 1 : 0,
      top: 0,
      left: 0,
      transition: 'opacity 750ms linear',
      height: keepAspect ? '100%' : 'auto',
      width: keepAspect ? 'auto' : '100%'
    }

    return (
      <div style={placeholderStyle}>
        <img style={imageStyle} src={image} alt={alt} />
      </div>
    )
  }

}
