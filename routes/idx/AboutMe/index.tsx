import { Card, CardBody } from "@nextui-org/react";
import YearsBetween from "~/components/YearsBetween";

export default function AboutMe() {
    return (
        <Card>
            <CardBody>
                <div className="flex flex-col gap-0">
                    <p className="text-2xl">About me</p>

                    <div className="w-full flex flex-col mt-unit-lg gap-unit-xs">
                        <p>
                            I am{" "}
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
                </div>
            </CardBody>
        </Card>
    );
}
