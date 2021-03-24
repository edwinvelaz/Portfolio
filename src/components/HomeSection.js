import React from 'react';
import {StyledMain, StyledDescription} from '../styles';
import myAvatar300 from '../img/myAvatar300.png';


const HomeSection = () => {
    return (
        <StyledMain>
            <img src={myAvatar300} alt=""/>
            <h1>Edwin Velazquez</h1>
            <h2>Fullstack Developer</h2>
            <StyledDescription>
                <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quam iusto iure minima aspernatur necessitatibus. Ut magnam similique aspernatur sunt molestiae laudantium sequi neque blanditiis, consectetur, vero quae delectus veniam!.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur sapiente distinctio quos pariatur nihil perferendis quam fugit dolorum! Non, dolore illum! Atque in praesentium aperiam ex adipisci voluptate vitae!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi saepe culpa itaque. Veritatis accusantium aut distinctio sequi labore, vitae perspiciatis nobis at cum ratione. Architecto eius tempora ipsum et saepe?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam at facilis, dolores ex rem suscipit totam minus, repudiandae vitae tempore velit beatae ipsum, aliquid repellendus! Nemo debitis corporis aliquid.
                </h3>
            </StyledDescription>
        </StyledMain>
    )
}

export default HomeSection
