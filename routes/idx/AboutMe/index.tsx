import { Card, CardBody } from "@nextui-org/react";
import React from "react";

import YearsBetween from "~/components/YearsBetween";

export default function AboutMe() {
    return (
        <Card>
            <CardBody>
                <div className="flex flex-col gap-unit-lg">
                    <p className="text-2xl">About me</p>

                    <div className="w-full flex flex-col gap-unit-xs">
                        <p>
                            Hey, my name is Donatas and I am a{" "}
                            <YearsBetween
                                def={18}
                                date1={new Date()}
                                date2={new Date(2004, 10, 23)}
                            />{" "}
                            year old guy from Lithuania 🇱🇹.
                        </p>

                        <p>Down to code in 🦀Rust and 🔵Typescript.</p>

                        <p>
                            Approximately been coding for{" "}
                            <YearsBetween
                                def={3}
                                date1={new Date()}
                                date2={new Date(2019, 9, 1)}
                            />{" "}
                            years.
                        </p>
                    </div>

                    <p>
                        Current status: <i>student</i>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
}
