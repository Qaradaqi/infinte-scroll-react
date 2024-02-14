import { useCallback, useEffect, useRef, useState } from "react";
import { Style } from "./style";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export default function Movies() {
  const [page, setPage] = useState<number>(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const { loading, error, data } = useFetch(page);
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);
  console.log(data);
  return (
    <Style>
      <div className="container">
        <h1 className="title">Infinite Scroll</h1>
        <ul className="items flex justify-start">
          {data?.map((item, index) => {
            return (
              <li
                className="item flex flex-column align-start justify-start"
                key={index}
              >
                <Link
                  to={"#"}
                  className="flex flex-column align-start justify-start gap-5"
                >
                  <div className="item__bg"></div>
                  <div className="item__poster">
                    <img className="img" src={item.poster} alt={item.title} />
                    <div className="poster__btn">
                      <i className="fa-solid fa-circle-play"></i>
                    </div>
                    <h3 className="item__title">{item.title}</h3>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        {loading && (
          <h3 className="loading flex align-center justify-center">
            Loading...
          </h3>
        )}
        {error && <h3>Error!</h3>}
        <div ref={loader}></div>
      </div>
    </Style>
  );
}
