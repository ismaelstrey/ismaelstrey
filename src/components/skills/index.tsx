import React from "react";

export default function Skills() {
  return (
    <div className="bg-gray-100/30 dark:bg-gray-800/30">
      <div className="container grid gap-4 px-4 py-6 md:py-12 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
  );
}
