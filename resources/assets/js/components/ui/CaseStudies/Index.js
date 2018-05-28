import React from 'react';
import SubscribeForm from '../SubscribeForm'
import StunningHeader from '../StunnigHeader'
import Cases from './Cases/Index'
const CaseStudies = ({match}) => {
    return(
        <div className="content-wrapper">

            {/*<!-- Stunning header -->*/}
            <StunningHeader title={'Case Studies'} img={'stunning-header-bg-rose'}/>
            {/*<!-- End Stunning header -->*/}

            {/*<!-- Overlay search -->*/}

            <div className="overlay_search">
                <div className="container">
                    <div className="row">
                        <div className="form_search-wrap">
                            <form>
                                <input className="overlay_search-input" placeholder="Type and hit Enter..." type="text"/>
                                    <a href="#" className="overlay_search-close">
                                        <span></span>
                                        <span></span>
                                    </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/*<!-- End Overlay search -->*/}

            {/*<!-- Case Item -->*/}

            <Cases{...match}/>

            {/*<!-- End Case Item -->*/}

            {/*<!-- Subscribe Form -->*/}

            <SubscribeForm/>

            {/*<!-- End Subscribe Form -->*/}

        </div>
    )
}

export default CaseStudies