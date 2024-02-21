import "./Card.css";
import ArticleImage from "../ArticleImage/ArticleImage";
import Content from "../Content/Content";

const Card = () => {
  return (
    <div className="card">
      <ArticleImage />
      <Content />
    </div>
  );
};

export default Card;
