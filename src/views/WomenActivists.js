import React from "react";
import { Container } from "react-bootstrap";
import WomenActivistsShortInfo from "./WomenActivistsShortInfo";

const activists = [
  {
    title: "Laxmi Agarwal",
    content:
      "Laxmi Agarwal (born 1 June 1990) was attacked in 2005 in New Delhi at the age of 15, after rebuffing the romantic advances of Naeem Khan. Her story, among others, was told in a series on acid attack victims by Hindustan Times. She has since established grassroots campaigns for tackling the surge of acid attacks; one of her petitions has led the Supreme Court to order the central and state governments to regulate the sale of acid and the Parliament to enable easier prosecutions of acid attack perpetrators.She was the former director of Chhanv Foundation, a NGO dedicated to help acid attack survivors in India",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaMBvXCHsbp4f8uyc8ziKAPFetgP1gbjSLA&usqp=CAU",
    reverse: "",
  },
  {
    title: "Manasi Pradhan",
    content:
      "Manasi Pradhan (born 4 October 1962) is the founder of Honour for Women National Campaign, a nationwide movement to end violence against women in India. She won the 'Outstanding Women Award' in 2011. She is the founder of Nirbhaya Vahini, Nirbhaya Samaroh and OYSS Women.She fought successfully the widely prevalent social taboo against educating women, walked 15 km daily amidst hilly terrain and swamp to the only high school in the entire region to emerge as first woman matriculate of her village and subsequently the first woman law graduate of her region.The life story of Manasi Pradhan has been adopted as documentaries in United States and Israel",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrqcPiC9vy3onl1-hV4ZH2uNKHlQFHQbnXUA&usqp=CAU",
    reverse: "flex-row-reverse",
  },
  {
    title: "Malala Yousafzai",
    content:
      "Malala Yousafzai became the youngest ever person to be awarded the ‘Nobel Prize’ when she won the ‘Nobel Peace Prize’ in 2014. Malala is mainly known for her advocacy of female education in her native Swat Valley, Pakistan.Born into a family of progressive thinkers and educationists, Malala started expressing her frustration over the restrictive practices of the Taliban in an anonymous blog when she was just 11 years old. Malala wrote about how the Taliban were attempting to control the valley and trying to prevent girls from going to school.Her blog gained much prominence around the world and she soon became popular as an emerging activist who campaigned for girls’ rights to education. This angered the Taliban which issued a death threat against her. She was shot by a gunman when she was returning from school.The gutsy girl survived the horrific attack and returned to activism even more determined than before.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaJR4QYeNTrjoT-pqOdSfFXcmFQ0WWCGeTQ&usqp=CAU",
    reverse: "",
  },
  {
    title: "Kamla Bhasin",
    content:
      "Kamla Bhasin has worked on several subjects like gender equality, education, poverty alleviation, human rights and peace in South Asia since 1970. She is also part of SANGAT, a South Asian Feminist network and an active member of JAGORI, a women’s resource and training centre.In 1979, she began with the Food and Agricultural Organisation for their Freedom from Hunger campaign in New Delhi and worked for empowerment of rural and urban poor.  She has written extensively on patriarchy and gender. Her published works include Laughing Matters, Exploring Masculinity, Borders & Boundaries: Women in India’s Partition, What Is Patriarchy?, and Feminism and its Relevance in South Asia. In her literary work and her activism, she envisions a feminist movement that transcends class, borders, and other social and political divisions.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeX7ig3UI1pME-cmPKgUkBtXGOQXA0lBiibw&usqp=CAU",
    reverse: "flex-row-reverse",
  },
  {
    title: "Indira Jaising",
    content:
      "Indira Jaising has been called ‘formidable’ by many especially when recounting her efforts in framing of the Domestic Violence Act (2005). Founder of the Lawyer’s Collective, Indira started her legal practice in the early 1960s and has been working tirelessly for the past 53 years.Indira was the first female senior advocate in the High Court of Bombay and served as the first female Additional Solicitor General of India. Apart from women’s issues and human rights, she has also taken up environmental issues like protection of coastlines and more.She has fought some of the most high-profile cases in the country - she led commissions in Punjab to investigate the extra judicial killings, police brutality and disappearances in North India in the 70s and 80s, fought for compensation of victims of the 1984 Bhopal gas tragedy, and of the victims 2002 riots in Gujarat.",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-0_QdGuDOiRZs_AL6VunItGyyMq8h0MlQw&usqp=CAU",
    reverse: "",
  },
  // {
  //   title: "Pramila Nesargi",
  //   content: "Pramila Nesargi's mother was a freedom fighter and her father was a self-made man. She obtained a law degree at an early age and started practicing law.She is known as a maverick lawyer who fights against sensitive issues such as child labor, house and control, sexual violence at work, domestic violence and prisoner’s plight. She has also contributed in organising various unincorporated sectors. She has been a member of the dictionary committee for English-Kannada translation.She is the first woman to be elected in the past 50 years to the Karnataka Bar Council as Chairman of Bar Association. Pramila has represented a sweep of cases from high profile to controversial cases for which she has often faced severe criticism. ",
  //   imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2ewFaHadCovtvAON-I_DAJmueuNJvLTWKQ&usqp=CAU",
  //   reverse:"flex-row-reverse"
  // },
];

const renderedActivists = (activists) => {
  if (activists.length === 0) return;

  return activists.map((listItem) => {
    return (
      <WomenActivistsShortInfo
        key={listItem.title}
        title={listItem.title}
        content={listItem.content}
        imgurl={listItem.imgUrl}
        reverse={listItem.reverse}
      />
    );
  });
};

const WomenActivists = (props) => {
  return (
    <>
      <Container>
        <h1 className="my-5 text-center">Women Activists</h1>
        {renderedActivists(activists)}
      </Container>
    </>
  );
};

export default WomenActivists;
