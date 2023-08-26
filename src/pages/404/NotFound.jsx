import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you are lost</h3>
              <p>the page you are looking for not avaible!</p>
              <Link to="/" className="link_404 bg-primary hover:bg-[#e15600] focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-secondary rounded">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
