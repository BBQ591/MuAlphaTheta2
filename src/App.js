import "./App.css";
import logo from "./MAOlogo-color.png";
import { ScrollMenu, VisiblityContext } from "react-horizontal-scrolling-menu";
// import schedule from "./Schedule.png";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PosterSheet from "./PosterSheet.png";
import ChalkSheet from "./ChalkSheet.png";
// import { Textfit } from "react-textfit";
function App() {
  // Define a styled component with the Gagalin font
  const [Brianhover, setBrianHover] = useState(false);
  const [Elenahover, setElenaHover] = useState(false);
  const [Amyhover, setAmyHover] = useState(false);
  const [Trishitahover, setTrishitaHover] = useState(false);
  const [BrianClick, setBrianClick] = useState(false);
  const [ElenaClick, setElenaClick] = useState(false);
  const [AmyClick, setAmyClick] = useState(false);
  const [TrishitaClick, setTrishitaClick] = useState(false);
  const [MuClick, setMuClick] = useState(false);
  const [AlphaClick, setAlphaClick] = useState(false);
  const [ThetaClick, setThetaClick] = useState(false);
  const [ChalkTalkClick, setChalkTalkClick] = useState(false);
  const [PosterClick, setPosterClick] = useState(false);
  const [InterSchoolClick, setInterSchoolClick] = useState(false);
  const [MentalClick, setMentalClick] = useState(false);
  const [SpeedClick, setSpeedClick] = useState(false);
  const [HistoryClick, setHistoryClick] = useState(false);
  const [MathClick, setMathClick] = useState(false);
  const [IndividualClick, setIndividualClick] = useState(false);
  const [CipheringClick, setCipheringClick] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#5271FF",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          // marginTop: 50,
          fontFamily: "playball",
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 100, textAlign: "center" }}>
          Tennessee Mu Alpha Theta
        </h1>
      </div>
      <div
        style={{
          // marginTop: 30,
          // marginLeft: 30,
          flex: 1,
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          style={{
            width: "400px",
          }}
        />
      </div>
      <div style={{ flexDirection: "row", display: "flex", padding: 20 }}>
        <div style={{ paddingRight: 20 }}>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              borderRadius: 20,
              boxShadow: "1px 2px 9px black",
              padding: 20,
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }}>Theme</h1>
            <p style={{ fontSize: 20, color: "white" }}>Outer Space</p>
          </div>
        </div>
        <div style={{ paddingRight: 20, flex: 2 }}>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              borderRadius: 20,
              boxShadow: "1px 2px 9px black",
              padding: 20,
            }}
          >
            <h1 style={{ color: "white" }}>Location</h1>
            <p style={{ fontSize: 20, color: "white" }}>
              Oak Ridge High School: 1450 Oak Ridge Turnpike, Oak Ridge, TN
              37830.
              <br /> Please enter through the bus loop doors on Providence
              Avenue and the event will start in the Amphitheater.
            </p>
          </div>
        </div>

        <div>
          <div
            style={{
              flex: 1,
              textAlign: "center",
              borderRadius: 20,
              boxShadow: "1px 2px 9px black",
              padding: 20,
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }}>Date</h1>
            <p style={{ fontSize: 20, color: "white" }}>April 5-6, 2024</p>
          </div>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <div
          style={{
            marginTop: 50,
            textAlign: "center",
            alignItems: "center",
            alignContent: "center",
            padding: 20,
            borderRadius: 20,
            boxShadow: "1px 2px 9px black",
            // backgroundColor: "white",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>Registration</h1>
          <p style={{ fontSize: 15, color: "white" }}>
            Please submit one online registration document per school using the
            following Google Form:
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfen0Tf8oJR001ZI3z072Tb3DKOvPzjtxf_oQr1AKWMnIPpuQ/viewform"
            style={{ color: "white" }}
          >
            Click Here!
          </a>
          <p style={{ fontSize: 15, color: "white" }}>
            The registration fee for the convention covers t-shirts, prizes,
            Friday dinner and Saturday lunch. There is no registration fee for
            sponsors. <br />
            <br />
            Early Bird Registration ends March 1st: $40.00 per student + $2 TN
            State MAO dues Regular Registration March 2nd-15th: $50.00 per
            student + $2 TN State MAO dues Registration closes March 15th.
            <br />
            <br /> IF THE FEES, TRAVEL EXPENSES, OR ACCOMMODATIONS PRESENT A
            FINANCIAL BARRIER FOR YOUR SCHOOL, the national office has
            competition grants available “of up to $500 per active chapter to
            help pay entrance fees or expenses associated with a math
            competition” at https://mualphatheta.org/competition-grants. We
            strongly encourage ALL schools from across the state to attend the
            state convention, especially if your school has not attended in
            several years. It can’t truly be a state convention without
            representation from all over West, Middle, and East Tennessee.{" "}
            <br />
            <br />
            The Tennessee State Mu Alpha Theta dues of $2 per student member per
            year should also be paid prior to the convention. This fund is used
            to keep the registration fee for attending the state convention
            relatively low and provides a $500 stipend for state officers and
            the sponsor of the state president attend MAO National Convention.
            The National Convention is the best opportunity for students to
            foster a love for math, make new friends from Hawaii or Washington,
            and compete against top mathletes in the USA.
            <br />
            <br /> Make one check for registration fees and another check for
            the annual membership fee of $2 per registered MAO student
            (regardless of their attendance at state convention). Checks should
            be made payable to Oak Ridge High School. Registration fees for this
            year’s state convention and state dues for all Tennessee Mu Alpha
            Theta members need to be sent to:
            <br /> Attn: Deanna Pickel <br />
            Oak Ridge High School
            <br /> 1450 Oak Ridge Turnpike
            <br /> Oak Ridge, TN 37830
          </p>
        </div>
      </div>
      <div style={{}}>
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>Officers</h1>
        </div>

        <ScrollMenu style={{}}>
          {/* <div
          style={{
            height: 250,
            backgroundColor: "Black",
            width: 250,
            borderRadius: 20,
          }}
        > */}
          <button
            style={{
              borderRadius: 20,
              opacity: Brianhover ? 0.5 : 1,
              boxShadow: "1px 2px 9px black",
              fontSize: (window.innerWidth / window.innerHeight / 2.02463) * 30,
              backgroundImage: "url(" + require("./Brian.png") + ")",
              backgroundSize: "cover",
              color: "white",
              width: (300 * window.innerWidth) / 1319,
              height: (300 * window.innerWidth) / 1319,
              color: "purple",
              marginRight: 30,
              marginLeft: 30,
              marginBottom: 10,
              marginTop: 10,
            }}
            onMouseOver={() => setBrianHover(true)}
            onMouseOut={() => setBrianHover(false)}
            onClick={() => setBrianClick(true)}
          ></button>
          <button
            style={{
              borderRadius: 20,
              height: (300 * window.innerWidth) / 1319,
              width: (300 * window.innerWidth) / 1319,
              opacity: Trishitahover ? 0.5 : 1,
              boxShadow: "1px 2px 9px black",
              fontSize: (window.innerWidth / window.innerHeight / 2.02463) * 30,
              backgroundImage: "url(" + require("./Trishita.png") + ")",
              backgroundSize: "cover",
              color: "white",
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
            }}
            onMouseOver={() => setTrishitaHover(true)}
            onMouseOut={() => setTrishitaHover(false)}
            onClick={() => setTrishitaClick(true)}
          ></button>
          {/* </div> */}
          <button
            style={{
              borderRadius: 20,
              height: (300 * window.innerWidth) / 1319,
              width: (300 * window.innerWidth) / 1319,
              opacity: Elenahover ? 0.5 : 1,
              boxShadow: "1px 2px 9px black",
              fontSize: (window.innerWidth / window.innerHeight / 2.02463) * 30,
              backgroundImage: "url(" + require("./Elena.png") + ")",
              backgroundSize: "cover",
              color: "white",
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
            }}
            onMouseOver={() => setElenaHover(true)}
            onMouseOut={() => setElenaHover(false)}
            onClick={() => setElenaClick(true)}
          ></button>
          <button
            style={{
              borderRadius: 20,
              height: (300 * window.innerWidth) / 1319,
              width: (300 * window.innerWidth) / 1319,
              opacity: Amyhover ? 0.5 : 1,
              boxShadow: "1px 2px 9px black",
              fontSize: (window.innerWidth / window.innerHeight / 2.02463) * 30,
              backgroundImage: "url(" + require("./Amy.png") + ")",
              backgroundSize: "cover",
              color: "white",
              marginLeft: 30,
              marginRight: 30,
              marginBottom: 10,
              marginTop: 10,
            }}
            onMouseOver={() => setAmyHover(true)}
            onMouseOut={() => setAmyHover(false)}
            onClick={() => setAmyClick(true)}
          ></button>
        </ScrollMenu>
        <div className="container mt-3">
          <Modal show={BrianClick}>
            <Modal.Header closeButton onClick={() => setBrianClick(false)}>
              <Modal.Title>President: Brian Qu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Brian loves to play soccer and is on the Tennessee Olympic
              Development Program 1st team. His other hobbies include lifting,
              running, and coding. In fact, he programmed this website as
              promised :)
              <br />
              Contact: brianqu2013@gmail.com
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={ElenaClick}>
            <Modal.Header closeButton onClick={() => setElenaClick(false)}>
              <Modal.Title>Treasurer: Elena Vogt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Elena is the current Sophomore class president for her school. She
              enjoys playing soccer and rowing. Outside of sports Elena is on
              the high school robotics team and volunteers in the community. In
              her free time, she loves reading, learning to code, and spending
              time with her friends. <br />
              Contact: Elena.k.vogt@icloud.com
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={AmyClick}>
            <Modal.Header closeButton onClick={() => setAmyClick(false)}>
              <Modal.Title>Secretary: Amy Yu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Amy Yu is currently a sophomore at White Station High School. She
              began her interest in mathematics in middle school with
              MATHCOUNTS, where she was a three-time state qualifier and
              two-time national finalist. More recently, she is a two-time AIME
              (American Invitational Mathematics Examination) qualifier, also
              placing 1st at state for TMTA (Tennessee Mathematics Teacher’s
              Association) for Algebra II and 2nd at state for Precalculus.
              Currently, she leads the local MATHCOUNTS team as head coach, and,
              to inspire others to join the math community as well, she manages
              an organization dedicated to helping girls in STEM, tutoring over
              40 students each semester. Outside of math, she enjoys playing
              tennis, painting, and volunteering. <br /> Contact:
              amyjyu08@gmail.com
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={TrishitaClick}>
            <Modal.Header closeButton onClick={() => setTrishitaClick(false)}>
              <Modal.Title>Vice President: Trishita Paul</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Trishita is a current senior at Brentwood High School. She plays
              tennis for school team and loves anything math and science. In her
              free time, she loves learning languages and know how to speak over
              four different languages!
              <br />
              Contact: trishitapaul06@gmail.com
            </Modal.Body>
          </Modal>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <div className="container mt-3">
          <Modal show={MuClick}>
            <Modal.Header closeButton onClick={() => setMuClick(false)}>
              <Modal.Title>Mu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Mu level is for students who are currently in or have completed a
              calculus course. Tests will consist of AP Calculus AB questions in
              the Mu level but may also include questions from AP Calculus BC.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={AlphaClick}>
            <Modal.Header closeButton onClick={() => setAlphaClick(false)}>
              <Modal.Title>Alpha</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Alpha level is for students who have completed Geometry and
              Algebra 2, but who have not taken calculus. This would include
              students who are enrolled in Pre-Calculus, Trigonometry, or
              Advanced Algebra. However, most questions will be based on the
              Pre-Calculus curriculum.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={ThetaClick}>
            <Modal.Header closeButton onClick={() => setThetaClick(false)}>
              <Modal.Title>Theta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Theta level is for students who have not completed any course
              above Geometry and Algebra 2. There will be no trigonometry
              questions other than right triangle trigonometry, the law of
              sines, and the law of cosines.
            </Modal.Body>
          </Modal>
        </div>
        <h1 style={{ color: "white" }}>Sections</h1>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Button
            onClick={() => setMuClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginLeft: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Mu
          </Button>
          {/* <button
            onClick={() => setMuClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Mu
          </button> */}
          <Button
            onClick={() => setAlphaClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Alpha
          </Button>
          {/* <button
            onClick={() => setAlphaClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Alpha
          </button> */}
          <Button
            onClick={() => setThetaClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginRight: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Theta
          </Button>
          {/* <button
            onClick={() => setThetaClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Theta
          </button> */}
        </div>
      </div>
      <div
        style={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <div className="container mt-3">
          <Modal show={ChalkTalkClick}>
            <Modal.Header closeButton onClick={() => setChalkTalkClick(false)}>
              <Modal.Title>Chalk Talk</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Chalk Talk topics will follow the national’s topics: <br />● Mu –
              Math and Profitability (Entertainment vs. Gambling) <br />● Alpha
              – Math and the Desert (Such as Climate effects, water sources){" "}
              <br />● Theta – Math and Desserts (Hotel industry and baking){" "}
              <br />
              <br />
              Students are free to create any problem as long as the math is
              appropriate for their level. This means differential and/or
              integral calculus is expected at the Mu level. Pre-calculus topics
              must be used at the Alpha level, and geometry and/or Algebra 2
              topics must be used at the Theta level. Students will be given 7
              minutes of uninterrupted time for their presentation on the topic
              above. A warning will be given when one minute remains.
              Presentations will be cut off at the 7-minute mark. The only
              material that participants may bring into the room with them is a
              single 3” by 5” index card. Writing can be on both sides of the
              card. If a student wishes to cite a source for their presentation,
              an index card must be presented to the judges with the citation.
              Writing must be done on a whiteboard, markers provided.
              <br />
              <br /> Only sponsors from the presenter’s school may observe the
              presentation. No competitor may observe any other competitors’
              presentation.
              <br />
              <br /> Two judges will be assigned to each level to judge the
              presentations. Scores will be out of a total of 100 points. A
              rubric is at the end of the packet. The “use of time” score
              measures how close a participant comes to the 7-minute time limit
              and any interruptions in the flow of the presentation. The
              professionalism of the presenter's dress is part of the score.
              Each presenter should be as well dressed as they reasonably can.
              Do not buy a suit for the competition but wear a formal outfit. If
              you have concerns or questions about appropriate dress, please
              email us. Each school may enter up to 1 person per division.
              <br />
              <br />
              <img
                src={ChalkSheet}
                style={{
                  width: "470px",
                }}
              />
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={PosterClick}>
            <Modal.Header closeButton onClick={() => setPosterClick(false)}>
              <Modal.Title>Poster</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Each school is responsible for providing your students with a
              plain white poster board of standard size, 22” x 28”. Schools will
              create a poster during the week of the convention at their home
              schools. Only Mu Alpha Theta members in good standing in your
              chapter may work on the poster whether or not they are attending
              the convention this year.
              <br />
              <br /> The specific theme for the poster will be emailed to
              sponsors Thursday March 28, 2024:. This is not necessarily the
              theme of the convention and can vary greatly from it. <br />●
              Posters are due when your chapter checks in to the convention.{" "}
              <br />● Each school may submit only one poster. <br />● Markers,
              colored pencils, paint, etc., can be used. <br />● NO GLITTER!{" "}
              <br />● Nothing can be attached to the poster board with glue,
              tape, or any other adhesive. <br />● Posters will be judged on
              content, relevance to theme, artistic quality, and overall
              appearance.
              <br /> See enclosed judging sheet. Students must write the school
              name legibly on the back of the poster, so that judging is
              confidential and impartial. Significant penalties will be given
              for any mascots, school names, or other identifying information on
              the front of the poster.
              <br />
              <br />
              <img
                src={PosterSheet}
                style={{
                  width: "470px",
                }}
              />
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={InterSchoolClick}>
            <Modal.Header
              closeButton
              onClick={() => setInterSchoolClick(false)}
            >
              <Modal.Title>Interschool Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              All students and at most one sponsor will work together on a
              massive test including math, riddles, puzzles, and trivia. Teams
              will have one hour of working time on this test. Only one answer
              sheet will be accepted from each school at the end of the hour.
              All cell phones and electronic devices must be turned off and out
              of sight for the duration of this event. Any violation of this
              policy will result in school disqualification.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={MentalClick}>
            <Modal.Header closeButton onClick={() => setMentalClick(false)}>
              <Modal.Title>Mental Math</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Mental math is a 10-minute test with 40 open response problems.
              Answers should be written in the space provided in reduced form.
              All problems should be solved mentally and students must use a
              pen. All answers must be placed on the answer line; any stray mark
              will result in disqualification. Scores are calculated by the
              following: 5 points per correct answer, 1 point per question
              unanswered, and 0 points per question incorrect. All students will
              participate.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={SpeedClick}>
            <Modal.Header closeButton onClick={() => setSpeedClick(false)}>
              <Modal.Title>Speed Math</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Speed math is a 15-minute test with 25 open response problems.
              Answers should be written in the space provided in reduced form.
              One point will be awarded for each correct answer. There is no
              penalty for wrong or omitted answers. All students will
              participate.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={HistoryClick}>
            <Modal.Header closeButton onClick={() => setHistoryClick(false)}>
              <Modal.Title>History of Math Timeline</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              All students and at most one sponsor will work together to
              correctly order historical events on a timeline in 15 minutes.
              Teams will be awarded 1 points for each correctly placed event.
              All students will participate.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={MathClick}>
            <Modal.Header closeButton onClick={() => setMathClick(false)}>
              <Modal.Title>Math Bowl</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Math Bowl is a quiz bowl competition involving only math problems.
              Each team will consist of up to four members. Teams are not
              separated by division; each school has a school team. Each round
              will consist of 10 open response problems that can involve trivia,
              history, computation, current events, and theory. Math of any
              level can be in any round, including calculus. <br />
              <br />
              If your school is able to provide an extra buzzer system, please
              let us know and bring it with you.
              <br />
              <br />
              Rules: <br />· Each question will be read orally, and there will
              be no written display of the question. Writing materials and plain
              white paper will be supplied so that students can write down
              important details about a question as it is read. <br />· Each
              question has a 30 second time limit beginning when the judge has
              finished reading the question. If a team buzzes while the judge is
              reading a question, the judge will stop reading, the timer will
              begin, and the (unfinished) question must be answered immediately.
              Any team member may request at any time that a question be
              repeated, but this does not delay the clock or prevent either team
              from buzzing. As soon as the judge hears the buzzer, the judge
              will call on the team that buzzed to answer. Any member of the
              buzzing team may answer, but the answer must be given within 3
              seconds of the buzz. The timer will say "time" at the end of 3
              seconds. <br />· Only the first answer will be accepted.
              Absolutely no “blitzing” of answers will be allowed. If the
              buzzing team fails to answer the question correctly or does not
              answer within 3 seconds, the opposing team has an opportunity to
              answer the question (buzzing is not necessary), provided the 30
              second time period has not expired. <br />· The timer will
              announce when 5 seconds remain in the 30 second period by saying
              "5 seconds." At 30 seconds the timer will say "end." <br />· The
              higher scoring team is declared the winner and proceeds to the
              next round. If necessary, sudden death tie-breaker questions will
              be used.
              <br /> In the final round, the team from the winner’s bracket will
              have advantage, meaning the team from the consolation bracket must
              beat that team twice to win the competition.
              <br />
              <br /> Rules for Math Bowl Answers: <br />· Non-integer answers
              must be expressed either as an improper or proper fraction unless
              otherwise stated by the problem. All roots must be in reduced
              form. Denominators must be "rationalized.” Probabilities should be
              stated in reduced form as fractions and not as percentages or
              decimals unless otherwise indicated. Complex expressions involving
              parentheses or nested operations should be unambiguously indicated
              with terms such as “open parenthesis” and “close parenthesis” or
              “the quantity.” Any ambiguous answer will strictly be counted
              incorrect. Examples of correct form: “five over seven”, “twelve
              elevenths”, “x to the quantity a plus b”, “x over open parenthesis
              y minus two close parenthesis”, and “square root of two over two”
              Examples of incorrect form: “point seven one four three”,
              “twenty-four over twenty-two”, “x to the a plus b”, “x over y
              minus two”, and “one over square root of two” The examples are
              respectively mathematically equivalent or similar, but to prevent
              any confusion, these answer forms must be followed.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={IndividualClick}>
            <Modal.Header closeButton onClick={() => setIndividualClick(false)}>
              <Modal.Title>Individual Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              The Individual Test will be offered at each level: Mu, Alpha, and
              Theta. Each test has thirty multiple-choice questions. Students
              will be given 60 minutes to complete this test. 5 points will be
              awarded for each correct answer, 1 point for a blank, 0 for an
              incorrect answer. All students participate.
            </Modal.Body>
          </Modal>
        </div>
        <div className="container mt-3">
          <Modal show={CipheringClick}>
            <Modal.Header closeButton onClick={() => setCipheringClick(false)}>
              <Modal.Title>Ciphering Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Ciphering will be offered at each level: Mu, Alpha, and Theta.
              Ciphering consists of 10 open response questions administered
              individually. Answers must be in exact reduced form and written in
              the box provided. Only answers written in the box will be scored.
              There is a 3-minute time limit per question. Scoring Formula: 12
              points for a question answered correctly in the 1st minute, 8
              points in the 2nd minute, and 4 points for a question answered
              correctly in the 3rd minute. All students participate.
            </Modal.Body>
          </Modal>
        </div>
        <h1 style={{ color: "white" }}>Tests</h1>
        <div style={{ flexDirection: "row", display: "flex" }}>
          {/* <button
            onClick={() => setChalkTalkClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Chalk Talk
          </button> */}
          <Button
            onClick={() => setChalkTalkClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginLeft: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Chalk Talk
          </Button>
          {/* <button
            onClick={() => setPosterClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Poster
          </button> */}
          <Button
            onClick={() => setPosterClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Poster
          </Button>
          {/* <button
            onClick={() => setInterSchoolClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Interschool Test
          </button> */}
          <Button
            onClick={() => setInterSchoolClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginRight: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Interschool
          </Button>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            height: window.innerWidth / 15,
          }}
        >
          {/* <button
            onClick={() => setMentalClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Mental Math
          </button> */}
          <Button
            onClick={() => setMentalClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginLeft: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Mental Math
          </Button>
          <Button
            onClick={() => setSpeedClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Speed Math
          </Button>
          {/* <button
            onClick={() => setSpeedClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Speed Math
          </button> */}
          <Button
            onClick={() => setHistoryClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginRight: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Math History
          </Button>
          {/* <button
            onClick={() => setHistoryClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            History of Math
          </button> */}
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            // backgroundColor: "#E6AA37",
          }}
        >
          {/* <button
            onClick={() => setMathClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Math Bowl
          </button> */}
          <Button
            onClick={() => setMathClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginLeft: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Math Bowl
          </Button>
          {/* <button
            onClick={() => setIndividualClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Individual Test
          </button> */}
          <Button
            onClick={() => setIndividualClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Individual Test
          </Button>
          {/* <button
            onClick={() => setCipheringClick(true)}
            style={{
              fontSize: 20,
              color: "white",
              flex: 1,
              backgroundColor: "#E6AA37",
            }}
          >
            Ciphering Test
          </button> */}
          <Button
            onClick={() => setCipheringClick(true)}
            style={{
              flex: 1,
              backgroundColor: "#E6AA37",
              marginRight: 5,
              height: window.innerWidth / 15,
              fontSize: window.innerWidth / 35,
              borderRadius: 15,
            }}
          >
            Ciphering Test
          </Button>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <div
          style={{
            // marginTop: 30,
            // marginLeft: 30,
            flex: 1,
            textAlign: "center",
            paddingTop: 30,
            borderRadius: 20,
            boxShadow: "1px 2px 9px black",
            padding: 20,
          }}
        >
          <h1 style={{ color: "white" }}>Tentative Schedule</h1>
          <p style={{ fontSize: 15, color: "white" }}>
            Friday, April 5th:
            <br /> ● 5:00-5:30 p.m. Check-In <br />● 5:30-6:30 p.m.
            Dinner/Welcome <br />● 6:30-7:30 p.m. Interschool Test <br />●
            7:45-8:15 p.m. Speed/Mental Math
            <br /> ● 8:30-10:00 p.m. History Math Timeline/Chalk Talk and School
            Bowl Qualifying Rounds <br />
            Saturday, April 6th:
            <br />● 8:00-9:00 a.m. Arrival and Check-In <br />● 9:00-10:15 a.m.
            Individual Test
            <br /> ● 10:15-10:30 a.m. Break <br />● 10:30-11:30 a.m. Ciphering{" "}
            <br />● 11:30-12:30 p.m. Lunch <br />● 12:30-1:00 p.m. Officer
            Speeches and Election <br />● 1:00-2:30 p.m. School Bowl Finals{" "}
            <br />● 2:30-3:00 p.m. Break <br />● 3:00-4:00 p.m. Closing Remarks
            and Awards Ceremony
          </p>
        </div>
      </div>
      <div style={{ flexDirection: "row", display: "flex", padding: 20 }}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            borderRadius: 20,
            boxShadow: "1px 2px 9px black",
            padding: 20,
          }}
        >
          <h1 style={{ color: "white" }}>Running for State Office</h1>
          <p style={{ fontSize: 15, color: "white" }}>
            Each school may nominate candidates for the following positions –
            President, Vice President, Secretary, and Treasurer. All members who
            choose to run for President must have attended at least one MAO
            state convention in the past. A person not attending the convention
            may run for office and have a member of their school speak on their
            behalf, but this is strongly discouraged. The school of the State
            President is responsible for hosting the next state convention. We
            require, for convenience and efficiency, that the State President
            and State Treasurer be from the same school and run as a ticket.
            <br />
            <br />
            Additionally, funds have been appropriated for every state officer’s
            (early bird) registration fee to be paid for the National
            Convention, up to $500. The sponsor of the State President will also
            have their (early bird) registration paid, up to $500.
            <br />
            <br /> Candidates will be given two minutes to speak in front of the
            convention, with a warning when there is 30 seconds remaining. Each
            school will have one vote for each position. Ties will be broken by
            a run-off of the top candidates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
