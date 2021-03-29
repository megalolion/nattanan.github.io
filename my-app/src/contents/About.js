import React, { Component } from 'react'
import profilepic from '../img/profile.jpg'


class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic} alt="profile" className="profilepic" />
                <h3>Hi I AM Nattanan</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet fermentum tortor. Sed nec purus in erat vulputate sagittis. Nunc hendrerit dignissim facilisis. Aliquam vulputate porta felis non eleifend. Maecenas id lorem bibendum, vehicula quam eu, commodo risus. Nulla elementum quis purus vitae porttitor. In laoreet turpis sed tortor fringilla, quis volutpat est ultricies. Ut a malesuada magna.

                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin rutrum metus diam, quis fermentum lorem hendrerit sed. Vestibulum placerat ultricies massa eu efficitur. Sed mollis nisl erat, vitae placerat justo laoreet sit amet. Nullam sodales condimentum tellus, vel pulvinar purus commodo a. Morbi vel interdum justo, non finibus mi. Quisque quis purus non mi congue ullamcorper ac vitae orci. Quisque consequat, mauris id placerat maximus, metus arcu tincidunt nibh, eu faucibus neque ligula sed tortor. Aenean aliquet est nulla, vel pretium enim lacinia id. Suspendisse lobortis, purus non posuere semper, tellus neque tempor tellus, a ullamcorper dolor lectus non diam. Vestibulum fringilla finibus dolor. Ut vel rhoncus tortor, ut euismod erat.

                Duis sagittis pharetra erat, eget lobortis felis suscipit ac. Vestibulum faucibus at ipsum at laoreet. In id leo a velit fermentum pretium id non ipsum. Cras faucibus tortor leo, sit amet dignissim massa maximus at. Cras feugiat tincidunt augue, eu ultricies ex sagittis eget. Donec dictum euismod fringilla. Fusce consequat urna a volutpat fermentum. Aliquam pulvinar eros sed odio auctor rutrum. Sed finibus condimentum dolor nec hendrerit. Donec augue mauris, congue eget suscipit at, lobortis at tortor. Mauris ac faucibus neque, quis fringilla neque. Vivamus vitae est dapibus, fringilla nulla vel, rhoncus lectus. Maecenas tristique sodales volutpat.

                Maecenas dapibus in erat eu mollis. Praesent vel magna id metus pharetra tincidunt. In placerat molestie arcu, non consequat mauris mollis consequat. Donec quis mi orci. In vel pharetra leo. Phasellus non ex ac risus interdum tristique sit amet id metus. Fusce volutpat felis a nibh eleifend, sed laoreet urna cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor mollis velit quis luctus. Sed sagittis lacus a interdum semper.

Fusce sit amet quam ut magna accumsan egestas nec et mi. Etiam bibendum lacinia consequat. Morbi malesuada leo ut turpis tincidunt varius. Donec eu blandit nisl. In dapibus enim nec ultrices aliquet. Nulla sagittis metus et risus blandit, a finibus erat mattis. Phasellus volutpat neque id lacus tempor, in dapibus nibh imperdiet. Duis at lacinia mauris, et dignissim mi. Nam rutrum, urna nec ultricies vehicula, tortor lectus sodales purus, nec pharetra odio enim sed magna. Phasellus pretium leo bibendum viverra feugiat. Pellentesque at neque sit amet magna aliquet cursus id id diam.</p>
        
            </div>
        )
    }
}

export default About;