import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NGOInfo from "./NGOInfo";
// import NGOInfo from ""

const ngos = [
  {
    title: "Gauri India",
    content:
      "Pioneered in the year 1993 by Ajeet Singh, Guria, a 36 member NGO in India, works towards fighting the sexual exploitation of women & children, especially forced prostitution & sex trafficking which has further become severe and complex due to sex tourism and spread of HIV/AIDS. The blue print of the foundation was laid out way back in 1988 when Mr. Singh adopted three children of a woman from a red light area.",
    link: "http://guriaindia.org/",
  },
  {
    title: "ActionAid Association",
    content:
      "ActionAid Association is an organisation working for social and ecological justice. ActionAid has been engaged with the most marginalised communities in India since 1972. In 2006, ActionAid Association was registered as an Indian organisation, governed by an independent General Assembly and a Governing Board. Together with supporters, communities, institutions and governments, we strive for equality, fraternity and liberty for all. ActionAid Association works in 24 states and two union territories, with several partners and allied organisations. ActionAid Association is part of a global federation and a full affiliate of ActionAid International, that has presence in over 40 countries worldwide.",
    link: "https://www.actionaidindia.org/",
  },
 
  {
    title: "Prajwala",
    content:
      "Prajwala is a pioneering anti-trafficking organization working on the issue of sex trafficking and sex crime. Established in the year 1996 in South India, Prajwala has pan India and International operations. Prajwala works on the five pillars of Prevention, Protection, Rescue, Rehabilitation & Reintegration. As one of the most powerful voices advocating nationally and globally for victim centred services, Prajwala in its 25 years of existence has assisted the police in rescuing over 24,000 women and girls from sex slavery and facilitating their journey for recovery.",
    link: "https://www.prajwalaindia.com/",
  },
  {
    title: "Vimochana",
    content:
      "Vimochana is a Bangalore-based NGO founded in 1979. It is an activist group that provided a forum for women’s rights. Angala, a centre in Vimochana, helps the women who approach them to get jobs. Besides, they find admission for their child/children in orphanages if the mother is not able to look after them and provide medical treatment to women in need. Vimochana works on issues of violence against women and empowering female survivors of violence based in Bangalore. The organization has been running for more than 40 years. They believe in understanding violence against women at a personal level, which they call Crisis Intervention.",
    link: "https://www.vimochana.co.in/",
  },
  {
    title: "Gramya Resource Center for Women",
    content: `Gramya's vision is to create a society, which will provide political, social and economic opportunities for women, especially tribal and dalit women, to help them achieve their rights, to improve their lives and livelihoods and to realize their full potential. Issues that they focus on are -
      1. Securing the rights of women and girls, especially to confront violence through organizing and capacity building
      2. Eradication of female infanticide and sale of girl babies 
      3. Access to credit through self-help initiatives
      4. Improvement of livelihoods for women and their families
      5. Strengthening healthcare systems to ensure women's reproductive rights`,
    link: "https://gramya.org.in/",
  },
];

const NGO = (props) => {
  return (
    <Container style={{backgroundColor:"$d3e5e9"}}>
      <h1 className="text-center my-5">NGO's for Women</h1>
<hr />
      <NGOInfo obj1={ngos[2]} obj2={ngos[1]} />
      <NGOInfo obj1={ngos[3]} obj2={ngos[4]} />
      {/* <NGOInfo obj1={ngos[6]} obj2={ngos[5]} /> */}
    </Container>
  );
};

export default NGO;
