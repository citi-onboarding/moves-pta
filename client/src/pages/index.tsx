import React from "react";
import { CardsContainer, HomeContainer, HomeContent, Title, TitleContainer, TitleUnderline } from "./style";
import { FooterDesign} from "components";

export default function Home() {
  return (
    <HomeContainer>
      <HomeContent>

        <CardsContainer>
          {
            data.map((item, index)=> {
              return(
                <FooterDesign
                  facebook={item.facebook}
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                  />
              )
            })
          }
      </CardsContainer>
      </HomeContent>
    </HomeContainer>
  );
}

// dados que estão sendo passados para o componente UserCard por meio do map
const data = [
  {
    linkedin: "https://www.linkedin.com/company/movesbrasil/",
    instagram: "https://instagram.com/movesbrasil?igshid=MzMyNGUyNmU2YQ==",
    facebook: "https://www.facebook.com/movesbrasill"
  },
]