import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Mark from '../components/mark'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Blue Lynx Agency</title>
        <meta
          name="description"
          content="The Go-To place for custom web-design. Optimized for small businesses looking to expand their income and client acquisition. Fast and cost effective service."
        />
        <meta property="og:title" content="Blue Lynx Agency" />
        <meta
          property="og:description"
          content="The Go-To place for custom web-design. Optimized for small businesses looking to expand their income and client acquisition. Fast and cost effective service."
        />
      </Helmet>
      <nav className={styles['navbar']}>
        <img
          alt="image"
          src="/playground_assets/lynx-icon-1500h.png"
          className={styles['image']}
        />
        <div className={styles['nav-content']}>
          <div className={styles['nav-links']}>
            <span className={projectStyles['nav-link']}>Features</span>
            <span className={projectStyles['nav-link']}>Why us</span>
            <span className={projectStyles['nav-link']}>Prices</span>
            <span className={projectStyles['nav-link']}>Contact</span>
          </div>
          <div
            id="open-mobile-menu"
            className={` ${styles['hamburger']} ${projectStyles['get-started']} `}
          >
            <img
              alt="image"
              src="9df4c1d2-c994-4c1e-a57e-b5a81d63ee6c"
              className={styles['image01']}
            />
          </div>
        </div>
        <div id="mobile-menu" className={styles['mobile-menu']}>
          <div className={styles['branding']}>
            <img
              alt="image"
              src="/playground_assets/lynx-icon-1500h.png"
              className={styles['image02']}
            />
            <div id="close-mobile-menu" className={styles['container01']}>
              <img
                alt="image"
                src="9df4c1d2-c994-4c1e-a57e-b5a81d63ee6c"
                className={styles['image03']}
              />
            </div>
          </div>
          <div className={styles['nav-links1']}>
            <span
              className={` ${projectStyles['nav-link']} ${styles['link04']} `}
            >
              Features
            </span>
            <span
              className={` ${projectStyles['nav-link']} ${styles['link05']} `}
            >
              Why us
            </span>
            <span
              className={` ${projectStyles['nav-link']} ${styles['link06']} `}
            >
              Prices
            </span>
            <span
              className={` ${projectStyles['nav-link']} ${styles['link07']} `}
            >
              Contact
            </span>
          </div>
          <div
            className={` ${projectStyles['get-started']} ${styles['get-started']} `}
          >
            <span className={styles['text']}>Get started</span>
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
      <section className={styles['landing-page']}>
        <div className={styles['hero']}>
          <div className={styles['content']}>
            <main className={styles['main']}>
              <header className={styles['header']}>
                <h1 className={styles['heading']}>
                  The Go-To place for custom web design
                </h1>
                <header className={styles['header01']}>
                  <span className={styles['caption']}>
                    Time is your most valuable asset, stop wasting it. Get
                    started today!
                  </span>
                </header>
              </header>
              <div className={styles['buttons']}>
                <a href="#Pricing" className={styles['link08']}>
                  <div
                    className={` ${styles['get-started1']} ${projectStyles['button']} `}
                  >
                    <span className={styles['text01']}>Get started</span>
                  </div>
                </a>
                <a href="#features" className={styles['link09']}>
                  <div
                    className={` ${styles['get-started2']} ${projectStyles['button']} `}
                  >
                    <span className={styles['text02']}>View features</span>
                  </div>
                </a>
              </div>
            </main>
            <div className={styles['highlight']}>
              <div className={styles['avatars']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className={` ${styles['image04']} ${projectStyles['avatar']} `}
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className={` ${styles['image05']} ${projectStyles['avatar']} `}
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className={` ${styles['image06']} ${projectStyles['avatar']} `}
                />
              </div>
              <label className={styles['caption1']}>
                Loved by 50+ businesses like you.
              </label>
            </div>
          </div>
        </div>
      </section>
      <img
        alt="image"
        src="/playground_assets/costlyspottedamericanbittern-max-1mb-200h.gif"
        className={styles['image07']}
      />
      <section className={styles['who-we-are']}>
        <h2 className={styles['text03']}>Who we are</h2>
        <div className={styles['features']}>
          <header
            className={` ${styles['feature']} ${projectStyles['feature']} ${projectStyles['feature-active']} `}
          >
            <h3 className={styles['text04']}>Perception</h3>
            <p className={styles['text05']}>
              We constantly look around the market to be the very first
              implementing the latest tactics.
            </p>
          </header>
          <header
            className={` ${projectStyles['feature']} ${styles['feature1']} `}
          >
            <h3 className={styles['text06']}>Speed</h3>
            <p className={styles['text07']}>
              We believe that it shouldn&apos;t take weeks or months to get
              stuff done. 
            </p>
          </header>
          <header
            className={` ${projectStyles['feature']} ${styles['feature2']} `}
          >
            <h3 className={styles['text08']}>Distinction</h3>
            <p className={styles['text09']}>
              We separate ourselves from our competitors to stand out.
            </p>
          </header>
        </div>
        <div className={styles['container02']}>
          <div className={styles['container03']}>
            <div className={styles['container04']}>
              <div className={styles['container05']}>
                <div className={styles['container06']}>
                  <div className={styles['note']}>
                    <div className={styles['content01']}>
                      <main className={styles['main1']}>
                        <h2 className={styles['heading01']}>
                          What our product looks like
                        </h2>
                      </main>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/before-after-1700h.png"
          className={styles['image08']}
        />
      </section>
      <section id="features" className={styles['section']}>
        <header className={styles['header02']}>
          <h2 className={styles['text10']}>Why do you need a website?</h2>
          <span className={styles['text11']}>
            What should your website do and what are the main benefits of having
            a clear, professional and responsive website for your business?
          </span>
        </header>
        <section className={styles['note1']}>
          <div className={styles['image09']}>
            <img
              alt="image"
              src="/playground_assets/analytics-phone-2200h.png"
              className={styles['image10']}
            />
          </div>
          <div className={styles['content02']}>
            <div className={styles['main2']}>
              <div className={styles['caption2']}>
                <span
                  className={` ${styles['section1']} ${projectStyles['section-head']} `}
                >
                  Features
                </span>
              </div>
              <div className={styles['heading02']}>
                <h2
                  className={` ${projectStyles['section-heading']} ${styles['heading03']} `}
                >
                  Customer engagement and visibility
                </h2>
                <p
                  className={` ${projectStyles['section-description']} ${styles['paragraph']} `}
                >
                  A professional website with interactive features, such as
                  forms, live chat, and social media integration, can improve
                  customer engagement and increase visibility, leading to
                  increased brand awareness, higher sales and long-term success
                  for a small business.
                </p>
              </div>
            </div>
            <a
              href="https://medium.com/@s.nani149645/blue-lynx-3-day-website-design-project-leads-to-increased-customers-and-appointments-for-local-133fd17653ea"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link10']}
            >
              <div className={styles['explore-more']}>
                <p className={styles['text12']}>Explore more -&gt;</p>
              </div>
            </a>
            <a href="#Pricing" className={styles['link11']}>
              <div
                className={` ${styles['get-started3']} ${projectStyles['button']} `}
              >
                <span className={styles['text13']}>Get started</span>
              </div>
            </a>
          </div>
        </section>
        <section className={styles['note2']}>
          <div className={styles['content03']}>
            <div className={styles['container07']}>
              <main className={styles['main3']}>
                <main className={styles['heading04']}>
                  <header className={styles['header03']}>
                    <h2
                      className={` ${projectStyles['section-heading']} ${styles['heading05']} `}
                    >
                      What we offer
                    </h2>
                    <p
                      className={` ${projectStyles['section-description']} ${styles['paragraph1']} `}
                    >
                      Every project is different. We will adapt out systems to
                      fit perfectly for your business and brand. We focus on
                      quality and speed, while completely keeping your brand
                      intact. Nothing is set in stone, it can be changed at any
                      time.
                    </p>
                  </header>
                  <div className={styles['checkmarks']}>
                    <Mark Label="Custom Design"></Mark>
                    <Mark Label="Mobile Optimization"></Mark>
                    <Mark Label="Search Engine Optimization"></Mark>
                  </div>
                </main>
              </main>
              <a href="#Pricing" className={styles['link12']}>
                <div
                  className={` ${styles['get-started4']} ${projectStyles['button']} `}
                >
                  <span className={styles['text14']}>Get started</span>
                </div>
              </a>
            </div>
            <img
              alt="image"
              src="/playground_assets/macbook-website-1500w.png"
              className={styles['image11']}
            />
          </div>
        </section>
      </section>
      <section className={styles['benefits']}>
        <div className={styles['content04']}>
          <div className={styles['caption3']}>
            <span
              className={` ${styles['section2']} ${projectStyles['section-head']} `}
            >
              <span>BENEFITS</span>
              <br></br>
            </span>
          </div>
          <div className={styles['heading06']}>
            <div className={styles['header04']}>
              <h2
                className={` ${projectStyles['section-heading']} ${styles['heading07']} `}
              >
                Main benefits of having a perfect website
              </h2>
            </div>
            <div className={styles['accordion']}>
              <div
                data-role="accordion-container"
                className={` ${styles['element']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details']}>
                  <span className={styles['text17']}>
                    Increased credibility
                  </span>
                  <span
                    data-role="accordion-content"
                    className={styles['text18']}
                  >
                    A professional website gives your small business increased
                    credibility in the eyes of potential customers. It shows
                    that you are a legitimate and trustworthy company.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className={` ${styles['element1']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details01']}>
                  <span className={styles['text19']}>
                    Improved customer engagement
                  </span>
                  <span
                    data-role="accordion-content"
                    className={styles['text20']}
                  >
                    A professional website makes it easy for customers to find
                    the information they need about your products and services,
                    and it provides a platform for engaging with your customers
                    through forms, social media, and other interactive features.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon002']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className={` ${styles['element2']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details02']}>
                  <span className={styles['text21']}>Increased visibility</span>
                  <span
                    data-role="accordion-content"
                    className={styles['text22']}
                  >
                    A professional website can help increase your small
                    business&apos;s visibility online, making it more likely
                    that customers will find you through search engines.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon004']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className={` ${styles['element3']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details03']}>
                  <span className={styles['text23']}>Greater convenience</span>
                  <span
                    data-role="accordion-content"
                    className={styles['text24']}
                  >
                    A professional website allows customers to purchase products
                    or services, get support, and access information from the
                    comfort of their own home, which can greatly increase their
                    convenience.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon006']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className={` ${styles['element4']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details04']}>
                  <span className={styles['text25']}>
                    Cost-effective marketing
                  </span>
                  <span
                    data-role="accordion-content"
                    className={styles['text26']}
                  >
                    A professional website can serve as a cost-effective
                    marketing tool, allowing you to reach a wider audience at a
                    lower cost than traditional marketing methods.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon008']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className={` ${styles['element5']} ${projectStyles['accordion-element']} `}
              >
                <div className={styles['details05']}>
                  <span className={styles['text27']}>A 24/7 shop window</span>
                  <span
                    data-role="accordion-content"
                    className={styles['text28']}
                  >
                    A professional website is available for customers 24 hours a
                    day, 7 days a week, meaning that customers can access
                    information and purchase products or services at any time.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className={styles['icon010']}
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/women-website-1500w.png"
          className={styles['image12']}
        />
      </section>
      <section id="Pricing" className={styles['pricing']}>
        <main className={styles['pricing1']}>
          <header className={styles['header05']}>
            <header className={styles['left']}>
              <span
                className={` ${styles['section3']} ${projectStyles['section-head']} `}
              >
                Pricing
              </span>
              <h2
                className={` ${projectStyles['section-heading']} ${styles['heading08']} `}
              >
                Start small, think big
              </h2>
            </header>
          </header>
          <div className={styles['plans-container']}>
            <main className={styles['plans']}>
              <div className={styles['plan']}>
                <div className={styles['details06']}>
                  <div className={styles['header06']}>
                    <label className={styles['name']}>Professional</label>
                    <div className={styles['pricing2']}>
                      <h1 className={styles['price']}>€499</h1>
                    </div>
                  </div>
                  <p className={styles['description']}>
                    Best suited for businesses that need short term solutions.
                    This plan creates or upgrades your website instantly.
                    (Billed one time.)
                  </p>
                </div>
                <div className={styles['buy-details']}>
                  <a
                    href="https://buy.stripe.com/aEUcQSgNs9RGbn27ss"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link13']}
                  >
                    <div
                      className={` ${styles['buy']} ${projectStyles['button']} `}
                    >
                      <span className={styles['text29']}>
                        <span>Start Professional</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <div className={styles['features1']}>
                    <span className={styles['heading09']}>You will get</span>
                    <div className={styles['list']}>
                      <div className={styles['mark']}>
                        <div className={styles['icon012']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon013']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label']}>Custom Design</label>
                      </div>
                      <div className={styles['mark01']}>
                        <div className={styles['icon015']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon016']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label01']}>
                          Constant Support
                        </label>
                      </div>
                      <div className={styles['mark02']}>
                        <div className={styles['icon018']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon019']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label02']}>
                          Latest Software
                        </label>
                      </div>
                      <div className={styles['mark03']}>
                        <div className={styles['icon021']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon022']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label03']}>
                          Best Features
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </label>
                      </div>
                      <div className={styles['mark04']}>
                        <div className={styles['icon024']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon025']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label04']}>
                          External Setup
                        </label>
                      </div>
                      <div className={styles['mark05']}>
                        <div className={styles['icon027']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon028']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label05']}>
                          Search Engine Optimization
                        </label>
                      </div>
                      <div className={styles['mark06']}>
                        <div className={styles['icon030']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon031']}
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className={styles['label06']}>
                          Custom hosting
                        </label>
                      </div>
                      <div className={styles['mark07']}>
                        <div className={styles['icon033']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon034']}
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className={styles['label07']}>
                          Daily Upkeep
                        </label>
                      </div>
                      <div className={styles['mark08']}>
                        <div className={styles['icon036']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon037']}
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className={styles['label08']}>
                          Security &amp; Protection
                        </label>
                      </div>
                      <div className={styles['mark09']}>
                        <div className={styles['icon039']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon040']}
                          >
                            <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                          </svg>
                        </div>
                        <label className={styles['label09']}>
                          Regular Updates
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['plan1']}>
                <div className={styles['details07']}>
                  <div className={styles['header07']}>
                    <label className={styles['name1']}>Convenience</label>
                    <div className={styles['pricing3']}>
                      <span className={styles['price1']}>€599</span>
                    </div>
                  </div>
                  <p className={styles['description1']}>
                    Best suited for businesses that don&apos;t want the hassle
                    of a website, a small monthly fee takes care of all your
                    worries. (Billed once, then monthly.)
                  </p>
                </div>
                <div className={styles['buy-details1']}>
                  <a
                    href="https://buy.stripe.com/aEUcQSgNs9RGbn27ss"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={styles['link14']}
                  >
                    <div
                      className={` ${styles['buy1']} ${projectStyles['button']} `}
                    >
                      <span className={styles['text32']}>
                        <span>Start Convenience</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <div className={styles['features2']}>
                    <span className={styles['heading10']}>You will get</span>
                    <div className={styles['list1']}>
                      <div className={styles['mark10']}>
                        <div className={styles['icon042']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon043']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label10']}>
                          Custom Design
                        </label>
                      </div>
                      <div className={styles['mark11']}>
                        <div className={styles['icon045']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon046']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label11']}>
                          Constant Support
                        </label>
                      </div>
                      <div className={styles['mark12']}>
                        <div className={styles['icon048']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon049']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label12']}>
                          Latest Software
                        </label>
                      </div>
                      <div className={styles['mark13']}>
                        <div className={styles['icon051']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon052']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label13']}>
                          Best Features
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </label>
                      </div>
                      <div className={styles['mark14']}>
                        <div className={styles['icon054']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon055']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label14']}>
                          External Setup
                        </label>
                      </div>
                      <div className={styles['mark15']}>
                        <div className={styles['icon057']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon058']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label15']}>
                          Search Engine Optimization
                        </label>
                      </div>
                      <div className={styles['mark16']}>
                        <div className={styles['icon060']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon061']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label16']}>
                          Custom Hosting
                        </label>
                      </div>
                      <div className={styles['mark17']}>
                        <div className={styles['icon063']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon064']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label17']}>
                          Daily Upkeep
                        </label>
                      </div>
                      <div className={styles['mark18']}>
                        <div className={styles['icon066']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon067']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label18']}>
                          Security &amp; Protection
                        </label>
                      </div>
                      <div className={styles['mark19']}>
                        <div className={styles['icon069']}>
                          <svg
                            viewBox="0 0 1024 1024"
                            className={styles['icon070']}
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                        </div>
                        <label className={styles['label19']}>
                          Regular Updates
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className={styles['help']}>
          <span className={styles['text35']}>
            <span>Need any help?</span>
            <br></br>
          </span>
          <a
            href="https://calendly.com/bluelynxagency/15min"
            target="_blank"
            rel="noreferrer noopener"
            className={styles['link15']}
          >
            <div className={styles['contact-support']}>
              <p className={styles['text38']}>Contact support -&gt;</p>
            </div>
          </a>
        </div>
      </section>
      <section className={styles['reviews']}>
        <header className={styles['header08']}>
          <header className={styles['left1']}>
            <span
              className={` ${styles['section4']} ${projectStyles['section-head']} `}
            >
              reviews
            </span>
            <h2
              className={` ${styles['heading11']} ${projectStyles['section-heading']} `}
            >
              What previous clients say about us
            </h2>
          </header>
        </header>
        <main className={styles['cards']}>
          <div className={styles['container08']}>
            <section className={styles['card']}>
              <div className={styles['stars']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon072']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon074']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon076']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon078']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon080']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className={styles['content05']}>
                <p className={styles['quote']}>
                  &quot;I was hesitant to invest in a website, but it was the
                  best decision I ever made for my business. The designers
                  brought my vision to life and created a website that truly
                  represents my brand. The process was seamless, and I received
                  exceptional customer service every step of the way. I
                  couldn&apos;t be happier with the final product, and I highly
                  recommend Blue Lynx to anyone looking to take their business
                  to the next level.&quot;
                </p>
                <div className={styles['author']}>
                  <img
                    alt="image"
                    src="/playground_assets/profilepicturemaker-200h.png"
                    className={styles['image13']}
                  />
                  <div className={styles['details08']}>
                    <h1 className={styles['author1']}>Sterk Massage</h1>
                    <label className={styles['position']}>Manager</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className={styles['container09']}>
            <section className={styles['card1']}>
              <div className={styles['stars1']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon082']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon084']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon086']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon088']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon090']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className={styles['content06']}>
                <p className={styles['quote1']}>
                  &quot;I was looking for a website designer, and Blue Lynx came
                  up as the top mark. So, I decided to give them a try because
                  they have great reviews. They really did deliver on their
                  promises and exceeded my expectations. I would definitely
                  recommend them to others.&quot;
                </p>
                <div className={styles['author2']}>
                  <img
                    alt="image"
                    src="/playground_assets/profilepicturemaker%20%5B2%5D-200h.png"
                    className={styles['image14']}
                  />
                  <div className={styles['details09']}>
                    <h1 className={styles['author3']}>Infinity Spa</h1>
                    <label className={styles['position1']}>Owner</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
          <div className={styles['container10']}>
            <section className={styles['card2']}>
              <div className={styles['stars2']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon092']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon094']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon096']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon098']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon100']}>
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <main className={styles['content07']}>
                <p className={styles['quote2']}>
                  &quot;I&apos;ve never met such helpful website designers,
                  especially with the technical issues. They were very
                  professional and extremely responsive to all of my questions
                  and emails. I received more than what I expected in the price
                  range I was willing to pay. The final product was just as
                  beautiful as it was in my mind&apos;s eye. They exceeded every
                  expectation by far!&quot;
                </p>
                <div className={styles['author4']}>
                  <img
                    alt="image"
                    src="/playground_assets/profilepicturemaker%20%5B1%5D-200h.png"
                    className={styles['image15']}
                  />
                  <div className={styles['details10']}>
                    <h1 className={styles['author5']}>Grizzly Amsterdam</h1>
                    <label className={styles['position2']}>Restaurant</label>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </main>
        <div className={styles['view-more']}>
          <p className={styles['text39']}>View more</p>
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={styles['content08']}>
          <div className={styles['container11']}>
            <div className={styles['container12']}>
              <main className={styles['main-content']}>
                <div className={styles['container13']}>
                  <div className={styles['content09']}>
                    <header className={styles['main4']}>
                      <div className={styles['header09']}>
                        <img
                          alt="image"
                          src="/playground_assets/lynx-icon-1500h.png"
                          className={styles['image16']}
                        />
                        <span className={styles['text40']}>
                          Check us out on Social Media!
                        </span>
                      </div>
                      <div className={styles['socials']}>
                        <img
                          alt="image"
                          src="/playground_assets/linkedin-200h.png"
                          className={styles['image17']}
                        />
                        <img
                          alt="image"
                          src="/playground_assets/instagram-200h.png"
                          className={styles['image18']}
                        />
                        <img
                          alt="image"
                          src="/playground_assets/twitter-200h.png"
                          className={styles['image19']}
                        />
                      </div>
                    </header>
                  </div>
                  <main className={styles['subscribe']}>
                    <main className={styles['main5']}>
                      <h1 className={styles['heading12']}>
                        Subscribe to our newsletter
                      </h1>
                      <form
                        name="email"
                        action='&lt;form action="https://formsubmit.co/info@bluelynxagency.com" method="POST" /&gt;'
                        method="POST"
                        enctype="application/x-www-form-urlencoded"
                        className={styles['form']}
                      >
                        <input
                          type="text"
                          name="email"
                          required
                          placeholder="Enter your email"
                          className={` ${styles['textinput']} ${projectStyles['input']} `}
                        />
                        <div
                          Type="submit"
                          className={` ${styles['buy2']} ${projectStyles['button']} `}
                        >
                          <span className={styles['text41']}>-&gt;</span>
                          <span type="submit" className={styles['text42']}>
                            <span>Subscribe now</span>
                            <br></br>
                          </span>
                        </div>
                      </form>
                    </main>
                    <h1 className={styles['notice']}>
                      By subscribing to our newsletter you agree with our Terms
                      and Conditions.
                    </h1>
                  </main>
                </div>
                <section className={styles['copyright']}>
                  <span className={styles['text45']}>
                    © 2022 Blue Lynx Agency. All Rights Reserved.
                  </span>
                </section>
              </main>
            </div>
          </div>
          <section className={styles['copyright1']}>
            <span className={styles['text46']}>
              © 2022 Blue Lynx. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></DangerousHTML>
      </div>
      <div className={styles['image20']}>
        <img
          alt="image"
          src="/playground_assets/cheetah-blue-glow-final.svg"
          className={styles['image21']}
        />
      </div>
    </div>
  )
}

export default Home
