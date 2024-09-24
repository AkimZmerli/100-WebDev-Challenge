import type { NextPage } from "next";
import {
  SlSocialSteam,
  SlSocialReddit,
  SlSocialSoundcloud,
  SlSocialVkontakte,
} from "react-icons/sl";
import { Button } from "../components/ui/button";
import Link from "next/link";

const ProfileCard: NextPage = () => {
  return (
    <div className="h-screen bg-slate-500 flex justify-center align-middle">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-solid border-red-400 rounded-xl w-96 h-3/4">
        <div className="w-full h-full bg-white rounded-lg">
          <div className="h-1/3 bg-red-300 rounded-lg flex justify-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mt-6"></div>
          </div>
          <div className="mt-6 text-center text-3xl text-bold">
            Kenny Rodgers
            <div className="text-sm text-gray-400 mt-2">
              <p>@kennyrodgers</p>
            </div>
          </div>
          <div className="flex justify-center text-2xl p-3 mt-5">
            <SlSocialSteam className="mr-6" />
            <SlSocialReddit className="mr-6" />
            <SlSocialSoundcloud className="mr-6" />
            <SlSocialVkontakte />
          </div>
          <div className="text-center p-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            iste vero laborum consectetur quas error alias ratione natus!
          </div>
          <div className="flex justify-center p-4">
            <Button variant="destructive" className="mr-8">
              {" "}
              Follow{" "}
            </Button>
            <Button variant="outline"> Unfollow </Button>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
