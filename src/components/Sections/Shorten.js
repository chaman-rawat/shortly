import { useState, useRef, useEffect } from "react";

import Button from "../UI/Button";
import classes from "./Shorten.module.css";

let countItems = 0;

const Shorten = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [linkErrorMessage, setLinkErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();
  console.log(shortenedLinks);
  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem("savedShortenedLinks"));
    if (localState !== null) {
      setShortenedLinks(localState);
      countItems = localState.length;
    }
  }, []);

  const getShortenLink = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Please add a valid link");
      }

      const data = await response.json();
      console.log(data);

      const link = {
        id: countItems,
        fullLink: data.full,
        shortenLink: data.short,
      };

      localStorage.setItem(
        "savedShortenedLinks",
        JSON.stringify([...shortenedLinks, link])
      );

      setShortenedLinks((prev) => [...prev, link]);

      setIsLoading(false);
      setLinkErrorMessage("");
      ++countItems;
    } catch (error) {
      setLinkErrorMessage(error.message);
      inputRef.current.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const linkShortenHandler = (event) => {
    event.preventDefault();
    const enteredLink = inputRef.current.value.trim().toLowerCase();

    if (enteredLink.length === 0) {
      setLinkErrorMessage("Please add a link");
      inputRef.current.focus();
      return;
    }

    getShortenLink(enteredLink);
    inputRef.current.value = "";
  };

  return (
    <>
      <section className={classes.shorten}>
        <div className="container">
          <form action="" className={`${classes.shorten__form}`}>
            <input
              ref={inputRef}
              className={classes.shorten__search__input}
              placeholder="Shorten a link here..."
              type="text"
            />
            {linkErrorMessage.length !== 0 && (
              <p className={classes.shorten__search__error}>
                {linkErrorMessage}
              </p>
            )}
            <Button
              type="submit"
              className={classes.shorten__btn}
              onClick={linkShortenHandler}
            >
              Shorten It!
            </Button>
          </form>
        </div>
      </section>

      {(shortenedLinks.length !== 0 || isLoading) && (
        <section className={classes.result}>
          <div className="container center">
            <ul className={`row ${classes.result__list}`}>
              {isLoading && (
                <li
                  className={`row ${classes.result__list__items} ${classes.loader}`}
                >
                  <div className={classes.loader__dots}></div>
                </li>
              )}
              {shortenedLinks
                .slice(0)
                .reverse()
                .map((link) => (
                  <ShortenedLinkItem key={link.id} linkData={link} />
                ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Shorten;

const ShortenedLinkItem = (props) => {
  const link = props.linkData;

  const [isCopied, setIsCopied] = useState(false);

  const copyHandler = (selectedLink, linkId) => {
    navigator.clipboard
      .writeText(selectedLink)
      .then(() => {
        setIsCopied(true);
      })
      .catch(() => {
        console.log("Error while coping to clipboard");
      });
  };

  return (
    <li className={`row ${classes.result__list__items}`}>
      <span className={classes.link__url} title={link.fullLink}>
        {link.fullLink}
      </span>

      <span className={classes.link__shorten}>{link.shortenLink}</span>
      <Button
        className={`${classes.link__btn}
                    ${isCopied && classes.link__btn__copied}
                      `}
        onClick={() => copyHandler(link.shortenLink, link.id)}
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </li>
  );
};
