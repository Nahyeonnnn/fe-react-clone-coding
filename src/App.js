// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import Card from "./component/Card/Card";
import Top from "./component/Top/Top";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import './component/styles.css';

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    body {
        margin: 0;
    }
`;

const Title={topTitle : "Album example", topText : "Something short and leading about the collection below—its contents,\n the creator, etc. Make it short and sweet, but not too short so folks don’t\n simply skip over it entirely."
, topButton: "#007bff", topButton2 : "gray"};

const CardList = [
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  {CardImg : "", CardText: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
];



function App() {
  return <div>
      {/* <GlobalStyles/> */}
      <Header></Header>
      <div>
        <Top TopTitle = {Title.topTitle} TopText={Title.topText} TopButton={Title.topButton} TopButton2={Title.topButton2}></Top>
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>;
}

export default App;