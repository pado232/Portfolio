import Container from "../../../components/utils/Container/Container";
import styles from "./ProjectImage.module.css";
const shoppingMallPage = [
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/Home.png`,
    name: "Home",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/loginPage.png`,
    name: "Login",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/signupPage.png`,
    name: "SignIn",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemlistPage.png`,
    name: "Itemlist",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/itemdetailPage.png`,
    name: "ItemDetail",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/haertPage.png`,
    name: "Haert",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/cartPage.png`,
    name: "Cart",
  },
  {
    src: `${process.env.PUBLIC_URL}/images/Shopping-Mall-Image/mypagePage.png`,
    name: "MyPage",
  },
];

const ProjectImage = () => {
  return (
    <Container>
      <div className={styles.ProjectImage}>
        <h3>'Real Moment' Shopping Mall</h3>
        <div className={styles.shop_img_container}>
          {shoppingMallPage.map((page, index) => (
            <div className={styles.shop_img_wrapper} key={index}>
              <img
                className={styles.shop_img}
                src={page.src}
                alt={`Screenshot of ${page.name}}`}
              />
              <p className={styles.page_title}> {page.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ProjectImage;
