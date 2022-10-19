import React from 'react'
import './Footer.scss';
const Footer = () => {
  return (
    <div className='footer'>
        <div class="container">
        <footer class="py-5">
            <div class="row">
            <div class="col-md-3 col-xs-6">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Audio and Subtitle</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Meida Center</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Security</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">contact us</a></li>
                    <li class="nav-item mb-2">
                        <a href="#" class="nav-link btn buttonCustom">About</a>
                    </li>
                </ul>
            </div>

            <div class="col-md-3 col-xs-6 d-none d-sm-block">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Audio Describtion</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Investor Relation</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Legal Provision</a></li>
                </ul>
            </div>

            <div class="col-md-3 col-xs-6 d-none d-sm-block">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Help center</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Jobs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cookie Preference</a></li>
                </ul>
            </div>

            <div class="col-md-3 col-xs-6 d-none d-sm-block">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Gift Cards</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Term of Use</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Corporate Information</a></li>
                </ul>
            </div>
            </div>

            <div class="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2022 Movies,  All rights reserved.</p>
            </div>
        </footer>
        </div>
    </div>
  )
}

export default Footer