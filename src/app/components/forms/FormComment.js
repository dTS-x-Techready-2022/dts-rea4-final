import React from 'react'

export default function FormComment() {
   return (
      <div className="bg-light mb-3" style={{ padding: 30 }}>
         <h3 className="mb-4">Leave a comment</h3>
         <form>
            <div className="form-group">
               <label htmlFor="name">Name *</label>
               <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email *</label>
               <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
               <label htmlFor="website">Website</label>
               <input type="url" className="form-control" id="website" />
            </div>
            <div className="form-group">
               <label htmlFor="message">Message *</label>
               <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
            </div>
            <div className="form-group mb-0">
               <input type="submit" defaultValue="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
            </div>
         </form>
      </div>
   )
}
