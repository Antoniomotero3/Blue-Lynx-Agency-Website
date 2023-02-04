import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './get-started.module.css'

const GetStarted = (props) => {
  return (
    <a href="#Pricing">
      <div className={` ${styles['get-started']} ${projectStyles['button']} `}>
        <span className={styles['text']}>{props.Text}</span>
      </div>
    </a>
  )
}

GetStarted.defaultProps = {
  Text: 'Get started',
}

GetStarted.propTypes = {
  Text: PropTypes.string,
}

export default GetStarted
