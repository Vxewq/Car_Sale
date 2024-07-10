import { Button, Carousel } from "@material-tailwind/react";
import "./style.scss";

export default function Landing() {
  return (
    <>
      <div className="showcase">
        <div data-aos="fade-right" data-aos-duration="1000" className="txt">
          <h1>Make Your Dream Come True</h1>
          <Button variant="outlined">Order</Button>
        </div>
        <div
          className="photo"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <img
            src="https://sportishka.com/uploads/posts/2021-12/1639133901_26-sportishka-com-p-mashini-avtopark-sport-krasivo-foto-27.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="avaible">
        <Carousel className="rounded-xl">
            <div className="new">
                <div className="info">
                    <h1>Porshce 911</h1>
                    <p>Crucial to the unique 911 driving experience: the optimal set-up. This includes new engine mountings and a completely revised chassis and even wider wheels to transform the increased power output into breathtaking dynamics.</p>

                </div>
                <div className="photo">
                    <img src="https://images-porsche.imgix.net/-/media/646ED7CDD4DF4060A4823F3A9DB8DA22_97CB2E119D8749C19004EC939CD09E96_CZ25W01IX0010911-carrera-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format" alt="" />
                </div>
            </div>
        </Carousel>
      </div>
    </>
  );
}
