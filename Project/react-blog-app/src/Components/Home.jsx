import React from 'react'
import Grassland from './Grassland.jpg'
import Hill from './Hill.jpg';
import JoshuaTree from './JoshuaTree.jpg'
import AjantaCaves from './AjantaCaves.webp'

const Home = () => {
    return (
        <div>
            {/* <p id='headText'><span id='verticalText'>The</span><span id='siren'>SIREN</span></p>
            <div id='NavBar'>
                <div>Home</div>
                <div>Bollywood</div>
                <div>Technology</div>
                <div>Hollywood</div>
                <div>Fitness</div>
                <div>Food</div>
            </div>
            <hr className='hr'/> */}
            <div id='grid'>
                <div class='box b1'><img className='gridImage' src={Grassland} alt='404'></img><span className='middleText'>Title of Vertical gallery </span><br/><span className='travelText'>Travel/25 January 2023</span></div>
                <div class='box b2'><img className='gridImage2' src={Hill} alt="404" /><span className='b2Text'>The Sound Cloud <br/>you loved is doomed </span><br/><span className='b2travelText'>Travel/25 January 2023</span></div>
                <div class='box b3'><img className='gridImage2' src={Hill} alt="404" /><span className='b3Text'>The Sound Cloud <br/>you loved is doomed </span><br/><span className='b3travelText'>Travel/25 January 2023</span></div>
            </div>
<br/><br/>
            <p id='latext'>The Latest <hr id='hr2'/></p>

            <div id='widget'>
            <div id='widgets'><img className='Joshua' src={JoshuaTree} alt="404" /><br/><sapn className='widgetTxt'>Joshua Tree</sapn><br/><span className="widgetpara">Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. </span><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></div>
            <div id='widgets'><img className='Joshua' src={JoshuaTree} alt="404" /><br/><sapn className='widgetTxt'>Joshua Tree</sapn><br/><span className="widgetpara">Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. </span><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></div>
            <div id='widgets'><img className='Joshua' src={JoshuaTree} alt="404" /><br/><sapn className='widgetTxt'>Joshua Tree</sapn><br/><span className="widgetpara">Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. </span><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></div>
            </div>
<br/>
<br/>
<br/>
            <p id='latext'>Latest Article <hr id='hr2'/></p>

            <div id='widget2'>
                <div className='widget-2'><img className='ajantaImg' src={AjantaCaves} alt="" /><span><span className="AjantaHeading">Caves of Ajanta</span><span className="AjantaTxt"><br/>The Ajanta Caves are approximately thirty rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Sambhajinagar district of Maharashtra state in India.</span><br/><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></span><br/></div>
                <div className='widget-2'><img className='ajantaImg' src={AjantaCaves} alt="" /><span><span className="AjantaHeading">Caves of Ajanta</span><span className="AjantaTxt"><br/>The Ajanta Caves are approximately thirty rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Sambhajinagar district of Maharashtra state in India.</span><br/><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></span><br/></div>
                <div className='widget-2'><img className='ajantaImg' src={AjantaCaves} alt="" /><span><span className="AjantaHeading">Caves of Ajanta</span><span className="AjantaTxt"><br/>The Ajanta Caves are approximately thirty rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Sambhajinagar district of Maharashtra state in India.</span><br/><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></span><br/></div>
                <div className='widget-2'><img className='ajantaImg' src={AjantaCaves} alt="" /><span><span className="AjantaHeading">Caves of Ajanta</span><span className="AjantaTxt"><br/>The Ajanta Caves are approximately thirty rock-cut Buddhist cave monuments dating from the second century BCE to about 480 CE in the Sambhajinagar district of Maharashtra state in India.</span><br/><br/><span className='wtravelText'>Travel
            <span className="wtraveldate">/25 January 2023</span></span></span><br/></div>
                <div className='widget-2 w-5'><img className='ajantaImgw-5' src={AjantaCaves} alt="" /><span className="w-5txt">Caves of Ajanta</span></div>
            </div>

            <div id='widget3'>
                <div className='widget-3 w3i'>Advertisement</div>
                <div className='widget-3 w3ii'>
                    <div className='subw3'></div>
                    <div className='subw3'></div>
                    <div className='subw3'></div>
                    <div className='subw3'></div>
                </div>
            </div>

            <p id='latext'>Latest Stories <hr id='hr2'/></p>
            <hr/>
            <div id='widget4'>
            <div id='widgets-4'>1</div><hr/>
            <div id='widgets-4'>2</div><hr/>
            <div id='widgets-4'>3</div>
            </div>
            <hr/>
        </div>

    )
}

export default Home