import { useEffect, useState } from "react";
import yearsBetweenDates from "~/utils/yearsBetweenDates";

type YearsBetweenProps = {
    date1: Date;
    date2: Date;
    def: number;
};

export default function YearsBetween({ def, date1, date2 }: YearsBetweenProps) {
    const [years, setYears] = useState(def);

    useEffect(() => {
        setYears(yearsBetweenDates(date1, date2));
    }, []);

    return <span>{years.toFixed(1)}</span>;
}
