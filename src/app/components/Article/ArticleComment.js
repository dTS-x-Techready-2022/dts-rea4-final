import React from 'react'

export default function ArticleComment() {
   return (
      <div className="bg-light mb-3" style={{ padding: 30 }}>
         <h3 className="mb-4">2 Comments</h3>
         <div className="media mb-4">
            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
            <div className="media-body">
               <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
               <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                  Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                  consetetur at sit.</p>
               <button className="btn btn-sm btn-outline-secondary">Reply</button>
            </div>
         </div>
         <div className="media">
            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
            <div className="media-body">
               <h6><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
               <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                  Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                  consetetur at sit.</p>
               <button className="btn btn-sm btn-outline-secondary">Reply</button>
            </div>
         </div>
      </div>
   )
}
