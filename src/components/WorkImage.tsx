import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const Component = props.link ? "a" : "div";

  return (
    <div className="work-image">
      <Component
        className="work-image-in"
        {...(props.link ? { href: props.link, target: "_blank" } : {})}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt ? `${props.alt} - Project Showcase` : "Portfolio Project Showcase"} loading="lazy" decoding="async" />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </Component>
    </div>
  );
};

export default WorkImage;
