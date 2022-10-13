
import Teacher from "../../assets/image/profiles/teacher.jfif";
const AboutTeam = () => {
  const team = {
    professors: [
      {
        name: " دکتر بهرک",
        github: "https://ece.ut.ac.ir/~bahrak",
        src: Teacher,
      },
    ],
  };

  const Card = ({ item, id }) => {
    return (
      <div class="mb-12 text-center" key={id}>
        <a href={item.github} target={"_blank"} rel="noreferrer">
          <img
            src={item.src}
            alt=""
            class="rounded-full w-48 h-48 bg-blue-100"
            style={{
              objectFit: "scale-down",
              objectPosition: "center",
            }}
          />
        </a>

        <p class="font-bold mb-2"> {item.name}</p>
      </div>
    );
  };
  return (
    <div className="my-5">
      <div className="flex items-center justify-center mt-3">
        <div className="grid md:grid-cols-1 sm:grid-cols-12 md:gap-x-4 md:gap-y-1 md:max-w-2xl">
          <div className="col-span-full mb-3">
            <p className="text-xl text-gray-700 text-center"> زیر نظر استاد </p>
          </div>
          {team.professors.map((item, id) => (
            <Card item={item} id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
