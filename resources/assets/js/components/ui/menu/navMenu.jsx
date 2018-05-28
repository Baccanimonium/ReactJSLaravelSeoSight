import React from 'react';
import axios from 'axios'
import NavMenuItems from './NavMenuItems'


function tabRow(items){
    if(items instanceof Array){
        return items.map(function(object, i){
            return <NavMenuItems obj={object} key={i} />;
        })
    }
}
class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: ''};
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/menu_items')
            .then(response => {

                this.setState({ items: this.orderedMenu(response.data) });
            })
            .catch(function (error) {
                console.log(error);
            })


    }
    orderedMenu(items){
        if(items instanceof Array){
            const forEachItems =[]

            items.forEach((elem) => {

                if (elem.parentId == 0) {
                    forEachItems.push(elem)
                }
                else{
                    forEachItems.forEach((item, i) => {
                        if (item.id === elem.parentId) {
                            if (!Array.isArray(item.subPages)) {
                                item.subPages = []
                            }
                            item.subPages.push(elem)
                        }
                    })
                }

            })
            return forEachItems
        }
    }
    render() {
        return (

            <nav id="primary-menu" className="primary-menu">

                <a href='javascript:void(0)' id="menu-icon-trigger" className="menu-icon-trigger showhide">
                    <span className="mob-menu--title">Menu</span>
                    {/*<span id="menu-icon-wrapper" className="menu-icon-wrapper" style="visibility: hidden">*/}
                            {/*/!*<svg width="1000px" height="1000px">*!/*/}
                                {/*/!*<path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>*!/*/}
                                {/*/!*<path id="pathE" d="M 300 500 L 700 500"></path>*!/*/}
                                {/*/!*<path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>*!/*/}
                            {/*/!*</svg>*!/*/}
                        {/*</span>*/}
                </a>
                {/*<!-- menu-icon-wrapper -->*/}
                <ul className="primary-menu-menu">
                    {tabRow(this.state.items)}
                </ul>
            </nav>
        );
    }
}

export default NavMenu