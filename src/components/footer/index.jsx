import projectConfig from "../../config/page/project";

const Footer = () => {
  const { isShow, imgUrl, url, alignment } = projectConfig.poweredBy;
  return (
    <div className={`footer`} style={{ textAlign: alignment }}>
      {isShow && (
        <div>
          Powered by{" "}
          {imgUrl && (
            <a href={url} target="_blank">
              <img src={imgUrl} alt="Powered by"></img>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Footer;
