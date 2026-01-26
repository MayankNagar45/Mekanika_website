import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d_Card";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

const images = [
    require("../../components/event_Images/KYM_1.jpg"),
    require("../../components/event_Images/KYM_2.jpg"),
    require("../../components/event_Images/KYM_3.jpg"),
    require("../../components/event_Images/KYM_4.jpg"),
    require("../../components/event_Images/MDT1.jpg"),
    require("../../components/event_Images/MDT2.jpg"),
    require("../../components/event_Images/MDT3.jpg"),
    require("../../components/event_Images/MDT4.jpg"),
    require("../../components/event_Images/Quiz1.jpg"),
    require("../../components/event_Images/Quiz2.jpg"),
    require("../../components/event_Images/Quiz3.jpg"),
    require("../../components/event_Images/Quiz4.jpg"),
    require("../../components/event_Images/Quiz5.jpg"),
    require("../../components/event_Images/AT1.jpg"),
    require("../../components/event_Images/AT2.jpg"),
    require("../../components/event_Images/AT3.jpg"),
    require("../../components/event_Images/AT4.jpg"),
    require("../../components/event_Images/AT5.jpg"),
    //17
    require("../../components/event_Images/ps1.jpg"),
    require("../../components/event_Images/ps2.jpg"),
    require("../../components/event_Images/ps3.jpg"),
    require("../../components/event_Images/kyd1.jpg"),
    require("../../components/event_Images/kyd2.jpg"),
    require("../../components/event_Images/kyd3.jpg"),
    require("../../components/event_Images/gl1.jpg"),
    require("../../components/event_Images/gl2.jpg"),
    require("../../components/event_Images/gl3.jpg"),
    require("../../components/event_Images/gl4.jpg"),
    require("../../components/event_Images/kyd_2025_1.jpg"),
    require("../../components/event_Images/kyd_2025_2.jpg"),
    require("../../components/event_Images/kyd_2025_3.jpg"),
    require("../../components/event_Images/kyd_2025_4.jpg"),
    require("../../components/event_Images/kyd_2025_5.jpg"),
];

export const cardData = [
  {
  title: "KNOW YOUR DEPARTMENT 2025",
  description:
    "The 'Know Your Department 2025' event was organized to welcome the incoming batch. Faculty members introduced the department structure, curriculum roadmap, research areas, and opportunities, while interactive discussions helped freshers gain clarity about academics and student life.",
  imageUrls: [images[28], images[29], images[30]], 
  carouselImage: images[28],
  ctaPrimary: {
    label: "Explore now →",
    // link: "https://example.com",
  },
  ctaSecondary: {
    label: "Aug 2025",
  },
},

   
    {
      title: "KNOW YOUR MATES",
      description:
        "From exciting games and wit to heartwarming introductions and stories that had us all in stitches, this event was all about forging bonds and creating memories that will last a lifetime. A huge shoutout to all the participants for bringing your enthusiasm and energy!",
      imageUrls: [images[0], images[1], images[2], images[3]], 
      carouselImage: images[0],
      ctaPrimary: {
        label: "View more →",
        // link: "https://twitter.com/mannupaaji",
      },
      ctaSecondary: {
        label: "4 Oct 2024",
      },
    },
    {
      title: "MECH D TALKS",
      description:
        "Seniors shared their valuable insights with Department students on academics and CDC Internships. The session commenced with warm welcomes and brief introductions, paving the way for a succinct exploration of academic journeys. The panelists emphasized the value of holistic growth, balancing academics with extracurricular pursuits. The spotlight then shifted to internship experiences, with panelists sharing industry insights, project highlights, and invaluable tips on securing internships. A lively Q&A session ensued, providing students with direct interaction opportunities. ",
      imageUrls: [images[4], images[5], images[6], images[7]],
      carouselImage: images[4], 
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "12 Nov 2024",
      },
    },
    {
      title: "ALUM MEET",
      description:
        "organised a vibrant alum meet, bringing together alumni from 1974, 1984, 1999, and many more. The event acted as a nostalgic reunion, creating friendships among graduates from different generations. Among shared memories and laughter, guests reminisced about their academic adventures, emphasising the long-lasting friendships they formed. The event not only celebrated prior accomplishments but also served as an opportunity for networking and collaboration.",
      imageUrls: [ images[13], images[14], images[15],images[16],images[17]],
      carouselImage: images[13], // Featured image for carousel
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "4 Jan 2025",
      },
    },
    {
      title: " INTRA-DEPARTMENTAL QUIZ",
      description:
        "organized an Intra-Departmental Quiz, creating a platform for students to showcase their knowledge. Fostered a friendly yet competitive atmosphere and a sense of camaraderie among participants. The atmosphere buzzed with excitement and friendly competition as teams vied for the top spot.The success of the event was a result of meticulous planning and enthusiastic participation, making it a memorable and enriching experience for all involved.",
      imageUrls: [images[8], images[9], images[10], images[11],images[12]],
      carouselImage: images[8], // Featured image for carousel (quiz awards)
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "4 Feb 2024",
      },
    },
     {
      title: "KNOW YOUR DEPARTMENT",
      description:
        "We organized the 'Know Your Department' event to welcome freshers. Professors provided an overview of the coursework, and key study areas, while students engaged in discussions to gain valuable insights. ",
      imageUrls: [ images[21], images[22], images[23]],
      carouselImage: images[21], 
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "5 Aug 2024",
      },
    },
    {
      title: "GUEST LECTURE",
      description:
        "An insightful session was organized,featuring esteemed alumnus Mr. Ashok Kumar Nandy.Students of Pre-final and final-year explored industry trends, technological advancements, and career opportunities. The session provided valuable perspectives, bridging academia and industry to guide students in their professional journey.",
      imageUrls: [ images[24], images[25], images[26],images[27]],
      carouselImage: images[24], // Featured image for carousel
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "9 Aug 2023",
      },
    },
    {
      title: "PHOTOSHOOT & FAREWELL",
      description:
        "The graduating batch captured lasting memories during their farewell and batchmates photoshoot. Beginning with a group picture alongwith faculty, the celebration continued at the Tagore Open Air Theatre (TOAT) followed by the culltural preformance of the departmental Professor. Wishing them all success in their future endeavors!",
      imageUrls: [ images[18], images[19], images[20]],
      carouselImage: images[18], // Featured image for carousel
      ctaPrimary: {
        label: "Explore now →",
        // link: "https://example.com",
      },
      ctaSecondary: {
        label: "15 March 2024",
      },
    },
];

// Overview Carousel Component
function OverviewCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToEvent = (index) => {
    setSelectedEventIndex(index);
    const eventElement = document.getElementById(`event-${index}`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add highlight effect
      eventElement.classList.add('ring-4', 'ring-yellow-400/50');
      setTimeout(() => {
        eventElement.classList.remove('ring-4', 'ring-yellow-400/50');
      }, 2000);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-12 relative">
      {/* Main Carousel */}
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"></div>
        
        {/* Carousel Images */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardData.map((event, index) => (
            <div
              key={index}
              className="min-w-full h-full relative cursor-pointer"
              onClick={() => scrollToEvent(index)}
            >
              <img
                src={event.carouselImage}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2 drop-shadow-lg">
                  {event.title}
                </h3>
                <p className="text-white text-sm md:text-base line-clamp-2 max-w-2xl drop-shadow-md font-medium">
                  {event.description}
                </p>
                <div className="mt-3 inline-block px-3 py-1 bg-yellow-400/90 rounded-full text-black text-sm font-bold shadow-lg">
                  {event.ctaSecondary.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? cardData.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => goToSlide((currentSlide + 1) % cardData.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index ? 'bg-yellow-400 scale-125' : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Event Navigation Thumbnails */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
          Quick Navigate to Events
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {cardData.map((event, index) => (
            <button
              key={index}
              onClick={() => scrollToEvent(index)}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 ${
                selectedEventIndex === index ? 'ring-2 ring-yellow-400' : ''
              }`}
            >
              <img
                src={event.carouselImage}
                alt={event.title}
                className="w-24 h-16 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-xs font-bold line-clamp-1 drop-shadow-lg">
                  {event.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Events() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="absolute inset-0 pointer-events-none z-10 overflow-x-hidden">
        <Spotlight />
      </div>
      
      {/* Heading */}
      <h1 className="text-xl md:text-3xl font-bold text-center mt-24 text-yellow-400 mb-8">
        Events Conducted by us
      </h1>

      {/* Overview Carousel */}
      <OverviewCarousel />

      {/* Events Section Header */}
      <h2 className="text-lg md:text-2xl font-semibold text-center mt-16 mb-8 text-yellow-300">
        Detailed Event Gallery
      </h2>

      {/* Card Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cardData.map((card, cardIndex) => (
          <div
            key={cardIndex}
            id={`event-${cardIndex}`}
            className="transition-all duration-300"
          >
            <CardContainer className="inter-var">
              <CardContent card={card} />
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}

function CardContent({ card }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % card.imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [card.imageUrls]);

  return (
    <CardBody className="bg-neutral-900 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
      {/* Title Container */}
      <div className="relative">
        {/* CTA Secondary Button Positioned Above Title */}
        <CardItem
          translateZ="20"
          as="button"
          className="absolute -top-2 -right-2 px-4 py-2 rounded-xl bg-yellow-400/60 text-black text-xs font-bold"
        >
          {card.ctaSecondary.label}
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-yellow-300 mr-24"
        >
          {card.title}
        </CardItem>
      </div>

      {/* Description */}
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-300 text-sm max-w-sm mt-2 line-clamp-5"
      >
        {card.description}
      </CardItem>

      {/* Dynamic Image Transition */}
      <CardItem translateZ="100" className="w-full mt-4">
        <div
          style={{
            backgroundImage: `url(${card.imageUrls[currentImage]})`,
            transition: "background-image 1s ease-in-out",
          }}
          className="h-60 w-full rounded-xl bg-cover bg-center shadow-xl"
        ></div>
      </CardItem>

      {/* CTA Primary Button */}
      <div className="flex justify-start items-center mt-8">
        <CardItem
          translateZ={20}
          as={Link}
          to={card.ctaPrimary.link}
          target="_blank"
          className="px-4 py-2 rounded-xl text-xs font-normal text-yellow-300"
        >
          {card.ctaPrimary.label}
        </CardItem>
      </div>
    </CardBody>
  );
}

export default Events;