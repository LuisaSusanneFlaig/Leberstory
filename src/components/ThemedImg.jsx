import React, { useMemo, useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

const swapExt = (name) => {
    if (name.endsWith(".png")) return name.replace(/\.png$/, ".jpg");
    if (name.endsWith(".jpg")) return name.replace(/\.jpg$/, ".png");
    return name;
};

export const ThemedImg = ({ name, alt = "", className = "", ...props }) => {
    const { theme } = useTheme();

    const candidates = useMemo(() => {
        const themed = `/themed/${theme}/images/`;
        const altName = swapExt(name);

        return [
            themed + name,
            themed + altName,
            `/src/images/${name}`,
            `/src/images/${altName}`,
        ];
    }, [theme, name]);

    const [idx, setIdx] = useState(0);

    useEffect(() => {
        setIdx(0);
    }, [theme, name]);

    return (
        <img
            src={candidates[idx]}
            alt={alt}
            className={className}
            onError={() => {
                if (idx < candidates.length - 1) setIdx(idx + 1);
            }}
            {...props}
        />
    );
};