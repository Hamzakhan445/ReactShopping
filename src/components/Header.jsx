import React from 'react'
import Navbar from './Navbar'
import Mainbtn from '../components/Mainbtn'

const Header = () => {
    return (
        <>
         <header className="header">
         {/* <!-- Start WOWSlider.com BODY section --> */}
<div id="wowslider-container1">
<div className="ws_images"><ul>
		<li><img src="data1/images/pexelsandreapiacquadio3769025.jpg" alt="pexels-andrea-piacquadio-3769025" title="pexels-andrea-piacquadio-3769025" id="wows1_0"/></li>
		<li><img src="data1/images/pexelsannashvets3962294.jpg" alt="pexels-anna-shvets-3962294" title="pexels-anna-shvets-3962294" id="wows1_1"/></li>
		<li><a href="#"><img src="data1/images/pexelsivansamkov7990620.jpg" alt="image carousel" title="pexels-ivan-samkov-7990620" id="wows1_2"/></a></li>
		<li><img src="data1/images/pexelskseniachernaya3965548.jpg" alt="pexels-ksenia-chernaya-3965548" title="pexels-ksenia-chernaya-3965548" id="wows1_3"/></li>
	</ul></div>
	<div className="ws_bullets"><div>
		<a href="#" title="pexels-andrea-piacquadio-3769025"><span><img src="data1/tooltips/pexelsandreapiacquadio3769025.jpg" alt="pexels-andrea-piacquadio-3769025"/>1</span></a>
		<a href="#" title="pexels-anna-shvets-3962294"><span><img src="data1/tooltips/pexelsannashvets3962294.jpg" alt="pexels-anna-shvets-3962294"/>2</span></a>
		<a href="#" title="pexels-ivan-samkov-7990620"><span><img src="data1/tooltips/pexelsivansamkov7990620.jpg" alt="pexels-ivan-samkov-7990620"/>3</span></a>
		<a href="#" title="pexels-ksenia-chernaya-3965548"><span><img src="data1/tooltips/pexelskseniachernaya3965548.jpg" alt="pexels-ksenia-chernaya-3965548"/>4</span></a>
	</div></div><div className="ws_script" style={{position:"absolute",left:"-99%"}}><a href="#">html slideshow</a> by WOWSlider.com v9.0</div>
</div>	 

{/* <!-- End WOWSlider.com BODY section --> */}
             </header>   
        </>
    )
}

export default Header
