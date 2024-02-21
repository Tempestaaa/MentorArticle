import "./ArticleImage.css";
import drawers from "../../assets/images/drawers.jpg";

const ArticleImage = () => {
  return (
    <div className="articleImage">
      <img src={drawers} alt="drawers" />
    </div>
  );
};

export default ArticleImage;
