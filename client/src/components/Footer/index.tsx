import React from 'react';
import { Footer, IconImage, Text, IconContainer, TextContainer} from './style';
import Link from 'next/link';

interface UserCardProps {
  facebook: string;
  linkedin: string;
  instagram: string;
}

const FooterDesign = ({ facebook, linkedin, instagram }: UserCardProps) => {
  return(
    <Footer>
      <IconContainer>
      <Link href={facebook}>
      <IconImage src='https://media.discordapp.net/attachments/748294411519131690/1184115193802915930/image.png?ex=658acc35&is=65785735&hm=ffb4c4a75395fab8f060c467e1ca1764b37a9c1cfd9b8939f46cfd5a67860c4d&=&format=webp&quality=lossless'/>
      </Link>
      <Link href={linkedin}>
      <IconImage src='https://media.discordapp.net/attachments/748294411519131690/1184115227063746712/image.png?ex=658acc3d&is=6578573d&hm=dccde44484bee5d2a9710fdae73afb86cc0c9d253f4ab8b3d0d380340dec688f&=&format=webp&quality=lossless'/>
      </Link>
      <Link href={instagram}>
      <IconImage src='https://cdn.discordapp.com/attachments/748294411519131690/1184115256742662206/image.png?ex=658acc45&is=65785745&hm=27ce380fbc322316f6341eab0e416255dbcb14f4dd36d2213214868d7cc6514c&'/>
      </Link>
      </IconContainer>
    <TextContainer>
      MOVE'S BRASIL - TODOS OS DIREITOS RESERVADOS.
        <Text>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
        <strong>&hearts;</strong> by CITi
</Text>
    </TextContainer>
  </Footer>
  );
}

export default FooterDesign;