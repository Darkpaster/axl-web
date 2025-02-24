import React from "react";

export const useLang = () => {
const [lang, setLang] = React.useState<number>(1);
return [lang, setLang];
}