import React, { useRef, useEffect } from "react";
import "../../styles/AboutMe.css";

const AboutMe = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const handleObserver = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      threshold: 0.1,
    });

    if (imgRef.current) observer.observe(imgRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    paragraphsRef.current.forEach((p) => {
      if (p) observer.observe(p);
    });

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);

      paragraphsRef.current.forEach((p) => {
        if (p) observer.unobserve(p);
      });
    };
  }, []);

  return (
    <section className="about_me">
      <div className="my_img" ref={imgRef}>
        <img src={process.env.PUBLIC_URL + `/images/Dony.jpg`} alt="Profile" />
      </div>
      <div className="content">
        <h2 ref={titleRef}>Front Developer</h2>
        <div>
          <p ref={(el) => (paragraphsRef.current[0] = el)}>
            빠르게 변하는 유행처럼 변화가 무쌍한 현시대에 새로운 시도를
            두려워하지 않는 프론트엔드 개발자가 되겠습니다.
          </p>
          <p ref={(el) => (paragraphsRef.current[1] = el)}>
            떨어지는 물방울에 바위가 침식하듯, 꾸준히 쌓은 지식으로 강한 힘을
            갖겠습니다. 성실함을 갖고 항상 앞으로 나아가는 프론트엔드 개발자로
            성장하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
