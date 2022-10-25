import React from 'react'
import { Row } from 'react-bootstrap'
import CommentSection from './ArticleComment'
import FormComment from '../forms/FormComment'
import Newsletter from '../Newsletter'
import ArticleShare from './ArticleShare'

export default function ArticleDetail() {
   return (
      <>
         <Row className='pt-4'>
            <div className="col-lg-12 mb-3">
               <nav className="breadcrumb bg-transparent m-0 p-0">
                  <a className="breadcrumb-item" href="#">Home</a>
                  <a className="breadcrumb-item" href="#">Category</a>
                  <a className="breadcrumb-item" href="#">Technology</a>
                  <span className="breadcrumb-item active">News Title</span>
               </nav>
            </div>

            <div className="col-lg-8">
               {/* News Detail Start */}
               <div className="position-relative mb-3">
                  <img className="img-fluid w-100" src="https://unsplash.it/800/400/?image=12" style={{ objectFit: 'cover' }} />
                  <div className="overlay position-relative bg-light">
                     <div className="mb-3">
                        <a href>Technology</a>
                        <span className="px-1">/</span>
                        <span>January 01, 2045</span>
                     </div>
                     <div>
                        <h3 className="mb-3">Est stet amet ipsum stet clita rebum duo</h3>
                        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                           magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                           amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                           sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                           aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                           sit stet no diam kasd vero.</p>
                        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                           vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                           nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                           ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                           clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                           justo dolore sit invidunt.</p>
                        <h4 className="mb-3">Est dolor lorem et ea</h4>
                        <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/news-500x280-1.jpg" />
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                           invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                           lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                           rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                           sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                           lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                           sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                           dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                           sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                           duo tempor sea kasd clita ipsum et.</p>
                        <h5 className="mb-3">Est dolor lorem et ea</h5>
                        <img className="img-fluid w-50 float-right ml-4 mb-2" src="img/news-500x280-2.jpg" />
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                           invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                           lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                           rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                           sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                           lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                           sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                           dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                           sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                           duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                           aliquyam et ut.</p>
                     </div>
                  </div>
               </div>
               {/* News Detail End */}

               <CommentSection />

               <FormComment />
            </div>

            <div className="col-lg-4 pt-3 pt-lg-0">
               <ArticleShare />
               <Newsletter />
            </div>
         </Row>


      </>
   )
}
