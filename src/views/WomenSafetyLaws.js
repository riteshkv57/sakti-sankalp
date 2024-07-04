import React, { useState } from "react";
import { Accordion, Container } from "react-bootstrap";

const laws = [
  {
    title: "The Commission of Sati (prevention) Act(1987)",
    content:
      "The Act seeks to prevent sati, the practice of voluntary or forced burning or burying alive of a widow, and to prohibit glorification of this action through the observance of any ceremony, participation in any procession, creation of a financial trust, construction of a temple, or any actions to commemorate or honor the memory of a widow who committed sati",
  },
  {
    title: "Protection of Women Against Domestic Violence Act(2005)",
    content:
      "Domestic violence is defined by Section 3 of the Act as[3] any act, omission or commission or conduct of the respondent shall constitute domestic violence in case it:harms or injures or endangers the health, safety, life, limb or well-being, whether mental or physical, of the aggrieved person or tends to do so and includes causing physical abuse, sexual abuse, verbal and emotional abuse and economic abuse; harasses, harms, injures or endangers the aggrieved person to coerce her or any other person related to her to meet any unlawful demand for any dowry or other property or valuable security;has the effect of threatening the aggrieved person or any person related to her by any conduct mentioned in clause (a) or clause (b); or otherwise injures or causes harm, whether physical or mental, to the aggrieved person.",
  },
  {
    title: "The Prohibition of Child Marriage Act(2006)",
    content:
      "India ranks 6th in the world when it comes to child marriages. Since child marriage has been steeped into the Indian culture and tradition since centuries, it has been tough eliminating it. The Prohibition of Child Marriage Act was made effective in 2007. This act defines child marriage as a marriage where the groom or the bride are underage, that is, the bride is under 21 years of age or the boy is younger than 21 years.",
  },
  {
    title: "Dowry Prohibition Act(1961)",
    content:
      "According to this act, taking or giving of dowry at the time of the marriage to the bride or the bridegroom and their family is to be penalised. Dowry System, giving and taking of dowry, is a norm in India. Dowry is often asked of the bride and her family by the groom and his family. Women openly complaining about it has helped to spread the word and encourage other women to take a stand.",
  },
  {
    title: "Sexual Harassment of Women at Workplace",
    content:
      "To ensure women's safety at workplace, this Act seeks to protect them from sexual harassment at their place of work. Thirty-six percent of Indian companies and 25 percent among MNC's are not complaint with the Sexual Harassment Act according to a FICCI-EY November 2015 report. Sexual harassment at workplace also includes - the use of language with sexual overtones, invasion of private space with a male colleague hovering too close for comfort, subtle touches and innuendoes.",
  },
];

const rights = [
  {
    title: "Women have a right against domestic violence",
    content:
      "Section 498 of the Indian Constitution looks to protect a wife, female live-in partner or a woman living in a household like a mother or a sister from domestic violence (including verbal, economic, emotional and sexual) by the hands of a husband, male live-in partner or relatives.",
  },
  {
    title: "Women have the right to equal pay",
    content:
      "According to the provisions listed under the Equal Remuneration Act, one cannot be discriminated on the basis of sex when it comes to salary, pay or wages. Working women have the right to draw an equal salary, as compared to men.",
  },
  {
    title: "Hindu Succession Act",
    content:
      "This recognises the right of women to inherit parental property equally with men.",
  },
  {
    title: "Women have the right to get free legal aid",
    content:
      "Under the Legal Services Authorities Act, female rape victims have the right to get free legal aid or help from the Legal Services Authority who has to arrange a lawyer for her.",
  },

  {
    title: "Women have a right to Zero FIR",
    content:
      "An FIR that can be filed at any police station irrespective of the location where the incident occurred or a specific jurisdiction it comes under, the Zero FIR can later be moved to the Police Station in whose jurisdiction the case falls under. This ruling was passed by the Supreme Court to save the victim's time and prevent an offender from getting away scot-free.",
  },
  {
    title: "Women have the right against workplace harassment",
    content:
      "The Sexual Harassment of Women at Workplace Act gives a female the right to file a complaint against any kind of sexual harassment at her place of work. Under this act, she can submit a written complaint to an Internal Complaints Committee (ICC) at a branch office within a period of 3 months.",
  },
  {
    title: "Women have the right against being stalked",
    content:
      "Section 354D of the IPC makes way for legal action to be taken against an offender if he/she follows a woman, tries to contact her to foster personal interaction repeatedly despite a clear indication of disinterest; or monitor the use by a woman of the internet, email or any other form of electronic communication.",
  },
  {
    title: "Women have right not to be arrested at night",
    content:
      "Unless there is an exceptional case on the orders of a first class magistrate, a woman cannot be arrested after sunset and before sunrise. In addition, the law also states that the police can interrogate a woman at her residence only in the presence of a woman constable and family members or friends.",
  },
];

const WomenSafetyLaws = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeIndex2, setActiveIndex2] = useState(-1);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedLaws = laws.map((item, index) => {
    // const active = activeIndex === index ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <Accordion.Item eventKey={index}>
          <Accordion.Header onClick={() => onTitleClick(index)}>
            {item.title}
          </Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      </React.Fragment>
    );
  });

  const renderedRights = rights.map((item, index) => {
    // const active = activeIndex === index ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <Accordion.Item eventKey={index}>
          <Accordion.Header onClick={() => onTitleClick(index)}>
            {item.title}
          </Accordion.Header>
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      </React.Fragment>
    );
  });

  return (
    <>
      <Container>
        <h1 className="text-center my-5">Women Safety Laws</h1>
        <Accordion defaultActiveKey={activeIndex} className="mb-5">
          {renderedLaws}
        </Accordion>
        <h1 className="text-center mb-5">Women Rights</h1>
        <Accordion defaultActiveKey={activeIndex2} className="mb-5">
          {renderedRights}
        </Accordion>
      </Container>
    </>
  );
};

export default WomenSafetyLaws;
