import ProjectUnit from "../../components/ProjectUnit";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}>
            <div className="flex justify-between items-center mb-5">
              <h3>Your Feed</h3>
            </div>
          </div>
          {/* Feed starts */}
          <div className="flex flex-col flex-1 mb-8">
            <div className="flex flex-col space-y-4">
              <ProjectUnit
                name="Hoot"
                liveUrl="https://hoot.vercel.app/"
                description="We help developers gain contributors for thier open source projects. We provide a platform through which we think you can finish your projects easier, and faster."
              />
              <ProjectUnit
                name="Hoot"
                liveUrl="https://hoot.vercel.app/"
                description="We help developers gain contributors for thier open source projects. We provide a platform through which we think you can finish your projects easier, and faster."
              />
              <ProjectUnit
                name="Hoot"
                liveUrl="https://hoot.vercel.app/"
                description="We help developers gain contributors for thier open source projects. We provide a platform through which we think you can finish your projects easier, and faster."
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
