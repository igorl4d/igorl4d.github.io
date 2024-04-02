import PageLayout from "../components/PageLayout";
import styled from "styled-components";
import logoName from "../assets/Logo-name.svg";
import homeHero from "../assets/homeHero.png";
import homeImage_2 from "../assets/home-1.png";
import rectangle_1 from "../assets/Rectangle-1.png";
import rectangle_2 from "../assets/Rectangle-2.png";
import rectangle_3 from "../assets/Rectangle-3.png";
import rectangle_4 from "../assets/Rectangle-4.png";
import { Button, Divider } from "@mui/material";
import sectionImage from "../assets/sectionImg.jpg";
import placeHolder from "../assets/blog-1.png";
import BudgetForm from "../components/BudgetForm";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import card from "../assets/card-1.png";
import card_2 from "../assets/card-2.png";
import card_3 from "../assets/card-3.png";
import card_4 from "../assets/card_4.png";
import card_5 from "../assets/card-servico-9.png";
import card_6 from "../assets/card-servico-5.jpg";
import CardComponent from "../components/CardComponent";
import BlogCard from "../components/BlogCard";
import logo from "../assets/Logo Horizontal Matheus 1.svg";
import HeaderMain from "../components/HeaderMain";
import NavBar from "../components/NavBar";
import IconComponent from "../components/IconComponent";
import blogCard_2 from "../assets/blogCard.png";
import blogCard from "../assets/blogCard-2.png"
import blogCard_3 from "../assets/blogCard-3.png"
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import homeHero_2 from "../assets/homeHero-2.png";
import homeHero_3 from "../assets/homeHero-3.png";
import homeImageMobile from "../assets/heroImageMobile.png";
import homeImageMobile2 from "../assets/heroImageMobile-2.png";
import homeImageMobile3 from "../assets/heroImageMobile-3.png";
import { NavLink } from "react-router-dom";
import servicos from "../assets/blog-hero.jpeg"
import podcast from "../assets/Rectangle1190.png"
const StyledFlex = styled.div`
  margin: 0 5%;
  margin-top: 68px;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1000px) {
    margin-right: auto;
    margin-top: 168px;
    max-width: 1200px;
    margin-left: auto;
    width: 90%;
    flex-direction: row;
    font-size: 16px;
    justify-content: space-around;
    margin-bottom: 156px;
    gap: 104px;
  }
  gap: 5px;
`;

const StyledLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;

  > img {
    width: 194px;
    margin-top: -24px;
    margin-left: -2px;
  }
  @media only screen and (min-width: 1000px) {
    > img {
      width: 400px;
      margin-top: -36px;
      margin-left: -6px;
    }
    justify-content: space-around;
    width: 60%;
  }
`;

const StyledParagraph = styled.div`
  @media only screen and (min-width: 1000px) {
    letter-spacing: 1px;
    margin-top: -54px;
  }
`;
const StyledImageDiv = styled.div`
  background: url(${homeImage_2});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin-bottom: 40px;
  height: 300px;
  border-radius: 4px;
  background-position: 1%;
  @media only screen and (min-width: 1000px) {
    height: 520px;
    width: 526px;
  }
`;

const StyledCardContainer = styled.div`
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  @media only screen and (min-width: 1000px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
    height: auto;
    margin-bottom: 156px;
    max-width: 1200px;
  }
`;

const StyledCardOne = styled.div`
  background: url(${rectangle_1});
  width: 84px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1000px) {
    width: 239px;
    height: 713px;
  }
`;

const StyledCardTwo = styled.div`
  background: url(${rectangle_2});
  width: 84px;
  background-position: center;
    background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1000px) {
    width: 239px;
    height: 713px;
    backgroud
  }
`;

const StyledCardThree = styled.div`
  background: url(${rectangle_3});
  width: 84px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (min-width: 1000px) {
    width: 239px;
    height: 713px;
  }
`;

const StyledCardFour = styled.div`
  width: 84px;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  justify-content: space-between;

  a {
    display: none;
  }
  @media only screen and (min-width: 1000px) {
    width: 239px;
    font-size: 18px;
    p {
      margin-top: 60px;
    }
    a {
      display: block;
      color: #0e3a53;
      > Button {
        padding: 14px 25px;
        margin-top: -60px;
      }
    }
  }
`;

const StyledCardPhoto = styled.div`
  background: url(${rectangle_4});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 143px;
  @media only screen and (min-width: 1000px) {
    width: 239px;
    height: 472px;
  }
`;

const StyledSectionImg = styled.div`
background: url(${sectionImage});
background-position: 0% 38%; 
background-size: cover;
background-repeat: no-repeat;
height: 270px;
  width: 100%;
  
margin: 36px 0;

  @media only screen and (min-width: 1000px) {
    margin-bottom: 156px;
    height: 670px;
  }
`;

const StyledDividerSection = styled.div`
  margin: 0 5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  line-height: 140%;
  div {
    border: solid 1px #2c272b;
    border-radius: 4px;
    width: 250px;
    display: flex;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    height: 90px;
    @media only screen and (min-width: 1000px) {
      padding: 0 14 px;
      height: 100px;
    }
  }
  > div > p {
    width: 100%;
    margin: 0 5%;
    font-weight: 400;
  }
  @media only screen and (min-width: 1000px) {
    width: 90%;
    flex-direction: row;
    margin: 30px auto;
    justify-content: space-between;
    margin-bottom: 126px;
    margin-top: 126px;
    font-size: 16px;
    max-width: 1200px;
    align-items: stretch;
  }
`;

const StyledButtonContainer = styled.aside`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  text-align: center;
  gap: 30px;
  margin-bottom: 60px;
  > h2 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 26px;
  }
  > Button {
    height: 60px;
  }
  @media only screen and (min-width: 1000px) {
    height: 135px;
    text-align: left;
    justify-content: space-between;
    min-width: 200px;
    > Button {
      margin-top: -40px;
      margin-bottom: 1px;
      height: 60px;
      padding: 20px;
    }
  }
`;

const StyledBlogSection = styled.div`
  margin: 0 auto;
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
  }
  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    max-width: 1200px;
    justify-content: space-around;
    margin-top: 76px;
  }
`;

const StyledPlaceHolder = styled.div`
  width: 271px;
  background: url(${podcast});
  height: 505px;
  border-radius: 4px;
  @media only screen and (min-width: 1000px) {
    margin-left: 20px;
  }
`;

const StyledCardSection = styled.div`
  margin-top: -20px;
  @media only screen and (min-width: 1000px) {
    margin: 20px auto;
    display: flex;
    width: 90%;
    max-width: 1100px;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-between;
    margin-bottom: 90px;
  }

`;

const StyledHeroImage = styled.div`
height: 100vh;
background: url(${homeHero});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
border-radius: 5px;
align-items: center;
box-sizing: border-box;

@media only screen and (min-width: 1000px) {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const StyledHeroImage2 = styled.div`
height: 100vh;
  background: url(${homeHero_2});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    padding: 60px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;`;

const StyledHeroImage3 = styled.div`
height: 100vh;
  background: url(${homeHero_3});
  background-repeat: no-repeat;
  width: 200%;
  display: flex;
  flex-direction: column;
  background-position: 200% 60%;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (min-width: 1000px) {
    height: 95vh;
    background-size: cover;
  background-position: center;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    padding: 60px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;`;
const StyledLogoContainer = styled.div`
  margin-top: 60px;
  > img {
    width: 275px;
  }
  @media only screen and (min-width: 1000px) {
    padding-left: 8px;
    margin-right: -100px;
  }

  @media only screen and (min-width: 1000px) {
    margin-top: 0;
    margin-right: -100px;
  }
`;

const StyledBlank = styled.div`
  display: none;

  @media only screen and (min-width: 1000px) {
    display: block;
  }
`;

const StyledIconContainer = styled.div`
  @media only screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    margin-right: 56px;
    margin-left: -66px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledIconContainerMobile = styled.div`
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledMobileButton = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

const StyledP = styled.p`
  margin-right: -10px;
  margin-left: 10px;
  text-align: left;
`;

const StyledString = styled.p`
    @media only screen and (min-width: 1000px) {
      font-size: 18px;
      
      strong{
        font-size: 20px;
      }
    `;

const StyledCarrouselDsk = styled.div`
  display: none;
  @media only screen and (min-width: 1000px) {
    display: block;
  }
`;

const StyledCarrouselMobile = styled.div`
  display: block;
  > StyledHeroImage {
    display: none;
  }
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;



    const StyledPodcastButton = styled.a`
    
    background-color: inherit;
    border: none;    `


const StyledHomeHeader = styled.div`
  position: absolute;
  z-index: 999;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    width: 100%;
  }
`;

const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 0px auto;
  max-width: 1200px;
  @media only screen and (min-width: 1000px) {
    margin-top: 56px;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    width: 90%;
  }
`;

function Home() {
  const scroll = () => {
    const section = document.querySelector("#teste");
    section.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const [hideHeader, setHideHeader] = useState(true);
  useEffect(() => {
    function handleScroll() {
      const image = document.getElementById("heroImage");
      if (image) {
        const imageBottom = image.getBoundingClientRect().bottom;
        const windowSize = window.innerHeight;

        if (windowSize - imageBottom >= windowSize) {
          setHideHeader(false);
        } else {
          setHideHeader(true);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <PageLayout headerStyle={<HeaderMain />} hideHeader={hideHeader}>
        <>
          <div id="heroImage">
            <StyledHomeHeader>
              <StyledHomeContainer>
                <StyledBlank />
                <StyledLogoContainer>
                  <img src={logo}></img>
                  <NavBar></NavBar>
                </StyledLogoContainer>
                <StyledIconContainer>
                  <Divider
                    orientation="vertical"
                    sx={{
                      backgroundColor: "#0E3A53",
                      width: "1px",
                      height: "auto",
                      position: "relative",
                      right: "30px",
                    }}
                    flexItem
                  />
                  <IconComponent></IconComponent>
                </StyledIconContainer>
                <StyledIconContainerMobile>
                  <IconComponent></IconComponent>
                </StyledIconContainerMobile>
              </StyledHomeContainer>
            </StyledHomeHeader>
            <StyledCarrouselDsk>
              <Carousel
                animation="slide"
                swipe={false}
                duration={600}
                indicatorIconButtonProps={{
                  style: {
                    color: "#7C95A3",
                    margin: "5px",
                    width: "10px",
                    height: "10px",
                  },
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    color: "#0E3A53",
                    backgroundColor: "#0E3A53", // 2
                  },
                }}
                indicatorContainerProps={{
                  style: {
                    position: "relative",
                    zIndex: 100,
                    top: -80,
                  },
                }}
              >
                <StyledHeroImage></StyledHeroImage>
                <StyledHeroImage2></StyledHeroImage2>

                <StyledHeroImage3></StyledHeroImage3>
              </Carousel>
            </StyledCarrouselDsk>
            <StyledCarrouselMobile>
              <Carousel
                animation="slide"
                swipe={false}
                indicatorIconButtonProps={{
                  style: {
                    color: "#7C95A3",
                    margin: "5px",
                    width: "10px",
                    height: "10px",
                  },
                }}
                activeIndicatorIconButtonProps={{
                  style: {
                    color: "#0E3A53",
                    backgroundColor: "#0E3A53", // 2
                  },
                }}
                indicatorContainerProps={{
                  style: {
                    position: "relative",
                    zIndex: 100,
                    top: -104,
                  },
                }}
              >
                <StyledHeroImage></StyledHeroImage>
                <StyledHeroImage2></StyledHeroImage2>

                <StyledHeroImage3></StyledHeroImage3>
              </Carousel>
            </StyledCarrouselMobile>
          </div>
          <StyledFlex>
            <StyledImageDiv></StyledImageDiv>
            <StyledLogoDiv>
              <img src={logoName} alt="MATHEUS MARQUES" />
              <StyledParagraph>
                <p>
                  Olá! Pode-se dizer que sou um apaixonado pela arte da
                  fotografia. O poder que temos nas mãos é algo mágico, pois,
                  através da fotografia traduzimos histórias, revelamos os
                  sentimentos e toda a emoção de um dia único através de um
                  trabalho que eu acredito ser algo minucioso.
                </p>
              </StyledParagraph>
              <StyledParagraph>
                <p>
                  Além disso, também busco dar voz e protagonismo para
                  profissionais que querem ir ainda mais longe na sua carreira,
                  através do retrato corporativo. Muito mais que as melhores
                  lentes e equipamentos, quero entregar um trabalho refinado com
                  um olhar único.
                </p>
              </StyledParagraph>
              <StyledParagraph>
                <p>
                  Tento me fazer presente nos momentos mais importantes da vida
                  dos meus clientes. Meu estúdio estará sempre de portas abertas
                  para receber pessoas que procuram não só por um fotógrafo, mas
                  também por alguém que deseja sonhar junto com você.
                </p>
              </StyledParagraph>
              <StyledParagraph>
                <p>Espero que nos conheçamos pessoalmente!</p>
              </StyledParagraph>
            </StyledLogoDiv>
          </StyledFlex>

          <StyledCardContainer>
            <StyledCardOne></StyledCardOne>
            <StyledCardTwo></StyledCardTwo>
            <StyledCardThree></StyledCardThree>
            <StyledCardFour>
              <p>Veja algumas histórias de amor sob as nossas lentes</p>
              <NavLink to="/Portfolio">
                <Button>Ir ao portfólio</Button>
              </NavLink>
              <StyledCardPhoto />
            </StyledCardFour>
          </StyledCardContainer>
          <StyledMobileButton>
            <NavLink to="/Portfolio">
              <Button>Ir ao portfólio</Button>
            </NavLink>
          </StyledMobileButton>

          <StyledSectionImg></StyledSectionImg>

          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "#bebebe",
              },
              margin: "0px auto",
              width: "90%",
              fontWeight: 500,
              maxWidth: "1200px",
            }}
          >
            <span>Conheça nossos serviços</span>
          </Divider>
          <StyledCardSection>
            <CardComponent photo={card} text={"Casamentos"}></CardComponent>
            <CardComponent photo={card_2} text={"Pré-wedding"}></CardComponent>
            <CardComponent photo={card_3} text={"Retrato"}></CardComponent>
            <CardComponent
              photo={card_5}
              text={"Retratos corporativos"}
            ></CardComponent>
            <CardComponent photo={card_6} text={"Ensaios"}></CardComponent>
            <CardComponent photo={card_4} text={"Eventos"}></CardComponent>
          </StyledCardSection>
          <StyledDividerSection>
            <div>
              <StyledString>
                MAIS DE <br />
                <strong>150</strong>
              </StyledString>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: "#2C272B", margin: "20px 0" }}
              />

              <StyledP>HISTÓRIAS FOTOGRAFADAS</StyledP>
            </div>

            <div>
              <StyledString>
                MAIS DE <br />
                <strong>8</strong>
              </StyledString>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: "#2C272B", margin: "20px 0" }}
                flexItem
              />
              <StyledP>ANOS NO MERCADO</StyledP>
            </div>

            <div>
              <StyledString>
                MAIS DE
                <br />
                <strong>3</strong>
              </StyledString>
              <Divider
                orientation="vertical"
                sx={{ backgroundColor: "#2C272B", margin: "20px 0" }}
                flexItem
              />
              <StyledP>PAÍSES DIFERENTES</StyledP>
            </div>

            <StyledButtonContainer>
              <Button onClick={scroll}>Solicitar orçamento</Button>
              <h2>
                VAMOS COMPARTILHAR DO <br /> MESMO SONHO?
              </h2>
            </StyledButtonContainer>
          </StyledDividerSection>

          <Divider
            sx={{
              "&::before, &::after": {
                borderColor: "#bebebe",
              },
              margin: "0px auto",
              width: "90%",
              fontWeight: 500,
              maxWidth: "1200px",
            }}
          >
            <span>Últimas publicações do blog</span>
          </Divider>

          <StyledBlogSection>
          <BlogCard
              photo={blogCard}
              title={"DICAS PARA SEU O PRÉ-WEDDING"}
              text={
                "Algumas dicas de por onde começar o planejamento deste momento \núnico."
              }
              link={"/Dicas-1"}
            ></BlogCard>
            <BlogCard
              photo={blogCard_2}
              title={"DICAS PARA O SEU\nMAKING OF"}
              text={
                "Reunimos algumas dicas  para você se inspirar\ne se planejar para esse momento."
              }
              link={"/Dicas-2"}
            ></BlogCard>
            <BlogCard
              photo={blogCard_3}
              title={"CONHEÇA MEU PODCAST NO SPOTIFY"}
              text={
                "Em meu podcast, pretendo compartilhar técnicas, dicas e experiências que a fotografia me proporciona"
              }
              link={"https://open.spotify.com/episode/64evmpIbsYubxDlXCAFLsm?si=79b638a2721c431d"}
              buttonTitle="Ir ao Podcast"
              target="_blank"
            ></BlogCard>
            <StyledPodcastButton target="_blank" href = "https://open.spotify.com/episode/64evmpIbsYubxDlXCAFLsm?si=79b638a2721c431d">
              <StyledPlaceHolder/>
            </StyledPodcastButton>
          </StyledBlogSection>
          <BudgetForm></BudgetForm>
        </>
      </PageLayout>
    </LocalizationProvider>
  );
}

export default Home;
