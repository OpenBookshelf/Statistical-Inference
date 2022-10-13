import SessionsList from "./SessionsList";
const LectureIntro = () => {
  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          مباحث تدریس شده استنباط آماری
        </h1>
      </div>
      <div className="mt-14">
        <SessionsList />
      </div>
    </section>
  );
};
export default LectureIntro;
