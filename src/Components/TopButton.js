import React, { useState } from "react";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "Components/scss/TopButton.scss";

library.add(faArrowAltCircleUp);

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button>
        <FontAwesomeIcon
          icon={faArrowAltCircleUp}
          onClick={scrollToTop}
          className="Button__Top"
          style={{ display: visible ? "inline" : "none" }}
        />
      </button>
    </div>
  );
};

export default TopButton;
