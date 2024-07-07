import Container from "../../../components/utils/Container/Container";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

import styles from "./ProjectContent.module.css";

const ProjectContent = () => {
  return (
    <Container>
      <div className={styles.ProjectContent}>
        <div className={styles.content_container}>
          <table>
            <colgroup style={{ width: 200 }} />
            <colgroup style={{ width: "auto" }} />
            <tbody>
              <tr>
                <td>
                  <div>
                    <img
                      className={styles.image}
                      src={
                        process.env.PUBLIC_URL + `/images/RealMomentLogo.png`
                      }
                      alt="RealMoment"
                    />
                  </div>
                </td>
                <td className={styles.link_td}>
                  <div className={styles.link_warpper}>
                    <a
                      className={styles.a}
                      href="https://real-moment.kro.kr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://real-moment.kro.kr/
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.icon}>
                    <FaGithub size={35} />
                  </div>
                </td>
                <td className={styles.link_td}>
                  <h4>쇼핑몰</h4>
                  <div className={styles.link_warpper}>
                    <a
                      className={styles.a}
                      href="https://github.com/pado232/RealMoment"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/pado232/RealMoment
                    </a>
                  </div>

                  <h4>쇼핑몰 관리자</h4>
                  <div className={styles.link_warpper}>
                    <a
                      className={styles.a}
                      href="https://github.com/pado232/ShopAdmin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/pado232/ShopAdmin
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.icon}>
                    <SiNotion size={35} />
                  </div>
                </td>
                <td className={styles.link_td}>
                  <div className={styles.link_warpper}>
                    <a
                      href="https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ProjectContent;
