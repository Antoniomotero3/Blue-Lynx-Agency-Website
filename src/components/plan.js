import React from 'react'

import PropTypes from 'prop-types'

import Includes from './includes'
import Excludes from './excludes'
import projectStyles from '../style.module.css'
import styles from './plan.module.css'

const Plan = (props) => {
  return (
    <div className={styles['plan']}>
      <div className={styles['details']}>
        <div className={styles['header']}>
          <label className={styles['name']}>{props.Name}</label>
          <div className={styles['pricing']}>
            <h1 className={styles['price']}>{props.Price}</h1>
          </div>
        </div>
        <p className={styles['description']}>{props.Description}</p>
      </div>
      <div className={styles['buy-details']}>
        <a
          href="https://buy.stripe.com/aEUcQSgNs9RGbn27ss"
          target="_blank"
          rel="noreferrer noopener"
          className={styles['link']}
        >
          <div className={` ${styles['buy']} ${projectStyles['button']} `}>
            <span className={styles['text']}>
              <span>Start Professional</span>
              <br></br>
            </span>
          </div>
        </a>
        <div className={styles['features']}>
          <span className={styles['heading']}>{props.Heading}</span>
          <div className={styles['list']}>
            <Includes
              Label="Custom Design"
              rootClassName="root-class-name21"
            ></Includes>
            <Includes
              Label="Constant Support"
              rootClassName="root-class-name22"
            ></Includes>
            <Includes
              Label="Latest Software"
              rootClassName="root-class-name23"
            ></Includes>
            <Includes
              Label="Best Features "
              rootClassName="root-class-name24"
            ></Includes>
            <Includes
              Label="External Setup"
              rootClassName="root-class-name25"
            ></Includes>
            <Includes
              Label="Search Engine Optimization"
              rootClassName="root-class-name26"
            ></Includes>
            <Excludes
              Label="Custom hosting"
              rootClassName="root-class-name19"
            ></Excludes>
            <Excludes
              Label="Daily Upkeep"
              rootClassName="root-class-name20"
            ></Excludes>
            <Excludes
              Label="Security &amp; Protection"
              rootClassName="root-class-name21"
            ></Excludes>
            <Excludes
              Label="Regular Updates"
              rootClassName="root-class-name22"
            ></Excludes>
          </div>
        </div>
      </div>
    </div>
  )
}

Plan.defaultProps = {
  Heading: 'You will get',
  Price: '€199',
  Description:
    'Best suited for businesses that need short term solutions. This plan creates or upgrades your website instantly. (Billed one time.)',
  Name: 'Professional',
}

Plan.propTypes = {
  Heading: PropTypes.string,
  Price: PropTypes.string,
  Description: PropTypes.string,
  Name: PropTypes.string,
}

export default Plan
