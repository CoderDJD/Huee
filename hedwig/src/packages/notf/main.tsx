import { Bell } from "react-feather";
import NotificationUnit from "../../components/NotificationUnit";

export default function Main() {
  return (
    <div className="flex flex-col items-center w-full scrollbar-thin scrollbar-thumb-accent-disabled scrollbar-thumb-rounded-lg mb-7">
      <article className="relative w-full px-3">
        <div className="flex flex-col flex-1 w-full">
          <div
            className="sticky w-full z-10 bg-dark-400 pt-5 mr-4"
            style={{ top: "0px" }}>
            <div className="flex justify-left items-center mb-5 space-x-2">
              <Bell className="text-accent-default" />
              <h3>Recent Activity</h3>
            </div>
            <div className="flex flex-col flex-1 mb-8">
              <div className="flex flex-col space-y-4">
                <NotificationUnit
                  plat="gh"
                  project="Hoot"
                  content="Issue #5 closed with pull request #6678"
                />
                <NotificationUnit
                  plat="tw"
                  project="Hoot"
                  content="Hey Twitter! We help devs find ontributors for their open source projects."
                />
                <NotificationUnit
                  plat="bmc"
                  project="Hoot"
                  content="Elon Musk donated $5M!"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
