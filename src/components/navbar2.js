import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navbar2.module.css'

const Navbar2 = (props) => {
  return (
    <nav className={styles['navbar']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['nav-content']}>
        <div className={styles['nav-links']}>
          <span className={projectStyles['nav-link']}>{props.Link}</span>
          <span className={projectStyles['nav-link']}>{props.Link1}</span>
          <span className={projectStyles['nav-link']}>{props.Link2}</span>
          <span className={projectStyles['nav-link']}>{props.Link3}</span>
        </div>
        <div
          id="open-mobile-menu"
          className={` ${styles['hamburger']} ${projectStyles['get-started']} `}
        >
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className={styles['image1']}
          />
        </div>
      </div>
      <div id="mobile-menu" className={styles['mobile-menu']}>
        <div className={styles['branding']}>
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className={styles['image2']}
          />
          <div id="close-mobile-menu" className={styles['container']}>
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className={styles['image3']}
            />
          </div>
        </div>
        <div className={styles['nav-links1']}>
          <span className={` ${projectStyles['nav-link']} ${styles['link4']} `}>
            {props.Link4}
          </span>
          <span className={` ${projectStyles['nav-link']} ${styles['link5']} `}>
            {props.Link5}
          </span>
          <span className={` ${projectStyles['nav-link']} ${styles['link6']} `}>
            {props.Link6}
          </span>
          <span className={` ${projectStyles['nav-link']} ${styles['link7']} `}>
            {props.Link7}
          </span>
        </div>
        <div
          className={` ${projectStyles['get-started']} ${styles['get-started']} `}
        >
          <span className={styles['text']}>{props.Text}</span>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
        ></DangerousHTML>
      </div>
    </nav>
  )
}

Navbar2.defaultProps = {
  image_alt: 'image',
  image_alt2: 'image',
  image_src2: '/playground_assets/lynx-icon-1500h.png',
  Link6: 'Prices',
  Link5: 'Why us',
  Link: 'Features',
  Link2: 'Prices',
  image_alt3: 'image',
  image_src1: '/playground_assets/hamburger-200h.png',
  image_src3: '/playground_assets/hamburger-200h.png',
  Text: 'Get started',
  Link3: 'Contact',
  Link4: 'Features',
  Link1: 'Why us',
  image_src: '/playground_assets/lynx-icon-1500h.png',
  image_alt1: 'image',
  Link7: 'Contact',
}

Navbar2.propTypes = {
  image_alt: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  Link6: PropTypes.string,
  Link5: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src1: PropTypes.string,
  image_src3: PropTypes.string,
  Text: PropTypes.string,
  Link3: PropTypes.string,
  Link4: PropTypes.string,
  Link1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  Link7: PropTypes.string,
}

export default Navbar2
