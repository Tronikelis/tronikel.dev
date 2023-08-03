import React, { useState, useEffect } from "react";

export default function YearsOld() {
    const [yearsOld, setYearsOld] = useState(18);

    useEffect(() => {
        const now = new Date();
        const bornOn = new Date(2004, 10, 23);

        const years =
            (now.getTime() - bornOn.getTime()) / (1e3 * 60 * 60 * 24 * 365);

        setYearsOld(years);
    }, []);

    return <p>{yearsOld.toFixed(1)}Y</p>;
}
