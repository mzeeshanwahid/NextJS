import MyLayout from "../components/MyLayout";
import Avatar from "react-avatar";

const About = () => {
  return (
    <MyLayout>
      <div className="container">
        <h1 className="title">About the Author</h1>
        <Avatar githubHandle="mzeeshanwahid" size={"200"} round={true} />
        <div>
        <h1>Muhammad Zeeshan</h1>
        <p>
          Zeeshan is a Software Engineer and like's to code JavaScript. He is
          currently working on React but can adapt any JavaScript framework or
          library! It's just a piece of cake for him.
        </p>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-family: "Arial";
        }

        .title{
            color: skyblue;
        }

        .container {
          text-align: center;
          width: 75%;
          margin: 0px auto;
        }
      `}</style>
    </MyLayout>
  );
};

export default About;
