import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../assets/stylesheet/lecture.css";
import XMLReq from "../../utility/XMLReq";

const LecturePage = () => {
  const { id, lecture } = useParams();
  const history = useHistory();
  const [data, setData] = useState(false);
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (Number(id) === 0) {
    } else
      XMLReq(
        `https://openbookshelf.github.io/Statistical-Inference/lectures/${+id}/info.json`,
        setData
      );
  }, [id]);

  const change = (lectureId) => {
    if (+lecture !== lectureId) {
      if (data.lectures[lectureId]) {
        history.push(`/lectures/${id}/${lectureId}`);
      } else if (+id >= 0 && +id < 22) {
        history.push(
          `/lectures/${+lecture < lectureId ? +id + 1 : +id - 1}/${0}`
        );
      } else {
        history.push("/lectures");
      }
      setNum(num + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  if (!data) {
    return (
      <div className="d-flex items-center	 justify-center	flex-col	 w-100">
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className="text-center">درحال گرفتن محتوای جلسه</h4>
        <p className="text-center">لطفا کمی صبر کنید. </p>
      </div>
    );
  } else
    return (
      <section className="max-w-screen-xl mx-auto py-4 px-4 sm:px-8 relative">
        <div className="w-full bg-gray-50 absolute right-0 top-0 p-2 text-xl text-gray-600">
          {data.name}
        </div>
        <div className="mt-9">
          <div className="py-4">
            <h4 className="text-2xl text-gray-800 font-semibold md:text-3xl">
              {data.lectures[+lecture].title}
            </h4>
          </div>
          <div className="w-100 rounded-md ">
            <iframe
              style={{ width: "100%", height: "80vh", borderRadius: "16px" }}
              title="lecture one"
              src={data.lectures[+lecture].streamLink}
              allowFullScreen={true}
            ></iframe>
          </div>
          <div className="py-4">
            <h5 className="text-xl text-gray-800 font-semibold md:text-3xl">
              {data.lectures[+lecture].description}
            </h5>
          </div>
        </div>
        <style>{`
        .cta-pr-btn:hover svg {
          transform: translateX(5px);
        }
      `}</style>
        <div className="inline-flex w-full justify-between mt-3">
          <button
            onClick={() => change(+lecture + 1)}
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            بعدی
          </button>
          <button
            disabled={id === "0" && lecture === "0"}
            onClick={() => change(+lecture - 1)}
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            قبلی
          </button>
        </div>
      </section>
    );
};

export default LecturePage;
