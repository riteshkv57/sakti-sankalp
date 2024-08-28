import React from "react";
import { Container } from "react-bootstrap";
import TechInfo from "./TechInfo";
import Route from "../Routing/Route";

const WomenInTech = (props) => {
  return (
    <div>
      <Route path="/womenintech">

      <Container>
        <h2 className="text-center my-5">Women In Technology</h2>

        <TechInfo
          imgurl="https://girlswhocode.com/assets/images/craft-prod/images/seo/_1200x630_crop_center-center_82_none/campus2019-6739.jpg?mtime=1588335924"
          title="Girls who Code"
          content="Girls Who Code is on a mission to close the gender gap in technology and to change the image of what a programmer looks like and does.
          We're reaching girls around the world and are on track to close the gender gap in new entry-level tech jobs by 2030. 
          We believe being brave is about being resilient, persistent, and ambitious. We believe that diverse ability, culture, identity, and opinion makes our organization stronger. 
          We’re not just preparing our girls to enter the workforce - we’re preparing them to lead it, to improve it, to completely and totally transform it."
          link="https://girlswhocode.com/"
          reverse="flex-row-reverse"
        />

        <TechInfo
          imgurl="https://64.media.tumblr.com/543f0ccd7e23ca14c6c9f0dd4c0f6fd6/tumblr_inline_p1hnq7g6so1umins3_1280.jpg"
          title="Django Girls"
          content="Django Girls is a non-profit organization and a community that empowers and helps women to organize free, 
        one-day programming workshops by providing tools, resources and support. 
        We are a volunteer run organization with hundreds of people contributing to bring more amazing women into the world of technology. 
        We are making technology more approachable by creating resources designed with empathy.
        During each of our events, 30-60 women build their first web application using HTML, CSS, Python and Django."
          link="https://djangogirls.org/en/"
        />

        <TechInfo
          imgurl="https://www.techopedia.com/wp-content/uploads/2023/02/istock-1154231467-3.jpeg"
          title="Women In Tech"
          content="Welcome to the public landing page for the Women in Technology
          Slack group. Our group is a safe, confidential space for women who
          work in technology to chat and support each other. Please consider
          joining us whether you are new to the tech industry or you are a
          long-time practitioner. Not a programmer? That’s fine! Our group
          does not exclude people who work in technical writing, software
          testing and QA, graphic design, user experience, project
          management, customer support, or other areas that are sometimes
          invisible in the discourse on women in tech."
          link="https://witchat.github.io/"
          reverse="flex-row-reverse"
        />

        <TechInfo
          imgurl="https://opendreamkit.org/public/images/womenInSage/pyladies-WIS.jpg"
          title="PyLadies"
          content="We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community. Our mission is to promote, 
        educate and advance a diverse Python community through outreach, education, conferences, events and social gatherings. PyLadies also aims to provide a friendly support network for women and 
        a bridge to the larger Python world. Anyone with an interest in Python is encouraged to participate!"
          link="https://pyladies.com/"
        />
      </Container>
      </Route>
    </div>
  );
};

export default WomenInTech;
