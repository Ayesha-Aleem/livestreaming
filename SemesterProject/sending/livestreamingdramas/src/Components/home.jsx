import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Carousel from "react-bootstrap/Carousel";


const slideImages = [
    'https://dnd.com.pk/wp-content/uploads/2021/11/45B78687-C3D5-4485-979C-97F8E88B249F.jpeg',
    'https://dnd.com.pk/wp-content/uploads/2021/11/Article-KM.jpg',
    'https://dnd.com.pk/wp-content/uploads/2021/11/raqs-e-bismil-2.jpg',
    "https://nation.com.pk/print_images/large/2018-06-27/ki-jana-mein-kaun-highlights-story-of-a-griefstricken-girl-1530120737-1773.jpg",
];

const testimonial = [
    {
      content:
        "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
      author: "Ayesha Aleem"
    },
    {
      content:
        "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
      author: "Ayesha Aleem"
    },
    {
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: "Ayesha Aleem"
    },
    {
      content:
        "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
      author: "Ayesha Aleem"
    }
  ];
     
   

const home = () => {
    return (
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>A Love Story You Can Never Forget – Raqeeb Se!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Spiritual Romantic Story – Khuda Aur Mohabbat!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span> True Love – Raqs-e-Bismil!</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span>A daughter alone – Ki jana ma kon</span>
            </div>
          </div>
        </Slide>
        <div>
            <h1 className="head1">Testimonials</h1>
            <Carousel interval={1000}>
                {testimonial.map((c, index) => {
                return (
                    <Carousel.Item interval={1000} >
                    <div style={{ height: 300, background: "black", color: "white", padding: 100 }}>
                        <p>{c.content}</p>
                    </div>
                    <Carousel.Caption>
                        <p>{c.author}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                );
                })}
            </Carousel>
        </div>
      </div>
      )
}
 
export default home;