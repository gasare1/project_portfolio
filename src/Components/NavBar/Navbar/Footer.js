import React from 'react'
import { MainFooter } from './navbarelements'
import { ImFacebook, ImYoutube2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'
import { BiCopyright } from 'react-icons/bi'
import { GiSwordsPower } from 'react-icons/gi'
import { NavLink, NavItem } from './navbarelements'
import moe from '../../../images/moecard.jpeg'

import './footer.css'
function Footer() {
    return (
        <div>
            <MainFooter>
                <footer>
                    <div class="container">
                        <div class="row">
                        <hr/>
                            <div class="col-lg-4 col-md-6">
                                <h3>Site Map</h3>
                                <ul class="list-unstyled three-column">
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li>Company</li>
                                </ul>
                                <ul class="list-unstyled socila-list">
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                    <li><img src="http://placehold.it/48x48" alt="" /></li>
                                </ul>
                            </div>
                            
                            <div class="col-lg-4 col-md-6">
                                <h3>latest Homes</h3>
                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Chandler</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Mesa</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <hr/>
                                <div class="media">
                                    <a href="#" class="pull-left">
                                        <img src="http://placehold.it/64x64" alt="" class="media-object" />
                                    </a>
                                    <div class="media-body">
                                        <h4 class="media-heading">Phoenix</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                            </div>
                            
                            <div class="col-lg-4">
                                <h3>Maurice Watome</h3>
                                <img class="img-thumbnail" src={moe} alt="" />
                                
                            </div>
                            <br/>
                        </div>
                    </div>
                    <hr/>
                    <div class="copyright text-center">
                        Copyright &copy; 2021 <span>Call Mr. Moe</span>
                    </div>
                </footer>



            </MainFooter>

        </div>
    )
}

export default Footer
