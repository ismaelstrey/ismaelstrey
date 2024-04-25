import React from "react";

export default function Skills() {
  return (
    <div className="bg-skils bg-cover">
      <div className="bg-gray-800/90 hover:bg-gray-800/70">
        <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-tl from-yellow-500 to-white text-transparent bg-clip-text">
              My Skills
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4">
                <div className="grid w-1/2">
                  <div />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-1/2">
                  <div />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-1/2">
                  <div />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-1/2">
                  <div />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-1/2">
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
