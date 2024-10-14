"use client";

import { changeTheme } from "@/utils/helper";
import { Switch } from "@/components/ui/switch";

export default function addToBag() {
  // default

  return (
    <div className="h-screen grid place-items-center bg-primary">
      <Switch
        onCheckedChange={(checked) =>
          changeTheme(checked ? "theme1" : "theme2")
        }
      />
      <div>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme1")}
        >
          theme 1
        </button>
        <button
          className="py-2 px-8 bg-buttons text-typography m-2"
          onClick={() => changeTheme("theme2")}
        >
          theme 2
        </button>
      </div>
    </div>
  );
}
