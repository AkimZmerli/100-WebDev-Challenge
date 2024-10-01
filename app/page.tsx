"use client";

import React, { useState } from "react";
import {
  SlSocialSteam,
  SlSocialReddit,
  SlSocialSoundcloud,
  SlSocialVkontakte,
} from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Image from "next/image";
import Rogers from "../components/images/kennyrogers.png";

const ProfileCard = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleFollow = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="h-screen bg-slate-500 flex justify-center items-center">
      <div className="border-4 border-solid border-blue-400 rounded-xl w-96 overflow-hidden relative">
        <div className="bg-white rounded-lg flex flex-col">
          <div className="bg-blue-400 rounded-t-lg flex flex-col items-center pt-8 pb-16">
            <div className="w-24 h-24 bg-gray-400 rounded-full overflow-hidden mb-4">
              <Image
                src={Rogers}
                width={96}
                height={96}
                className="rounded-full"
                objectFit="cover"
                alt="kennyrogers"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">Kenny Rogers</h2>
            <p className="text-sm text-white mt-2">@kennyrogers</p>
          </div>

          <div className="flex justify-center text-2xl p-3 mt-5">
            <SlSocialSteam className="mr-6" style={{ color: "#00308F" }} />
            <SlSocialReddit className="mr-6" style={{ color: "#00308F" }} />
            <SlSocialSoundcloud className="mr-6" style={{ color: "#00308F" }} />
            <SlSocialVkontakte style={{ color: "#00308F" }} />
          </div>

          <div className="text-center p-3">
            Hey guys this is my profile card! I am the greatest country singer
            in the world south of Georgia. Check out my hit song "Highway to the
            Dangerzone".
          </div>

          <div className="flex justify-center p-4">
            <Button
              className="mr-8 bg-blue-500 hover:bg-gray-600"
              onClick={handleFollow}
            >
              Follow
            </Button>
            <Button variant="outline" className="hover:bg-gray-200">
              Unfollow now
            </Button>
          </div>
        </div>

        {showAlert && (
          <Alert className="absolute top-2 right-3 left-2 bg-white-800 border-red-500">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              You are now following Kenny Rogers.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

// ToDo: Adjust alert message
