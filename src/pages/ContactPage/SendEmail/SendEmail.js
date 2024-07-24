import React, { useRef, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { useTheme } from "../../../ThemeContext/ThemeContext";
import emailjs from "emailjs-com";

import Container from "../../../components/utils/Container/Container";

import lightStyles from "./SendEmail.module.css";
import darkStyles from "./SendEmailD.module.css";

const SendEmail = () => {
  const [theme] = useTheme();
  const formDataRef = useRef([]);
  const [emailValid, setEmailVaild] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "DONY",
    email: "",
    message: "",
  });

  const styles = theme === "light" ? lightStyles : darkStyles;

  const validateEmail = (value) => {
    const emailReg = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    return emailReg.test(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailVaild(validateEmail(value));
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (let i = 0; i < formDataRef.current.length; i++) {
      if (formDataRef.current[i].value === "") {
        formDataRef.current[i].focus();
        return;
      }
    }

    if (!emailValid) {
      formDataRef.current[1].focus();
      return; // 이메일 형식이 유효하지 않으면 전송을 막음
    }

    console.log("formData", formData);

    // EmailJS 초기화
    emailjs.init("KXPNbGDcC7L5WPbDG");

    emailjs
      .send("service_bxfihre", "template_9fhoy1q", formData)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        alert(
          "이메일이 성공적으로 보내졌습니다.\n빠른 시일 내에 답신 드리겠습니다."
        );
        setFormData({
          from_name: "",
          to_name: "DONY",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("이메일 보내기에 실패하였습니다.");
      });
  };

  const [copyState, setCopyState] = useState(false);

  const handleCopyEmail = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState(true);
      setTimeout(() => {
        setCopyState(false);
      }, 1000); // 1초 후에 copyState를 false로 설정
    } catch (e) {
      setCopyState(false);
    }
  };

  return (
    <Container>
      <div className={styles.SendEmail}>
        <div className={styles.top}>
          <div className={styles.email_container}>
            <div className={styles.icon_email}>
              <MdEmail size={"1.9rem"} style={{ verticalAlign: -9 }} />
            </div>
            <button
              onClick={() => {
                handleCopyEmail("ehsilver98@gmail.com");
              }}
              className={styles.copy}
            >
              ehsilver98@gmail.com{" "}
              <LuCopy size={"1.3rem"} style={{ verticalAlign: -5 }} />
            </button>
          </div>
          <div className={styles.copy_check_box}>
            {!copyState ? "" : <div className={styles.copy_check}>Copied!</div>}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.container_left}>
            <h3>CONTACT WITH ME</h3>
          </div>
          <div className={styles.container_right}>
            <form onSubmit={handleSubmit}>
              <div className={styles.box}>
                <label className={styles.lab}>
                  Your name <span>*</span>
                </label>
                <input
                  className={styles.inp}
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  ref={(el) => (formDataRef.current[0] = el)}
                  spellCheck={false}
                  maxLength={20}
                  required
                />
                {formData.from_name.length >= 20 && (
                  <div className={styles.error}>
                    이름은 20자 이하로 입력해주세요.
                  </div>
                )}
              </div>
              <div className={styles.box}>
                <label className={styles.lab}>
                  Your email <span>*</span>
                </label>
                <input
                  className={styles.inp}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  ref={(el) => (formDataRef.current[1] = el)}
                  spellCheck={false}
                  required
                />
                {!emailValid && formData.email.length > 0 && (
                  <div className={styles.error}>
                    이메일 형식을 지켜 입력해주세요.
                  </div>
                )}
              </div>
              <div className={styles.box}>
                <label className={styles.lab}>
                  Message <span>*</span>
                </label>
                <textarea
                  className={styles.txt_a}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  ref={(el) => (formDataRef.current[2] = el)}
                  spellCheck={false}
                  maxLength={500}
                  placeholder="메시지는 500자 이하로 입력해주세요."
                  required
                />
              </div>
              <button className={styles.submit} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SendEmail;
