import * as React from 'react'
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">

      <section>
        <nav>
          <ul>
            
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            
            <li>
              <Link to="/#download">
                DOWNLOAD
              </Link>
            </li>
            
            <li>
              <Link to="/#presskit">
                PRESSKIT
              </Link>
            </li>

            <li>
              <Link to="/#features">
                FEATURES
              </Link>
            </li>
            
            <li>
              <Link to="/#videos">
                VIDEOS
              </Link>
            </li>
          
          </ul>
        </nav>
      </section>
 

      <section id='download'>
        <main>
          <h1>Free to try, simple, daycare charting app for iPhone and iPad.</h1>
          <h1>Email or Message a PDF to a parent or guardian.</h1>
          <button><a href='www.apple.com'>START NOW FOR FREE</a></button>
        </main>
        <aside>
        <StaticImage
          alt="Look At Me Daycare running on iPhone"
          src="../images/iphone-running-app.png"
        />
        </aside>
      </section>

      <section id='presskit'>
        <h1>Press Kit</h1>
        <h4>Learn More!</h4>
        <button><a href='/downloads/presskit.zip'>DOWNLOAD</a></button>
      </section>

      <section id='features'>
        <h1>FEATURES</h1>
        <h4>Make tracking your day easier!</h4>
        <aside>
          <StaticImage
            alt="Look At Me Daycare running on iPad"
            src="../images/ipad-running-app.png"
          />
        </aside>
        <main>
          <section>
            <h3>Share info as a PDF</h3>
            <h4><em>The PDF format is an open standard</em></h4>
            
            <hr></hr>

            <p>Parents & guardians can download, read, and share that day's events.</p>
          </section>
        
          <section>
            <h3>Your data stays on your iOS device</h3>
            <h4><em>Because of rising concern over privacy and data usage, the children database exists on the device</em></h4>

            <hr></hr>

            <p>When the user starts a new day, the database clears past events.</p>
          </section>
        </main>

      </section>

      <section id='videos'>
        <h1>Videos</h1>
        <h4>Learn more about Look At Me - Daycare</h4>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iIUp1Qiqoag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Add A Child</h3>
          <p>Try for free with one child; add more children with your subscription within the app.</p>
        </div>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IDuCmJaITuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Chart Today's Events</h3>
          <p>For each child document their activities</p>
        </div>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3p8zfWJIHbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Share</h3>
          <p>Share each child's developments as a PDF file, as is an attachment to an email or a text message.</p>
        </div>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5j2Tgh_-6CQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>Settings</h3>
          <p>Learn more about the Settings within the app.</p>        
        </div>

      </section>



    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
