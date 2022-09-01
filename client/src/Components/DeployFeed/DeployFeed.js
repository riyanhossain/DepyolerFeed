import React, { useEffect } from "react";
import styles from "./DeployFeed.module.css";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

const DeployFeed = () => {
  const [dataArray, setDataArray] = React.useState([]);
  const titleArray = [
    "Name/Symbol",
    "Status",
    "BananaMeter",
    "Deployer",
    "Address",
    "Verified",
    "Link",
    "Socials",
    "C/A Age",
  ];
  const [page, setPage] = React.useState(1);
  const [length, setLength] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const fetchDeployFeed = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://app-scanner.herokuapp.com//api/hashes?page=" + page
      );
      setDataArray(response.data.data);
      setLength(response.data.length);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDeployFeed(page);
  }, [page]);
  const pagearr = () => {
    let arr = [];
    for (let i = 1; i <= Math.ceil(length / 10); i++) {
      arr.push(i);
    }
    return arr;
  };
  return (
    <section className={styles.deployFeed}>
      <h1 className={styles.title}>DeployFeed</h1>
      <div className={`${styles.mainWrapper} $`}>
        <div className={`${styles.wrapper} ${styles.titleContainer}`}>
          {titleArray.map((el, i) => (
            <p
              className={styles.heading}
              style={{ textAlign: i === 0 && "left" }}
              key={i}
            >
              {el}
            </p>
          ))}
        </div>

        {loading ? (
          <div
            style={{
              minHeight: "100%",
              minWidth: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner />
          </div>
        ) : (
          dataArray && dataArray.map((el, i) => (
            <div className={`${styles.wrapper}  `} key={i}>
              <p className={styles.nameAndSymbol}>
                <span className={styles.name}> {el.tokenName}</span>{" "}
                <span className={styles.sucess}> {el.tokenSymbol}</span>
              </p>
              <p className={`${styles.status} ${styles.name}`}>
                {el.status ? el.status : "-"}
              </p>
              <div className={styles.iconWrapper}>
                <img
                  src="images/redBanana.svg"
                  alt="#"
                  className={styles.icon}
                />
              </div>
              <a
                href={el.deployer}
                className={styles.deployer}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/deployer.svg"
                  alt="#"
                  className={styles.icon}
                />
              </a>
              <div className={styles.addressContainer}>
                <span className={styles.name}>
                  {el.contractAddress.slice(0, 8)}...
                </span>
                <img
                  src="/images/copyIcon.svg"
                  alt=""
                  className={`${styles.icon} ${styles.copy}`}
                  onClick={() => {
                    navigator.clipboard.writeText(el.contractAddress);
                  }}
                />
              </div>
              <p
                className={` ${styles.name} ${
                  el.verified === false && styles.warning
                }`}
              >
                {`${el.verified === true ? "Verified" : "Not Verified"}`}
              </p>
              <a
                href={el.link}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/opensea.svg"
                  alt="#"
                  className={styles.icon}
                />
              </a>
              <div className={styles.socialContainer}>
                {el.socials
                  ? el.socials.map((element, index) => (
                      <a
                        key={index}
                        href={element.to}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={element.icon}
                          alt="#"
                          className={styles.icon}
                        />
                      </a>
                    ))
                  : "-"}
              </div>
              <p className={` ${styles.name}`}>{el.age ? el.age : "-"}</p>
            </div>
          ))
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          margin: "5px",
        }}
      >
        <button
          disabled={page === 1}
          style={{
            cursor: page === 1 && "not-allowed",
            background: page === 1 && "#00A8E8",
          }}
          className={styles.button}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          Prev
        </button>

        {pagearr().map((p) => (
          <button
            className={styles.button}
            onClick={() => setPage(p)}
            key={p}
            style={{
              cursor: page === p && "not-allowed",
              backgroundColor: p === page ? "#00A8E8" : null,
            }}
          >
            {p}
          </button>
        ))}

        <button
          className={styles.button}
          disabled={page === Math.ceil(length / 10)}
          style={{
            cursor: page === Math.ceil(length / 10) && "not-allowed",
            backgroundColor: page === Math.ceil(length / 10) ? "#00A8E8" : null,
          }}
          onClick={() => {
            if (page <= Math.floor(length / 10)) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default DeployFeed;
