import React, { useEffect, useState } from "react";
import "Pages/scss/Home.scss";
import Loading from "Components/Loading";
import TopButton from "Components/TopButton";

const Home = () => {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [target, setTarget] = useState(""); // target
  const [isLoding, setIsLoding] = useState(false); // isloding

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoding(true);
      // 데이터를 가져오는 부분
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
      // callback 함수, option
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
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
