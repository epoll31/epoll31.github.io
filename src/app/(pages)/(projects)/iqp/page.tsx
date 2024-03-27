"use client";

import Page from "@/app/components/major/Page";
import ResearchCard from "@/app/components/major/ResearchCard";


export default function IQP() {
  return (
    <Page layout="Main" >
      <div className="max-w-prose mt-5" >
        <ResearchCard research={{
          title: "Nitrogen Cycle Public Outreach and Game Development",
          subTitle: "Interactive Qualifying Project",
          year: "2022",
          authors: ["Ethan Pollack", "Philip Bui", "Charles Anderson", "Hasan Gandor", "Vien Le"],
          abstract: "The natural nitrogen cycle (NNC) is an important part of the world's overall ecosystem. It is integral to all life, especially human life. The nitrogen cycle is a process that can easily go out of balance through human development. Some of the ways humans unintentionally affect the natural nitrogen cycle is through the agriculture industry and waste disposal systems. The agriculture industry is the largest factor of human incursion in the nitrogen cycle. It has gotten to a point where there is arguably a man-made nitrogen cycle that exists within the agriculture industry. Both the natural and man-made cycle influence each other. Sustaining both the natural cycle and the artificial one is key if the agriculture industry expects it to be at equal or greater levels of production as to what it is currently. This environmental relationship can almost be thought of as a resource balancing game, or an optimization game. The word “game” used here is not meant to diminish the severity of such ecological systems but meant to embody the creation of an imaginary model which can give us differing outcomes based on input. In current culture, games are a common form of entertainment in today’s world and one of the most ancient types of activity. However, with the advent of computers, games are now often said to have taken a new “dimension” of possibilities. This is embodied in the medium of video games and has been taken further with the recent technology of augmented reality (AR) and virtual reality (VR). Video games are a very recent medium with their origins going back to the 1950’s with Tennis for Two, and only in the past couple decades where they considered to have their own merit as tools for education. Virtual reality, the ancestor of augmented reality, is also relatively new, having its modern iteration first shown in the 1960’s with the Telesphere Mask. By combining the capabilities of AR/VR and video games, educators now have a wide range of possibilities for all sorts of education in a variety of fields. STEM education particularly due to the very hands-on and model driven nature of the subject. The goal of this project is to collaborate with educators and students to make an augmented reality game that aims to teach students about the nitrogen cycle and the greater social implications of human development in it.",
          tags: ["AR.js", "React.js", "Nitrogen Cycle", "Education", "Game Development"],
          pdf: "/iqp.pdf",
          id: "iqp",
        }} />
      </div>
    </Page>
  );
}