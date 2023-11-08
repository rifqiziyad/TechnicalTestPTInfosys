import Container from "@mui/material/Container";
import member1 from "../assets/images/our-teams/Ellipse 4.png";
import member2 from "../assets/images/our-teams/Ellipse 4 (1).png";
import member3 from "../assets/images/our-teams/Ellipse 4 (2).png";
import member4 from "../assets/images/our-teams/Ellipse 4 (3).png";
import member5 from "../assets/images/our-teams/Ellipse 4 (4).png";
import member6 from "../assets/images/our-teams/Ellipse 4 (5).png";
import member7 from "../assets/images/our-teams/Ellipse 4 (6).png";
import member8 from "../assets/images/our-teams/Ellipse 4 (7).png";
import "../styles/OurTeams.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readData, selectOurTeamList } from "../redux/OurTeamsSlice";
import { Button, CircularProgress } from "@mui/material";

const MemberList = [
  {
    src: member1,
    name: "Sarah Gilbert",
    posiiton: "CEO & Founder DigiXine",
  },
  {
    src: member2,
    name: "Stephen Joe",
    posiiton: "Social Media Manager",
  },
  {
    src: member3,
    name: "Amanda Johnson",
    posiiton: "Senior Content Writer",
  },
  {
    src: member4,
    name: "Danie Rogue",
    posiiton: "Senior UX Writer",
  },
  {
    src: member5,
    name: "Joana Marie",
    posiiton: "Frontend Engineer",
  },
  {
    src: member6,
    name: "Larry Sam",
    posiiton: "Backend Engineer",
  },
  {
    src: member7,
    name: "Jessica Law",
    posiiton: "Ads & Promotion Expert",
  },
  {
    src: member8,
    name: "Risa Watson",
    posiiton: "Senior SEO Specialist",
  },
];

const OurTeams = () => {
  const data = useSelector(selectOurTeamList) || [];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSet = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(readData(MemberList));
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      {/* <button onClick={handleSet}>test</button> */}
      <Container
        maxWidth="md"
        style={{ padding: "100px 0" }}
        className="our-teams"
      >
        {/* {data.list.list.map((data, index) => {
          return <h1 key={index}>{data.name}</h1>;
        })} */}
        <h1>Our Teams</h1>
        {data.list.list.length === 0 && (
          <Button onClick={handleSet}>Show Our Teams</Button>
        )}
        <div className="list" style={{ textAlign: "center" }}>
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CircularProgress color="inherit" />
            </div>
          )}

          {data.list.list.map((data, index) => {
            return (
              <div key={index} className="box">
                <img src={data.src} alt={data.name} />
                <div>
                  <h4>{data.name}</h4>
                  <h5>{data.posiiton}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default OurTeams;
