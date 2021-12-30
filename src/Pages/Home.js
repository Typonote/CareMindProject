import React, { useEffect, useState } from "react";
import "Pages/scss/Home.scss";
import Loading from "Components/Loading";
import TopButton from "Components/TopButton";

const Home = () => {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [target, setTarget] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoding(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      setItemList((itemLists) => itemLists.concat(Items));
      setIsLoding(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <>
      <div className="Home__Container">
        <div className="Item__Wrapper">
          {itemList.map((item, index) => (
            <div className="Items" key={index}>
              {index + 1}
            </div>
          ))}
        </div>
        {isLoding ? <Loading /> : ""}
        <div ref={setTarget}></div>
      </div>
      <TopButton />
    </>
  );
};

export default Home;
