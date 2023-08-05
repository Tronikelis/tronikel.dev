import React from "react";

import InfoCard from "~/components/InfoCard";
import YearsBetween from "~/components/YearsBetween";

export default function AboutMe() {
    return (
        <InfoCard title="About me">
            <p>
                Hey, my name is Donatas and I am a{" "}
                <YearsBetween def={18} date1={new Date()} date2={new Date(2004, 10, 23)} />{" "}
                year old guy from Lithuania 🇱🇹.
            </p>

            <p>Down to code in 🦀Rust and 🔵Typescript.</p>

            <p>
                Approximately been coding for{" "}
                <YearsBetween def={3} date1={new Date()} date2={new Date(2019, 9, 1)} /> years.
            </p>

            <p>I LOVE open source software.</p>

            <p className="mt-unit-xs">
                Current status: <i>student</i>
            </p>
        </InfoCard>
    );
}
